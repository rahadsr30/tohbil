import { Button } from "@/components/ui";
import React from "react";

export default function CTA() {
  return (
    <section className="py-section  relative">
      <div className="wrapper">
        <div className="flex flex-col items-center text-center rounded-xl z-10 relative overflow-hidden bg-[url('/cta.png')] bg-cover bg-center h-full text-white px-10 lg:px-0 py-16 md:py-28 lg:py-40">
          <h2 className="text-[#101011] heading mb-3">
            Ready to Make a Difference?
          </h2>
          <p className=" text-[#434347] lg-text-medium max-w-screen-sm mb-10">
            Whether you&apos;re a creator looking to launch a project or a
            supporter eager to back a cause, Tohbil is here to help you achieve
            your goals.
          </p>
          <div className="flex space-x-4">
            <Button variant="default">Start a Campaign</Button>
            <Button variant="outline">Explore Campaign&apos;s</Button>
          </div>
        </div>
      </div>
      {/* Decorative elements are part of the background image */}
    </section>
  );
}
