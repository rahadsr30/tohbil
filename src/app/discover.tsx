import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import discover1 from "@/assets/discover/discover1.png";
import discover2 from "@/assets/discover/discover2.png";
import discover3 from "@/assets/discover/discover3.png";
import discover4 from "@/assets/discover/discover4.png";
import discover5 from "@/assets/discover/discover5.png";
import discover6 from "@/assets/discover/discover6.png";

const projects = [
  {
    image: discover1,
    tag: "Project GreenSip",
    title: "Eco-Friendly Water Bottles",
    desc: "Support our mission to reduce plastic waste with our reusable, eco-friendly water bottles.",
    daysLeft: 10,
    raised: 35000,
    goal: 50000,
  },
  {
    image: discover2,
    tag: "Project TechForAll",
    title: "Affordable Laptops for Students",
    desc: "Help bridge the digital divide by contributing to our initiative for providing laptops to underprivileged students.",
    daysLeft: 15,
    raised: 50000,
    goal: 100000,
  },
  {
    image: discover3,
    tag: "Project CleanCity",
    title: "Urban Clean-Up Campaign",
    desc: "Join us in making our cities cleaner and greener through community-led clean-up events.",
    daysLeft: 20,
    raised: 20000,
    goal: 75000,
  },
  {
    image: discover4,
    tag: "Project ArtReach",
    title: "Art for All",
    desc: "Help us bring art education to underprivileged children in rural areas.",
    daysLeft: 12,
    raised: 75000,
    goal: 100000,
  },
  {
    image: discover5,
    tag: "Project Techlyn",
    title: "Tech Startup Accelerator",
    desc: "Invest in the future of technology with our startup accelerator program.",
    daysLeft: 15,
    raised: 150000,
    goal: 200000,
  },
  {
    image: discover6,
    tag: "Project Bright10",
    title: "Fund Education for 10 Rohingya Children",
    desc: "Your contribution can help provide books, uniforms, and access to learning for displaced children.",
    daysLeft: 9,
    raised: 190000,
    goal: 300000,
  },
];

export default function Discover() {
  return (
    <section className="w-full bg-[#F5F5F6] py-10 md:py-16 border-t border-[#ADAEB3]">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const percent = Math.min(
              100,
              Math.round((project.raised / project.goal) * 100)
            );
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#CFD0D2] overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-block w-fit text-normal-none border border-[#DDFBE3] text-[#434347] rounded-full px-3 py-1 mb-2">
                    {project.tag}
                  </span>
                  <h3 className="card-title mb-1 text-[#3B3B3E]">
                    {project.title}
                  </h3>
                  <p className="text-normal-none text-[#434347] mb-4 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex items-center text-xs md:text-sm text-[#5A5B60] mb-2">
                    {project.daysLeft} Days Left
                  </div>
                  <div className="mb-2">
                    <div className="w-full h-1 bg-[#D9D9D9] rounded-full overflow-hidden">
                      <div
                        className="h-1 bg-[#199F38] rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className=" text-sm md:text-base text-[#3B3B3E]">
                      <p>
                        Raised:{" "}
                        <span className="font-bold text-[#3B3B3E]">
                          BDT {project.raised.toLocaleString()}
                        </span>
                      </p>
                      <p className="text-normal-none text-[#3B3B3E]">
                        Goal: <span>BDT {project.goal.toLocaleString()}</span>
                      </p>
                    </div>
                    <div>
                      <Button variant="default" className="w-full">
                        Donate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
