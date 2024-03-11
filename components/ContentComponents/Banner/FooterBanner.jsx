import Link from "next/link";
import Image from "next/image";
const FooterBanner = () => {
  return (
    <div className="flex my-16 max-w-5xl mx-2 lg:mx-auto p-5 shadow-xl rounded-3xl border space-x-9">
      <div className="flex flex-col gap-y-2 justify-center items-center text-center">
        <p className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl text-center">
          Order Our Dissertation Service Now
        </p>
        <p className="text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, fugit
          consectetur adipisicing elit. Odit, fugit.
        </p>
        <Link
          href={"/order"}
          className="px-2 p-3 bg-secondary rounded-xl hover:bg-secondary/50 transition-all"
        >
          Order Now
        </Link>
      </div>
      <Image src={"/assets/footer-banner-img.png"} width={350} height={400} alt="online dissertation order" className="hidden sm:block"/>
    </div>
  );
};

export default FooterBanner;
