import heroImg from '../assets/neuclean_hero.png';
import { ArrowRight, FileDown, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-neuclean-blue overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      
      {/* Decorative background accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60B566_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-neuclean-green/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-neuclean-green animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
                Líderes en Neuquén y la Patagonia
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Abastecimiento <span className="text-neuclean-green">Estratégico</span> en Higiene Profesional para tu Empresa
            </h1>
            
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Simplificamos el suministro integral de insumos descartables, químicos certificados y equipamiento de limpieza profesional. Optimizado para industrias, gastronomía, salud y hotelería B2B.
            </p>

            {/* Core trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-neuclean-green">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Normas Certificadas</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-neuclean-green">
                  <Truck className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Logística Propia en NQN</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cotizar"
                id="cta-hero-quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-slate-950 bg-neuclean-green hover:bg-[#4ea254] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neuclean-green transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-neuclean-green/20"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                id="cta-hero-catalog"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-lg text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Descargando Catálogo B2B NeuClean (PDF)...");
                }}
              >
                <FileDown className="mr-2 h-5 w-5 text-neuclean-green" />
                Descargar Catálogo B2B
              </a>
            </div>
          </div>

          {/* Right Column: Premium Image Mockup */}
          <div className="relative mx-auto max-w-md lg:max-w-none w-full flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer frame styling for modern container effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neuclean-green/30 to-transparent rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative border-4 border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50">
                <img
                  src={heroImg}
                  alt="Insumos de Higiene Profesional NeuClean"
                  className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
