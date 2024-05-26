import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  const toggleList = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  const isActive = (buttonName) => {
    return activeButton === buttonName ? "block" : "none";
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleNotification = () => {
    setIsVisible((prev) => !prev);
  };

  const [Visible, setVisible] = useState(false);
  const toggleNotice = () => {
    setVisible((prev) => !prev);
  };

  const isLinkActive = (link) => {
    return location.pathname === link
      ? "text-[#e9278e] bg-gray-200 border-l-[0.2vw] rounded-[0.1vw] border-[#E9278E] py-[0.2vw] pr-[1vw]"
      : "text-[#E9278E]";
  };

  return (
    <div className="flex flex-row">
      <div className="bg-white overflow-y-auto px-[1.5vw] rounded-r-sm border-r-[0.11vw] border-[#E9278E] w-[15vw] h-[100vh]">
        <div className="flex flex-col gap-[3vw]">
          <div className="mx-auto pt-[2vw] w-[10vw]">
            <img src="/Logo/Kitchen-white.jpg" alt="" />
          </div>
          <div className=" flex flex-col gap-[0.7vw]">
            <div>
              <div>
                <div className="bg-gray-200 rounded-[0.2vw]">
                  <Link
                    to="/Dashboard"
                    className="text-[#e9278e] p-[0.4vw] border-l-[0.2vw] border-[#e9278e] flex flex-row items-center gap-[0.4vw] font-roboto text-[1vw]"
                  >
                    <div className="w-[1.5vw]">
                      <img src="/images/Dashboard.png" alt="" />
                    </div>
                    <h1>Dashboard</h1>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] p-[0.4vw] font-roboto border-l-[0.2vw] flex flex-row items-center border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("HRM")}
                >
                  <div className="flex flex-row items-center justify-between gap-[0.4vw]">
                    <div className="w-[1.5vw]">
                      <img src="/images/HRM.png" alt="" />
                    </div>
                    <h1>HRM</h1>
                  </div>
                </button>
              </div>
              <div
                className="flex flex-col my-[0.2vw] list-none w-[10vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("HRM") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/Employees"
                    className={` text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/Employees"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Employee.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1>Employee</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/HRM/ManageSalary" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/HRM/ManageSalary" )}`}>
                    <img src="/images/HRM/Salary.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1> Manage Salary</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/ManageLeave"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/ManageLeave"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Employee.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> Manage Leave</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/CoreHr"
                    className={` text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/CoreHr"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Core.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1>Core HR</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/Performance"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/Performance"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Performance.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> Performance</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/Hrreport"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/Hrreport"
                    )}`}
                  >
                    <img
                      src="/images/HRM/report.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> HRM Report</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/HrSetting"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/HrSetting"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Setting.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> HRM Setting</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/HrRequest"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/HrRequest"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Request.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> Hr Request</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link
                    to="/HRM/HRMTutorial"
                    className={` text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/HRMTutorial"
                    )}`}
                  >
                    <img
                      src="/images/HRM/HRMTutorial.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
                    <h1> HRM Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className=" flex flex-row items-center gap-[0.4vw] text-[#e9278e] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("CRM")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/CRM.png" alt="" />
                  </div>
                  <h1>CRM</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("CRM") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM" )}`}>
                    <img src="/CRM/pages/Dashboard.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>CRM Dashboard</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/Preleads" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/Preleads" )}`}>
                    <img src="/CRM/pages/prelieads.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>PreLeads</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/Leads" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/Leads" )}`}>
                    <img src="/CRM/pages/Leads.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Leads</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/Estimates" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/Estimates" )}`}>
                    <img src="/CRM/pages/Estimates.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Estimates</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/Customers" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/Customers" )}`}>
                    <img src="/CRM/pages/Customers.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Customers</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/ProjectManager" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/ProjectManager" )}`}>
                    <img src="/CRM/pages/projectmanager.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Project Manager</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/AfterSales" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/AfterSales" )}`}>
                    <img src="/CRM/pages/After.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>After Sales</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/CRM/CRMTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/CRM/CRMTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>CRM Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Sales")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/salesManagement.png" alt="" />
                  </div>
                  <h1>Sales</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Sales") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales" )}`}>
                    <img src="/Sales/Salespages/Dashboard.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Sales Dashboard</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/CallandMeeting" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/CallandMeeting" )}`}>
                    <img src="/Sales/Salespages/Callmeeting.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Call and Meeting</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/DesignerActivities" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/DesignerActivities" )}`}>
                    <img src="/Sales/Salespages/Designer.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Designer Activities</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/InstallationSchedule" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/InstallationSchedule" )}`}>
                    <img src="/Sales/Salespages/Schedule.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Installation Schedule</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/SalesReport" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/SalesReport" )}`}>
                    <img src="/Sales/Salespages/report.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Sales Report</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/SalesGoal" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/SalesGoal" )}`}>
                    <img src="/Sales/Salespages/Goal.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Sales Goal</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/MonthlyTargetBonus" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/MonthlyTargetBonus" )}`}>
                    <img src="/Sales/Salespages/Monthly.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Monthly Target Bonus</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/SalesPriceList" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/SalesPriceList" )}`}>
                    <img src="/Sales/Salespages/Pricelist.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Sales Price List</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Sales/SalesTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Sales/SalesTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Sales Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e]  flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Assessment")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Technical.png" alt="" />
                  </div>
                  <h1>Assessment</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Assessment") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Assessment/Technicalreview" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Assessment/Technicalreview" )}`}>
                    <img src="/Assessment/Technicalreview.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Technical Review</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Assessment/SiteVisitRequest" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Assessment/SiteVisitRequest" )}`}>
                    <img src="/Assessment/site.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Site Visit Request </h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Assessment/AccessmentTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Assessment/AccessmentTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Assessment Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e]  flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Inventory")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Inventory.png" alt="" />
                  </div>
                  <h1>Inventory</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Inventory") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/Wherehouse" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/Wherehouse" )}`}>
                    <img src="/Inventory/Warehouse.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Wherehouse</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/ProductSetting" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/ProductSetting" )}`}>
                    <img src="/Inventory/setting.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Product Setting</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/Products" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/Products" )}`}>
                    <img src="/Inventory/product.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Products</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/Supplier" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/Supplier" )}`}>
                    <img src="/Inventory/Supplier.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Supplier</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/InventoryReport" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/InventoryReport" )}`}>
                    <img src="/Inventory/report.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Inventory Report</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Inventory/InventoryTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Inventory/InventoryTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Inventory Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] p-[0.4vw]  flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Production")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Production.png" alt="" />
                  </div>
                  <h1>Production</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Production") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Production/ProjectStatus" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Production/ProjectStatus" )}`}>
                    <img src="/production/status.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Project Status</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Production/InstallizationProcess" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Production/InstallizationProcess" )}`}>
                    <img src="/production/process.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Installation process</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Production/Warranty" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Production/Warranty" )}`}>
                    <img src="/production/warranty.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Warranty</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Production/ProdictionTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Production/ProdictionTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Production Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] flex flex-row items-center gap-[0.3vw]  p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Account")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Account.png" alt="" />
                  </div>
                  <h1>Account</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Account") }}
              >
                 <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/Finance" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/Finance" )}`}>
                    <img src="/Account/Finance.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Finance</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/Accounting" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/Accounting" )}`}>
                    <img src="/Account/Accounting.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Accounting</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/CheckManagement" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/CheckManagement" )}`}>
                    <img src="/Account/Check.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Check Management</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/ManageCurrency" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/ManageCurrency" )}`}>
                    <img src="/Account/currency.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Manage Currency</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/AccountReport" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/AccountReport" )}`}>
                    <img src="/Account/account report.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Account Report</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/TaxManagement" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/TaxManagement" )}`}>
                    <img src="/Account/currency.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Tax Management</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/DuePayment" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/DuePayment" )}`}>
                    <img src="/Account/due.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Due Payment</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/AssestManagement" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/AssestManagement" )}`}>
                    <img src="/Account/assests.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Asset Management</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Account/AccountTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Account/AccountTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Account Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] p-[0.4vw] flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Invoices")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Invoices.png" alt="" />
                  </div>
                  <h1>Invoices</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Invoices") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/Purchase" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/Purchase" )}`}>
                    <img src="/invoice/Purchase.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Purchase</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/SalesInvoice" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/SalesInvoice" )}`}>
                    <img src="/invoice/sales.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1> Sales Invoice</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/WherehouseInvoice" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/WherehouseInvoice" )}`}>
                    <img src="/invoice/warehouse.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1> Warehouse Invoice</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/StockManagement" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/StockManagement" )}`}>
                    <img src="/invoice/stock.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1> Stock Management</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/InvoiceReport" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/InvoiceReport" )}`}>
                    <img src="/invoice/reprt.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Invoice Report</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/InvoiceTypes" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/InvoiceTypes" )}`}>
                    <img src="/invoice/types.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Invoice Types</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Invoice/InvoiceTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Invoice/InvoiceTutorial" )}`}>
                    <img src="/images/HRM/HRMTutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Invoice Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] p-[0.4vw] flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Hierarchy")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/Hierarchy.png" alt="" />
                  </div>
                  <h1> Hierarchy</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Hierarchy") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Hierarchy/BreakdownProcess" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Hierarchy/BreakdownProcess" )}`}>
                    <img src="/Hierarchy/down.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Breakdown Process</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Hierarchy/ProductionApproval" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Hierarchy/ProductionApproval" )}`}>
                    <img src="/Hierarchy/production.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Production Approval</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Hierarchy/BreakdownTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Hierarchy/BreakdownTutorial" )}`}>
                    <img src="/Hierarchy/tutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Breakdown Tutorial</h1>
                  </Link>
                </li>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 rounded-[0.2vw]">
                <button
                  className="text-[#e9278e] p-[0.4vw] flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]"
                  onClick={() => toggleList("Setting")}
                >
                  <div className="w-[1.5vw]">
                    <img src="/images/setting.png" alt="" />
                  </div>
                  <h1> Setting</h1>
                </button>
              </div>
              <div
                className="flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]"
                style={{ display: isActive("Setting") }}
              >
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/Localization" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/Localization" )}`}>
                    <img src="/setting/local.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Localization</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/Roles" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/Roles" )}`}>
                    <img src="/setting/roles.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Roles</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/Alert" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/Alert" )}`}>
                    <img src="/setting/alert.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Alert</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/Prefix" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/Prefix" )}`}>
                    <img src="/setting/prefix.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Prefix</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/FileManager" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/FileManager" )}`}>
                    <img src="/setting/file.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>File Manager</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/Announcement" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/Announcement" )}`}>
                    <img src="/setting/announce.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1>Announcement</h1>
                  </Link>
                </li>
                <li className="py-[0.3vw] my-[0.2vw]">
                  <Link to="/Setting/SettingTutorial" className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive( "/Setting/SettingTutorial" )}`}>
                    <img src="/Hierarchy/tutorial.png" className=" pl-[0.3vw] w-[1.5vw]" alt="" />{" "}
                    <h1> Setting Tutorial</h1>
                  </Link>
                </li>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[85vw] flex flex-row justify-between items-center px-[2vw] h-[4vw] border-b-[.1vw] border-[#e9278e]">
        <div className="flex flex-row items-center">
          <button className="mx-[0.4vw] bg-gray-300 text-[1vw] rounded-[0.2vw] px-[0.8vw] py-[.4vw]">
            <h1 className="text-[#e9278e] ">Kitchen Wrap Company</h1>
          </button>
          <button>
            <Link
              to="/"
              className="mx-[0.4vw] bg-[#e9278e] text-white rounded-[0.2vw] text-[1vw] px-[0.8vw] py-[.4vw]"
            >
              Login out
            </Link>
          </button>
          <Link to="/Calendar">
            <button className="mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]">
              <img className="w-[2vw]" src="/Header/calender.png" alt="" />
            </button>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-[1.2vw]">
          <button
            onClick={toggleNotice}
            className=" mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]"
          >
            <img className="w-[2vw]  " src="/Header/notice.png" alt="" />
          </button>
          {Visible && (
            <div
              className="absolute bg-gray-300 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[10] top-[4vw] right-[5vw] p-[0.5vw] rounded"
              style={{ width: "60vw", height: "10vw" }}
            >
              <img src="/Header/noticeboard.png" className="w-[8vw]" alt="" />
            </div>
          )}
          <button
            onClick={toggleNotification}
            className="mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]"
          >
            <img className="w-[2vw]" src="/Header/notification.png" alt="" />
          </button>
          {isVisible && (
            <div
              className="absolute bg-gray-300 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-[10] top-[4vw] right-[5vw] p-[0.5vw] rounded"
              style={{ width: "20vw", height: "20vw" }}
            >
              <img src="/Header/bell.png" className="w-[8vw]" alt="" />
            </div>
          )}
          <button className=" mx-[0.4vw] hover:bg-gray-300 p-[0.3vw] rounded-[0.2vw]">
            <img className="w-[2vw]  " src="/Header/refresh.png" alt="" />
          </button>
          <button className="mx-[0.4vw] bg-gray-300 text-[1vw] rounded-[0.2vw] px-[0.8vw] py-[.4vw]">
            <h1 className="text-[#e9278e]">English</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
