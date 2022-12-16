import React from "react";

import "./NotFound.scss";

import { Link } from "react-router-dom";
import Helmet from "../Helmet/Helmet";

const NotFound = () => {
  return (
    <Helmet title="PageNotFound">
      <div className="PageNotFound">
        Page Not Found
        <Link to="/">Home</Link>
      </div>
    </Helmet>
  );
};

export default NotFound;
