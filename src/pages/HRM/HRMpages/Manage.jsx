import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const Manage = () => {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    code: '',
    shift: '',
    department: '',
    status: '',
    mondayTime: '',
    tuesdayTime: '',
    wednesdayTime: '',
    thursdayTime: '',
    fridayTime: '',
    saturdayTime: '',
    sundayTime: '',
  });

  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // You can keep your localStorage logic here
  }, [rows]);

  const addEmployee = () => {
    const newEmployee = {
      id: rows.length + 1, // Generate an ID for the new employee
      name: `Employee ${rows.length + 1}`, // Generate a name for the new employee
      entryDate: new Date().toLocaleDateString(), // Entry date as current date
      mondayTime: '',
      tuesdayTime: '',
      wednesdayTime: '',
      thursdayTime: '',
      fridayTime: '',
      saturdayTime: '',
      sundayTime: '',
    };
    setRows([...rows, newEmployee]);
  };

  const handleChange = (e, day, index) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, [`${day}Time`]: value } : row
      )
    );
  };

  const handleDelete = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    // Implement edit functionality if needed
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
      doc.text(`${row.name} - ${row.code}`, 10, yPos);
    });
    doc.save("employee_table.pdf");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRows = rows.filter((row) => {
    if (filter === 'All') {
      return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        row.status === filter &&
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });


  return (
    <div className="absolute shadow-xl right-[1vw] rounded-md top-[12vw] h-[33vw]">
      <div className="h-[50vw]">
        
        {/* Your search and filter UI */}
        <button onClick={addEmployee} className='button w-[3vw] absolute left-[1vw] top-[29vw]'><img src="/HRM/form.png" alt="" /></button>
        <div className="bg-gray-400 w-[80vw] h-[3vw]  flex flex-row overflow-y-auto px-[2vw] items-center">
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
              <th className="border p-[0.5vw] text-[1vw]">Shift</th>
              <th className="border p-[0.5vw] text-[1vw]">Monday</th>
              <th className="border p-[0.5vw] text-[1vw]">Tuesday</th>
              <th className="border p-[0.5vw] text-[1vw]">Wednesday</th>
              <th className="border p-[0.5vw] text-[1vw]">Thursday</th>
              <th className="border p-[0.5vw] text-[1vw]">Friday</th>
              <th className="border p-[0.5vw] text-[1vw]">Saturday</th>
              <th className="border p-[0.5vw] text-[1vw]">Sunday</th>
              <th className="border p-[0.5vw] text-[1vw]">Action</th>
            </tr>
          </thead>
          <tbody className="rounded-lg bg-gray-100 w-[80vw] text-center">
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="p-[1.5vw]">{row.entryDate}</td>
                <td>
                  <select
                    className="p-[1vw] text-[1vw] w-[9vw] rounded-md border"
                    value={row.shift}
                    onChange={(e) =>
                      handleChange({
                        target: { name: 'shift', value: e.target.value },
                      })
                    }
                  >
                    <option value="Morning">Morning</option>
                    <option value="Night">Night</option>
                  </select>
                </td>
                {/* Time fields for each day */}
                <td>
                  <input
                    type="time"
                    value={row.mondayTime}
                    onChange={(e) => handleChange(e, 'monday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.tuesdayTime}
                    onChange={(e) => handleChange(e, 'tuesday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.wednesdayTime}
                    onChange={(e) => handleChange(e, 'wednesday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.thursdayTime}
                    onChange={(e) => handleChange(e, 'thursday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.fridayTime}
                    onChange={(e) => handleChange(e, 'friday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.saturdayTime}
                    onChange={(e) => handleChange(e, 'saturday', index)}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={row.sundayTime}
                    onChange={(e) => handleChange(e, 'sunday', index)}
                  />
                </td>
                <td className="p-[0.1vw] flex flex-col items-center justify-center">
                  <button
                    className="hover:bg-blue-500 p-[0.4vw] rounded-full mb-2 mr-[0.6vw]"
                    onClick={() => handleEdit(index)}
                  >
                    <img src="/HRM/edit.png" className="w-[1.4vw]" alt="" />
                  </button>
                  <button
                    className="hover:bg-red-500 p-[0.4vw] rounded-full"
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
    </div>
  );
};

export default Manage;
