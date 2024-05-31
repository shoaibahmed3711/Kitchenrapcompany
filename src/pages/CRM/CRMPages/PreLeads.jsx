import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const PreLeads = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
    contactDate: "",
    name: "",
    email: "",
    PhoneNo: "",
    Source: "",
    City: "",
    Address: "",
    BranchName: "",
    status: "",
  }
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
      contactDate: "",
      name: "",
      email: "",
      PhoneNo: "",
      Source: "",
      City: "",
      Address: "",
      BranchName: "",
      status: "",
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
    const Branchname = row.BranchName ? row.BranchName.toLowerCase() : '';
    const status = row.status ? row.status.toLowerCase() : '';

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
          <img src="/CRM/pages/prelieads.png" className="image-hover-effect" alt="Leave" />
        </div>
        <h1 className=' text-[2vw] text-[#E9278E]'>Pre Leads</h1>
      </div>
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row overflow-y-auto px-[2vw] items-center">
          <input
            className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
            type="text"
            placeholder="Search by name"
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
            <tr className="w-[70vw]">
              <th className="border p-[0.2vw] text-[0.8vw]">Sr no</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Contact date</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Name</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Email</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Phone no</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Source</th>
              <th className="border p-[0.2vw] text-[0.8vw]">City</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Address</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Branch Name</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Status</th>
              <th className="border p-[0.2vw] text-[0.8vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {rows.map((row, index) => (
              <tr className="text-[0.8vw]" key={index}>
                <td className="text-[0.8vw] p-[0.4vw]">{row.id}</td>
                <td className="text-[0.8vw] p-[0.4vw]">{row.contactDate}</td>
                <td className="text-[0.8vw] p-[0.4vw]">{row.name}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.email}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.PhoneNo}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.Source}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.City}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.Address}</td>
                <td className="text-[0.8vw] p-[0.2vw]">{row.BranchName}</td>
                <td className="text-[0.8vw] p-[0.5vw]">{row.status}</td>
                <td className="text-[0.8vw] p-[0.2vw]">
                  <button
                    className="hover:bg-blue-500 p-[0.3vw] rounded-full mb-2 mr-[0.2vw]"
                    onClick={() => handleEdit(index)}
                  >
                    <img
                      src="/HRM/edit.png"
                      className="w-[1.4vw]"
                      alt=""
                    />
                  </button>
                  <button
                    className="hover:bg-red-500 p-[0.3vw] rounded-full"
                    onClick={() => handleDelete(index)}
                  >
                    <img
                      src="/HRM/Trash.png"
                      className="w-[1.4vw]"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isFormVisible && (
        <div className="absolute bottom-4 left-4">
          <button
            className="w-[4vw] text-white p-2 rounded"
            onClick={toggleFormVisibility}
          >
            <img src="/HRM/form.png" alt="" />
          </button>
        </div>
      )}

      {isFormVisible && (
        <div className="w-[30vw] bg-white shadow-lg absolute right-0 z-10 top-0 overflow-y-auto rounded-lg ml-4 h-[35vw]">
          <div className="flex justify-between p-[0.2vw]">
            <button
              className="hover:bg-red-500  bg-white shadow-lg rounded-[0.7vw] text-white p-[1vw]"
              onClick={toggleFormVisibility}
            >
              <img src="/HRM/close.png" className="w-[1.4vw]" alt="" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto  p-[1vw]  ">
            <div className="mb-[0.3vw]">
              <label htmlFor="contactDate" className="block mb-1">
                Contact Date:
              </label>
              <input
                type="date"
                id="contactDate"
                name="contactDate"
                value={formData.contactDate}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="name" className="block mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="PhoneNo" className="block mb-1">
                Phone No:
              </label>
              <input
                type="tel"
                id="PhoneNo"
                name="PhoneNo"
                value={formData.PhoneNo}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Source" className="block mb-1">
                Source:
              </label>
              <select
                id="Source"
                name="Source"
                value={formData.Source}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="">Select Source</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="City" className="block mb-1">
                City:
              </label>
              <input
                type="text"
                id="City"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Address" className="block mb-1">
                Address:
              </label>
              <textarea
                id="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              ></textarea>
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="BranchName" className="block mb-1">
                Branch Name:
              </label>
              <input
                type="text"
                id="BranchName"
                name="BranchName"
                value={formData.BranchName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="status" className="block mb-1">
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#E9278E] text-white p-2 rounded w-full"
            >
              {editIndex !== null ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PreLeads;
