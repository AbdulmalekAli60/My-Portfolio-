// import useTheme from "../hocks/useTheme.tsx";
//  import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  // const { theme, toggleTheme } = useTheme();
  return (
    <div className="mb-24">
      {/* Nav  */}
      <nav className="flex justify-between items-center">
        <img src="./av.jpeg" alt="" className="w-10 h-10 rounded-full" />
        {/* <h2 className="text-textMain font-secundryFont tracking-widest">
          {<ThemeToggleButton isDark={theme} onChange={toggleTheme} invertedIconLogic />}
          2024
        </h2> */}
        {/* Language and dark mode buttons */}
        <div>
          <button
            style={{ background: "#000000", color: "white" }}
            className="p-2 rounded-3xl mr-1 font-secundryFont text-buttonColor"
          >
            Language
          </button>
          <button
            style={{ background: "#000000", color: "white" }}
            className="p-2 rounded-3xl mr-1 font-secundryFont text-buttonColor"
          >
            {" "}
            dark mode
          </button>
        </div>
        {/* ===Language and dark mode buttons=== */}
      </nav>
      {/* ===Nav=== */}

      {/* Header */}
      <header className="mt-24">
        
        <h1 className="text-textMain font-mainFont text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-tight sm:leading-none text-center mb-4 sm:mb-6 md:mb-8">
          Abdulmalek
        </h1>

        {/* p container */}
        <div className="max-w-3xl">
          <p className="mt-16 text-left text-lg font-secundryFont  text-textMain">
            Unleashing the future of innovation in software development and
            turning ideas into reality, this is the portfolio of a student
            championing the software world. This is the gateway to marvel at the
            spectacular world of coding, a glimpse into the impressive foray of
            projects undertaken.
          </p>
        </div>
        {/* ===p container=== */}

        {/* Button Container */}
        <div className="flex justify-start ">
          <button
            style={{ backgroundColor: "#000000" }}
            className="px-4 py-2 mt-5 tracking-widest  text-buttonColor text-base font-bold font-secundryFont rounded-xl"
          >
            Contact
          </button>
        </div>
        {/* ===Button Container=== */}
      </header>
      {/* ===Header=== */}
    </div>
  );
}
