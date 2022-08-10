import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';
import './index.css';
import { FaStar } from 'react-icons/fa';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then(setData);
  });

  if (data){
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    );
  }

  return (
    <p>No users</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
