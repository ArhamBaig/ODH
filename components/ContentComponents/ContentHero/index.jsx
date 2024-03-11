import HeroForm from '@/components/Hero/HeroForm'
import React from 'react'

const ContentHero = ({heading, desc}) => {
  return (
    <div className="flex flex-col lg:flex-row pt-44 pb-16 lg:pb-24 bg-gradient-radial from-tertiary to-primary px-3 sm:px-10 md:px-16 2xl:px-36 justify-center items-center gap-x-4">
    <div className="max-w-3xl  text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-7">
        {heading}
      </h1>
      <p className="text-gray-200 text-md md:text-lg lg:text-xl">
        {desc}
      </p>
      <div className="mt-8 gap-x-3 flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <div className="flex items-center justify-center">
          <button className="bg-secondary h-[54px] w-40 rounded-lg uppercase  mr-4 hover:opacity-90 transition-all">
            Order Now
          </button>
        </div>
      </div>
    </div>
    <HeroForm />
  </div>
  )
}

export default ContentHero