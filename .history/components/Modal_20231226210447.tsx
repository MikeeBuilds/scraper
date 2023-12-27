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
<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate Account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>Are you sure you want to deactivate your account? All of your data will be permanetly removed. This action cannot be undone.

          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>

    </>
        </Transition>
      
  )
}

export default Modal