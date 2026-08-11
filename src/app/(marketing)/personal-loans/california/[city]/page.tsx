import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { californiaCities } from "@/src/data/california-cities";
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

  return {
    title: data.title,
    description: data.description,
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
