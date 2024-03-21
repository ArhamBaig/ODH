"use client";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"

import {  useRef, useState } from "react";
import { verifyCaptcha } from "@/app/api/Recaptcha/ServerActions";
const ContactUs = () => {
  const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false)

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Query is being sent ...", { autoClose: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          query: query,
        }),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setQuery("");
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="mx-auto text-center  justify-between flex flex-col xl:flex-row  container  sm:p-2 md:p-10">
        <div className=" p-6 rounded-md flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="text-left flex flex-col justify-between"
          >
            <div>
              <h1 className="my-5 mb-10">
                <span className="font-bold  text-2xl sm:text-3xl md:text-4xl  lg:text-5xl text-siteblue">
                  Contact us Directly
                </span>
              </h1>

              <div className="mb-4">
                <input
                  type="text"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sitegreen rounded-md p-2 w-full"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sitegreen rounded-md p-2 w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sitegreen rounded-md p-2 w-full"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-sitegreen rounded-md p-2 w-full"
                  placeholder="Query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
            <ReCAPTCHA
            sitekey= "6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
          <p className="text-black text-xs">Please verify the Captcha to Submit</p>
            <button
              type="submit"
              className={`text-white bg-primary px-4 py-2 rounded-md mt-3 transition-colors ${isVerified ? "bg-sitegreen hover:bg-yellow-500 hover:text-black" :  "bg-gray-600"}`}
              disabled={!isVerified}
            >
              Submit
            </button>
            </div>
          </form>
        </div>
        <div className="">
          <h2 className="text-3xl text-siteblue font-semibold mb-2 mt-2 xl:mt-0">
            Feel free to reach us anywhere!
          </h2>
         
          <a href="tel:+447456380326">
            <div className="flex mt-2 text-black items-center">
              <Image src={"/assets/bphone.svg"} height={20} width={20} alt="our contact number"/>
              <p className="pl-2 hover:text-siteblue text-black">+44 7456 380326</p>
            </div>
          </a>
          <a href="mailto:info@onlinedissertationhelp.com">
            <div className="flex mt-2 items-center">
              <Image src={"/assets/bemail.svg"} height={20} width={20} alt="our email"/>
              <p className="pl-2 hover:text-siteblue text-black">
                info@onlinedissertationhelp.com
              </p>
            </div>
          </a>
          <div className="mt-5 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0779716597312!2d-0.041884099999999994!3d51.511785499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876031edff1f8f3%3A0x6584eec1e91ea08b!2sBest%20Essay%20Help%20UK!5e0!3m2!1sen!2s!4v1694071134863!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default ContactUs