import React, { useEffect, useState } from 'react'
import TrainerHeader from '../Components/TrainerHeader'
import TrainerSidebar from '../Components/TrainerSidebar'
import { Avatar, Button, Textarea } from "flowbite-react";
import { trainerInstructionAPI, viewMyClientsAPI } from '../../services/allAPIs';

function Schedules() {
  const [token, setToken] = useState(sessionStorage.getItem('token'))
      const [myClients,setMyClients]=useState([])
      const [visibleClientId, setVisibleClientId] = useState(null);
      const [instruction,setInstruction]=useState({
        userId:false,
        headline:"",
        instructions:""
      })

      const [instructionList,setInstructionList]=useState([])

      const visibleClients = visibleClientId
    ? myClients.filter(c => c.user._id === visibleClientId)
    : myClients;
      
      
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

    const handleInstruction=async()=>{
      try {
        const reqHeader={
        Authorization: `Bearer ${token}`
      }

      const reqBody=instruction

      const result=await trainerInstructionAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status==201){
        alert("instruction sended successfully")
        setVisibleClientId(null)
        setInstruction({
          userId:false,
        headline:"",
        instructions:""
        })

      }
        
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
      <div className="ml-75 mt-20 ">
        <div className="px-4 py-2">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
              <div className="text-[#61896f] flex border-none bg-white dark:bg-[#1a2e1f] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#111813] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#1a2e1f] h-full placeholder:text-[#61896f] px-4 pl-2 text-base font-normal" placeholder="Find clients..." />
            </div>
          </label>
        </div>
        <div className='p-5  '>
          <h1 className='font-bold mb-5'>active clients</h1>
          <div className='flex justify-start gap-10 text-center overflow-x-auto w-full hide-scrollbar '>
            {
              visibleClients && visibleClients.length>0?
              visibleClients.map(item=>(
                <div 
                onClick={()=>{
                  setVisibleClientId(item.user._id);
                  setInstruction({...instruction,userId:item.user._id});
                }}
                >
              <img className='border border-green-400 rounded-full p-2' src={item.user.profile} alt="" width='80px' />
              <p className='font-bold'>{item.user.username}</p>
            </div>
              )):"You don't have any users"
            }
            
          </div>
        </div>

        <div className='p-5'>
          <h1 className='font-bold mb-5 '>Send instructions</h1>
          <div className='p-10 shadow rounded-lg bg-green-50'>
            <div>
              <label className="block text-sm font-medium text-[#61896f] dark:text-gray-400 mb-1">Instruction Title</label>
              <Textarea
              onChange={(e)=>setInstruction({...instruction,headline:e.target.value})}
              className="w-full shadow rounded-lg border-none bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary h-12 px-4" placeholder="e.g. Monday Leg Day Routine" type="text" />
            </div>
            <div>
              <label className="block  text-sm font-medium text-[#61896f] dark:text-gray-400 mb-1">Workout &amp; Diet Details</label>
              <Textarea
              onChange={(e)=>setInstruction({...instruction,instructions:e.target.value})}
              className="w-full shadow rounded-lg border-none bg-background-light dark:bg-background-dark text-sm focus:ring-2 focus:ring-primary h-24 px-4" placeholder="Type specific instructions for Sarah..." rows="5"/>
            </div>
            <div className='flex justify-center mt-5'>
              <Button onClick={handleInstruction} className='bg-green-500'>Send Instruction</Button>
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Schedules
