import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define a mapping of paths to page names
  const pathToPageName = {
    "/": "Dashboard",
    "/HRM": "HRM",
    "/CRM": "CRM",
    "/Sales": "Sales",
    "/Assessment": "Assessment",
    "/Inventory": "Inventory",
    "/Production": "Production",
    "/Account": "Account",
    "/Invoices": "Invoices",
    "/Dissolution": "Dissolution",
    "/Hierarchy": "Hierarchy",
    "/Setting": "Setting",
  };
  return (
    <div className='flex flex-row '>
    <div className='bg-white overflow-y-auto rounded-r-sm border-r-[0.11vw] border-[#E9278E] w-[18vw] h-[100vh]'>
        <div>
          <div className='mx-auto pt-[2vw] w-[12vw]'><img src="public/Logo/Kitchen-white.jpg" alt="" /></div>
        </div>
        <ul className="flex flex-col my-[2vw] items-start list-none">
        {[
  { path: "/", label: "Dashboard", icon: "Dashboard.png" },
  { path: "/HRM", label: "HRM", icon: "HRM.png", subItems: [
    { path: "/HRM/Employees", label: "Employees", icon: "src/images/HRM/Employee.png" },
    { path: "/HRM/ManageSalary", label: "Manage Salary", icon: "src/images/HRM/Employee.png"},
    { path: "/HRM/ManageLeave", label: "Manage Leave", icon: "src/images/HRM/Employee.png" },
    { path: "/HRM/CoreHr", label: "CoreHr" , icon: "src/images/HRM/Employee.png"},
    { path: "/HRM/Performance", label: "Performance", icon: "src/images/HRM/Employee.png" },
    { path: "/HRM/Hrreport", label: "HRM report" , icon: "src/images/HRM/Employee.png"},
    { path: "/HRM/HrSetting", label: "HRM Setting" , icon: "src/images/HRM/Employee.png"},
    { path: "/HRM/HrRequest", label: "HRM Request" , icon: "src/images/HRM/Employee.png"},
    { path: "/HRM/HRMTutorial", label: "HRM Tutorial" , icon: "src/images/HRM/Employee.png"},
  ] },
  { path: "/CRM", label: "CRM", icon: "CRM.png" , subItems: [
    { path: "/CRM/PreLeads", label: "PreLeads" },
    { path: "/CRM/Leads", label: "Leads" },
    { path: "/CRM/Estimates", label: "Estimates" },
    { path: "/CRM/Customers", label: "Customers" },
    { path: "/CRM/ProjectManager", label: "Project Manager" },
    { path: "/CRM/AfterSales", label: "After Sales" },
    { path: "/CRM/CRMTutorial", label: "CRM Tutorial" },
  ] },
  { path: "/Sales", label: "Sales", icon: "salesManagement.png", subItems: [
    { path: "/Sales/CallandMeeting", label: "Call and Meeting" },
    { path: "/Sales/DesignerActivities", label: "Designer Activities" },
    { path: "/Sales/InstallationSchedule", label: "Installation Schedule" },
    { path: "/Sales/SalesReport", label: "Sales Report"},
    { path: "/Sales/SalesGoal", label: "Sales Goal" },
    { path: "/Sales/MonthlyTargetBonus", label: "Monthly Target Bonus" },
    { path: "/Sales/SalesPriceList", label: "Sales Price List" },
    { path: "/Sales/SalesTutorial", label: "Sales Tutorial" },
  ] },
  { path: "/Assessment", label: "Assessment", icon: "Technical.png" , subItems: [
    { path: "/Assessment/Technicalreview", label: "Technical review" },
    { path: "/Assessment/SiteVisitRequest", label: "Site Visit Request" },
  ] },
  { path: "/Inventory", label: "Inventory", icon: "Inventory.png" , subItems: [
    { path: "/Inventory/Employees", label: "Employees" },
    { path: "/Inventory/Payroll", label: "Payroll" },
    { path: "/Inventory/Reports", label: "Reports" }
  ] },
  { path: "/Production", label: "Production", icon: "Production.png" , subItems: [
    { path: "/Production/Employees", label: "Employees" },
    { path: "/Production/Payroll", label: "Payroll" },
    { path: "/Production/Reports", label: "Reports" }
  ] },
  { path: "/Account", label: "Account", icon: "Account.png" , subItems: [
    { path: "/Account/Employees", label: "Employees" },
    { path: "/Account/Payroll", label: "Payroll" },
    { path: "/Account/Reports", label: "Reports" }
  ] },
  { path: "/Invoices", label: "Invoices", icon: "Invoices.png" , subItems: [
    { path: "/Invoices/Employees", label: "Employees" },
    { path: "/Invoices/Payroll", label: "Payroll" },
    { path: "/Invoices/Reports", label: "Reports" }
  ] },
  { path: "/Hierarchy", label: "Hierarchy", icon: "Hierarchy.png" , subItems: [
    { path: "/Hierarchy/Employees", label: "Employees" },
    { path: "/Hierarchy/Payroll", label: "Payroll" },
    { path: "/Hierarchy/Reports", label: "Reports" }
  ] },
  { path: "/Setting", label: "Setting", icon: "setting.png" }
].map((navItem) => (
  <li key={navItem.label} className={`flex flex-col mx-[3.5vw] my-[0.2vw] hover:bg-gray-200 rounded-sm p-[0.5vw] w-[12vw] ${currentPath === navItem.path ? "bg-gray-300  shadow-lg  rounded-md" : ""}`}>
    <Link to={navItem.path} className={`text-[#e9278e] font-roboto text-[1vw] flex flex-row items-center justify-between`}>
      <div className='flex flex-row items-center bg-red'>
        <img 
          src={`src/images/${navItem.icon}`} 
          className="w-[1.5vw] mr-[0.8vw] transition duration-500" 
          alt={navItem.label} 
        />
        <h1 className='text-[#e9278e] font-roboto text-[1vw]'>{navItem.label}</h1>
      </div>
      {navItem.subItems && navItem.subItems.length > 0 && (
        <img src="/HRM/arrow.png" alt="" className={`transition duration-500 transform ${currentPath === navItem.path ? 'rotate-180' : 'rotate-0'} w-[0.5vw]`} />
      )}
    </Link>
    {currentPath === navItem.path && navItem.subItems && navItem.subItems.length > 0 && (
      <ul className="mt-[0.5vw] border-l-[0.2vw] border-[#e9278e] rounded-sm shadow-md">
        {navItem.subItems.map((subItem) => (
          <li key={subItem.label} className="p-[0.5vw]  hover:bg-gray-300">
            <Link to={subItem.path} className="text-[#e9278e]  font-roboto text-[0.8vw]">{subItem.label}</Link>
          </li>
        ))}
      </ul>
    )}
  </li>
))}
        </ul>
    </div>
      <div className='flex flex-col'>
        <div className=' w-[82vw] flex flex-row items-center px-[2vw] h-[4vw] border-[#E9278E] border-b-[0.11vw]'>
            <div className='w-[3vw] rounded-md hover:bg-pink-100 p-[0.5vw]'>
              <img src="public/dashboard-image/menu.png" alt="" />
            </div>
            <div></div>
            <div></div>
        </div>
        <div className='relative h-[90vh] w-[82vw]'>
        </div>
      </div>
    </div>
  )
}

export default Header
