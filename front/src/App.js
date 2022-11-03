
//import logo from './logo.svg';

import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Dashboard from './components/admin/Dashboard';
//import ProductsList from './components/admin/ProductsList';
//import NewProduct from './components/admin/newProduct';
//import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>            
            
          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;

/*
function App() {
  return (
    
    <div className="App">  
    <div className='container container-fluid'></div>
    
      <Header /> 
      <Home />      
      <Footer />
         
    </div>    
    
  );
}
export default App;*/

/*
function App() {
  return (
    <div className="App">
        <Header />
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        <center>Contenido aqui</center>
        
        <Footer />
    </div>
  );
}

//export default App;*/

