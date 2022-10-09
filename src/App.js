import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import NotFoundPage from './components/NotFoundPage';
import Description from './components/Description/Disription';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import BasicModal from './components/Modal/Modal';

function App() {

  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([]);

  const [findFilms, setFindFilms] = useState([]);


  return (

    <>
      <Router>

        <div className="app">

          <Header setOpen={setOpen} items={items} setFindFilms={setFindFilms} />

          <Routes>
            <Route exact path="/" element={<Movies items={items} setItems={setItems} findFilms={findFilms} />} />
            <Route path="/movie-description/:eventId" element={<Description />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route path="/suscefully" element={<AlertSegnIn />} /> */}
          </Routes>
        </div>
      </Router>

      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
