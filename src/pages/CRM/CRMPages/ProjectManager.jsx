import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const ProjectManager = () => {
  const [formData, setFormData] = useState({
    EntryDate: "",
    ProjectTitle: "",
    Releatedto: "",
    CustomerLead: "",
    Contentno: "",
    status: "",
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [srNo, setSrNo] = useState(1);
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedRows = localStorage.getItem("rows");
    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const addEmployee = () => {
    const newEmployee = {
      id: srNo,
      EntryDate: formData.EntryDate,
      ProjectTitle: formData.ProjectTitle,
      Releatedto: formData.Releatedto,
      CustomerLead: formData.CustomerLead,
      Contentno: formData.Contentno,
      status: formData.status,
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
      addEmployee();
    }

    setFormData({
      EntryDate: "",
      ProjectTitle: "",
      Releatedto: "",
      CustomerLead: "",
      Contentno: "",
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
    if (filter === "Active") {
      setRows((prevRows) => prevRows.filter((row) => row.status === "Active"));
    } else if (filter === "Inactive") {
      setRows((prevRows) =>
        prevRows.filter((row) => row.status === "Inactive")
      );
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.ProjectTitle} - ${row.status}`, 10, yPos);
    });
    doc.save("employee_table.pdf");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    if (filter === "All") {
      return (
        row.ProjectTitle &&
        row.ProjectTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return (
        row.status &&
        row.status === filter &&
        row.ProjectTitle &&
        row.ProjectTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="absolute shadow-xl w-[82vw] right-[1vw] rounded-md top-[4vw] h-[40vw]">
    <div className='flex flex-row m-[1vw] gap-[1vw] items-center image-hover-effect'>
      <div className='w-[3vw]'>
      <img src="/CRM/pages/projectmanager.png" className="image-hover-effect" alt="Leave" />
      </div>
      <h1 className=' text-[2vw] text-[#E9278E]'>Project Manager</h1>
      </div>
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row overflow-y-auto px-[2vw] items-center">
          <input
            className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
            type="text"
            placeholder="Search by Project Title"
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
            <tr className="w-[80vw]">
              <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border p-[0.5vw] text-[1vw]">Entry Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Project Title</th>
              <th className="border p-[0.5vw] text-[1vw]">Releated to</th>
              <th className="border p-[0.5vw] text-[1vw]">Customer/Lead</th>
              <th className="border p-[0.5vw] text-[1vw]">Content no</th>
              <th className="border p-[0.5vw] text-[1vw]">Status</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.EntryDate}</td>
                <td>{row.ProjectTitle}</td>
                <td>{row.Releatedto}</td>
                <td>{row.CustomerLead}</td>
                <td>{row.Contentno}</td>
                <td>
                  <select
                    className="p-[1vw] text-[1vw] w-[9vw] rounded-md border"
                    value={row.status}
                    onChange={(e) =>
                      handleChange({
                        target: { name: "status", value: e.target.value },
                      })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
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
        <div className="w-[20vw] bg-white shadow-lg absolute right-0 z-10 top-0 overflow-y-auto rounded-lg ml-4 h-[35vw]">
          <div className="flex justify-between p-4">
            <button
             className="hover:bg-red-500  bg-white shadow-lg rounded-[0.7vw] text-white p-[1vw]"
              onClick={toggleFormVisibility}
            >
              <img src="/HRM/close.png" className="w-[1.4vw]" alt="" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto p-[1vw] ">
            <div className="mb-[0.3vw]">
              <label htmlFor="EntryDate" className="block mb-1">
                Entry Date:
              </label>
              <input
                type="date"
                id="EntryDate"
                name="EntryDate"
                value={formData.EntryDate}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="ProjectTitle" className="block mb-1">
                Project Title:
              </label>
              <input
                type="text"
                id="ProjectTitle"
                name="ProjectTitle"
                value={formData.ProjectTitle}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Releatedto" className="block mb-1">
                Releated to:
              </label>
              <select
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
                id="Releatedto"
                name="Releatedto"
                value={formData.Releatedto}
                onChange={handleChange}
              >
                <option value="Customer">Customer</option>
                <option value="Lead">Lead</option>
              </select>
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="CustomerLead" className="block mb-1">
                Customer/Lead:
              </label>
              <input
                type="text"
                id="CustomerLead"
                name="CustomerLead"
                value={formData.CustomerLead}
                onChange={handleChange}
                className="p-[1vw] text-[1vw] w-[13vw] rounded-md border"
              />
            </div>
            <div className="mb-[0.3vw]">
              <label htmlFor="Contentno" className="block mb-1">
                Content no:
              </label>
              <input
                type="text"
                id="Contentno"
                name="Contentno"
                value={formData.Contentno}
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded w-full"
            >
              {editIndex !== null ? "Edit Employee" : "Add Employee"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectManager;
