import React from 'react'
import { Button } from 'flowbite-react'
import { Card } from "flowbite-react";
import Header from '../Components/Header';

function Home() {
  return (
    <div className='bg-stone-100'>
      <Header />
      <section className='bg-[url(https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_640.jpg)] bg-cover bg-center h-120 rounded-lg mx-10 '>
        <div className="w-1/2 p-20">
          <h1 className='text-3xl font-semibold mt-10'>Welcome to the</h1>
          <h1 className='text-3xl font-semibold'>Fitness Community</h1>
          <p className='font-medium my-3'>connect with like minded people,share your progress,and get motivated</p>
          <Button className='bg-amber-500 hover:bg-amber-600'>Join now</Button>
        </div>

      </section>
      {/* <section className='h-screen'>
          <div className='flex'>
            <div className="w-1/2 p-20 ">
                <div className='p-15'>
                  <h1 className='text-3xl font-medium'>About Us</h1>
                <p className='font-normal text-lg py-3'>our mission is to promote health and wellness through fitness we beleve in the power of community and support in reaching fitness goals Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum dolorum ex? Nemo illo ipsam molestias, hic veniam natus ipsum incidunt dolor porro ducimus doloremque sit autem? Natus, eveniet ipsam!
                Facere, quae tempore accusantium velit earum laborum delectus quas maxime quidem vitae, eligendi labore, alias debitis .</p>
                <Button className='bg-amber-500 hover:bg-amber-600'>Learn more</Button>
                </div>

          </div>
          <div className="w-1/2">
            <div className='p-15'>
              <img src="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg"  className='rounded-lg' alt="" />
            </div>
          </div>
          </div>
      </section> */}
      <section className="min-h-screen">
        <div className="flex flex-col lg:flex-row items-center">

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 px-6 py-10 lg:p-20">
            <h1 className="text-2xl lg:text-3xl font-medium">
              About Us
            </h1>

            <p className="font-normal text-base lg:text-lg py-4">
              Our mission is to promote health and wellness through fitness.
              We believe in the power of community and support in reaching fitness goals.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <Button className="bg-amber-500 hover:bg-amber-600">
              Learn more
            </Button>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 px-6 py-10 lg:p-20 flex justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_640.jpg"
              className="w-full max-w-sm rounded-lg"
              alt="fitness"
            />
          </div>

        </div>
      </section>
      {/* <section className='h-screen'>
        <div className='p-20'>
          <h1 className='text-3xl font-medium' >Testimonials</h1>
          <div className='flex py-5 gap-20'>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jack
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jack
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Jack
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className='flex justify-center'>
            <Button className='bg-amber-500 hover:bg-amber-600'>Learn more</Button>
          </div>
        </div>

      </section> */}
      <section className="py-16">
  <div className="px-6 lg:px-20">

    <h1 className="text-2xl lg:text-3xl font-medium mb-8">
      Testimonials
    </h1>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      <Card
        className="max-w-sm mx-auto"
        imgAlt="testimonial"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s"
      >
        <h5 className="text-xl font-bold">Jack</h5>
        <p className="text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
      </Card>

      <Card className="max-w-sm mx-auto" imgAlt="testimonial" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s">
        <h5 className="text-xl font-bold">Jack</h5>
        <p className="text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
      </Card>

      <Card className="max-w-sm mx-auto" imgAlt="testimonial" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40KnpVf2dDYVbrPiP6vZXWlmxb2VrVWKy9A&s">
        <h5 className="text-xl font-bold">Jack</h5>
        <p className="text-gray-600">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
      </Card>
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-10">
      <Button className="bg-amber-500 hover:bg-amber-600">
        Learn more
      </Button>
    </div>

  </div>
</section>

    </div>
  )
}

export default Home