import React from "react";
import Card from "../common/Card";
import Navbar from "../common/Navbar";
import Table from "../common/Table";

function Admin() {
  return (
    <div className="main-content">
      {" "}
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row">
              <Card />
              <Card />
              <Card />
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-header-title">Tài khoản</h4>
                <div>
                  <button className="btn btn-success">Tạo tài khoản</button>
                </div>
              </div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
