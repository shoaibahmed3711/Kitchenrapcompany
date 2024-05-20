import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // Import the locale if needed

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDetails, setEventDetails] = useState({ time: '', description: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startDay = currentMonth.startOf('month').startOf('week');
  const endDay = currentMonth.endOf('month').endOf('week');

  const generateCalendar = () => {
    const calendar = [];
    let day = startDay;
    while (day <= endDay) {
      calendar.push(day);
      day = day.add(1, 'day');
    }
    return calendar;
  };

  const handleEventClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleEventSubmit = () => {
    if (eventDetails.description && eventDetails.time) {
      const dateKey = selectedDate.format('YYYY-MM-DD');
      const newEvent = `${eventDetails.time}: ${eventDetails.description}`;
      setEvents({
        ...events,
        [dateKey]: events[dateKey] ? [...events[dateKey], newEvent] : [newEvent],
      });
      setIsModalOpen(false);
      setEventDetails({ time: '', description: '' });
    }
  };

  const handleDeleteEvent = (dateKey, eventIndex) => {
    const updatedEvents = { ...events };
    updatedEvents[dateKey].splice(eventIndex, 1);
    if (updatedEvents[dateKey].length === 0) {
      delete updatedEvents[dateKey];
    }
    setEvents(updatedEvents);
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center p-5 bg-gray-400">
      <button onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}> <img src="public/calender/left.png" className='w-[2vw]' alt="" /> </button>
      <h2 className="text-lg font-bold">{currentMonth.format('MMMM YYYY')}</h2>
      <button onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}> <img src="public/calender/right.png" className='w-[2vw]' alt="" /> </button>
    </div>
  );

  const renderDaysOfWeek = () => (
    <div className="grid grid-cols-7 gap-1 bg-gray-300">
      {daysOfWeek.map((day) => (
        <div key={day} className="text-center font-bold p-2">
          {day}
        </div>
      ))}
    </div>
  );

  const renderCells = () => {
    const calendar = generateCalendar();
    return (
      <div className="grid grid-cols-7 gap-1 bg-gray-100 p-[1vw]">
        {calendar.map((day) => (
          <div
            key={day}
            className={`p-2 border ${day.month() === currentMonth.month() ? '' : 'text-gray-400'}`}
            onClick={() => handleEventClick(day)}
          >
            <div>{day.date()}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderModal = () => (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 ${isModalOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 max-w-sm mx-auto mt-20 rounded shadow-lg">
        <h2 className="text-lg mb-4">Add Event for {selectedDate?.format('YYYY-MM-DD')}</h2>
        <input
          type="time"
          name="time"
          value={eventDetails.time}
          onChange={handleEventChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="description"
          value={eventDetails.description}
          onChange={handleEventChange}
          placeholder="Event description"
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end space-x-4">
          <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 p-2 rounded">Cancel</button>
          <button onClick={handleEventSubmit} className="bg-blue-500 text-white p-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="flex flex-wrap mt-4">
      {Object.entries(events).map(([date, eventList], dateIndex) => (
        <div key={dateIndex} className="border p-4 m-2 w-[10vw] h-[10vw] bg-white rounded shadow relative">
          <div className="text-sm font-bold">{dayjs(date).format('MMM DD, ddd')}</div>
          <div className="absolute top-2 right-2">
            <button className="text-red-500" onClick={() => handleDeleteEvent(date, dateIndex)}>✖</button>
          </div>
          <div className="text-xs mt-2">
            {eventList.map((event, eventIndex) => (
              <div key={eventIndex} className="relative">
                {event}
                <button
                  className="absolute top-0 right-0 text-red-500"
                  onClick={() => handleDeleteEvent(date, eventIndex)}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute p-[3vw] right-[1vw] rounded-md top-[4vw] w-[85vw]">
      <h1 className="text-[2vw] font-bold">Calendar for Scheduling</h1>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCells()}
      {renderModal()}
      {renderEvents()}
    </div>
  );
};

export default Calendar;
