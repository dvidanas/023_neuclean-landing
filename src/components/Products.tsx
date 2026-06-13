import { useState } from 'react';
import { ShoppingBag, Eye, X, MessageCircle, ClipboardCheck, Activity } from 'lucide-react';
import detergenteImg from '../assets/products/prod_detergente.png';
import bobinaImg from '../assets/products/prod_bobina.png';
import dispenserImg from '../assets/products/prod_dispenser.png';
import desinfectanteImg from '../assets/products/prod_desinfectante.png';
import mopaImg from '../assets/products/prod_mopa.png';
import carroImg from '../assets/products/prod_carro.png';

interface Product {
  id: string;
  name: string;
  category: 'Químicos' | 'Descartables' | 'Equipamiento';
  description: string;
  price: string;
  image: string;
  specs: string[];
  certifications: string;
  code: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productsList: Product[] = [
    {
      id: 'prod-detergente',
      name: "Detergente Concentrado B2B (5 Litros)",
      category: 'Químicos',
      description: "Detergente líquido de alta concentración y gran poder desengrasante. Formulación especial para cocinas industriales, comedores corporativos y limpieza general de superficies lavables.",
      price: "$18.500",
      image: detergenteImg,
      specs: [
        "Presentación: Bidón hermético de 5 Litros",
        "Dilución recomendada: 1:50 en agua tibia",
        "Biodegradable y libre de fosfatos"
      ],
      certifications: "Aprobación ANMAT / RNE",
      code: "NQN-Q04-D5"
    },
    {
      id: 'prod-bobina',
      name: "Bobina de Papel Industrial Doble Hoja",
      category: 'Descartables',
      description: "Papel toalla gofrado extra resistente y ultra absorbente. Diseñado para secado de manos rápido o limpieza de derrames en talleres, fábricas y plantas de procesamiento alimenticio.",
      price: "$22.400",
      image: bobinaImg,
      specs: [
        "Presentación: Paquete con 2 bobinas industriales",
        "Longitud: 400 metros lineales por rollo",
        "Gramaje: Doble hoja premium gofrada blanca"
      ],
      certifications: "FSC de manejo forestal sustentable",
      code: "NQN-D02-B4"
    },
    {
      id: 'prod-dispenser',
      name: "Dispenser de Jabón/Alcohol Automático",
      category: 'Equipamiento',
      description: "Dispositivo touchless con sensor infrarrojo inteligente. Evita la contaminación cruzada y garantiza la dosificación perfecta de jabones líquidos o geles desinfectantes en accesos corporativos.",
      price: "$35.900",
      image: dispenserImg,
      specs: [
        "Capacidad: Reservorio interno de 1000 ml",
        "Alimentación: 4 pilas alcalinas tipo AA",
        "Montaje: Listo para amurar a pared o pie de soporte"
      ],
      certifications: "Garantía de fábrica por 12 meses",
      code: "NQN-E08-DA"
    },
    {
      id: 'prod-desinfectante',
      name: "Amonio Cuaternario 5ta Gen (5 Litros)",
      category: 'Químicos',
      description: "Sanitizante virucida y bactericida de amplio espectro. Especialmente formulado para desinfección ambiental en sectores críticos como clínicas, consultorios, vestuarios e industria alimenticia.",
      price: "$25.000",
      image: desinfectanteImg,
      specs: [
        "Presentación: Bidón hermético de 5 Litros",
        "Dilución de uso: 1:100 a 1:200",
        "No mancha ni corroe superficies metálicas"
      ],
      certifications: "Aprobación ANMAT y SENASA para uso alimenticio",
      code: "NQN-Q12-AC5"
    },
    {
      id: 'prod-mopa',
      name: "Mopa Plana Microfibra + Balde Prensa",
      category: 'Equipamiento',
      description: "Kit de fregado técnico profesional. Reduce en un 60% el consumo de agua y químicos gracias al poder de absorción estática de la microfibra. Balde ergonómico con divisiones.",
      price: "$42.100",
      image: mopaImg,
      specs: [
        "Mango: Aluminio reforzado de 140 cm con empuñadura",
        "Balde: 15 Litros con pedal y escurridor prensa",
        "Incluye: 2 paños de microfibra de alta durabilidad"
      ],
      certifications: "Estándares de ergonomía industrial",
      code: "NQN-E01-MPK"
    },
    {
      id: 'prod-carro',
      name: "Carro Janitor Profesional Multifunción",
      category: 'Equipamiento',
      description: "Carro de servicio para el traslado seguro y organizado de herramientas, químicos y papelería. Estructura robusta anticorrosión ideal para operarios en grandes predios.",
      price: "$118.000",
      image: carroImg,
      specs: [
        "Estructura: Polipropileno inyectado de alta densidad",
        "Ruedas: Giro 360° silenciosas antimanchas",
        "Bolsa: Lona vinílica impermeable de 80 Litros con cierre"
      ],
      certifications: "Cumple normas de seguridad ocupacional",
      code: "NQN-E04-CJ1"
    }
  ];

  const getWhatsAppLink = (productName: string, productCode: string) => {
    const message = `Hola NeuClean! Quisiera consultar stock y cotizar el producto estrella: ${productName} (Código: ${productCode}) para mi empresa en Neuquén.`;
    return `https://wa.me/542994483322?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="productos" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded bg-neuclean-blue/10 text-xs font-bold text-neuclean-blue uppercase tracking-wider">
            Tienda Express B2B
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neuclean-blue tracking-tight">
            Productos Estrella Destacados
          </h2>
          <p className="text-lg text-slate-600">
            Hacé tu pedido directo de insumos esenciales. Hacé clic en cualquier producto para abrir el detalle y cotizar directo a través de WhatsApp.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              
              {/* Product Thumbnail Container */}
              <div className="relative h-64 w-full bg-slate-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-neuclean-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-2 text-left">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Cód: {product.code}
                  </span>
                  <h3 className="text-xl font-bold text-neuclean-blue leading-tight group-hover:text-slate-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">Precio Ref. Neto</p>
                    <span className="text-xl font-extrabold text-neuclean-blue">{product.price}</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-neuclean-blue hover:bg-slate-50 transition-colors"
                      title="Ver detalle de especificaciones"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <a
                      href={getWhatsAppLink(product.name, product.code)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neuclean-green hover:bg-[#4ea254] text-slate-950 font-bold rounded-lg text-xs shadow-md shadow-neuclean-green/10 transition-colors"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Comprar
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Interactive Detail Modal */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col md:flex-row text-left transform scale-100 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-10"
                aria-label="Cerrar ventana"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Side: Large Product Image */}
              <div className="w-full md:w-1/2 bg-slate-50 relative flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-neuclean-blue text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              {/* Right Side: Description and specs */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      CÓDIGO: {selectedProduct.code}
                    </span>
                    <h3 className="text-2xl font-bold text-neuclean-blue leading-tight mt-1">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider border-b border-slate-200/50 pb-1.5">
                      <ClipboardCheck className="h-4 w-4 text-neuclean-green" />
                      Ficha Técnica
                    </div>
                    <ul className="space-y-1">
                      {selectedProduct.specs.map((spec, idx) => (
                        <li key={idx} className="text-[11px] font-medium text-slate-600 flex items-start gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-neuclean-green mt-1 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications Badge */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Activity className="h-4 w-4 text-neuclean-green" />
                    <span>Certificaciones: <span className="text-neuclean-blue font-semibold">{selectedProduct.certifications}</span></span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Neto Mayorista</p>
                    <span className="text-2xl font-extrabold text-neuclean-blue">{selectedProduct.price}</span>
                  </div>
                  
                  {/* WhatsApp Buy CTA */}
                  <a
                    href={getWhatsAppLink(selectedProduct.name, selectedProduct.code)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neuclean-green hover:bg-[#4ea254] text-slate-950 font-bold rounded-lg text-sm shadow-lg shadow-neuclean-green/20 transition-all duration-200 flex-grow"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Comprar vía WhatsApp
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
