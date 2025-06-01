import Category from "./category";
import Crowdfunding from "./crowdfunding";
import CTA from "./cta";
import Discover from "./discover";
import Funding from "./funding";
import Hero from "./hero";
import Testimonial from "./testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Funding />
      <Discover />
      <Crowdfunding />
      <Category />
      <Testimonial />
      <CTA />
    </>
  );
}
