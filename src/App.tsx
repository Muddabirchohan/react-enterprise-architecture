import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import React from "react";
import { appWithTranslation, useTranslation } from 'next-i18next'
import ChartParent from './components/userDataChart/chart';


function App (){



  return (
    <div className="App">
      <ChartParent/>
    </div>
  );
}

export default App;
