import React from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Card, Avatar } from 'flowbite-react'

function MyClients() {
    return (
        <div>
            <TrainerHeader />
            <div className="w-75 fixed top-16 left-0 right-0 z-40">
                <TrainerSidebar />
            </div>
            <div className="ml-75 mt-10">
                <h1 className='text-2xl font-semibold p-10 '>Clients</h1>
                <div className='flex justify-start gap-5 flex-wrap p-10 '>
                    <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">

                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="flex flex-wrap gap-2">
                                <Avatar rounded />
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Physical Trianer</span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Add friend
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">

                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="flex flex-wrap gap-2">
                                <Avatar rounded />
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Physical Trianer</span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Add friend
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-sm">
                        <div className="flex justify-end px-4 pt-4">

                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="flex flex-wrap gap-2">
                                <Avatar rounded />
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Physical Trianer</span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Add friend
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MyClients