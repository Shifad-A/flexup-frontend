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
                  <Link to='/community-feed'>
                  <SidebarItem href="#" icon={FaHome}  >
                    Home
                  </SidebarItem>
                  </Link>
                  <Link to='/trainers'>
                  <SidebarItem href="" icon={IoIosMan}   labelColor="dark">
                    Trainers
                  </SidebarItem>
                  </Link>
                  <Link to='/friends'>
                  <SidebarItem href="/friends" icon={FaUserFriends} >
                    friends
                  </SidebarItem>
                  </Link>
                  <Link to='/messages'>
                  <SidebarItem href="" icon={IoNotifications} >
                    Messages
                  </SidebarItem>
                  </Link>
                  <Link to='/my-trainers'>
                  <SidebarItem href="" icon={IoIosMan}   labelColor="dark">
                    MY Trainer
                  </SidebarItem>
                  </Link>
                  <Link to='/profile'>
                    <SidebarItem href="#" icon={CgProfile} >
                    Profile
                  </SidebarItem>
                  </Link>
                  
                  <SidebarItem href="#" icon={IoLogOut}>
                    Logout
                  </SidebarItem>
                </SidebarItemGroup>
              </SidebarItems>
            </Sidebar>
    </div>
  )
}

export default UserSidebar