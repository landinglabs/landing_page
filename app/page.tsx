import { Contacts } from "@/components/sections/contacts";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 overflow-hidden">
      <Hero />
      <Features header="Landing Page" description="Tenha uma landing page para alavancar seu negócio" bulletpoints={[{name:'Design Personalizado',description:'Alinhado à sua marca para maior engajamento.'},{name:'Otimização para Conversões',description:'Transforme visitantes em leads qualificados.'},{name:'Integração de Marketing',description: 'Conecte-se facilmente às suas ferramentas de marketing.'}]} />
      <Features header="E-Commerce" description="Impulsione suas vendas com nosso E-commerce sob medida" bulletpoints={[{name:'Plataforma Personalizada',description:'Alinhada à sua marca para atrair mais clientes.'},{name:'Otimização de Vendas',description:'Converta visitantes em compradores com facilidade.'},{name:'Integração Completa',description: 'Conecte-se às principais ferramentas de marketing.'}]}/>
      <Features header="CRM" description="Melhore suas relações com nosso CRM sob medida" bulletpoints={[{name:'Personalização Total',description:'Alinhado às suas necessidades para melhor gestão de clientes.'},{name:'Otimização de Processos',description:'Automatize tarefas e melhore a eficiência.'},{name:'Integração Fácil',description: 'Conecte-se às suas ferramentas favoritas sem complicações.'}]}/>
      <Stats />
      <Contacts />
      <FAQ />
    </main>
  );
}
