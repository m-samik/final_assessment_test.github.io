import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
