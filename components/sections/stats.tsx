import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats = () => (
  <div className="w-full py-20 lg:py-40 p-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Resultados</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left font-bold">
              Resultados Reais da Transformação Digital
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Descubra como a transformação digital pode revolucionar sua
              empresa com ganhos expressivos em receita, eficiência, satisfação
              do cliente e velocidade de mercado.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                23%
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Aumento da Receita
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                30%
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Redução de Custos Operacionais
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                20%
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Melhoria na Satisfação do Cliente
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                50%
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Aceleração do Tempo de Mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
