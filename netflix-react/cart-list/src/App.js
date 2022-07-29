//App.js
import React from 'react';
import{ useState,useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {ProductForm} from './components/productForm/ProductForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ProductList } from './components/ProductList/ProductList';
import { ProductState } from './components/Store/ProductState';
import {Routes,Route, Link, useNavigate} from 'react-router-dom';
import { LoginForm } from './components/Admin/LoginForm';
import { Cart } from './components/Cart/Cart';
import { RegisterForm } from './components/Admin/RegisterForm';
import { EditProductList } from './components/Admin/EditProductList';
import { UpdateForm } from './components/Admin/UpdateProduct';
import { CartState } from './components/Store/CartState';
import { EditState } from './components/Store/EditState';
import { AuthState } from './components/Store/Auth/AuthState';
import { ProtectRoute } from './components/Admin/ProtectRoute';
import Footer from './components/footer/Footer';

function App() {
  let navigate= useNavigate()
  return (
    
    <div className='App' >
      <ProductState>
        <CartState>
          <EditState>
          <AuthState>
          <Navbar/>
          {/* <Home/> */}
          
          <Routes>
              <Route path='/' element={<ProductList/>}></Route>
              <Route path='/admin/register' element={<RegisterForm/>}></Route>
              <Route path='/admin/login' element={<LoginForm/>}></Route>
              
              
              <Route element={<ProtectRoute></ProtectRoute>}>
              <Route path='/product/cart' element={<Cart/>}></Route>
              <Route path='/admin/product/edit' element={<EditProductList/>}></Route>
              <Route path='/admin/product/edit/update'element={<UpdateForm/>}></Route>
              <Route path='/admin/product/add' element={<ProductForm />}></Route>
              </Route>


          </Routes>
          <Footer/>
          </AuthState>
          </EditState>
        </CartState>
      </ProductState>
      
    </div>
    
  );
}


export default App;
