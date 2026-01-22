import React from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Button, Card } from 'flowbite-react'
import { Avatar } from "flowbite-react";


function TrainerDashboard() {
  return (
    <div>
      <TrainerHeader />
      <div className="w-75 fixed top-16 left-0 right-0 z-40">
        <TrainerSidebar />
      </div>
      <div className='ml-75 p-8'>
        <div className='flex mt-10'>
          <div className="w-2/3 ">
            <div>
              <h1 className='text-2xl font-semibold'>Welcome, Shifad!</h1>
              <p className='font-medium'>Here is a quick overview of your activities.</p>
              <div className='flex gap-5 p-5'>

                <Card className='shadow p-5 flex gap-5' >
                  <img src="public/handshake.png" width='50px' alt="" />
                  <div>
                    <h1 className='text-2xl font-semibold'>6</h1>
                    <h1>New Requests</h1>
                  </div>
                </Card>

                <Card className='shadow p-5 flex gap-5' >
                  <img src="public/customer.png" width='50px' alt="" />
                  <div>
                    <h1 className='text-2xl font-semibold'>30</h1>
                    <h1 >Total clients</h1>
                  </div>
                </Card>
                <Card className='shadow p-5 flex gap-5' >
                  <img src="public/money.png" width='50px' alt="" />
                  <div>
                    <h1 className='text-2xl font-semibold'>20,000</h1>
                    <h1 >Earnings</h1>
                  </div>
                </Card>

              </div>
              <div className='m-5'>
                <Card className="w-full">
                  <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Client Requests</h5>
                    <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      View all
                    </a>
                  </div>
                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">Diet plan questian</p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Button className='bg-green-400 hover:bg-green-500'>View details</Button>
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">Looking for weight loose</p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Button className='bg-green-400 hover:bg-green-500'>View details</Button>
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">i wan't a strength training session</p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Button className='bg-green-400 hover:bg-green-500'>View details</Button>
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="shrink-0">
                            <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">I wan't a yoga session</p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Button className='bg-green-400 hover:bg-green-500'>View details</Button>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="w-1/3 ">
            <Card className="max-w-sm">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Client messages</h5>
                <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">What should i eat after workout</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">1 min ago</div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">Looking forward to our session tomorrow</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        3 min ago
                      </div>
                    </div>
                  </li>


                  <li className="pb-0 pt-3 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">Just crushed my workout</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        3 min ago
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerDashboard