import React from "react";

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser("");
    localStorage.removeItem("username");
  };

  return (
    <div>
      <p> Welcome {user}!</p>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
