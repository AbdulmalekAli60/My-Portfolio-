// External Librarise
import { Code, ExternalLink, Github } from "lucide-react";
// External Librarise
// React
import { useState } from "react";
// React

import { Project } from "../App";
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
  projectDescription,
  techStack,
  links,
}: Project) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <button
          type="button"
          className="hs-collapse-toggle w-full mb-3 py-3 px-6 flex items-center justify-between gap-x-2 text-lg font-medium rounded-lg border border-textMain dark:border-darkTextMain text-textMain dark:text-darkTextMain focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{projectName}</span>
          <svg
            className={`shrink-0 size-4 text-textMain dark:text-white transition-transform duration-300 ${
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
            <div className="grid grid-cols-12 max-h-fit ">
              <div className="col-span-12 bg-backGroundColor dark:bg-darkBackGroundColor  p-4 rounded-3xl mb-5 shadow-md hover:shadow-lg transition-all ease-in-out delay-150">
                <h1 className="sm:text-3xl md:text-4xlfont-bold font-mainFont text-textMain dark:text-darkTextMain tracking-wide flex justify-start lg:text-5xl">
                  What is the project?
                </h1>
                <p className="mb-4 font-secundryFont">{projectDescription}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full mb-10">
              <div className="col-span-1 bg-backGroundColor dark:bg-darkBackGroundColor  md:col-span-12 lg:col-span-6 rounded-3xl p-4 shadow-md hover:shadow-lg transition-all ease-in-out delay-150 ">
                <h2 className="text-2xl text-textMain dark:text-darkTextMain md:text-3xl font-bold  tracking-wide mb-4 flex items-center">
                  <Code className="mr-2" /> Tech Stack
                </h2>
                <p className="flex flex-wrap dark:text-darkTextMain">
                  {techStack.map((tech, indx) => {
                    return <TechStackItem key={indx} tech={tech} />;
                  })}
                </p>
              </div>
              <div className="lg:col-span-6 bg-backGroundColor dark:bg-darkBackGroundColor  md:col-span-12 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all ease-in-out delay-150">
                <h2 className="text-textMain dark:text-darkTextMain text-2xl md:text-3xl font-bold  tracking-wide mb-4 flex items-center">
                  <ExternalLink className="mr-2" /> Links
                </h2>
                <div className="space-y-4 h-full w-full flex flex-col justify-evely gap-4">
                  <a
                    href={links.netlifyLink}
                    style={{ color: "white" }}
                    className="w-full bg-visitWebsiteButtonColor dark:bg-darkVisitWebsiteButtonColor text-center py-2 px-4 rounded-lg  flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Visit Website
                  </a>
                  <a
                    href={links.repoLink}
                    style={{ color: "white" }}
                    className=" w-full text-center bg-gitHubButtonColor dark:bg-darkGitHubButtonColor py-2 px-4 rounded-lg flex items-center justify-center"
                  >
                    <Github className="mr-2" size={20} />
                    View on GitHub
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
