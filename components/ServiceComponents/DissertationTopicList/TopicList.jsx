import Image from'next/image';

const TopicList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-4 mt-16 p-2">
      {topicList.map((topic, index) => (
        <div className="bubble-hover group border border-primary rounded-2xl p-4 flex flex-col sm:flex-row justify-center items-center sm:h-[100px] w-[170px] sm:w-[250px] "  key={index}>
            <Image src={topic.image} alt={topic.name} width={100} height={100} className=' size-12 sm:size-16 sm:pr-4 border-b sm:border-b-0 sm:border-r border-primary sm:py-3 group-hover:border-gray-200 delay-100 transition-all'/>
            <p className='text-primary group-hover:text-gray-200 font-bold text-lg sm:text-xl sm:pl-4 delay-100 transition-all text-center sm:text-left'>{topic.name}</p>
        </div>
      ))}
    </div>
  );
};

const topicList = [
  {
    name: " lorem ipsum ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
  {
    name: " lorem ipsum",
    image: "/assets/business.png",
  },
];

export default TopicList;
