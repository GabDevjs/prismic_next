import { useState } from "react";
import { BsFillShareFill } from "react-icons/bs"
import { Fragment } from "react";

import { BsPlusLg } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { SocialSharedButton } from "./SocialSharedButton";
import { useRouter } from "next/router";
import { copyTextClipboard } from "../../../utils/copyText";
import { createErrorToast, createSuccessToast } from "../../../utils/ToatsNotifications";

const InputCopyUrl = () => {
  const router = useRouter();
  const url = router ? router.basePath + router.asPath : "";

  return (
    <div className="flex w-full bg-p-azul border-2 border-p-azul-600 rounded-3xl py-3 px-6 relative shadow-2xl overflow-hidden">
      <input
        type="text"
        name="search"
        value={url}
        placeholder="https://www.paulista.com.br"
        className="w-full bg-transparent outline-none text-white text-lg font-semibold"
      />
      <div className="right-0 inset-y-0 w-32 bg-gradient-to-r from-p-azul/90 to-transparent">
      </div>
      <button
        name="Copiar"
        title="Copiar"
        arial-label="Copiar"
        onClick={async () => {
          await copyTextClipboard(
            url,
            () => createSuccessToast("URL Copiada"),
            () => createErrorToast("URL não encontrada"), // Add an empty function as the fourth argument
          );
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-p-gold border-2 border-yellow-500 z-10 px-5 py-2 rounded-3xl hover:scale-105"
      >
        Copiar
      </button>
    </div >
  )
}


export const SharedButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full w-full items-center justify-center text-center md:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-xl">
                  <main
                    className="w-full transform overflow-hidden rounded-2xl bg-gray-100 px-8 py-6 text-left align-middle shadow-2xl transition-all"
                  >
                    <div
                      className={`flex w-full justify-between items-center`}
                    >

                      <h2 className="font-bold text-2xl  text-gray-700">
                        Compartilhar
                      </h2>
                      <button
                        type="button"
                        className="rounded-md text-3xl text-gray-900 transition duration-150 ease-in-out
                          hover:rotate-90 hover:scale-125"
                        onClick={() => setIsOpen(false)}
                      >
                        <BsPlusLg className="rotate-45 " />
                      </button>
                    </div>
                    <div className="w-full h-px bg-gray-300 mt-4 mb-3"></div>
                    <div className=" w-full bg-gray-50 py-3 flex flex-col gap-8 rounded-2xl px-3">
                      <SocialSharedButton />
                      <InputCopyUrl />
                    </div>
                  </main>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


      <button
        name="compartilhar"
        title="compartilhar"
        arial-label="compartilhar"
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 shadow-3xl border-[2px] w-14 h-14 text-xl rounded-full font-semibold transition-all ease-in-out hover:cursor-pointer focus:outline-none whitespace-nowrap focus:ring-2 text-p-gold bg-gray-50 border-p-gold"
      >
        <BsFillShareFill className="inline mr-[2px]" />
      </button>
    </>
  )
}