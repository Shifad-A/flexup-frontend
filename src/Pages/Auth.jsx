import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownItem } from "flowbite-react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Select } from "flowbite-react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

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
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('user',JSON.stringify(result.data.existingUser))
          if (result.data.existingUser.role == "flexUp user") {
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

  const handleGoogleLogin = async (credentialResponse) => {
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    try {
      const response = await googleLoginAPI({ username: decode.name, email: decode.email, profile: decode.picture, password: "googlepassword" })
      console.log(response);
      if (response.status == 200) {
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("user", JSON.stringify(response.data.existingUser))
        setTimeout(()=>{
            navigate('/community-feed')
          },3000)
        toast.success(response.data.message, {
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

    } catch (error) {
      console.log(error);


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
              <Select
                value={userData.role}
                onChange={(e) =>
                  setUserData({ ...userData, role: e.target.value })
                }
              >
                <option value="">Select Role</option>
                <option value="FlexUp user">flexUp user</option>
                <option value="FlexUp trainer">flexUp trainer</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            {
              register ? <Button onClick={handleRegister} className='bg-amber-500 hover:bg-amber-600' type="button">SignUp</Button> :
                <div className='flex flex-col gap-5'>
                  <Button onClick={handleLogin} className='bg-amber-500 hover:bg-amber-600 w-full' type="button">SignIn</Button>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                      handleGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />;
                </div>
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