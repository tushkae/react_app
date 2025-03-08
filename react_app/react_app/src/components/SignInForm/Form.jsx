import React, { useState } from "react";
import styles from "./form.module.css";
import { signIn } from "../../api/auth";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logInAction } from "../../context/auth/actions";
import { Link, useNavigate } from "react-router-dom";
import { LANDING_PAGE, MOVIES_PAGE } from "../../constants/routes";

import { PacmanLoader } from "react-spinners";

const Form = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo((prev) => ({ ...prev, error: "" }));
    signIn(info)
      .then((data) => {
        dispatch(logInAction(data));
        navigate(MOVIES_PAGE);
      })
      .catch((err) => {
        setInfo((prev) => ({ ...prev, error: err.message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="sign-in-form-wrapper">
      <form className="sign-in-form" style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '300px',
        position: 'relative'
      }}>
        <h1 className="sign-in-title">Welcome Back!</h1>
        <label className="sign-in-label" style={{ alignSelf: 'flex-start' }}>
          Username or Email
        </label>
        <input
          autoComplete="true"
          value={info.userName}
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
          Password
        </label>
        <input
          autoComplete="true"
          value={info.password}
          type="password"
          name="password"
          onChange={(e) => {
            setInfo((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
          style={{ width: '100%' }}
        />
        {loading && <PacmanLoader color="#36d7b7" />}
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
          <button className="action-button" onClick={submitHandler}>Submit</button>
          <button className="action-button" onClick={() => navigate(LANDING_PAGE)}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
