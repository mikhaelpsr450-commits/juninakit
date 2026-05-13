import React, { useState, useEffect } from "react";
import { 
  Play, 
  ChevronRight, 
  ChevronLeft, 
  Mail, 
  Printer, 
  BookOpen, 
  CheckCircle2, 
  ChevronDown,
  Star,
  Check,
  ShieldCheck
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Import stock images
import heroBg from "@assets/stock_images/colorful_eva_foam_sh_59dfdb75.jpg";
import slide1 from "@assets/stock_images/kids_in_classroom_le_b8e756c7.jpg";
import slide2 from "@assets/stock_images/kids_in_classroom_le_23e6cce6.jpg";
import slide3 from "@assets/stock_images/kids_in_classroom_le_d60b13fe.jpg";
import learnIcon from "@assets/stock_images/happy_child_holding__5bdc9d4e.jpg";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({ name: "", city: "" });

  const buyers = [
    { name: "Patrícia", city: "São Paulo" },
    { name: "Mariana", city: "Rio de Janeiro" },
    { name: "Luciana", city: "Curitiba" },
    { name: "Beatriz", city: "Belo Horizonte" },
    { name: "Fernanda", city: "Porto Alegre" },
    { name: "Cláudia", city: "Salvador" },
    { name: "Renata", city: "Fortaleza" },
    { name: "Juliana", city: "Recife" },
    { name: "Camila", city: "Goiânia" },
    { name: "Aline", city: "Manaus" },
    { name: "Sandra", city: "Belém" },
    { name: "Marta", city: "Natal" },
    { name: "Bruna", city: "Vitória" },
    { name: "Carla", city: "Florianópolis" },
    { name: "Daniela", city: "Cuiabá" }
  ];

  useEffect(() => {
    const showRandomNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentNotification(randomBuyer);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showRandomNotification();
    }, 12000);

    // Initial delay
    setTimeout(showRandomNotification, 3000);

    // Smartplayer SDK
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      clearInterval(interval);
      if (document.head.contains(s)) {
        document.head.removeChild(s);
      }
    };
  }, []);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const testimonials = [
    "https://imgur.com/xEwLgHB.png",
    "https://imgur.com/oCZzH1K.png",
    "https://imgur.com/ICT11ze.png",
    "https://imgur.com/6ZW38qv.png"
  ];

  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Urgency Banner */}
      <div className="bg-brand-red text-white py-2 px-4 text-center text-sm font-medium">
        ⚡ Desconto só <span className="text-brand-yellow font-bold">HOJE</span> nessa página {formattedDate}
      </div>

      <div className="max-w-md mx-auto px-4 sm:max-w-lg md:max-w-2xl">
        {/* Hero Section */}
        <header className="py-8 text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            5.000 Moldes de EVA para Aulas, Decoração e Lembrancinhas
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tudo organizado para apoiar quem trabalha com EVA, seja em sala de aula ou no artesanato.
          </p>

          {/* VSL Video */}
          <div className="mt-8">
            <div id="ifr_696e608110d72bdc9f369c5a_wrapper" style={{ margin: "0 auto", width: "100%", maxWidth: "400px" }}>
              <div style={{ position: "relative", padding: "177.77777777777777% 0 0 0" }} id="ifr_696e608110d72bdc9f369c5a_aspect">
                <iframe 
                  frameBorder="0" 
                  allowFullScreen 
                  src="https://scripts.converteai.net/b3d1a520-ab98-4a63-bc66-0b40a4eb3ecb/players/696e608110d72bdc9f369c5a/v4/embed.html"
                  id="ifr_696e608110d72bdc9f369c5a" 
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                  referrerPolicy="origin"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Button below Video */}
          <div className="pt-4">
            <Button 
              onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-tight px-4 leading-tight"
            >
              <span className="shrink-0">👉</span> <span>Quero meus 5.000 Moldes</span>
            </Button>
          </div>
        </header>

        {/* What You Will Receive Section */}
        <section className="py-12 space-y-8">
          <h2 className="text-3xl font-black text-center text-gray-900 font-display">
            O Que Você Vai Receber
          </h2>
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-brand-purple shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Moldes Prontos em PDF</h3>
                  <p className="text-gray-600 text-sm">Mais de 2000 moldes de alta qualidade (animais, heróis, flores, natal, páscoa e mais).</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-yellow shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Printer className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Pronto para Imprimir (A4)</h3>
                  <p className="text-gray-600 text-sm">Arquivos formatados no tamanho exato para folha A4. É só imprimir, recortar e usar no EVA.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-brand-green shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Acesso Vitalício</h3>
                  <p className="text-gray-600 text-sm">Compre uma única vez e tenha acesso para sempre, com downloads ilimitados de todos os arquivos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Bonuses Section */}
        <section className="py-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 font-display">
              E ainda você recebe 5 Bônus Grátis:
            </h2>
          </div>
          <div className="grid gap-8">
            {[
              {
                name: "Certificado de Conclusão",
                desc: "Certificado digital para valorizar seu aprendizado e comprovar a conclusão do material.",
                img: "https://imgur.com/4fdkVdn.png",
                price: "R$ 47,00"
              },
              {
                name: "+2.500 Moldes de Feltro",
                desc: "Uma coleção extra de moldes prontos para criar peças em feltro com mais variedade e criatividade.",
                img: "https://imgur.com/x0PYYoQ.png",
                price: "R$ 67,00"
              },
              {
                name: "Lista de Fornecedores Baratos",
                desc: "Indicações de fornecedores com bom custo-benefício para comprar materiais e economizar no dia a dia.",
                img: "https://imgur.com/Vz1hwB6.png",
                price: "R$ 27,00"
              },
              {
                name: "Painéis Educativos para Sala de Aula",
                desc: "Ideias prontas de painéis educativos para decorar e apoiar o aprendizado em sala.",
                img: "https://imgur.com/1JgtLqr.png",
                price: "R$ 37,00"
              },
              {
                name: "+100 Livros de Colorir",
                desc: "+100 livros de colorir para crianças, ideais para atividades educativas e coordenação motora.",
                img: "https://imgur.com/ZKnnRYo.png",
                price: "R$ 19,00"
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group text-center">
                <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-pulse">
                  Grátis
                </div>
                <div className="space-y-6">
                  <div className="w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                    <img src={bonus.img} alt={bonus.name} className="w-full h-auto object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{bonus.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">{bonus.desc}</p>
                    <div className="pt-2">
                      <span className="text-red-500 line-through text-sm">Valor Original: {bonus.price}</span>
                      <p className="text-brand-green font-bold">Hoje: R$ 0,00</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Card */}
        <section id="pricing-section" className="py-8">
          <div className="bg-white rounded-3xl border-2 border-brand-green p-6 shadow-xl max-w-sm mx-auto relative overflow-hidden">
            {/* Logo Placeholder */}
            <div className="text-center mb-6">
              <img 
                src="https://imgur.com/4maud8T.png" 
                alt="Logo Palavra Mágica" 
                className="mx-auto w-full max-w-[240px] h-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-center mb-4 uppercase">
              5.000 Moldes de EVA
            </h3>

            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm">De R$ 57,00 Por Apenas:</p>
              <p className="text-gray-400 text-lg line-through decoration-red-500 decoration-2">R$ 57,00</p>
              <p className="text-6xl font-black text-brand-green mt-2 tracking-tighter">R$ 10,00</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "5.000 Moldes de EVA",
                "Certificado de Conclusão",
                "+2.500 Moldes de Feltro",
                "Lista de Fornecedores Baratos",
                "Painéis Educativos para Sala de Aula",
                "+100 Livros de Colorir",
                "Suporte 24/7",
                "Garantia de 7 Dias",
                "Acesso Imediato"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-green rounded-full p-1.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-base text-left uppercase tracking-tight text-gray-900 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-lg py-6 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <a href="https://ggcheckout.app/checkout/v2/4jnMZZKbi96diqfy3yKo" target="_blank" rel="noopener noreferrer">
                <span>👉</span> Comprar agora
              </a>
            </Button>
          </div>

          {/* Email Delivery Banner */}
          <div className="mt-6 bg-white rounded-2xl border-2 border-brand-green p-4 flex items-center gap-4 shadow-sm max-w-sm mx-auto">
            <div className="bg-brand-green rounded-full p-2 shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-900 font-bold text-sm leading-snug">
              Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 space-y-8 bg-gray-50 -mx-4 px-4">
          <h2 className="text-3xl font-black text-center text-gray-900 font-display">
            Quem comprou, adorou!
          </h2>
          <div className="relative max-w-[280px] sm:max-w-xs mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-lg" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((src, index) => (
                  <div className="flex-[0_0_100%] min-w-0" key={index}>
                    <div className="relative bg-white flex items-center justify-center p-2">
                      <img 
                        src={src} 
                        alt={`Depoimento ${index + 1}`} 
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={scrollPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-800 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-gray-800 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-brand-green w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <h2 className="text-2xl font-black text-center mb-8">Perguntas Frequentes</h2>
          <div className="bg-gray-50 rounded-3xl p-6 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Como vou receber o material?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O acesso é enviado para o seu e-mail cadastrado logo após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Preciso de impressora?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Não é obrigatório ter impressora em casa. Você pode imprimir em uma papelaria ou lan house, pois os arquivos estão em PDF prontos para impressão.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  São quantos moldes?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  O kit contém mais de 5.000 moldes variados para diversas ocasiões e atividades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Quais formas de pagamento são aceitas?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Aceitamos PIX e cartão de crédito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="hover:no-underline py-4 px-2 text-left font-medium text-gray-800 [&[data-state=open]]:text-brand-green">
                  Tem garantia?
                </AccordionTrigger>
                <AccordionContent className="px-2 text-gray-600">
                  Sim, oferecemos garantia de satisfação de 7 dias. Se não gostar, devolvemos seu dinheiro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Button below FAQ */}
          <div className="mt-10">
            <Button 
              onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-black text-lg md:text-xl py-7 rounded-2xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 uppercase tracking-tight px-4 leading-tight"
            >
              <span className="shrink-0">👉</span> <span>Quero aproveitar a oferta agora</span>
            </Button>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-8 bg-white border-t border-gray-100 px-4">
          <div className="max-w-sm mx-auto flex items-center justify-center gap-4 bg-gray-50 p-6 rounded-3xl border border-gray-200">
            <div className="bg-brand-green/10 p-4 rounded-full text-brand-green">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="text-left flex-1">
              <h3 className="font-black text-gray-900 text-lg uppercase leading-tight">Garantia de 7 Dias</h3>
              <p className="text-xs text-gray-600 mt-1 leading-snug">Seu risco é zero! Devolvemos 100% do seu dinheiro caso não goste do material.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-16 text-center space-y-8 bg-white">
           <div className="space-y-4">
             <div className="flex items-center justify-center gap-2 text-lg font-bold">
               <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-red-500">
                 <Mail className="w-4 h-4" />
               </div>
               Precisa de Ajuda?
             </div>
             <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed px-4">
               Envie um e-mail para <span className="font-semibold text-gray-900">moldeseva.suporte@gmail.com</span> e nossa equipe responderá rapidamente para ajudá-lo com qualquer dúvida ou problema.
             </p>
           </div>

           <div className="text-xs text-gray-400 max-w-md mx-auto px-6 leading-relaxed">
             Na nossa plataforma, desenvolvemos moldes de EVA que incentivam o artesanato e a decoração de forma lúdica e envolvente. Nosso compromisso é garantir qualidade e inovação, ajudando artesãos e professores a criarem de maneira eficaz e divertida.
           </div>
        </footer>
      </div>

      {/* Social Proof Notification */}
      <div 
        className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
          showNotification ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#4CAF50] text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-3 max-w-[240px]">
          <div className="bg-white/20 rounded-full p-1.5 shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm leading-tight truncate">
              {currentNotification.name} comprou agora
            </span>
            <span className="text-white/80 text-[10px] uppercase tracking-wider font-medium">
              5.000 Moldes de EVA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
