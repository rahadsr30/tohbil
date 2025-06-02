import React from "react";
import Image from "next/image";
import fundingImage from "../assets/fundingImage.png";
import { Button } from "@/components/ui";

export default function Funding() {
  return (
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
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                    1
                  </span>
                  <span className="h-28 border-l-2 border-[#5E5E5E] border-dashed block mx-auto"></span>
                </div>
                <div>
                  <h3 className="text-white lg-card mb-1">Create a Campaign</h3>
                  <p className="text-[#ACABB2] text-normal-none">
                    Sign up and create your campaign with a compelling story and
                    clear goals.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                    2
                  </span>
                  <span className="h-28 border-l-2 border-[#5E5E5E] border-dashed block mx-auto"></span>
                </div>
                <div>
                  <h3 className="text-white lg-card mb-1">
                    Promote Your Campaign
                  </h3>
                  <p className="text-[#ACABB2] text-normal-none">
                    Share your campaign on social media, with friends, and in
                    your community to gain support.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                    3
                  </span>
                  <span className="h-28 border-l-2 border-[#5E5E5E] border-dashed block mx-auto"></span>
                </div>
                <div>
                  <h3 className="text-white lg-card mb-1">Receive Funding</h3>
                  <p className="text-[#ACABB2] text-normal-none">
                    Once your campaign reaches its goal, the funds are securely
                    transferred to you.
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <span className="w-14 h-12 rounded-full bg-[#0E0F11] text-white flex items-center justify-center text-xl md:text-[28px] border-2 border-[#FFFFFF1A]">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="text-white lg-card mb-1">
                    Deliver Your Promise
                  </h3>
                  <p className="text-[#ACABB2] text-normal-none">
                    Fulfill your campaign promises and keep your backers updated
                    on your progress.
                  </p>
                </div>
              </div>
            </div>
            <Button variant="secondary" className="mt-8 md:hidden w-full">
              Start a Campaign
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
