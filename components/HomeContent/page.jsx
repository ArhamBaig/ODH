import Image from "next/image";

const HomeContent = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-16 mt-20">
        How we proceed with your dissertation?
      </h2>
      <div className="flex justify-center gap-x-36 items-center w-full mx-auto px-4 sm:px-12 lg:px-0">
        <div className="home-content scrollable-container border border-dotted border-siteorange p-2 bg-gradient-to-b from-siteorange/20 from-20% to-white">
            <div className="text-sm leading-tight">
              <p>
                We close the process by inviting and appreciating your feedback
                on the dissertation assistance you received. Your input is
                pivotal in our relentless pursuit of excellence. From the
                initial consultation to the final delivery, we ensure your
                engagement and maintain open lines of communication, welcoming
                any suggestions or alterations you may have. Our commitment to
                transparency and responsiveness means that you&#39;re always
                kept informed and empowered to make decisions that align with
                your preferences. Ultimately, our goal is your utmost
                satisfaction.
              </p>

              <h3>100% Plagiarism-Free Work</h3>
              <p>
                We have zero tolerance for plagiarism. We know the fact that
                most colleges and universities have strict policies against
                plagiarism. In such institutes, even minor stances of plagiarism
                can lead to failure. That&#39;s why we take this matter
                seriously at Online Dissertation Help, integrating stringent
                measures for plagiarism checks. We ensure that your work is 100%
                original and attach a free report generated through Turnitin,
                for your complete peace of mind.
              </p>
              <h3>100% Perfect Structure &amp; Format</h3>
              <p>
                We adeptly catch the unique structural specifications of every
                academic task. Particularly, for dissertations that adhere to a
                unique chapter-wise structure, we ensure keen attention to
                detail. From the introduction to the conclusion, each chapter is
                carefully crafted to align with the specified formatting
                guidelines. Our expert team, well-versed in the subtleties of
                academic requirements, guarantees your work is cohesive and
                sound in terms of structural framework.
              </p>
              <h3>100% Error-Free Drafts</h3>
              <p>
                Our thorough quality checks encompass grammatical accuracy,
                spelling precision, proper punctuation, and overall contextual
                relevance. Our dissertation help UK eperts utilise premium tools
                for QA that help us ensure your work is pristine and meets the
                highest linguistic and academic standards. Further, we have a
                free revision policy in place for continuous refinement,
                ensuring your work aligns perfectly with your academic
                expectations.
              </p>
            </div>
        </div>
        <Image
          src={"/assets/homeimage.png"}
          width={410}
          height={600}
          alt="content image"
          className="hidden xl:block"
        />
      </div>
    </>
  );
};

export default HomeContent;
