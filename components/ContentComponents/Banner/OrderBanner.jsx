import Link from "next/link";
import Image from "next/image";
const OrderBanner = () => {
  return (
    <div className=" bg-primary p-4 flex flex-col justify-center items-center py-14 space-y-7">
      <p className="text-white font-bold text-2xl sm:text-3xl md:text-5xl uppercase text-center">
        Find Your <span className="text-siteorange">Dissertation</span> Cost
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Image
          src={"/assets/mastercard-logo.png"}
          alt="mastercard payment method"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/paypal-logo.png"}
          alt="mastercard payment method"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Visa-Logo.png"}
          alt="mastercard payment method"
          width={100}
          height={100}
        />
        <Image
          src={"/assets/Wise-Logo.png"}
          alt="mastercard payment method"
          width={100}
          height={100}
        />
      </div>
      <Link href={"/order"} className="px-2 p-3 bg-secondary rounded-xl">
        Order Now
      </Link>
    </div>
  );
};

export default OrderBanner;
