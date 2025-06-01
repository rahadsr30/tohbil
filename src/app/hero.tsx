import React from "react";
import Image from "next/image";
import heroImg from "../assets/hero/hero.png";
import avatar1 from "../assets/hero/avater1.png";
import avatar2 from "../assets/hero/avater2.png";
import avatar3 from "../assets/hero/avater3.png";
import logo1 from "@/assets/hero/waves.png";
import logo2 from "@/assets/hero/Rotashow.png";
import logo3 from "@/assets/hero/Travelers logo.png";
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="w-full bg-white py-section">
      <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center mb-4">
            <Image
              src={avatar1}
              alt="Donor"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
              style={{ zIndex: 3 }}
            />
            <Image
              src={avatar2}
              alt="Donor"
              width={32}
              height={32}
              className="-ml-3 rounded-full border-2 border-white"
              style={{ zIndex: 2 }}
            />
            <Image
              src={avatar3}
              alt="Donor"
              width={32}
              height={32}
              className="-ml-3 rounded-full border-2 border-white"
              style={{ zIndex: 1 }}
            />
            <span className="text-normal text-[#434347] ml-2">
              1000+ Donor amative members
            </span>
          </div>
          <h1 className="hero text-neutral-950 mb-4">
            Empower Your Dreams with Tohbil
          </h1>
          <p className="lg-text text-[#434347] mb-7 md:mb-10">
            Tohbil is Bangladesh’s homegrown crowdfunding platform—where dreams
            turn into reality through community-driven support. Launch donation
            drives, pre-sale projects, or one-time investment campaigns—all in
            one place.
          </p>
          <div className="flex gap-4 mb-10">
            <Button variant="default">Start a Campaign</Button>
            <Button variant="outline">Explore Campaigns</Button>
          </div>
          {/* Partners */}
          <div className="mt-10 md:mt-32">
            <span className="block lg-text-medium text-[#3B3B3E] mb-4">
              Our most loved partners
            </span>
            <div className="flex gap-8 items-center">
              <Image src={logo1} alt="waves" width={80} height={32} />
              <Image src={logo2} alt="RotaShow" width={100} height={32} />
              <Image src={logo3} alt="travelers" width={100} height={32} />
            </div>
          </div>
        </div>
        {/* Right Side (Hero Image) */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-md md:max-w-lg rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={heroImg}
              alt="Hero"
              className="object-cover w-full h-full"
              width={700}
              height={877}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
