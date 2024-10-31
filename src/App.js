import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ServicesCompany from './pages/ServicesCompany';
import Contact from './pages/Contact';
import LayoutDefault from './layouts/LayoutDefault';
import AboutAll from './pages/About/AboutAll';
import Qnt from './pages/About/Qnt';
import Nhism from './pages/About/Nhism';
import Funkym from './pages/About/Funkym';
import Mimosa from './pages/About/Mimosa';
import Rambo from './pages/About/Rambo';
import Snake from './pages/About/Snake';
import Boongminz from './pages/About/Boongminz';
import Domixi from './pages/About/Domixi';
import Djchip from './pages/About/Djchip';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutAll />}>
            <Route index element={<About />} />
            <Route path='QNT' element={<Qnt />} />
            <Route path='Djchip' element={<Djchip />} />
            <Route path='Domixi' element={<Domixi />} />
            <Route path='Boongminz' element={<Boongminz />} />
            <Route path='Snake' element={<Snake />} />
            <Route path='Rambo' element={<Rambo />} />
            <Route path='Mimosa' element={<Mimosa />} />
            <Route path='Funkym' element={<Funkym />} />
            <Route path='Nhism' element={<Nhism />} />
          </Route>
          <Route path='services' element={<ServicesCompany />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
