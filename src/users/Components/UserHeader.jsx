import React, { useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom';

function UserHeader() {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})

  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
    setUser(JSON.parse(sessionStorage.getItem('user') || {}))
  }, [])
  console.log(user);
  console.log(token);

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div >
      <Navbar fluid rounded className='bg-stone-100 fixed top-0 top-0 w-full h-17 px-6 z-50 '>
        <NavbarBrand href="https://flowbite-react.com">
          <img src="/letter-f.png" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FlexUp</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <img alt="User" src={user.profile} className='rounded-full w-12 h-12' referrerPolicy='no-referrer' />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{user.username}</span>
              <span className="block truncate text-sm font-medium">{user.email}</span>
            </DropdownHeader>
            <DropdownItem>Home</DropdownItem>
            <DropdownItem>Message</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
          <div className='px-5'>
            <Button onClick={handleLogout} className="bg-amber-400" >Logout</Button>
          </div>
        </div>

      </Navbar>
    </div>
  )
}

export default UserHeader
// fixed top-0 left-0 right-0 z-40