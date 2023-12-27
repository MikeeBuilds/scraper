"use client"

import { useDialog } from "@headlessui/react"
import { useState } from "react"


const Modal = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <button type='button' className='btn'>
       Track
     </button>
       
       <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
         <Dialog.Panel>
          <Dialog.Title>Deactivate Account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
            </Dialog.Description>

            <p>Are you sure you want to deactivate your account? All of your data will be permanetly removed. This action cannot be undone.

            </p>

            
         </Dialog.Panel>
       </Dialog>

    </>
  )
}

export default Modal