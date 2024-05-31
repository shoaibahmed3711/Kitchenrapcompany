import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const SalesCW = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : {
            CategoryName: '',
            ProductName: '',
            Model: '',
            Quantity: '',
            Amount: '',
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
    const [filteredRows, setFilteredRows] = useState([]);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem('rows', JSON.stringify(rows));
    }, [rows]);

    useEffect(() => {
        localStorage.setItem('srNo', srNo.toString());
    }, [srNo]);

    useEffect(() => {
        handleFilter();
    }, [filter, rows]);

    const addEmployee = () => {
        const newEmployee = {
            id: srNo,
            CategoryName: formData.CategoryName,
            ProductName: formData.ProductName,
            Model: formData.Model,
            Quantity: formData.Quantity,
            Amount: formData.Amount,
        };
        setRows([...rows, newEmployee]);
        setSrNo(srNo + 1);
        setFormData({
            CategoryName: '',
            ProductName: '',
            Model: '',
            Quantity: '',
            Amount: '',
        });
        setFormVisible(false); // Close the form after adding employee
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
            CategoryName: '',
            ProductName: '',
            Model: '',
            Quantity: '',
            Amount: '',
        });
        setFormVisible(false); // Close the form after submitting
    };

    const handleDelete = (index) => {
        setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    const handleEdit = (index) => {
        const employeeToEdit = rows[index];
        setFormData(employeeToEdit);
        setEditIndex(index);
        setFormVisible(true); // Open the form for editing
    };

    const toggleFormVisibility = () => {
        setFormVisible((prevVisibility) => !prevVisibility);
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleFilter = () => {
        let filteredData = [];
        if (filter === 'All') {
            filteredData = rows;
        } else if (filter === 'Active' || filter === 'Inactive') {
            filteredData = rows.filter((row) => row.status === filter);
        }
        setFilteredRows(filteredData);
    };

    const handleExport = () => {
        const doc = new jsPDF();
        rows.forEach((row, index) => {
            const yPos = 10 + (index * 10);
            if (row.name) { // Check if row.name is defined
                doc.text(`${row.name} - ${row.code}`, 10, yPos);
            }
        });
        doc.save('employee_table.pdf');
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="absolute shadow-xl right-[1vw] rounded-md top-[12vw] h-[33vw]">
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
                        <img src="/HRM/refresh.png" alt="" />
                    </button>
                    <button className="w-[2vw] bg-red-500 mx-[0.5vw] rounded-md" onClick={handleFilter}>
                        <img src="/HRM/filter.png" alt="" />
                    </button>
                    <button className="w-[2vw] bg-sky-500 mx-[0.5vw] rounded-md" onClick={handleExport}>
                        <img src="/HRM/export.png" alt="" />
                    </button>
                </div>
                <table className="w-[80vw] overflow-y-auto">
                    <thead className="bg-gray-300 w-[80vw]">
                        <tr className="w-[80vw]">
                            <th className="border p-[0.5vw] text-[1vw]">Sr no</th>
                            <th className="border p-[0.5vw] text-[1vw]">Category Name</th>
                            <th className="border p-[0.5vw] text-[1vw]">Product Name</th>
                            <th className="border p-[0.5vw] text-[1vw]">Model</th>
                            <th className="border p-[0.5vw] text-[1vw]">Quantity</th>
                            <th className="border p-[0.5vw] text-[1vw]">Amount</th>
                            <th className="border p-[0.5vw] text-[1vw]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
                        {filteredRows.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.CategoryName}</td> 
                                <td>{row.ProductName}</td> 
                                <td>{row.Model}</td> 
                                <td>{row.Quantity}</td> 
                                <td>{row.Amount}</td>  
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
                <div className="w-[26vw] bg-white shadow-2xl absolute right-0 z-10 top-[0vw] overflow-y-auto rounded-lg ml-4 h-[32vw]">
                    <div className="flex justify-between p-4">
                        <button
                            className="hover:bg-red-500 w-[2vw] bg-white  shadow-lg rounded-md text-white p-[0.3vw]"
                            onClick={toggleFormVisibility}
                        >
                            <img src="/HRM/close.png" alt="" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="overflow-y-auto  p-[1vw] ">
                        <div className="mb-[0.3vw]">
                        Category Name:
                            <input
                                className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
                                type="text"
                                
                                name="CategoryName"
                                value={formData.CategoryName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                        Product Name:
                            <input
                                className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
                                type="text"
                                name="ProductName"
                                value={formData.ProductName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                        Model:
                            <input
                                className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
                                type="text"
                                name="Model"
                                value={formData.Model}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                        Quantity:
                            <input
                                className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
                                type="text"
                                name="Quantity"
                                value={formData.Quantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                        Amount:
                            <input
                                className="p-[0.7vw] text-[1vw] w-[22vw] rounded-md border"
                                type="text"
                                name="Amount"
                                value={formData.Amount}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#E9278E] mt-[0.5vw] text-white p-2 rounded w-full"
                        >
                            {editIndex !== null ? "Edit " : "Add "}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SalesCW;
