import "./App.css";
import Navbar from "./container/Navbar";
import Home from "./container/Home";
import About from "./container/About";
import CustomCursor from "./container/CustomCurser";
import Project from "./container/Project";
import Education from "./container/Education";
import Contact from "./container/Contact";
import Footer from "./container/Footer";

function App() {
  return (
    <>
      <CustomCursor></CustomCursor>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Project></Project>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
