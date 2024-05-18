import React from "react";
import { Link, useLocation } from "react-router-dom";

const HRM = () => {
  const location = useLocation();

  // Define hover colors for each link
  const hoverColors = {
    "/Employee": "bg-blue-100",
    "/Contract": "bg-orange-100",
    "/Manage": "bg-yellow-100",
  };

  return (
    <div className="absolute top-[4vw] overflow-y-auto bg-white h-[90vh] w-[82vw] right-0">
      <div className="flex-grow overflow-y-auto p-4">
        <div className="flex justify-evenly mb-6">
          {/* <Link to="/Employee" className="w-[18vw]">
            <div
              className={`flex flex-row gap-[1vw] shadow-lg p-[0.7vw] h-fit rounded-lg ${
                location.pathname === "/Employee" ? hoverColors["/Employee"] : "hover:" + hoverColors["/Employee"]
              }`}
            >
              <div className="w-[3.5vw]">
                <img src="public/HRM/Employees.png" alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.2vw] font-medium">Employees</h3>
                <p className="text-[0.8vw]">Set up Employees</p>
              </div>
            </div>
          </Link> */}

          <Link to="/Contract" className="w-[18vw]">
            <div
              className={`flex flex-row gap-[1vw] shadow-lg p-[0.7vw] h-fit rounded-lg ${
                location.pathname === "/Contract" ? hoverColors["/Contract"] : "hover:" + hoverColors["/Contract"]
              }`}
            >
              <div className="w-[3.5vw]">
                <img src="public/HRM/Contract.png" alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1vw]">Contract</h3>
                <p className="text-[0.9vw]">Employees labour contract</p>
              </div>
            </div>
          </Link>

          <Link to="/Manage" className="w-[18vw]">
            <div
              className={`flex flex-row gap-[1vw] shadow-lg p-[0.7vw] h-fit rounded-lg ${
                location.pathname === "/Manage" ? hoverColors["/Manage"] : "hover:" + hoverColors["/Manage"]
              }`}
            >
              <div className="w-[3.5vw]">
                <img src="public/HRM/Shifts.png" alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1vw]">Manage Shift</h3>
                <p className="text-[0.9vw]">Set up Office Shift</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HRM;
