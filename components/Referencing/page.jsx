import Image from "next/image";

const Referencing = () => {
  return (
    <>
      <h2 className="heading capitalize mx-auto mb-10 sm:mb-16 mt-20">
        What Referencing Styles Do We Use?
      </h2>
      <div className="flex justify-center gap-x-36 items-center w-full mx-auto px-4 sm:px-12 lg:px-0">
        <div className="home-content scrollable-container border border-dotted border-siteorange p-4 bg-gradient-to-b from-tertiary/20 from-20% to-white">
          <div className="px-2">
            <div className="text-sm">
              <h3>Referencing Style</h3>
              <p>
                At OnlineDissertationHelp, our dedication to precision and
                academic excellence extends to our adept handling of various
                referencing styles. Understanding the diversity of requirements
                across universities and disciplines, our team of dissertation
                writing help experts is well-versed in a spectrum of styles,
                including but not limited to APA, MLA, Harvard, Chicago, and
                OSCOLA.
              </p>
              <p>
                We acknowledge that each educational institution may have unique
                preferences, and we proficiently tailor our approach to meet
                those specific demands. Our dissertation help professionals are
                not only familiar with the technical specifications of these
                styles but also adept at spotting the individual requirements of
                each university. We scrutinise the prerequisites of your
                institution, ensuring that the referencing style employed aligns
                perfectly with its guidelines.
              </p>
              <p>
                This exacting attention to detail is crucial in adhering to the
                academic standards set forth by your educational institution, a
                commitment we take seriously in every piece of work we
                undertake. Moreover, we recognise the significance of
                subject-specific considerations. For instance, while providing
                you help with dissertation in subjects like law, where precision
                and accuracy are paramount, we adhere to the OSCOLA referencing
                style.
              </p>
              <p>
                Further, the region also matters, which means that if you have
                come for dissertation help London based, the referencing
                requirements may be different from those of New York.
                Understanding that the application of referencing styles can
                vary on the basis of subject matter, location and institute, our
                experts remain attuned to these specific factors. This approach
                adds an extra layer of authenticity and credibility to your
                academic work.
              </p>
              <h3>MLA</h3>
              <ul className="list-disc">
                <li>Linguistics</li>
                <li>Literary Theory</li>
                <li>Literary Journalism</li>
                <li>Folklore and Mythology</li>
                <li>Humanities</li>
              </ul>
              <h3>APA</h3>
              <ul className="list-disc">
                <li>Psychology</li>
                <li>Sociology</li>
                <li>Education</li>
                <li>Criminology</li>
                <li>Nursing</li>
              </ul>
              <h3>CHICAGO</h3>
              <ul className="list-disc">
                <li>History</li>
                <li>Literature</li>
                <li>Philosophy</li>
                <li>Cultural Studies</li>
                <li>Media Studies</li>
              </ul>
              <h3>OSCOLA</h3>
              <ul className="list-disc">
                <li>Law</li>
                <li>Legal Studies</li>
                <li>Criminal Justice</li>
                <li>Jurisprudence</li>
                <li>Legal Ethics</li>
              </ul>
              <h3>CHICAGO</h3>
              <ul className="list-disc">
                <li>History</li>
                <li>Literature</li>
                <li>Philosophy</li>
                <li>Cultural Studies</li>
                <li>Media Studies</li>
              </ul>
              <h3>IEEE</h3>
              <ul className="list-disc">
                <li>Engineering</li>
                <li>Computer Science</li>
                <li>Information Technology</li>
                <li>Telecommunications</li>
                <li>Robotics</li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/referencing_image.png"}
          width={470}
          height={700}
          alt="content image"
          className="hidden xl:block"
        />
      </div>
    </>
  );
};

export default Referencing;
