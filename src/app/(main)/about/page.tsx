import React from "react";
import Image from "next/image";
import about1 from "@/assets/about/about1.png";
import about2 from "@/assets/about/about2.png";
import icon from "@/assets/about/aboutIcon.png";
import ourStoryImage from "@/assets/about/ourStory.png";
import Icon1 from "@/assets/icons/Icon1.png";
import Icon2 from "@/assets/icons/Icon2.png";
import Icon3 from "@/assets/icons/Icon3.png";
import { Button } from "@/components/ui";
import CTA from "../cta";

const features = [
  {
    icon: Icon1,
    title: "TRUSTED PLATFORM",
    items: [
      "Secure Payment Gateways",
      "Transparent Fund Management",
      "Verified Campaigns",
      "Built with Privacy in Mind",
    ],
  },
  {
    icon: Icon2,
    title: "DIVERSE CAMPAIGNS",
    items: [
      "Donations for Causes",
      "Pre-sale Product Launches",
      "One-Time Investment Ideas",
      "Subscription-Based Projects",
    ],
  },
  {
    icon: Icon3,
    title: "EASY TO USE",
    items: [
      "Quick Campaign Setup",
      "No Tech Skills Required",
      "Guided Steps for Beginners",
      "Mobile-Friendly Dashboard",
    ],
  },
];

export default function page() {
  return (
    <>
      <section className="py-section">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-start mb-10 lg:mb-16">
            <h2 className="text-[#101011] heading-lg">
              Together, We Make It Possible
            </h2>
            <p className="text-[#434347] lg-text">
              Tohbil is a Bangladesh-based crowdfunding platform that connects
              people with purpose. Whether it&apos;s a donation, a project, or a
              dream—you can bring it to life with the support of our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl">
            <div className="rounded-2xl overflow-hidden col-span-2">
              <Image
                src={about1}
                alt="Volunteers helping"
                width={880}
                height={680}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-6 col-span-1">
              <div className="bg-[#26C14A] rounded-2xl px-6 py-8 relative">
                <div>
                  <Image
                    src={icon}
                    alt="Volunteers helping"
                    width={50}
                    height={50}
                    className=" object-cover mb-6"
                  />
                  <h3 className="lg-text-semibold text-white">Our Mission</h3>
                  <p className="text-normal text-white mt-3">
                    To make fundraising simple, transparent, and accessible to
                    everyone—no matter where they are in Bangladesh. We believe
                    every good idea and urgent cause deserves the power of
                    collective support.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden">
                <Image
                  src={about2}
                  alt="Founder image"
                  width={384}
                  height={324}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[#3B3B3E] heading mb-8 lg:mb-16">
                Our Story
              </h2>
              <h3 className="lg-card text-[#3B3B3E] mb-3">Introduction</h3>
              <p className="text-[#434347] lg-text-medium mb-10">
                Tohbil was founded in 2025 by a group of passionate individuals
                who saw the potential of crowdfunding to bring about meaningful
                change. We started with a simple idea: to create a platform that
                would make it easy for people to support the causes they care
                about most.
              </p>
              <h3 className="lg-card text-[#3B3B3E] mb-3">Growth</h3>
              <p className="text-[#434347] lg-text-medium ">
                Since our launch, Tohbil has grown to support hundreds of
                campaigns, raising millions of dollars for various causes. We
                are proud to have a community of supporters who share our vision
                and are committed to making a difference.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src={ourStoryImage}
                alt="Group of people working together"
                width={640}
                height={572}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F0FDF2] py-section">
        <div className="wrapper">
          <div className="flex w-full justify-between items-end mb-10 md:mb-16 flex-wrap gap-4">
            <h2 className="heading text-[#3B3B3E] mb-2 md:mb-0">
              Who Tohbil is Built For
            </h2>
            <Button
              variant="default"
              className="px-6 py-2 rounded-full text-base font-semibold"
            >
              Start a Campaign
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start text-start">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mb-4 md:mb-8"
                />
                <h3 className="lg-card-2 text-[#3B3B3E] mb-6 tracking-wide">
                  {feature.title}
                </h3>
                <ul className="text-[#434347] lg-text-medium space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="list-none">
                      &middot; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
