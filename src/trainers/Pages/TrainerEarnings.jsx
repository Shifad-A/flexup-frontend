import React from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Card } from 'flowbite-react'

function TrainerEarnings() {
  return (
    <div>
      <TrainerHeader />
      <div className="w-75 fixed top-16 left-0 right-0 z-40">
        <TrainerSidebar />
      </div>
      <div className="ml-75 mt-20">
        <h1 className='font-bold ms-3 text-2xl'>Ernings & payments</h1>
        <div className="flex justify-start gap-10  m-10">
          <Card className='w-50'>
            <div className='flex'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/019/632/937/small/3d-minimal-money-saving-concept-depositing-money-money-management-concept-a-bunch-of-banknotes-and-a-pile-of-coins-3d-illustration-free-png.png" width={'50px'} alt="" />
              <h1 className='text-stone-400'>Total earnings</h1>
            </div>
            <h1 className='font-bold text-center'>$12,500.00</h1>
          </Card>
          <Card className='w-50'>
            <div className='flex gap-5'>
              <img src="https://cdn-icons-png.freepik.com/256/976/976438.png?semt=ais_white_label" width={'30px'} alt="" />
              <h1 className='text-stone-400'>pending</h1>
            </div>
            <h1 className='font-bold text-center'>$500.00</h1>
          </Card>
          <Card className='w-50'>
            <div className='flex gap-3'>
              <img src="https://png.pngtree.com/png-vector/20230626/ourmid/pngtree-green-approved-stamp-with-check-mark-symbol-vector-png-image_7324179.png" width={'30px'} alt="" />
              <h1 className='text-stone-400'>completed</h1>
            </div>
            <h1 className='font-bold text-center'>$9,500.00</h1>
          </Card>
        </div>
        <h1 className='font-bold ms-3 text-xl'>payments History</h1>
      <div className='flex flex-col gap-5 m-10'>
        <div className='flex justify-between  shadow p-2'>
          <div>
              <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" width='50px' className='rounded' alt="" />
          </div>
          <div className='text-stone-500 '>
            <h1 className='font-bold'>shifad.A</h1>
            <p>Custom Diet Plan</p>
          </div>
          <div>
            <h1 className='font-bold'>$200.00</h1>
            <div className='bg-green-300 text-center rounded-full' >
              <p className='text-green-500 font-semibold'>Paid</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between  shadow p-2'>
          <div>
              <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" width='50px' className='rounded' alt="" />
          </div>
          <div className='text-stone-500 '>
            <h1 className='font-bold'>shifad.A</h1>
            <p>Custom Diet Plan</p>
          </div>
          <div>
            <h1 className='font-bold'>$200.00</h1>
            <div className='bg-green-300 text-center rounded-full' >
              <p className='text-green-500 font-semibold'>Paid</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between  shadow p-2'>
          <div>
              <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" width='50px' className='rounded' alt="" />
          </div>
          <div className='text-stone-500 '>
            <h1 className='font-bold'>shifad.A</h1>
            <p>Custom Diet Plan</p>
          </div>
          <div>
            <h1 className='font-bold'>$200.00</h1>
            <div className='bg-green-300 text-center rounded-full' >
              <p className='text-green-500 font-semibold'>Paid</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default TrainerEarnings