"use client"
import React from 'react'
import CardStack from './CardStack'
import { Button } from '../ui/moving-border'
import DissertationButton from './Button'

const DissertationStructure = () => {
  return (
    <div className='relative grid lg:grid-cols-2 justify-center bg-primary text-white pb-20 lg:py-24 px-4 xl:px-24'>
      <div  className='lg:sticky lg:top-16 mt-16 md:mt-24 h-fit flex flex-col justify-center items-center lg:justify-left lg:items-start'>
        <h2 className='heading mb-8 sm:mb-12 md:mb-16'>lorem ipsum dolor sit</h2>
        <p className='text-sm sm:text-base md:text-lg mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet soluta nobis eum aliquam facere eos illo ut nulla, voluptatem accusamus? Asperiores officiis aliquid illo quas voluptatum possimus quos veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis deleniti cum ipsa dicta error, alias ad aliquid officia minima cumque facilis vero at, minus modi totam ipsum praesentium similique! Nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A qui in architecto aut nisi est, aliquam vero aliquid dolorum quibusdam reprehenderit quia odio molestiae, voluptatibus laudantium eos. Non, numquam dignissimos?</p>
        <p className='text-sm sm:text-base md:text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet soluta nobis eum aliquam facere eos illo ut nulla, voluptatem accusamus? Asperiores officiis aliquid illo quas voluptatum possimus quos veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis deleniti cum ipsa dicta error, alias ad aliquid officia minima cumque facilis vero at</p>
        <div className='flex gap-x-4 mt-7'>
        <button className="bg-secondary h-[54px] w-40 rounded-lg uppercase hover:opacity-90 transition-all">Get A Discount</button>
        <DissertationButton />
        </div>
        </div>
        <CardStack />
    </div>
  )
}

export default DissertationStructure