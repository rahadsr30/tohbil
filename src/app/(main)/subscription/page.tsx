import { Button } from "@/components/ui";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/subscription/subscriptionHero.png";
import icon from "@/assets/subscription/iconn.png";
import subscriber from "@/assets/subscription/Subscriber.png";
import creator from "@/assets/subscription/Creator.png";
import subscriber1 from "@/assets/subscription/Subscriber1.png";
import Platform from "@/assets/subscription/Platform.png";
import CTA from "../cta";
import { Link } from "lucide-react";

const steps = [
  {
    number: 1,
    subscriber: {
      title: "Discover Creators",
      description:
        "Browse through a wide range of creators across various categories. Find someone whose content speaks to you.",
    },
    creator: {
      title: "Set Up Membership Tiers",
      description:
        "Create flexible plans with varying benefits to attract different kinds of supporters – from casual fans to super followers.",
    },
  },
  {
    number: 2,
    subscriber: {
      title: "Choose a Subscription Plan",
      description:
        "Select from multiple tier options that fit your interests and budget. Get access to exclusive perks and early releases.",
    },
    creator: {
      title: "Upload Exclusive Content",
      description:
        "Share videos, files, behind-the-scenes updates or any premium content exclusively for subscribers.",
    },
  },
  {
    number: 3,
    subscriber: {
      title: "Enjoy Exclusive Content",
      description:
        "Instantly unlock premium content from your favorite creators – unparalleled in your network and beyond.",
    },
    creator: {
      title: "Track Subscribers & Earnings",
      description:
        "Use your dashboard to manage members, monitor payments, and analyze content performance with data.",
    },
  },
  {
    number: 4,
    subscriber: {
      title: "Manage on Your Terms",
      description:
        "Pause, cancel, or switch your subscription anytime. Full control, no hassle.",
    },
    creator: {
      title: "Promote & Grow",
      description:
        "Use built-in marketing tools to grow your subscriber base and build a loyal community.",
    },
  },
];

const steps2 = [
  {
    number: 1,
    subscriber: {
      title: "Browse Local Platforms",
      description:
        "Explore top Bangladeshi platforms offering exclusive content — from streaming to learning and beyond.",
    },
    creator: {
      title: "Create Your Listing",
      description:
        "Add your platform’s content tiers to Tohbil and get discovered by a wider audience in Bangladesh.",
    },
  },
  {
    number: 2,
    subscriber: {
      title: "Pick Your Subscription",
      description:
        "Choose the plan that fits your interest and budget. Enjoy all benefits in one centralized Tohbil account.",
    },
    creator: {
      title: "Connect Your System",
      description:
        "Integrate your subscription model with Tohbil for seamless syncing and user management.",
    },
  },
  {
    number: 3,
    subscriber: {
      title: "Access Content Instantly",
      description:
        "Get full access to your subscription’s perks — streaming, downloads, or courses — right from the linked platform.",
    },
    creator: {
      title: "Grow Your Reach",
      description:
        "Tap into Tohbil’s subscriber base and attract new users looking for local premium content.",
    },
  },
  {
    number: 4,
    subscriber: {
      title: "Manage Easily on Tohbil",
      description:
        "Pause, resume, upgrade, or cancel any subscription directly from your Tohbil dashboard. Total control, zero hassle.",
    },
    creator: {
      title: "Track & Get Paid",
      description:
        "Monitor subscriber numbers, manage analytics, and receive payments — all from your company dashboard.",
    },
  },
];

const subscriberBenefits = [
  {
    icon: icon,
    title: "Exclusive Access",
    description:
      "Unlock new ideas only available to subscribers. Get early access to premium content and special releases.",
  },
  {
    icon: icon,
    title: "Support Creators Directly",
    description:
      "Your subscription helps creators continue doing what they love most - creating amazing content.",
  },
  {
    icon: icon,
    title: "Engage in Communities",
    description:
      "Join other excited community members in discussions, live events and exclusive member-only content.",
  },
  {
    icon: icon,
    title: "Flexible Management",
    description:
      "Pause, cancel, or modify your subscription anytime from your account settings with full control.",
  },
];

const creatorBenefits = [
  {
    icon: icon,
    title: "Monetize Passion",
    description:
      "Turn your skills and creativity into a sustainable income stream by offering exclusive content to subscribers.",
  },
  {
    icon: icon,
    title: "Grow Community",
    description:
      "Connect with dedicated supporters who value your work and want to see you succeed long-term.",
  },
  {
    icon: icon,
    title: "Complete Control",
    description:
      "Decide what content to include in your membership tiers and set your own pricing terms.",
  },
  {
    icon: icon,
    title: "Smart Insights",
    description:
      "Track your growth with detailed analytics to understand your audience and optimize content strategies.",
  },
];
const subscriberBenefits1 = [
  {
    icon: icon,
    title: "All-in-One Access",
    description:
      "Subscribe to multiple Bangladeshi platforms (like Chorki, Toffee) from a single, unified dashboard.",
  },
  {
    icon: icon,
    title: "Simplified Billing",
    description:
      "No need to manage multiple payments—Tohbil handles it all in one secure place.",
  },
  {
    icon: icon,
    title: "Flexible Subscriptions",
    description:
      "Pause, resume, or cancel platform subscriptions anytime with full control.",
  },
  {
    icon: icon,
    title: "Discover Local Content",
    description:
      "Explore trending shows, content, or exclusive offers across Bangladesh’s top streaming platforms.",
  },
];

const platformsBenefits = [
  {
    icon: icon,
    title: "Wider Reach",
    description:
      "Expose your content platform to a broader audience through Tohbil’s growing subscriber base.",
  },
  {
    icon: icon,
    title: "Seamless Integration",
    description:
      "Easily integrate your subscription plans into Tohbil’s ecosystem with minimal effort.",
  },
  {
    icon: icon,
    title: "Streamlined Payments",
    description:
      "Get your subscription revenue faster through our optimized payment system.",
  },
  {
    icon: icon,
    title: "Data & Insights",
    description:
      "Gain valuable audience insights and analytics to help improve engagement and retention.",
  },
];

export default function page() {
  return (
    <>
      <section className="py-section">
        <div className="flex justify-between flex-col md:flex-row items-center gap-10 md:gap-20 wrapper">
          <div>
            <h1 className="heading-lg text-[#101011] mb-4">
              Support What You Love. Access What You Crave.
            </h1>
            <p className="text-[#434347] lg-text max-w-screen-md mb-6 md:mb-10">
              Join exclusive communities, unlock premium content, and empower
              creators—one subscription at a time.
            </p>
            <div className="flex gap-4">
              <Button variant="default" asChild>
                <Link href="/dashboard/subscription">Explore Creators</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard/subscription">Be a Creator</Link>
              </Button>
            </div>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={heroImage}
                alt="Child holding books and smiling"
                width={540}
                height={580}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#101011] py-section">
        <div className="wrapper">
          <div className="flex w-full justify-between items-end mb-10 md:mb-16 flex-col md:flex-row">
            <h2 className="heading text-white mb-4 md:mb-0">
              Membership Made Easy for <br className="hidden md:block" />{" "}
              Everyone
            </h2>
            <Button
              variant="secondary"
              className="w-full md:w-auto mt-4 md:mt-0"
            >
              Start Your Journey Now
            </Button>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="pr-12">
                <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2">
                  Subscribe & Support Creators
                </h2>
              </div>
              <div className="pl-12">
                <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2">
                  Monetize Your Passion
                </h2>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-px"
                style={{
                  height: "calc(100% - 3rem)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, #374151 0px, #374151 12px, transparent 12px, transparent 24px)",
                }}
              ></div>

              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                      <div className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                        {step.number}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="pr-12">
                        <div className="text-left">
                          <h3 className="lg-card text-white mb-2">
                            {step.subscriber.title}
                          </h3>
                          <p className="text-[#CFD0D2] text-normal-none">
                            {step.subscriber.description}
                          </p>
                        </div>
                      </div>

                      <div className="pl-12">
                        <div className="text-left">
                          <h3 className="lg-card text-white mb-2">
                            {step.creator.title}
                          </h3>
                          <p className="text-[#CFD0D2] text-normal-none">
                            {step.creator.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden mt-8">
            <div className="mb-8">
              <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2 text-left text-xl">
                Subscribe & Support Creators
              </h2>
              <div className="space-y-6 mt-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-sm border-2 border-[#FFFFFF1A] mr-3 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-lg font-semibold">
                        {step.subscriber.title}
                      </h3>
                      <p className="text-[#CFD0D2] text-sm leading-relaxed">
                        {step.subscriber.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2 text-left text-xl">
                Monetize Your Passion
              </h2>
              <div className="space-y-6 mt-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-sm border-2 border-[#FFFFFF1A] mr-3 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-lg font-semibold">
                        {step.creator.title}
                      </h3>
                      <p className="text-[#CFD0D2] text-sm leading-relaxed">
                        {step.creator.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-[#DDFBE3]">
        <div className="wrapper">
          <div>
            <h1 className="heading-lg text-[#3B3B3E] text-center mb-10 lg:mb-16">
              Experience Content Like Never Before
            </h1>

            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={subscriber}
                      alt="Person using tablet"
                      width={580}
                      height={680}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h2 className="lg-card-title text-[#3B3B3E] mb-6">
                    Subscribers Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subscriberBenefits.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                          <div>
                            <div className="mb-10">
                              <Image
                                src={benefit.icon}
                                alt="Benefit Icon"
                                width={60}
                                height={60}
                              />
                            </div>
                            <h3 className="lg-text-semibold-sm  text-[#3B3B3E] mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-normal text-[#434347]">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="lg-card-title text-[#3B3B3E] mb-6">
                    Creators Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {creatorBenefits.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 ">
                        <div className="flex items-start space-x-3">
                          <div>
                            <div className="mb-10">
                              <Image
                                src={benefit.icon}
                                alt="Benefit Icon"
                                width={60}
                                height={60}
                              />
                            </div>
                            <h3 className="lg-text-semibold-sm  text-[#3B3B3E] mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-normal text-[#434347]">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={creator}
                      alt="Person with headphones"
                      width={580}
                      height={680}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#101011] py-section">
        <div className="wrapper">
          <div className="flex w-full justify-between items-end mb-10 md:mb-16 flex-col md:flex-row">
            <h2 className="heading text-white mb-4 md:mb-0">
              Easier Subscriptions, All in <br className="hidden md:block" />
              One Place
            </h2>
            <Button
              variant="secondary"
              className="w-full md:w-auto mt-4 md:mt-0"
            >
              Start Your Journey Now
            </Button>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="pr-12">
                <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2">
                  Subscribe & Manage
                </h2>
              </div>
              <div className="pl-12">
                <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2">
                  Distribute Content
                </h2>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute left-1/2 top-0 transform -translate-x-1/2 w-px"
                style={{
                  height: "calc(100% - 3rem)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, #374151 0px, #374151 12px, transparent 12px, transparent 24px)",
                }}
              ></div>

              <div className="space-y-16">
                {steps2.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                      <div className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                        {step.number}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div className="pr-12">
                        <div className="text-left">
                          <h3 className="lg-card text-white mb-2">
                            {step.subscriber.title}
                          </h3>
                          <p className="text-[#CFD0D2] text-normal-none">
                            {step.subscriber.description}
                          </p>
                        </div>
                      </div>

                      <div className="pl-12">
                        <div className="text-left">
                          <h3 className="lg-card text-white mb-2">
                            {step.creator.title}
                          </h3>
                          <p className="text-[#CFD0D2] text-normal-none">
                            {step.creator.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden mt-8">
            <div className="mb-8">
              <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2 text-left text-xl">
                Subscribe & Support Creators
              </h2>
              <div className="space-y-6 mt-6">
                {steps2.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-sm border-2 border-[#FFFFFF1A] mr-3 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-lg font-semibold">
                        {step.subscriber.title}
                      </h3>
                      <p className="text-[#CFD0D2] text-sm leading-relaxed">
                        {step.subscriber.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="lg-card-title text-white border-b-2 border-[#CFD0D2] pb-2 text-left text-xl">
                Distribute Content
              </h2>
              <div className="space-y-6 mt-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-sm border-2 border-[#FFFFFF1A] mr-3 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-lg font-semibold">
                        {step.creator.title}
                      </h3>
                      <p className="text-[#CFD0D2] text-sm leading-relaxed">
                        {step.creator.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-[#DDFBE3]">
        <div className="wrapper">
          <div>
            <h1 className="heading-lg text-[#3B3B3E] text-center mb-10 lg:mb-16">
              Powering Subscriptions for Everyone
            </h1>

            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={subscriber1}
                      alt="Person using tablet"
                      width={580}
                      height={680}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h2 className="lg-card-title text-[#3B3B3E] mb-6">
                    Subscribers Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subscriberBenefits1.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                          <div>
                            <div className="mb-10">
                              <Image
                                src={benefit.icon}
                                alt="Benefit Icon"
                                width={60}
                                height={60}
                              />
                            </div>
                            <h3 className="lg-text-semibold-sm  text-[#3B3B3E] mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-normal text-[#434347]">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="lg-card-title text-[#3B3B3E] mb-6">
                    Platforms Benefits
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {platformsBenefits.map((benefit, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 ">
                        <div className="flex items-start space-x-3">
                          <div>
                            <div className="mb-10">
                              <Image
                                src={benefit.icon}
                                alt="Benefit Icon"
                                width={60}
                                height={60}
                              />
                            </div>
                            <h3 className="lg-text-semibold-sm  text-[#3B3B3E] mb-3">
                              {benefit.title}
                            </h3>
                            <p className="text-normal text-[#434347]">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={Platform}
                      alt="Person with headphones"
                      width={580}
                      height={680}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
