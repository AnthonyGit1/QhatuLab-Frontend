import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-gray-900">Construyendo</span>
              <span className="block text-gray-900">puentes</span>
              <span className="block text-[#9333EA]">hacia el empleo</span>
              <span className="block text-[#9333EA]">inclusivo</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              En QhatuLab, conectamos el talento diverso con empleadores
              comprometidos. Nuestra plataforma impulsada por IA te
              acompaña en cada paso hacia tu primer empleo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/registro"
                className="px-8 py-3 bg-[#9333EA] text-white rounded-lg hover:bg-[#7C3AED] transition duration-300"
              >
                Comienza tu viaje
              </Link>
              <Link
                to="/conoce-mas"
                className="px-8 py-3 border border-[#9333EA] text-[#9333EA] rounded-lg hover:bg-[#9333EA] hover:text-white transition duration-300"
              >
                Conoce más →
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/maestra-silla-ruedas.jpg"
              alt="Maestra en silla de ruedas dando clase"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;