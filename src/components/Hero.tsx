import heroImg from '../assets/neuclean_hero.png';
import { ArrowRight, FileDown, ShieldCheck, Box } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative bg-neuclean-blue min-h-[85vh] flex items-center overflow-hidden py-20 lg:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      
      {/* High-Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neuclean-blue via-neuclean-blue/95 lg:via-neuclean-blue/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-neuclean-blue via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-left space-y-8 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-neuclean-green animate-pulse"></span>
            <span className="text-xs font-bold text-slate-200 tracking-wider uppercase">
              Exclusivo Distribución Mayorista B2B
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none text-shadow-sm">
            Abastecimiento Directo de <span className="text-neuclean-green">Insumos y Químicos</span> de Limpieza Profesional
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            No somos empresa de servicios. Somos tu distribuidor logístico de confianza en Neuquén. Stock permanente de insumos descartables, químicos certificados y equipamiento de alto rendimiento.
          </p>

          {/* Key Wholesale Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-lg">
            <div className="flex items-center gap-3 text-slate-200">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-neuclean-green">
                <Box className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">Solo Venta de Productos</p>
                <span className="text-xs text-slate-400">Sin intermediarios ni servicios.</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-200">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-neuclean-green">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">Venta Directa Mayorista</p>
                <span className="text-xs text-slate-400">Precios por escala de volumen.</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#productos"
              id="cta-hero-catalog-shop"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-slate-950 bg-neuclean-green hover:bg-[#4ea254] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neuclean-green transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-neuclean-green/20"
            >
              Ver Productos Estrella
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              id="cta-hero-download"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-lg text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
              onClick={(e) => {
                e.preventDefault();
                alert("Descargando Catálogo de Insumos B2B NeuClean...");
              }}
            >
              <FileDown className="mr-2 h-5 w-5 text-neuclean-green" />
              Descargar Catálogo Mayorista
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
