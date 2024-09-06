// External Librarise
import { Code, ExternalLink, Github } from "lucide-react";
// External Librarise
// React
// React

const TechStackItem = ({ tech }: { tech: string }) => (
  <span
    style={{ backgroundColor: "#e5e7eb" }}
    className="inline-flex items-center p-3  rounded-full text-sm font-medium  mr-2 mb-2"
  >
    {tech}
  </span>
);
export default function Projects() {
  const techStack: string[] = [
    "JavaScript",
    "React",
    "Java",
    "Spring Boot",
    "HTML",
    "SQL",
    "Node",
    "CSS",
    "Figma",
    "Tailwind CSS",
    "Material UI",
    "Git",
    "GitHub",
    "Postman",
  ];
  return (
    <>
      <div className="mb-24">
        <h1 className="text-textMain font-mainFont font-bold lg:text-5xl md:text-3xl sm:text-2xl tracking-widest bg-buttonColor flex justify-start">
          Projects Showcase
        </h1>
      </div>

      <div className="">
        <button
          type="button"
          className="hs-collapse-toggle w-full py-3 px-6 flex items-center justify-between gap-x-2 text-lg font-medium rounded-lg border border-transparent text-textMain focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          id="hs-basic-collapse"
          aria-expanded="false"
          aria-controls="hs-basic-collapse-heading"
          data-hs-collapse="#hs-basic-collapse-heading"
        >
          <span>URL Shortener</span>
          <svg
            className="hs-collapse-open:rotate-180 shrink-0 size-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div
          id="hs-basic-collapse-heading"
          className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-collapse"
        >
          {/* what is the project grid */}
          <div className="mt-5">
            <div className="grid grid-cols-12 max-h-fit ">
              <div
                style={{ background: "#ececec" }}
                className="col-span-12  p-4 rounded-3xl mb-5 shadow-md hover:shadow-lg transition-all ease-in-out delay-150"
              >
                <h1 className="sm:text-3xl md:text-4xlfont-bold font-mainFont text-textMain tracking-widest flex justify-start lg:text-5xl">
                  What is the project?
                </h1>
                <p className="mb-4 font-secundryFont">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a
                  tempora odit quas reiciendis, at voluptatum eos reprehenderit
                  voluptas explicabo inventore, eveniet deserunt delectus
                  quaerat provident expedita et fugit pariatur. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nam accusantium
                  itaque corrupti ab, et quaerat debitis hic consectetur nemo?
                  Repellat commodi eum excepturi mollitia corporis ipsam tempora
                  fugiat, ut iure.
                </p>
              </div>
            </div>
            {/* what is the project grid */}

            {/* Second Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-full mb-10">
              {/* Tech Stack Grid */}
              <div
                style={{ background: "#ececec" }}
                className="col-span-1 md:col-span-12 lg:col-span-6 rounded-3xl p-4 shadow-md hover:shadow-lg transition-all ease-in-out delay-150 "
              >
                <h2 className="text-2xl text-textMain md:text-3xl font-bold  tracking-wide mb-4 flex items-center">
                  <Code className="mr-2" /> Tech Stack
                </h2>
                <p className="flex flex-wrap">
                  {techStack.map((tech, indx) => {
                    return <TechStackItem key={indx} tech={tech} />;
                  })}
                </p>
              </div>
              {/* ===Tech Stack Grid=== */}

              {/* Links Grid */}
              <div
                style={{ background: "#ececec" }}
                className="lg:col-span-6 md:col-span-12 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all ease-in-out delay-150"
              >
                <h2 className="text-textMain text-2xl md:text-3xl font-bold  tracking-wide mb-4 flex items-center">
                  <ExternalLink className="mr-2" /> Links
                </h2>
                {/* Links Container */}

                <div className="space-y-4 h-full w-full flex flex-col justify-evely gap-4">
                  <a
                    href="#"
                    style={{ backgroundColor: "#2560eb", color: "white" }}
                    className="w-full text-center py-2 px-4 rounded-lg  flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Visit Website
                  </a>

                  <a
                    href="#"
                    style={{ backgroundColor: "#1f2937", color: "white" }}
                    className=" w-full text-center py-2 px-4 rounded-lg flex items-center justify-center"
                  >
                    <Github className="mr-2" size={20} />
                    View on GitHub
                  </a>
                </div>
                {/* === Links Container === */}
              </div>
              {/* ===Links Grid=== */}
            </div>
            {/* === Second Grid === */}
          </div>
        </div>
      </div>
    </>
  );
}
