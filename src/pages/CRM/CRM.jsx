import { React, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import FullCalendar from "@fullcalendar/react"; // Import FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Import dayGridPlugin
import timeGridPlugin from "@fullcalendar/timegrid"; // Import timeGridPlugin
import interactionPlugin from "@fullcalendar/interaction"; // Import interactionPlugin
// Import your other components


const CRM = () => {
  const [showBar, setShowBar] = useState(false);

  const toggleBar = () => {
    setShowBar(!showBar);
  };

  const events = [
    {
      title: 'Event 1',
      start: '2024-04-29T10:00:00',
      end: '2024-04-29T12:00:00'
    },
    {
      title: 'Event 2',
      start: '2024-04-30T14:00:00',
      end: '2024-04-30T16:00:00'
    }
  ];
// Sample data for 12 months
const monthlyData = {
  January: { InvoiceOverview: 200, EstimateOverview: 150, ProposalOverview: 200 },
  February: { InvoiceOverview: 250, EstimateOverview: 180, ProposalOverview: 200 },
  March: { InvoiceOverview: 300, EstimateOverview: 200, ProposalOverview: 200 },
  April: { InvoiceOverview: 350, EstimateOverview: 220, ProposalOverview: 200 },
  May: { InvoiceOverview: 400, EstimateOverview: 250, ProposalOverview: 200 },
  June: { InvoiceOverview: 450, EstimateOverview: 280, ProposalOverview: 200 },
  July: { InvoiceOverview: 500, EstimateOverview: 300, ProposalOverview: 200 },
  August: { InvoiceOverview: 550, EstimateOverview: 320, ProposalOverview: 200 },
  September: { InvoiceOverview: 200, EstimateOverview: 350, ProposalOverview: 200 },
  October: { InvoiceOverview: 250, EstimateOverview: 370, ProposalOverview: 200 },
  November: { InvoiceOverview: 300, EstimateOverview: 390, ProposalOverview: 200 },
  December: { InvoiceOverview: 350, EstimateOverview: 400, ProposalOverview: 200 },
};

// Extracting labels (month names) and data (company activity overview) from monthlyData object
const labels = Object.keys(monthlyData);
const invoiceOverviewData = Object.values(monthlyData).map(data => data.InvoiceOverview);
const estimateOverviewData = Object.values(monthlyData).map(data => data.EstimateOverview);
const proposalOverviewData = Object.values(monthlyData).map(data => data.ProposalOverview);

// Bar chart data for the three different business activities
const chartData = {
  labels: labels,
  datasets: [
    {
      label: "Invoice Overview",
      data: invoiceOverviewData,
      backgroundColor: "#009BDF", 
      borderColor: "#0056D7", 
      borderWidth: 1,
    },
    {
      label: "Estimate Overview",
      data: estimateOverviewData,
      backgroundColor: "#117900", 
      borderColor: "#006823", 
      borderWidth: 1,
    },
    {
      label: "Proposal Overview",
      data: proposalOverviewData,
      backgroundColor: "#CA0000", 
      borderColor: "#B40000", 
      borderWidth: 1,
    },
  ],
};

// Bar chart options
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50, // Step size for y-axis ticks
      },
    },
  },
};

// Example setup for rendering this chart might use Chart.js or similar library


  // Donut chart options
  const DoughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.parsed.y;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };



  // Sample data for role distribution (you can replace it with your actual data)
  const roleDistributionData = {
    labels: [
      "Approved",
      "Pending",
      "Cancel",
    ],
    data: [20, 15, 2], // Sample percentages for each role
    backgroundColors: [
      "#117900", // Blue
      "#FFCE56", // Yellow
      "#FF6384", // Red
    ],
  };

  // Pie chart data
  const departData = {
    labels: roleDistributionData.labels,
    datasets: [
      {
        data: roleDistributionData.data,
        backgroundColor: roleDistributionData.backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const departOptions = {
    plugins: {
      legend: {
        position: "bottom", // Position legend at the bottom
      },
    },
  };


  // Sample data for role distribution (you can replace it with your actual data)
  const roleDistribution1Data = {
    labels: [
      "Not started",
      "In Progress",

    ],
    data: [20, 45], // Sample percentages for each role
    backgroundColors: [
      "#009BDF", // Blue
      "#CA0000", // Yellow
    ],
  };
  // Pie chart data
  const depart1Data = {
    labels: roleDistribution1Data.labels,
    datasets: [
      {
        data: roleDistribution1Data.data,
        backgroundColor: roleDistribution1Data.backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const depart1Options = {
    plugins: {
      legend: {
        position: "bottom", // Position legend at the bottom
      },
    },
  };

  
  // Sample data for role distribution (you can replace it with your actual data)
  const roleDistribution2Data = {
    labels: [
      "New Lead",
      "Contracted",
      "Qualified",
      "Working",
      "Proposal Sent",
      "Completed",
      "Customer",

    ],
    data: [20, 15, 10, 10, 10, 10, 10], // Sample percentages for each role
    backgroundColors: [
      "#009BDF", 
      "#FF5C00", 
      "#000080", 
      "#8C2BAB",
      "#7CD2B9", 
      "#005139",
      "#FFE500", 
    ],
  };
  // Pie chart data
  const depart2Data = {
    labels: roleDistribution2Data.labels,
    datasets: [
      {
        data: roleDistribution2Data.data,
        backgroundColor: roleDistribution2Data.backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const depart2Options = {
    plugins: {
      legend: {
        position: "right", // Position legend at the bottom
      },
    },
  };



  const weeklyData3 = {
    Monday: { InvoiceOverview3: 200 },
    Tuesday: { InvoiceOverview3: 250 },
    Wednesday: { InvoiceOverview3: 300 },
    Thursday: { InvoiceOverview3: 350 },
    Friday: { InvoiceOverview3: 400 },
    Saturday: { InvoiceOverview3: 450 },
    Sunday: { InvoiceOverview3: 500 },
  };
  
  // Extracting labels (day names) and data (invoice overview) from weeklyData object
  const labels3 = Object.keys(weeklyData3);
  const invoiceOverviewData3 = Object.values(weeklyData3).map(data => data.InvoiceOverview3);
  
  // Bar chart data for the invoice overview
  const chartData3 = {
    labels: labels3,
    datasets: [
      {
        label: "This Week's Payments",
        data: invoiceOverviewData3,
        backgroundColor: "#009BDF", // Deep sky blue color for background
        borderColor: "#0056D7", // Dark blue color for border
        borderWidth: 1,
      },
    ],
  };
  
  // Bar chart options
  const chartOptions3 = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20, // Adjusted step size for y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Shows the legend (optional)
      }
    }
  };
  return (
    <div className="absolute top-[4vw] bg-slate-100 h-screen w-[82vw] overflow-y-auto right-0 ">
      <div className="flex flex-row  gap-[1vw] my-[2vw]  justify-center">
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/CRM/Customer.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL CUSTOMER</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/CRM/Products.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL PRODUCT</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/CRM/Supplier.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL SUPPLIER</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/CRM/Sale.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL SALE</h1>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
       

      
      </div>

      <div className="box flex flex-col w-[77vw] mt-[2vw] gap-[1vw] h-[45vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
        <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
          <h1 className="text-[#e9278e] text-[1.5vw]">Monthly Payment Record</h1>
          <button
            className="border-[0.12vw] border-black px-[2vw] rounded-md"
            onClick={toggleBar}
          >
            Monthly
          </button>
        </div>
        <div>
          <div className="company-summary-chart">
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 m-[1.8vw]  shadow-lg p-[1vw] rounded-md">
        <h1 className="text-[1.6vw] ">Employee Summary</h1>
        <div className="flex flex-row ">
          <div className="flex flex-col ">
            <div className="box flex flex-col w-[25vw] mt-[2vw] gap-[0.31vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">Leads Overview</h1>
                <button
                  className="border-[0.12vw] border-black px-[2vw] rounded-md"
                  onClick={toggleBar}
                >
                  Year
                </button>
              </div>
              <div>
                <div className="company-summary-line-chart flex flex-row items-center justify-center ">
                  <div className="chart-container  w-[15vw]">
                  <Pie data={depart2Data} options={depart2Options} />
                  </div>
                </div>
              </div>
            </div>

            <div className="box flex flex-col w-[25vw] mt-[2vw] gap-[0.31vw]  h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">Statistics By Project Status</h1>
                <button
                  className="border-[0.12vw] border-black px-[2vw] rounded-md"
                  onClick={toggleBar}
                >
                  Year
                </button>
              </div>
              <div>
              <div className="company-summary-line-chart flex flex-row items-center justify-center p-[1vw]">
                  <div className="chart-container  w-[14vw]">
                  <Pie data={depart1Data} options={depart1Options} />
                  </div>
                </div>
              </div>
            </div>

            <div className="box flex flex-col w-[25vw] mt-[2vw] gap-[0.31vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">Tickets Awaiting Reply by Status</h1>
                <button
                  className="border-[0.12vw] border-black px-[2vw] rounded-md"
                  onClick={toggleBar}
                >
                  Year
                </button>
              </div>
              <div>
              <div className="company-summary-line-chart flex flex-row items-center justify-center p-[1vw]">
                  <div className="chart-container  w-[14vw]">
                    <Pie data={departData} options={departOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  gap-[5vw]">
          <div className="w-[40vw]">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events} // Pass the events variable to the events prop
            />
          </div>
          <div className="weekly-container h-[50vw] w-[24vw]">
              <Bar data={chartData3} options={chartOptions3} />
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CRM