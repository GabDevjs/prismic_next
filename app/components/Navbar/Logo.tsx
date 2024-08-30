import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className, white } : { className?: string, white?: boolean }) => {
  return (
    <Link href="/" title="Logo Navbar">
      {/* {white == true ? (
        <Image
          src={LogoWhiteImg}
          alt="Logo Propspecta Imoveis"
          width={120}
          height={44}
          className={className}
          priority
        />
      ) : (
        <Image
          src={LogoColorImg}
          alt="Logo Propspecta Imoveis"
          width={120}
          height={44}
          className={className}
          priority
        />
      )} */}
    </Link>
  );
};
