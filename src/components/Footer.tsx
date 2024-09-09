// External Lbraries
import { GithubIcon, Laptop, Linkedin } from "lucide-react";
// import { Twitter } from "lucide-react";
// External Lbraries

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      {/* Icon and rights container */}
      <div className="flex flex-col items-center gap-10">
        <Laptop size={80} className="dark:text-white" />

        <p className="text-textMain dark:text-darkTextMain font-secundryFont leading-6 text-xs">
          All Rights Reserved
        </p>
      </div>
      {/* === Icon and rights container === */}

      {/* Date */}
      <div className="p-28 mt-14 mb-10 flex justify-center">
        <h1 className="text-footerColor dark:text-darkFooterColor font-mainFont tracking-widest text-[20vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] xl:text-[28vw] 2xl:text-[30vw] leading-[0.8]">
          {year}
        </h1>
      </div>
      {/* === Date === */}

      {/* Accounts links */}
      <div className="flex justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/abdulmalek-alshetwi/"
          className="  hover:opacity-55  transition-all duration-300"
        >
          <Linkedin
            size={32}
            className="text-footerColor dark:text-darkFooterColor"
          />
        </a>

        <a
          href="https://github.com/AbdulmalekAli60"
          className="  hover:opacity-55  transition-all duration-300"
        >
          <GithubIcon
            size={32}
            className="text-footerColor dark:text-darkFooterColor"
          />
        </a>
        {/* <a href="#"><Twitter size={32} className="text-footerColor"/></a> */}
      </div>
      {/* Accounts links */}
    </footer>
  );
}
