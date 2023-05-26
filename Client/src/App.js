import './App.css';
import React, { useState, useEffect, Fragment } from "react";
//import { Row, Col } from 'reactstrap';

function App() {

  const [DisplayName, setDisplayName] = useState("");
  const [Status, setStatus] = useState("");
  const [Name, setName] = useState("");

  async function getName() {
    const Response = await fetch("/WSearch_Service",
    {
      method: "GET"
    });
    const parseRes = await Response.json();
    setDisplayName(parseRes.DisplayName);
    setStatus(parseRes.Status);
    setName(parseRes.Name);
  }

  useEffect(() => {
    getName();
}, []);

  return (
    <Fragment>
    <table cellPadding={10}>
    <th lg="auto"><b>Name</b></th>
      <th lg="auto"><b>DisplayName</b></th>
      <th lg="auto"><b>Status</b></th>
      <tr lg = "auto">
      <td lg="auto">{Name}</td>
      <td lg="auto">{DisplayName}</td>
      <td lg="auto">{Status}</td>
      </tr>
    </table>
    </Fragment>
  );
}

export default App;