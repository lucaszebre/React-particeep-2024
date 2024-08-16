import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import Video from 'next-video';
function TrailerDialog(props:{children:React.ReactNode,trailer:string}){
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{props.children}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full  max-w-[700px] max-h-[500px] h-full space-y-4 border bg-white p-2 rounded-sm ">
          <iframe
       src={props.trailer}
      className='w-full h-full'
      allow="autoplay; encrypted-media"

     
    />          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default TrailerDialog