import React from 'react'
import { ContactDialog } from './contact-dialog.jsx'
import MobileDrawer from './mobile-drawer.jsx'

const links = [
  { href: '/', label: 'Home' },
]

export default function Header() {
  return (
    <header className="relative z-10 text-black">
      <nav className="flex justify-between items-center max-w-[1440px] sm:p-4 mx-auto">
        <a href="/" className="text-2xl font-semibold tracking-tight">Green <span className="text-green-800">Planet.</span></a>
        <ul className="md:flex justify-between items-center gap-6 hidden">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a className='tracking-tight text-neutral-600 font-medium' href={href}>{label}</a>
            </li>
          ))}
          <ContactDialog />
        </ul>
        <div className='md:hidden'>
          <MobileDrawer className="" />
        </div>
      </nav>
    </header>
    
  )
}
