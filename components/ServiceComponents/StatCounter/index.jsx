"use client";
import CountUp from "react-countup";
const StatCounter = () => {
  return (
    <div className="px-3 py-12 text-white flex flex-col justify-center items-center bg-gradient-radial from-tertiary to-primary w-full">
      <p className="text-center text-gray-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsum.
        Reprehenderit tempore magni dolorum labore.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-5 md:gap-x-10 mt-8 ">
        <div className="flex flex-col justify-center items-center gap-y-2">
          <CountUp
            end={2400}
            duration={2.75}
            suffix="+"
            enableScrollSpy
            scrollSpyOnce
            className="font-semibold text-4xl sm:text-5xl"
          />
          <p>Deliverd Orders</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <CountUp
            end={1982}
            duration={2.75}
            suffix="+"
            enableScrollSpy
            scrollSpyOnce
            className="font-semibold text-4xl sm:text-5xl"
          />
          <p>Satisfied Client</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <CountUp
            end={90}
            duration={2.75}
            suffix="+"
            enableScrollSpy
            scrollSpyOnce
            className="font-semibold text-4xl sm:text-5xl"
          />
          <p>Qualified Experts</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <CountUp
            end={7123}
            duration={2.75}
            suffix="+"
            enableScrollSpy
            scrollSpyOnce
            className="font-semibold text-4xl sm:text-5xl"
          />
          <p>Deliverd Orders</p>
        </div>
      </div>
    </div>
  );
};

export default StatCounter;
