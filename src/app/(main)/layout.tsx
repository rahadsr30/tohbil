import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
