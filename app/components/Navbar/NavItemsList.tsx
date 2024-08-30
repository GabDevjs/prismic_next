"use client"
import { NavItem } from "./NavItem";
import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { PrismicText } from "@prismicio/react";
import { usePathname } from "next/navigation";

export const NavItemsList = ({ navigation } : { navigation: any }) => {
  const asPath = usePathname()

  return (
    <ul className="flex flex-wrap items-center justify-center text-xs font-medium">
      {navigation?.slices[0] != undefined ? (
        navigation.slices?.map((item: any, index: number) => (
          <NavItem key={index} isAsPath={asPath === item.primary.link}>
            <Menu>
              {({ open }) =>
                item.items?.length === 0 ? (
                  <Link
                    href={item.primary.link ?? "Falta inclui o link"}
                    title={item.primary.title ?? ""}
                    className={`${asPath === item.primary.link
                      ? "text-p-gold"
                      : "hover:text-p-gold"
                      } group flex flex-col items-center rounded-md px-1 `}
                  >
                    {item.primary.title ? (
                      <PrismicText field={item.primary.title} />
                    ) : (
                      <div>sem titulo</div>
                    )}
                  </Link>
                ) : (
                  <>
                    <Menu.Button className="flex items-center gap-[4px]">
                      {item.primary.title ? (
                        <PrismicText field={item.primary.title} />
                      ) : (
                        <div>sem titulo</div>
                      )}
                      <BsCaretDownFill
                        className={
                          open ? "rotate-180" : "" + " transition-transform"
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
                          {item.items.length > 0 && item.items.map((childre: any, index: number) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link
                                  href={childre.link ?? "Falta inclui o link"}
                                  title={childre.name ?? "aaaa"}
                                  className={`${active
                                    ? "bg-mv-verduncio "
                                    : "hover:bg-mv-verduncio "
                                    } group flex w-full items-center rounded-md px-2 py-2 `}
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
          </NavItem>
        ))
      ) : (
        <div>não achou</div>
      )}
    </ul>
  );
};
