import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const ProjectStatus = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
        AddedDate: "",
        Contactno: "",
        ProjectName: "",
        CustomerName: "",
        SiteStatus: "",
        Design: "",
        SalesDesigner: "",
        OutDate: "",
        ActualDate: "",
        DueAmount: "",
        Progress: "",
        };
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [srNo, setSrNo] = useState(() => {
    const savedSrNo = localStorage.getItem('srNo');
    return savedSrNo ? parseInt(savedSrNo) : 1;
  });
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('rows');
    return savedRows ? JSON.parse(savedRows) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('rows', JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    localStorage.setItem('srNo', srNo.toString());
  }, [srNo]);

  const addEmployee = () => {
    const newEmployee = {
      id: srNo,
      name: `Employee ${srNo}`,
    };
    setRows([...rows, newEmployee]);
    setSrNo(srNo + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows[editIndex] = formData;
        return updatedRows;
      });
      setEditIndex(null);
    } else {
      setRows((prevRows) => [...prevRows, formData]);
    }

    setFormData({
      AddedDate: "",
      Contactno: "",
      ProjectName: "",
      CustomerName: "",
      SiteStatus: "",
      Design: "",
      SalesDesigner: "",
      OutDate: "",
      ActualDate: "",
      DueAmount: "",
      Progress: "",
    });

    setFormVisible(false);
  };

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const employeeToEdit = rows[index];
    setFormData(employeeToEdit);
    setEditIndex(index);
    setFormVisible(true);
  };

  const toggleFormVisibility = () => {
    setFormVisible((prevVisibility) => !prevVisibility);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleFilter = () => {
    if (filter === 'Active') {
      setRows((prevRows) => prevRows.filter((row) => row.status === 'Active'));
    } else if (filter === 'Inactive') {
      setRows((prevRows) => prevRows.filter((row) => row.status === 'Inactive'));
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + (index * 10);
      doc.text(`${row.name} - ${row.code}`, 10, yPos);
    });
    doc.save('employee_table.pdf');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const name = row.CustomerName ? row.CustomerName.toLowerCase() : '';
    const status = row.SiteStatus ? row.SiteStatus.toLowerCase() : '';

    if (filter === 'All') {
      return name.includes(searchTerm.toLowerCase());
    } else {
      return (
        status === filter.toLowerCase() &&
        name.includes(searchTerm.toLowerCase())
      );
    }
  });
  return (
    <div className="absolute shadow-xl w-[82vw] right-[1vw] rounded-md top-[4vw] h-[40vw]">
    <div className='flex flex-row m-[1vw] gap-[1vw] items-center image-hover-effect'>
      <div className='w-[3vw]'>
      <img src="/production/status.png" className="image-hover-effect" alt="Leave" />
      </div>
      <h1 className=' text-[2vw] text-[#E9278E]'>Project Status</h1>
      </div>
    <div className="h-[50vw]">
      <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row px-[2vw] items-center">
        <input
          className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
          type="text"
          placeholder="Search by Customer Name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="p-[0.5vw] text-[1vw] w-[13vw] rounded-md mx-[1vw]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="No Request">No Request</option>
          <option value="Site is Ready">Site is Ready</option>
          <option value="Pending">Pending</option>
          <option value="Cancel">Cancel</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          className="w-[2vw] bg-orange-500 mx-[0.5vw] rounded-md"
          onClick={handleRefresh}
        >
          <img src="/HRM/refresh.png" alt="" />
        </button>
        <button
          className="w-[2vw] bg-red-500 mx-[0.5vw] rounded-md"
          onClick={handleFilter}
        >
          <img src="/HRM/filter.png" alt="" />
        </button>
        <button
          className="w-[2vw] bg-sky-500 mx-[0.5vw] rounded-md"
          onClick={handleExport}
        >
          <img src="/HRM/export.png" alt="" />
        </button>
      </div>
      <table className="w-[80vw] overflow-y-auto">
        <thead className="bg-gray-300 w-[80vw]">
          <tr className="w-[80vw]">
            <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
            <th className="border p-[0.5vw] text-[1vw]">Added Date</th>
            <th className="border p-[0.5vw] text-[1vw]">Contact #</th>
            <th className="border p-[0.5vw] text-[1vw]">Project Name</th>
            <th className="border p-[0.5vw] text-[1vw]">Customer Name</th>
            <th className="border p-[0.5vw] text-[1vw]">Site Status</th>
            <th className="border p-[0.5vw] text-[1vw]">Design</th>
            <th className="border p-[0.5vw] text-[1vw]">Sales Designer</th>
            <th className="border p-[0.5vw] text-[1vw]">Out Date</th>
            <th className="border p-[0.5vw] text-[1vw]">Actual Date</th>
            <th className="border p-[0.5vw] text-[1vw]">Due Amount</th>
            <th className="border p-[0.5vw] text-[1vw]">Progress</th>
            <th className="border p-[0.5vw] text-[1vw]">Actions</th>
          </tr>
        </thead>
        <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
          {filteredRows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.AddedDate}</td>
              <td>{row.Contactno}</td>
              <td>{row.ProjectName}</td>
              <td>{row.CustomerName}</td>
              <td>{row.SiteStatus}</td>
              <td>{row.Design}</td>
              <td>{row.SalesDesigner}</td>
              <td>{row.OutDate}</td>
              <td>{row.ActualDate}</td>
              <td>{row.DueAmount}</td>
              <td>{row.Progress}</td>
              <td className="p-[0.1vw]">
                <button
                  className="hover:bg-blue-500 p-2 rounded-full mb-2 mr-[0.6vw]"
                  onClick={() => handleEdit(index)}
                >
                  <img src="/HRM/edit.png" className="w-[1.4vw]" alt="" />
                </button>
                <button
                  className="hover:bg-red-500 p-2 rounded-full"
                  onClick={() => handleDelete(index)}
                >
                  <img src="/HRM/Trash.png" className="w-[1.4vw]" alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {!isFormVisible && (
      <div className="absolute bottom-[1vw] left-[1vw]">
        <button className="p-[1vw]  rounded" onClick={toggleFormVisibility}>
          <img src="/HRM/form.png" className="w-[3vw]" alt="" />
        </button>
      </div>
    )}

    {isFormVisible && (
      <div className="w-[26vw] bg-white shadow-2xl absolute right-0 z-10 top-[0vw] overflow-y-auto rounded-lg ml-4 h-[32vw]">
        <div className="flex justify-between p-4">
          <button
            className="hover:bg-red-500  shadow-lg rounded-md text-white p-[0.3vw]"
            onClick={toggleFormVisibility}
          >
            <img src="/HRM/close.png" className="w-[2vw]" alt="" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="overflow-y-auto  p-[1vw] ">
          <div className="mb-[0.3vw]">
            <h1>Added Date:</h1>
            <input
              type="date"
              name="AddedDate"
              value={formData.AddedDate}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Contact Number:</h1>
            <input
              type="text"
              name="Contactno"
              value={formData.Contactno}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Project Name:</h1>
            <input
              type="text"
              name="ProjectName"
              value={formData.ProjectName}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Customer Name:</h1>
            <input
              type="text"
              name="CustomerName"
              value={formData.CustomerName}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Site Status:</h1>
            <select
              name="SiteStatus"
              value={formData.SiteStatus}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            >
              <option value="No Request">No Request</option>
              <option value="Site is Ready">Site is Ready</option>
            </select>
          </div>
          <div className="mb-[0.3vw]">
            <h1>Design:</h1>
            <input
              type="text"
              name="Design"
              value={formData.Design}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Sales Designer:</h1>
            <input
              type="text"
              name="SalesDesigner"
              value={formData.SalesDesigner}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Out Date:</h1>
            <input
              type="date"
              name="OutDate"
              value={formData.OutDate}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Actual Date:</h1>
            <input
              type="date"
              name="ActualDate"
              value={formData.ActualDate}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Due Amount:</h1>
            <input
              type="text"
              name="DueAmount"
              value={formData.DueAmount}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            />
          </div>
          <div className="mb-[0.3vw]">
            <h1>Progress:</h1>
            <select
              name="Progress"
              value={formData.Progress}
              onChange={handleChange}
              className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
            >
              <option value="Installed">Installed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#E9278E] mt-[0.5vw] text-white p-2 rounded w-full"
          >
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    )}
  </div>
  );
}

export default ProjectStatus;
