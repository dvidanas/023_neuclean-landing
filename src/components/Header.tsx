import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Categorías', href: '#categorias' },
    { name: 'Cotización B2B', href: '#cotizar' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (izq) */}
          <a href="#inicio" className="flex items-center gap-2 group" id="header-logo">
            <div className="bg-neuclean-blue p-2 rounded-lg text-white group-hover:bg-neuclean-green transition-colors duration-300">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-neuclean-blue tracking-tight leading-none">
                Neu<span className="text-neuclean-green">Clean</span>
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">
                Higiene Profesional
              </span>
            </div>
          </a>

          {/* Menú ancla (centro - desktop) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-neuclean-blue text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-neuclean-green hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón "Solicitar Cotización" (der - desktop) */}
          <div className="hidden md:flex">
            <a
              href="#cotizar"
              id="cta-header-quote"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-neuclean-blue hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neuclean-blue transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-slate-900/10"
            >
              Solicitar Cotización
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-neuclean-blue hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neuclean-blue transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-button"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-t border-slate-200/50 bg-white' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-neuclean-blue hover:bg-slate-50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="#cotizar"
              onClick={() => setIsOpen(false)}
              id="cta-mobile-header-quote"
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-neuclean-blue hover:bg-slate-800 shadow-md transition-colors duration-200"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
