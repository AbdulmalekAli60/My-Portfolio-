// External Librarise
import emailjs from "@emailjs/browser";
// emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY);
// External Librarise
// React
import { ChangeEvent, useState,  FormEvent } from "react";
// React

interface EmailInfo {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}
interface InputProps {
  inputName: string;
  placeHolder?: string;
  stateValue: string;
  changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  inputName,
  placeHolder,
  stateValue,
  changeInputValue,
}: InputProps) => {
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
            value={stateValue}
            onChange={changeInputValue}
            className="py-3 px-4 w-full border-buttonColor rounded-lg text-sm bg-backGroundColor dark:bg-darkBackGroundColor"
          />
        </div>
        {/* === Inputs + send Button Container === */}
      </div>
    </>
  );
};
export default function Contact() {
  const [emailInformation, setEmailInformation] = useState<EmailInfo>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (field: keyof EmailInfo) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setEmailInformation(prev => ({ ...prev, [field]: value }));
  };

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !API_KEY) {
      alert("Missing EmailJS configuration");
      return;
    }

    emailjs.send(SERVICE_ID, TEMPLATE_ID,  emailInformation as unknown as Record<string, unknown>, API_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setEmailInformation({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  }

  return (
    <div className="mb-24" id="contact">
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-10">
        <h1 className="text-footerColor dark:text-darkFooterColor font-mainFont font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest text-center">
          Contact
        </h1>
        {/* form container */}
        <div className="bg-red-500">
        <form onSubmit={handleSendEmail} className="flex flex-col items-center">
          <div className="w-96">
            <Input
              inputName="Name"
              stateValue={emailInformation.from_name}
              changeInputValue={handleInputChange("from_name")}
              placeHolder="Your Name"
            />
            <Input
              inputName="Email"
              stateValue={emailInformation.from_email}
              changeInputValue={handleInputChange("from_email")}
              placeHolder="Your Email"
            />
            <Input
              inputName="Subject"
              stateValue={emailInformation.subject}
              changeInputValue={handleInputChange("subject")}
              placeHolder="Subject"
            />
            <div className="w-full mb-3">
              <label
                htmlFor="message"
                className="font-secundryFont font-bold flex justify-start text-textMain dark:text-darkTextMain tracking-widest mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={emailInformation.message}
                onChange={handleInputChange("message")}
                rows={6}
                className="border rounded-2xl w-full p-2 resize-none scroll-p-3 bg-backGroundColor dark:bg-darkBackGroundColor"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-5 tracking-widest w-full opacity-100 hover:opacity-70 transition-all duration-300 bg-contactButtonColor text-base font-secundryFont rounded-xl"
            >
              Send
            </button>
          </div>
        </form>
        </div>
        {/* form container */}
      </div>
    </div>
  );
}
