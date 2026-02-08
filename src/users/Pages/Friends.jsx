
import React, { useContext, useEffect, useState } from 'react'
import { Card, Button, TextInput, Pagination } from "flowbite-react";
import UserSidebar from '../Components/UserSidebar';
import UserHeader from '../Components/UserHeader';
import { getUsersAPI } from '../../services/allAPIs';
import { HiSearch } from "react-icons/hi";
import { searchContext } from '../../context/SearchContextShare';


function Friends() {

    const { searchKey, setSearchKey } = useContext(searchContext)

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const onPageChange = (page) => setPage(page);

    
    const [token, setToken] = useState('')
    const [users, setUsers] = useState([])
    console.log(token);
    console.log(users);


    useEffect(() => {
        const storedToken = sessionStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const allUsers = async (page) => {
        console.log("inside all books");

        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        const result = await getUsersAPI(page, reqHeader)
        console.log(result);
        setUsers(result.data.users)
        setTotalPages(result.data.totalPages);
    }
    useEffect(() => {
        allUsers(page)
    }, [token, page])
    return (
        <div>
            <UserHeader />
            <div className='flex '>
                <div className="w-75 fixed top-15 left-0 right-0 z-40 ">
                    <UserSidebar />
                </div>
                <div className="ml-75 p-10 ">
                    <h1 className='text-2xl font-semibold pt-10 '>Suggessions For You:</h1>
                    
                    <div className='flex gap-10 justify-start flex-wrap p-10 '>
                        {
                            users ?
                                users.map(item => (
                                    <Card className="max-w-sm">
                                        <div className="flex justify-end px-4 pt-4">

                                        </div>
                                        <div className="flex flex-col items-center pb-10">
                                            <div className="flex flex-wrap gap-2">

                                                <img
                                                    src={item.profile}
                                                    alt="profile"
                                                    className="h-32 w-32 object-cover mb-3 rounded-full shadow-lg"
                                                />
                                            </div>
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.username}</h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
                                            <div className="mt-4 flex space-x-3 lg:mt-6">

                                                <Button className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" >Add friend</Button>

                                                <Button
                                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                    Message
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                )) : "no users available"
                        }
                    </div>
                    <div className="flex overflow-x-auto sm:justify-center">
                        <Pagination  currentPage={page} totalPages={totalPages} onPageChange={onPageChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends