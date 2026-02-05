import React, { useEffect } from 'react'
import { Button, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import { getUserAPI, updateUserAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';



function EditProfile() {
    const [openModal, setOpenModal] = useState(false);
    const [token, setToken] = useState('')
    console.log(token);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }
    }, [])

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        bio: '',
        profile: ''
    })

    const userAssign = async () => {
        console.log("inside userAssign");
        try {
            const reqHeader = {
                Authorization: `Bearer ${token}`
            }
            console.log(reqHeader);

            const res = await getUserAPI(reqHeader)
            console.log(res);
            setUser(res.data[0])
        } catch (error) {
            console.log(error);

        }
    }
    console.log(user);

    useEffect(() => {
        if (token) {
            userAssign()
        }
    }, [token])

    const [preview, setPreview] = useState('')

    const handleUpload = (e) => {
        console.log(e.target.files);
        // image to url
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        setUser({ ...user, profile: url })
    }
    console.log(preview);
    

    const handleUpdate = async () => {
        const { username, password, bio } = user

        try {
            console.log("token:", token);

            const reqHeader = {
                Authorization: `Bearer ${token}`
            }
            const reqBody = new FormData

            for (let key in user) {
                reqBody.append(key, user[key])
            }

            const result = await updateUserAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status == 200) {
                alert("updated successfully")
                console.log(result.data.updateUser);
                
                sessionStorage.setItem('user',JSON.stringify(result.data.updateUser))
            } else {
                alert("upload error")
            }

            



        } catch (err) {
            console.log("error" + err);


        }

    }

    return (
        <div>
            <Button onClick={() => setOpenModal(true)} color={'alternative'}><CiEdit /></Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} >
                <ModalHeader />
                <ModalBody>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Your Profile</h3>
                        <div className='flex justify-center'>
                            <label htmlFor="imgfile" >
                                <input id='imgfile'
                                    onChange={(e) => handleUpload(e)}
                                    type="file" hidden />
                                <img src={
                                    preview ? preview :
                                        `${serverURL}/uploads/${user.profile}`
                                }
                                    alt=""
                                    className="w-40 h-40 rounded-full object-cover"
                                />
                                <Button className='relative -top-10 left-45 !bg-amber-50'><FaUserEdit className='text-amber-950' /></Button >
                            </label>
                        </div>
                        <div>

                            <TextInput value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} id="name" type='text' required />
                        </div>
                        <div>
                            <TextInput value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" placeholder="name@company.com" type="email" required />
                        </div>
                        <div>
                            <TextInput value={user.bio?user.bio:""} onChange={(e)=>setUser({...user,bio:e.target.value})} id='about' type='text' placeholder='Add Your About' required />
                        </div>
                        <div>
                            <TextInput value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} id='password' type='password' required />
                        </div>

                        <div className="w-full flex justify-center">
                            <Button onClick={handleUpdate} >Update</Button>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default EditProfile