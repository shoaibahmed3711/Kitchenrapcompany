import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const AfterSales = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
        ComplainedDate: "",
        Complainedno: "",
        CustomerName: "",
        Assigned: "",
        Department: "",
        Step: "",
        EndDate: "",
        ComplainedStatus: "",
        status: "",
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
        updatedRows[editIndex] = { ...formData, id: rows[editIndex].id };
        return updatedRows;
      });
      setEditIndex(null);
    } else {
      setRows((prevRows) => [...prevRows, { ...formData, id: srNo }]);
      setSrNo(srNo + 1);
    }

    setFormData({
      ComplainedDate: "",
    Complainedno: "",
    CustomerName: "",
    Assigned: "",
    Department: "",
    Step: "",
    EndDate: "",
    ComplainedStatus: "",
    status: "",
    });

    setFormVisible(false);
  };

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const itemToEdit = rows[index];
    setFormData(itemToEdit);
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
      setRows((prevRows) => prevRows.filter((row) => row.EditApprovalStatus === 'Active'));
    } else if (filter === 'Inactive') {
      setRows((prevRows) => prevRows.filter((row) => row.EditApprovalStatus === 'Inactive'));
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.ReferenceNo} - ${row.InvoiceNo}`, 10, yPos);
    });
    doc.save('purchase_table.pdf');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const branchName = row.BranchName ? row.BranchName.toLowerCase() : '';
    const status = row.EditApprovalStatus ? row.EditApprovalStatus.toLowerCase() : '';
    const searchTermLower = searchTerm.toLowerCase();

    if (filter === 'All') {
      return branchName.includes(searchTermLower);
    } else {
      return status === filter.toLowerCase() && branchName.includes(searchTermLower);
    }
  });

  return (
    <div className="absolute shadow-xl w-[82vw] right-[1vw] rounded-md top-[4vw] h-[40vw]">
    <div className='flex flex-row m-[1vw] gap-[1vw] items-center image-hover-effect'>
      <div className='w-[3vw]'>
      <img src="/CRM/pages/After.png" className="image-hover-effect" alt="Leave" />
      </div>
      <h1 className=' text-[2vw] text-[#E9278E]'>After Sales</h1>
      </div>
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row px-[2vw] items-center">
          <input
            className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
            type="text"
            placeholder="Search by Branch name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="p-[0.5vw] text-[1vw] w-[13vw] rounded-md mx-[1vw]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button
            className="w-[2vw] bg-orange-500 mx-[0.5vw] rounded-md"
            onClick={handleRefresh}
          >
            <img src="/HRM/refresh.png" alt="refresh" />
          </button>
          <button
            className="w-[2vw] bg-red-500 mx-[0.5vw] rounded-md"
            onClick={handleFilter}
          >
            <img src="/HRM/filter.png" alt="filter" />
          </button>
          <button
            className="w-[2vw] bg-sky-500 mx-[0.5vw] rounded-md"
            onClick={handleExport}
          >
            <img src="/HRM/export.png" alt="export" />
          </button>
        </div>
        <table className="w-[80vw] overflow-y-auto">
          <thead className="bg-gray-300 w-[80vw]">
            <tr className="w-[80vw]">
            <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border p-[0.5vw] text-[1vw]">Complained Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Complained no</th>
              <th className="border p-[0.5vw] text-[1vw]">Customer Name</th>
              <th className="border p-[0.5vw] text-[1vw]">Assigned To</th>
              <th className="border p-[0.5vw] text-[1vw]">Department</th>
              <th className="border p-[0.5vw] text-[1vw]">Step</th>
              <th className="border p-[0.5vw] text-[1vw]">End Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Complained Status</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                 <td>{index + 1}</td>
                <td>{row.ComplainedDate}</td>
                <td>{row.Complainedno}</td>
                <td>{row.CustomerName}</td>
                <td>{row.Assigned}</td>
                <td>{row.Department}</td>
                <td>{row.Step}</td>
                <td>{row.EndDate}</td>
                <td>{row.ComplainedStatus}</td>
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
          <button className="p-[1vw] rounded" onClick={toggleFormVisibility}>
            <img src="/HRM/form.png" className="w-[3vw]" alt="form" />
          </button>
        </div>
      )}

      {isFormVisible && (
        <div className="w-[26vw] bg-white shadow-2xl absolute right-0 z-10 top-[0vw] overflow-y-auto rounded-lg ml-4 h-[32vw]">
          <div className="flex justify-between p-4">
            <button
              className="hover:bg-red-500 shadow-lg rounded-md text-white p-[0.3vw]"
              onClick={toggleFormVisibility}
            >
              <img src="/HRM/close.png" className="w-[2vw]" alt="close" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto p-[1vw] ">
            <div className="mb-[0.3vw]">
              <label htmlFor="ComplainedDate" className="block mb-1">
                Complained Date:
              </label>
              <input
                type="date"
                id="ComplainedDate"
                name="ComplainedDate"
                value={formData.ComplainedDate}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Complainedno" className="block mb-1">
                Complained No:
              </label>
              <input
                type="text"
                id="Complainedno"
                name="Complainedno"
                value={formData.Complainedno}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="CustomerName" className="block mb-1">
                Customer Name:
              </label>
              <input
                type="text"
                id="CustomerName"
                name="CustomerName"
                value={formData.CustomerName}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Assigned" className="block mb-1">
                Assigned To:
              </label>
              <input
                type="text"
                id="Assigned"
                name="Assigned"
                value={formData.Assigned}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Department" className="block mb-1">
                Department:
              </label>
              <input
                type="text"
                id="Department"
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Step" className="block mb-1">
                Step:
              </label>
              <input
                type="text"
                id="Step"
                name="Step"
                value={formData.Step}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="EndDate" className="block mb-1">
                End Date:
              </label>
              <input
                type="date"
                id="EndDate"
                name="EndDate"
                value={formData.EndDate}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
            <label htmlFor="ComplainedStatus" className="block mb-1">
                  Complained Status:
                </label>
                <input
                  type="text"
                  id="ComplainedStatus"
                  name="ComplainedStatus"
                  value={formData.ComplainedStatus}
                  onChange={handleChange}
                  className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
                />
              </div>
              <div className="mb-[0.3vw]">
                <label htmlFor="status" className="block mb-1">
                  Status:
                </label>
                <select
                  className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Complete">Complete</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-[#E9278E] text-white p-2 rounded w-full"
              >
                {editIndex !== null ? "Edit Employee" : "Add Employee"}
              </button>
            </form>
        </div>
      )}
    </div>
  );
};

export default AfterSales;
