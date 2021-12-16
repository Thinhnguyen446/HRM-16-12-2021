import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar";

function Config() {
  return (
    <div className="main-content">
      {" "}
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <div className="avatar">
                        <img
                          className="avatar rounded-circle"
                          src="/assets/img/avatars/profiles/avatar-1.jpg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col ml-n2">
                      <h4 className="mb-1">Logo công ty</h4>

                      <small className="text-muted">PNG hoặc JPG</small>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-sm btn-primary">Tải lên</button>
                </div>
              </div>
              <hr className="my-5" />
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label> Tên công ty</label>
                    <Input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Địa chỉ</label>
                    <Input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label> Số điện thoại</label>
                    <Input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <button className="btn btn-warning">Lưu lại</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Input = styled.input`
  width: 50%;
  color: black;
  font-weight: 400;
  font-size: 12px;
  background-color: white;
  border-radius: 10px;
`;

export default Config;
