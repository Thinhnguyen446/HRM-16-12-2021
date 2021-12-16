import React from "react";
import {
  FcConferenceCall,
  FcInspection,
  FcDataSheet,
  FcSettings,
  FcManager,
  FcHome,
} from "react-icons/fc";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <nav
      className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light"
      id="sidebar"
    >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="./index.html">
          <img
            src="./assets/img/logo.svg"
            className="navbar-brand-img mx-auto"
            alt="..."
          />
        </a>

        <div className="navbar-user d-md-none mt-auto">
          <div className="dropdown ">
            <a href="#" className="dropdown-toggle ">
              <div className="avatar avatar-sm avatar-online">
                <img
                  src="./assets/img/avatars/profiles/avatar-1.jpg"
                  className="avatar-img rounded-circle"
                  alt="..."
                />
              </div>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="sidebarIcon"
            >
              <a href="./profile-posts.html" className="dropdown-item">
                Profile
              </a>
              <a href="./account-general.html" className="dropdown-item">
                Settings
              </a>

              <a href="./sign-in.html" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="sidebarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <IconWrapper>
                  <FcHome size="25px" />
                </IconWrapper>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff">
                <IconWrapper>
                  <FcConferenceCall size="25px" />{" "}
                </IconWrapper>{" "}
                Nhân sự
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/checkin">
                <IconWrapper>
                  {" "}
                  <FcInspection size="25px" />
                </IconWrapper>{" "}
                Check in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/report">
                <IconWrapper>
                  {" "}
                  <FcDataSheet size="25px" />
                </IconWrapper>{" "}
                Báo cáo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/config">
                <IconWrapper>
                  {" "}
                  <FcSettings size="25px" />
                </IconWrapper>{" "}
                Quản trị
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <IconWrapper>
                  {" "}
                  <FcManager size="25px" />
                </IconWrapper>{" "}
                Admin
              </Link>
            </li>
          </ul>

          <hr className="navbar-divider my-3" />

          <h6 className="navbar-heading">More...</h6>

          <ul className="navbar-nav mb-md-4">
            <li className="nav-item">
              <a className="nav-link" href="#sidebarBasics">
                <i className="fe fe-clipboard"></i> More...
              </a>
            </li>
          </ul>

          <div className="mt-auto"></div>

          <div className="navbar-user d-none d-md-flex" id="sidebarUser">
            <a
              href="#sidebarModalActivity"
              className="navbar-user-link"
              data-toggle="modal"
            >
              <span className="icon">
                <i className="fe fe-bell"></i>
              </span>
            </a>

            <div className="dropup">
              <a href="#" id="sidebarIconCopy" className="dropdown-toggle">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="./assets/img/avatars/profiles/avatar-1.jpg"
                    className="avatar-img rounded-circle"
                    alt="..."
                  />
                </div>
              </a>

              <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
                <a href="./profile-posts.html" className="dropdown-item">
                  Profile
                </a>
                <a href="./account-general.html" className="dropdown-item">
                  Settings
                </a>

                <a href="./sign-in.html" className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>

            <a
              href="#sidebarModalSearch"
              className="navbar-user-link"
              data-toggle="modal"
            >
              <span className="icon">
                <i className="fe fe-search"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

const IconWrapper = styled.div`
  margin-right: 10px;
`;

export default Sidebar;
