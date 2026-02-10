import React, { useEffect, useState } from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Button, Card } from 'flowbite-react'
import { Avatar } from "flowbite-react";
import { acceptTrainerRequestsAPI, dashboardStatusAPI, declineTrainerRequestsAPI, requestsViewAPI } from '../../services/allAPIs';

function TrainerDashboard() {
  const [trainer, setTrainer] = useState({})
  const [token, setToken] = useState('')
  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
    setTrainer(JSON.parse(sessionStorage.getItem('user') || {}))
  }, [token])
  const [status, setStatus] = useState({
    pendingRequests: 0,
    totalClients: 0
  })
  console.log(token);
  console.log(trainer);

  const [requests, setRequests] = useState([])
  console.log(requests);

  const handleViewRequest = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    const result = await requestsViewAPI(reqHeader)
    console.log(result);
    setRequests(result.data)

  }

  useEffect(() => {
    if (token) {
      handleViewRequest()
    }
  }, [token])

  const acceptTrainerRequest = async (id) => {
    const reqBody = {
      requestId: id
    }
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const result = await acceptTrainerRequestsAPI(reqBody, reqHeader)
      handleViewRequest();
      handleDashboardStatus();
      console.log(result);

    } catch (err) {
      console.log(err);

    }
  }

  const declineTrainerRequest = async (id) => {
    const reqBody = {
      requestId: id
    }
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const result = await declineTrainerRequestsAPI(reqBody, reqHeader)
      handleViewRequest();
      handleDashboardStatus();
      console.log(result);

    } catch (err) {
      console.log(err);

    }
  }

const handleDashboardStatus=async()=>{
  console.log(token);
    try {
      const reqHeader ={
        Authorization: `Bearer ${token}`
      }

      const result=await dashboardStatusAPI(reqHeader)
      console.log(result);
      setStatus(result.data)

    } catch (err) {
      console.log(err);

    }
  }
  useEffect(()=>{
      if(token){
        handleDashboardStatus()
      }
  },[token])
  return (
    <div>
      <TrainerHeader />
      <div className="w-75 fixed top-16 left-0 right-0 z-40">
        <TrainerSidebar />
      </div>

      <div className="px-4 sm:px-6 lg:px-10 py-6 ms-70 mt-5">
        <div className="flex flex-col lg:flex-row gap-6 mt-10">

          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl font-semibold">
              Welcome,{trainer.username}
            </h1>
            <p className="font-medium mb-6">
              Here is a quick overview of your activities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="shadow p-5 flex items-center gap-4">
                <img src="/handshake.png" className="w-12" />
                <div>
                  <h1 className="text-2xl font-semibold">{status.pendingRequests}</h1>
                  <p>New Requests</p>
                </div>
              </Card>

              <Card className="shadow p-5 flex items-center gap-4">
                <img src="/customer.png" className="w-12" />
                <div>
                  <h1 className="text-2xl font-semibold">{status.totalClients}</h1>
                  <p>Total clients</p>
                </div>
              </Card>

              <Card className="shadow p-5 flex items-center gap-4">
                <img src="/money.png" className="w-12" />
                <div>
                  <h1 className="text-2xl font-semibold">20,000</h1>
                  <p>Earnings</p>
                </div>
              </Card>
            </div>

            {/* REQUESTS */}
            <div className="mt-6">
              <Card>
                <h5 className="text-xl font-bold">
                  Recent Client Requests
                </h5>
                <ul className="divide-y h-74 overflow-y-auto">
                  {requests && requests.length > 0 ? (
                    requests.map((item) => (
                      <li key={item._id} className="py-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <Avatar img={item.user.profile} rounded />

                          <div className="flex-1">
                            <p className="font-medium">{item.user.username}</p>
                            <p className="text-sm text-gray-500">
                              {item.user.email}
                            </p>
                          </div>

                          <div className='flex gap-2' >
                            {
                              item.status == "accepted" ?

                                <div className='flex gap-2'>
                                  <Button

                                    className="bg-green-400 hover:bg-green-500"
                                  >
                                    Accepted
                                  </Button>
                                  <Button
                                    onClick={() => declineTrainerRequest(item._id)}
                                    className="bg-red-400 hover:bg-red-500">
                                    Remove
                                  </Button>
                                </div>
                                :
                                <div className='flex gap-2'>
                                  <Button
                                    onClick={() => acceptTrainerRequest(item._id)}
                                    className="bg-green-400 hover:bg-green-500"
                                  >
                                    Accept
                                  </Button>
                                  <Button
                                    onClick={() => declineTrainerRequest(item._id)}
                                    className="bg-red-400 hover:bg-red-500">
                                    Decline
                                  </Button>
                                </div>
                            }
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-center text-gray-500 py-4">
                      No Requests
                    </p>
                  )}
                </ul>
              </Card>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/3 mt-20">
            <Card>
              <div className="flex justify-between mb-4">
                <h5 className="text-xl font-bold">
                  Client messages
                </h5>
                <a className="text-sm text-cyan-600 hover:underline">
                  View all
                </a>
              </div>

              <ul className="divide-y">
                <li className="py-4 flex items-center gap-4">
                  <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" rounded />
                  <div className="flex-1">
                    <p className="font-medium">Neil Sims</p>
                    <p className="text-sm text-gray-500">
                      What should I eat after workout
                    </p>
                  </div>
                  <span className="text-sm">1 min ago</span>
                </li>
                <li className="py-4 flex items-center gap-4">
                  <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" rounded />
                  <div className="flex-1">
                    <p className="font-medium">Neil Sims</p>
                    <p className="text-sm text-gray-500">
                      What should I eat after workout
                    </p>
                  </div>
                  <span className="text-sm">1 min ago</span>
                </li>
                <li className="py-4 flex items-center gap-4">
                  <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" rounded />
                  <div className="flex-1">
                    <p className="font-medium">Neil Sims</p>
                    <p className="text-sm text-gray-500">
                      What should I eat after workout
                    </p>
                  </div>
                  <span className="text-sm">1 min ago</span>
                </li>
              </ul>
            </Card>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default TrainerDashboard