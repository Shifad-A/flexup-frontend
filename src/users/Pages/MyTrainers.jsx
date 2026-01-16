import React from 'react'
import UserHeader from '../Components/UserHeader'
import UserSidebar from '../Components/UserSidebar'
import { Card } from "flowbite-react";
import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import { useState } from "react";
function MyTrainers() {
    
    return (
        <div>
            <UserHeader />
            <div className="flex">
                <div className="w-1/4 fixed h-screen">
                    <UserSidebar />
                </div>
                <div className='ml-64 w-full h-[calc(100vh-4rem)] overflow-y-auto mt-15 flex'>
                    <div className=" w-2/4 p-5">
                        <div className='shadow rounded-lg p-5 bg-green-50 w-full'>
                            <div className='flex gap-5 mb-2'>
                                <div >
                                    <img src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" className='w-25 rounded-lg' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Shifad A</h1>
                                    <p>Strength Coach</p>
                                    <List>
                                        <ListItem icon={HiCheckCircle}>Experience : 8 years</ListItem>
                                        <ListItem icon={HiCheckCircle}>Focus On : strength training,weight loss,</ListItem>
                                        <ListItem icon={HiCheckCircle}>Location : kochi</ListItem>
                                    </List>
                                </div>
                            </div>
                            <hr />
                            <div className='mt-5'>
                                <p>passionate about helping client to achieve there fitness goals and live a helthier life</p>

                            </div>
                        </div>
                        <div>
                            <div className='shadow rounded-lg p-5 mt-5 bg-green-50 w-full'>
                                <div className="mb-4 flex items-center justify-between">
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Trainer instructions</h5>
                                    <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        View all
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <List ordered className="divide-y divide-gray-200 dark:divide-gray-700">

                                        <ListItem className="py-3 sm:py-4">At least 10 characters (and up to 100 characters)</ListItem>
                                        <ListItem className="py-3 sm:py-4">At least 10 characters (and up to 100 characters)</ListItem>
                                        <ListItem className="py-3 sm:py-4">At least 10 characters (and up to 100 characters)</ListItem>


                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4">
                        <div className='shadow rounded-lg p-5 m-5'>
                            <div className="mb-4 flex items-center p-2 justify-between border-b-1 border-blue-100">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Make a payment</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTrainers