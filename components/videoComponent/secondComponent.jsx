import { Check } from "lucide-react";
import Link from "next/link";
const SecondComponent = () => {
  return (
    <div className="relative bg-white bg-dot-black/[0.3] z-10 py-16">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>
      <h2 className="heading mx-auto mb-16">
        What&#39;s Under the Hood of Our Dissertation Help Services?
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center md:px-10 -z-10">
        <div className="flex flex-col gap-y-5 px-3 sm:px-10 w-fit max-w-[900px] mx-auto text-sm sm:text-base">
          <div className="">
            <p>
              A dissertation represents a crucial milestone in a student&#39;s
              educational career. It signals their command of a subject and
              their readiness to contribute to scholarly discourse. We believe
              that every dissertation represents an opportunity for intellectual
              growth, personal development, and academic achievement.
              Understanding the weight of this academic endeavour, we&#39;ve
              curated a comprehensive suite of dissertation help UK services.
            </p>
            <br />
            <p>
              We pride ourselves on delivering prompt assistance at every stage
              of your dissertation phase, ensuring that you&#39;re never left to
              deal with the complexities alone. Our commitment goes beyond mere
              assistance; it&#39;s about providing you with access to a wealth
              of resources and expertise tailored to address your unique needs
              and ensures a smooth and rewarding dissertation experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:gap-x-5 sm:grid-cols-2">
            <ul>
              <ListItem
                text={<>24/7 Customer Support &amp; Cost-Free Consultation</>}
              />
              <ListItem
                text={<>Pocket-Friendly Prices &amp; Multiple Discounts</>}
              />
              <ListItem
                text={<>On-Time Submissions &amp; Post-Submission Support</>}
              />
            </ul>
            <ul>
              <ListItem
                text={<>Unlimited Free Revisions + Money-Return Policy</>}
              />
              <ListItem text={<>Authentic Research &amp; Free Referencing</>} />
              <ListItem
                text={
                  <>Strict Privacy Policy with SSL Certification &amp; NDA</>
                }
              />
            </ul>
          </div>
          <Link
            href={"/contact"}
            className="w-fit px-4 capitalize font-semibold bg-siteorange text-white p-3 rounded-xl text-center hover:bg-white hover:text-primary border border-siteorange transition-colors "
          >
            Get free consultation
          </Link>
        </div>
        <div className="mx-auto mt-10 border p-2 w-fit max-w-[900px]  border-primary rounded-lg z-40">
          <video controls src={"/video/homevideo.mp4"} />
        </div>
      </div>
    </div>
  );
};

export const ListItem = ({ text }) => {
  return (
    <li className="flex gap-x-5 my-2 items-center">
      <Check className="bg-siteorange text-white h-[15px] w-[15px]" />
      {text}
    </li>
  );
};

export default SecondComponent;
