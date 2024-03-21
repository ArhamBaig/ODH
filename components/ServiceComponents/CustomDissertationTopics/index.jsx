import React from "react";
import ServiceForm from "./ServiceForm";
import FormSlider from "./FormSlider";

const CustomDissertationTopic = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center bg-gradient-radial from-gray-200 to-gray-100">
      <h2 className="text-5xl font-bold heading mb-12">
      A Collection of Stimulating Ideas - An Extensive List
of Dissertation Topics!      </h2>
      <p className="text-gray-800 max-w-6xl my-3 text-center">
      We understand that you&#39;re likely here in search of instant dissertation ideas, and you&#39;re in the right
place. Consider your needs taken care of! Our team recognises the importance of sparking inspiration
promptly, especially when time is of the essence in the academic world. Whether you&#39;re seeking a
starting point or a refined idea, we aim to provide the catalyst for your research objectives.
      </p>
      <p className="text-gray-800 max-w-6xl text-center">
      Now, here&#39;s the initial yet comprehensive list of the latest dissertation topics. Step forward and explore;
perhaps you&#39;ll find the perfect match for your research goals. If you crave further discussion or insights
about a particular topic on the list, don&#39;t hesitate to consult us through our user-friendly chatbot. Your
topic hunt begins now—find the one that resonates with you and sets the stage for your academic
success!
      </p>

      <div className="grid xl:grid-cols-2 gap-x-12 mt-10 gap-y-10 ">
        <ServiceForm />
        <FormSlider />
      </div>
    </div>
  );
};

export default CustomDissertationTopic;
