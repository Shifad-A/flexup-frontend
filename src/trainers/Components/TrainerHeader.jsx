import React from 'react'
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
    return (
        <div>
            <Navbar fluid rounded className='bg-blue-900 fixed top-0 left-0 right-0 z-40'>
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
                </div>

            </Navbar>
        </div>
    )
}

export default TrainerHeader