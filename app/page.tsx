import { Contacts } from "@/components/sections/contacts";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Partners } from "@/components/sections/partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Partners />
      <FAQ />
    </main>
  );
}
