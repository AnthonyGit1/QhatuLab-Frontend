import { Link } from 'react-router-dom';
import { AcademicCapIcon, ChatAlt2Icon, BriefcaseIcon } from '@heroicons/react/outline';

const Features = () => {
  const features = [
    {
      title: "Aprende y Crece",
      description:
        "Accede a cursos personalizados y recursos de aprendizaje adaptados a tus necesidades y objetivos profesionales.",
      icon: AcademicCapIcon,
    },
    {
      title: "Practica Entrevistas",
      description:
        "Mejora tus habilidades con nuestro simulador de entrevistas impulsado por IA en un ambiente seguro y constructivo.",
      icon: ChatAlt2Icon,
    },
    {
      title: "Conecta con Empleadores",
      description:
        "Accede a oportunidades laborales en empresas comprometidas con la inclusión y la diversidad.",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tu camino hacia el éxito profesional
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Un proceso simplificado y personalizado para tu desarrollo profesional
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-3 bg-[#9333EA] rounded-xl">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/registro"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#9333EA] hover:bg-[#7C3AED] transition-colors"
          >
            Comienza ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;