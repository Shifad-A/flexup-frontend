import React from 'react'
import UserHeader from '../Components/UserHeader'
import { Card,Avatar,Textarea,Button } from "flowbite-react";
import UserSidebar from '../Components/UserSidebar';
import { CiSquarePlus } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";


function CommunityFeed() {
  return (
    <div>
      <UserHeader />
      <div className="w-75 fixed">
        <UserSidebar />
      </div>
      <div className="ml-75 p-8 flex flex-col flex-wrap mt-10">
        <h1 className='text-2xl font-semibold'>Fitness community feed</h1>
        <div className='shadow rounded p-5 my-5 w-150'>
          <div className='flex'>
            <div className="shrink-0">
              <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
            </div>
            <div>
              <Textarea
                id="text"
                type="text"
                placeholder="whats on your mind"
                required
                className='w-100 ms-20'
              />
            </div>
          </div>
          <div className='flex gap-5 justify-end mt-3 '>
             <Button color={'alternative'} ><CiSquarePlus />Photos/Videos</Button>
            <Button>Post</Button>
          </div>
        </div>
        <div className='w-150 shadow rounded p-5 text-wrap '>
          <div className='text-wrap flex-wrap border-b-1 border-blue-200 p-5'>
            <div className="shrink-0 flex gap-3 ">
              <Avatar img="https://cdn.pixabay.com/photo/2024/08/28/21/51/men-9005146_640.jpg" alt="avatar of Jese" rounded />
              <h1 className='font-medium'>shifad A</h1>
              <p className='text-stone-400'>30 min ago</p>
            </div>
            <div className='mt-3'>
              <p className='my-3'>Completed 10 km run </p>
              <img src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg"  alt="" />
            </div>
            <div className='mt-3 flex gap-6'>
              <div className='flex gap-1'>
                <Button color="alternative"><SlLike /></Button>
              <p className='mt-2'>52 LIkes</p>
              </div>
              <div className='flex gap-2'>
                <Button color="alternative" ><FaRegComment /></Button>
              <p className='mt-2'>5 Comments</p>
              </div>
            </div>
          </div>
          <div className='text-wrap flex-wrap border-b-1 border-blue-200 p-5'>
            <div className="shrink-0 flex gap-3 ">
              <Avatar img="https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_640.jpg" alt="avatar of Jese" rounded />
              <h1 className='font-medium'>Priya</h1>
              <p className='text-stone-400'>1h  ago</p>
            </div>
            <div className='mt-3'>
              <p className='my-3'>“Yoga is the journey of the self, through the self, to the self.”</p>
              <img src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488_640.jpg" alt="" />
            </div>
            <div className='mt-3 flex gap-6'>
              <div className='flex gap-1'>
                <Button color={'alternative'}><SlLike /></Button>
              <p className='mt-2'>120 LIkes</p>
              </div>
              <div className='flex gap-1'>
                <Button color='alternative'><FaRegComment /></Button>
              <p className='mt-2'>15 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CommunityFeed