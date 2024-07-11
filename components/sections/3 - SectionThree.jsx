import React from 'react'
import { TreesChartTwo } from '../ui/trees-chart-2'

export default function SectionThree() {
  return (
    <div className="relative overflow-w-hidden bg-[url('/bottomWave.png')] bg-no-repeat 2xl:bg-top pt-36 pb-12 -mb-12">
     <div className="mx-auto max-w-[1140px] px-6 py-20 lg:py-32 lg:px-8 relative grid lg:grid-cols-2 gap-12">
        <div className='relative'>
          <div className="lg:absolute top-0 left-0 w-full h-full z-0">
            <TreesChartTwo className="lg:absolute z-10 lg:mr-12 w-full" />
            <TreesChartTwo className="absolute -translate-x-8 translate-y-2 -rotate-6 hidden lg:block " />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter">What We Do</h2>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">We are a nonprofit dedicated to saving trees and our planet. We plant trees, save trees, and advocate for environmental legislation.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">We work on many laws and regulations aimed at protecting the environment and natural resources affected by human activity. It is important to have these laws in place to protect the environment and natural resources for future generations.</p>
            <p className="text-lg mt-4 tracking-tight text-neutral-800">We also work to educate the public about the importance of trees and the environment. We believe that by educating the public, we can help to create a more sustainable future for our planet.</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}
