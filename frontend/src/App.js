import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './routes/login.js';

import './App.css';
import { useCookies } from 'react-cookie';
import SignUpPage from './routes/signup.js';
import Search from './routes/searchbar.js';

function App() {

  const [cookie, setCookie] = useCookies(['token']);

  return (
    <BrowserRouter>
    {cookie.token ? (
      <Routes>
        <Route path='/search' element= {<Search/>}/>
        <Route path = "*" element= {<div>hello</div>}/>
      </Routes>
    )
    :(<Routes>
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/signup' element = {<SignUpPage/>}/>
      <Route path = "*" element= {<Navigate to={'/login'}/>}/>
    </Routes>)}
    </BrowserRouter>

  );
}

export default App;
