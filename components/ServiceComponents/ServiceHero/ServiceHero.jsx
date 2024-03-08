import Image from 'next/image'
const ServiceHero = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-44 pb-16 lg:pb-24 bg-gradient-radial from-tertiary to-primary px-3 sm:px-10 md:px-16 2xl:px-36 justify-between items-center gap-x-4">
      <div className="max-w-3xl  text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quisquam.
        </h1>
        <p className="text-gray-200 text-md md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          officia, blanditiis et excepturi possimus ipsa nesciunt eveniet
          architecto, veniam repellat aliquam qui eaque cum. Delectus eos saepe,
          voluptatum velit, nesciunt eum ad deserunt quos porro fugiat officiis
          temporibus expedita voluptas voluptatem, doloremque necessitatibus
          iusto alias fugit! Impedit commodi provident similique?
        </p>
        <button className="bg-secondary h-[54px] w-40 rounded-lg uppercase  mr-4 hover:opacity-90 transition-all mt-4">
          Order Now
        </button>
      </div>
      <Image src="/assets/topic-hero-image.png" alt='online dissertation topics' width={1000} height={1000} className='w-[620px]' />
    </div>
  );
};

export default ServiceHero;
