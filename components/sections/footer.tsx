import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Produtos",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Soluções Digitais",
          href: "#features",
        },
        {
          title: "Integração entre sistemas",
          href: "#features",
        },
        {
          title: "IA Aplicada",
          href: "#features",
        },
      ],
    },
    {
      title: "Empresa",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Fale conosco",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20 lg:py-40 bg-foreground text-background p-8 md:p-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Landing Labs™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Comece aqui sua transformação digital.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start justify-end">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-background/75">
                          {subItem.title}
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
