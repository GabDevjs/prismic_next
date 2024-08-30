import { Fragment, Key } from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, Transition, TransitionChild } from "@headlessui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Container } from "../Container";
import { Logo } from "./Logo";
import { NavItemsList } from "./NavItemsList";
import { BsPlusLg } from "react-icons/bs";
import { PrismicText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

const MobileNavLink = ({ href, children }: { href: string, children: React.ReactNode | React.ReactNode[] | any }) => {
  return (
    <PopoverButton as={Link} href={href || "/"} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
};

const MobileNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-10 w-12 items-center justify-center rounded-lg border-2 border-gray-200 focus:outline-none md:h-12 md:w-14"
        aria-label="Toggle Navigation"
      >
        
            <HiMenuAlt3 className="inline text-3xl" />
        
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <ul className="flex flex-col gap-4">
              {navigation?.slices[0] != undefined ? (
                navigation.slices?.map((item: { items: any[]; primary: { link: string; title: RichTextField | null | undefined; }; }, index: Key | null | undefined) => (
                  <li key={index}>
                    {item.items?.length === 0 ? (
                      <MobileNavLink
                        href={item.primary.link}
                      >
                        <PrismicText field={item.primary.title} />
                      </MobileNavLink>
                    ) : (
                      <div className="relative">
                        <MobileNavLink
                          href={item.primary.link}
                        >
                          <PrismicText field={item.primary.title} />
                        </MobileNavLink>
                        <ul className="flex flex-col gap-4">
                          {item.items.map((childre, index) => (
                            <li key={index}>
                              <MobileNavLink
                                href={childre.link ?? "Falta inclui o link"}
                              >
                                <PrismicText field={childre.name} />
                              </MobileNavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))
              ) : (
                <li>
                  <MobileNavLink href="/">Home</MobileNavLink>
                </li>
              )}
            </ul>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
};

export const Navbar = ({ navigation, isHome }: { navigation?: any; isHome?: boolean }) => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50  ${
        !isHome &&
        "border-b border-gray-200 bg-gray-50 shadow-2xl shadow-gray-100/10"
      }`}
    >
      <Container>
        <nav className="relative z-50 flex items-center justify-between py-1.5">
          <div className="flex items-center pl-2 md:gap-x-12">
            <div className="max-w-[4.5rem]">
              {!isHome ? <Logo  /> : <Logo white />}
            </div>
          </div>
          <div
            className={`flex items-center gap-x-3 md:gap-x-5  ${
              isHome ? "text-gray-200" : "text-gray-900"
            }`}
          >
            <div className="hidden lg:flex lg:justify-end">
              <NavItemsList navigation={navigation} />
            </div>
            <div className=" lg:hidden">
              <MobileNavigation navigation={navigation} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
