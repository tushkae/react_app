import React from "react";
import Form from "../../components/SignInForm/Form";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  const success = location?.state?.success;
  return (
    <div>
      {success && <h1>Congratulations! You are successfully signed up!</h1>}
      <div className="sign-in-form-wrapper">
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
