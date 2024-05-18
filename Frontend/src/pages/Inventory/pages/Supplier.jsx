import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const Supplier = () => {
  // State for form data
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          AddedDate: "",
          Suppliername: "",
          Address: "",
          Mobileno: "",
          Email: "",
          Category: "",
        };
  });

  // State for form visibility
  const [isFormVisible, setFormVisible] = useState(false);

  // State for editing index
  const [editIndex, setEditIndex] = useState(null);

  // State for serial number
  const [srNo, setSrNo] = useState(() => {
    const savedSrNo = localStorage.getItem("srNo");
    return savedSrNo ? parseInt(savedSrNo) : 1;
  });

  // State for table rows
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem("rows");
    return savedRows ? JSON.parse(savedRows) : [];
  });

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State for filtering
  const [filter, setFilter] = useState("All");

  // Effect to store form data in local storage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Effect to store table rows in local storage
  useEffect(() => {
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  // Effect to store serial number in local storage
  useEffect(() => {
    localStorage.setItem("srNo", srNo.toString());
  }, [srNo]);

  // Function to add a new employee
  const addEmployee = () => {
    const newEmployee = {
      id: srNo,
      AddedDate: formData.AddedDate,
      Suppliername: formData.Suppliername,
      Address: formData.Address,
      Mobileno: formData.Mobileno,
      Email: formData.Email,
      Category: formData.Category,
    };
    setRows([...rows, newEmployee]);
    setSrNo(srNo + 1);
  };

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
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

    // Reset form data and hide form
    setFormData({
      AddedDate: "",
      Suppliername: "",
      Address: "",
      Mobileno: "",
      Email: "",
      Category: "",
    });
    setFormVisible(false);
  };

  // Function to handle delete action
  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  // Function to handle edit action
  const handleEdit = (index) => {
    const employeeToEdit = rows[index];
    setFormData(employeeToEdit);
    setEditIndex(index);
    setFormVisible(true);
  };

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setFormVisible((prevVisibility) => !prevVisibility);
  };

  const handleFilter = () => {
    if (filter === 'Active') {
      setRows((prevRows) => prevRows.filter((row) => row.status === 'Active'));
    } else if (filter === 'Inactive') {
      setRows((prevRows) => prevRows.filter((row) => row.status === 'Inactive'));
    }
  };
  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload();
  };

  // Function to handle export as PDF
  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.Suppliername} - ${row.Address}`, 10, yPos);
    });
    doc.save("supplier_table.pdf");
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to filter rows based on search term and filter option
  const filteredRows = rows.filter((row) => {
    const Category = row.Category ? row.Category.toLowerCase() : "";

    if (filter === "All") {
      return Category.includes(searchTerm.toLowerCase());
    } else {
      return Category.includes(searchTerm.toLowerCase());
    }
  });

  return (
    <div className="absolute shadow-xl right-[1vw] rounded-md top-[4vw] h-[42vw]">
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row px-[2vw] items-center">
          {/* Search input */}
          <input
            className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
            type="text"
            placeholder="Search by Category"
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* Filter select */}
          <select
            className="p-[0.5vw] text-[1vw] w-[13vw] rounded-md mx-[1vw]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
          </select>
          {/* Refresh button */}
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
          {/* Export button */}
          <button
            className="w-[2vw] bg-sky-500 mx-[0.5vw] rounded-md"
            onClick={handleExport}
          >
           <img src="/HRM/export.png" alt="" />
          </button>
        </div>
        {/* Supplier table */}
        <table className="w-[80vw] overflow-y-auto">
          <thead className="bg-gray-300 w-[80vw]">
            <tr className="w-[80vw]">
              <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
              <th className="border p-[0.5vw] text-[1vw]">Added Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Supplier name</th>
              <th className="border p-[0.5vw] text-[1vw]">Address</th>
              <th className="border p-[0.5vw] text-[1vw]">Mobile no</th>
              <th className="border p-[0.5vw] text-[1vw]">Email</th>
              <th className="border p-[0.5vw] text-[1vw]">Category</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.AddedDate}</td>
                <td>{row.Suppliername}</td>
                <td>{row.Address}</td>
                <td>{row.Mobileno}</td>
                <td>{row.Email}</td>
                <td>{row.Category}</td>
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
            {/* Form inputs */}
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="AddedDate"
                value={formData.AddedDate}
                onChange={handleChange}
                placeholder="Enter Added Date"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Suppliername"
                value={formData.Suppliername}
                onChange={handleChange}
                placeholder="Enter Supplier Name"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Mobileno"
                value={formData.Mobileno}
                onChange={handleChange}
                placeholder="Enter Mobile No"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-[0.3vw]">
              <input
                type="text"
                name="Category"
                value={formData.Category}
                onChange={handleChange}
                placeholder="Enter Category"
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

export default Supplier;
