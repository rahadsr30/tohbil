import { Button } from "@/components/ui";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/academy/academyHero.png";
import fundingImage from "@/assets/fundingImage.png";
import tutorial1Image from "@/assets/academy/tutorial1.png";
import tutorial2Image from "@/assets/academy/tutorial2.png";
import tutorial3Image from "@/assets/academy/tutorial3.png";
import supportImage from "@/assets/academy/support.png";
import { FaCheckCircle } from "react-icons/fa";
import CTA from "../cta";

const tutorials = [
  {
    image: tutorial1Image,
    alt: "Tutorial 1",
    title: "How to Set Up Your Campaign Page",
    stats: "15K Views | 1 Month Ago",
  },
  {
    image: tutorial2Image,
    alt: "Tutorial 2",
    title: "Best Practices for Writing Campaign Descriptions",
    stats: "9K Views | 1 Month Ago",
  },
  {
    image: tutorial3Image,
    alt: "Tutorial 3",
    title: "Sharing Your Campaign Effectively",
    stats: "11K Views | 1 Month Ago",
  },
  {
    image: tutorial1Image,
    alt: "Tutorial 1",
    title: "How to Set Up Your Campaign Page",
    stats: "15K Views | 1 Month Ago",
  },
  {
    image: tutorial2Image,
    alt: "Tutorial 2",
    title: "Best Practices for Writing Campaign Descriptions",
    stats: "9K Views | 1 Month Ago",
  },
  {
    image: tutorial3Image,
    alt: "Tutorial 3",
    title: "Sharing Your Campaign Effectively",
    stats: "11K Views | 1 Month Ago",
  },
];

const campaignTips = [
  {
    title: "Title and Description",
    description:
      "Choose a clear and compelling title for your campaign. Write a detailed and engaging description that explains why your project is important and how the funds will be used.",
  },
  {
    title: "Goal Setting",
    description:
      "Set a realistic funding goal. Consider the costs of your project and the amount of support you can realistically expect to receive.",
  },
  {
    title: "Visuals",
    description:
      "Use high-quality images and videos to bring your campaign to life. Visuals can help supporters better understand and connect with your project.",
  },
  {
    title: "Rewards",
    description:
      "Offer rewards to your supporters. Rewards can be a great way to show appreciation and encourage more donations. Make sure they are relevant and feasible.",
  },
  {
    title: "Promotion",
    description:
      "Promote your campaign widely. Share it on social media, email, and other platforms. Engage with your community and respond to their questions and comments.",
  },
  {
    title: "Updates",
    description:
      "Provide regular updates to your supporters. Keep them informed about the progress of your campaign and how their donations are being used.",
  },
];

const steps = [
  {
    number: 1,
    title: "Create a Campaign",
    description:
      "Sign up and create your campaign with a compelling story and clear goals.",
  },
  {
    number: 2,
    title: "Promote Your Campaign",
    description:
      "Share your campaign on social media, with friends, and in your community to gain support.",
  },
  {
    number: 3,
    title: "Receive Funding",
    description:
      "Once your campaign reaches its goal, the funds are securely transferred to you.",
  },
  {
    number: 4,
    title: "Deliver Your Promise",
    description:
      "Fulfill your campaign promises and keep your backers updated on your progress.",
  },
];

const supportOptions = [
  {
    title: "Customer Support",
    description:
      "Our friendly support team is always ready to help. Whether you have questions about starting a campaign, donating, or using Tohbil, you can reach us via email, phone, or live chat.",
  },
  {
    title: "FAQs",
    description:
      "Have a quick question? Browse our FAQs to get fast answers on campaign setup, payment processes, account settings, and more — all in one place.",
  },
  {
    title: "Guides and Tutorials",
    description:
      "From launching your first campaign to managing donations, our detailed guides and tutorials walk you through every step to make your journey smooth and successful.",
  },
  {
    title: "Community Forum",
    description:
      "Join conversations with other users, ask for tips, and share your own crowdfunding experiences. Learn directly from people who&apos;ve been in your shoes.",
  },
];

export default function page() {
  return (
    <>
      <section className="py-section">
        <div className="flex justify-between flex-col md:flex-row items-center gap-10 md:gap-20 wrapper">
          <div>
            <h1 className="heading-lg text-[#101011] mb-4">
              Welcome to Tohbil Academy
            </h1>
            <p className="text-[#434347] lg-text max-w-screen-md mb-6 md:mb-10">
              Master the art of crowdfunding with easy-to-follow tutorials,
              guides, and expert tips — all in one place.
            </p>
            <Button variant="default">Explore Guides</Button>
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

      <section className="w-full bg-[#0E0F11] py-section">
        <div className="wrapper">
          <div className="flex w-full justify-between items-end mb-10 md:mb-16">
            <h2 className="heading text-white mb-2 md:mb-0 ">
              Fundraising on Tohbil is <br /> Simple, Effective, and Reliable
            </h2>
            <Button variant="secondary" className="hidden md:inline-block">
              Start a Campaign
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Left Side: Image */}
            <div>
              <div>
                <Image
                  src={fundingImage}
                  alt="Fundraising Volunteer"
                  width={670}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Right Side: Steps */}
            <div className="flex-1 flex flex-col items-start">
              <div className="w-full flex flex-col">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-start gap-6">
                    <div className="flex flex-col items-center">
                      <span className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                        {step.number}
                      </span>
                      {index < steps.length - 1 && (
                        <span className="h-28 border-l-2 border-[#5E5E5E] border-dashed block mx-auto"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white lg-card mb-1">{step.title}</h3>
                      <p className="text-[#ACABB2] text-normal-none">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="secondary" className="mt-8 md:hidden w-full">
                Start a Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="wrapper">
          <h2 className="heading text-[#3B3B3E] mb-10 lg:mb-16 text-center">
            Let&apos;s Get Started With Tohbil Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="relative w-full rounded-lg overflow-hidden mb-5">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.alt}
                    width={424}
                    height={231}
                    layout="responsive"
                  />
                </div>
                <h3 className="text-[#3B3B3E] lg-text-semi mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-[#84858C] text-normal">{tutorial.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-[#F0FDF2]">
        <div className="wrapper">
          <h2 className="heading text-[#3B3B3E] mb-10 lg:mb-16 text-center">
            Creating a Successful Campaign
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#26C14A] lg:mt-2 flex-shrink-0 size-6" />
                <div>
                  <h2 className="text-[#3B3B3E] lg-card mb-3">{tip.title}</h2>
                  <p className="text-[#434347] card-discription">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 wrapper">
          <div className="flex flex-col items-start">
            <h1 className="heading text-[#3B3B3E] mb-4">
              Need Help? We&apos;ve Got You Covered
            </h1>
            <p className="text-[#4B4B56]card-discription mb-10 lg:mb-16">
              Explore support options, guides, and resources to help you make
              the most of your Tohbil experience.
            </p>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={supportImage}
                alt="Two people smiling while looking at a laptop with headphones on"
                width={648}
                height={470}
                layout="responsive"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-6 flex-shrink-0 w-full md:w-auto">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-[#DDFBE3] p-6 rounded-xl">
                <h3 className="lg-text-semibold text-[#3B3B3E] mb-2">
                  {option.title}
                </h3>
                <p className="text-[#434347] text-normal">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
