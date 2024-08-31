import { Contacts } from "@/components/sections/contacts";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 overflow-hidden">
      <Hero />
      <Features header="Landing Page" description="Tenha uma landing page para alavancar seu negócio" bulletpoints={[{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description: 'Aumento das Conversões'}]} />
      <Features header="Landing Page" description="Tenha uma landing page para alavancar seu negócio" bulletpoints={[{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description: 'Aumento das Conversões'}]}/>
      <Features header="Landing Page" description="Tenha uma landing page para alavancar seu negócio" bulletpoints={[{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description:'Aumento das Conversões'},{name:'Aumento das Conversões',description: 'Aumento das Conversões'}]}/>
      <Stats />
      <Contacts />
      <FAQ />
    </main>
  );
}
