
import Footer from "./Components.jsx/Footer";
import Header from "./Components.jsx/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages.jsx/Home";
import About from "./Pages.jsx/About";
import Ourroom from "./Pages.jsx/Ourroom";
import Gallery from "./Pages.jsx/Gallery";
import Blog from "./Pages.jsx/Blog";
import Contactus from "./Pages.jsx/Contactus";

import Hooks from "./Components.jsx/Hooks";
import Flipcart from "./Pages.jsx/Flipcart";
import Productd from "./Pages.jsx/Productd";





function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Ourroom" element={<Ourroom/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Contactus" element={<Contactus/>}/>
      <Route path="/Hooks" element={<Hooks/>} />
      <Route path="/Flipcart" element={<Flipcart/>}/>
      <Route path="/Productd" element={<Productd/>}/>
      


        <Route>

        </Route>

      </Routes>
      <Footer/>
    </Router>
     
    </>
  );
}

export default App;
