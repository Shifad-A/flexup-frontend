import React, { useContext, useEffect, useState } from 'react'
import UserSidebar from '../Components/UserSidebar';
import UserHeader from '../Components/UserHeader';
import { Button, Card, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { MdVerifiedUser } from "react-icons/md";
import { getTrainerAPI, trainerRequestAPI } from '../../services/allAPIs';
import { searchContext } from '../../context/SearchContextShare';

function Trainers() {

    const {searchKey,setSearchKey}=useContext(searchContext)
    const [token, setToken] = useState('')
    const [trainers, setTrainers] = useState([])
    console.log(token);
    console.log(trainers);


    useEffect(() => {
        const storedToken = sessionStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const allTrainers = async () => {
        console.log("inside all books");

        try {
            const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        const result = await getTrainerAPI(searchKey,reqHeader)
        console.log(result);
        setTrainers(result.data)
        } catch (err) {
            console.log(err);
            
        }
    }
    useEffect(() => {
        allTrainers()
    }, [token,searchKey])

    const handleTrainerRequest=async(trainerId)=>{

        try {
            const reqHeader={
            Authorization: `Bearer ${token}`
        }
        const reqBody={
            trainerId,
        }
        const result =await trainerRequestAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status===401){
            return alert(result.response.data)
        }
        alert(result.data)
            
        } catch (err) {
            console.log(err);
        }
    }

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
                        onChange={(e)=>setSearchKey(e.target.value)}
                            id="search"
                            type="text"
                            icon={HiSearch}
                            placeholder="Search trainers..."
                            required
                            className='w-100 '
                        />
                    </div>
                    <div className='flex gap-5 p-5 flex-wrap justify-start p-3 '>
                        {
                            trainers ?
                                trainers.map(item => [
                                    <Card className="flex flex-col gap-4 p-4 w-full sm:max-w-md">
                                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">

                                            {/* Profile Image */}
                                            <img
                                                src={item.profile}
                                                alt="profile"
                                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                                            />

                                            {/* User Info */}
                                            <div className="text-center sm:text-left">
                                                <h1 className="text-lg sm:text-xl font-bold">
                                                    {item.username}
                                                </h1>
                                                <p className="text-sm text-gray-500">{item.email}</p>

                                                <p className="text-yellow-500 mt-1">⭐⭐⭐⭐</p>

                                                <div className="flex justify-center sm:justify-start items-center gap-1 text-green-500 mt-2">
                                                    <MdVerifiedUser />
                                                    <span className="text-sm">Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        
                                        <div className='flex gap-3'>
                                            <Button className="w-full">
                                            View Profile
                                        </Button>
                                        <Button onClick={()=>handleTrainerRequest(item._id)} color={'alternative'} className="w-full">
                                            Send Trainer Request
                                        </Button>
                                        </div>
                                    </Card>
                                ]) : "No Trainers Found"
                        }

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainers