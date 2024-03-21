import Banner from "@/components/ServiceComponents/Banner";
import CustomDissertationTopic from "@/components/ServiceComponents/CustomDissertationTopics";
import DissertationTopicList from "@/components/ServiceComponents/DissertationTopicList";
import ServiceHero from "@/components/ServiceComponents/ServiceHero/ServiceHero";
import StatCounter from "@/components/ServiceComponents/StatCounter";
import TopicContent from "@/components/ServiceComponents/TopicContent";
import React from "react";

const DissertationTopic = () => {
  return (
    <div className="">
      <ServiceHero />
      <DissertationTopicList />
      <CustomDissertationTopic />
      <StatCounter />
      <TopicContent  />
      {/* <Banner /> */}
    </div>
  );
};

export default DissertationTopic;
