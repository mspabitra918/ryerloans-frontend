import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { californiaCities } from "@/src/data/california-cities";
import { SITE_CONFIG } from "@/src/lib/config";
import CityLoanPage from "@/src/components/marketing/city-loans/CityLoanPage";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(californiaCities).map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;

  const data = californiaCities[city];

  if (!data) {
    return {};
  }

  /*
   * `data.title` already carries the brand suffix, so it is used verbatim
   * rather than through constructMetadata, which would append a second one.
   * The canonical is still self-referencing and absolute.
   */
  const url = `${SITE_CONFIG.url}/personal-loans/california/${data.slug}`;

  return {
    title: data.title,
    description: data.description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: data.title,
      description: data.description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;

  const data = californiaCities[city];

  if (!data) {
    notFound();
  }

  return <CityLoanPage data={data} />;
}
