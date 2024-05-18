import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const SalesInvoice = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
          AddedDate: '',
          ReferenceNo: '',
          InvoiceNo: '',
          InvoiceDate: '',
          Customer: '',
          TotalVat: '',
          GrandTotal: '',
          DueDate: '',
          PayStatus: '',
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
        updatedRows[editIndex] = formData;
        return updatedRows;
      });
      setEditIndex(null);
    } else {
      setRows((prevRows) => [...prevRows, { ...formData, id: srNo }]);
      setSrNo(srNo + 1);
    }

    setFormData({
      AddedDate: '',
      ReferenceNo: '',
      InvoiceNo: '',
      InvoiceDate: '',
      Customer: '',
      TotalVat: '',
      GrandTotal: '',
      DueDate: '',
      PayStatus: '',
    });

    setFormVisible(false);
  };

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const rowToEdit = rows[index];
    setFormData(rowToEdit);
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
      setRows((prevRows) => prevRows.filter((row) => row.PayStatus === 'Complete'));
    } else if (filter === 'Inactive') {
      setRows((prevRows) => prevRows.filter((row) => row.PayStatus === 'Pending'));
    }
  };

  const handleExport = () => {
    const doc = new jsPDF();
    rows.forEach((row, index) => {
      const yPos = 10 + index * 10;
      doc.text(`${row.ReferenceNo} - ${row.InvoiceNo}`, 10, yPos);
    });
    doc.save('sales_invoice.pdf');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const customer = row.Customer ? row.Customer.toLowerCase() : '';
    const payStatus = row.PayStatus ? row.PayStatus.toLowerCase() : '';

    if (filter === 'All') {
      return customer.includes(searchTerm.toLowerCase());
    } else {
      return (
        payStatus === filter.toLowerCase() &&
        customer.includes(searchTerm.toLowerCase())
      );
    }
  });

  return (
    <div className="absolute shadow-xl right-[1vw] rounded-md top-[4vw] h-[42vw]">
      <div className="h-[50vw]">
        <div className="bg-gray-400 w-[80vw] h-[3vw] flex flex-row px-[2vw] items-center">
          <input
            className="p-[0.3vw] w-[18vw] text-[1vw] rounded-md mx-[1vw]"
            type="text"
            placeholder="Search by Customer name"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="p-[0.5vw] text-[1vw] w-[13vw] rounded-md mx-[1vw]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Pending">Pending</option>
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
              <th className="border p-[0.5vw] text-[1vw]">Date Added</th>
              <th className="border p-[0.5vw] text-[1vw]">Reference No.</th>
              <th className="border p-[0.5vw] text-[1vw]">Invoice No.</th>
              <th className="border p-[0.5vw] text-[1vw]">Invoice Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Customer</th>
              <th className="border p-[0.5vw] text-[1vw]">Total Vat</th>
              <th className="border p-[0.5vw] text-[1vw]">Grand Total</th>
              <th className="border p-[0.5vw] text-[1vw]">Due Date</th>
              <th className="border p-[0.5vw] text-[1vw]">Pay Status</th>
              <th className="border p-[0.5vw] text-[1vw]">Actions</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.AddedDate}</td>
                <td>{row.ReferenceNo}</td>
                <td>{row.InvoiceNo}</td>
                <td>{row.InvoiceDate}</td>
                <td>{row.Customer}</td>
                <td>{row.TotalVat}</td>
                <td>{row.GrandTotal}</td>
                <td>{row.DueDate}</td>
                <td>{row.PayStatus}</td>
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
            <img src="/HRM/form.png" className="w-[3vw]" alt="" />
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
              <img src="/HRM/close.png" className="w-[2vw]" alt="" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="overflow-y-auto p-[1vw]">
            <div className="mb-[0.3vw]">
              <h1>Added Date:</h1>
              <input
                type="date"
                name="AddedDate"
                value={formData.AddedDate}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Reference No:</h1>
              <input
                type="text"
                name="ReferenceNo"
                value={formData.ReferenceNo}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Invoice No:</h1>
              <input
                type="text"
                name="InvoiceNo"
                value={formData.InvoiceNo}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Invoice Date:</h1>
              <input
                type="date"
                name="InvoiceDate"
                value={formData.InvoiceDate}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Customer:</h1>
              <input
                type="text"
                name="Customer"
                value={formData.Customer}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Total Vat:</h1>
              <input
                type="text"
                name="TotalVat"
                value={formData.TotalVat}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Grand Total:</h1>
              <input
                type="text"
                name="GrandTotal"
                value={formData.GrandTotal}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Due Date:</h1>
              <input
                type="date"
                name="DueDate"
                value={formData.DueDate}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              />
            </div>
            <div className="mb-[0.3vw]">
              <h1>Pay Status:</h1>
              <select
                name="PayStatus"
                value={formData.PayStatus}
                onChange={handleChange}
                className="p-[0.3vw] rounded-md"
              >
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Delete">Delete</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#E9278E] mt-[0.5vw] text-white p-2 rounded w-full"
            >
              {editIndex !== null ? 'Edit' : 'Add'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SalesInvoice;
