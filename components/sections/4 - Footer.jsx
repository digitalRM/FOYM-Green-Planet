import React from 'react'
import { ContactDialog } from '../ui/contact-dialog'

// bg-[url('/bottomWave.png')] bg-no-repeat 2xl:bg-top

export default function Footer() {
  return (
    <div className="relative overflow-w-hidden flex flex-col">

      <div className='bg-[url("/topWave.png")] bg-no-repeat 2xl:bg-top h-[79px] w-full' />

      <div className="bg-[#001E11] w-full">
        <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid sm:grid-cols-2 gap-4 lg:gap-12 bg-[#001E11] w-full">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter text-white">Green <span className="text-green-400">Planet.</span></h2>
          </div>
          <div className='flex sm:justify-end items-center gap-3'>
            <a href="/" className="text-white">Home</a>
            <ContactDialog className="text-white" />
          </div>
          <div className="border-t border-neutral-200/20 pt-8 mt-8 md:flex md:items-center md:justify-between lg:col-span-2">
            <p className="text-xs text-neutral-200">
             © 2024 Green Planet. - An FOYM Template 
            </p>
            <p className="text-xs text-neutral-200 mt-8 sm:mt-0">
            Use this template for free on <a href="https://www.foym.org" className="text-white hover:underline">foym.org</a>
            </p>
          </div>
        </div>
        
      </div>

    </div>
  )
}
