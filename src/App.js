 import './App.css';
import Navbarr from './components/Navbarr';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

import { useState } from 'react';


import Presentation from './components/Presentation';
import Notification from './components/Notification';
import Promo from './components/Promo';
import ExtraList from './components/ExtraList';
import Extrapromo from './components/Extrapromo';


function App() {
  const [text, setText] = useState("")
       const [rate, setRate] = useState ("")
  return (
    <div className="App">
       
      <Navbarr setText={setText} setRate={setRate} />


      <Carrousel />


      <Routes>
        <Route path="/" element={ <ExtraList text={text} rate={rate}/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/promos" element={ <Promo/> } />
        <Route path="/productpromo" element={ <Extrapromo/> } />
 

        <Route path="/presentation" element={ <Presentation/> } />
        <Route path="/notification" element={ <Notification/> } />



      </Routes>


  
      <Footer />
    

    </div>
  );
}

export default App;
