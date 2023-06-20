import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import React from "react";

function App (){

  React.useEffect(()=>{
    console.log("app.jsx")
  },[])


  return (
    <div className="App">
    <ParentComponent/>
    a
    </div>
  );
}

export default App;
