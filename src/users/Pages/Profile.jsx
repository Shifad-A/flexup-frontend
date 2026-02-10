import { Button, Card,Avatar } from 'flowbite-react'
import { TabItem, Tabs } from "flowbite-react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import UserSidebar from '../Components/UserSidebar';
import UserHeader from '../Components/UserHeader';
import { useEffect, useState } from 'react';
import EditProfile from '../Components/EditProfile';
import { acceptFriendRequestAPI, getAllFriendsAPI, getFriendRequestsAPI, rejectFriendRequestAPI } from '../../services/allAPIs';
import { HiH3 } from 'react-icons/hi2';

function Profile() {
    
  const [token,setToken]=useState('')
  const [user,setUser]=useState({})
  const [friendRequests,setFriendRequests]=useState([])
  const [friends,setFriends]=useState([])
  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    setUser(JSON.parse(sessionStorage.getItem('user')|| {}))
  },[token])
  console.log(user);
  console.log(token);

const getFriendRequests=async()=>{

    try {
        const reqHeader={
            Authorization: `Bearer ${token}`
        }
        const result= await getFriendRequestsAPI(reqHeader)
        console.log(result);
        setFriendRequests(result.data)
    } catch (err) {
        console.log(err);
        
    }
    
}

useEffect(()=>{
    getFriendRequests()
},[token])

const acceptFriendRequest=async(id)=>{
    try {
        const reqHeader={
            Authorization: `Bearer ${token}`
        }
        const result=await acceptFriendRequestAPI(id,reqHeader)
        console.log(result);
        getFriendRequests()
        
    } catch (err) {
        console.log(err);
        
    }
}

const rejectFriendRequest=async(id)=>{
    try {
        const reqHeader={
            Authorization: `Bearer ${token}`
        }
        const result=await rejectFriendRequestAPI(id,reqHeader)
        console.log(result);
        getFriendRequests()
        
    } catch (err) {
        console.log(err);
        
    }
}

const getAllFriends=async()=>{
    const reqHeader={
            Authorization: `Bearer ${token}`
        }
    const result=await getAllFriendsAPI(reqHeader)
    console.log(result);
    setFriends(result.data.friendList)
    
}

useEffect(()=>{
    getAllFriends()
},[token])



    return (
        <div>
            <UserHeader />
            <div className='flex'>
                <div className='w-1/4 w-1/4 fixed h-screen '>
                    <UserSidebar />
                </div>
                <div className='ml-64 w-full h-[calc(100vh-4rem)] mt-20 '>
                    <div className='flex justify-center    '>
                        <div className=' shadow rounded-lg  p-5'>
                            <div className='flex justify-between'>
                                <div className='flex p-5 '>
                                    <img className='w-40 h-40 rounded-full object-cover' src={user.profile} alt="" />
                                    <div className='ms-5 p-5' >
                                        <h1 className='text-xl font-semibold'>{user.username}</h1>
                                        <p className='font-semibold'>520 friends</p>
                                        <p className='text-stone-500'>{user.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <EditProfile/>
                                </div>

                            </div>

                            <div className='flex justify-around mt-5 border-t-1 border-stone-200 p-2'>

                                <div className='pr-10 border-r-2 border-stone-200 p-2'>
                                    <h1><span className='text-xl font-semibold me-2'>105</span>Posts </h1>
                                </div>

                                

                                <div className='p-2'>
                                    <h1><span className='text-xl font-semibold me-2'>532</span>Friends</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tabs className='flex justify-center flex-wrap px-20 ' aria-label="Tabs with icons" variant="underline">
                            <TabItem active title="About" icon={HiUserCircle}>
                               <h4 className='text-center'>{user.bio}</h4>
                            </TabItem>
                            <TabItem title="Requests" icon={HiClipboardList}>
                                <div className='flex gap-10 justify-center flex-wrap p-10 '>

                                    {
                                        friendRequests?
                                        friendRequests.map((item,key)=>(
                                            <Card className="max-w-sm">
                                        <div className="flex justify-end px-4 pt-4">

                                        </div>
                                        <div className="flex flex-col items-center pb-10">
                                            <div className="flex flex-wrap gap-2">
                                                <Avatar img={item.sender.profile} rounded />
                                            </div>
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.sender.username}</h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.sender.email}</span>
                                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                                <Button
                                                   onClick={()=>acceptFriendRequest(item._id)}
                                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    onClick={()=>rejectFriendRequest(item._id)}
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Reject
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                        )):<h3 className='text-center'>No Requests Found</h3>
                                    }
                                   
                                </div>
                            </TabItem>
                            <TabItem active title="friends" icon={HiUserCircle}>
                               <ul className='flex flex-col items-center'>
                                        {
                                            friends?
                                            friends.map((item,key)=>(
                                                <li>
                                            <div className='flex justify-between w-200  mb-5'>
                                                <div>
                                                    <div className='flex gap-3'>
                                                        <img src={item.profile} className='w-10 h-10 rounded-full' alt="" />

                                                    <div>
                                                        <h6 className='font-bold'>{item.username}</h6>
                                                        <p className='text-stone-500'>{item.email}</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end gap-5'>
                                                    
                                                    <div>
                                                    <Button>Decline</Button>
                                                     </div>
                                                </div>
                                            </div>
                                        </li>
                                            )):"You Dont Have Any Friends"
                                            
                                        }
                                    </ul>
                            </TabItem>

                        </Tabs>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
// fixed top-15 left-0 right-0 z-40