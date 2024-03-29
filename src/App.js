import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import NotFoundPage from './components/NotFoundPage';
import Description from './components/Disription';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import BasicModal from './components/Modal';
function App() {
  const [open, setOpen] = useState(false);

  return (

    <>
      <Router>

        <div className="app">

          <Header setOpen={setOpen} />

          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/movie-description/:eventId" element={<Description />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>

      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
