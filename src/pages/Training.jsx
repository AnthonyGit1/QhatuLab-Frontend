import React from "react";
import { Link } from "react-router-dom";
import {
  Book,
  Code,
  Users,
  Award,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Briefcase,
  BarChart,
  Layout,
  Database,
} from "lucide-react";

const Training = () => {
  const courses = [
    {
      title: "Desarrollo Web Frontend",
      category: "Programación",
      level: "Principiante",
      duration: "12 semanas",
      students: 234,
      rating: 4.8,
      image: "/img/desarrollo-front-end.png",
      icon: Layout,
    },
    {
      title: "Análisis de Datos",
      category: "Data Science",
      level: "Intermedio",
      duration: "10 semanas",
      students: 189,
      rating: 4.7,
      image: "/img/analisis-datos.jpg",
      icon: BarChart,
    },
    {
      title: "Desarrollo Backend",
      category: "Programación",
      level: "Intermedio",
      duration: "14 semanas",
      students: 156,
      rating: 4.9,
      image: "/img/desarrollo-backend.png",
      icon: Database,
    },
  ];

  const pathways = [
    {
      title: "Desarrollo Web Full Stack",
      description: "Domina el desarrollo web de principio a fin",
      duration: "6 meses",
      modules: 12,
      icon: Code,
    },
    {
      title: "Ciencia de Datos",
      description: "Aprende a analizar y visualizar datos",
      duration: "5 meses",
      modules: 10,
      icon: BarChart,
    },
    {
      title: "Diseño UX/UI",
      description: "Crea experiencias digitales excepcionales",
      duration: "4 meses",
      modules: 8,
      icon: Layout,
    },
  ];

  const features = [
    {
      title: "Aprendizaje Personalizado",
      description: "Contenido adaptado a tu ritmo y necesidades específicas",
      icon: Users,
    },
    {
      title: "Certificación Profesional",
      description: "Obtén certificados reconocidos por la industria",
      icon: Award,
    },
    {
      title: "Mentoría Individual",
      description: "Sesiones one-on-one con expertos en la industria",
      icon: Users,
    },
    {
      title: "Proyectos Prácticos",
      description: "Aplica lo aprendido en proyectos reales",
      icon: Briefcase,
    },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Capacitación Especializada
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desarrolla las habilidades más demandadas en el mercado con
              nuestros programas de formación intensiva.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center group hover:bg-white hover:shadow-md transition-all"
              >
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${
                    index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                  }`}
                >
                  <feature.icon
                    className={`h-6 w-6 ${
                      index % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos Destacados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Cursos Destacados
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title ? course.title : "Imagen predeterminada"}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/48";
                      e.target.alt = "Imagen predeterminada";
                    }}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        index % 2 === 0
                          ? "bg-primary/90 text-white"
                          : "bg-secondary/90 text-white"
                      }`}
                    >
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {course.duration}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />{" "}
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Users className="h-4 w-4" /> {course.students}{" "}
                      estudiantes
                    </span>
                    <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rutas de Aprendizaje */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Rutas de Aprendizaje
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition-all"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <div
                    className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${
                      index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                    }`}
                  >
                    <pathway.icon
                      className={`h-6 w-6 ${
                        index % 2 === 0 ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pathway.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {pathway.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Book className="h-4 w-4" /> {pathway.modules} módulos
                    </span>
                  </div>
                  <button
                    className="mt-4 w-full py-2 bg-gray-50 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    aria-label="Ver detalles"
                  >
                    Ver detalles <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="px-8 py-16 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Metodología Probada
                    </h3>
                    <p className="text-white/80">
                      Aprende con un sistema diseñado para maximizar tu
                      retención
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Instructores Expertos
                    </h3>
                    <p className="text-white/80">
                      Aprende de profesionales con experiencia en la industria
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Certificación Reconocida
                    </h3>
                    <p className="text-white/80">
                      Obtén certificados validados por empresas líderes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comienza Tu Viaje Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transforma tu carrera con nuestros programas de capacitación
            especializados.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/registro"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all hover:shadow-md"
              aria-label="Ir a la página de registro"
              title="Empezar ahora con el registro"
            >
              Empezar ahora
            </Link>
            <Link
              to="/cursos"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Ver todos los cursos"
              title="Ver todos los cursos"
            >
              Ver todos los cursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
