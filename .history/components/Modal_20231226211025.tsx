"use client"

import { Dialog, Transition } from "@headlessui/react"
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
              leaveFrom="opacity-0"
              
           >
            <Dialog.Overlay className="fixed inset-0" />
           </Transition.Child>
         </div>
        </Dialog>
      </Transition>
    </>

  )
}

export default Modal