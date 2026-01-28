import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const Partners = () => (
    <div className="w-full py-20 lg:py-40 p-8 bg-white dark:bg-white">
        <div className="container mx-auto">
            <div className="flex gap-4 flex-col items-center">
                <div>
                    <Badge className="bg-black text-white hover:bg-black">Parceiros</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                    <h2 className="text-xl md:text-5xl tracking-tighter max-w-xl font-regular text-center font-bold text-black">
                        Nossos Parceiros
                    </h2>
                    <p className="text-lg max-w-xl leading-relaxed tracking-tight text-gray-600 text-center">
                        Colaboramos com as melhores empresas para oferecer soluções
                        excepcionais.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl mt-8">
                    <Link href="https://neuromod.med.br" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 items-center justify-center p-10 border border-gray-200 rounded-lg hover:shadow-xl transition-all hover:border-gray-300 cursor-pointer">
                        <div className="w-48 h-48 flex items-center justify-center relative bg-gray-50 rounded-lg p-6">
                            <Image
                                src="/assets/neuromod-logo.png"
                                alt="Neuromod"
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-black tracking-tight">Neuromod</h3>
                    </Link>
                    <Link href="https://ina.med.br" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 items-center justify-center p-10 border border-gray-200 rounded-lg hover:shadow-xl transition-all hover:border-gray-300 cursor-pointer">
                        <div className="w-48 h-48 flex items-center justify-center relative bg-gray-50 rounded-lg p-6">
                            <Image
                                src="/assets/ina-logo.png"
                                alt="Instituto de Neurociências Aplicada"
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-black tracking-tight">Instituto de Neurociências Aplicada</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
