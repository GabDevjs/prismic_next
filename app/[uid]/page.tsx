import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { defaultComponent } from "../components/defaultComponent";

function queryPage(uid: string) {
  const client = createClient();
  return client.getByUID("page", uid);
}

export async function generateMetadata({
  params,
}: {
  params: { uid: string };
}) {
  const page = await queryPage(params.uid);

  return {
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description || "",
      images: prismic.asImageSrc(page.data.meta_image || ""),
    },
  };
}

export default async function Page({ params }: { params: { uid: string } }) {
  const page = await queryPage(params.uid).catch(() => notFound());

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      defaultComponent={defaultComponent}
    />
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => ({
    uid: page.uid,
  }));
}
