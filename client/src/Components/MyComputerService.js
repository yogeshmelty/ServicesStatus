import React, { useState, useEffect, Fragment } from "react";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

function MyComputerService() {
    const [todos, setTodos] = useState();

    useEffect(() => {
      const getTodos = async () => {
        const res = await fetch(
          '/allService'
        );
        const data = await res.json();
        setTodos(data);
      };
      getTodos();
    }, []);
  
    console.log(todos);

  return (
    <div>
      <h2 style={{textAlign: "left"}}>
        <Link to="/">Home</Link>
      </h2>
      <br/>
      <Table striped bordered hover size="sm" responsive="sm">
       <thead>
        <tr>
              <th lg="auto"><b>Service Name</b></th>
              <th lg="auto"><b>Status</b></th>
        </tr>
        </thead>
        <tbody>
      {todos ? (
        todos.map((todo) => (
          <tr key={todo.id}>
                <td lg="auto">{todo.DisplayName}</td>
                <td lg="auto">{todo.Status}</td>
            </tr>
        ))
      ) : (
        <Spinner animation="grow">
        <h2>Loading...</h2>
        </Spinner>
      )}
      </tbody>
      </Table>
      </div>
  );
}

export default MyComputerService;