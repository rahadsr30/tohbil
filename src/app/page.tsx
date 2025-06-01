import Crowdfunding from "./crowdfunding";
import Discover from "./discover";
import Funding from "./funding";
import Hero from "./hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Funding />
      <Discover />
      <Crowdfunding />
    </>
  );
}
