import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export const TreesContext = createContext();

const trees = [
  {id: "1", type: "Maple"},
  {id: "2", type: "Oak"},
  {id: "3", type: "Family"},
  {id: "4", type: "Component"}
]

function App() {
  
  

  return (
    <div>
      <h1>Trees I've Heard Of</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={trees}>
    <App />
  </TreesContext.Provider>
);
