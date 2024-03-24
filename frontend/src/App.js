import './App.css';
import Home from './components/Homepage/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<Signup/>}/>
            <Route path="/Partners" element={<Home/>}/>
            <Route path="/Solutions" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
