// External Libraries
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Loader, Check, Mail, Book, User } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// External Libraries

// React
import { ChangeEvent, useState, FormEvent, useRef } from "react";
// React

// Components + hocks
import { useLanguage } from "../contexts/LanguageContext";
// Components + hocks
interface EmailInfo {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface InputProps {
  inputName: string;
  stateValue: string;
  changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

const Input = ({
  inputName,
  stateValue,
  changeInputValue,
  icon,
}: InputProps) => {
  const { language } = useLanguage();
  const { t } = useTranslation("Contact");
  const arStyles = `${
    language === "ar"
      ? "font-secondryArabic tracking-normal"
      : "font-secundryFont tracking-widest"
  }`;
  const namespace = { ns: "Contact" };
  return (
    <div className="w-full mb-3">
      <span
        className={`${arStyles} font-bold flex justify-start text-textMain dark:text-darkTextMain mb-1`}
      >
        {t(inputName, namespace)}
      </span>
      <div className="relative">
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 ${
            language === "ar" ? "right-3" : "left-3"
          } pointer-events-none`}
        >
          {icon}
        </div>
        <input
          type="text"
          value={stateValue}
          onChange={changeInputValue}
          className={`py-3 w-full border-buttonColor rounded-lg text-sm bg-backGroundColor dark:bg-darkBackGroundColor
                     ${language === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"}`}
        />
      </div>
    </div>
  );
};

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const namespace = { ns: "Contact" };

  const { language } = useLanguage();
  const { t } = useTranslation("Contact");
  const arStyles = `${
    language === "ar"
      ? "font-secondryArabic tracking-normal"
      : "font-secundryFont tracking-widest"
  }`;

  const isAr: boolean = language === "ar";
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
      }
    );
  }, []);

  const [emailInformation, setEmailInformation] = useState<EmailInfo>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [sendingState, setSendingState] = useState<string>("default");

  const handleInputChange =
    (field: keyof EmailInfo) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setEmailInformation((prev) => ({ ...prev, [field]: value }));
    };

  const handleSendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendingState("sending");
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !API_KEY) {
      alert("Missing EmailJS configuration");
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailInformation as unknown as Record<string, unknown>,
        API_KEY
      )
      .then(() => {
        setEmailInformation({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setSendingState("sent");
        setTimeout(() => {
          setSendingState("default");
        }, 3000);
      })
      .catch(() => {
        alert("Error");
        setSendingState("default");
      });
  };

  return (
    <div className="mb-24" id="contact">
      <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-28 mb-10" ref={containerRef}>
        <h1
          className={`text-footerColor dark:text-darkFooterColor mb-5 ${arStyles} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center`}
        >
          {t("Contact", namespace)}
        </h1>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSendEmail} className="flex flex-col">
            <Input
              inputName="Name"
              stateValue={emailInformation.from_name}
              changeInputValue={handleInputChange("from_name")}
              icon={<User size={18} className="text-gray-400" />}
            />
            <Input
              inputName="Email"
              stateValue={emailInformation.from_email}
              changeInputValue={handleInputChange("from_email")}
              icon={<Mail size={18} className="text-gray-400" />}
            />
            <Input
              inputName="Subject"
              stateValue={emailInformation.subject}
              changeInputValue={handleInputChange("subject")}
              icon={<Book size={18} className="text-gray-400" />}
            />
            <div className="w-full mb-3">
              <label
                htmlFor="message"
                className={`${arStyles} font-bold flex justify-start text-textMain dark:text-darkTextMain mb-1`}
              >
                {t("Message", namespace)}
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
              className={`${arStyles} px-4 py-2 mt-5 w-full opacity-100 hover:opacity-70 transition-all duration-300 bg-contactButtonColor text-base rounded-xl`}
            >
              <div className="flex justify-center items-center">
                {sendingState === "default" && t("Send")}
                {sendingState === "sending" && (
                  <Loader className="mr-2 dark:text-white" />
                )}
                {sendingState === "sent" && (
                  <Check className="mr-2 dark:text-white" />
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
