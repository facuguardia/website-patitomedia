// import { CallToAction } from "./components/CallToAction";
import { Clients } from "./components/Clients";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      {/* <CallToAction /> */}
    </div>
  );
}
