import React, { useEffect, useState } from 'react'
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    TextInput,
    NavbarToggle,
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";

function TrainerHeader() {
    const [trainer, setTrainer] = useState({})
      const [token, setToken] = useState('')
    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
        setTrainer(JSON.parse(sessionStorage.getItem('user') || {}))
      }, [token])

    return (
        <div>
            <Navbar fluid rounded className='bg-blue-900 fixed top-0 top-0 w-full h-16 px-6  z-40'>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="public/letter-f.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FlexUp</span>
                    <div>
                    <TextInput
                        id="search"
                        type="text"
                        icon={HiSearch}
                        placeholder="Search..."
                        required
                        className='w-100 ms-20'
                    />
                </div>
                </NavbarBrand>
                
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={trainer.profile} rounded />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">{trainer.username}</span>
                            <span className="block truncate text-sm font-medium">{trainer.email}</span>
                        </DropdownHeader>
                        <DropdownItem>Dashboard</DropdownItem>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownDivider />
                        <DropdownItem>Sign out</DropdownItem>
                    </Dropdown>
                    <NavbarToggle />
                </div>

            </Navbar>
        </div>
    )
}

export default TrainerHeader