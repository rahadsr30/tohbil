import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import Icon1 from "@/assets/icons/Icon1.png";
import Icon2 from "@/assets/icons/Icon2.png";
import Icon3 from "@/assets/icons/Icon3.png";
import Icon4 from "@/assets/icons/Icon4.png";
import Icon5 from "@/assets/icons/Icon5.png";
import Icon6 from "@/assets/icons/Icon6.png";

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
  {
    icon: Icon4,
    title: "LOCAL FOCUS",
    items: [
      "Designed for Bangladesh",
      "Bangla Language Option",
      "bKash/Nagad Payment Support",
      "Region-Specific Discovery",
    ],
  },
  {
    icon: Icon5,
    title: "SECURE & TRANSPARENT",
    items: [
      "Verified Campaigns",
      "Fund Tracking",
      "Data Encryption",
      "Fraud Protection",
    ],
  },
  {
    icon: Icon6,
    title: "COMMUNITY SUPPORT",
    items: [
      "Active Backer Network",
      "Built-in Sharing Tools",
      "Social Proof & Testimonials",
      "Real-Time Engagement",
    ],
  },
];

export default function Crowdfunding() {
  return (
    <section className="w-full bg-[#F0FDF2] py-section">
      <div className="wrapper">
        <div className="flex w-full justify-between items-end mb-10 md:mb-16 flex-wrap gap-4">
          <h2 className="heading text-[#3B3B3E] mb-2 md:mb-0">
            Choose Tohbil for Your
            <br />
            Crowdfunding Needs
          </h2>
          <Button
            variant="default"
            className="px-6 py-2 rounded-full text-base font-semibold"
          >
            Start a Campaign
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start text-start">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="mb-4 md:mb-8"
              />
              <h3 className="lg-card text-[#3B3B3E] mb-6 tracking-wide">
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
  );
}
