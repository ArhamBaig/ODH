import Image from "next/image";
import Link from 'next/link'
const PaymentSteps = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-8 mt-10 sm:mb-16 sm:mt-20 ">
        PAYMENT AND DELIVERY STEPS
      </h2>
      <div className="flex flex-col gap-y-6 justify-center items-center mb-6">
        <div className="flex justify-center items-center gap-x-20">
          <Image
            src={"/assets/payment-process.png"}
            width={600}
            height={900}
            alt="content image"
            className="hidden xl:block"
          />

          <div className="flex flex-col gap-y-4 max-w-3xl px-4 sm:px-10 home-content">
            <h3>
              What is Our Pricing Structure?
            </h3>
            <p>
              While structuring our prices at OnlineDissertationHelp, we
              recognise the financial constraints often faced by students
              pursuing academic support. We understand the delicate balance
              between seeking quality dissertation assistance and managing it on
              a limited budget. With this comprehension at the forefront, our
              pricing model is designed to provide accessible and transparent,
              ensuring that affordability doesn&#39;t compromise the quality of
              the assistance you receive.
            </p>

            <p>
              Moreover, at OnlineDissertationHelp, we go beyond affordability
              with our discounts and seasonal packages. Recognising that
              financial considerations are pivotal for students, we offer
              early-bird discounts, referral rewards, and special seasonal
              promotions during occasions like Christmas, New Year, and Summer
              sales. These additional savings opportunities are our way of
              acknowledging your desire for academic success and providing extra
              value to enhance your experience with our dissertation writing
              help services.
            </p>

            <p>
              We believe in offering more than just reasonable rates; hence, we
              provide added value through complimentary services. Whether you
              are here for dissertation help London based or even need it on
              Mars, our free consultation covers you up and ensures you can
              discuss your needs without any initial cost. Additionally, we
              include title pages, table of contents, bibliographies, and
              formatting at no extra charge.
            </p>
            <h3 className="font-semibold text-siteorange text-xl">
              Partial Payment Option
            </h3>
            <p>
              Understanding the financial dynamics of academic life, we offer a
              flexible partial payment option for our online dissertation help
              services. You can initiate your project with a half payment
              upfront, easing the immediate financial burden. The remaining half
              is settled after the completion of your work. It ensures that
              payment matches with the progress of your project. This
              flexibility in payment options is another facet of our commitment
              to supporting you on your academic run.
            </p>
          </div>
        </div>
        <div className="flex gap-x-10 mb-12">
          <Link href="/order" className="bg-primary text-white px-5 p-2 rounded-xl">
            Get Discount
          </Link >
          <div className="border border-siteorange text-siteorange px-5 p-2 font-bold  rounded-xl">
            <p>Live Chat</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSteps;
