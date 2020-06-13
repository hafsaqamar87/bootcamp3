import React from 'react';
import './App.css';
import Dinner from './dinner.js' ;

function App() {
  return (
    <div className="App">
     {/* <Dinner></Dinner> */}
     <Dinner  dishName="chicken biryani" coldrink="7up"/>
     <hr />
     <br />
     <Dinner  dishName="beef biryani" coldrink="coca_Cola"/>
     <hr />
     <br />
     <Dinner  dishName="chicken karahi" coldrink="pepsi"/>
     

     
    </div>
  )
}

export default App;
