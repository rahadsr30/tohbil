"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import category1 from "@/assets/category/category1.png";
import category2 from "@/assets/category/category2.png";
import category3 from "@/assets/category/category3.png";
import category4 from "@/assets/category/category4.png";
import category5 from "@/assets/category/category5.png";
import category6 from "@/assets/category/category6.png";
import category7 from "@/assets/category/category7.png";
import category8 from "@/assets/category/category8.png";
import category9 from "@/assets/category/category9.png";

const categories = [
  { title: "Social Causes", image: category1 },
  { title: "Innovative Startups", image: category2 },
  { title: "Arts and Culture", image: category3 },
  { title: "Eco-Friendly Projects", image: category4 },
  { title: "Health and Wellness", image: category5 },
  { title: "Education", image: category6 },
  { title: "Community Development", image: category7 },
  { title: "Technology", image: category8 },
  { title: "Business", image: category9 },
];

export default function Category() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate the amount to scroll based on item width and gap
  const itemWidth = 180; // px
  const gapWidth = 24; // 1.5rem in px (assuming 1rem = 16px)
  const scrollAmount = itemWidth + gapWidth;

  // Handle clicking the previous arrow
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle clicking the next arrow
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grabbing";
    }
  };

  // Handle mouse leave event to stop dragging if mouse leaves the container
  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  // Handle mouse move event while dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="py-section text-center">
      <div className="wrapper">
        <h2 className="heading mb-10 md:mb-16 text-[#3B3B3E]">
          Explore by Category
        </h2>
        {/* Main container with relative positioning for arrow overlays */}
        <div className="relative mx-auto max-w-full">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 border-none bg-[#F0FDF2] rounded-full w-8 h-8 flex items-center justify-center text-xl cursor-pointer shadow-md hover:bg-[#d4e9d7] transition-colors duration-200"
            aria-label="Scroll left"
          >
            <span className="text-green-700">
              <MdKeyboardArrowLeft />
            </span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 border-none bg-[#F0FDF2] rounded-full w-8 h-8 flex items-center justify-center text-xl cursor-pointer shadow-md hover:bg-[#d4e9d7] transition-colors duration-200"
            aria-label="Scroll right"
          >
            <span className="text-green-700">
              <MdKeyboardArrowRight />
            </span>
          </button>

          {/* Category Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto cursor-grab select-none w-full scroll-smooth px-4 sm:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="w-[140px] sm:w-[160px] md:w-[180px] rounded-[20px] overflow-hidden shadow-md bg-white relative flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={180}
                  height={160}
                  className="object-cover w-full h-full block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
