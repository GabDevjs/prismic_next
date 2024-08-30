import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaTelegramPlane,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

export function handleDefinerIconSocial(name: any) {
  switch (name) {
    case "Facebook":
      return <FaFacebookF className="inline" />;
    case "Instagram":
      return <FaInstagram className="inline" />;
    case "Twitter":
      return <FaTwitter className="inline" />;
    case "Linkedin":
      return <FaLinkedinIn className="inline" />;
    case "Youtube":
      return <FaYoutube className="inline" />;
    case "Whatsapp":
      return <FaWhatsapp className="inline" />;
    case "Tiktok":
      return <FaTiktok className="inline" />;
    case "Telegram":
      return <FaTelegramPlane className="inline" />;
    case "Twitch":
      return <FaTwitch className="inline" />;
    case "Github":
      return <FaGithub className="inline" />;
    default:
      return <FaFacebookF className="inline" />;
  }
}

export const IconeMedia = (props: { social?: any; minimalCss?: any; slice?: any; className?: any; }) => {
  const { social, minimalCss, slice, className } = props;

  return minimalCss ? (
    <Link
      href={social.url}
      target="_blank"
      aria-label={`Link ${social.media_name}`}
      rel="noreferrer"
      className={` text-lg md:text-xl ${className?.minimalCss}`}
    >
      {handleDefinerIconSocial(social.media_name)}
    </Link>
  ) : slice ? (
    <div className={`py-2 ${className}`}>
      <Link
        href={social.url}
        target="_blank"
        aria-label={`Link ${social.media_name}`}
        rel="noreferrer"
        className="flex justify-center items-center group flex-col md:flex-row gap-y-5"
      >
        <div className="text-lg mr-2 ml-1 text-gray-50 lg:text-xl h-14  w-14 flex justify-center items-center xl:h-16 xl:w-16 bg-gradient-to-tr from-p-gold via-p-gold to-gray-200 xl:text-4xl rounded-full shadow-xl shadow-neutral-300 group-hover:-translate-y-3 transition-transform">
          {handleDefinerIconSocial(social.media_name)}
        </div>
        <div className="text-left flex-1 pr-1 pl-2 w-full">
          <h2 className="text-xl xl:text-2xl font-bold pb-2  text-p-azul-600/80 border-b border-gray-300">
            {social?.media_name}
          </h2>
        </div>
      </Link>
    </div>
  ) : (
    <Link
      href={social.url}
      target="_blank"
      aria-label={`Link ${social.media_name}`}
      rel="noreferrer"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xl transition duration-300 ease-in-out hover:shadow-lg xl:h-12 xl:w-12 xl:text-2xl  ${className?.class}`}
    >
      {handleDefinerIconSocial(social.media_name)}
    </Link>
  );
};

