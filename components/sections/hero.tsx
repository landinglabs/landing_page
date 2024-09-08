import { MoveRight, PhoneCallIcon, RocketIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => (
  <div className="w-full relative overflow-hidden py-12 lg:py-16 ">
    <div
      aria-hidden="true"
      className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 -z-10"
    >
      <div className=" -z-10 bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
      <div className=" -z-10 bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
    </div>
    <div className="class-element-home-anchor" id="home"></div>
    <div className="container mx-auto z-10 px-8">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular font-bold">
            Desbloqueando Inovações, Moldando o Futuro
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Aumente o potencial da tecnologia com nossas soluções de ponta,
            projetadas para impulsionar o seu sucesso.
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
