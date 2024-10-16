import { CallToAction } from "./components/CallToAction";
import { Clients } from "./components/Clients";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Clients />
      <Services />
      <Pricing />
      <CallToAction />
      <Contact />
    </div>
  );
}
