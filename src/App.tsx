import { useEffect, useRef, useState } from "react";

import { SectionHero } from "./components/SectionHero";
import { SectionInfo } from "./components/SectionInfo";
import { SectionHelix } from "./components/SectionHelix";
import { SectionVideo } from "./components/SectionVideo";
import { SectionModels } from "./components/SectionModels";
import { FloatingHeadphone } from "./components/FloatingHeadphone";
import { Footer } from "./components/Footer";

import { renderGsapAnimation } from "./Gsap.config";

import "./App.css";

export function App() {
  const [isHeadphoneDocked, setIsHeadphoneDocked] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const headphoneRef = useRef<HTMLImageElement | null>(null);

  const sectionInfoRef = useRef<HTMLElement | null>(null);
  const sectionHelixRef = useRef<HTMLElement | null>(null);
  const sectionVideoRef = useRef<HTMLElement | null>(null);
  const sectionModelsRef = useRef<HTMLElement | null>(null);

  const headphoneTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cleanup = renderGsapAnimation(
      sectionInfoRef,
      headphoneRef,
      wrapperRef,
      sectionModelsRef,
      setIsHeadphoneDocked,
    );

    return cleanup;
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full bg-bg font-sans text-dark">
      <FloatingHeadphone headphoneRef={headphoneRef} />

      <SectionHero />

      <SectionInfo sectionRef={sectionInfoRef} />

      <SectionHelix sectionRef={sectionHelixRef} />

      <SectionVideo sectionRef={sectionVideoRef} />

      <SectionModels
        sectionRef={sectionModelsRef}
        headphoneTargetRef={headphoneTargetRef}
        isHeadphoneDocked={isHeadphoneDocked}
      />

      <Footer />
    </div>
  );
}

export default App;
