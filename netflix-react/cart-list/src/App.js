import  { useState, useEffect } from 'react';
import { CartForm } from './components/cart-form/cart-form';
import { CartList } from './components/Cart-list/CartList';
import {Cart} from './components/cart/Cart';
import { CartState } from './components/store/CartState';
import {Routes,Route,Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar';
import './index.css';
function App() {
      let navigate = useNavigate()
  return (
    <div className="App">
    <h1 id='navbar'>List of movies</h1>
       <nav>
        <ul>
          <li><Link to='/'> Product List</Link></li>
          <li><Link to='/add'> Add Product</Link></li>
           </ul>
      </nav>
      <button onClick={()=>navigate('/add')}>Go to add Product</button>
      <CartState>
        <Routes>
          <Route path="/" element={<CartList/>}/>
          <Route path="/add" element={<CartForm/>}/>
        </Routes>
       </CartState>

    </div>
  
  );
}

export default App;

