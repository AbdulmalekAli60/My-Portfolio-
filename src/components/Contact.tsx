// External Librarise

// External Librarise
// React

// React
interface InputProps {
  inputName: string;
  placeHolder?: string;
}
const Input = ({inputName, placeHolder}: InputProps) => {
  return (
    <>
      <div className="flex justify-center">
        {/* Inputs + send Button Container */}
        <div className="w-96 h-fit mb-3">
          <span className="font-secundryFont font-bold flex justify-start text-textMain dark:text-darkTextMain tracking-widest mb-1">
            {inputName}
          </span>
          <input
            type="text"
            placeholder={placeHolder}
            className="py-3 px-4 w-full border-buttonColor rounded-lg text-sm bg-backGroundColor"
          />
        </div>
        {/* === Inputs + send Button Container === */}
      </div>
    </>
  );
};
export default function Contact() {
  return (
    <>
      <div
        
        className="mb-24"
      >
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24">
          <h1 className="text-footerColor dark:text-darkFooterColor font-mainFont font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest text-center">
            Contact
          </h1>
        </div>
        <Input inputName="Name" key={1} placeHolder="Your Name" />
        <Input inputName="Email" placeHolder="Your Email" key={2} />

        {/* Textarea container */}
        <div className="flex justify-center">
          <div className="w-96 h-fit mb-3">
            <span className="font-secundryFont font-bold flex justify-start text-textMain dark:text-darkTextMain tracking-widest mb-1">
              Subject
            </span>
            <textarea
              rows={6}
              className="border rounded-2xl w-full p-2 resize-none scroll-p-3"
            ></textarea>

            <button
              style={{ color: "#000000" }}
              className="px-4 py-2 mt-5 tracking-widest w-full opacity-100   hover:opacity-70  transition-all duration-300 bg-contactButtonColor text-base font-secundryFont rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
        {/* Textarea container */}
      </div>
    </>
  );
}
