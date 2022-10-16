import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import NotFoundPage from './components/NotFoundPage';
import Description from './components/Description/Disription';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import BasicModal from './components/Modal/Modal';

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
