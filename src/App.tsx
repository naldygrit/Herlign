import { Header } from "./components/Header";
import { About } from "./components/About";
import { Challenge } from "./components/Challenge";
import { Approach } from "./components/Approach";
import { Impact } from "./components/Impact";
import { Initiatives } from "./components/Initiatives";
import { Testimonial } from "./components/Testimonial";
import { Vision } from "./components/Vision";
import { Footer } from "./components/Footer";
import { HeroGrid } from "./components/HeroGrid";
import { CompanyLogos } from "./components/CompanyLogos";
import { VentureBanner } from "./components/VentureBanner";
import { Reveal } from "./components/Reveal";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-herlign-accent selection:text-herlign-dark">
      <Reveal width="100%">
        <Header />
      </Reveal>
      <Reveal width="100%">
        <HeroGrid />
      </Reveal>
      <Reveal width="100%">
        <CompanyLogos />
      </Reveal>
      <Reveal width="100%">
        <VentureBanner />
      </Reveal>
      <Reveal width="100%">
        <About />
      </Reveal>
      <Reveal width="100%">
        <Challenge />
      </Reveal>
      <Reveal width="100%">
        <Approach />
      </Reveal>
      <Reveal width="100%">
        <Impact />
      </Reveal>
      <Reveal width="100%">
        <Initiatives />
      </Reveal>
      <Reveal width="100%">
        <Testimonial />
      </Reveal>
      {/* <Reveal width="100%">
        <Vision />
      </Reveal> */}
      <Footer />
    </div>
  );
}

export default App;
