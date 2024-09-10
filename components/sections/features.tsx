import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Features = () => {
  const features = [
    {
      header: "Soluções Digitais",
      description:
        "Tenha um site de alta conversão e/ou aplicativo e faça seu negócio decolar!",
      bulletpoints: [
        {
          name: "Aplicativos Sob Medida",
          description:
            "Leve sua ideia para o mobile com um app envolvente e funcional!",
        },
        {
          name: "Websites Poderosos",
          description:
            "Tenha um site rápido, seguro e pronto para converter mais!",
        },
        {
          name: "E-commerce de Alta Conversão",
          description:
            "Venda mais com uma loja virtual personalizada eeficiente!",
        },
      ],
    },
    {
      header: "Integração entre sistemas",
      description:
        "Automatize processos e conecte suas plataformas para operar sem limites!",
      bulletpoints: [
        {
          name: "APIs Personalizadas",
          description:
            "Conecte sistemas de forma rápida e segura com APIs feitas sob medida!",
        },
        {
          name: "Integração de Sistemas",
          description:
            "Unifique plataformas e automações para otimizar sua operação!",
        },
        {
          name: "Automação Inteligente",
          description:
            "Aumente a eficiência automatizando processos e eliminando retrabalhos!",
        },
      ],
    },
    {
      header: "IA Aplicada",
      description:
        "Acelere seu crescimento com soluções de inteligência artificial sob medida!",
      bulletpoints: [
        {
          name: "IA para Negócios",
          description:
            "Potencialize seu crescimento com soluções de IA sob medida!",
        },
        {
          name: "Automação Inteligente",
          description:
            "Aumente a produtividade automatizando tarefas complexas!",
        },
        {
          name: "Análises Preditivas",
          description:
            "Antecipe tendências e tome decisões mais assertivas com IA!",
        },
      ],
    },
  ];

  return (
    <div className="w-full p-8" id="features">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-5xl text-center font-bold">
              Conheça nossos produtos
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-5xl text-center">
              Descubra soluções inovadoras e de alta qualidade, projetadas para
              atender às suas necessidades e transformar a sua experiência de
              compra.
            </p>
          </div>
          <div className="grid text-left grid-cols-1 lg:grid-cols-3 w-full gap-8 mt-16">
            {features.map((item) => (
              <Card
                className="w-full rounded-md flex flex-col justify-between"
                key={item.header}
              >
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      {item.header}
                    </span>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <div className="flex flex-col gap-4 justify-start">
                      {item.bulletpoints.map((bulletpoint) => (
                        <div
                          className="flex flex-row gap-4"
                          key={bulletpoint.name}
                        >
                          <Check className="w-4 h-4 mt-2 text-primary" />
                          <div className="flex flex-col">
                            <p>{bulletpoint.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {bulletpoint.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="gap-4">
                    Saiba mais <MoveRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
