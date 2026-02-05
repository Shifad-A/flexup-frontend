import React, { useEffect, useState } from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Card, Avatar, Button } from 'flowbite-react'
import { declineTrainerRequestsAPI, viewMyClientsAPI } from '../../services/allAPIs'

function MyClients() {

    const [token, setToken] = useState(sessionStorage.getItem('token'))
    const [myClients,setMyClients]=useState([])
    
    const handleMyClients = async () => {  
       try {
             const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        const result=await viewMyClientsAPI(reqHeader)
        console.log(result);
        setMyClients(result.data)
       } catch (err) {
            console.log(err);  
       }
        
    }

    useEffect(()=>{
        handleMyClients()
    },[token])

      const declineTrainerRequest=async(id)=>{
        const reqBody = {
          requestId: id
        }
        const reqHeader = {
          Authorization: `Bearer ${token}`
        }
        try {
          const result = await declineTrainerRequestsAPI(reqBody, reqHeader)
          handleMyClients()
          console.log(result);
    
        } catch (err) {
          console.log(err);
    
        }
      }

    return (
        <div>
            <TrainerHeader />
            <div className="w-75 fixed top-16 left-0 right-0 z-40">
                <TrainerSidebar />
            </div>
            <div className="ml-75 mt-10">
                <h1 className='text-2xl font-semibold p-10 '>Clients</h1>
                <div className='flex justify-start gap-5 flex-wrap p-10 '>
                    {
                        myClients?
                        myClients.map(item=>(
                            <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">

                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="flex flex-wrap gap-2">
                                <Avatar img={item.user.profile}  rounded />
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.user.username}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.user.email}</span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                
                                <Button
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </Button>
                                <Button
                                    onClick={()=>declineTrainerRequest(item._id)}
                                    className="inline-flex items-center rounded-lg bg-red-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </Card>
                        )):"You Dont Have any clients"
                    }
                </div>
            </div>
        </div>
    )
}

export default MyClients