import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

// const NavLink = styled(Link)`
//   display: inline-block;
//   font-size: 1.2rem;
//   text-decoration: none;
//   text-transform: uppercase;
//   color: salmon;
//   &:hover {
//     padding-bottom: 5px;
//     border-bottom: 1px solid salmon;
//   }
// `;
const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <div className="flex">
        <Link to="/simple-map">go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
