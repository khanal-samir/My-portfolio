import { StaticImageData } from "next/image";
import { links } from "@/app/lib/data";

export type ProjectType = {
  name: string;
  description: string;
  features: string[];
  tech: {
    src: StaticImageData;
    alt: string;
  }[];
  link: string | null;
  code: string;
};

export type TimelineElement = {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  website: string;
};

export type CertificateType = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  skills: string[];
};

export type Section = (typeof links)[number]["label"];
