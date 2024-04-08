
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
 import Signup from './components/Signup';
import Home from './components/Home';
import {  Routes,Route } from 'react-router-dom';

import Feedback from './components/Feedback';
import AddItem from './components/Additem';
import OrderManagement from './components/OrderManagement';
import MenuManagement from './components/MenuManagement';
import Cart from './components/Cart';
import Admin from './components/Admin';



const  App =()=> {
  return (
    <div className="App" style={{color:"inherit"}}>
    
    {/* <Navbar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/s' element={<Signup/>}/>
    <Route path='/h' element={<Home/>}/>

    </Routes> */}
    
    
      <Navbar/>
      

     <Routes>
    
    
     <Route path='/' element={<Home/>}/>

     <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/> 
    
    <Route path='/o' element={<OrderManagement/>}/>
    <Route path='/f' element={<Feedback/>}/>
    <Route path='/add' element={<AddItem/>}/>
    <Route path='/m' element={<MenuManagement/>}/>
    <Route path='/c' element={<Cart/>}/>
    <Route path='/admin' element={<Admin/>}/>



    </Routes>
    {/* <Dashboard/> */}
    {/* <Feedback/> */}
    
    
    </div>
  );
}
export default App;