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
      <div className="left-header bg-white overflow-y-auto px-[1.5vw] rounded-r-sm border-r-[0.11vw] border-[#E9278E] w-[15vw] h-[100vh]">
        <div className="flex flex-col gap-[0.5vw]">
          <div className="mx-auto pt-[2vw] w-[10vw]">
            <img src="/Logo/Kitchen-white.jpg" alt="" />
          </div>
          <div className=" flex flex-col gap-[0.5vw]">
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
                  <Link
                    to="/HRM/ManageSalary"
                    className={`text-[.8vw] flex flex-row items-center gap-[0.2vw] hover:text-[#e9278e] ${isLinkActive(
                      "/HRM/ManageSalary"
                    )}`}
                  >
                    <img
                      src="/images/HRM/Salary.png"
                      className=" pl-[0.3vw] w-[1.5vw]"
                      alt=""
                    />{" "}
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
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM"
                    )}`}
                  >
                    CRM Dashboard
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/PreLeads"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/PreLeads"
                    )}`}
                  >
                    PreLeads
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/Leads"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/Leads"
                    )}`}
                  >
                    Leads
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/Estimates"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/Estimates"
                    )}`}
                  >
                    Estimates
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/Customers"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/Customers"
                    )}`}
                  >
                    Customers
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/ProjectManager"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/ProjectManager"
                    )}`}
                  >
                    Project Manager
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/AfterSales"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/AfterSales"
                    )}`}
                  >
                    After Sales
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/CRM/CRMTutorial"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/CRM/CRMTutorial"
                    )}`}
                  >
                    CRMTutorial
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
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales"
                    )}`}
                  >
                    Sales Dashboard
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/CallandMeeting"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/CallandMeeting"
                    )}`}
                  >
                    Call and Meeting
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/DesignerActivities"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/DesignerActivities"
                    )}`}
                  >
                    Designer Activities
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/InstallationSchedule"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/InstallationSchedule"
                    )}`}
                  >
                    Installation Schedule
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/SalesReport"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/SalesReport"
                    )}`}
                  >
                    SalesReport
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/SalesGoal"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/SalesGoal"
                    )}`}
                  >
                    SalesGoal
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/MonthlyTargetBonus"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/MonthlyTargetBonus"
                    )}`}
                  >
                    MonthlyTargetBonus
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/SalesPriceList"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/SalesPriceList"
                    )}`}
                  >
                    SalesPriceList
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Sales/SalesTutorial"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Sales/SalesTutorial"
                    )}`}
                  >
                    SalesTutorial
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
                <li className="p-[0.3vw]">
                  <Link
                    to="/Assessment/Technicalreview"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Assessment/Technicalreview"
                    )}`}
                  >
                    TechnicalReview
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Assessment/SiteVisitRequest"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Assessment/SiteVisitRequest"
                    )}`}
                  >
                    Site Visit Request
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
                <li className="p-[0.3vw]">
                  <Link
                    to="/Inventory/Wherehouse"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Inventory/Wherehouse"
                    )}`}
                  >
                    Warehouse
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Inventory/ProductSetting"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Inventory/ProductSetting"
                    )}`}
                  >
                    Product Setting
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Inventory/Products"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Inventory/Products"
                    )}`}
                  >
                    Products
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Inventory/Supplier"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Inventory/Supplier"
                    )}`}
                  >
                    Supplier
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Inventory/InventoryReport"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Inventory/InventoryReport"
                    )}`}
                  >
                    Inventory Report
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
                <li className="p-[0.3vw]">
                  <Link
                    to="/Production/ProjectStatus"
                    className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Production/ProjectStatus"
                    )}`}
                  >
                    Project Status
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Production/InstallizationProcess"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Production/InstallizationProcess"
                    )}`}
                  >
                    Installation Process
                  </Link>
                </li>
                <li className="p-[0.3vw]">
                  <Link
                    to="/Production/Warranty"
                    className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive(
                      "/Production/Warranty"
                    )}`}
                  >
                    Warranty
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[85vw] flex flex-row justify-between items-center px-[2vw] h-[4vw] border-b-[.1vw] border-[#e9278e]">
        <div className="flex flex-row items-center">
        <div className="burger hover:bg-pink-200 rounded-[0.2vw] mr-[1vw]">
            <img src="public/Header/burger.png" className="w-[3vw]" alt="" />
        </div>
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
This is the code now just write code for a specific logic when I click on the burger button then the width of the left-header is 5vw and the names of the main links such as CRM HRM and dashboards like all not the sub links their h1 will disappear and if again click on burger button the its appear and width of left navbar is 15vw just write for it don't for all and also tell me where can I paste it