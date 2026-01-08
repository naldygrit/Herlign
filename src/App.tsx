import { Header } from "./components/Header";
import { Approach } from "./components/Approach";
import { Footer } from "./components/Footer";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { CompanyLogos } from "./components/CompanyLogos";
import { VentureBanner } from "./components/VentureBanner";
import { Reveal } from "./components/Reveal";
import { ImpactImages } from "./components/ImpactImages";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-herlign-accent selection:text-herlign-dark">
      <Reveal width="100%">
        <Header />
      </Reveal>

      <Reveal width="100%">
        <WhatWeOffer />
      </Reveal>

      <Reveal width="100%">
        <ImpactImages />
      </Reveal>

      <Reveal width="100%">
        <CompanyLogos />
      </Reveal>

      <Reveal width="100%">
        <VentureBanner />
      </Reveal>

      <Reveal width="100%">
        <Approach />
      </Reveal>

      <Footer />
    </div>
  );
}

export default App;
