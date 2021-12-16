import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="header-pretitle">Overview</h6>
              <h1 className="header-title">Dashboard</h1>
            </div>
          </div>
          <div className="row align-item-center">
            <div className="col">
              <ul className="nav nav-tabs nav-overflow header-tabs">
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Quản trị thông tin
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link to="" className="nav-link">
                    Quản trị phòng ban
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to=" " className="nav-link">
                    Quản trị phương thức chấm công
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
