import Category from "./category";
import Crowdfunding from "./crowdfunding";
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
    </>
  );
}
