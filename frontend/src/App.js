import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routes/login.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/home' element = {<div>Hello</div>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
