import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const SalesPriceList = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : {
          EntryDate: "",
          MainItem: '',
          ItemSize: '',
          SalesPrice: '',
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
    
    const handleFileChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            profilePic: e.target.files[0],
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
            EntryDate: "",
            MainItem: '',
            ItemSize: '',
            SalesPrice: '',
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
        // Check if row.name and row.status are defined before accessing them
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
          <h1 className=' text-[2vw] text-[#E9278E]'>Sales Price List</h1>
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
                            <th className="border p-[0.5vw] text-[1vw]">Entry Date</th>
                            <th className="border p-[0.5vw] text-[1vw]">Main Item</th>
                            <th className="border p-[0.5vw] text-[1vw]">Item Size</th>
                            <th className="border p-[0.5vw] text-[1vw]">Sales Price</th>
                            <th className="border p-[0.5vw] text-[1vw]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
                        {filteredRows.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.EntryDate}</td>
                                <td>{row.MainItem}</td> {/* Main item will be shown */}
                                <td>{row.ItemSize}</td> {/* Item Size will be shown */}
                                <td>{row.SalesPrice}</td> {/* Sales Price will be shown */}
                                <td className="p-[0.1vw]">
                                    <button
                                        className="hover:bg-blue-500 p-2 rounded-full mb-2 mr-[0.6vw]"
                                        onClick={() => handleEdit(index)}>
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
                        <img src="/HRM/form.png" className='w-[3vw]' alt="" />
                    </button>
                </div>
            )}

            {isFormVisible && (
                <div className="w-[26vw] bg-white shadow-2xl absolute right-0 z-10 top-[0vw] overflow-y-auto rounded-lg ml-4 h-[32vw]">
                    <div className="flex justify-between p-4">
                        <button
                            className="hover:bg-red-500 h-[2vw] shadow-lg rounded-md text-white "
                            onClick={toggleFormVisibility}
                        >
                            <img src="/HRM/close.png" className='w-[2vw]' alt="" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="overflow-y-auto  p-[1vw] ">
                        <div className="mb-[0.3vw]">
                            <label htmlFor="EntryDate" className="block mb-[0.3vw] text-[1vw]">
                                Entry Date:
                            </label>
                            <input
                                type="date"
                                id="EntryDate"
                                name="EntryDate"
                                value={formData.EntryDate}
                                onChange={handleChange}
                                className='border border-black p-[0.3vw] rounded-md w-[20vw]'
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                            <label htmlFor="MainItem" className="block mb-[0.3vw] text-[1vw]">
                                Main Item:
                            </label>
                            <input
                                type="text"
                                id="MainItem"
                                name="MainItem"
                                value={formData.MainItem}
                                onChange={handleChange}
                                className='border border-black p-[0.3vw] rounded-md w-[20vw]'
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                            <label htmlFor="ItemSize" className="block mb-[0.3vw] text-[1vw]">
                                Item Size:
                            </label>
                            <input
                                type="text"
                                id="ItemSize"
                                name="ItemSize"
                                value={formData.ItemSize}
                                onChange={handleChange}
                                className='border border-black p-[0.3vw] rounded-md w-[20vw]'
                            />
                        </div>
                        <div className="mb-[0.3vw]">
                            <label htmlFor="SalesPrice" className="block mb-[0.3vw] text-[1vw]">
                                Sales Price:
                            </label>
                            <input
                                type="text"
                                id="SalesPrice"
                                name="SalesPrice"
                                value={formData.SalesPrice}
                                onChange={handleChange}
                                className='border border-black p-[0.3vw] rounded-md w-[20vw]'
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#E9278E] mt-[0.5vw] text-white p-2 rounded w-full"
                        >
                            {editIndex !== null ? "Edit Employee" : "Add Employee"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SalesPriceList;
