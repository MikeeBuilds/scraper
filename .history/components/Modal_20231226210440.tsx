"use client"

import { Dialog, Transition } from "@headlessui/react"
import { useState } from "react"


const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>  
      <button type='button' className='btn' onClick={openModal}>
        Track
      </button>


        <Transition>

        </Transition>
      
  )
}

export default Modal