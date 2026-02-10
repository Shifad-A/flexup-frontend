import React, { useEffect, useState } from 'react'
import UserHeader from '../Components/UserHeader'
import UserSidebar from '../Components/UserSidebar'
import { Button, Card } from "flowbite-react";
import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { getMyTrainerAPI, getTrainerInstructionAPI } from '../../services/allAPIs';

function MyTrainers() {

    const [token, setToken] = useState('')
    const [myTrainer, setMyTrainer] = useState({})
    const [instructions, setInstructions] = useState([])

    console.log(myTrainer);
    console.log(instructions);
    



    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])
    const [payment, setPayment] = useState(0)


    const getMyTrainer = async () => {

        try {
            const reqHeader = {
                Authorization: `Bearer ${token}`
            }
            const result = await getMyTrainerAPI(reqHeader)
            console.log(result);
            setMyTrainer(result.data[0])

        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        if (token) {
            getMyTrainer()
        }
    }, [token])

    const getTrainerInstruction = async (trainerId) => {
        if (!trainerId) return;
        console.log(trainerId);
        try {
            const reqheader = {
                Authorization: `Bearer ${token}`
            }
            const reqBody = {
                id: trainerId
            }
            console.log(reqBody);

            const result = await getTrainerInstructionAPI(reqBody, reqheader)
            console.log(result);
            setInstructions(result.data)
            setInstructionList(result.data.instructions)

        } catch (err) {
            console.log(err);
        }

    }



    useEffect(() => {
        const trainerId = myTrainer?.trainer?._id;
        if (trainerId) {
            getTrainerInstruction(trainerId)
        }
    }, [myTrainer])

    const handlePayment=()=>{
        alert("Payment")
    }


    return (
        <div>
            <UserHeader />
            <div className="flex">
                <div className="w-1/4 fixed h-screen">
                    <UserSidebar />
                </div>
                <div className="px-4 sm:px-6 lg:px-10 py-6 ms-70 mt-5">
                    <div className='flex flex-col lg:flex-row gap-6 mt-5'>
                        {/* LEFT COLUMN */}
                        <div className="w-full lg:w-1/2 p-4 md:p-5">
                            <div className="shadow rounded-lg p-5 bg-green-50 w-full">
                                <div className="flex flex-col sm:flex-row gap-5 mb-4">
                                    <img
                                        src={myTrainer?.trainer?.profile}
                                        className="w-24 h-24 rounded-lg object-cover"
                                        alt=""
                                    />

                                    <div>
                                        <h1 className="text-lg md:text-xl font-bold">{myTrainer?.trainer?.username}</h1>
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
                                    {myTrainer?.trainer?.bio}
                                </p>

                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="w-full  lg:w-1/2  p-4 md:p-5">
                            <div className="shadow rounded-lg p-5">
                                <div className="mb-4 flex items-center justify-between border-b pb-2">
                                    <h5 className="text-lg md:text-xl font-bold">
                                        Make a payment
                                    </h5>
                                </div>
                                <div className="flex items-baseline text-gray-900 dark:text-white">
                                    <span className="text-3xl font-semibold">$</span>
                                    <span className="text-4xl font-extrabold tracking-tight">199</span>
                                    <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <Dropdown className='bg-white text-black border mt-5 hover:bg-white hover:text-black ' label="Choose your plan">
                                            <DropdownItem onClick={() => setPayment(1 * 199)}>1 month</DropdownItem>
                                            <DropdownItem onClick={() => setPayment(2 * 199)}>2 months</DropdownItem>
                                            <DropdownItem onClick={() => setPayment(6 * 199)}>6 months</DropdownItem>
                                            <DropdownItem onClick={() => setPayment(12 * 199)}>1 year</DropdownItem>
                                            <DropdownDivider />

                                        </Dropdown>
                                    </div>
                                    <div >
                                        <h1 className='text-3xl font-semibold'>$<span className='text-6xl font-extrabold '>{payment}</span></h1>
                                    </div>
                                </div>

                                <Button onClick={handlePayment} className='bg-green-800 w-full hover:bg-green-900 mt-11'> Pay Now</Button>


                            </div>
                        </div>
                    </div>


                    <div className="mt-6 m-5">
                        <Card className=' p-5 bg-blue-50'>
                            <div className="mb-4 flex items-center justify-center">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"> Trainer Instructions</h5>

                            </div>
                            <div className="flow-root">
                                <ul className="divide-y divide-gray-200 dark:divide-gray-700">

                                    {
                                        instructions ?
                                            instructions.map((item, key) => (
                                                <li className="py-3 sm:py-4">
                                                    <div className='p-5'>
                                                        <div className='flex justify-between mb-5'>
                                                            <h1 className='text-xl font-medium'>{item.headline}</h1>
                                                            <h3 className='text-stone-500 font-medium'>
                                                                {
                                                                    new Date(item.instructionDate).toLocaleDateString("en-IN", {
                                                                        day: "2-digit",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    })
                                                    }
                                                            </h3>
                                                        </div>
                                                        <div >
                                                            <p>
                                                                {item.instructions}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )) : "No Instructions"
                                    }



                                </ul>
                            </div>
                        </Card>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default MyTrainers


