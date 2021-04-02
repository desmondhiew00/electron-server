/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:7000/api/users',
    });
    setUsers(res.data.payload);
  };
  return (
    <div style={{ background: '#fff' }}>
      <h1>Hello from React!</h1>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
};

export default App;
