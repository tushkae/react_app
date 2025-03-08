import React from "react";
import { logOutAction } from "../../context/auth/actions";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
const Header = () => {
  const { dispatch, state } = useAuthContext();
  console.log(state);
  return (
    <div className="header">
      <div className="header-user-info">
        <h3>Welcome {state.user.userName}</h3>
      </div>
      <div className="header-actions">
        <button onClick={() => dispatch(logOutAction())}>log out</button>
      </div>
    </div>
  );
};

export default Header;
