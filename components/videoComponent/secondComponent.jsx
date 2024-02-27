
import { Check } from "lucide-react";
import Link from "next/link";
const SecondComponent = () => {
  return (
    <div className="relative bg-white bg-dot-black/[0.3] z-10 py-16">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10">
        

      </div>
      <h2 className="heading mx-auto mb-16">Are You Looking For Thesis Help Online</h2>

    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-10 -z-10">
      <div className="flex flex-col gap-y-5 px-10 w-fit max-w-[900px] mx-auto ">
        <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          voluptatem in aperiam nobis beatae at cupiditate est nesciunt,
          deleniti a sunt eligendi illum iste nihil inventore fugiat nemo quia
          aspernatur.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          repellendus velit perspiciatis consectetur minus aperiam, consequatur
          molestiae, sapiente dolor, non nobis dolore aliquid distinctio earum
          sit beatae possimus! Dolorum, dolore!
        </p>
        </div>
        <div className="grid grid-cols-1 sm:gap-x-5 sm:grid-cols-2">
          <ul>
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
          <ul>
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
        </div>
        <Link
          href={"/contact"}
          className="w-fit px-4 capitalize font-semibold bg-siteorange text-white p-3 rounded-xl text-center hover:bg-white hover:text-primary hover:border hover:border-siteorange transition-colors "
        >
          Get free consultation
        </Link>
      </div>
      <div className="mx-auto mt-10 border p-2 w-fit max-w-[900px]  border-primary rounded-lg z-40">
      <video controls  src={"/video/homevideo.mp4"} />
      </div>
    </div>
    </div>
  );
};

export const ListItem = () => {
  return (
    <li className="flex gap-x-5 my-2 items-center">
      <Check className="bg-siteorange text-white h-[15px] w-[15px]" />
      Strong Quality Process
    </li>
  );
};

export default SecondComponent;
