import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSuccess } from "../../features/staffSlice";
import { retrieveData } from "../../service/airtable.service";
import { tableConfig } from "../../utils/airtable";
import Card from "../common/Card";
import Modal from "../common/Modal";
import Navbar from "../common/Navbar";
import Table from "../common/Table";

function Staff() {
  const [staffList, setStaffList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const DepartmentConfig = tableConfig("Department")
  const StaffConfig = tableConfig("Staff");
  const success = useSelector(selectSuccess);
  const fetchStaffData = async () => {
    retrieveData({}, "Staff", StaffConfig).then((result) => {
      setStaffList(result);
    });
  }
  const fetchDepartmentData = async () => {
    retrieveData({}, "Department", DepartmentConfig).then((result) => {
      setDepartmentList(result);
    });
  }
  useEffect(() => {
    fetchStaffData();
    fetchDepartmentData();
  }, [success])

  const handleOpenModal = () => {
    setIsModalOpened(true);
  }
  const handleCloseModal = () => {
    setIsModalOpened(false);
  }
  return (
    <>
      <div className="main-content">
        <Navbar />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-12 col-xl">
              <span> Tổng 20 nhân sự</span>
            </div>
            <div className="col-auto">
              {/* tao common component button */}
              <Modal
                type="create"
                isModalOpened={isModalOpened}
                handleCloseModal={handleCloseModal}
                departmentList={departmentList}
                title="them nhan su"
              />
              <button className="btn btn-danger" onClick={handleOpenModal}>Thêm nhân sự</button>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-12">
              
                <Table list={staffList} />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
