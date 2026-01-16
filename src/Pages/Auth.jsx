import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { loginAPI, registerAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownItem } from "flowbite-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Auth({ register }) {
  const [userData, setUserData] = useState({ username: "", password: "", email: "", role: "" })
  const navigate = useNavigate()
  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.password || !userData.email) {
      alert("please fill all fields to register")
    } else {
      try {
        const response = await registerAPI(userData)
        console.log(response);
        if (response.status == 200) {
          alert(response.data.message)
          navigate('/login')
        } else {
          alert(response.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleLogin = async () => {
    const { email, password } = userData
    if (!email || !password) {
      alert("Please Enter Valid Details")
    } else {
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status == 200) {
          if (result.data.existingUser.role == "FlexUp user") {

            setTimeout(() => {
              navigate('/community-feed')
            }, 3000)
          } else {
            setTimeout(() => {
              navigate('/trainer-dashboard')
            }, 3000)
          }
          // alert(result.data.message)
          toast.success(result.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        } else {
          // alert(result.response.data)
          toast.error(result.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }


      } catch (err) {
        console.log(err);
      }
    }

  }
  return (
    <div className='bg-stone-100 h-screen'>
      <div className='px-50 flex gap-20'>
        <div className="w-1/2 py-50">
          <h1 className='text-5xl font-semibold text-amber-300'>FlexUp</h1>
          <h3 className='text-3xl py-2'>flexup help you connect and share with the people in your life</h3>
        </div>
        <div className="w-1/2 py-30">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              {
                register &&
                <div >
                  <div className="mb-2 block">
                    <Label htmlFor="name" className='mb-2'>UserName</Label>
                  </div>
                  <TextInput onChange={(e) => setUserData({ ...userData, username: e.target.value })} className='' id="name" type="text" placeholder="John" required />
                </div>


              }
              <div className="my-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <TextInput onChange={(e) => setUserData({ ...userData, email: e.target.value })} className='' id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput onChange={(e) => setUserData({ ...userData, password: e.target.value })} id="password1" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Role</Label>
              </div>
              <Dropdown
                placeholder="Select Role"
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                className='bg-white hover:bg-white text-stone-400'
              >
                <DropdownItem >FlexUp user</DropdownItem>
                <DropdownItem>FlexUp trainer</DropdownItem>

              </Dropdown>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            {
              register ? <Button onClick={handleRegister} className='bg-amber-500 hover:bg-amber-600' type="button">SignUp</Button> : <Button onClick={handleLogin} className='bg-amber-500 hover:bg-amber-600' type="button">SignIn</Button>
            }
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default Auth