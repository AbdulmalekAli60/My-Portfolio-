import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import "preline/preline";
import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
function App() {
  // const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);




  return (
    // h-screen over
    <div
     className="container" 
    // style={{ border: "1px solid black" }}
    >
      
      <Header />
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24">
        <h1 className="text-textMain font-mainFont font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest bg-buttonColor flex justify-start">
          Projects Showcase
        </h1>
      </div>

      <Projects/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
