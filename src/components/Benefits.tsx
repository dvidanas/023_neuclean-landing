import { PackageCheck, Landmark, Truck, AlertTriangle } from 'lucide-react';

export default function Benefits() {
  const painPoints = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      text: "Quiebres de stock recurrentes en insumos críticos"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      text: "Costos variables e inestabilidad en precios mayoristas"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      text: "Demoras de entrega de proveedores fuera de Neuquén"
    }
  ];

  const benefitsList = [
    {
      id: 'benefit-stock',
      icon: <PackageCheck className="h-8 w-8 text-white" />,
      title: "Stock 100% Asegurado",
      description: "Contratos de abastecimiento programados. Almacenamos tu stock de seguridad en nuestro centro de distribución de Neuquén para garantizar disponibilidad todo el año."
    },
    {
      id: 'benefit-prices',
      icon: <Landmark className="h-8 w-8 text-white" />,
      title: "Precios Corporativos Estables",
      description: "Esquemas de facturación B2B diseñados para tu volumen. Precios acordados por contrato para facilitar el control de costos mensuales de tu empresa."
    },
    {
      id: 'benefit-logistics',
      icon: <Truck className="h-8 w-8 text-white" />,
      title: "Logística Express Local",
      description: "Flota de distribución propia en Neuquén capital, zonas industriales (Añelo/Vaca Muerta) y aledaños. Entregas coordinadas en 24/48 hs hábiles."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neuclean-green">
            El Valor de un Socio Estratégico
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-neuclean-blue tracking-tight">
            Optimizamos la Higiene de tu Empresa
          </p>
          <p className="text-lg text-slate-600">
            Dejá de lidiar con proveedores minoristas o demoras interprovinciales. Una respuesta integral a las necesidades corporativas.
          </p>
        </div>

        {/* Problem vs Solution Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Problem Box (Left 4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
              ¿Frustrado con tu proveedor actual?
            </h3>
            <ul className="space-y-4">
              {painPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <span className="text-sm font-medium text-slate-600 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-500 font-semibold text-center uppercase tracking-wide">
                La solución de NeuClean es diferente
              </p>
            </div>
          </div>

          {/* Solution Columns (Right 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitsList.map((benefit) => (
              <div
                key={benefit.id}
                id={benefit.id}
                className="bg-white hover:bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-neuclean-green/35 transition-all duration-300 flex flex-col items-start space-y-4 group"
              >
                <div className="p-3 bg-neuclean-blue rounded-xl text-white group-hover:bg-neuclean-green transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-neuclean-blue">
                  {benefit.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
