import {
    contentData,
  } from "@/constants";
 
  const EXTERNAL_DATA_URL = "https://onlinedissertationhelp.com";
  export default async function sitemap() {
   
    const content = contentData.map((content) => ({
      url: `${EXTERNAL_DATA_URL}/${content.slug}`,
      lastModified: new Date().toISOString(),
    }));
   
    const routes = ["", "/order", "/contact"].map((route) => ({
      url: `${EXTERNAL_DATA_URL}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    return [
      ...routes,  
      ...content,
    ];
  }
  