import SocksConfigurator from "@/app/SocksConfigurator";
import { Metadata } from "next";

export type Props = {
  params: {
    color: string;
    material: string;
    size: string;
  };
};

// For SEO: set dynamic title and description
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { color, material, size } = await params;

  return {
    title: `${color} ${material} socks in ${size} size | SEOSOKO`,
    description: `Buy premium ${color} socks made of ${material} in ${size}. Customize your perfect socks today at SEOSOKO.`,
  };
}

export default async function SockPage({ params }: Props) {
  const { color, material, size } = await params;

  return (
    <div>
      <SocksConfigurator color={color} material={material} size={size} />
    </div>
  );
}
