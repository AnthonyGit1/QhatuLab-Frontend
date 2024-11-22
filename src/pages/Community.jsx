import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageSquare, Award, ArrowRight, Heart, Share2, ThumbsUp } from 'lucide-react';

const Community = () => {
  const upcomingEvents = [
    {
      title: "Workshop: Preparación para Entrevistas Tech",
      date: "25 Nov 2024",
      time: "15:00 - 17:00",
      attendees: 45,
      type: "Virtual"
    },
    {
      title: "Meetup: Inclusión Laboral en Tecnología",
      date: "28 Nov 2024",
      time: "18:00 - 20:00",
      attendees: 32,
      type: "Presencial"
    },
    {
      title: "Panel: Experiencias en Primera Búsqueda Laboral",
      date: "30 Nov 2024",
      time: "16:00 - 18:00",
      attendees: 28,
      type: "Virtual"
    }
  ];

  const successStories = [
    {
      name: "María Torres",
      role: "Frontend Developer",
      company: "TechCorp",
      image: "/img/testimonial1.jpeg",
      story: "Gracias a la comunidad QhatuLab, pude superar las barreras y encontrar mi primer empleo en tecnología.",
      likes: 128
    },
    {
      name: "Carlos Ruiz",
      role: "UX Designer",
      company: "DesignHub",
      image: "/img/testimonial1.jpeg",
      story: "El apoyo de los mentores y compañeros fue fundamental para mi desarrollo profesional.",
      likes: 95
    },
    {
      name: "Ana López",
      role: "Data Analyst",
      company: "DataCo",
      image: "/img/testimonial1.jpeg",
      story: "Los workshops y la práctica constante me ayudaron a alcanzar mi meta profesional.",
      likes: 156
    }
  ];

  const forumTopics = [
    {
      title: "Consejos para primera entrevista tech",
      category: "Entrevistas",
      responses: 24,
      views: 156,
      isHot: true
    },
    {
      title: "Recursos para aprender programación",
      category: "Recursos",
      responses: 18,
      views: 203,
      isHot: true
    },
    {
      title: "Experiencias en bootcamps",
      category: "Experiencias",
      responses: 15,
      views: 128,
      isHot: false
    }
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Comunidad QhatuLab
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a una comunidad vibrante de profesionales y empresas comprometidas con la inclusión laboral.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">+500 Miembros</h3>
              <p className="text-gray-600">Profesionales y estudiantes compartiendo conocimiento</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-lg mb-4">
                <Calendar className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eventos Semanales</h3>
              <p className="text-gray-600">Workshops, meetups y sesiones de networking</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Foro Activo</h3>
              <p className="text-gray-600">Resuelve dudas y comparte experiencias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Próximos Eventos</h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      event.type === 'Virtual' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">
                  {event.date} • {event.time}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{event.attendees} asistentes</span>
                  <button className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1">
                    Inscribirse <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Historias de Éxito</h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full border-2 border-primary object-cover"
                    src={story.image}
                    alt={story.name}
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role} en {story.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" /> {story.likes}
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-secondary transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                  <Award className="h-5 w-5 text-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Foro de la Comunidad</h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {forumTopics.map((topic, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors border-b last:border-b-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                      {topic.isHot && (
                        <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {topic.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" /> {topic.responses}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" /> {topic.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/foro"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors gap-2"
              aria-label="Ir a la página de foro"
              title="Ver todos los temas del foro"
            >
              Ver todos los temas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Forma parte de un espacio inclusivo donde podrás crecer profesionalmente y conectar con otros profesionales.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/registro"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all hover:shadow-md"
              aria-label="Ir a la página de registro"
              title="Regístrate en QhatuLab"
            >
              Registrarse
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Ir a la página de acerca de"
              title="Conoce más sobre QhatuLab"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;