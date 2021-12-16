import React from "react";
import Card from "../common/Card";
import Navbar from "../common/Navbar";

function Report() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
