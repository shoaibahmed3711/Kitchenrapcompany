import { React, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
const Dashboard = () => {
  const [showBar, setShowBar] = useState(false);

  const toggleBar = () => {
    setShowBar(!showBar);
  };

  // Sample data for 12 months (you can replace it with your actual data)
  const monthlyData = {
    January: { newLeads: 300, convertedLeads: 150 },
    February: { newLeads: 350, convertedLeads: 180 },
    March: { newLeads: 400, convertedLeads: 200 },
    April: { newLeads: 450, convertedLeads: 220 },
    May: { newLeads: 500, convertedLeads: 250 },
    June: { newLeads: 550, convertedLeads: 280 },
    July: { newLeads: 600, convertedLeads: 300 },
    August: { newLeads: 650, convertedLeads: 320 },
    September: { newLeads: 700, convertedLeads: 350 },
    October: { newLeads: 750, convertedLeads: 370 },
    November: { newLeads: 800, convertedLeads: 390 },
    December: { newLeads: 850, convertedLeads: 400 },
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
        label: "New Leads",
        data: newLeadsData,
        backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray bar color
        borderColor: "rgba(128, 128, 128, 1)", // Gray border color
        borderWidth: 1,
      },
      {
        label: "Converted Leads",
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
    January: 300,
    February: 320,
    March: 350,
    April: 380,
    May: 400,
    June: 410,
    July: 420,
    August: 430,
    September: 440,
    October: 450,
    November: 460,
    December: 470,
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
    <div className="absolute top-[4vw] overflow-y-auto bg-white h-[90vh] w-[82vw] right-0 ">
      <div className=" flex flex-col">
        <div className="flex flex-row justify-center gap-[1vw] mt-[2vw]">
          <div
            className="flex flex-col bg-cover bg-center w-[25vw] h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/Companies.jpg")',
            }}
          >
            <h1 className="text-[2vw] ">0</h1>
            <h1 className="text-[1.2vw] ">Total Companies</h1>
          </div>
          <div
            className="flex flex-col bg-cover bg-center w-[25vw]  h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/Branches.jpg")',
            }}
          >
            <h1 className="text-[2vw]">0</h1>
            <h1 className="text-[1.2vw]">Total Branches</h1>
          </div>
          <div
            className="flex flex-col bg-cover bg-center w-[25vw]  h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/Departments.jpg")',
            }}
          >
            <h1 className="text-[2vw]">0</h1>
            <h1 className="text-[1.2vw]">Total Departments</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[1vw] mt-[1vw]">
          <div
            className="flex flex-col bg-cover bg-center w-[25vw]  h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/wherehouse.jpg")',
            }}
          >
            <h1 className="text-[2vw] ">0</h1>
            <h1 className="text-[1.2vw] ">Total Warehouses</h1>
          </div>
          <div
            className="flex flex-col bg-cover bg-center w-[25vw]  h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/customer.jpg")',
            }}
          >
            <h1 className="text-[2vw]">0</h1>
            <h1 className="text-[1.2vw]">Total Customers</h1>
          </div>
          <div
            className="flex flex-col bg-cover bg-center w-[25vw]  h-[6vw] shadow-lg rounded-md pl-[1vw] p-[0.2vw]"
            style={{
              backgroundImage: 'url("/dashboard-image/supplier.jpg")',
            }}
          >
            <h1 className="text-[2vw]">0</h1>
            <h1 className="text-[1.2vw]">Total Suppliers</h1>
          </div>
        </div>
      </div>
      {/* // dashboard */}
      <div className="flex flex-row  gap-[1vw] my-[2vw]  justify-center">
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="/dashboard-image/TotalContract.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">Total Contract</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="/dashboard-image/closeContract.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">Closed Contract</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="/dashboard-image/RudeCustomer.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">Rude Customer</h1>{" "}
          </div>
        </div>
        <div className="w-[19vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-gray-400 hover:bg-gray-500 shadow-lg h-[5.5vw] rounded-md">
          <div className="w-[3.5vw] ">
            <img src="/dashboard-image/CustomerComplained.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[1.7vw]">0</h1>
            <h1 className="text-[1vw]">Customer Complained</h1>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="box flex flex-col w-[30vw] gap-[1vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
          <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
            <h1 className="text-[#e9278e] text-[1.5vw]">Latest Member</h1>
            <button
              className="border-[0.12vw] border-black px-[2vw] rounded-md"
              onClick={toggleBar}
            >
              show
            </button>
          </div>
          <div className=" overflow-y-auto">
            {showBar && (
              <div className="bar flex flex-row items-center rounded-md gap-[1vw] px-[1vw] py-[0.5vw] mx-[1vw] bg-[#F99AAF]">
                <img
                  src="public/dashboard-image/profile.png"
                  alt="Shoaib"
                  className="w-[2vw] h-[2vw] rounded-full cursor-pointer"
                  onClick={toggleBar}
                />
                <h2
                  className="text-black text-[1.2vw] cursor-pointer"
                  onClick={toggleBar}
                >
                  Shoaib
                </h2>
              </div>
            )}
          </div>
        </div>

        <div className="box flex flex-col w-[50vw] gap-[1vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
          <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
            <h1 className="text-[#e9278e] text-[1.5vw]">Task Summary</h1>
            <button
              className="border-[0.12vw] border-black px-[2vw] rounded-md"
              onClick={toggleBar}
            >
              Year
            </button>
          </div>
          <div className="">
            <div className="company-summary-donut-chart flex flex-row justify-evenly items-center">
              <div>
                <h2 className="text-[1.4vw] flex flex-row items-center gap-[1vw]">
                  <div className="bg-[#F99AAF] w-[2vw] h-[1vw]"></div>Complete
                  <div></div>
                </h2>
                <h2 className="text-[1.4vw] flex flex-row items-center gap-[1vw]">
                  <div className="bg-[#B3B3B4] w-[2vw] h-[1vw]"></div>Pending
                  <div></div>
                </h2>
              </div>
              <div className="chart-container w-[10vw]">
                <Doughnut data={DoughnutData} options={DoughnutOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box flex flex-col w-[77vw] mt-[2vw] gap-[1vw] h-[45vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
        <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
          <h1 className="text-[#e9278e] text-[1.5vw]">Leads Summary</h1>
          <button
            className="border-[0.12vw] border-black px-[2vw] rounded-md"
            onClick={toggleBar}
          >
            Year
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

      <div className="bg-gray-200 m-[1.8vw] shadow-lg p-[1vw] rounded-md">
        <h1 className="text-[1.6vw] ">Employee Summary</h1>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="box flex flex-col w-[30vw] mt-[2vw] gap-[0.31vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">By Population</h1>
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

            <div className="box flex flex-col w-[30vw] mt-[2vw] gap-[0.31vw]  h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">By Demographics</h1>
                <button
                  className="border-[0.12vw] border-black px-[2vw] rounded-md"
                  onClick={toggleBar}
                >
                  Year
                </button>
              </div>
              <div>
                <div className="employee-age-bar-chart p-[1vw]">
                  <div className="chart-container w-[18vw]">
                    <Bar data={ageData} options={ageOptions} />
                  </div>
                </div>
              </div>
            </div>

            <div className="box flex flex-col w-[30vw] mt-[2vw] gap-[0.31vw] h-[20vw] border rounded-md shadow-lg mx-[2vw] bg-gray-100">
              <div className="bg-white h-[4vw]  flex flex-row items-center justify-between px-[1vw]">
                <h1 className="text-[#e9278e] text-[1vw]">By Departments</h1>
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

          <div className=" flex flex-col">
            <div className="flex flex-row justify-center gap-[1vw] mt-[2vw]">
              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-sky-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/Totalemployee.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">Total Employee</h1>{" "}
                </div>
              </div>

              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-orange-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/Sickdays.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">Total Sick Days</h1>{" "}
                </div>
              </div>

              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-purple-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/Leavedays.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">Total Leave</h1>{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-[1vw] mt-[1vw]">
              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-yellow-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/return.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">Reunion</h1>{" "}
                </div>
              </div>

              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-green-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/Late.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">Total Late</h1>{" "}
                </div>
              </div>

              <div className="w-[24vw] flex flex-row gap-[1vw] px-[2vw] items-center bg-white hover:bg-red-100 shadow-lg h-[5.5vw] rounded-md">
                <div className="w-[3.5vw] ">
                  <img src="public/dashboard-image/notificaion.png" alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[1.7vw]">0</h1>
                  <h1 className="text-[1vw]">notificaion</h1>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
