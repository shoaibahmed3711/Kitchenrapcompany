import React from "react";
import { Link, useLocation } from "react-router-dom";

const SalesReport = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/Sales/SalesReport/Quotation", label: "Quotation", description: "Quotation Description", imageName: "quotation.png" },
    { path: "/Sales/SalesReport/SalesCW", label: "SalesCW", description: "SalesCW Description", imageName: "CW.png" },
    { path: "/Sales/SalesReport/SalesUW", label: "SalesUW", description: "SalesUW Description", imageName: "Daily.png" },
    { path: "/Sales/SalesReport/DailySales", label: "Daily Sales", description: "Daily Sales Description", imageName: "rec.png" },
    { path: "/Sales/SalesReport/ReceivePayment", label: "Receive Payment", description: "Receive Payment Description", imageName: "UW.png" }
  ];

  const hoverColors = {
    "/Sales/SalesReport/Quotation": "bg-blue-100",
    "/Sales/SalesReport/SalesCW": "bg-orange-100",
    "/Sales/SalesReport/SalesUW": "bg-yellow-100",
    "/Sales/SalesReport/DailySales": "bg-green-100",
    "/Sales/SalesReport/ReceivePayment": "bg-purple-100",
  };

  return (
    <div className="absolute top-[4vw] overflow-y-auto bg-white h-[90vh] w-[82vw] right-0">
      <div className="flex-grow overflow-y-auto p-4">
        <div className="flex justify-evenly mb-6">
          {menuItems.map((menuItem, index) => (
            <Link key={index} to={menuItem.path} className="w-[14vw]">
              <div
                className={`flex flex-row gap-[1vw] shadow-lg p-[0.7vw] h-fit rounded-lg ${
                  location.pathname === menuItem.path ? hoverColors[menuItem.path] : "hover:" + hoverColors[menuItem.path]
                }`}
              >
                <div className="w-[3.5vw]">
                  {/* Changed to use public path */}
                  <img src={`/Sales/report/${menuItem.imageName}`} alt="" />
                </div>
                <div className="flex flex-col justify-evenly">
                  <h3 className="text-[0.8vw]">{menuItem.label}</h3>
                  <p className="text-[0.7vw]">{menuItem.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
