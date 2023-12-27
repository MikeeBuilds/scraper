"use client"

import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image";
import { Fragment, useState } from "react"


const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type='button' className='btn' onClick={openModal}>
        Track
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

             {/* This element is to trick the browser into centering the modal contents. */}
             <span
             className="inline-block h-screen align-middle"
             aria-hidden="true"
            >
              &#8203;
              </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="p-3 border border-gray-200 rounded-10">
                      <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={28}
                        height={28}
                      />
                    </div>

                    <Image
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  <h4>
                    Stay updated with latest product prices right in your inbox!
                  </h4>

                  <p>
                    Never miss a sale again! We will notify you when the price of this product drops.
                  </p>

                  <form className="flex flex-col mt-5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                         Email Address
                         <div className="dialog-input_container">
                            <image
                              src
                            />
                         </div>
                    </label>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>

  )
}

export default Modal