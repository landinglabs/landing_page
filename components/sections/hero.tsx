import { MoveRight, PhoneCallIcon, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
          Desbloqueando Inovações, Moldando o Futuro
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
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
);