import { Contacts } from "@/components/sections/contacts";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 overflow-hidden">
      <Hero />
      <Features header="Soluções Digitais" description="Tenha um site de alta conversão e/ou aplicativo e faça seu negócio decolar!" bulletpoints={[{ name: 'Aplicativos Sob Medida', description: 'Leve sua ideia para o mobile com um app envolvente e funcional!' }, { name: 'Websites Poderosos', description: 'Tenha um site rápido, seguro e pronto para converter mais!' }, { name: 'E-commerce de Alta Conversão', description: 'Venda mais com uma loja virtual personalizada e eficiente!' }]} anchor={"digitalsolution"} />
      <Features header="Conexões Inteligentes" description="Automatize processos e conecte suas plataformas para operar sem limites!" bulletpoints={[{ name: 'APIs Personalizadas', description: 'Conecte sistemas de forma rápida e segura com APIs feitas sob medida!' }, { name: 'Integração de Sistemas', description: 'Unifique plataformas e automações para otimizar sua operação!' }, { name: 'Automação Inteligente', description: 'Aumente a eficiência automatizando processos e eliminando retrabalhos!' }]} anchor={"smartintegration"}/>
      <Features header="IA Aplicada" description="Acelere seu crescimento com soluções de inteligência artificial sob medida!" bulletpoints={[{ name: 'IA para Negócios', description: 'Potencialize seu crescimento com soluções de IA sob medida!' }, { name: 'Automação Inteligente', description: 'Aumente a produtividade automatizando tarefas complexas!' }, { name: 'Análises Preditivas', description: 'Antecipe tendências e tome decisões mais assertivas com IA!' }]} anchor={"ai"}/>
      <Stats />
      <FAQ />
    </main>
  );
}
