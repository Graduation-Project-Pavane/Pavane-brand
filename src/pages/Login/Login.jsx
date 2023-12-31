import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authServices from '../../services/authServices';
import { authActions } from '../../store/auth-slice'
import { ReactComponent as EyeOPen } from "../../assets/eye_open.svg";
import { ReactComponent as EyeClose } from "../../assets/eye_close.svg";
import './Login.scss'

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let type = "password"

  const [adminData, setAdminData] = useState({
    email: "",
    password: ""
  })

  function getAdminData(e) {
    let newAdminData = { ...adminData }
    newAdminData[e.target.name] = e.target.value
    setAdminData(newAdminData)
  }

  async function loginHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await authServices.login(adminData)
      if (data?.message === "Success") {
        setLoading(false);
        dispatch(
          authActions.login({
            AdminToken: data.token
          })
        );
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return <>
    <div className="row">
      <div className="col-md-12">
        <div className="login">
          <div className="login-card">
            <h3>Sign In</h3>
            <p>Log in to your account to continue.</p>
            {
              errorMessage ?
                (<div className="alert alert-danger myalert">
                  {errorMessage}
                </div>) : ""
            }
            <form onSubmit={loginHandler}>
              <label htmlFor="email">Email</label>
              <input
                onChange={getAdminData}
                className='form-control login-input'
                type="email"
                name="email"
                id="email"
              />
              <div className="password-field">
                {type === "password" ? (
                  showPassword ? (
                    <EyeOPen
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                      className="show-password-icon"
                    />
                  ) : (
                    <EyeClose
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                      className="show-password-icon"
                    />
                  )
                ) : null}
                <label htmlFor="password">Password</label>
                <input
                  onChange={getAdminData}
                  className='form-control login-input'
                  type={!type === "password" ? type : showPassword ? "text" : type}
                  name="password"
                  id="password"
                />
              </div>
              <button className='login-button'>
                {loading ?
                  (<i className="fas fa-spinner fa-spin "></i>)
                  : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}
