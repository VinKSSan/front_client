
import './App.css';
import AddClient from './components/addClient/addClient';
import PutClient from './components/putClient/putClient';
import DelClient from "./components/delClient/delClient";

import logo from './log.svg';
import React from 'react';
import GetC from './components/get/getC';
function App() {
  return (
    <>
      <GetC/>
      <AddClient/>
      <PutClient/>
      <DelClient/>
    </>
  );
}

export default App;
