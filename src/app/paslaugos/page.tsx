import type { Metadata } from "next";
import PaslaugosClient from "./paslaugos-client";

export const metadata: Metadata = {
  title: "Paslaugos",
  description: "Variklių ir mechanizmų remontas, pramoninių vamzdynų sistemos, medžiagų ir įrenginių tiekimas 24/7, suvirinimo darbai. RINA sertifikuotos paslaugos laivynui ir pramonei.",
  alternates: {
    canonical: "/paslaugos",
  },
  openGraph: {
    title: "Paslaugos | MarineTECH",
    description: "Kompleksinis laivų ir pramonės įrenginių remontas, vamzdynų sistemos, suvirinimo darbai, RINA sertifikuotos paslaugos.",
  },
};

export default function Page() {
  return <PaslaugosClient />;
}
