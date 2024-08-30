import * as prismic from '@prismicio/client'
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

function queryPage() {
  const client = createClient();
  return client
    .getByUID("page", "home")
}

export async function generateMetadata() {
  const page = await queryPage();
  
  return {
    title: page.data.meta_title,
    description: page.data.meta_description || "",
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description || "",
      images: prismic.asImageSrc(page.data.meta_image || ""),
    },
  };
}

export default async function Home() {
  const page = await queryPage()
    .catch(() => notFound());

  return <SliceZone slices={page?.data.slices} components={components} />;
}