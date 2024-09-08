import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";

export default function LandingPages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 overflow-hidden">
      <Features header="Landing Page" description="Tenha uma landing page para alavancar seu negócio" bulletpoints={[{ name: 'Design Personalizado', description: 'Alinhado à sua marca para maior engajamento.' }, { name: 'Otimização para Conversões', description: 'Transforme visitantes em leads qualificados.' }, { name: 'Integração de Marketing', description: 'Conecte-se facilmente às suas ferramentas de marketing.' }]} anchor={"landingpage"} />
      <Pricing></Pricing>
    </main>
  );
}
