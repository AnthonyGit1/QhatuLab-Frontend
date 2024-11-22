import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, ChatAlt2Icon, BriefcaseIcon } from '@heroicons/react/outline';

const Home = () => {
  // Features Data
  const features = [
    {
      title: "Aprende y Crece",
      description: "Accede a cursos personalizados y recursos de aprendizaje adaptados a tus necesidades y objetivos profesionales.",
      icon: AcademicCapIcon,
      color: "primary"
    },
    {
      title: "Practica Entrevistas",
      description: "Mejora tus habilidades con nuestro simulador de entrevistas impulsado por IA en un ambiente seguro y constructivo.",
      icon: ChatAlt2Icon,
      color: "secondary"
    },
    {
      title: "Conecta con Empleadores",
      description: "Accede a oportunidades laborales en empresas comprometidas con la inclusión y la diversidad.",
      icon: BriefcaseIcon,
      color: "primary"
    }
  ];

  // Stats Data
  const stats = [
    {
      number: "1000+",
      label: "Personas empleadas",
      color: "primary"
    },
    {
      number: "500+",
      label: "Empresas aliadas",
      color: "secondary"
    },
    {
      number: "95%",
      label: "Tasa de retención",
      color: "primary"
    },
    {
      number: "80%",
      label: "Mejora salarial",
      color: "secondary"
    }
  ];

  // Team Members Data
  const teamMembers = [
    {
      name: 'Anthony Rosas',
      role: 'Backend & IA',
      image: '/img/anthony.jpg'
    },
    {
      name: 'Jaci Lucas',
      role: 'Frontend & UX',
      image: '/img/jaci.png'
    },
    {
      name: 'Joshelyn Riveros',
      role: 'Contenido & Testing',
      image: '/img/josh.jpg'
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "María García",
      role: "Desarrolladora Frontend en Tech Corp",
      image: "/img/testimonial1.jpeg",
      quote: "QhatuLab no solo me ayudó a conseguir mi primer empleo en tecnología, sino que me dio las herramientas para crecer profesionalmente.",
      color: "primary"
    },
    {
      name: "Juan Pérez",
      role: "Analista de Datos en Data Solutions",
      image: "/img/testimonial1.jpeg",
      quote: "El simulador de entrevistas me dio la confianza que necesitaba. Ahora trabajo en mi empresa soñada.",
      color: "secondary"
    },
    {
      name: "Ana Torres",
      role: "Diseñadora UX en Creative Studio",
      image: "/img/testimonial1.jpeg",
      quote: "Los cursos personalizados y el apoyo constante fueron clave para mi desarrollo profesional.",
      color: "primary"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-gray-900">Construyendo</span>
                <span className="block text-gray-900">puentes</span>
                <span className="block text-primary">hacia el empleo</span>
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  inclusivo
                </span>
              </h1>
              <div className="flex gap-2 my-6">
                <div className="w-12 h-1 bg-primary"></div>
                <div className="w-12 h-1 bg-secondary"></div>
              </div>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                En QhatuLab, conectamos el talento diverso con empleadores
                comprometidos. Nuestra plataforma impulsada por IA te
                acompaña en cada paso hacia tu primer empleo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/registro"
                  className="btn-primary px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Ir a la página de registro"
                  title="Regístrate en QhatuLab"
                >
                  Comienza tu viaje
                </Link>
                <Link
                  to="/conoce-mas"
                  className="group px-8 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  Conoce más 
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-10"></div>
              <img
                src="/img/maestra-silla-ruedas.jpg"
                alt="Maestra en silla de ruedas dando clase"
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`inline-block relative`}>
                  <div className={`absolute -inset-1 ${
                    stat.color === "primary" 
                      ? "bg-primary/10" 
                      : "bg-secondary/10"
                  } blur-sm rounded-full group-hover:blur transition-all duration-300`}></div>
                  <p className={`relative text-5xl font-extrabold ${
                    stat.color === "primary" 
                      ? "text-primary" 
                      : "text-secondary"
                  }`}>
                    {stat.number}
                  </p>
                </div>
                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tu camino hacia el éxito profesional
            </h2>
            <div className="flex justify-center gap-2 my-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Un proceso simplificado y personalizado para tu desarrollo profesional
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className={`inline-flex items-center justify-center p-3 ${
                    feature.color === "primary" 
                      ? "bg-primary hover:bg-primary-dark" 
                      : "bg-secondary hover:bg-secondary-dark"
                  } rounded-xl transition-colors`}>
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className={`mt-6 text-xl font-semibold text-gray-900 group-hover:${
                    feature.color === "primary" ? "text-primary" : "text-secondary"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Historias de Éxito
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-lg text-gray-600">
              Descubre cómo QhatuLab ha ayudado a personas como tú a alcanzar sus metas profesionales
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${
                  testimonial.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}></div>
                
                <div className={`${
                  testimonial.color === "primary" ? "text-primary" : "text-secondary"
                } text-4xl mb-4 transform group-hover:scale-110 transition-transform`}>
                  "
                </div>
                
                <div className="h-48">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="mt-8 flex items-center pt-4 border-t border-gray-100">
                  <div className="relative">
                    <div className={`absolute -inset-0.5 ${
                      testimonial.color === "primary" ? "bg-primary" : "bg-secondary"
                    } rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <img
                      className={`relative h-12 w-12 rounded-full object-cover border-2 ${
                        testimonial.color === "primary" ? "border-primary" : "border-secondary"
                      }`}
                      src={testimonial.image}
                      alt={testimonial.name ? `Foto de ${testimonial.name}` : 'Imagen de un usuario'}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/48';
                        e.target.alt = 'Imagen predeterminada';
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <div className={`font-semibold ${
                      testimonial.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Equipo SeedMinds
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-lg text-gray-600">
              Conoce al equipo detrás de QhatuLab
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className="flex flex-col items-center group"
              >
                <div className={`w-48 h-48 rounded-full overflow-hidden mb-6 transform transition-transform group-hover:scale-105 border-4 ${index % 2 === 0 ? 'border-primary hover:border-primary-dark' : 'border-secondary hover:border-secondary-dark'}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className={`text-md px-4 py-1 rounded-full ${
                  index % 2 === 0 
                  ? 'bg-primary/10 text-primary-dark' 
                  : 'bg-secondary/10 text-secondary-dark'
                }`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comienza tu Viaje Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Únete a QhatuLab y da el primer paso hacia tu desarrollo profesional inclusivo.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/registro"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all hover:shadow-md"
              aria-label="Ir a la página de registro"
              title="Regístrate en QhatuLab"
            >
              Registrarse ahora
            </Link>
            <Link
              to="/comunidad"
              className="px-8 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all group flex items-center gap-2"
              aria-label="Ir a la página de la comunidad"
              title='Conoce la comunidad de QhatuLab'
            >
              Conoce la comunidad
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;