import React from 'react'
import UserHeader from '../Components/UserHeader'
import UserSidebar from '../Components/UserSidebar'
import { Card,Avatar } from "flowbite-react";
function UserMessages() {
  return (
    <div>
        <UserHeader />
            <div className='flex '>
                <div className="w-75 fixed top-15 left-0 right-0 z-40 ">
                    <UserSidebar />
                </div>
                <div className="ml-75 p-10 w-full">
                    <Card className=' p-5'>
                          <div className="mb-4 flex items-center justify-center">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Chats</h5>
                            
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
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="shrink-0">
                                      <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $3467
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
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="shrink-0">
                                    <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                </div>
                              </li>
                              <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                  <div className="shrink-0">
                                    <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $2367
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
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $3467
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
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
                                </div>
                              </li>
                              <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="shrink-0">
                                    <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
                                </div>
                              </li>
                              <li className="pb-0 pt-3 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                  <div className="shrink-0">
                                    <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                  </div>
                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $2367
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Card>
                </div>
            </div>
    </div>
  )
}

export default UserMessages