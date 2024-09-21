import "./App.css";

//External Libraries
import { useTranslation } from "react-i18next";
//External Libraries

//Components + data
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import projectsData from "../src/data/projects.json";
import { useLanguage } from "./contexts/LanguageContext";
//Components + data

export interface Project {
  projectsID: number;
  projectName: string;
  projectNameArabic:string;
  projectDescription: string;
  projectDescriptionArabic:string
  techStack: string[];
  links: {
    netlifyLink: string;
    repoLink: string;
  };
}

function App() {
  const projects: Project[] = projectsData as Project[];
  const { language } = useLanguage();
  const { t } = useTranslation("Header");
  const arStyles = `${
    language === "ar"
      ? " font-mainArabic tracking-normal "
      : " font-mainFont tracking-widest "
  }`;
  return (
    <div className="container" id="home">
      <NavigationMenu />
      <Header />
      <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24" id="projects">
        <h1
          className={`text-textMain  dark:text-darkTextMain p-1 rounded-md ${arStyles} font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-buttonColor dark:bg-darkButtonColor flex justify-start`}
        >
          {t("Projects Showcase", { ns: "Header" })}
        </h1>
      </div>

      {projects.map((p) => {
        return <Projects key={p.projectsID} {...p} />;
      })}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
