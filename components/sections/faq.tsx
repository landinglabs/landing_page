import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full py-20 lg:py-40 p-8">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Perguntas Frequentes
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Tire suas dúvidas sobre nossos serviços de desenvolvimento de Landing Pages, E-commerce e CRM.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Alguma pergunta? Fale com a gente <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>
              O que é uma Landing Page e por que eu preciso de uma?
            </AccordionTrigger>
            <AccordionContent>
              Uma Landing Page é uma página web projetada para converter visitantes em leads ou clientes, geralmente focada em um único objetivo, como capturar informações de contato ou promover um produto específico. Se você está lançando uma campanha de marketing ou promovendo um produto/serviço, uma Landing Page eficaz pode aumentar suas taxas de conversão e otimizar o ROI de suas campanhas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>
              Quanto tempo leva para desenvolver uma Landing Page?
            </AccordionTrigger>
            <AccordionContent>
              O tempo para desenvolver uma Landing Page pode variar dependendo da complexidade do projeto e dos requisitos específicos do cliente. Em geral, uma Landing Page simples pode ser desenvolvida em 1 a 2 semanas. Para projetos mais personalizados, o prazo pode ser maior, mas nós sempre trabalhamos para entregar dentro do prazo combinado.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>
              O que é um e-commerce e como vocês podem ajudar a criar o meu?
            </AccordionTrigger>
            <AccordionContent>
              Um e-commerce é uma plataforma online que permite vender produtos ou serviços diretamente pela internet. Oferecemos soluções completas para o desenvolvimento de lojas virtuais, desde o design e desenvolvimento até a integração com sistemas de pagamento e logística, garantindo que sua loja esteja pronta para começar a vender rapidamente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>
              Quais funcionalidades posso incluir no meu e-commerce?
            </AccordionTrigger>
            <AccordionContent>
              Nosso serviço de desenvolvimento de e-commerce é altamente personalizável. Podemos incluir funcionalidades como carrinho de compras, sistema de pagamento integrado, controle de estoque, rastreamento de pedidos, programa de fidelidade, avaliação de produtos, integração com redes sociais e muito mais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>
              O que é um CRM e como ele pode beneficiar o meu negócio?
            </AccordionTrigger>
            <AccordionContent>
              CRM (Customer Relationship Management) é um sistema que ajuda a gerenciar o relacionamento da sua empresa com clientes e potenciais clientes. Ele permite armazenar informações de contato, acompanhar interações e automatizar processos de vendas e marketing. Um CRM bem implementado pode melhorar significativamente a eficiência da sua equipe e aumentar a satisfação do cliente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>
              Vocês oferecem soluções de CRM personalizadas?
            </AccordionTrigger>
            <AccordionContent>
              Sim! Desenvolvemos soluções de CRM personalizadas que atendem às necessidades específicas do seu negócio. Isso inclui a integração com outras ferramentas que você já utiliza, automação de tarefas repetitivas, relatórios detalhados, e uma interface adaptada para facilitar o uso pelos seus colaboradores.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>
              Quais são as etapas de um projeto de desenvolvimento com vocês?
            </AccordionTrigger>
            <AccordionContent>
              Nosso processo de desenvolvimento segue etapas claras para garantir a entrega de soluções de alta qualidade:
              <ol className="list-decimal pl-5">
              <p><br /></p>
                <li>
                  <strong>Briefing e Entendimento do Projeto:</strong> Realizamos uma reunião inicial para compreender suas necessidades e objetivos. Esta etapa é fundamental para alinharmos expectativas e definirmos o escopo do projeto.
                </li>
                <li>
                  <strong>Proposta e Planejamento:</strong> Desenvolvemos uma proposta detalhada com uma visão geral do projeto, incluindo prazos, custos e etapas. Em seguida, criamos um cronograma que orientará o desenvolvimento.
                </li>
                <li>
                  <strong>Design e Aprovação:</strong> Criamos o design visual do projeto e o submetemos à sua revisão. Trabalhamos juntos para garantir que o design esteja alinhado com suas expectativas antes de prosseguir para a próxima fase.
                </li>
                <li>
                  <strong>Desenvolvimento:</strong> Com o design aprovado, iniciamos a construção da solução digital conforme as especificações definidas. Esta fase inclui a codificação e a integração de funcionalidades.
                </li>
                <li>
                  <strong>Testes e Ajustes:</strong> Realizamos testes rigorosos para identificar e corrigir possíveis problemas. Garantimos que todas as funcionalidades estejam operando corretamente e ajustamos qualquer detalhe necessário.
                </li>
                <li>
                  <strong>Entrega e Lançamento:</strong> Finalizamos o projeto e o entregamos. Oferecemos suporte durante o lançamento para garantir que tudo corra bem e que você esteja totalmente satisfeito com o resultado.
                </li>
              </ol>
            </AccordionContent>

          </AccordionItem>
          <AccordionItem value="faq-8">
            <AccordionTrigger>
              Posso solicitar atualizações ou manutenção após o desenvolvimento?
            </AccordionTrigger>
            <AccordionContent>
              Sim! Oferecemos pacotes de manutenção e suporte contínuos para garantir que seu site, e-commerce ou CRM esteja sempre atualizado, seguro e funcionando sem problemas. Estamos aqui para apoiar o crescimento do seu negócio a longo prazo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
