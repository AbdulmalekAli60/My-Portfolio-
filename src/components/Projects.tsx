// External Librarise
import { Code, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// External Librarise

// React
import { useRef, useState } from "react";
// React

//Components + hocks
import { useLanguage } from "../contexts/LanguageContext";
import { Project } from "../App";
//Components + hocks

const TechStackItem = ({ tech }: { tech: string }) => (
  <span
    style={{ backgroundColor: "#e5e7eb" }}
    className="inline-flex items-center p-3 flex-grow justify-center dark:text-textMain  rounded-full text-sm font-medium  mr-2 mb-2"
  >
    {tech}
  </span>
);
export default function Projects({
  projectName,
  projectNameArabic,
  projectDescription,
  projectDescriptionArabic,
  techStack,
  links,
  delay,
}: Project) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language } = useLanguage();
  const { t } = useTranslation("Projects");
  const isAr = language === "ar";
  const nameSpace = { ns: "Projects" };
  const arStylesMainFont = `${
    language === "ar"
      ? " font-mainArabic tracking-normal "
      : " font-mainFont tracking-widest "
  }`;
  const arStylesSecFont = `${
    language === "ar"
      ? " font-secondryArabic tracking-normal text-right "
      : " font-secundryFont text-left "
  }`;

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: isAr ? 50 : -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "restart none none none",
          // markers:true,
        },
        delay: delay, //from props
      }
    );
  }, [isAr, delay]);
  return (
    <>
      <div ref={containerRef}>
        <button
          type="button"
          className="hs-collapse-toggle w-full mb-3 py-3 px-6 flex items-center justify-between gap-x-2 text-lg font-medium rounded-lg border border-textMain dark:border-darkTextMain text-textMain dark:text-darkTextMain focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{isAr ? projectNameArabic : projectName}</span>
          <svg
            className={`shrink-0 size-4 text-textMain  dark:text-white transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-5">
            <div className="grid grid-cols-12 max-h-fit">
              <div className="col-span-12 bg-backGroundColor dark:bg-darkBackGroundColor p-4 rounded-3xl mb-5 shadow-md hover:shadow-lg transition-all ease-in-out delay-150">
                <h1
                  className={`sm:text-3xl md:text-4xl font-bold ${arStylesMainFont} ${
                    isAr ? "mb-3" : ""
                  } text-textMain dark:text-darkTextMain flex justify-start lg:text-5xl`}
                >
                  {t("What is the project?", nameSpace)}
                </h1>
                <p className={`mb-4 ${arStylesSecFont}`}>
                  {isAr ? projectDescriptionArabic : projectDescription}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full mb-10">
              <div className="col-span-1 bg-backGroundColor dark:bg-darkBackGroundColor  md:col-span-12 lg:col-span-6 rounded-3xl p-4 shadow-md hover:shadow-lg transition-all ease-in-out delay-150 ">
                <h2
                  className={`${arStylesMainFont} text-2xl text-textMain dark:text-darkTextMain md:text-3xl font-bold  mb-4 flex items-center`}
                >
                  <Code className="m-4" /> {t("Tech Stack", nameSpace)}
                </h2>
                <p className="flex flex-wrap dark:text-darkTextMain">
                  {techStack.map((tech, indx) => {
                    return <TechStackItem key={indx} tech={tech} />;
                  })}
                </p>
              </div>
              <div className="lg:col-span-6 bg-backGroundColor dark:bg-darkBackGroundColor  md:col-span-12 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all ease-in-out delay-150">
                <h2
                  className={`${arStylesMainFont} text-textMain dark:text-darkTextMain text-2xl md:text-3xl font-bold   mb-4 flex items-center`}
                >
                  <ExternalLink className="m-4" /> {t("Links", nameSpace)}
                </h2>
                <div className="space-y-4 h-full w-full flex flex-col justify-evely gap-4">
                  <a
                    href={links.netlifyLink}
                    style={{ color: "white" }}
                    target="_blank"
                    className="w-full bg-visitWebsiteButtonColor dark:bg-darkVisitWebsiteButtonColor text-center py-2 px-4 rounded-lg  flex items-center justify-center"
                  >
                    <ExternalLink className="m-2" size={20} />
                    {t("Visit Website", nameSpace)}
                  </a>
                  <a
                    href={links.repoLink}
                    style={{ color: "white" }}
                    target="_blank"
                    className=" w-full text-center bg-gitHubButtonColor dark:bg-darkGitHubButtonColor py-2 px-4 rounded-lg flex items-center justify-center"
                  >
                    <Github className="m-2" size={20} />
                    {t("View on GitHub", nameSpace)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
