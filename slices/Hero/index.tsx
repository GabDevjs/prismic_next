import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Card } from "../../src/components/molecules/Card";
import { FormHero3 } from "../../src/components/molecules/FormHero3";
import { FormHero } from "../../src/components/molecules/FormHero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import dynamic from "next/dynamic";
import { IconePlusDegrade } from "../../src/components/atoms/IconePlusDegrade";
import { Voipnhocabeca } from "../../src/components/atoms/VoipnhoCabeca";
import { FormHeroLp } from "../../src/components/molecules/FormHeroLp";
import { Icon } from "../../src/components/atoms/Icon";

const CookpeteReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: true,
});


export type Hero2Props = SliceComponentProps<Content.Hero2Slice>;

const Hero = ({ slice }: Hero2Props): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <section className="relative isolate overflow-hidden ">
          {slice.primary?.esconder_a_grid == true ? null : (
            <>
              <svg
                className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="50%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
              </svg>
              <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                />
              </svg>
            </>
          )}
          <div
            className={`mx-auto max-w-7xl gap-y-8 px-4 py-10 sm:px-6 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-x-10 lg:gap-y-12 lg:py-28 ${leftOurRightClass}`}
          >
            <div className="z-10 mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="flex items-center justify-start py-1">
                {slice.primary.logo?.url ? (
                  <Image
                    src={slice.primary.logo.url}
                    alt={`${slice.primary.logo.alt} Logo`}
                    priority
                    placeholder="blur"
                    quality={90}
                    width={150}
                    height={40}
                  />
                ) : null}
              </div>

              {slice.primary.title ? (
                <div className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  <PrismicRichText field={slice.primary.title} />
                </div>
              ) : null}

              {slice.primary.text ? (
                <div className="dark:text mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <PrismicRichText field={slice.primary.text} />
                </div>
              ) : null}

              <div className="mt-4 flex items-center gap-x-6">
                {slice.primary.primary_button_url &&
                slice.primary.primary_button_text ? (
                  <Link
                    href={slice.primary.primary_button_url}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    prefetch={false}
                    alt={slice.primary.primary_button_text}
                    aria-label={slice.primary.primary_button_text}
                  >
                    <Icon iconName={slice.primary.primary_button_icon} />
                    {slice.primary.primary_button_text}
                  </Link>
                ) : null}

                {slice.primary.secondary_button_url &&
                slice.primary.secondary_button_text ? (
                  <Link
                    className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                    href={slice.primary.secondary_button_url}
                    prefetch={false}
                    alt={slice.primary.secondary_button_text}
                    aria-label={slice.primary.secondary_button_text}
                  >
                    {slice.primary.secondary_button_text}
                    <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="z-10 mt-10 flex items-center justify-center px-4 lg:mt-0 lg:flex-1 lg:flex-shrink-0 lg:flex-grow">
              {slice.primary.image?.url ? (
                slice.primary.imageinblock == true ||
                slice.primary.imageinblock == null ? (
                  <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src={slice.primary.image.url}
                      alt={`${slice.primary.image.alt}`}
                      priority
                      placeholder="blur"
                      quality={90}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <Image
                      src={slice.primary.image.url}
                      alt={`${slice.primary.image.alt}`}
                      priority
                      width={slice.primary.image.dimensions.width}
                      height={slice.primary.image.dimensions.height}
                    />
                  </div>
                )
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "lp" && (
        <section className="relative overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div
            className={`mx-auto max-w-7xl gap-y-8 px-4 py-10 sm:px-6 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-x-10 lg:gap-y-12 lg:py-28 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="flex items-center justify-start py-1">
                {slice.primary.logo?.url ? (
                  <Image
                    src={slice.primary.logo.url}
                    alt={`${slice.primary.logo.alt} Logo`}
                    priority
                    width={150}
                    height={40}
                  />
                ) : null}
              </div>

              {slice.primary.title ? (
                <div className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  <PrismicRichText field={slice.primary.title} />
                </div>
              ) : null}

              {slice.primary.text ? (
                <div className="dark:text mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <PrismicRichText field={slice.primary.text} />
                </div>
              ) : null}
              <div className="mt-8 flex items-center gap-x-6 ">
                <FormHeroLp
                  buttonName={slice.primary?.button_name}
                  indicador={slice.primary?.indicador}
                />
              </div>
              <div className="dark:text mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {slice.primary?.msg_after_form
                  ? slice.primary?.msg_after_form
                  : null}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center px-4 lg:mt-0 lg:flex-1 lg:flex-shrink-0 lg:flex-grow">
              {slice.primary.image.url ? (
                slice.primary.imageinblock == true ||
                slice.primary.imageinblock == null ? (
                  <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-xl shadow-2xl">
                    <Image
                      src={slice.primary.image.url}
                      alt={`${slice.primary.image.alt}`}
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={slice.primary.image.url}
                    alt={`${slice.primary.image.alt}`}
                    priority
                    width={slice.primary.image.dimensions.width}
                    height={slice.primary.image.dimensions.height}
                  />
                )
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "voipnho" && (
        <section className="relative overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div
            className={`mx-auto max-w-7xl gap-y-8 px-4 py-10 sm:px-6 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-x-10 lg:gap-y-12 lg:py-28 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="flex items-center justify-start py-1">
                {slice.primary.logo?.url ? (
                  <Image
                    src={slice.primary.logo.url}
                    alt={`${slice.primary.logo.alt} Logo`}
                    priority
                    width={150}
                    height={40}
                  />
                ) : null}
              </div>

              <div className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="dark:text mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div className="mt-4 flex items-center gap-x-6">
                {slice.primary.primary_button_url &&
                slice.primary.primary_button_text ? (
                  <Link
                    href={slice.primary.primary_button_url}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    prefetch={false}
                    alt={slice.primary.primary_button_text}
                  >
                    <Icon iconName={slice.primary.primary_button_icon} />
                    {slice.primary.primary_button_text}
                  </Link>
                ) : null}

                {slice.primary.secondary_button_url &&
                slice.primary.secondary_button_text ? (
                  <Link
                    className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                    href={slice.primary.secondary_button_url}
                    prefetch={false}
                    alt={slice.primary.secondary_button_text}
                  >
                    {slice.primary.secondary_button_text}
                    <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center px-4 lg:mt-0 lg:flex-1 lg:flex-shrink-0 lg:flex-grow">
              <Voipnhocabeca />
            </div>
          </div>
        </section>
      )}
      {slice.variation === "service" && (
        <section className="relative isolate overflow-hidden">
          <div className="absolute left-10 top-10 -z-10 hidden w-72 lg:inline-block ">
            <IconePlusDegrade direction="" />
          </div>
          <div className="absolute bottom-10 right-10 -z-10 hidden w-80  lg:inline-block ">
            <IconePlusDegrade direction="right" />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="flex items-center justify-center py-1">
                  {slice.primary.logo?.url ? (
                    <Image
                      src={slice.primary.logo.url}
                      alt={`${slice.primary.logo.alt} Logo`}
                      priority
                      width={150}
                      height={50}
                    />
                  ) : null}
                </div>

                {slice.primary.title ? (
                  <div className="mt-2 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                    <PrismicRichText field={slice.primary.title} />
                  </div>
                ) : null}

                {slice.primary.text ? (
                  <div className="dark:text mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    <PrismicRichText field={slice.primary.text} />
                  </div>
                ) : null}

                <div className="mt-4 flex items-center justify-center gap-x-6 lg:mt-6">
                  {slice.primary.primary_button_url &&
                  slice.primary.primary_button_text ? (
                    <Link
                      href={slice.primary.primary_button_url}
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                      prefetch={false}
                      alt={slice.primary.primary_button_text}
                    >
                      <Icon iconName={slice.primary.primary_button_icon} />
                      {slice.primary.primary_button_text}
                    </Link>
                  ) : null}

                  {slice.primary.secondary_button_url &&
                  slice.primary.secondary_button_text ? (
                    <Link
                      className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                      href={slice.primary.secondary_button_url}
                      prefetch={false}
                      alt={slice.primary.secondary_button_text}
                    >
                      {slice.primary.secondary_button_text}
                      <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  ) : null}
                </div>
              </div>
              {slice.primary?.image?.url ? (
                <Image
                  src={slice.primary.image.url}
                  alt={`${slice.primary.image.alt}`}
                  priority
                  width={2432}
                  height={1442}
                  className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
                />
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "serviceVideo" && (
        <section className="relative overflow-hidden">
          <div className="absolute left-10 top-10 hidden w-72 lg:inline-block ">
            <IconePlusDegrade direction="" />
          </div>
          <div className="absolute bottom-10 right-10 hidden w-80  lg:inline-block ">
            <IconePlusDegrade direction="right" />
          </div>
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto flex flex-col items-center justify-center text-center">
                <div className="flex items-center justify-center py-1">
                  {slice.primary.logo?.url ? (
                    <Image
                      src={slice.primary.logo.url}
                      alt={`${slice.primary.logo.alt} Logo`}
                      priority
                      width={150}
                      height={50}
                    />
                  ) : null}
                </div>

                <div className="mt-2 max-w-5xl text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                  <PrismicRichText field={slice.primary.title} />
                </div>

                <div className="dark:text mt-6 max-w-5xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <PrismicRichText field={slice.primary.text} />
                </div>
                <div className="mt-4 flex items-center justify-center gap-x-6 lg:mt-6">
                  {slice.primary.primary_button_url &&
                  slice.primary.primary_button_text ? (
                    <Link
                      href={slice.primary.primary_button_url}
                      className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                      prefetch={false}
                      alt={slice.primary.primary_button_text}
                    >
                      <Icon iconName={slice.primary.primary_button_icon} />
                      {slice.primary.primary_button_text}
                    </Link>
                  ) : null}

                  {slice.primary.secondary_button_url &&
                  slice.primary.secondary_button_text ? (
                    <Link
                      className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                      href={slice.primary.secondary_button_url}
                      prefetch={false}
                      alt={slice.primary.secondary_button_text}
                    >
                      {slice.primary.secondary_button_text}
                      <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  ) : null}
                </div>
                {slice.primary.video ? (
                  <div className=" mt-10 h-full w-full max-w-[70rem] overflow-hidden rounded-xl bg-gray-200 shadow-2xl lg:mt-20 xl:mt-32">
                    {hasWindow ? (
                      <CookpeteReactPlayer
                        url={slice.primary.video.embed_url}
                        style={{
                          borderRadius: "1rem",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        width="auto"
                        height={600}
                        loop
                        muted
                        controls
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      )}
      {slice.variation === "form" && (
        <section className="relative overflow-hidden">
          {slice.primary.hiddengrid !== true ? (
            <>
              <svg
                className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="50%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
              </svg>
              <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                />
              </svg>
            </>
          ) : null}

          <div
            className={`mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:flex lg:items-center lg:justify-between lg:gap-x-10 lg:px-8 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-auto">
              <div className="flex items-center justify-start py-2">
                {slice.primary.logo?.url ? (
                  <Image
                    src={slice.primary.logo.url}
                    alt={`${slice.primary.logo.alt} Logo`}
                    priority
                    width={150}
                    height={40}
                  />
                ) : null}
              </div>
              <div className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-8">
                {slice.primary.button_link && slice.primary.button_text ? (
                  <Link
                    href={slice.primary.button_link}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    alt={slice.primary.button_text}
                    prefetch={false}
                  >
                    {slice.primary.button_text}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <Card
                title={slice.primary.form_title}
                description={slice.primary.form_description}
              >
                <FormHero3 buttonName={slice.primary.form_button_text} />
              </Card>
            </div>
          </div>
        </section>
      )}
      {slice.variation === "imgfull" && (
        <section className="relative">
          <div
            className={`mx-auto max-w-7xl ${
              !isRight
                ? "flex items-center justify-end overflow-hidden text-right"
                : null
            }`}
          >
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-24  lg:px-8 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100  sm:text-6xl">
                    {slice.primary.title ? (
                      <PrismicRichText field={slice.primary.title} />
                    ) : null}
                  </div>

                  <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    {slice.primary.text ? (
                      <PrismicRichText field={slice.primary.text} />
                    ) : null}
                  </div>
                  <div
                    className={`mt-1 flex items-center gap-x-6 ${
                      !isRight ? "justify-end" : null
                    }`}
                  >
                    {slice.primary.primary_button_url &&
                    slice.primary.primary_button_text ? (
                      <Link
                        href={slice.primary.primary_button_url}
                        className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                        prefetch={false}
                        alt={slice.primary.primary_button_text}
                      >
                        {slice.primary.primary_button_text}
                      </Link>
                    ) : null}

                    {slice.primary.secondary_button_url &&
                    slice.primary.secondary_button_text ? (
                      <Link
                        className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                        href={slice.primary.secondary_button_url}
                        prefetch={false}
                        alt={slice.primary.secondary_button_text}
                      >
                        {slice.primary.secondary_button_text}
                        <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`hidden bg-gray-50 lg:absolute lg:inset-y-0 ${
              isRight ? "lg:right-0" : "lg:left-0"
            } lg:inline-block lg:w-[53%]`}
          >
            {slice.primary?.image?.url ? (
              <div className="aspect-[3/2]  lg:h-auto lg:w-auto">
                <Image
                  src={slice.primary.image.url}
                  alt={` ${slice.primary.image.alt}`}
                  priority
                  fill
                  style={{ objectFit: "cover", objectPosition: "right" }}
                />
              </div>
            ) : null}
          </div>
        </section>
      )}
      {slice.variation === "minimal" && (
        <section className="pt-20">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">
              {slice.primary.title && (
                <PrismicRichText field={slice.primary.title} />
              )}
            </div>
            <div className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-300 sm:px-16 lg:text-xl xl:px-48">
              {slice.primary.text && (
                <PrismicRichText field={slice.primary.text} />
              )}
            </div>
            <div className="mt-10 flex items-center justify-center gap-10">
              {slice.primary.primary_button_url ||
              slice.primary.primary_button_text ? (
                <Link
                  href={slice.primary.primary_button_url}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                  prefetch={false}
                  alt={slice.primary.primary_button_text}
                >
                  {slice.primary.primary_button_text}
                </Link>
              ) : null}

              {slice.primary.secondary_button_url ||
              slice.primary.secondary_button_text ? (
                <Link
                  className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                  href={slice.primary.secondary_button_url}
                  prefetch={false}
                  alt={slice.primary.secondary_button_text}
                >
                  {slice.primary.secondary_button_text}
                  <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "video" && (
        <section className="relative overflow-hidden">
          {slice.primary?.hiddengrid !== true ? (
            <>
              <svg
                className="absolute inset-0 -z-10 hidden h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:inline-block"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="50%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
              </svg>
              <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:hidden"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                />
              </svg>
            </>
          ) : null}
          <div
            className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-x-10 lg:px-8 lg:py-24 xl:py-32 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="flex items-center justify-start py-2">
                {slice.primary.logo?.url ? (
                  <Image
                    src={slice.primary.logo.url}
                    alt={`${slice.primary.logo.alt} Logo`}
                    priority
                    width={150}
                    height={40}
                  />
                ) : null}
              </div>
              <div className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="mt-6 leading-8 text-gray-600 dark:text-gray-300 lg:text-lg">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                {slice.primary.primary_button_url &&
                slice.primary.primary_button_text ? (
                  <Link
                    href={slice.primary.primary_button_url}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    prefetch={false}
                    alt={slice.primary.primary_button_text}
                  >
                    {slice.primary.primary_button_text}
                  </Link>
                ) : null}

                {slice.primary.secondary_button_url &&
                slice.primary.secondary_button_text ? (
                  <Link
                    className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                    href={slice.primary.secondary_button_url}
                    prefetch={false}
                    alt={slice.primary.secondary_button_text}
                  >
                    {slice.primary.secondary_button_text}
                    <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="mt-16 flex items-center justify-center sm:mt-24 lg:mt-0 lg:flex-1 lg:flex-shrink-0  lg:flex-grow">
              {slice.primary.video ? (
                <div className=" w-full max-w-[40rem]  overflow-hidden rounded-xl bg-gray-200 shadow-2xl">
                  {hasWindow ? (
                    <CookpeteReactPlayer
                      url={slice.primary.video.embed_url}
                      style={{
                        borderRadius: "1rem",
                        width: "100%",

                        objectFit: "cover",
                      }}
                      width="auto"
                      loop
                      playing
                      muted
                      controls
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "input" && (
        <section className="relative overflow-hidden">
          <div
            className={`mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div data-aos="fade-right" className="mt-4">
                <FormHero />
              </div>
            </div>
            <div className="mt-16 px-4 sm:mt-24 lg:mt-0 lg:flex lg:flex-1 lg:flex-shrink-0 lg:flex-grow lg:items-center lg:justify-center">
              {slice.primary.image.url ? (
                <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={slice.primary.image.url}
                    alt={`${slice.primary.image.alt}`}
                    priority
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}
      {slice.variation === "carousel" && (
        <section className="relative overflow-hidden">
          <div
            className={`mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div className="mt-5 flex items-center gap-x-6">
                {slice.primary.primary_button_url &&
                slice.primary.primary_button_text ? (
                  <Link
                    href={slice.primary.primary_button_url}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    prefetch={false}
                    alt={slice.primary.primary_button_text}
                  >
                    {slice.primary.primary_button_text}
                  </Link>
                ) : null}

                {slice.primary.secondary_button_url &&
                slice.primary.secondary_button_text ? (
                  <Link
                    className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold dark:text-gray-300  md:w-auto "
                    href={slice.primary.secondary_button_url}
                    prefetch={false}
                    alt={slice.primary.secondary_button_text}
                  >
                    {slice.primary.secondary_button_text}
                    <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="mt-16 flex items-center justify-center px-4 sm:mt-24 lg:mt-0 lg:flex-1 lg:flex-shrink-0 lg:flex-grow">
              <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-xl bg-gray-200 shadow-2xl">
                <Swiper
                  pagination={
                    !slice.primary.hidden_pagination_carousel
                      ? {
                          clickable: true,
                        }
                      : false
                  }
                  autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  modules={[Autoplay, Pagination]}
                  className="heroSwiper w-full px-0"
                >
                  {slice.items.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex w-full flex-wrap items-center justify-center "
                    >
                      <div
                        key={index}
                        className="relative flex h-[30rem] w-full  flex-col items-center justify-between gap-4 rounded-3xl py-3 lg:h-[24rem]"
                      >
                        <div className="bg-transparent  object-cover lg:h-auto lg:w-auto">
                          <Image
                            src={item.item_img?.url}
                            alt={`Item ${index} do carousel de ${slice.primary.title}`}
                            fill
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
      {slice.variation === "carouselAll" && (
        <section className="relative overflow-hidden">
          <div
            className={`absolute inset-x-0 z-50 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 ${leftOurRightClass}`}
          >
            <div className="mx-auto max-w-xl lg:mx-0 lg:flex-1">
              <div className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                <PrismicRichText field={slice.primary.title} />
              </div>

              <div className="mt-6 text-lg leading-8 text-gray-200">
                <PrismicRichText field={slice.primary.text} />
              </div>
              <div className="mt-5 flex items-center gap-x-6">
                {slice.primary.primary_button_url &&
                slice.primary.primary_button_text ? (
                  <Link
                    href={slice.primary.primary_button_url}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-mv-verduncio px-8 py-2 text-base font-semibold text-white shadow-sm transition-all ease-in-out hover:bg-mv-verdin hover:text-mv-verduncio focus:outline-none focus:ring-2 focus:ring-mv-verduncio  focus:ring-offset-2 md:w-auto"
                    prefetch={false}
                    alt={slice.primary.primary_button_text}
                  >
                    {slice.primary.primary_button_text}
                  </Link>
                ) : null}

                {slice.primary.secondary_button_url &&
                slice.primary.secondary_button_text ? (
                  <Link
                    className="group flex w-full items-center justify-center gap-2 px-4 py-2 text-base font-semibold text-gray-100 md:w-auto "
                    href={slice.primary.secondary_button_url}
                    prefetch={false}
                    alt={slice.primary.secondary_button_text}
                  >
                    {slice.primary.secondary_button_text}
                    <BsArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="mt-16 px-4 sm:mt-24 lg:mt-0 lg:flex lg:flex-1 lg:flex-shrink-0 lg:flex-grow lg:items-center lg:justify-center"></div>
          </div>
          <Swiper
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className=" w-full "
          >
            {slice.items.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex w-full flex-wrap items-center justify-center "
              >
                <div
                  key={index}
                  className="relative flex h-screen w-full  flex-col items-center justify-between gap-4 rounded-3xl py-3 "
                >
                  <div className="bg-transparent  object-cover">
                    <Image
                      src={item.item_img?.url}
                      alt={`Item ${index} do carousel de ${slice.primary.title}`}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "right",
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  );
};

export default Hero;
