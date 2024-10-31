import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ServicesCompany from './pages/ServicesCompany';
import Contact from './pages/Contact';
import LayoutDefault from './layouts/LayoutDefault';
import AboutAll from './pages/About/AboutAll';
import Qnt from './pages/About/Qnt';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutAll />}>
            <Route index element={<About />} />
            <Route path='QNT' element={<Qnt />} />
          </Route>
          <Route path='services' element={<ServicesCompany />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
