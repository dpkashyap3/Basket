import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Grocery from "./components/Grocery";
import Basket from "./components/Basket";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
      <div className="row">
        <Grocery/>
      </div>
      <Basket/>
    </div>
  );
}

export default App;
