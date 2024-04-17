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
import {News, Movies, Serials, New} from './pages/News';
import NotFound from './pages/NotFound';
import {Films, Film} from './pages/Films';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Head />
      {/* <Main></Main> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='news' element={<News />}>
          <Route path="movies" element={<Movies />} />
          <Route path="serials" element={<Serials />} />
          <Route path=":id" element={<New/>} />
        </Route>
        <Route path='films' element={<Films/>}>
        <Route path=":title" element={<Film/>} />
        </Route>



        <Route path='*' element={<NotFound />} />
      </Routes>
      <Foot />
    </BrowserRouter>

    {/* <Count></Count> */}
    {/* <CountReducer/> */}
  </React.StrictMode>
);

