import Hero from "@/components/sections/1 - Hero";
import Information from "@/components/sections/2 - Information";
import SectionThree from "@/components/sections/3 - SectionThree";
import Footer from "@/components/sections/4 - Footer";


export default function Home() {
  return (
    <div className="flex-col flex w-screen overflow-x-hidden scroll-smooth">  
      <Hero />
      <Information />
      <SectionThree />
      <Footer />
    </div>
  );
}
