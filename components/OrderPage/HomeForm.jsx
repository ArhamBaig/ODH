"use client";

import Image from "next/image";
import SelectField from "../ui/SelectField";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { verifyCaptcha } from "@/app/api/Recaptcha/ServerActions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const HomeForm = () => {
  const [formData, setFormData] = useState({
    paperType: "",
    subject: "",
    pages: "",
    deadline: "",
    citationFormat: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
  });

  const paperTypeOptions = [
    { value: "Report", label: "Report" },
    { value: "Coursework", label: "Coursework" },
    { value: "Essay", label: "Essay" },
    { value: "Case Study", label: "Case Study" },
    { value: "Assignment", label: "Assignment" },
    { value: "Dissertation", label: "Dissertation" },
    { value: "Research Paper", label: "Research Paper" },
    { value: "Other", label: "Other" },
  ];

  const citationFormatOptions = [
    { value: "MLA", label: "MLA" },
    { value: "APA", label: "APA" },
    { value: "Harvard", label: "Harvard" },
    { value: "OSCOLA", label: "OSCOLA" },
    { value: "Chicago", label: "Chicago" },
    { value: "IEEE", label: "IEEE" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Request ...", { autoClose: false });
    try {
      // Send formData to the "/api/contact" API endpoint
      const response = await fetch("/api/orderform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setFormData({
          paperType: "",
          subject: "",
          pages: "",
          deadline: "",
          citationFormat: "",
          fullName: "",
          email: "",
          phoneNumber: "",
          country: "",
        });
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
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }
  return (
    <>
      <h1 className="pt-40 pb-5 text-center mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-primary ">
        Order Details
      </h1>
      <div className="flex flex-col-reverse xl:flex-row px-2 xl:px-9 2xl:px-44 pb-12 gap-x-2">
        <div className="w-full h-full flex flex-col justify-center items-center max-w-3xl mx-auto">
          <Image
            src={"/assets/topic-banner-image.png"}
            width={600}
            height={500}
            className=""
            alt="report writing order steps"
          />
          <Image
            src={"/assets/payment-process.png"}
            width={600}
            height={500}
            className=""
            alt="report writing order steps"
          />
        </div>

        <form className="z-10 max-w-4xl mx-auto" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-x-4">
            <div className="flex flex-col">
              <label className="text-lg font-bold text-[#114d59]">
                Paper Type
              </label>
              <SelectField
                options={paperTypeOptions}
                onChange={(value) => handleInputChange("paperType", value)}
                placeholder={"Paper Type"}
                width={"300px"}
              />
            </div>
            <div className="flex flex-col z-10">
              <label className="text-lg font-bold text-[#114d59]">
                Subject{" "}
              </label>
              <input
                className="p-3 rounded-xl w-[300px]  focus:outline-primary  border border-gray-400"
                type="text"
                placeholder="Subject"
                onChange={(e) => handleInputChange("subject", e.target.value)}
              />
            </div>
          </div>
          <div className="gap-y-4 flex-col md:flex-row md:gap-x-2 justify-between items-center flex ">
            <div className="flex flex-col">
              <label className="text-lg font-bold text-[#114d59]">
                Word Count
              </label>
              <input
                className="p-3 rounded-xl  focus:outline-primary w-[200px] select-none  border border-gray-400"
                type="number"
                placeholder="Word Count"
                min={0}
                defaultValue={1000}
                onChange={(e) =>
                  handleInputChange("pages", Math.max(0, e.target.value))
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-bold text-[#114d59]">
                Deadline
              </label>

              <input
                className="p-3 rounded-xl  focus:outline-primary w-[200px]  border border-gray-400"
                type="date"
                placeholder="Enter Email Address"
                onChange={(e) => handleInputChange("deadline", e.target.value)}
              />
            </div>
            <div className="flex flex-col z-20">
              <label className="text-lg font-bold text-[#114d59]">
                Citation Format{" "}
              </label>

              <SelectField
                options={citationFormatOptions}
                onChange={(value) => handleInputChange("citationFormat", value)}
                placeholder={"Citation Format"}
                width={"200px"}
              />
            </div>
          </div>

          <div className="flex flex-col py-10  items-center md:items-start z-10 ">
            <h2 className="text-xl py-4 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#49767f] ">
              Contact Information
            </h2>

            <div className="flex flex-col md:flex-row gap-y-2 justify-between w-full mb-5 items-center z-10 gap-x-4">
              <input
                className="p-3  rounded-xl w-[300px] focus:outline-primary border border-gray-400"
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => handleInputChange("fullName", e.target.value)}
              />
              <input
                className="p-3 rounded-xl w-[300px] focus:outline-primary  border border-gray-400"
                type="text"
                placeholder="Enter Email Address"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-y-2  gap-x-4 w-full  z-10 justify-between">
              <input
                className="p-3 rounded-xl w-[300px] focus:outline-primary border border-gray-400"
                type="text"
                placeholder="Enter Phone Number"
                required
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
              <input
                className="p-3 rounded-xl w-[300px] outline-primary md:min-w-0  border border-gray-400"
                type="text"
                placeholder="Enter Country Name"
                onChange={(e) => handleInputChange("country", e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 py-10 justify-center items-center ">
            <ReCAPTCHA
              sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
              ref={recaptchaRef}
              onChange={handleCaptchaSubmission}
              className="z-10"
            />
            <p className="text-black text-xs z-10">
              Please verify the Captcha to Submit
            </p>
            <button
              type="submit"
              className={`rounded-lg p-2 z-10 transition-all
              ${
                isVerified
                  ? "bg-[#4fbacf] text-white hover:bg-secondary transition-all hover:text-black"
                  : "bg-gray-600 text-gray-400"
              }`}
              disabled={!isVerified}
            >
              Request Order
            </button>
          </div>
        </form>
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
      </div>
    </>
  );
};

export default HomeForm;
