import descartablesImg from '../assets/cat_descartables.png';
import quimicosImg from '../assets/cat_quimicos.png';
import equipamientoImg from '../assets/cat_equipamiento.png';
import { ArrowUpRight } from 'lucide-react';

export default function Categories() {
  const categoriesList = [
    {
      id: 'cat-descartables',
      title: "Insumos Descartables",
      subtitle: "Papel e Higiene Institucional",
      description: "Papel higiénico de alto metraje, toallas intercaladas, bobinas industriales y dispensers en comodato. Máxima absorción y rendimiento.",
      items: ["Toallas de papel intercaladas", "Bobinas industriales de secado", "Papel higiénico institucional", "Dispensers automáticos"],
      image: descartablesImg
    },
    {
      id: 'cat-quimicos',
      title: "Químicos Profesionales",
      subtitle: "Limpieza y Desinfección Certificada",
      description: "Desinfectantes concentrados, jabón líquido premium, desengrasantes de alta potencia y limpiadores neutros con aprobación ANMAT.",
      items: ["Sanitizantes y alcohol gel", "Desengrasantes de grado alimenticio", "Limpiadores multiuso concentrados", "Jabones líquidos para manos"],
      image: quimicosImg
    },
    {
      id: 'cat-equipamiento',
      title: "Equipamiento de Limpieza",
      subtitle: "Tecnología para Operaciones B2B",
      description: "Carros de limpieza ergonómicos, mopas técnicas de microfibra, aspiradoras secas/húmedas y maquinaria para tratamiento de pisos.",
      items: ["Carros janitor y baldes prensa", "Aspiradoras profesionales", "Mopas de microfibra técnicas", "Lustradoras y barredoras"],
      image: equipamientoImg
    }
  ];

  return (
    <section id="categorias" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neuclean-green">
            Catálogo Corporativo
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-neuclean-blue tracking-tight">
            Categorías Especializadas para tu Negocio
          </p>
          <p className="text-lg text-slate-600">
            Cubrimos todas las necesidades de limpieza profesional en oficinas, plantas industriales, clínicas y restaurantes.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categoriesList.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="group flex flex-col bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-neuclean-green/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              
              {/* Image Container with Zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-neuclean-green text-[11px] font-bold text-slate-950 uppercase tracking-wider">
                    {category.subtitle}
                  </span>
                </div>
              </div>

              {/* Info Content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-neuclean-blue">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Item bullet points */}
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Artículos Destacados</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-neuclean-green flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <a
                    href="#cotizar"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-neuclean-blue group-hover:text-neuclean-green transition-colors duration-200"
                  >
                    Cotizar esta categoría
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
