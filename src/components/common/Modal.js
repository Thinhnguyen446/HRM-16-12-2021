import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import styled from "styled-components";
import ImageUploader, { ImagePreviewer } from "./ImageUploader";
import OutClick from "./OutClick";
import DatePicker from "react-datepicker";
import Loading from "../common/Loading";
import { useDispatch } from "react-redux";
import {
  createStaff,
  selectLoading,
  selectSuccess,
  updateStaff,
} from "../../features/staffSlice";
import { useSelector } from "react-redux";
function Modal({
  isModalOpened,
  handleCloseModal,
  departmentList,
  title,
  editingValue,
  type,
}) {
  const [previewImg, setPreviewImg] = useState(null);
  const [previewImgEdit, setPreviewImgEdit] = useState(null);

  const [staffData, setStaffData] = useState({
    Name: "",
    DOB: new Date(),
    Gender: "",
    Phone: null,
    Department: "",
    Avatar: "",
    Status: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // const [loading, setLoading] = useState(false);
  // const StaffConfig = tableConfig("Staff");
  const handleInput = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };
  const handleDatePicker = (value, name) => {
    console.log("handle Pick date", new Date(value).toDateString());
    setStaffData({ ...staffData, [name]: value });
  };
  const handleSelect = (value, name) => {
    setStaffData({ ...staffData, [name]: value[0].title });
  };
  const handleFileLoader = (value, name) => {
    setPreviewImg(value);
    setStaffData({
      ...staffData,
      [name]: [{ url: value.filesUploaded[0].url }],
    });
  };
  const handleSubmit = async (e) => {
    // setLoading(true);
    const defaultValue = editingValue?.fields;
    const data = {
      ...staffData,
      Phone: staffData.Phone,
      DOB: staffData.DOB && new Date(staffData.DOB).toDateString(),
    };
    e.preventDefault();
    // try {
    //   const result = await createData(StaffConfig, data, "Staff");
    //   if (result) {
    //     setLoading(false);
    //     handleCloseModal();
    //   }
    // } catch (e) {
    //   console.log("Error", e);
    // }
    try {
      const result = await dispatch(
        type === "edit"
          ? updateStaff({
              recordId: defaultValue.recordId,
              value: data,
            })
          : createStaff(data)
      );
      if (result) {
        handleCloseModal();
      }
    } catch (err) {}
  };
  useEffect(() => {
    const defaultValue = editingValue?.fields;
    console.log("Date DOB", new Date(defaultValue?.DOB).toDateString());
    setStaffData({
      ...staffData,
      Name: defaultValue?.Name,
      // DOB: defaultValue?.DOB,
      Gender: defaultValue?.Gender,
      Phone: defaultValue?.Phone,
      Avatar: defaultValue?.Avatar,
      //Lam them cac fields khac
    });
    setPreviewImgEdit(defaultValue?.Avatar);
  }, [editingValue]);
  console.log("staffData", staffData);
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <ModalContent>
        <OutClick onOutClick={handleCloseModal}>
          <ModalBody>
            <button type="button" className="close" onClick={handleCloseModal}>
              <span>x</span>
            </button>
            <div className="header">
              <div className="header-body">
                <h1 className="header-title">{title}</h1>
              </div>
            </div>
            <div className="form-group">
              <label>Họ tên</label>
              {/* Tạo common component dùng chung */}
              <input
                className="form-control"
                type="text"
                onChange={handleInput}
                value={staffData.Name}
                name="Name"
              />
            </div>
            <div className="form-group">
              <label>Ngày sinh</label>
              <div>
                <DatePicker
                  selected={new Date(staffData.DOB)}
                  onChange={(value) => {
                    handleDatePicker(value, "DOB");
                  }}
                  dateFormat="dd-MM-yyyy"
                  name="DOB"
                />
              </div>
            </div>
            <SelectWrapper className="form-group">
              <label>Giới tính</label>
              <Select
                placeholder="Chọn"
                className="form-control"
                options={[
                  { title: "Nam", id: 1 },
                  { title: "Nữ", id: 2 },
                ]}
                labelField="title"
                valueField="id"
                name="Gender"
                onChange={(value) => handleSelect(value, "Gender")}
              />
            </SelectWrapper>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                className="form-control"
                type="text"
                placeholder="(___)____-____"
                name="Phone"
                value={staffData.Phone}
                onChange={handleInput}
              />
            </div>
            <SelectWrapper className="form-group">
              <label>Phòng ban</label>
              <Select
                placeholder="Chọn"
                className="form-control"
                options={
                  departmentList &&
                  departmentList.map((item) => ({
                    title: item.fields.Name,
                    id: item.fields.recordId,
                  }))
                }
                labelField="title"
                valueField="id"
                name="Department"
                onChange={(value) => handleSelect(value, "Department")}
              />
            </SelectWrapper>
            {/* Tu lam */}
            {/* <div className="form-group">
              <label>Trạng thái</label>
              <Select
                placeholder="Chọn"
                className="form-control"
                options={
                
                }
                labelField="title"
                valueField="id"
                onChange={(value) => handleSelect(value)}
              />
            </div> */}
            <div className="form-group">
              <label>Ảnh chân dung</label>
              <ImageUploader
                handleSuccessUpload={(value) => {
                  handleFileLoader(value, "Avatar");
                }}
              />
              {(previewImg || previewImgEdit) && (
                <ImagePreviewer
                  previewImg={previewImg}
                  previewImgEdit={previewImgEdit}
                />
              )}
            </div>
            {/* Số CMND
          Ảnh CMND mặt trước/sau
          Ngày làm việc
          ... */}
          </ModalBody>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={handleSubmit}
          >
            {loading ? <Loading /> : "Đồng ý"}
          </button>
        </OutClick>
      </ModalContent>
    </ModalWrapper>
  );
}
export default Modal;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s;

  ${({ isModalOpened }) =>
    isModalOpened &&
    `
  visibility: visible;
  opacity:1;
  `}
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background: #fff;
  align-items: center;
  margin-left: auto;
  padding: 30px 0;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    width: 60%;
  }
`;
export const ModalBody = styled.div`
  width: 300px;
`;
export const SelectWrapper = styled.div`
  width: 50%;
`;
