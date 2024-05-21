import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const ProductionApproval = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      RequestType: '',
      EntryDate: '',
      BranchName: '',
      ApprovalType: '',
      Project: '',
      Reason: '',
      Remark: '',
      ActionDate: '',
      status: '',
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
        updatedRows[editIndex] = { ...formData, id: updatedRows[editIndex].id };
        return updatedRows;
      });
      setEditIndex(null);
    } else {
      setRows((prevRows) => [...prevRows, { ...formData, id: srNo }]);
      setSrNo(srNo + 1);
    }

    setFormData({
      RequestType: '',
      EntryDate: '',
      BranchName: '',
      ApprovalType: '',
      Project: '',
      Reason: '',
      Remark: '',
      ActionDate: '',
      status: '',
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
    // This function will filter the rows based on their status
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + (index * 10);
      doc.text(`ID: ${row.id}, Request Type: ${row.RequestType}, Branch: ${row.BranchName}, Status: ${row.status}`, 10, yPos);
    });
    doc.save('employee_table.pdf');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const name = row.name ? row.name.toLowerCase() : '';
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
          <img src="/Sales/Salespages/Pricelist.png" className="image-hover-effect" alt="Leave" />
          </div>
          <h1 className=' text-[2vw] text-[#E9278E]'>Production Approval</h1>
          </div>
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row px-[2vw] items-center"> 
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
          <button className="w-[2vw] bg-orange-500 mx-[0.5vw] rounded-md" onClick={handleRefresh}>
            <img src="public/HRM/refresh.png" alt="" />
          </button>
          <button className="w-[2vw] bg-red-500 mx-[0.5vw] rounded-md" onClick={handleFilter}>
            <img src="public/HRM/filter.png" alt="" />
          </button>
          <button className="w-[2vw] bg-sky-500 mx-[0.5vw] rounded-md" onClick={handleExport}>
            <img src="public/HRM/export.png" alt="" />
          </button>
        </div>
        <table className="w-[80vw] overflow-y-auto">
          <thead className="bg-gray-300 w-[80vw]">
            <tr className="w-[80vw]">
              <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border p-[0.5vw] text-[1vw]">Request Type</th>
              <th className="border p-[0.5vw] text-[1vw]">Entry Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Branch</th>
              <th className="border p-[0.5vw] text-[1vw]">Approval Type</th>
              <th className="border p-[0.5vw] text-[1vw]">Project</th>
              <th className="border p-[0.5vw] text-[1vw]">Reason</th>
              <th className="border p-[0.5vw] text-[1vw]">Remark</th>
              <th className="border p-[0.5vw] text-[1vw]">Action Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.RequestType}</td>
                <td>{row.EntryDate}</td>
                <td>{row.BranchName}</td>
                <td>{row.ApprovalType}</td>
                <td>{row.Project}</td>
                <td>{row.Reason}</td>
                <td>{row.Remark}</td>
                <td>{row.ActionDate}</td>
                <td className="p-[0.1vw]">
                  <button
                    className="hover:bg-blue-500 p-2 rounded-full mb-2 mr-[0.6vw]"
                    onClick={() => handleEdit(index)}>
                    <img src="/HRM/edit.png" className="w-[1.4vw]" alt="edit" />
                  </button>
                  <button
                    className="hover:bg-red-500 p-2 rounded-full"
                    onClick={() => handleDelete(index)}
                  >
                    <img src="/HRM/Trash.png" className="w-[1.4vw]" alt="delete" />
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
            <img src="/HRM/form.png" className='w-[3vw]' alt="form" />
          </button>
        </div>
      )}

      {isFormVisible && (
        <div className="w-[26vw] bg-white shadow-2xl absolute right-0 z-10 top-[0vw] overflow-y-auto rounded-lg ml-4 h-[32vw]">
          <div className="flex justify-between p-4">
            <button
              className="hover:bg-red-500 h-[2vw] shadow-lg rounded-md text-white p-[0.3vw]"
              onClick={toggleFormVisibility}
            >
              <img src="/HRM/close.png" className='w-[2vw]' alt="close" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto  p-[1vw] ">
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="RequestType"
                value={formData.RequestType}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Request Type"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="date"
                name="EntryDate"
                value={formData.EntryDate}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="BranchName"
                value={formData.BranchName}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Branch Name"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="ApprovalType"
                value={formData.ApprovalType}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Approval Type"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Project"
                value={formData.Project}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Project"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Reason"
                value={formData.Reason}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Reason"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Remark"
                value={formData.Remark}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
                placeholder="Remark"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="date"
                name="ActionDate"
                value={formData.ActionDate}
                onChange={handleChange}
                className="p-[0.5vw] w-[25vw] text-[1vw] rounded-md"
              />
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
};

export default ProductionApproval;
