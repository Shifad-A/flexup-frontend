import { Button, Card,Avatar } from 'flowbite-react'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import UserSidebar from '../Components/UserSidebar';
import UserHeader from '../Components/UserHeader';
import { CiEdit } from "react-icons/ci";

function Profile() {
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
                                <div className='flex '>
                                    <img className='w-40 h-40 rounded-full object-cover' src="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="" />
                                    <div className='ms-5' >
                                        <h1 className='text-xl font-semibold'>Shifad A</h1>
                                        <p className='font-semibold'>520 friends</p>
                                    </div>
                                </div>
                                <div>
                                    <Button color={'alternative'}><CiEdit /></Button>
                                </div>

                            </div>

                            <div className='flex justify-around mt-5 border-t-1 border-stone-200 p-2'>

                                <div className='pr-10 border-r-2 border-stone-200 p-2'>
                                    <h1><span className='text-xl font-semibold me-2'>105</span>Posts </h1>
                                </div>

                                <div className='pr-10 border-r-2 border-stone-200 p-2' >
                                    <h1><span className='text-xl font-semibold me-2'>1.2k</span>Followers </h1>
                                </div>

                                <div className='p-2'>
                                    <h1><span className='text-xl font-semibold me-2'>532</span>Following</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tabs className='flex justify-center flex-wrap px-20 ' aria-label="Tabs with icons" variant="underline">
                            <TabItem active title="About" icon={HiUserCircle}>
                                This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                control the content visibility and styling.
                            </TabItem>
                            <TabItem title="Posts" icon={MdDashboard}>


                            </TabItem>
                            <TabItem title="Requests" icon={HiClipboardList}>
                                <div className='flex gap-10 justify-start flex-wrap p-10 '>

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
                                                    Accept
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Delete
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
                                                    Accept
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Delete
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
                                                    Accept
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Delete
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
                                                    Accept
                                                </a>
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </Card>
                                    
                                </div>
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