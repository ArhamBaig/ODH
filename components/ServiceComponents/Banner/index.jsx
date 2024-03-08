import Image from "next/image";
import { Play } from "lucide-react";
const Banner = () => {
  return (
    <div className="px-4 flex shadow-2xl w-full pt-12  min-w-[320px] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:rounded-3xl sm:mx-2 lg:mx-auto mb-4">
      <div className="mb-6">
        <p className="font-bold text-2xl sm:text-3xl text-primary">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        <p className="text-sm sm:text-base my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in
          quibusdam fugit iste doloremque quae temporibus sed laborum distinctio
          autem sequi esse, itaque officiis culpa consequuntur eveniet,
          voluptatum quos blanditiis ducimus? Cumque repellendus excepturi odit
          officiis commodi sit exercitationem, odio sed, nulla repellat incidunt
          numquam eveniet dolore esse aut fuga reiciendis nihil veritatis
          temporibus recusandae veniam ea eaque eos quasi!
        </p>
        <ul className="my-3 grid grid-cols-2 gap-y-1 text-sm sm:text-base ">
          <li className="flex gap-x-2">
            <Play
              className="bg-primary text-white text-center size-5 p-[4px] rounded-[4px] my-auto"
              fill="#ffffff"
            />{" "}
            Lorem, ipsum.
          </li>
          <li className="flex gap-x-2">
            <Play
              className="bg-primary text-white text-center size-5 p-[4px] rounded-[4px] my-auto"
              fill="#ffffff"
            />{" "}
            Lorem, ipsum.
          </li>
          <li className="flex gap-x-2">
            <Play
              className="bg-primary text-white text-center size-5 p-[4px] rounded-[4px] my-auto"
              fill="#ffffff"
            />{" "}
            Lorem, ipsum.
          </li>
          <li className="flex gap-x-2">
            <Play
              className="bg-primary text-white text-center size-5 p-[4px] rounded-[4px] my-auto"
              fill="#ffffff"
            />{" "}
            Lorem, ipsum.
          </li>
          <li className="flex gap-x-2">
            <Play
              className="bg-primary text-white text-center size-5 p-[4px] rounded-[4px] my-auto"
              fill="#ffffff"
            />{" "}
            Lorem, ipsum.
          </li>
        </ul>
        <p className="text-sm sm:text-base ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur temporibus neque aliquam voluptatum saepe soluta est quod voluptatem. Veritatis odio vel placeat, rerum recusandae ipsam eveniet cupiditate autem? Id asperiores aut iusto blanditiis obcaecati libero atque molestiae inventore eaque?</p>
      </div>
      <Image
        src={"/assets/topic-banner-image.png"}
        alt="dissertation topics"
        width={400}
        height={400}
        className="-mt-32 scale-x-[-1] object-contain 2xl:block hidden"
      />
    </div>
  );
};

export default Banner;
