import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListDirectors from './component/ListDirectors';
import Count from './component/Count';
import CountReducer from './component/CountReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListDirectors />
    {/* <Count></Count> */}
    {/* <CountReducer/> */}
  </React.StrictMode>
);

