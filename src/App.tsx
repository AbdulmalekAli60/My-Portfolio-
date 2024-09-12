import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { useEffect } from "react";
// import { useLocation } from 'react-router-dom';
import useTheme from "./hocks/useTheme";
// import { BrowserRouter, Routes } from "react-router-dom";
import "preline/preline";
import NavigationMenu from "./components/NavigationMenu";
// import { IStaticMethods } from "preline/preline";

// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }
function App() {
  // const location = useLocation();
  const { theme } = useTheme();

  // useEffect(() => {
  //   window.HSStaticMethods.autoInit();
  // }, []);

  return (
    <div className={`container ${theme}`} id="home">
      {/* <div className=" dark:bg-dark transition-colors duration-150"> */}
      <NavigationMenu />
      <Header />
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24" id="projects">
        <h1 className="text-textMain dark:text-darkTextMain p-1 rounded-md font-mainFont font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest bg-buttonColor dark:bg-darkButtonColor flex justify-start">
          Projects Showcase
        </h1>
      </div>

      <Projects />
      <Contact />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
