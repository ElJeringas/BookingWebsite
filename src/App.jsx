import { BrowserRouter } from "react-router-dom";
import HotelBar from './pages/HotelBar';
import Home from './pages/Home'
import './styles/App.css'
import Register from "./pages/Register";
import About from "./pages/About";
import Services from "./pages/Services";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
import Legal from "./pages/Legal";
function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
        <HotelBar/>
        <Home/>
        <Register/>
        <About/>
        <Services/>
        <Explore/>
        <Gallery/>
      </BrowserRouter>
      <Footer/>
      <Legal/>
    </div>
  )
}

export default App