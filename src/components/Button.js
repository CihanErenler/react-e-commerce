import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to, type, action }) => {
  return (
    <React.Fragment>
      {type === "link" ? (
        <Link to={to} className="btn">
          {text}
        </Link>
      ) : (
        <button type="button" className="btn" onClick={action}>
          {text}
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
