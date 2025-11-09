import './App.css'
import AboutTeam from './component/AboutTeam.jsx';
import AboutUs from './component/AboutUs.jsx';
import Hero from './component/Hero/MainHero.jsx';
import Service from './component/service/Service.jsx';
import PortFolio from './component/PortFolio.jsx';
import Contact from "./component/Contact.jsx"
import Navbar from './component/Hero/Navbar.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <div className="max-w-7xl mx-auto"> */}
      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutTeam />
              <PortFolio />
              <AboutUs />
              <Service />
              <Contact />
            </>
          } />
          <Route path='/portfolio' element={<PortFolio />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </BrowserRouter>

      {/* </div> */}
    </>
  )
}

export default App;
