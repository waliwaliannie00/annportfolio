import logo from './logo.svg';
import './App.css';
import Header from './app/Header';
import Home from './app/Home';
import { BrowserRouter as  Router, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Header/>
    <div className="container">
      <Header/>
      <Routes>
        <Routes exact path='/' element={<Home />} />
        <Routes exact path='/about' element={<Home />} />
        <Routes exact path='/services' element={<Home />} />
        <Routes exact path='/portfolio' element={<Portfolio />} />
        <Routes exact path='/contact' element={<Contact />} />
     </Routes>   
    </div>
    <Home/>
    </Router>
  );
}

export default App;
