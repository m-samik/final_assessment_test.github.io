import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userlist.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <header className="header">
        <img src="https://grad.hitbullseye.com/new-code/images/hitbullseye-logo.png" alt="Logo" className="logo" />
      </header>

      <div className="container">
        <h1>Final Assessment Test</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='container card'>
        <div className='card-body'>
          <h3 className='card-title'>Student Details</h3>
          <p className='card-text'>Name : <b>Muhammad Sami Khanday</b></p>
          <p className='card-text'>Reg. No : <b>12001474</b></p>
          <p className='card-text'>Course : <b>Summer PEP 2023</b></p>

        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Final Assessment Test.. All rights reserved. Task for Hitbullseye</p>
      </footer>
    </div>
  );
}

export default UserList;
