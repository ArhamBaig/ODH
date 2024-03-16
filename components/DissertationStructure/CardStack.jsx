import React from "react";

const CardStack = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="cards">
        <Card
          id={"card1"}
          heading={"Introduction"}
          desc={
            <>
            The introduction sets the stage for your dissertation, effectively presenting the research
question, outlining objectives, and elucidating the study&#39;s purpose. Crafted with precision, this
chapter establishes a solid foundation for the reader, outlining the context and purpose of your
research.
            </>
          }
        />
        <Card
          id={"card2"}
          heading={"Literature Review"}
          desc={
            <>
             In the literature review, our dissertation help UK experts explore the existing scholarly works
relevant to your topic, critically evaluating and synthesising the available literature. This chapter
demonstrates your understanding of the academic landscape, identifying gaps and establishing
the theoretical framework that informs your research.
            </>
          }
        />
        <Card
          id={"card3"}
          heading={"Methodology"}
          desc={
            <>
            The methodology chapter frames the research model, data mining strategies, and analytical
outlook employed in your paper. Our dissertation writing help professionals ensure
transparency and coherence in presenting the methodology, allowing readers to comprehend
the validity of your research process.
            </>
          }
        />
        <Card
          id={"card4"}
          heading={"Findings/Results"}
          desc={
            <>
              The findings/results chapter presents a coherent and clear overview of the data collected,
revealing the outcomes of your research. Our dissertation help UK experts employ effective data
visualisation techniques to enhance understanding, ensuring that your results are
communicated with precision and clarity.
            </>
          }
        />
        <Card
          id={"card5"}
          heading={"Discussion"}
          desc={
            <>
          The conclusion chapter consolidates the main findings and restates the scope of your study.
Additionally, it offers a precise recapitulation of your dissertation&#39;s contributions to the

academic discourse. Our expert writers carefully craft this section to ensure it effectively ties up
all loose ends and leaves a lasting impression on your readers.
            </>
          }
        />
        <Card
          id={"card6"}
          heading={"Additional Chapters"}
          desc={
            <>
          Beyond the core chapters, we, as genuine dissertation assistance providers, also address
essential subsidiary elements. The abstract briefly summarises your entire dissertation, the
bibliography lists all references used, and appendices house any supplementary materials,
ensuring a comprehensive and well-rounded scholarly document.
            </>
          }
        />
        <Card
          id={"card7"}
          heading={"Discussion"}
          desc={
            <>
           The discussion chapter interprets the findings in the context of your research question, linking
them back to the literature and theoretical framework. We foster a critical analysis of the
results, acknowledging limitations and offering insights for future research directions.
            </>
          }
        />
      </ul>
    </div>
  );
};

const Card = ({ id, heading, desc }) => {
  return (
    <li className="card " id={id}>
      <div className="card-body">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">{heading}</h3>
        <p className="mt-4 opacity-75 text-xm md:text-base">{desc}</p>
      </div>
    </li>
  );
};
export default CardStack;
