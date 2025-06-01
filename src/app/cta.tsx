import React from "react";
import cta from "@/assets/CTA.png";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-section bg-white">
      <div className="wrapper">
        <Image src={cta} alt="cta" className="mb-10 h-full w-full" />
      </div>
    </section>
  );
}
