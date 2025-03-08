import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { MOVIES_PAGE, SIGN_IN_PAGE } from "../../constants/routes";
const Form = () => {
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    email: "",
    error: ""
  });
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    setInfo(prev => ({ ...prev, error: "" }));
    signUp(info)
      .then(() => {
        navigate(SIGN_IN_PAGE, { state: { success: true } });
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.msg || // for axios
                            (err.json && err.json().msg) || // for fetch
                            err.msg || // direct message
                            err.message || 
                            "Something went wrong";
        setInfo(prev => ({ ...prev, error: errorMessage }));
      });
  };
  return (
    <form className="sign-in-form" style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '300px',
      position: 'relative'
    }}>
      <h1 className="sign-in-title" style={{ alignSelf: "center" }}>Welcome!</h1>
      <label className="sign-in-label" style={{ alignSelf: 'flex-start' }}>
        Username
      </label>
      <input
        autoComplete="true"
        type="text"
        name="userName"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
        style={{ width: '100%' }}
      />

      <label className="sign-in-label" style={{ alignSelf: 'flex-start' }}>
        Email
      </label>
      <input
        autoComplete="true"
        type="text"
        name="email"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
        style={{ width: '100%' }}
      />
      <label className="sign-in-label" style={{ alignSelf: 'flex-start' }}>
        Password
      </label>
      <input
        autoComplete="true"
        type="password"
        name="password"
        onChange={(e) => {
          setInfo((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
          });
        }}
        style={{ width: '100%' }}
      />
      {info.error && (
        <div className="error-message" style={{
          width: '100%',
          padding: '8px',
          wordBreak: 'break-word',
          textAlign: 'center',
          color: '#ff3333',
          fontSize: '14px',
          backgroundColor: '#ffebeb',
          borderRadius: '4px',
          margin: '10px 0'
        }}>
          {info.error.toLowerCase()}
        </div>
      )}
      <div className="sign-in-form-actions">
        <button className="action-button" type="" onClick={signUpHandler}>
          Submit
        </button>
        <button className="action-button" onClick={() => navigate(MOVIES_PAGE)}>
          Back
        </button>
      </div>
    </form>
  );
};

export default Form;