import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { FaHome } from "react-icons/fa";
function Header() {
  return (
    <div>
        
        <Navbar fluid rounded className='mx-10 p-10 bg-stone-100'>
              <NavbarBrand href="https://flowbite-react.com">
                <img src="/letter-f.png" className="mr-3 h-6 sm:h-9" alt="FlexUp-logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FlexUp</span>
                
              </NavbarBrand>
              <div className="flex md:order-2">
                <Button className='bg-amber-500 hover:bg-amber-600'>Join now</Button>
                <NavbarToggle />
              </div>
              <NavbarCollapse>
                <NavbarLink href="#" active>
                  Home
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Programs</NavbarLink>
                <NavbarLink href="#">Events</NavbarLink>
                <NavbarLink href="/login">Community</NavbarLink>
              </NavbarCollapse>
            </Navbar>
    </div>
  )
}

export default Header