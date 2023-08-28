import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <h1 style={{textAlign: "center"}}>Service Status Dashboard</h1>
    <br />
     {/* <li>
        <Link to="/">Home</Link>
  </li> */}
      <h4>  
        <Link to="/MyComputerService">My Computer Services</Link>
      </h4>
  </div>
      
  );
};

export default Home;