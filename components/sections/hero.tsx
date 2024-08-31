import { PhoneCallIcon, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Chegamos!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular font-bold">
              Desbloqueando Inovações, Moldando o Futuro
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Aumente o potencial da tecnologia com nossas soluções de ponta, projetadas para impulsionar o seu sucesso.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Venha explorar mais <RocketIcon className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Comece agora! <PhoneCallIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  </div>
);
