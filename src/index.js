import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListDirectors from './component/Director';
import Count from './component/Count';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListDirectors />
    {/* <Count></Count> */}
  </React.StrictMode>
);

