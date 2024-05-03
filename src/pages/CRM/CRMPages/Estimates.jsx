import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const Estimates = () => {
  const [formData, setFormData] = useState({
    EntryDate: "",
    Estimate: "",
    Customer: "",
    Total: "",
    EstimateDate: "",
    DueDate: "",
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
      Estimate: formData.Estimate,
      Customer: formData.Customer,
      Total: formData.Total,
      EstimateDate: formData.EstimateDate,
      DueDate: formData.DueDate,
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
      Estimate: "",
      Customer: "",
      Total: "",
      EstimateDate: "",
      DueDate: "",
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
      setRows((prevRows) => prevRows.filter((row) => row.status === "Inactive"));
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.Customer} - ${row.status}`, 10, yPos);
    });
    doc.save("employee_table.pdf");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    if (filter === "All") {
      return (
        row.Customer &&
        row.Customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return (
        row.status &&
        row.status === filter &&
        row.Customer &&
        row.Customer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="absolute shadow-xl right-[1vw] rounded-md top-[4vw] h-[40vw]">
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
            <tr className="w-[80vw]">
              <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border p-[0.5vw] text-[1vw]">Entry Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Estimate #</th>
              <th className="border p-[0.5vw] text-[1vw]">Customer/Lead</th>
              <th className="border p-[0.5vw] text-[1vw]">Total</th>
              <th className="border p-[0.5vw] text-[1vw]">Estimate Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Due Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Status</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.EntryDate}</td>
                <td>{row.Estimate}</td>
                <td>{row.Customer}</td>
                <td>{row.Total}</td>
                <td>{row.EstimateDate}</td>
                <td>{row.DueDate}</td>
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
                    <img src="/HRM/Trash.png" className="w-[1.4vw]" alt=""/>
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
              {/* Entry Date input field */}
              <label htmlFor="EntryDate" className="block mb-1">
                Entry Date:
              </label>
              <input
                type="text"
                id="EntryDate"
                name="EntryDate"
                value={formData.EntryDate}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Estimate Number input field */}
              <label htmlFor="Estimate" className="block mb-1">
                Estimate #:
              </label>
              <input
                type="text"
                id="Estimate"
                name="Estimate"
                value={formData.Estimate}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Customer/Lead input field */}
              <label htmlFor="Customer" className="block mb-1">
                Customer/Lead:
              </label>
              <input
                type="text"
                id="Customer"
                name="Customer"
                value={formData.Customer}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Total input field */}
              <label htmlFor="Total" className="block mb-1">
                Total:
              </label>
              <input
                type="text"
                id="Total"
                name="Total"
                value={formData.Total}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Estimate Date input field */}
              <label htmlFor="EstimateDate" className="block mb-1">
                Estimate Date:
              </label>
              <input
                type="text"
                id="EstimateDate"
                name="EstimateDate"
                value={formData.EstimateDate}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Due Date input field */}
              <label htmlFor="DueDate" className="block mb-1">
                Due Date:
              </label>
              <input
                type="text"
                id="DueDate"
                name="DueDate"
                value={formData.DueDate}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                placeholder="MM/DD/YYYY"
              />
            </div>
            <div className="mb-[0.3vw]">
              {/* Status input field */}
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
              className="bg-[#E9278E] text-white p-2 rounded w-full"
            >
              {editIndex !== null ? "Edit" : "Add "}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Estimates;
