import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import Top from './pages/Top';
import Jean from './pages/Jean';
import Dress from './pages/Dress';
import Dressone from './pages/Dressone';
import Dresstwo from './pages/Dresstwo';
import Dressthree from './pages/Dressthree';
import Topone from './pages/Topone';
import Toptwo from './pages/Toptwo';
import Topthree from './pages/Topthree';
import Jeanone from './pages/Jeanone';
import Jeantwo from './pages/Jeantwo';
import Jeanthree from './pages/Jeanthree';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    

<BrowserRouter>
    <Nav/>
   <Routes>
       <Route exact path ="/" element={<Home/>}> </Route>
    <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/top"  element={<Top/>}></Route>
      <Route path="/dress"  element={<Dress/>}></Route>
      <Route path="/jean"  element={<Jean/>}></Route>
      <Route path="/dressone"  element={<Dressone/>}></Route>
      <Route path="/dresstwo"  element={<Dresstwo/>}></Route>
      <Route path="/dressthree"  element={<Dressthree/>}></Route>
      <Route path="/topone"  element={<Topone/>}></Route>
      <Route path="/toptwo"  element={<Toptwo/>}></Route>
      <Route path="/topthree"  element={<Topthree/>}></Route>
      <Route path="/jeanone"  element={<Jeanone/>}></Route>
      <Route path="/jeantwo"  element={<Jeantwo/>}></Route>
      <Route path="/jeanthree"  element={<Jeanthree/>}></Route>
      <Route path="/help"  element={<Help/>}></Route>

       </Routes>
  </BrowserRouter>
    
  );
}

export default App;
