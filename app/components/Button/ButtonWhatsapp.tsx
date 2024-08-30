import Link from "next/link";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export const ButtonWhats = ({ buttonLink } : { buttonLink: string }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        showButton ? "opacity-100" : "translate-x-20 translate-y-10 opacity-0"
      } z-[99999]  flex flex-col items-end text-white transition-all  duration-300`}
    >
      {buttonLink != undefined ? (
        <Link
          href={buttonLink}
          target="_blanck"
          title="Link para o whatsapp"
          aria-label="Link para o whatsapp"
          className="bg-primary-blue focus:outline-secondary-green-200 group z-50 flex items-center rounded-full bg-gradient-to-t  from-green-600 to-green-500 p-4 text-gray-100 shadow-2xl shadow-green-600 transition-all delay-700 duration-200 hover:scale-110 focus:outline-none focus:outline-1 lg:p-4"
        >
          <BsWhatsapp className="t ransition-all text-2xl group-hover:scale-110 xl:text-4xl" />
        </Link>
      ) : null}
    </div>
  );
};
