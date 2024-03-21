import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col xl:flex-row justify-center items-center py-10 ">
      <div className="flex flex-col  gap-y-5  px-2 xl:px-6 py-6 border-b xl:border-r xl:border-b-0">
        <Image
          alt="Online Dissertation Help logo"
          src={"/assets/footer-logo.png"}
          height={300}
          width={300}
          className="mx-auto"
        />
        <div className="flex text-white gap-x-3 text-sm">
          <MapPin className="size-6"/>
          <p>London 71-75 Shelton St, London WC2H 9JQ, United Kingdom</p>
        </div>
        <div className="flex text-white gap-x-3 ">
          <Mail className="" />
          <p>info@onlinedissertationhelp.com</p>
        </div>
        <div className="flex text-white gap-x-3 ">
          <Phone />
          <p>+44 7456 380326</p>
        </div>
      </div>
      <div className="flex justify-center gap-x-4 px-2 xl:px-6 w-full xl:w-auto py-6">
        <div className="flex flex-col">
          <p className="font-bold text-lg text-white mb-2">Useful Links</p>
          <div className="text-white font-light text-sm space-y-1 flex flex-col">
            <Link className="hover:underline underline-offset-2" href={"/"}>Home</Link>
            <Link className="hover:underline underline-offset-2" href={"/custom-dissertation-topics"}>Topics</Link>
            <Link className="hover:underline underline-offset-2" href={"#"}>Order</Link>
            <Link className="hover:underline underline-offset-2" href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg text-white mb-2">Dissertation Topics</p>
          <div className="text-white font-light text-sm space-y-1 flex flex-col">
            <Link className="hover:underline underline-offset-2" href={"/accounting-dissertion-topics"}>Accounting Dissertation</Link>
            <Link className="hover:underline underline-offset-2" href={"/business-dissertion-topics"}>Business Dissertation</Link>
            <Link className="hover:underline underline-offset-2" href={"/marketing-dissertion"}>Marketing Dissertation</Link>
            <Link className="hover:underline underline-offset-2" href={"/nursing-dissertion-topics"}>Nursing Dissertation</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
       
        <div className="text-white flex flex-col gap-y-3 mt-10">
          <p className="font-bold text-xl text-center">Payment Security</p>
          <div className="flex gap-x-2  items-center">
            <Image
              alt="Dissertation help payment"
              className="w-20"
              height={418}
              width={700}
              src={"/assets/mastercard-logo.png"}
            />
            <Image
              alt="Dissertation help payment"
              className="w-20"
              height={400}
              width={700}
              src={"/assets/paypal-logo.png"}
            />
            <Image
              alt="Dissertation help payment"
              className="w-20"
              height={400}
              width={700}
              src={"/assets/Visa-Logo.png"}
            />
            <Image
              alt="Dissertation help payment"
              className="w-20"
              height={400}
              width={700}
              src={"/assets/Wise-Logo.png"}
            />
          </div>
          <div className="flex gap-x-5 items-center justify-center">
            <Image
              alt="Online Dissertation Help Trust"
              className="w-auto"
              height={80}
              width={80}
              src={"/assets/trust-signal-1.png"}
            />
            <Image
              alt="Online Dissertation Help Trust"
              className="w-auto"
              height={80}
              width={80}
              src={"/assets/trust-signal-2.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
