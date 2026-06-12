import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neuclean-blue text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer: Main details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Col 1: About / Branding */}
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="bg-white/10 p-2 rounded-lg text-neuclean-green group-hover:bg-neuclean-green group-hover:text-slate-950 transition-colors duration-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Neu<span className="text-neuclean-green">Clean</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              NeuClean es el socio estratégico en higiene y desinfección profesional para empresas líderes en Neuquén y la Patagonia. Distribución mayorista e insumos B2B con logística propia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navegación</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-neuclean-green transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-neuclean-green transition-colors duration-200">Beneficios B2B</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-neuclean-green transition-colors duration-200">Categorías de Productos</a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-neuclean-green transition-colors duration-200">Solicitar Cotización</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Categorías</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#categorias" className="hover:text-neuclean-green transition-colors duration-200">Insumos Descartables</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-neuclean-green transition-colors duration-200">Químicos Profesionales</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-neuclean-green transition-colors duration-200">Equipamiento de Limpieza</a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-neuclean-green transition-colors duration-200">Dispensers en Comodato</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Neuquén B2B</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-neuclean-green flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Félix San Martín 1200,<br />
                  Q8300 Neuquén Capital, Argentina
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-neuclean-green flex-shrink-0" />
                <a href="tel:+542994483322" className="text-slate-400 hover:text-white transition-colors duration-200">
                  +54 (299) 448-3322
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-neuclean-green flex-shrink-0" />
                <a href="mailto:ventas@neuclean.com.ar" className="text-slate-400 hover:text-white transition-colors duration-200">
                  ventas@neuclean.com.ar
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-5 w-5 text-neuclean-green flex-shrink-0" />
                <span>Lun a Vie: 08:00 - 17:00 hs</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright */}
      <div className="border-t border-slate-800/80 bg-slate-950/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} NeuClean SRL. Todos los derechos reservados. Distribución de higiene profesional.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Términos B2B</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Privacidad</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
