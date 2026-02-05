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
                <div className="w-full h-[calc(100vh-4rem)] overflow-y-auto mt-6 flex flex-col lg:flex-row lg:ml-64 mt-15 ms-75">
                    {/* LEFT COLUMN */}
                    <div className="w-full lg:w-1/2 p-4 md:p-5">

                        {/* TRAINER PROFILE */}
                        <div className="shadow rounded-lg p-5 bg-green-50 w-full">
                            <div className="flex flex-col sm:flex-row gap-5 mb-4">
                                <img
                                    src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg"
                                    className="w-24 h-24 rounded-lg object-cover"
                                    alt=""
                                />

                                <div>
                                    <h1 className="text-lg md:text-xl font-bold">Shifad A</h1>
                                    <p className="text-sm md:text-base">Strength Coach</p>

                                    <List>
                                        <ListItem icon={HiCheckCircle}>
                                            Experience : 8 years
                                        </ListItem>
                                        <ListItem icon={HiCheckCircle}>
                                            Focus On : strength training, weight loss
                                        </ListItem>
                                        <ListItem icon={HiCheckCircle}>
                                            Location : Kochi
                                        </ListItem>
                                    </List>
                                </div>
                            </div>

                            <hr />

                            <p className="mt-4 text-sm md:text-base">
                                Passionate about helping clients achieve their fitness goals and live a healthier life.
                            </p>
                        </div>

                        {/* TRAINER INSTRUCTIONS */}
                        <div className="shadow rounded-lg p-5 mt-6 bg-green-50 w-full">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-lg md:text-xl font-bold">
                                    Trainer instructions
                                </h5>
                                <span className="text-sm text-cyan-600 cursor-pointer">
                                    View all
                                </span>
                            </div>

                            <List ordered className="divide-y">
                                <ListItem className="py-3">
                                    At least 10 characters (and up to 100 characters)
                                </ListItem>
                                <ListItem className="py-3">
                                    At least 10 characters (and up to 100 characters)
                                </ListItem>
                                <ListItem className="py-3">
                                    At least 10 characters (and up to 100 characters)
                                </ListItem>
                            </List>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="w-full lg:w-1/2 p-4 md:p-5">
                        <div className="shadow rounded-lg p-5">
                            <div className="mb-4 flex items-center justify-between border-b pb-2">
                                <h5 className="text-lg md:text-xl font-bold">
                                    Make a payment
                                </h5>
                            </div>

                            {/* Payment content goes here */}
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MyTrainers