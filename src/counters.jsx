import React, { useEffect, useState } from "react";


import Counter from "./counterTypeScript"; 
import Counter2 from './counterTypeScriptUsingReducer';
import TodoAppScript from './todoTypeScript';
import "./csss/card.css";
const Counters = () => {
  return (
    <div
      style={{
        display: "flex",

       padding:"100px",
       
       alignContent:"center",
      gap:"20px"
      }}
    >
      <Counter/>
      <Counter2/>
     <TodoAppScript/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cards: state.addcard.cards,
  currentTime: state.time.currentTime,
});
export default Counters;
