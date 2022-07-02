import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import BlocPresentation from './components/BlocPresentation/BlocPresentation';
import About from './components/About/About';
import Competences from './components/competences/Competences';
import { Contact } from './components/Contact/Contact';
import Projets from './components/Projets/Projets'


function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Titan+One&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />


      <div className="App">
        <Navbar />
        <BlocPresentation />
        <About />

        <Competences />
        <Projets />
        <Contact />
      </div>
    </>

  );
}

export default App;
