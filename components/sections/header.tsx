"use client";

import { Button } from "@/components/ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="px-8 w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row"></div>
        <div className="flex lg:justify-center">
          <p className="font-semibold">LandingLabs™</p>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button className="hidden md:inline" variant="outline">Nossos produtos</Button>
          <Separator className="min-h-10 h-full hidden md:inline" orientation="vertical" />

          <Button>Entre em contato</Button>
        </div>
      </div>
    </header>
  );
};
