import React from 'react';
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removed duplicate Router import
import store from './store';
import TodoList from './TodoList';
import Navbar from './heather';
import Footer from './footer';
import AddCard from './add-card';
import ggg from "./images/fallinganimal.png";
import Paing from './Paing';
import Counters from './counters';

let a =ggg;
const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        {/* <div className="bobble-element">🎈💻🏮📅</div> */}
        
        

        {/* <img
        src={a}
        alt="Animated Bobble"
        className="bobble-element"
      /> */}

        <Routes>
        <Route path='/3' element={<Counters/>}/> 
          <Route path='/1' element={<TodoList/>}/> 
          <Route path='/2' element={<Paing/>}/>
          <Route path='/' element={<AddCard/>}/> 
         
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter></div>
  );
};

export default App;
