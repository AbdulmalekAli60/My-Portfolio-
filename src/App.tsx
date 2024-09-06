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
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
