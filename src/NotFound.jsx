import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1>404 NotFound</h1>
      <a href="" className="btn btn-primary">
        Back Home
      </a>

      <Link to={"/"} className="btn btn-danger">
        BackHome
      </Link>
    </div>
  );
}

export default NotFound;
