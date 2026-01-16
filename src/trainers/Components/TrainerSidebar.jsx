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
        <Sidebar className='p-10 h-screen bg-stone-50 w-full ' aria-label="Default sidebar example">
                      <SidebarItems>
                        <SidebarItemGroup>
                            <Link to='/trainer-dashboard'>
                          <SidebarItem icon={MdDashboard}>
                            Dashboard
                          </SidebarItem>
                          </Link>
                          <Link to='/myclients'>
                          <SidebarItem  icon={CgProfile}  >
                            My clients
                          </SidebarItem>
                          </Link>
                          <Link to='/trainer-messages'>
                          <SidebarItem  icon={MdMessage}   labelColor="dark">
                            Message
                          </SidebarItem>
                          </Link>
                          <Link to='/trainer-earnings'>
                          <SidebarItem icon={RiMoneyDollarCircleLine} >
                            Earnings
                          </SidebarItem>
                          </Link>
                          <Link to='/trainer-schedules'>
                          <SidebarItem icon={SlCalender} >
                            Schedule
                          </SidebarItem>
                          </Link>
                          
                          
                          <SidebarItem  icon={IoLogOut}>
                            Logout
                          </SidebarItem>
                        </SidebarItemGroup>
                      </SidebarItems>
                    </Sidebar>
    </div>
  )
}

export default TrainerSidebar