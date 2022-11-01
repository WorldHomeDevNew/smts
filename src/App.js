// import logo from './logo.svg';
import './App.css';
import Login4 from './Compnent/Login4'
import Login3 from './Compnent/Login3'
import Login2 from './Compnent/Login2'
import Login1 from './Compnent/Login1'
import Grid from '@mui/material/Grid';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">      
      <Router>
      <Login4/>
      <Routes>
        <Route path="./login3" element={<Login3/>}/>
        </Routes>
      </Router>          
    </div>
  );
}

export default App;
