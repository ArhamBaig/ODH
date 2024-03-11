import getContentMetadata from "@/constants/getContentMetadata";
import { contentData } from "@/constants";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/ServiceComponents/ServiceHero/ServiceHero";
import DissertationTopicList from "@/components/ServiceComponents/DissertationTopicList";
import CustomDissertationTopic from "@/components/ServiceComponents/CustomDissertationTopics";
import StatCounter from "@/components/ServiceComponents/StatCounter";
import TopicContent from "@/components/ServiceComponents/TopicContent";
import Banner from "@/components/ServiceComponents/Banner";

const getContent = async (slug) => {
  const contentJson = contentData.find((content) => content.slug === slug);
  if (!contentJson) {
    return notFound();
  } else {
    try {
      const { slug } = contentJson;
      const Mymodule = await import(`../../content/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      return notFound();
    }
  }
};

const ContentPage = async (props) => {
  const slug = props.params.content;
  const content = await getContent(slug);
  const contentJson = contentData.find((content) => content.slug === slug);

  if (!contentJson) {
    return notFound();
  }
  
  return (
   <>
   {content}
   </>
  );
};

export const generateStaticParams = async () => {
  const contents = getContentMetadata();
  return contents.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const posts = getContentMetadata();
  const slug = props.params.content;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: post.canonical,
      },
      openGraph: {
        title: post.openGraph.title,
        description: post.openGraph.description,
        images: post.openGraph.images,
        url: post.openGraph.url,
        locale: post.openGraph.locale,
        type: post.openGraph.type,
        siteName: post.openGraph.siteName,
        publishedTime: post.openGraph.publishedTime,
        authors: post.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default ContentPage;
