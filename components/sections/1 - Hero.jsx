import React from 'react'
import Header from '../ui/1 - header'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className="relative h-[1000px] overflow-w-hidden bg-[url('/trees.png')] bg-cover 2xl:bg-bottom bg-center">
      <div className="mx-auto max-w-[1040px] px-6 pt-6 lg:pt-10 lg:px-8 relative">
        <Header />
        <div className="flex flex-col lg:flex-row items-center justify-between mt-36 lg:mt-56 z-10 relative">
          <div className=" mx-auto flex flex-col">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center"><span className="text-green-800">Saving</span> Trees.</h1>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black tracking-tighter text-center">Saving Our <span className="text-green-800">Planet.</span></h1>
            <p className="text-lg max-w-[600px] text-neutral-600 text-center mt-6">We are a nonprofit dedicated to saving trees and our planet. We plant trees, save trees, and advocate for environmental legislation.</p>
            <div className="flex gap-4 mt-6 justify-center md:mx-36 flex-col md:flex-row">
              <Button className="w-full">Donate</Button>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
