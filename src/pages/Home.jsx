import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="root-navigation">
      <h1>Homepage</h1>
      <p className="headline">
      </p>
      <ul>
        <li>
          <Link to="/one">One</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
