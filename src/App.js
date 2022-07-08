
import './App.css';
import Header from './components/Header';
import Films from './components/Films';
import Notfounpage from './components/Notfoundpage';
import Dicription from './components/Disription';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (

    <Router>

      <div className="App">

        <Header />

        <Routes>

          <Route exact path="/" element={<Films />} />
          <Route path="/movie-description/:eventId" element={<Dicription />} />
          <Route path="*" element={<Notfounpage />} /></Routes>
      </div>
    </Router>
  );
}

export default App;
