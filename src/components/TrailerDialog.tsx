import { Dialog, DialogPanel,DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'
import { useEffect, useRef } from 'react'

function TrailerDialog(props: { title:string,children: React.ReactNode; trailerUrl: string }) {
  let [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if ( videoRef.current ) {
      videoRef.current.play()
    }
  }, [])

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{props.children}</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50  ">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-[700px] max-h-[460px] h-full rounded-xl border bg-white p-2 ">
            <DialogTitle className="text-black font-bold text-xl p-3" >{props.title}</DialogTitle>

            <video
              ref={videoRef}
              src={props.trailerUrl}
              className='rounded-xl h-[380px]'
              autoPlay
              playsInline
              controls
              height={380}

            />
            
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default TrailerDialog