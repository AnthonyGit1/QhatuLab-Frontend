import React from 'react';
import { Link } from 'react-router-dom';
import { 
  VideoIcon, 
  Gamepad, 
  Brain,
  CheckCircle, 
  ArrowRight,
  MessagesSquare
} from 'lucide-react';

const Interview = () => {
  const features = [
    {
      title: "Simulación Realista",
      description: "Experimenta entrevistas en un entorno virtual inmersivo",
      icon: VideoIcon
    },
    {
      title: "Aprendizaje Interactivo",
      description: "Practica con diferentes escenarios y preguntas comunes",
      icon: Gamepad
    },
    {
      title: "Feedback Instantáneo",
      description: "Recibe retroalimentación detallada sobre tu desempeño",
      icon: Brain
    }
  ];

  const benefits = [
    "Reduce la ansiedad en entrevistas reales",
    "Mejora tus habilidades de comunicación",
    "Practica respuestas a preguntas técnicas",
    "Aprende el lenguaje corporal adecuado",
    "Recibe consejos personalizados"
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Simulador de Entrevistas RV
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prepárate para tus entrevistas laborales con nuestro innovador simulador en realidad virtual.
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary">
              <MessagesSquare className="h-5 w-5 mr-2" />
              Próximamente: Simulador Interactivo
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${
                  index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <feature.icon className={`h-6 w-6 ${
                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Prepárate para el Éxito
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition-all"></div>
              <div className="relative bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Estado del Desarrollo
                </h3>
                <p className="text-gray-600 mb-4">
                  Estamos trabajando en crear una experiencia inmersiva y educativa para ayudarte a prepararte para tus entrevistas laborales. ¡Mantente atento a las actualizaciones!
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">En desarrollo</span>
                  </div>
                  <button className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                    Notificarme <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="px-8 py-16 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">¿Quieres ser de los primeros en probarlo?</h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Suscríbete para recibir actualizaciones sobre el lanzamiento y acceso anticipado al simulador.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interview;