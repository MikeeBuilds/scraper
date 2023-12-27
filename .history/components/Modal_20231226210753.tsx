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
         
        </Dialog>

      </Transition>
    </>

  )
}

export default Modal