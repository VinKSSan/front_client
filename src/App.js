
import './App.css';
import BuscarClient from './components/buscarClient';
import BuscarClients from './components/buscarClients';
import AdicionarClient from './components/adicionarClient';
import AtualizarClient from './components/atualizarClient';
import DeletarClient from "./components/deletarClient";
import React from 'react';

import logo from './log.svg'

import { ReactSVG } from 'react-svg';
function App() {
  return (
    <>
      <div>
        <ReactSVG src={logo}/>
      </div>
      <BuscarClient/>
      <BuscarClients/>
      <AdicionarClient/>
      <AtualizarClient/>
      <DeletarClient/>
    </>
  );
}

export default App;
