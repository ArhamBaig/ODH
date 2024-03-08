import React from "react";
import ServiceForm from "./ServiceForm";
import FormSlider from "./FormSlider";

const CustomDissertationTopic = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center bg-gradient-radial from-gray-200 to-gray-100">
      <h2 className="text-5xl font-bold heading mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </h2>
      <p className="text-gray-800 max-w-6xl my-3 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, atque
        sunt? Blanditiis quis distinctio similique numquam quasi in tenetur
        quaerat obcaecati eum tempora temporibus architecto officia libero
        dolore ratione voluptate deleniti, consectetur earum maiores ab
        praesentium nulla ipsa totam accusamus! Sint vero, laborum distinctio a
        velit quas amet neque dolorum repellendus cum, impedit recusandae nihil
        porro ipsum at voluptate incidunt, facilis totam et error ab? Quidem
        modi vitae dolore dolorem accusantium deserunt tenetur debitis odit in.
        Odio dolores praesentium excepturi nostrum, animi facilis officiis
        necessitatibus doloribus id quam nulla quas quibusdam voluptatibus
        tempore vitae eum soluta magni corporis sit voluptas.
      </p>
      <p className="text-gray-800 max-w-6xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique
        molestias, consequuntur ratione rerum aut at quod laudantium atque
        numquam quia sequi possimus quasi cupiditate, voluptates consectetur.
        Quibusdam quod quaerat eligendi et veritatis quos, vero porro, itaque
        unde excepturi cumque.
      </p>

      <div className="grid xl:grid-cols-2 gap-x-12 mt-10 gap-y-10 ">
        <ServiceForm />
        <FormSlider />
      </div>
    </div>
  );
};

export default CustomDissertationTopic;
