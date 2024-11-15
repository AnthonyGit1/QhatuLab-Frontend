const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      role: "Desarrolladora Frontend en Tech Corp",
      image: "/testimonial1.jpeg",
      quote: "QhatuLab no solo me ayudó a conseguir mi primer empleo en tecnología, sino que me dio las herramientas para crecer profesionalmente."
    },
    {
      name: "Juan Pérez",
      role: "Analista de Datos en Data Solutions",
      image: "/testimonial1.jpeg",
      quote: "El simulador de entrevistas me dio la confianza que necesitaba. Ahora trabajo en mi empresa soñada."
    },
    {
      name: "Ana Torres",
      role: "Diseñadora UX en Creative Studio",
      image: "/testimonial1.jpeg",
      quote: "Los cursos personalizados y el apoyo constante fueron clave para mi desarrollo profesional."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Historias de Éxito
          </h2>
          <p className="text-lg text-gray-600">
            Descubre cómo QhatuLab ha ayudado a personas como tú a alcanzar sus metas profesionales
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-[#9333EA] text-4xl mb-4">"</div>
              
              <div className="h-48">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center pt-4 border-t border-gray-100">
                <img
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#9333EA]"
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/48';
                  }}
                />
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;