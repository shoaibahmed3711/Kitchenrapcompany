import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className='flex flex-row '>
    <div className='bg-white overflow-y-auto rounded-r-sm border-r-[0.11vw] border-[#E9278E] w-[18vw] h-[100vh]'>
      <div>
        <div className='mx-auto pt-[2vw] w-[12vw]'><img src="public/Logo/Kitchen-white.jpg" alt="" /></div>
        </div>
    <ul className="flex flex-col my-[2vw] items-start list-none">
        {[
  { path: "/", label: "Dashboard", icon: "src/images/Dashboard.png" },
  { path: "/HRM", label: "HRM", icon: "src/images/HRM.png", subItems: [
    { path: "/HRM/Employees", label: "Employees" },
    { path: "/HRM/ManageSalary", label: "Manage Salary"},
    { path: "/HRM/ManageLeave", label: "Manage Leave" },
    { path: "/HRM/CoreHr", label: "CoreHr" },
    { path: "/HRM/Performance", label: "Performance" },
    { path: "/HRM/Hrreport", label: "HRM report" },
    { path: "/HRM/HrSetting", label: "HRM Setting"},
    { path: "/HRM/HrRequest", label: "HRM Request"},
    { path: "/HRM/HRMTutorial", label: "HRM Tutorial"},
  ] },
  { path: "/CRM", label: "CRM", icon: "src/images/CRM.png" , subItems: [
    { path: "/CRM/PreLeads", label: "PreLeads" },
    { path: "/CRM/Leads", label: "Leads" },
    { path: "/CRM/Estimates", label: "Estimates" },
    { path: "/CRM/Customers", label: "Customers" },
    { path: "/CRM/ProjectManager", label: "Project Manager" },
    { path: "/CRM/AfterSales", label: "After Sales" },
    { path: "/CRM/CRMTutorial", label: "CRM Tutorial" },
  ] },
  { path: "/Sales", label: "Sales", icon: "src/images/salesManagement.png", subItems: [
    { path: "/Sales/CallandMeeting", label: "Call and Meeting" },
    { path: "/Sales/DesignerActivities", label: "Designer Activities" },
    { path: "/Sales/InstallationSchedule", label: "Installation Schedule" },
    { path: "/Sales/SalesReport", label: "Sales Report"},
    { path: "/Sales/SalesGoal", label: "Sales Goal" },
    { path: "/Sales/MonthlyTargetBonus", label: "Monthly Target Bonus" },
    { path: "/Sales/SalesPriceList", label: "Sales Price List" },
    { path: "/Sales/SalesTutorial", label: "Sales Tutorial" },
  ] },
  { path: "/Assessment", label: "Assessment", icon: "src/images/Technical.png" , subItems: [
    { path: "/Assessment/Technicalreview", label: "Technical review" },
    { path: "/Assessment/SiteVisitRequest", label: "Site Visit Request" },
  ] },
  { path: "/Inventory", label: "Inventory", icon: "src/images/Inventory.png" , subItems: [
    { path: "/Inventory/Wherehouse", label: "Wherehouse" },
    { path: "/Inventory/ProductSetting", label: "ProductSetting" },
    { path: "/Inventory/Products", label: "Products" },
    { path: "/Inventory/Supplier", label: "Supplier" },
    { path: "/Inventory/InventoryReport", label: "InventoryReport" }
  ] },
  { path: "/Production", label: "Production", icon: "src/images/Production.png" , subItems: [
    { path: "/Production/ProjectStatus", label: "ProjectStatus" },
    { path: "/Production/InstallizationProcess", label: "InstallizationProcess" },
    { path: "/Production/Warranty", label: "Warranty" }
  ] },
  { path: "/Account", label: "Account", icon: "src/images/Account.png" , subItems: [
    { path: "/Account/Finance", label: "Finance" },
    { path: "/Account/Accounting", label: "Accounting" },
    { path: "/Account/CheckManagement", label: "CheckManagement" },
    { path: "/Account/ManageCurrency", label: "ManageCurrency" },
    { path: "/Account/AccountReport", label: "AccountReport" },
    { path: "/Account/TaxManagement", label: "TaxManagement" },
    { path: "/Account/DuePayment", label: "DuePayment" },
    { path: "/Account/AssestManagement", label: "AssestManagement" },
  ] },
  { path: "/Invoices", label: "Invoices", icon: "src/images/Invoices.png" , subItems: [
    { path: "/Invoice/Purchase", label: "Purchase" },
    { path: "/Invoice/SalesInvoice", label: "Sales Invoice" },
    { path: "/Invoice/WherehouseInvoice", label: "Warehouse Invoice" },
    { path: "/Invoice/StockManagement", label: "Stock Management" },
    { path: "/Invoice/InvoiceReport", label: "Invoice Report" },
    { path: "/Invoice/InvoiceTypes", label: "Invoice Types" },
  ] },
  { path: "/Hierarchy", label: "Hierarchy", icon: "src/images/Hierarchy.png" , subItems: [
    { path: "/Hierarchy/BreakdownProcess", label: "Breakdown Process" },
    { path: "/Hierarchy/ProductionApproval", label: "Production Approval" },
    { path: "/Hierarchy/BreakdownPricing", label: "Breakdown Pricing" },
    { path: "/Hierarchy/BreakdownSetting", label: "Breakdown Setting" },
    { path: "/Hierarchy/BreakdownTutorial", label: "Breakdown Tutorial" },
  ] },
  { path: "/Setting", label: "Setting", icon: "src/images/setting.png" }
].map((navItem) => (
  <li key={navItem.label} className={`flex flex-col mx-[3.5vw] my-[0.2vw] hover:bg-gray-200 rounded-sm p-[0.5vw] w-[12vw] ${currentPath === navItem.path ? "bg-gray-300  shadow-lg  rounded-md" : ""}`}>
    <Link to={navItem.path} className={`text-[#e9278e] font-roboto text-[1vw] flex flex-row items-center justify-between`}>
      <div className='flex flex-row items-center bg-red'>
        <img 
          src={`${navItem.icon}`} 
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
