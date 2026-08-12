import { Clock, ShieldCheck, Zap, Sparkles, ChevronRight } from "lucide-react";

import { Product, ProductCard } from "./components/landing/ProductCard";
import { Navbar } from "./components/landing/Navbar";
import { WhatsAppButton } from "./components/landing/WhatsAppButton";
import { SectionHeader } from "./components/landing/SectionHeader";
import { FeatureCard } from "./components/landing/FeatureCard";
import { ProcessCard } from "./components/landing/ProcessCard";
import { TestimonialCard } from "./components/landing/TestimonialCard";
import { Footer } from "./components/landing/Footer";

const products: Product[] = [
  {
    number: "01",
    name: "CLASSIC",
    description:
      "Ideal para equipos que buscan una excelente relación precio-calidad.",
    features: [
      { label: "Tela:", value: "Set poliéster" },
      { label: "Molde:", value: "Clásico" },
      { label: "Escudo:", value: "Sublimado" },
      { label: "Cuello:", value: "Clásico" },
      { value: "Costuras reforzadas" },
    ],
  },
  {
    number: "02",
    name: "PERFORMANCE",
    description:
      "Ideal para combinar calidad, confort y excelente presentación.",
    features: [
      { label: "Tela:", value: "Microfibra" },
      { label: "Molde:", value: "Clásico o Ranglan" },
      { label: "Escudo:", value: "Bordado" },
      { label: "Cuello:", value: "Clásico o V" },
      { value: "Confección premium" },
    ],
  },
  {
    number: "03",
    name: "ELITE",
    description:
      "Para quienes buscan un plus en comodidad, respirabilidad y desempeño.",
    popular: true,
    features: [
      { label: "Tela:", value: "Microcool // Cool Breeze" },
      { label: "Molde:", value: "Clásico o Ranglan" },
      { label: "Escudo:", value: "Bordado" },
      { label: "Cuello:", value: "Clásico, V o V cruzado" },
      { value: "Alto rendimiento" },
    ],
  },
  {
    number: "04",
    name: "PROFESSIONAL",
    description: "Estética profesional y nivel superior de personalización.",
    features: [
      { label: "Tela:", value: "Ultra Derby // Panal // Pixel" },
      { label: "Molde:", value: "Player Version / Ranglan" },
      { label: "Escudo:", value: "Bordado o TPU 3D" },
      { label: "Cuello:", value: "Chomba, RIB, V o Clásico" },
      { value: "Acabados tope de gama" },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Asesoramiento",
    description:
      "Contactanos por WhatsApp. Elegís tu línea (mínimo 12 conjuntos) y definimos detalles.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos la propuesta gráfica integral con sponsors ilimitados sin costo adicional.",
  },
  {
    number: "03",
    title: "Seña y Producción",
    description:
      "Con el 70% de seña iniciamos la confección en un plazo de 7 a 15 días hábiles.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Abonás el 30% restante al momento de la entrega o despacho de tu indumentaria.",
  },
];

const testimonials = [
  {
    text: "Elegimos la Línea Elite. La entrega en menos de 10 días hábiles fue récord, y la calidad de la tela microcool es impresionante.",
    name: "Sebastian C.",
    role: "Capitán de Brightinto F.C.",
  },
  {
    text: "Pusimos 6 sponsors en la camiseta y no nos cobraron un peso extra. El escudo en TPU 3D de la línea Professional quedó impecable.",
    name: "Franco Z.",
    role: "Delegado de Falta Uno F.C.",
  },
  {
    text: "Encargamos 15 conjuntos Classic para arrancar el torneo. Excelente relación precio-calidad y las costuras súper resistentes.",
    name: "Gonzalo F.",
    role: "Delegado Barrio Roma",
  },
];

const COMMERCIAL_CONDITIONS = [
  {
    icon: Clock,
    title: "Entrega Rápida",
    description:
      "Producción de 7 a 15 días hábiles, el plazo de entrega más rápido de la región.",
  },
  {
    icon: ShieldCheck,
    title: "Forma de Pago",
    description:
      "Se solicita una seña del 70% para iniciar producción. El 30% restante se abona al momento de la entrega.",
  },
  {
    icon: Zap,
    title: "Extras Opcionales",
    description:
      "Nombre y dorsal en vinilo textil, o escudo aplicado en flock brillante para mayor calidad y presencia visual.",
  },
];

export default function ElevoLandingPage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "543425926073";

  const whatsappMessage =
    "Hola *ELEVO*, quiero cotizar conjuntos personalizados para mi equipo. Quieria una cantidad de *X* conjuntos de la linea *X*";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-400 selection:text-zinc-950 transition-colors duration-300">
      <Navbar whatsappUrl={whatsappUrl} />

      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-32 pb-20 md:pt-44 md:pb-32 scroll-mt-20 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            Indumentaria Deportiva Personalizada 2026
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-zinc-900 dark:text-white max-w-5xl mx-auto leading-[1.08]">
            Lleva la identidad de tu equipo al{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-200">
              siguiente nivel
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal">
            Diseño integral incluido, sponsors ilimitados y la entrega más
            rápida de la región (7 a 15 días hábiles).
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              href={whatsappUrl}
              className="w-full sm:w-auto gap-3 px-8 py-4 text-base font-extrabold rounded-xl hover:-translate-y-0.5 shadow-xl shadow-emerald-500/20"
            >
              Pedir Cotización Inmediata
            </WhatsAppButton>

            <a
              href="/ELEVO-CATÁLOGO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 font-bold px-8 py-4 rounded-xl text-base transition-all shadow-sm"
            >
              Ver Catálogo
              <ChevronRight className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-zinc-200 dark:border-zinc-900 max-w-4xl mx-auto text-left">
            {[
              ["7 a 15 días", "Tiempo de producción"],
              ["12 mín.", "Conjuntos por pedido"],
              ["100%", "Diseño e integración incluidos"],
              ["Sponsors", "Ilimitados sin costo extra"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-3xl font-black text-zinc-900 dark:text-white">
                  {value}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDICIONES */}
      <section
        id="condiciones"
        className="py-20 bg-zinc-100/80 dark:bg-zinc-900/60 border-y scroll-mt-20 border-zinc-200 dark:border-zinc-800/80 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Condiciones Comerciales"
            title="Transparencia y Calidad Asegurada"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {COMMERCIAL_CONDITIONS.map((condition) => (
              <FeatureCard
                key={condition.title}
                icon={condition.icon}
                title={condition.title}
                description={condition.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="catalogo" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Nuestras 4 Líneas"
            title="Elegí el nivel adecuado para tu equipo"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.number} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="py-24 bg-zinc-100/60 dark:bg-zinc-900/40 border-t scroll-mt-20 border-zinc-200 dark:border-zinc-800/80 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Paso a Paso"
            title="¿Cómo encargamos el pedido?"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonios"
            title="Equipos que confían en ELEVO"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 scroll-mt-20 bg-linear-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800 relative overflow-hidden transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-6">
            ¿Listo para vestir a tu equipo con nivel profesional?
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Envianos la idea o escudo de tu club por WhatsApp y te armamos la
            propuesta gráfica sin compromiso.
          </p>

          <WhatsAppButton
            href={whatsappUrl}
            className="gap-3 px-10 py-5 text-lg font-black rounded-2xl hover:scale-105 shadow-2xl shadow-emerald-500/30"
            iconClassName="w-6 h-6"
          >
            Iniciar Cotización por WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <Footer whatsappUrl={whatsappUrl} />
    </div>
  );
}
