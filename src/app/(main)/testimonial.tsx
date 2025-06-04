import React from "react";
import Image from "next/image";

import avater4 from "@/assets/avater/avater4.png";
import avater5 from "@/assets/avater/avater5.png";
import avater6 from "@/assets/avater/avater6.png";
import avater7 from "@/assets/avater/avater7.png";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "“Tohbil helped me fund my tech startup idea within 30 days. The process was seamless and support was outstanding.”",
      name: "Arefin Hossain",
      title: "Campaign Creator",
      avatar: avater4,
    },
    {
      quote:
        "“Supporting causes through Tohbil is fast and trustworthy. I loved how easy it was to donate via bKash.”",
      name: "Sumaiya Rahman",
      title: "Donor",
      avatar: avater5,
    },
    {
      quote:
        "“I had no experience in fundraising, but Tohbil’s guided steps made it all simple. The dashboard is amazing!”",
      name: "Tanvir Ahmed",
      title: "Social Campaigner",
      avatar: avater6,
    },
    {
      quote:
        "“Our NGO raised enough for winter blankets in just two weeks. Tohbil gave us the reach we never had before.”",
      name: "Jahanara Begum",
      title: "NGO Organizer",
      avatar: avater7,
    },
  ];

  return (
    <section className="py-section bg-[#E0FBDD]">
      <h2 className="heading text-[#3B3B3E] mb-10 md:mb-16 text-center">
        Real Stories from Our Community
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="pt-16 pb-16">
          <div className="flex animate-marquee flex-nowrap">
            {[
              ...testimonials,
              ...testimonials,
              ...testimonials,
              ...testimonials,
              ...testimonials,
              ...testimonials,
              ...testimonials,
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[360px] bg-white rounded-lg p-6 mx-4 ${
                  index % 2 === 0 ? "translate-y-up" : "translate-y-down"
                }`}
              >
                <div className="flex items-start mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-6"
                  />
                </div>
                <div className="flex-grow">
                  <p className="lg-text-medium text-[#3B3B3E] mb-10">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-bold text-[#3B3B3E] text-lg md:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="text-normal text-[#434347]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
