import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import NotFoundPage from './components/NotFoundPage';
import Description from './components/Description/Disription';
import BasicModal from './components/Modal/Modal';

import './App.css';

function App() {

  const [findFilms, setFindFilms] = useState([]);


  return (

    <>
      <Router>

        <div className="app">

          <Header setFindFilms={setFindFilms} />

          <Routes>
            <Route exact path="/" element={<Movies findFilms={findFilms} />} />
            <Route path="/movie-description/:eventId" element={<Description />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/suscefully" element={<AlertSegnIn />} /> */}
          </Routes>
        </div>
      </Router>

      <BasicModal />
    </>
  );
}

export default App;
