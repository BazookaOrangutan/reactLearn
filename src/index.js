import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListDirectors from './component/ListDirectors';
import Count from './component/Count';
import CountReducer from './component/CountReducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Head from './views/Head';
import Foot from './views/Foot';
import About from './pages/About';
import News from './pages/News';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Head />
      {/* <Main></Main> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Foot />
    </BrowserRouter>

    {/* <Count></Count> */}
    {/* <CountReducer/> */}
  </React.StrictMode>
);

