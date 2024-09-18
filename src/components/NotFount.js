import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Not Found some thing wrong!
      <Link to="/"> Go back to Home</Link>
    </div>
  );
};

export default NotFound;
