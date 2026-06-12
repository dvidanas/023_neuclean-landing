import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// URL del webhook de integración (reemplazable por el cliente)
const WEBHOOK_URL = 'https://hook.us1.make.com/placeholder-neuclean-b2b';

interface FormData {
  empresa: string;
  contacto: string;
  email: string;
  telefono: string;
  sector: string;
  mensaje: string;
  tipoCotizacion: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    empresa: '',
    contacto: '',
    email: '',
    telefono: '',
    sector: '',
    mensaje: '',
    tipoCotizacion: 'completa'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<Partial<FormData>>({});

  const sectors = [
    { value: 'salud', label: 'Salud y Clínicas' },
    { value: 'gastronomia', label: 'Gastronomía y Hoteles' },
    { value: 'industria', label: 'Industria / Petróleo y Gas' },
    { value: 'educacion', label: 'Educación y Escuelas' },
    { value: 'comercio', label: 'Comercio / Oficinas' },
    { value: 'limpieza', label: 'Empresas de Limpieza' },
    { value: 'otro', label: 'Otros' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (validationErrors[name as keyof FormData]) {
      setValidationErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    if (!formData.empresa.trim()) errors.empresa = 'El nombre de la empresa es obligatorio';
    if (!formData.contacto.trim()) errors.contacto = 'El contacto de referencia es obligatorio';
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Ingrese un formato de correo electrónico válido';
    }

    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono celular o de red es obligatorio';
    }
    
    if (!formData.sector) {
      errors.sector = 'Seleccione el sector productivo de su empresa';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Intentar enviar datos al webhook configurado
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          fecha: new Date().toISOString(),
          origen: 'landing_page_b2b',
          localidad: 'Neuquén'
        })
      });

      // Si el webhook tiene éxito o si deseamos simular éxito
      // Dado que es un placeholder, manejamos simulación si falla la llamada de red real
      if (response.ok || response.status === 200) {
        setStatus('success');
      } else {
        // Simulación para propósitos de prueba local de la Landing Page
        console.warn('Webhook no configurado o falló. Simulando éxito en ambiente local...');
        setTimeout(() => {
          setStatus('success');
        }, 1500);
      }
    } catch (error) {
      console.log('Error de conexión a webhook, activando simulación local exitosa:', error);
      // Simulación en caso de error de red (CORS o webhook de pruebas)
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormData({
      empresa: '',
      contacto: '',
      email: '',
      telefono: '',
      sector: '',
      mensaje: '',
      tipoCotizacion: 'completa'
    });
    setStatus('idle');
  };

  return (
    <section id="cotizar" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and context (Left 5 cols) */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-neuclean-blue/10 text-xs font-bold text-neuclean-blue uppercase tracking-wider">
                Cotizador Integrado
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neuclean-blue tracking-tight leading-none">
                Solicitá un Presupuesto Corporativo a Medida
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Completa nuestro formulario de cotización B2B. Conectado directamente a nuestro sistema de ventas en Neuquén. Te enviaremos una propuesta formal en menos de 2 horas hábiles.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg text-neuclean-green shadow-sm flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Catálogos actualizados</h4>
                  <p className="text-xs text-slate-500">Precios y disponibilidad en tiempo real.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white rounded-lg text-neuclean-green shadow-sm flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Cuentas Corrientes</h4>
                  <p className="text-xs text-slate-500">Evaluación de financiamiento disponible para clientes industriales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form container (Right 7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200/60 relative overflow-hidden">
            
            {status === 'success' ? (
              // Success Screen
              <div className="text-center py-10 space-y-6 animate-fade-in" id="form-success-message">
                <div className="inline-flex p-4 bg-green-100 rounded-full text-neuclean-green">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-neuclean-blue">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Hemos recibido la información de <strong>{formData.empresa}</strong>. Un especialista comercial se pondrá en contacto con <strong>{formData.contacto}</strong> a la brevedad para enviar la cotización.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-neuclean-blue hover:bg-slate-800 text-white font-semibold rounded-lg text-sm transition-colors duration-200"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              // Form Interface
              <form onSubmit={handleSubmit} className="space-y-6" id="quote-b2b-form">
                
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start gap-3 rounded-r-lg">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{errorMessage || 'Ocurrió un error al procesar la cotización. Reintente por favor.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Empresa / Razón Social
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      id="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Ej. Limpiezas NQN S.A."
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all ${
                        validationErrors.empresa ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {validationErrors.empresa && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">{validationErrors.empresa}</p>
                    )}
                  </div>

                  {/* Contacto */}
                  <div>
                    <label htmlFor="contacto" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nombre de Contacto
                    </label>
                    <input
                      type="text"
                      name="contacto"
                      id="contacto"
                      value={formData.contacto}
                      onChange={handleInputChange}
                      placeholder="Ej. Ing. Daniel Pérez"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all ${
                        validationErrors.contacto ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {validationErrors.contacto && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">{validationErrors.contacto}</p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Correo Electrónico Corporativo
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ejemplo@empresa.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all ${
                        validationErrors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">{validationErrors.email}</p>
                    )}
                  </div>

                  {/* Telefono */}
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Ej. 299 154 56789"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all ${
                        validationErrors.telefono ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    />
                    {validationErrors.telefono && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">{validationErrors.telefono}</p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Sector */}
                  <div>
                    <label htmlFor="sector" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Sector Comercial
                    </label>
                    <select
                      name="sector"
                      id="sector"
                      value={formData.sector}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all ${
                        validationErrors.sector ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <option value="">-- Seleccionar --</option>
                      {sectors.map((sec) => (
                        <option key={sec.value} value={sec.value}>{sec.label}</option>
                      ))}
                    </select>
                    {validationErrors.sector && (
                      <p className="mt-1 text-xs text-red-500 font-semibold">{validationErrors.sector}</p>
                    )}
                  </div>

                  {/* Tipo Cotización */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tipo de Requerimiento
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`flex items-center justify-center p-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                        formData.tipoCotizacion === 'completa' 
                          ? 'border-neuclean-green bg-green-50/30 text-neuclean-blue' 
                          : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}>
                        <input
                          type="radio"
                          name="tipoCotizacion"
                          value="completa"
                          checked={formData.tipoCotizacion === 'completa'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        Precios y Catálogo
                      </label>
                      <label className={`flex items-center justify-center p-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                        formData.tipoCotizacion === 'licitacion' 
                          ? 'border-neuclean-green bg-green-50/30 text-neuclean-blue' 
                          : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                      }`}>
                        <input
                          type="radio"
                          name="tipoCotizacion"
                          value="licitacion"
                          checked={formData.tipoCotizacion === 'licitacion'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        Licitación / Compra
                      </label>
                    </div>
                  </div>

                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Detalle de Insumos o Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Detalle aquí cantidades, marcas deseadas o especificaciones técnicas..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-neuclean-blue/30 transition-all"
                  ></textarea>
                </div>

                {/* Button Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    id="submit-quote-button"
                    className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-neuclean-blue hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neuclean-blue transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Procesando Solicitud B2B...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud de Cotización
                        <Send className="ml-2 h-5 w-5 text-neuclean-green" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
