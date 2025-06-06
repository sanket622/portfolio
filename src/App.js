import { Routes ,Route, useLocation} from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import About from './containers/about';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import particles from './utils/particles';
import './App.scss';

function App() {

  const location = useLocation();

  const handleInit = initParticlesEngine (async (engine) => {
    await loadFull(engine);
  }, []);

  const renderParticleInJsHomePage = location.pathname === "/"

  return (
  <div className='App'>
{/* {particles js} */}

{
  renderParticleInJsHomePage && 
  <Particles id="particles" options={particles} init={handleInit}/>
}


{/* {navbar js} */}
<Navbar/>

{/* {main page content} */}
<div className='App__main-page-content'>
<Routes>
  <Route index path="/" element={<Home/>} />
  <Route index path="/skills" element={<Skills/>} />
  <Route index path="/portfolio" element={<Portfolio/>} />
  <Route index path="/contact" element={<Contact/>} />
  <Route index path="/about" element={<About/>} />
  <Route index path="/resume" element={<Resume/>} />
</Routes>
</div>
  </div>
  );
}

export default App;
