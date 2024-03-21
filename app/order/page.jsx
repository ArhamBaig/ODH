import HomeForm from "@/components/OrderPage/HomeForm";

const Orderpage = () => {
  return (
    <>
      <HomeForm />
    </>
  );
};

export const metadata = {
  title: "Get a quote now for Best Report Writing Service in UK",
  description:
    "Are you looking for Report Writing Help? Get World's Best Report Writing Help & Writing Service in the UK @30% OFF. Get a quote now!",
  alternates: {
    canonical: "https://reportwritinghelp.com/order",
    last_updated: "11/23/2023",
  },
  openGraph: {
    title: "Get a quote now for Best Report Writing Service in UK",
    description:
      "Are you looking for Report Writing Help? Get World's Best Report Writing Help & Writing Service in the UK @30% OFF. Get a quote now!",
    images: [
      {
        url: "",
        width: 1300,
        height: 628,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://reportwritinghelp.com/order",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Report Writing Help",
    description:
      "Are you looking for Report Writing Help? Get World's Best Report Writing Help & Writing Service in the UK @30% OFF. 100% Plagiarism free!",
    creator: "@ReportWritingH1",
    site: "@ReportWritingH1",
    images: [""],
  },
};
export default Orderpage;
