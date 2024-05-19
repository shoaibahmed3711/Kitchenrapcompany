import react from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import HRM from './pages/HRM/HRM';
import CRM from './pages/CRM/CRM';
import Sales from './pages/Sales/Sales';
import Assessment from './pages/Assessment/Assessment';
import Inventory from './pages/Inventory/Inventory';
import Production from './pages/Production/Production';
import Account from './pages/Account/Account';
import Invoices from './pages/Invoices/Invoices';
import Dissolution from './pages/Dissolution/Dissolution';
import Hierarchy from './pages/Hierarchy/Hierarchy';
import Employees from './pages/HRM/HRMpages/Employees';
import Contract from './pages/HRM/HRMpages/Contract';
import Manage from './pages/HRM/HRMpages/Manage';
import ManageSalary from './pages/HRM/HRMpages/ManageSalary';
import ManageLeave from './pages/HRM/HRMpages/ManageLeave';
import CoreHr from './pages/HRM/HRMpages/CoreHr';
import Performance from './pages/HRM/HRMpages/Performance';
import Hrreport from './pages/HRM/HRMpages/Hrreport';
import HrSetting from './pages/HRM/HRMpages/HrSetting';
import HrRequest from './pages/HRM/HRMpages/HrRequest';
import HRMTutorial from './pages/HRM/HRMpages/HRMTutorial';
import PreLeads from './pages/CRM/CRMPages/PreLeads';
import Leads from './pages/CRM/CRMPages/Leads';
import Estimates from './pages/CRM/CRMPages/Estimates';
import Customers from './pages/CRM/CRMPages/Customers';
import ProjectManager from './pages/CRM/CRMPages/ProjectManager';
import AfterSales from './pages/CRM/CRMPages/AfterSales';
import CRMTutorial from './pages/CRM/CRMPages/CRMTutorial';
import CallandMeeting from './pages/Sales/SalesPages/CallandMeeting';
import DesignerActivities from './pages/Sales/SalesPages/DesignerActivities';
import SalesOperation from './pages/Sales/SalesPages/SalesOperation';
import SalesPriceList from './pages/Sales/SalesPages/SalesPriceList';
import InstallationSchedule from './pages/Sales/SalesPages/InstallationSchedule';
import SalesReport from './pages/Sales/SalesPages/SalesReport';
import SalesGoal from  './pages/Sales/SalesPages/SalesGoal';
import MonthlyTargetBonus from './pages/Sales/SalesPages/MonthlyTargetBonus';
import SalesTutorial from './pages/Sales/SalesPages/SalesTutorial';
import Quotation from './pages/Sales/SalesPages/SalesReport/Quotation';
import SalesCW from './pages/Sales/SalesPages/SalesReport/SalesCW';
import SalesUW from './pages/Sales/SalesPages/SalesReport/SalesUW';
import DailySales from './pages/Sales/SalesPages/SalesReport/DailySales';
import ReceivePayment from './pages/Sales/SalesPages/SalesReport/ReceivePayment';
import SiteVisitRequest from './pages/Assessment/Pages/SiteVisitRequest';
import Technicalreview from './pages/Assessment/Pages/Technicalreview';
import Wherehouse from './pages/Inventory/pages/Wherehouse';
import ProductSetting from './pages/Inventory/pages/ProductSetting';
import Products from './pages/Inventory/pages/Products';
import Supplier from './pages/Inventory/pages/Supplier';
import InventoryReport from './pages/Inventory/pages/InventoryReport';
import InstallizationProcess from './pages/Production/pages/InstallizationProcess';
import ProjectStatus from './pages/Production/pages/ProjectStatus'
import Warranty from './pages/Production/pages/Warranty';
import Finance from './pages/Account/pages/Finance';
import Accounting from './pages/Account/pages/Accounting';
import CheckManagement from './pages/Account/pages/CheckManagement';
import ManageCurrency from './pages/Account/pages/ManageCurrency';
import AccountReport from './pages/Account/pages/AccountReport';
import TaxManagement from './pages/Account/pages/TaxManagement';
import DuePayment from './pages/Account/pages/DuePayment';
import AssestManagement from './pages/Account/pages/AssestManagement';
import Purchase from './pages/Invoices/pages/Purchase';
import SalesInvoice from './pages/Invoices/pages/SalesInvoice';
import WherehouseInvoice from './pages/Invoices/pages/WherehouseInvoice';
import StockManagement from './pages/Invoices/pages/StockManagement';
import InvoiceReport from './pages/Invoices/pages/InvoiceReport';
import InvoiceTypes from './pages/Invoices/pages/InvoiceTypes';
import BreakdownProcess from './pages/Hierarchy/pages/BreakdownProcess';
import BreakdownPricing from './pages/Hierarchy/pages/BreakdownPricing';
import BreakdownSetting from './pages/Hierarchy/pages/BreakdownSetting';
import ProductionApproval from './pages/Hierarchy/pages/ProductionApproval';
import BreakdownTutorial from './pages/Hierarchy/pages/BreakdownTutorial';
import Login from './pages/Login/Login';
import Setting from './pages/Setting/Setting';
import Localization from './pages/Setting/pages/Localization';
import Roles from './pages/Setting/pages/Roles';
import Alert from './pages/Setting/pages/Alert';
import Prefix from './pages/Setting/pages/Prefix';
import FileManager from './pages/Setting/pages/FileManager';
import Announcement from './pages/Setting/pages/Announcement';
import SettingTutorial from './pages/Sales/SalesPages/SettingTutorial';

function App() {

  const router = createBrowserRouter([
    {
      path: "/Setting/Localization",
      element: <><Header /><Localization /></>,
    },
    {
      path: "/Setting/Roles",
      element: <><Header /><Roles /></>,
    },
    {
      path: "/Setting/Alert",
      element: <><Header /><Alert /></>,
    },
    {
      path: "/Setting/Prefix",
      element: <><Header /><Prefix /></>,
    },
    {
      path: "/Setting/FileManager",
      element: <><Header /><FileManager /></>,
    },
    {
      path: "/Setting/Announcement",
      element: <><Header /><Announcement /></>,
    },
    {
      path: "/Setting/SettingTutorial",
      element: <><Header /><SettingTutorial /></>,
    },
    {
      path: "/Login",
      element: <><Login /></>  ,
    },
    
    {
      path: "/",
      element: <><Header /><Dashboard /></>  ,
    },
    {
      path: "/HRM",
      element: <><Header /><HRM /></>,
    },
    {
      path: "/CRM",
      element: <><Header /><CRM /></>,
    },
    {
      path: "/Sales",
      element: <><Header /><Sales /></>,
    },
    {
      path: "/Assessment",
      element: <><Header /><Assessment /></>,
    },
    {
      path: "/Inventory",
      element: <><Header /><Inventory /></>,
    },
    {
      path: "/Production",
      element: <><Header /><Production /></>,
    },
    {
      path: "/Account",
      element: <><Header /><Account /></>,
    },
    {
      path: "/Invoices",
      element: <><Header /><Invoices /></>,
    },
    {
      path: "/Dissolution",
      element: <><Header /><Dissolution /></>,
    },
    {
      path: "/Hierarchy",
      element: <><Header /><Hierarchy /></>,
    },
    {
      path: "/Setting",
      element: <><Header /><Setting /></>,
    },
    {
      path: "/HRM/Employees",
      element: <><Header /><HRM /><Employees /></>,
    },
    {
      path: "/Contract",
      element: <><Header /><HRM /><Contract /></>,
    },
    {
      path: "/Manage",
      element: <><Header /><HRM /><Manage /></>,
    },
    {
      path: "/HRM/ManageSalary",
      element: <><Header /><ManageSalary /></>,
    },
    {
      path: "/HRM/ManageLeave",
      element: <><Header /><ManageLeave /></>,
    },
    {
      path: "/HRM/CoreHr",
      element: <><Header /><CoreHr /></>,
    },
    {
      path: "/HRM/Performance",
      element: <><Header /><Performance /></>,
    },
    {
      path: "/HRM/Hrreport",
      element: <><Header /><Hrreport /></>,
    },
    {
      path: "/HRM/HrSetting",
      element: <><Header /><HrSetting /></>,
    },
    {
      path: "/HRM/HrRequest",
      element: <><Header /><HrRequest /></>,
    },
    {
      path: "/HRM/HRMTutorial",
      element: <><Header /><HRMTutorial /></>,
    },
    {
      path: "/CRM/PreLeads",
      element: <><Header /><PreLeads /></>,
    },
    {
      path: "/CRM/Leads",
      element: <><Header /><Leads /></>,
    },
    {
      path: "/CRM/Estimates",
      element: <><Header /><Estimates /></>,
    },
    {
      path: "/CRM/Customers",
      element: <><Header /><Customers /></>,
    },
    {
      path: "/CRM/ProjectManager",
      element: <><Header /><ProjectManager /></>,
    },
    {
      path: "/CRM/AfterSales",
      element: <><Header /><AfterSales /></>,
    },
    {
      path: "/CRM/CRMTutorial",
      element: <><Header /><CRMTutorial /></>,
    },
    {
      path: "/Sales/CallandMeeting",
      element: <><Header /><CallandMeeting /></>,
    },
    {
      path: "/Sales/DesignerActivities",
      element: <><Header /><DesignerActivities /></>,
    },
    {
      path: "/Sales/SalesOperation",
      element: <><Header /><SalesOperation /></>,
    },
    {
      path: "/Sales/SalesPriceList",
      element: <><Header /><SalesPriceList /></>,
    },
    {
      path: "/Sales/InstallationSchedule",
      element: <><Header /><InstallationSchedule /></>,
    },
    {
      path: "/Sales/SalesReport",
      element: <><Header /><SalesReport /></>,
    },
    {
      path: "/Sales/SalesGoal",
      element: <><Header /><SalesGoal /></>,
    },
    {
      path: "/Sales/MonthlyTargetBonus",
      element: <><Header /><MonthlyTargetBonus /></>,
    },
    {
      path: "/Sales/SalesTutorial",
      element: <><Header /><SalesTutorial /></>,
    },
    {
      path: "/Sales/SalesReport/Quotation",
      element: <><Header /><SalesReport /><Quotation /></>,
    },
    {
      path: "/Sales/SalesReport/SalesCW",
      element: <><Header /><SalesReport /><SalesCW /></>,
    },
    {
      path: "/Sales/SalesReport/SalesUW",
      element: <><Header /><SalesReport /><SalesUW /></>,
    },
    {
      path: "/Sales/SalesReport/DailySales",
      element: <><Header /><SalesReport /><DailySales /></>,
    },
    {
      path: "/Sales/SalesReport/ReceivePayment",
      element: <><Header /><SalesReport /><ReceivePayment /></>,
    },
    {
      path: "/Assessment/Technicalreview",
      element: <><Header /><Technicalreview /></>,
    },
    {
      path: "/Assessment/SiteVisitRequest",
      element: <><Header /><SiteVisitRequest /></>,
    },
    {
      path: "/Inventory/Wherehouse",
      element: <><Header /><Wherehouse /></>  ,
    },
    {
      path: "/Inventory/ProductSetting",
      element: <><Header /><ProductSetting /></>  ,
    },
    {
      path: "/Inventory/Supplier",
      element: <><Header /><Supplier /></>  ,
    },
    {
      path: "/Inventory/Products",
      element: <><Header /><Products /></>  ,
    },
    {
      path: "/Inventory/InventoryReport",
      element: <><Header /><InventoryReport /></>  ,
    },
    {
      path: "/Production/InstallizationProcess",
      element: <><Header /><InstallizationProcess /></>  ,
    },
    {
      path: "/Production/ProjectStatus",
      element: <><Header /><ProjectStatus /></>  ,
    },
    {
      path: "/Production/Warranty",
      element: <><Header /><Warranty /></>  ,
    },
    {
      path: "/Account/Finance",
      element: <><Header /><Finance /></>  ,
    },
    {
      path: "/Account/Accounting",
      element: <><Header /><Accounting /></>  ,
    },
    {
      path: "/Account/CheckManagement",
      element: <><Header /><CheckManagement /></>  ,
    },
    {
      path: "/Account/ManageCurrency",
      element: <><Header /><ManageCurrency /></>  ,
    },
    {
      path: "/Account/AccountReport",
      element: <><Header /><AccountReport /></>  ,
    },
    {
      path: "/Account/TaxManagement",
      element: <><Header /><TaxManagement /></>  ,
    },
    {
      path: "/Account/DuePayment",
      element: <><Header /><DuePayment /></>  ,
    },
    {
      path: "/Account/AssestManagement",
      element: <><Header /><AssestManagement /></>  ,
    },
    {
      path: "/Invoice/Purchase",
      element: <><Header /><Purchase /></>  ,
    },
    {
      path: "/Invoice/SalesInvoice",
      element: <><Header /><SalesInvoice /></>  ,
    },
    {
      path: "/Invoice/WherehouseInvoice",
      element: <><Header /><WherehouseInvoice /></>  ,
    },
    {
      path: "/Invoice/StockManagement",
      element: <><Header /><StockManagement /></>  ,
    },
    {
      path: "/Invoice/InvoiceReport",
      element: <><Header /><InvoiceReport /></>  ,
    },
    {
      path: "/Invoice/InvoiceTypes",
      element: <><Header /><InvoiceTypes /></>  ,
    },
    {
      path: "/Hierarchy/BreakdownProcess",
      element: <><Header /><BreakdownProcess /></>  ,
    },
    {
      path: "/Hierarchy/BreakdownPricing",
      element: <><Header /><BreakdownPricing /></>  ,
    },
    {
      path: "/Hierarchy/BreakdownSetting",
      element: <><Header /><BreakdownSetting /></>  ,
    },
    {
      path: "/Hierarchy/ProductionApproval",
      element: <><Header /><ProductionApproval /></>  ,
    },
    {
      path: "/Hierarchy/BreakdownTutorial",
      element: <><Header /><BreakdownTutorial /></>  ,
    },
  ])

  return (
    <>
      <RouterProvider router={router} /> 
      {/* <UserProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </UserProvider> */}
    </>
  )
}

export default App
