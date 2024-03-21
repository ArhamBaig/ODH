"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FormSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div className="w-[320px] sm:w-[550px] mx-auto ">
      <Slider {...settings}>
        <SliderCard
          image={"/assets/topic-1.png"}
          title={<>Optimised for Your Educational Level</>}
          desc={
            <>
              We begin our free dissertation topics selection topic selection by
              understanding your educational level, ensuring the chosen topic
              aligns seamlessly with the academic rigour expected at your stage
              of education. This tailored approach guarantees that the research
              topic is not only challenging enough to foster academic growth but
              also well-suited to your current level of expertise.
              <br />
              Whether you&#39;re starting a practice dissertation at the
              undergraduate level or tackling the complexities of your final
              year PhD dissertation, we tailor the latest dissertation topics to
              fit. Our dissertation experience is crafted to match your academic
              level, ensuring a seamless and purposeful progression in your
              educational pursuits.
            </>
          }
        />
        <SliderCard
          image={"/assets/topic-2.png"}
          title={<>Subject-Specific Precision in Topics</>}
          desc={
            <>
              Our approach also involves careful consideration of your subject
              specifications. We align the chosen topics with the specific
              requirements to ensure that your dissertation explores relevant
              concepts thoroughly. This thoughtful selection contributes
              meaningfully to the discourse within your field, enriching your
              academic work. Our aim is to tailor the trending dissertation
              topics to go finely with your subject specifications, allowing for
              a focused and insightful exploration in line with the academic
              expectations of your field.
            </>
          }
        />
        <SliderCard
          image={"/assets/topic-3.png"}
          title={<>University-Approved Prerequisite Excellence</>}
          desc={
            <>
              We take into account the unique prerequisites set by your
              university, ensuring strict adherence to academic guidelines and
              expectations. This consideration guarantees that the proposed
              dissertation titles not only align with your academic goals but
              also meet the specific criteria and standards set forth by your
              educational institution.
              <br />
              Moreover, we take into account any areas deemed forbidden or
              considered taboo by your university. This sensitivity ensures that
              the customised list of dissertation topics topic respects the
              ethical considerations and cultural context of your academic
              environment, fostering a responsible and compliant research
              approach.
            </>
          }
        />
        <SliderCard
          image={"/assets/topic-4.png"}
          title={<>Passion-Infused Research Alignment</>}
          desc={
            <>
              Understanding the importance of personal engagement, we prioritise
              your interests when proposing free dissertation topics. By
              aligning the topic with your passion and academic pursuits, we
              create an environment that fosters genuine enthusiasm, making the
              research process more rewarding and personally meaningful for you.
              <br />
              In addition, this tailored approach not only ensures academic
              relevance but also promotes a sense of ownership over your
              research. Your genuine interest becomes a driving force, inspiring
              a deeper connection with the subject matter. This personalised
              engagement of selecting the dissertation titles not only enhances
              the overall quality of your dissertation but also turns the
              research phase into a fulfilling and intellectually gratifying
              experience.
            </>
          }
        />
        <SliderCard
          image={"/assets/topic-5.png"}
          title={<>Timely Capture with Deadline-Aware Topics</>}
          desc={
            <>
              Recognising the significance of timelines, we factor in your
              deadline constraints during the topic selection process. By
              assembling the dissertation ideas that allow for thorough
              exploration within the available timeframe, we ensure a balanced
              and realistic approach that promotes a successful and timely
              completion of your dissertation.
              <br />
              Additionally, our commitment to meeting deadlines encompasses a
              proactive strategy. We anticipate potential challenges and devise
              a timeline that accommodates not only the research phase but also
              ample time for revisions and unforeseen adjustments. This
              comprehensive approach reflects our dedication to delivering a
              meticulously crafted dissertation within the specified timeframe,
              reducing stress and ensuring a smooth academic boost-up for you.
            </>
          }
        />
      </Slider>
    </div>
  );
};

const SliderCard = ({ image, title, desc }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-gray-50 mx-3 h-[540px] my-4 flex flex-col justify-center items-center">
      <Image src={image} alt="asd" width={200} height={200} className="" />
      <p className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{title}</p>
      <p className="text-sm ">{desc}</p>
    </div>
  );
};

export default FormSlider;
