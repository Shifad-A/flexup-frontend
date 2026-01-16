import React from 'react'
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  Button,
  NavbarToggle,
} from "flowbite-react";

function UserHeader() {
  return (
    <div >
        <Navbar fluid rounded className='bg-stone-100 fixed top-0 top-0 w-full h-16 px-6 z-50 '>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="public/letter-f.png" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FlexUp</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
        <div className='px-5'>
        <Button className="bg-amber-400" >Logout</Button>
      </div>
      </div>
      
    </Navbar>
    </div>
  )
}

export default UserHeader
// fixed top-0 left-0 right-0 z-40