"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import CampaignHeroImage from "@/assets/campaign/idea.png";
import { Button } from "@/components/ui";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import idea1 from "@/assets/campaign/idea1.png";
import idea2 from "@/assets/campaign/idea2.png";
import idea3 from "@/assets/campaign/idea3.png";
import idea4 from "@/assets/campaign/idea4.png";
import idea5 from "@/assets/campaign/idea5.png";
import idea6 from "@/assets/campaign/idea6.png";
import idea7 from "@/assets/campaign/idea7.png";
import idea9 from "@/assets/campaign/idea9.png";
import idea10 from "@/assets/campaign/idea10.png";
import idea11 from "@/assets/campaign/idea11.png";
import idea12 from "@/assets/campaign/idea12.png";
import idea13 from "@/assets/campaign/idea13.png";

import CTA from "../../cta";

// Placeholder data for idea campaigns
const campaigns = [
  {
    image: idea1,
    tag: "Project LightHope BD",
    title: "Smart Solar Lantern for Rural Homes",
    desc: "Light up off-grid villages with low-cost, solar-powered lanterns designed by local engineers.",
    daysLeft: 18,
    raised: 72000,
    goal: 150000,
    category: "technology",
    sharedCount: 120,
  },
  {
    image: idea2,
    tag: "Project Vision4All",
    title: "Mobile Eye Care Van",
    desc: "Deploy a mobile van equipped with eye checkup facilities to serve remote regions.",
    daysLeft: 29,
    raised: 150000,
    goal: 400000,
    category: "technology",
    sharedCount: 250,
  },
  {
    image: idea3,
    tag: "Project Code4Bangladesh",
    title: "Rural Coding Academy",
    desc: "Build a tech lab in a small-town school to teach coding and robotics to teenagers.",
    daysLeft: 22,
    raised: 110000,
    goal: 300000,
    category: "eco-friendly",
    sharedCount: 80,
  },
  {
    image: idea4,
    tag: "Project LinguaLab",
    title: "Local Language Learning App",
    desc: "Create an app to help children learn English, Bangla, and indigenous languages interactively.",
    daysLeft: 35,
    raised: 210000,
    goal: 500000,
    category: "health",
    sharedCount: 180,
  },
  {
    image: idea5,
    tag: "Project GreenBuild BD",
    title: "Eco-Friendly Brick Project",
    desc: "Support a startup making durable, eco-friendly bricks to reduce pollution from traditional kilns.",
    daysLeft: 10,
    raised: 95000,
    goal: 200000,
    category: "technology",
    sharedCount: 300,
  },
  {
    image: idea6,
    tag: "Project UrbanEase",
    title: "Street Vendor Smart Trolley",
    desc: "A lightweight, modular cart design for street vendors that includes solar charging and storage.",
    daysLeft: 9,
    raised: 60000,
    goal: 90000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea7,
    tag: "Project SafeSip Tech",
    title: "Portable Water Filter Bottle",
    desc: "Launch a lightweight bottle that filters river or pond water for safe drinking — ideal for remote areas.",
    daysLeft: 15,
    raised: 75000,
    goal: 180000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea9,
    tag: "Project EduVerse AI",
    title: "AI Career Guidance Bot for Students",
    desc: "Fund a career assistant chatbot to guide SSC/HSC students based on their skills and interest.",
    daysLeft: 21,
    raised: 130000,
    goal: 250000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea10,
    tag: "Project AgroFly BD",
    title: "Organic Farming Drone Sprayer",
    desc: "Support the prototyping of a drone sprayer that helps organic farmers reduce manual labor.",
    daysLeft: 14,
    raised: 190000,
    goal: 300000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea11,
    tag: "Project Colors of Hope",
    title: "Rohingya Kids Art Therapy Program",
    desc: "Bring trauma healing to refugee children through art therapy and mobile creative centers.",
    daysLeft: 9,
    raised: 42000,
    goal: 90000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea12,
    tag: "Project JuteJoy",
    title: "Women-Led Eco Bag Startup",
    desc: "A women-led initiative producing biodegradable bags from jute and banana fiber.",
    daysLeft: 26,
    raised: 88000,
    goal: 160000,
    category: "education",
    sharedCount: 220,
  },
  {
    image: idea13,
    tag: "Project ReliefWings",
    title: "Disaster Relief Drone Delivery",
    desc: "Deploy drones to quickly deliver emergency food and medical kits to flood and cyclone-affected regions.",
    daysLeft: 27,
    raised: 340000,
    goal: 600000,
    category: "education",
    sharedCount: 220,
  },
];

const ITEMS_PER_PAGE = 9;

export default function IdeaCampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSortBy, setSelectedSortBy] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortBy(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredAndSortedCampaigns = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? campaigns
        : campaigns.filter(
            (campaign) => campaign.category === selectedCategory
          );

    if (searchTerm) {
      filtered = filtered.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          campaign.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
          campaign.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      if (selectedSortBy === "recent") {
        return 0;
      } else if (selectedSortBy === "most-funded") {
        return b.raised - a.raised;
      } else if (selectedSortBy === "ending-soon") {
        return a.daysLeft - b.daysLeft;
      } else if (selectedSortBy === "most-shared") {
        return b.sharedCount - a.sharedCount;
      }
      return 0;
    });

    return sorted;
  }, [selectedCategory, selectedSortBy, searchTerm]);

  const totalPages = Math.ceil(
    filteredAndSortedCampaigns.length / ITEMS_PER_PAGE
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const campaignsForCurrentPage = filteredAndSortedCampaigns.slice(
    startIndex,
    endIndex
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="py-section">
        <div className="flex justify-between flex-col md:flex-row items-center gap-10 md:gap-20 wrapper">
          <div>
            <h1 className="heading-lg text-[#101011] mb-4">
              Discover, Support, and Fuel Big Ideas
            </h1>
            <p className="text-[#434347] lg-text max-w-screen-md mb-6 md:mb-10">
              Explore brilliant ideas from people across Bangladesh — from
              innovative startups to passion projects. Support what inspires you
              and help bring bold visions to life.
            </p>
            <Button variant="default">Start a Campaign</Button>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={CampaignHeroImage}
                alt="Innovative ideas and projects"
                width={540}
                height={580}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Grid Section */}
      <section className="py-section bg-[#F5F5F6]">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row items-start md:items-center mb-10 md:mb-16 gap-4 md:gap-x-8 lg:gap-x-20">
            {/* Categories */}
            <div className="flex items-center gap-2 order-1 md:order-none">
              <span className="lg-text-semibold text-[#3B3B3E]">
                Categories
              </span>
              <div className="relative">
                <select
                  className="border border-[#84858C] px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 text-[#434347] bg-white min-w-[150px] appearance-none"
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                >
                  <option value="all">All Categories</option>
                  <option value="technology">Technology</option>
                  <option value="eco-friendly">Eco-Friendly</option>
                  <option value="health">Health</option>
                  <option value="education">Education</option>
                </select>
                <RiArrowDropDownLine
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-800 pointer-events-none"
                  size={20}
                />
              </div>
            </div>

            {/* Search Input */}
            <div className="flex-grow relative order-3 md:order-none">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search by Categories, Tags, Project names etc"
                className="border border-[#84858C] pl-10 pr-4 py-1 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-600 text-normal-none placeholder-[#ADAEB3]"
                onChange={handleSearchChange}
                value={searchTerm}
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2 order-2 md:order-none">
              <span className="lg-text-semibold text-[#3B3B3E]">Sort by</span>
              <div className="relative">
                <select
                  className="border border-[#84858C] px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 text-[#434347] bg-white min-w-[150px] appearance-none"
                  onChange={handleSortByChange}
                  value={selectedSortBy}
                >
                  <option value="recent">Most Recent</option>
                  <option value="most-funded">Most Funded</option>
                  <option value="ending-soon">Ending Soon</option>
                  <option value="most-shared">Most Shared</option>
                </select>
                <RiArrowDropDownLine
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-800 pointer-events-none"
                  size={20}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignsForCurrentPage.map((campaign, idx) => {
              const percent = Math.min(
                100,
                Math.round((campaign.raised / campaign.goal) * 100)
              );
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#CFD0D2] overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block w-fit text-sm border border-[#DDFBE3] text-[#434347] rounded-full px-3 py-1 mb-2">
                      {campaign.tag}
                    </span>
                    <h3 className="card-title mb-1 text-[#3B3B3E]">
                      {campaign.title}
                    </h3>
                    <p className="text-normal-none text-[#434347] mb-4 flex-1">
                      {campaign.desc}
                    </p>
                    <div className="flex items-center text-xs md:text-sm text-[#5A5B60] mb-2">
                      {campaign.daysLeft} Days Left
                    </div>
                    <div className="mb-2">
                      <div className="w-full h-1 bg-[#D9D9D9] rounded-full overflow-hidden">
                        <div
                          className="h-1 bg-[#199F38] rounded-full transition-all"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm md:text-base text-[#3B3B3E]">
                      <div>
                        <p>
                          Raised:{" "}
                          <span className="font-bold text-[#3B3B3E]">
                            BDT {campaign.raised.toLocaleString()}
                          </span>
                        </p>
                        <p className="text-normal-none text-[#3B3B3E]">
                          Goal:{" "}
                          <span>BDT {campaign.goal.toLocaleString()}</span>
                        </p>
                      </div>
                      <div>
                        <Button variant="default" className="w-full">
                          Invest
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-10 md:mt-16">
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack className="mr-1" /> Previous
            </Button>
            <Button
              variant="default"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next <IoIosArrowForward className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
