import Link from "next/link";
import { handleDefinerIconSocial } from "../IconeMedia";
import { useRouter } from "next/router";

const socialShareMap = {
  facebook: {
    shareUrl: "https://www.facebook.com/sharer/sharer.php?u=",
    display: "Facebook",
  },
  twitter: {
    shareUrl: "https://twitter.com/intent/tweet?text=",
    display: "Twitter",
  },
  linkedin: {
    shareUrl: "https://www.linkedin.com/sharing/share-offsite/?url=",
    display: "Linkedin",
  },
};

export const SocialSharedButton = () => {
  const router = useRouter();
  const url = router ? router.basePath + router.asPath : "";

  return (
    <ul className="flex items-center justify-center gap-4">
      {Object.entries(socialShareMap).map(
        ([socialShareItemKey, socialShareProvider]) => (
          <li
            key={socialShareItemKey}

          >
            <Link
              className="text-lg mr-2 ml-1 text-gray-50 lg:text-xl h-14  w-14 flex justify-center items-center xl:h-16 xl:w-16 bg-gradient-to-tr from-p-gold via-p-gold to-gray-200 xl:text-4xl rounded-full shadow-xl shadow-neutral-300 group-hover:-translate-y-3 transition-transform"
              href={`${socialShareProvider.shareUrl}${url}`}
            >
              {handleDefinerIconSocial(socialShareProvider.display)}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
