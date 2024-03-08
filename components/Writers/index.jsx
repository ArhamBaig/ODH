"use client"
import Image from 'next/image'
import { AnimatedTooltip } from "../ui/animated-tooltip";
const Writers = () => {


      const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            "/assets/writer_1.png",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "/assets/writer_2.png",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "/assets/writer_3.png",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "/assets/writer_4.png",
        },
        {
          id: 5,
          name: "Tyler Durden",
          designation: "Soap Developer",
          image:
            "/assets/writer_5.png",
        },
      
      ];
  return (
    <div className='flex flex-col justify-center items-center'>
        <h2 className="font-bold text-5xl text-center heading">Our Top Phd Experts Available For Custom Writing</h2>
        <div className=" flex">
            <AnimatedTooltip items={people} />
        </div>
    </div>
  )
}



export default Writers