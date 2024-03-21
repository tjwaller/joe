import './App.css';
import Home from './components/Homepage/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Home/>}/>
            <Route path="/SignUp" element={<Home/>}/>
            <Route path="/Partners" element={<Home/>}/>
            <Route path="/Solutions" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
