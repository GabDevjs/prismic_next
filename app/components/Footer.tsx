import { Logo } from "./Navbar/Logo";
import { IconeMedia } from "./IconeMedia";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import { BsCaretDownFill } from "react-icons/bs";
import { Fragment, Key } from "react";
import { Container } from "./Container";
import { RichTextField } from "@prismicio/client";

export const Footer = ({ navigation, medias_sociais } :  { navigation?: any, medias_sociais?: any}) => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="px-6 pb-8 pt-10 sm:pt-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          <ul className="grid w-full grid-cols-3 gap-4 lg:col-span-2 xl:col-span-4">
            {navigation?.slices[0] != undefined ? (
              navigation.slices?.map((item: any, index: Key | null | undefined) => (
                <div key={index} className="flex items-start">
                  <Menu >
                    {({ open }) =>
                      item.items?.length === 0 ? (
                        <Link
                          href={item.primary.link}
                          title={item.primary.title || ""} 
                          className="group flex flex-col items-center rounded-md px-1 text-sm"
                        >
                          <PrismicText field={item.primary.title} />
                        </Link>
                      ) : (
                        <>
                          <Menu.Button className="flex items-center gap-[4px]">
                            <PrismicText field={item.primary.title} />
                            <BsCaretDownFill
                              className={
                                open
                                  ? "rotate-180"
                                  : "" + " transition-transform"
                              }
                            />
                          </Menu.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className=" absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                              <div className="px-1 py-1 ">
                                {item.items.map((childre: { link: any; name: RichTextField | null | undefined; }, index: Key | null | undefined) => (
                                  <Menu.Item key={index}>
                                    {({ active }) => (
                                      <Link
                                        href={
                                          childre.link ?? "Falta inclui o link"
                                        }
                                        className={`${active
                                          ? "bg-mv-verduncio "
                                          : "hover:bg-mv-verduncio "
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                      >
                                        <PrismicText field={childre.name} />
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )
                    }
                  </Menu>
                </div>
              ))
            ) : (
              <div>não achou</div>
            )}
          </ul>
          <div className="mt-10 xl:mt-0">
            <div className="max-w-[4rem]">
              <Logo className="" />
            </div>
            <p className="mt-2 max-w-[20rem] text-sm font-bold leading-6 text-gray-600">
              {medias_sociais?.data?.endereco || ""}
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex items-center justify-center gap-3">
            {medias_sociais?.data.medias != undefined &&
              medias_sociais?.data.medias.map((social: any, index: any) => (
                <IconeMedia social={social} key={index} minimalCss />
              ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2023 Prospecta, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
