import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  const toggleList = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  const isActive = (buttonName) => {
    return activeButton === buttonName ? 'block' : 'none';
  };

  const isLinkActive = (link) => {
    return location.pathname === link ? 'text-[#e9278e] bg-gray-200 border-l-[0.2vw] rounded-[0.1vw] border-[#E9278E] py-[0.5vw] pr-[3vw]' : 'text-[#E9278E]';
  };

  return (
    <div className='flex flex-row'>
    <div className='bg-white overflow-y-auto px-[1.5vw] rounded-r-sm border-r-[0.11vw] border-[#E9278E] w-[15vw] h-[100vh]'>
      <div className='flex flex-col gap-[0.5vw]'>
        <div className='mx-auto pt-[2vw] w-[10vw]'><img src="/Logo/Kitchen-white.jpg" alt="" /></div>
        <div className=' flex flex-col gap-[0.5vw]'>
          <div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <Link to='/' className='text-[#e9278e] p-[0.4vw] border-l-[0.2vw] border-[#e9278e] flex flex-row items-center gap-[0.4vw] font-roboto text-[1vw]'>
                <div className='w-[1.5vw]'><img src="src/images/Dashboard.png" alt="" /></div>
                <h1>Dashboard</h1>
              </Link>
            </div>
          </div>
          </div>
          <div>
          <div className='bg-gray-200 rounded-[0.2vw]'>
            <button className='text-[#e9278e] p-[0.4vw] font-roboto border-l-[0.2vw] flex flex-row items-center border-[#e9278e] text-[1vw]' onClick={() => toggleList("HRM")}>
              <div className='flex flex-row items-center justify-between gap-[0.4vw]'>
                <div className='w-[1.5vw]'><img src="/images/HRM.png" alt="" /></div>
                <h1>HRM</h1>
              <div className='w-[1vw] ml-[5vw]'>
                <img src="/HRM/arrow.png" alt="" />
              </div>
              </div>
              </button>
          </div>
          <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("HRM") }}>
            <li className='p-[0.3vw]'><Link to='/HRM/Employees' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/Employees')}`}>Employee</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/ManageSalary' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/ManageSalary')}`}>Manage Salary</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/ManageLeave' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/ManageLeave')}`}>Manage Leave</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/CoreHr' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/CoreHr')}`}>Core HR</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/Performance' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/Performance')}`}>Performance</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/Hrreport' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/Hrreport')}`}>HRM Report</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/HrSetting' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/HrSetting')}`}>HRM Setting</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/HrRequest' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/HrRequest')}`}>Hr Request</Link></li>
            <li className='p-[0.3vw]'><Link to='/HRM/HRMTutorial' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/HRM/HRMTutorial')}`}>HRM Tutorial</Link></li>
          </div>
          </div>
          <div>
          <div className='bg-gray-200 rounded-[0.2vw]'>
            <button className=' flex flex-row items-center gap-[0.4vw] text-[#e9278e] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("CRM")}>
            <div className='w-[1.5vw]'><img src="src/images/CRM.png" alt="" /></div>
              <h1>CRM</h1>
              </button>
          </div>
          <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("CRM") }}>
              <li className='p-[0.3vw]'><Link to='/CRM' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM')}`}>CRM</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/PreLeads' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/PreLeads')}`}>PreLeads</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/Leads' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/Leads')}`}>Leads</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/Estimates' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/Estimates')}`}>Estimates</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/Customers' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/Customers')}`}>Customers</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/ProjectManager' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/ProjectManager')}`}>Project Manager</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/AfterSales' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/AfterSales')}`}>After Sales</Link></li>
              <li className='p-[0.3vw]'><Link to='/CRM/CRMTutorial' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/CRM/CRMTutorial')}`}>CRMTutorial</Link></li>
            </div>
          </div>
          <div>
          <div className='bg-gray-200 rounded-[0.2vw]'>
            <button className='text-[#e9278e] flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Sales")}>
            <div className='w-[1.5vw]'><img src="src/images/salesManagement.png" alt="" /></div>
              <h1>Sales</h1>
              </button>
          </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]'  style={{ display: isActive("Sales") }}>
              <li className='p-[0.3vw]'><Link to='/Sales' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales')}`}>Sales</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/CallandMeeting' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/CallandMeeting')}`}>Call and Meeting</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/DesignerActivities' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/DesignerActivities')}`}>Designer Activities</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/InstallationSchedule' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/InstallationSchedule')}`}>Installation Schedule</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/SalesReport' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/SalesReport')}`}>SalesReport</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/SalesGoal' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/SalesGoal')}`}>SalesGoal</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/MonthlyTargetBonus' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/MonthlyTargetBonus')}`}>MonthlyTargetBonus</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/SalesPriceList' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/SalesPriceList')}`}>SalesPriceList</Link></li>
              <li className='p-[0.3vw]'><Link to='/Sales/SalesTutorial' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Sales/SalesTutorial')}`}>SalesTutorial</Link></li>
            </div>
          </div>
          <div>
          <div className='bg-gray-200 rounded-[0.2vw]'>
            <button className='text-[#e9278e]  flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Assessment")}>
            <div className='w-[1.5vw]'><img src="src/images/Technical.png" alt="" /></div>
             <h1>Assessment</h1></button>
          </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Assessment") }}>
             <li className='p-[0.3vw]'><Link to='/Assessment/Technicalreview' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Assessment/Technicalreview')}`}>TechnicalReview</Link></li>
             <li className='p-[0.3vw]'><Link to='/Assessment/SiteVisitRequest' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Assessment/SiteVisitRequest')}`}>Site Visit Request</Link></li>
            </div>
          </div>
          <div>
          <div className='bg-gray-200 rounded-[0.2vw]'>
              <button className='text-[#e9278e]  flex flex-row items-center gap-[0.3vw] p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Inventory")}>
              <div className='w-[1.5vw]'><img src="src/images/Inventory.png" alt="" /></div>
                <h1>Inventory</h1></button>
            </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Inventory") }}>
              <li className='p-[0.3vw]'><Link to='/Inventory/Wherehouse' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Inventory/Wherehouse')}`}>Warehouse</Link></li>
              <li className='p-[0.3vw]'><Link to='/Inventory/ProductSetting' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Inventory/ProductSetting')}`}>Product Setting</Link></li>
              <li className='p-[0.3vw]'><Link to='/Inventory/Products' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Inventory/Products')}`}>Products</Link></li>
              <li className='p-[0.3vw]'><Link to='/Inventory/Supplier' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Inventory/Supplier')}`}>Supplier</Link></li>
              <li className='p-[0.3vw]'><Link to='/Inventory/InventoryReport' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Inventory/InventoryReport')}`}>Inventory Report</Link></li>
            </div>
          </div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <button className='text-[#e9278e] p-[0.4vw]  flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Production")}>
              <div className='w-[1.5vw]'><img src="src/images/Production.png" alt="" /></div>
                <h1>Production</h1></button>
            </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Production") }}>
              <li className='p-[0.3vw]'><Link to='/Production/ProjectStatus' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Production/ProjectStatus')}`}>Project Status</Link></li>
              <li className='p-[0.3vw]'><Link to='/Production/InstallizationProcess' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Production/InstallizationProcess')}`}>Installation Process</Link></li>
              <li className='p-[0.3vw]'><Link to='/Production/Warranty' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Production/Warranty')}`}>Warranty</Link></li>
            </div>
          </div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <button className='text-[#e9278e] flex flex-row items-center gap-[0.3vw]  p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Account")}>
              <div className='w-[1.5vw]'><img src="src/images/Account.png" alt="" /></div>
              <h1>Account</h1></button>
            </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Account") }}>
              <li className='p-[0.3vw]'><Link to='/Account/Finance' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/Finance')}`}>Finance</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/Accounting' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/Accounting')}`}>Accounting</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/CheckManagement' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/CheckManagement')}`}>Check Management</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/ManageCurrency' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/ManageCurrency')}`}>Manage Currency</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/AccountReport' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/AccountReport')}`}>Account Report</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/TaxManagement' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/TaxManagement')}`}>Tax Management</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/DuePayment' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/DuePayment')}`}>Due Payment</Link></li>
              <li className='p-[0.3vw]'><Link to='/Account/AssestManagement' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Account/AssestManagement')}`}>Asset Management</Link></li>
            </div>
          </div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <button className='text-[#e9278e] p-[0.4vw] flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Invoices")}>
              <div className='w-[1.5vw]'><img src="src/images/Invoices.png" alt="" /></div>
                <h1>Invoices</h1></button>
            </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Invoices") }}>
              <li className='p-[0.3vw]'><Link to='/Invoice/Purchase' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/Purchase')}`}>Purchase</Link></li>
              <li className='p-[0.3vw]'><Link to='/Invoice/SalesInvoice' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/SalesInvoice')}`}>Sales Invoice</Link></li>
              <li className='p-[0.3vw]'><Link to='/Invoice/WherehouseInvoice' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/WherehouseInvoice')}`}>Warehouse Invoice</Link></li>
              <li className='p-[0.3vw]'><Link to='/Invoice/StockManagement' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/StockManagement')}`}>Stock Management</Link></li>
              <li className='p-[0.3vw]'><Link to='/Invoice/InvoiceReport' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/InvoiceReport')}`}>Invoice Report</Link></li>
              <li className='p-[0.3vw]'><Link to='/Invoice/InvoiceTypes' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Invoice/InvoiceTypes')}`}>Invoice Types</Link></li>
            </div>
          </div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <button className='text-[#e9278e] p-[0.4vw] flex flex-row items-center gap-[0.3vw]  font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Hierarchy")}>
              <div className='w-[1.5vw]'><img src="src/images/Hierarchy.png" alt="" /></div>
              <h1> Hierarchy</h1></button>
            </div>
            <div className='flex flex-col mx-[.5vw] my-[0.2vw] list-none w-[15vw] rounded-sm p-[0.5vw]' style={{ display: isActive("Hierarchy") }}>
              <li className='p-[0.3vw]'><Link to='/Hierarchy/BreakdownProcess' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Hierarchy/BreakdownProcess')}`}>Breakdown Process</Link></li>
              <li className='p-[0.3vw]'><Link to='/Hierarchy/BreakdownPricing' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Hierarchy/BreakdownPricing')}`}>Breakdown Pricing</Link></li>
              <li className='p-[0.3vw]'><Link to='/Hierarchy/BreakdownSetting' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Hierarchy/BreakdownSetting')}`}>Breakdown Setting</Link></li>
              <li className='p-[0.3vw]'><Link to='/Hierarchy/ProductionApproval' className={` text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Hierarchy/ProductionApproval')}`}>Production Approval</Link></li>
              <li className='p-[0.3vw]'><Link to='/Hierarchy/BreakdownTutorial' className={`text-[1vw] hover:text-[#e9278e] ${isLinkActive('/Hierarchy/BreakdownTutorial')}`}>Breakdown Tutorial</Link></li>
            </div>
          </div>
          <div>
            <div className='bg-gray-200 rounded-[0.2vw]'>
              <Link to='/Setting' className='text-[#e9278e] flex flex-row items-center gap-[0.3vw]  p-[0.4vw] font-roboto border-l-[0.2vw] border-[#e9278e] text-[1vw]' onClick={() => toggleList("Setting")}>
              <div className='w-[1.5vw]'><img src="src/images/setting.png" alt="" /></div>
              <h1>Setting</h1></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white w-[85vw] h-[4vw] border-b-[.1vw] border-[#e9278e]' ></div>
    </div>
  );
};

export default Header;