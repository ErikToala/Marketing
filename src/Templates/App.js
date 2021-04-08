//import '../Styles/App.css';

import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import Projects from "./Projects";
import Nosotros from "../Components/Nosotros";
import Contactanos from "../Components/Contactanos";
import Footer from "../Components/Footer";


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../Styles/projects.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroImage/>
      <Nosotros/>
      <Projects/>
      <Contactanos/>
      <Footer/>
    </div>
  );
}

export default App;
