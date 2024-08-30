import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ButtonTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1000) {
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
        showButton ? "opacity-100" : " translate-y-10 opacity-0"
      } z-[99999]  flex flex-col items-end text-white transition-all  duration-300`}
    >
      <div className="hidden lg:inline-block">
        <button
          title="voltar para o inicio"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="vi-gray-700 flex h-12 w-12 items-center justify-center rounded-full border border-p-gold border-opacity-40 bg-gradient-to-tl from-gray-800 to-gray-600 text-xl text-gray-100 drop-shadow-2xl transition-transform hover:-translate-y-1 md:h-16 md:w-16 md:text-2xl"
        >
          <IoIosArrowUp className="inline" />
        </button>
      </div>
      <div className="lg:hidden">
        <Link
          href="#top"
          title="voltar para o inico"
          className="vi-gray-700 border-mv-verduncio flex h-12 w-12 items-center justify-center rounded-full border border-opacity-40 bg-gradient-to-tl from-gray-800 to-gray-600 text-xl text-gray-100 drop-shadow-2xl transition-transform hover:-translate-y-1 md:h-16 md:w-16 md:text-2xl"
        >
          <IoIosArrowUp className="inline" />
        </Link>
      </div>
    </div>
  );
};
