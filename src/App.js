import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

import './App.scss'
import Home from "./components/Page/Home";

function App() {
  return (
    <>
         <Header />
         <Home/>
         <Footer/>
    </>
  );
}

export default App;
