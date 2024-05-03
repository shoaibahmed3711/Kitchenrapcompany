import { React, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
// Import your other components


const Sales = () => {
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
  // Sample data for 12 months (you can replace it with your actual data)
  const monthlyData = {
    Jan: { newLeads: 200, convertedLeads: 150 },
    Feb: { newLeads: 210, convertedLeads: 180 },
    Mar: { newLeads: 220, convertedLeads: 200 },
    Apr: { newLeads: 230, convertedLeads: 220 },
    May: { newLeads: 240, convertedLeads: 250 },
    June:{ newLeads: 250, convertedLeads: 280 },
    July:{ newLeads: 260, convertedLeads: 300 },
    Aug: { newLeads: 270, convertedLeads: 320 },
    Sep: { newLeads: 280, convertedLeads: 350 },
    Oct: { newLeads: 290, convertedLeads: 370 },
    Nov: { newLeads: 300, convertedLeads: 390 },
    Dec: { newLeads: 310, convertedLeads: 400 },
  };

  // Extracting labels (month names) and data (company summary) from monthlyData object
  const labels = Object.keys(monthlyData);
  const newLeadsData = Object.values(monthlyData).map(
    ({ newLeads }) => newLeads
  );
  const convertedLeadsData = Object.values(monthlyData).map(
    ({ convertedLeads }) => convertedLeads
  );

  // Bar chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Quotations",
        data: newLeadsData,
        backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray bar color
        borderColor: "rgba(128, 128, 128, 1)", // Gray border color
        borderWidth: 1,
      },
      {
        label: "Actual Sale",
        data: convertedLeadsData,
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Red bar color
        borderColor: "rgba(255, 99, 132, 1)", // Red border color
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

  // Data for completed and incomplete tasks
  const completedPercentage = 50;
  const incompletePercentage = 100 - completedPercentage;

  // Donut chart data
  const DoughnutData = {
    labels: ["Completed", "Incomplete"],
    datasets: [
      {
        data: [completedPercentage, incompletePercentage],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(128, 128, 128, 0.5)",
        ],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(128, 128, 128, 1)"],
        borderWidth: 1,
      },
    ],
  };

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

  // Sample data for company population by month (you can replace it with your actual data)
  const monthlyPopulation = {
    Jan: 300,
    Feb: 320,
    Mar: 350,
    Apr: 380,
    May: 400,
    June: 410,
    July: 420,  
    Aug: 430,
    Sep: 440,
    Oct: 450,
    Nov: 460,
    Dec: 470,
  };

  // Extracting labels (month names) and data (company population) from monthlyPopulation object
  const label = Object.keys(monthlyPopulation);
  const data = Object.values(monthlyPopulation);

  // Line chart data
  const LineData = {
    labels: label,
    datasets: [
      {
        label: "Company Population",
        data: data,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)", // Turquoise line color
        tension: 0.4, // Curve tension of lines
      },
    ],
  };

  // Line chart options
  const LineOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50, // Step size for y-axis ticks
        },
      },
    },
  };

  // Sample data for employee age distribution (you can replace it with your actual data)
  const ageDistribution = {
    "18-25": 20,
    "26-35": 35,
    "36-45": 25,
    "46-55": 15,
    "56+": 5,
  };

  // Extracting labels (age ranges) and data (number of employees) from ageDistribution object
  const agelabels = Object.keys(ageDistribution);
  const agedata = Object.values(ageDistribution);

  // Bar chart data
  const ageData = {
    labels: agelabels,
    datasets: [
      {
        label: "Employee Age Distribution",
        data: agedata,
        backgroundColor: "rgba(255, 99, 132, 0.5)", // Red bar color
        borderColor: "rgba(255, 99, 132, 1)", // Red border color
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options
  const ageOptions = {
    indexAxis: "y", // Display bars vertically
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 5, // Step size for x-axis ticks
        },
      },
    },
  };

  // Sample data for role distribution (you can replace it with your actual data)
  const roleDistributionData = {
    labels: [
      "Salesman",
      "Admin",
      "Draftman",
      "Sales",
      "Account",
      "Customer Services",
    ],
    data: [20, 15, 10, 25, 15, 15], // Sample percentages for each role
    backgroundColors: [
      "#FF6384", // Red
      "#36A2EB", // Blue
      "#FFCE56", // Yellow
      "#FF8C00", // Orange
      "#9966FF", // Purple
      "#008080", // Teal
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
  return (
    <div className="absolute top-[4vw] bg-slate-100 h-screen w-[82vw] overflow-y-auto right-0 ">
      <div className="flex flex-row  gap-[1vw] my-[2vw]  justify-center">
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/dashboard-image/TotalContract.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL CUSTOMER</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/dashboard-image/closeContract.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL PRODUCT</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/dashboard-image/RudeCustomer.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL SUPPLIER</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="public/dashboard-image/CustomerComplained.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">TOTAL SALE</h1>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
      </div>
      <div className="flex flex-row">
        <div className="box flex flex-col w-[46vw] mt-[2vw] gap-[1vw] h-[25vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
        <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
          <h1 className="text-[#e9278e] text-[1.5vw]">Total Sales</h1>
          <button
            className="border-[0.12vw] border-black px-[2vw] rounded-md"
            onClick={toggleBar}
          >
            Year
          </button>
        </div>
        <div>
          <div className="company-summary-chart w-[34vw]">
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
        </div>

        <div className="box flex flex-col w-[42vw] mt-[2vw] gap-[0.31vw] h-[25vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">Collected vs Due</h1>
                <button
                  className="border-[0.12vw] border-black px-[2vw] rounded-md"
                  onClick={toggleBar}
                >
                  Year
                </button>
              </div>
              <div>
                <div className="employee-age-bar-chart p-[1vw]">
                  <div className="chart-container w-[34vw]">
                    <Bar data={ageData} options={ageOptions} />
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div className="bg-gray-200 m-[1.8vw]  shadow-lg p-[1vw] rounded-md">
        <h1 className="text-[1.6vw] ">Employee Summary</h1>
        <div className="flex flex-row ">
          <div className="flex flex-row ">
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
                <div className="company-summary-line-chart p-[1vw]">
                  <div className="chart-container w-[18vw]">
                    <Line data={LineData} options={LineOptions} />
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
                <div className="role-distribution-pie-chart flex flex-row items-center justify-center">
                  <div className="chart-container p-[1vw] w-[16vw]">
                    <Pie data={departData} options={departOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[44vw]">
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sales