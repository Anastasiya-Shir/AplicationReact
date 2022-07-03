
import './App.css';
import Header from './components/header';
import Films from './components/films';
import Dicription from './components/disription';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (

    <Router>

      <div className="App">

        <Header />

        <Routes>

          <Route exact path="/" element={<Films />} />
          <Route path="/movie-description/:eventId" element={<Dicription />} /></Routes>
      </div>
    </Router>
  );
}

export default App;
