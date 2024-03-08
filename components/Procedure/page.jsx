import Image from 'next/image'
import React from 'react'

const Procedure = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-16">How we proceed with your dissertation?</h2>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5 justify-center items-center'>
            <Card stepno={"1"} />
            <Card stepno={"2"} />
            <Card stepno={"3"} />
            <Card stepno={"4"} />
            <Card stepno={"5"} />
            <Card stepno={"6"} />
      

      

      
      </div>
      </div>




    </>
  )
}

export const Card = ({stepno}) => {
    return (
        <div className='w-[250px] h-[90px] sm:h-[110px] sm:w-[350px] lg:w-[450px] ml-5 relative border flex  p-2 bg-gradient-to-r from-cyan-100/70 to-white rounded-lg'>
        <div className='sm:ml-20 p-2 lg:p-0 border-r border-primary'>
        <p className='font-bold text-primary text-lg text-center'>Lorem ipsum dolor sit </p>
        <p className='hidden lg:block text-center lg:text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia animi eum enim officiis assumenda, voluptatem error quae debitis nobis molestias</p>
        </div>
        <div className='ml-5 flex justify-center items-center'>
        <Image
      src={"/assets/data_science.png"}
      height={50}
      width={150}
      alt='decoration'
      className='w-[70px] lg:w-[150px]'
      />
      </div>
        <div className=' w-[120px] h-[120px] rounded-full  sm:flex justify-center items-center bg-gradient-to-r from-primary to-cyan-600 shadow-xl from-20% absolute -left-8  -top-1 hidden'>
        <div className="w-[110px] h-[110px] rounded-full shadow-xl bg-white flex justify-center items-center">
        <p className='text-4xl font-bold text-gray-700'>{stepno}</p>
        </div>
      </div>
      <div className='w-[40px] h-[70px] bg-gradient-to-b from-primary to-cyan-600 from-20% absolute top-[15px] -right-4 -z-10 rounded-r-xl' />
      <div className='w-[250px] h-[50px] sm:w-[350px] lg:w-[450px] bg-gray-200  absolute -bottom-1 -right-2 rotate-[0.5deg] -z-20 rounded-lg' />

      

      </div>
    )
}

export default Procedure