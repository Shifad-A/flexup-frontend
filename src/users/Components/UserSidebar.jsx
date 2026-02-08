import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { FaHome} from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

function UserSidebar() {
  return (
    <div>
        <Sidebar className='p-10 bg-stone-50 fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]' aria-label="Default sidebar example">
              <SidebarItems>
                <SidebarItemGroup>
                  <SidebarItem  as={Link} to='/community-feed'icon={FaHome}  >
                    Home
                  </SidebarItem>
                  <SidebarItem as={Link} to='/trainers' icon={IoIosMan}   labelColor="dark">
                    Trainers
                  </SidebarItem>
                  <SidebarItem  as={Link} to='/friends' icon={FaUserFriends} >
                    flexUp users
                  </SidebarItem>
                  <SidebarItem as={Link} to='/messages' icon={IoNotifications} >
                    Messages
                  </SidebarItem>
                  <SidebarItem as={Link} to='/my-trainers' icon={IoIosMan}   labelColor="dark">
                    MY Trainer
                  </SidebarItem>
                 <SidebarItem as={Link} to='/profile' icon={CgProfile} >
                    Profile
                  </SidebarItem>                 
                  <SidebarItem icon={IoLogOut}>
                    Logout
                  </SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </Sidebar>
    </div>
  )
}

export default UserSidebar