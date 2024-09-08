import { Check, PhoneCallIcon, RocketIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

interface FeaturesProps {
  header: string;
  description: string;
  bulletpoints: Array<BulletPoint>;
  anchor: string;
}

interface BulletPoint {
  name: string;
  description: string;
}

export const Features = (props: FeaturesProps) => (
  <div className="w-full pt-10 lg:py-40">
    <div className="class-element-anchor" id={props.anchor}></div>
    <div className="container mx-auto">
      <div className="grid rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                {props.header}
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                {props.description}
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {props.bulletpoints.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex flex-row gap-6 items-start"
                >
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 lg:w-full lg:content-stretch">
            <Button size="lg" className="gap-4">
            Venha explorar mais <RocketIcon className="w-4 h-4" />
            </Button>
          </div>
    </div>
  </div>
);
