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
         </Dialog.Panel>
       </Dialog>

    </>
  )
}

export default Modal