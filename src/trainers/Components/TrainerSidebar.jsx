import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

function TrainerSidebar() {
  return (
    <div>
      <Sidebar className='p-10 bg-stone-50 fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]' aria-label="Default sidebar example">
        <SidebarItems>
          <SidebarItemGroup>
            <div>
              <SidebarItem as={Link} to='/trainer-dashboard' icon={MdDashboard}>
                Dashboard
              </SidebarItem>
            </div>
            <div>
              <SidebarItem as={Link} to='/myclients' icon={CgProfile}  >
                My clients
              </SidebarItem>
            </div>
            <div>
              <SidebarItem as={Link} to='/trainer-messages' icon={MdMessage} labelColor="dark">
                Message
              </SidebarItem>
            </div>
            <div>
              <SidebarItem as={Link} to='/trainer-earnings' icon={RiMoneyDollarCircleLine} >
                Earnings
              </SidebarItem>
            </div>
            <div>
              <SidebarItem as={Link} to='/trainer-schedules' icon={SlCalender} >
                Schedule
              </SidebarItem>
            </div>
            <SidebarItem icon={IoLogOut}>
              Logout
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  )
}

export default TrainerSidebar