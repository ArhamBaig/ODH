import Image from "next/image";

const PaymentSteps = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-16 mt-20 ">
        How we proceed with your dissertation?
      </h2>
      <div className="flex flex-col gap-y-6 justify-center items-center">
      <div className="flex justify-center items-center gap-x-20">
      <Image
        src={"/assets/payment_process.png"} 
        width={200}
        height={400}
        alt="content image"
        className="hidden xl:block"
        />
   
        <div className="flex flex-col gap-y-4 max-w-3xl px-10">
          <h3 className="font-semibold text-siteorange text-xl">What is Our Pricing Structure?</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            voluptatem corporis amet ipsam quo fugit dignissimos enim!
            Consequuntur minima excepturi hic magni, facilis provident nostrum
            nobis voluptatum nulla, corrupti adipisci! Eligendi, ullam
            voluptatibus iusto velit at vero aliquam quam, odit dolores expedita
            reprehenderit atque obcaecati doloremque, assumenda ipsa dolorem
            quae eum fugit. Quos et a impedit! Eaque ipsum molestias deserunt?
          </p>
          
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            voluptatem corporis amet ipsam quo fugit dignissimos enim!
            Consequuntur minima excepturi hic magni, facilis provident nostrum
            nobis voluptatum nulla, corrupti adipisci! Eligendi, ullam
            voluptatibus iusto velit at vero aliquam quam, odit dolores expedita
            reprehenderit atque obcaecati doloremque, assumenda ipsa dolorem
            quae eum fugit. Quos et a impedit! Eaque ipsum molestias deserunt?
          </p>
          
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            voluptatem corporis amet ipsam quo fugit dignissimos enim!
            Consequuntur minima excepturi hic magni, facilis provident nostrum
            nobis voluptatum nulla, corrupti adipisci! Eligendi, ullam
            voluptatibus iusto velit at vero aliquam quam, odit dolores expedita
            reprehenderit atque obcaecati doloremque, assumenda ipsa dolorem
            quae eum fugit. Quos et a impedit! Eaque ipsum molestias deserunt?
          </p>
          
        </div>
      </div>
      <div className="flex gap-x-10">
      <div className="bg-primary text-white p-5  rounded-xl"><p>Get Discount</p></div>
      <div className="border-2 border-siteorange text-siteorange  p-5 font-bold  rounded-xl"><p>Live Chat</p></div>
      </div>
      </div>
       
    </>
  );
};

export default PaymentSteps;
