import { Helmet } from "react-helmet-async";
import { usePageSeo } from "@/hooks/usePageSeo";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  jsonLd?: object;
}

const DOMAIN = "https://www.capstoneittrends.com";
const DEFAULT_IMAGE = `${DOMAIN}/about-og-image.png`;

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  keywords,
  jsonLd,
}: SEOProps) {
  const override = usePageSeo(canonical);

  const finalTitle = override?.title || title;
  const finalDescription = override?.description || description;
  const finalKeywords = override?.keywords || keywords;
  const finalImage = override?.og_image || ogImage || DEFAULT_IMAGE;

  const fullTitle = finalTitle.includes("Capstone") ? finalTitle : `${finalTitle} | Capstone IT Trends`;
  const url = override?.canonical || (canonical ? `${DOMAIN}${canonical}` : DOMAIN);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={url} />
      {override?.noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Capstone IT Trends" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
