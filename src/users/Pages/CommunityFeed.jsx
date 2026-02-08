import React, { useEffect, useState } from 'react'
import UserHeader from '../Components/UserHeader'
import { Card, Avatar, Textarea, Button, Tooltip } from "flowbite-react";
import UserSidebar from '../Components/UserSidebar';
import { CiSquarePlus } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { createPostAPI, getAllPostsAPI, likeAndDisLikeAPI } from '../../services/allAPIs';


function CommunityFeed() {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [liked, setLiked] = useState(false)
  console.log(user);

  useEffect(() => {
    setToken(sessionStorage.getItem('token'))
    setUser(JSON.parse(sessionStorage.getItem('user')))
  }, [])

  const [preview, setPreview] = useState('')
  const [post, setPost] = useState({
    caption: "",
    image: ""
  })

  const handlePostUpload = (e) => {
    console.log(e.target.files);
    setPost({ ...post, image: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
  }

  const handlePost = async () => {
    console.log(token);

    const { caption, image } = post

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    const reqBody = new FormData

    for (let key in post) {
      reqBody.append(key, post[key])
    }
    const result = await createPostAPI(reqBody, reqHeader)
    console.log(result);
    if (result.status == 201) {
      alert(result.data.message)
      setPreview("")
      getPosts()
    } else {
      alert("can't be empty or try with a different file")
    }

  }

  const getPosts = async () => {

    try {

      const result = await getAllPostsAPI()
      console.log(result);
      setPosts(result.data)

    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getPosts()
  }, [token])

  const handleLikeAndDisLike = async (id) => {

    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const result = await likeAndDisLikeAPI(id, reqHeader)
      console.log(result);
      if (result.data.message == "Post liked") {
        setLiked(true)
      } else {
        setLiked(false)
      }
      getPosts()

    } catch (err) {
      console.log(err);

    }


  }

  return (
    <div>
      <UserHeader />
      <div className="w-75 fixed">
        <UserSidebar />
      </div>
      <div className="ml-75 p-8 flex flex-col flex-wrap mt-10">
        <h1 className='text-2xl font-semibold'>Fitness community feed</h1>
        <div className="flex">
          <div className='shadow rounded p-5 my-5 w-150'>
          <form className='flex'>
            <div className="shrink-0">
              <Avatar img={user.profile} alt="avatar of Jese" rounded />
            </div>
            <div>
              <Textarea
                onChange={(e) => setPost({ ...post, caption: e.target.value })}
                id="text"
                type="text"
                placeholder="whats on your mind"
                required
                className='w-100 ms-20'
              />
            </div>
          </form>
          <div className='flex gap-5 justify-end mt-3 '>
            <label htmlFor='imgfile'>
              <input onChange={(e) => handlePostUpload(e)} type="file" id='imgfile' hidden />
              <img src={
                preview ? preview : "https://cdn-icons-png.flaticon.com/512/8922/8922789.png"
              } width={'50px'} alt="" />

            </label>
            <div className='mt-1'>
              <Button onClick={handlePost}>Post</Button>
            </div>
          </div>
          
        </div>
        </div>

        <div className='w-150 shadow rounded p-5 text-wrap '>
          {
            posts ? posts.map(item => (

              <div className='text-wrap flex-wrap border-b-1 border-blue-200 p-5'>
                <div className="shrink-0 flex gap-3 ">
                  <Avatar img={item.user.profile} alt="avatar of Jese" rounded />
                  <h1 className='font-medium'>{item.user.username}</h1>
                  <p className='text-stone-400'>30 min ago</p>
                </div>
                <div className='mt-3'>
                  <p className='my-3'>{item.caption}</p>
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className='mt-3 flex gap-6'>
                  <div className='flex gap-1'>
                    <Tooltip content={liked ? "Dislike" : "Like"} trigger="hover">
                      <Button onClick={() => handleLikeAndDisLike(item._id)} color="alternative"><SlLike /></Button>
                    </Tooltip>

                    <p className='mt-2'>{item.likes.length} Likes</p>
                  </div>
                  <div className='flex gap-2'>
                    <Button color="alternative" ><FaRegComment /></Button>
                    <p className='mt-2'>5 Comments</p>
                  </div>
                </div>
              </div>

            )) : "No Posts Available"
          }

        </div>
        
      </div>

    </div>
  )
}

export default CommunityFeed