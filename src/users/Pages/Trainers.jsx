import React from 'react'
import UserSidebar from '../Components/UserSidebar';
import UserHeader from '../Components/UserHeader';
import { Button, Card, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { MdVerifiedUser } from "react-icons/md";

function Trainers() {
    
    return (
        <div>
            <UserHeader />
            <div className='flex'>
                <div className="w-75 fixed top-15 left-0 right-0 z-40">
                    <UserSidebar />
                </div>
                <div className="ml-75 p-10">
                    <h1 className='text-2xl font-semibold pt-10'>Find Your Trainer</h1>
                    <div className="max-w-md mx-auto">
                        <TextInput
                            id="search"
                            type="text"
                            icon={HiSearch}
                            placeholder="Search trainers..."
                            required
                            className='w-100'
                        />
                    </div>
                    <div className='flex gap-5 p-5 flex-wrap justify-start p-3 '>
                        <Card>
                            <div className='flex gap-5'>
                                <div >
                                    <img src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" className='w-25 rounded-lg' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Shifad A</h1>
                                    <p>Strength Coach</p>
                                    <p>⭐⭐⭐⭐</p>
                                    <div className='flex my-3 text-green-500'>
                                        <p className='mt-1'>
                                            <MdVerifiedUser />
                                        </p>
                                        <p>verified</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <Button className='w-full'>View profile</Button>

                            </div>
                        </Card>
                        <Card>
                            <div className='flex gap-5'>
                                <div >
                                    <img src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" className='w-25 rounded-lg' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Shifad A</h1>
                                    <p>Strength Coach</p>
                                    <p>⭐⭐⭐⭐</p>
                                    <div className='flex my-3 text-green-500'>
                                        <p className='mt-1'>
                                            <MdVerifiedUser />
                                        </p>
                                        <p>verified</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <Button className='w-full'>View profile</Button>

                            </div>
                        </Card>
                        <Card>
                            <div className='flex gap-5'>
                                <div >
                                    <img src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" className='w-25 rounded-lg' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Shifad A</h1>
                                    <p>Strength Coach</p>
                                    <p>⭐⭐⭐⭐</p>
                                    <div className='flex my-3 text-green-500'>
                                        <p className='mt-1'>
                                            <MdVerifiedUser />
                                        </p>
                                        <p>verified</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <Button className='w-full'>View profile</Button>

                            </div>
                        </Card>
                        <Card>
                            <div className='flex gap-5'>
                                <div >
                                    <img src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" className='w-25 rounded-lg' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Shifad A</h1>
                                    <p>Strength Coach</p>
                                    <p>⭐⭐⭐⭐</p>
                                    <div className='flex my-3 text-green-500'>
                                        <p className='mt-1'>
                                            <MdVerifiedUser />
                                        </p>
                                        <p>verified</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <Button className='w-full'>View profile</Button>

                            </div>
                        </Card>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainers