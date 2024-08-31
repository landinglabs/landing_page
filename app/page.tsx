import { Contacts } from "@/components/sections/contacts";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Features />
      <Stats />
      <Contacts />
      <FAQ />
    </main>
  );
}
