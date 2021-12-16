import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectError, selectLoading, setError, setLoading } from "../../features/userSlice";
import { retrieveData } from "../../service/airtable.service";
import { setLocalUser } from "../../service/local-storage.service";
import { tableConfig } from "../../utils/airtable";
import Loading from "../common/Loading";

function Login() {
  const dispatch = useDispatch(useDispatch);
  const error = useSelector(selectError);
  const AccountConfig = tableConfig("Account");
  const [account, setAccount] = useState({ username: "", password: "" });
  const loading = useSelector(selectLoading);

  const handleInput = (e) => {
    setAccount({...account, [e.target.name]: e.target.value}); // dau "..." nhung thuoc tinh nao sau dau phay khong dung den thi khong hien thi
  }

  const onSubmitSignIn = (e) => {
    dispatch(setLoading(true));
    e.preventDefault();
    retrieveData({ filterByFormula: `username="${account.username}"` }, "Account", AccountConfig)
      .then((result) => {
        let resultFields = null;
        if (result.length > 0) resultFields = result[0].fields;
        console.log("result field: " ,resultFields);
        const verify = result.length > 0 && resultFields.Password === account.password
        if (verify) {
          dispatch(setLoading(false));
          dispatch(
            login({
              user: resultFields,
            })
          )
          setLocalUser(resultFields)
          console.log("Dang nhap thanh cong");
      }
      else {
        console.log("dang nhap loi")
        dispatch(setLoading(false));
        dispatch(setError(true));
      }
    })
    
    console.log("username + password", account);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4 my-5">
          <h1 className="display-4 text-center mb-5">ĐẶNG NHẬP</h1>

          <form>
            <div className="form-group">
              <label>Tên tài khoản</label>

              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Nhập vào tài khoản"
                value={account.username}
                onChange = {(e) => {
                      handleInput(e)
                    }
                }
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label>Mật khẩu</label>
                </div>
                <div className="col-auto">
                  <a
                    href="password-reset.html"
                    className="form-text small text-muted"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              <div className="input-group input-group-merge">
                <input
                  type="password"
                  name = "password"
                  className="form-control form-control-appended"
                  placeholder="Nhập vào mât khẩu"
                  value={account.password}
                  //required={}
                  onChange={(e) => {
                    handleInput(e)
                  }}
                />

                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fe fe-eye"></i>
                  </span>
                </div>
              </div>
            </div>
            {
              error && <div className= "alert alert-danger">Tai khoan hoac mat khau khong chinh xac!</div>
            }
            <button className="btn btn-lg btn-block btn-primary mb-3" onClick={(e) => {onSubmitSignIn(e)}}>
              {
                loading ? < Loading variant="light"/> : "Đăng nhập"
              } 
            </button>

            <div className="text-center">
              <small className="text-muted text-center">
                Chưa có tài khoản ? <a href="sign-up.html">Đăng ký</a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
