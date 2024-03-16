import Image from "next/image";
import React from "react";

const Procedure = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-16">
        How we proceed with your dissertation?
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5 justify-center items-center">
          <Card
            stepno={"1"}
            heading={<>Info Collection</>}
            desc={
              <>
                The process begins with the collection of vital information from
                you, encompassing personal details, educational level, topic
                preferences, and specific requirements outlined by your
                university for the dissertation. This thorough understanding
                forms the foundation for the dissertation assistance we provide.
              </>
            }
          />
          <Card
            stepno={"2"}
            heading={<>Outlining & Brainstorming</>}
            desc={
              <>
                Upon the initial information gathering, our dissertation writing
                help experts then draw an outline and conduct brainstorming
                sessions. By refining the direction and scope of your
                dissertation, we ensure clarity and coherence throughout the
                writing process.
              </>
            }
          />
          <Card
            stepno={"3"}
            heading={<>Research Phase</>}
            desc={
              <>
                Recognising that students may unintentionally fall into the trap
                of random and unauthenticated sources, our commitment lies in
                steering clear of such pitfalls. We emphasise authentic
                research, ensuring that the information underpinning your
                dissertation is not only extensive but reliable.
              </>
            }
          />
          <Card
            stepno={"4"}
            heading={<>Writing Process</>}
            desc={
              <>
                Following the comprehensive research phase, we proceed toward
                the writing process. This involves the structured development of
                each essential chapter, keenly crafted to align with the
                academic standards and objectives of your dissertation.
              </>
            }
          />
          <Card
            stepno={"5"}
            heading={<>Ultra-Careful QA</>}
            desc={
              <>
                Moving towards the finalisation phase, we dedicate attention to
                editing and proofreading, ensuring that every minor detail
                aligns with academic standards and your expectations. We refine
                language, grammar and readability, leaving no detail unchecked,
                to deliver a flawless final product.
              </>
            }
          />
          <Card
            stepno={"6"}
            heading={<>Scheduled Dispatch</>}
            desc={
              <>
                With the completion of your order, we prioritize on-time
                delivery of your polished and refined dissertation. Recognizing
                the critical importance of meeting deadlines, we adhere strictly
                to the agreed- upon due date you mention at the time of order
                placement.
              </>
            }
          />


        </div>
      </div>
    </>
  );
};

export const Card = ({ stepno, heading, desc }) => {
  return (
    <div className="w-[300px] h-[150px] sm:h-[155px] sm:w-[350px] lg:w-[450px] lg:ml-5 relative border flex  p-2 bg-gradient-to-r from-cyan-50 to-white rounded-lg">
      <div className="sm:ml-20 lg:ml-[90px] p-2 lg:p-0">
        <p className="font-bold text-primary text-lg whitespace-nowrap">{heading}</p>
        <p className="text-left text-sm tracking-tight leading-tight  overflow-y-auto h-[100px] scrollbar-component">{desc}</p>
      </div>
  
      <div className=" w-[120px] h-[120px] rounded-full  sm:flex justify-center items-center bg-gradient-to-r from-primary to-cyan-600 shadow-xl from-20% absolute -left-8  top-4 hidden">
        <div className="w-[110px] h-[110px] rounded-full shadow-xl bg-white flex justify-center items-center">
          <p className="text-4xl font-bold text-gray-700">{stepno}</p>
        </div>
      </div>
      <div className="w-[40px] h-[110px] bg-gradient-to-b from-primary to-cyan-600 from-20% absolute top-[15px] -right-4 -z-10 rounded-r-xl" />
      <div className="w-[250px] h-[50px] sm:w-[350px] lg:w-[450px] bg-gray-200  absolute -bottom-1 -right-2 rotate-[0.5deg] -z-20 rounded-lg" />
    </div>
  );
};

export default Procedure;
