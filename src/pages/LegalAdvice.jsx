import React from "react";
import { Link } from "react-router-dom";
import {
  Gavel,
  BookOpen,
  ShieldCheck,
  Users,
  Briefcase,
  Phone,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const LegalAdvice = () => {
  const features = [
    {
      title: "Defensa de Derechos",
      description:
        "Protegemos tus derechos laborales frente a cualquier situación.",
      icon: ShieldCheck,
    },
    {
      title: "Normas Actualizadas",
      description:
        "Te ofrecemos información sobre la normativa laboral vigente.",
      icon: BookOpen,
    },
    {
      title: "Consultas Personalizadas",
      description: "Resolvemos tus dudas con asesoría profesional y clara.",
      icon: Gavel,
    },
    {
      title: "Asistencia Continua",
      description: "Soporte constante para trabajadores y empleadores.",
      icon: Phone,
    },
  ];

  const services = [
    {
      title: "Servicio de Consultas",
      description:
        "¿Tienes dudas sobre derechos laborales, contratos o beneficios? Obtén asesoría profesional y clara mediante nuestro Servicio de Consultas especializado.",
      link: "https://www2.trabajo.gob.pe/servicios/servicio-de-consultas/",
      icon: Gavel,
    },
    {
      title: "Tu Experiencia Vale",
      description:
        "El programa 'Tu Experiencia Vale' certifica tus habilidades laborales, mejorando tu perfil profesional y acceso a mejores oportunidades de empleo.",
      link: "https://www2.trabajo.gob.pe/servicios/tu-experiencia-vale/",
      icon: CheckCircle,
    },
    {
      title: "Patrocinio Judicial Gratuito",
      description:
        "Si enfrentas una vulneración laboral y careces de recursos, este servicio brinda asesoría gratuita y representación legal en procesos judiciales.",
      link: "https://www2.trabajo.gob.pe/servicios/servicio-de-patrocinio-judicial-gratuito/",
      icon: ShieldCheck,
    },
    {
      title: "Liquidaciones de Beneficios Sociales",
      description:
        "Al finalizar una relación laboral, este servicio calcula de forma precisa y transparente tus beneficios sociales, CTS, vacaciones truncas y gratificaciones pendientes.",
      link: "https://www2.trabajo.gob.pe/servicios/servicio-de-liquidaciones-de-beneficios-sociales/",
      icon: FileText,
    },
    {
      title: "Autorización de Trabajo para Adolescentes",
      description:
        "Este servicio permite a adolescentes obtener la autorización necesaria para trabajar formalmente, garantizando sus derechos laborales y seguridad integral.",
      link: "https://www.gob.pe/institucion/mtpe/informes-publicaciones/2078481-autorizacion-de-trabajo-para-el-adolescente",
      icon: Briefcase,
    },
    {
      title: "Sistema de Accidentes en el Trabajo",
      description:
        "Notifica accidentes laborales o enfermedades ocupacionales fácilmente. Este servicio asegura el registro, seguimiento y protección de los derechos del trabajador.",
      link: "https://www.gob.pe/774-notificar-accidentes-en-el-trabajo-y-enfermedades-ocupacionales",
      icon: ShieldCheck,
    },
    {
      title: "Sistema de Contratos y Convenios",
      description:
        "Gestiona y formaliza contratos laborales y convenios colectivos con este servicio, garantizando el cumplimiento de las leyes laborales vigentes en Perú.",
      link: "https://www2.trabajo.gob.pe/servicios/contratos-y-convenios/",
      icon: BookOpen,
    },
    {
      title: "Sistema de Seguros Vida Ley",
      description:
        "El Seguro Vida Ley es obligatorio, protege a los trabajadores ante accidentes fatales o incapacidades, garantizado por empleadores.",
      link: "https://www2.trabajo.gob.pe/sobre-el-sistema-de-seguros-vida-ley/",
      icon: Users,
    },
  ];

  const despidoTypes = [
    {
      title: "Despido Justificado",
      description:
        "Ocurre cuando el trabajador comete una falta grave que viola las obligaciones contractuales, como incumplimiento de deberes, conductas delictivas o abandono laboral.",
    },
    {
      title: "Despido Injustificado",
      description:
        "Se produce cuando el empleador termina la relación laboral sin una causa legal válida, generando el derecho del trabajador a recibir una compensación.",
    },
    {
      title: "Despido Arbitrario",
      description:
        "Representa una violación directa de los derechos fundamentales del trabajador, basado en discriminación o motivos ilegítimos.",
    },
  ];

  const accionesDespido = [
    "Solicita formalmente la carta de despido, verificando detalladamente los motivos expuestos",
    "Reúne y documenta toda la evidencia laboral relevante para tu caso",
    "Consulta con un profesional legal especializado en derecho laboral",
    "Evalúa las posibles acciones: indemnización, reposición o demanda judicial",
  ];

  const beneficiosDerecho = [
    "Prevenir potenciales abusos laborales",
    "Negociar desde una posición de información y fortaleza",
    "Proteger tu integridad profesional y personal",
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Asesoramiento Legal
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En <strong>QHATULAB</strong>, nos comprometemos a brindarte
              información y herramientas para que conozcas y ejerzas tus
              derechos laborales. Te ofrecemos servicios gratuitos y accesibles,
              tanto para trabajadores como para empleadores, con el fin de
              garantizar el cumplimiento de la normativa laboral vigente en
              Perú.
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
      {/* Servicios Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Nuestros Servicios
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                {/* Background Gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition-all"></div>
                {/* Service Card */}
                <div className="relative bg-white p-6 rounded-xl min-h-[22rem] flex flex-col justify-between">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${
                        index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <service.icon
                        className={`h-8 w-8 ${
                          index % 2 === 0 ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-gray-50 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Ver detalles <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Protege Tus Derechos Laborales
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Descubre cómo proteger tus derechos laborales y enfrentar
              situaciones de despido con conocimiento y determinación. Tu
              seguridad profesional comienza con información precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <ShieldCheck className="mr-3 text-primary" size={24} />
                    ¿Qué es un Despido?
                  </h3>
                  <p className="text-gray-600">
                    Un despido es la decisión unilateral del empleador de
                    finalizar la relación laboral con un trabajador. Esta acción
                    debe cumplir estrictamente con los requisitos legales
                    establecidos en la normativa laboral peruana, garantizando
                    los derechos fundamentales del trabajador.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Gavel className="mr-3 text-primary" size={24} />
                    Tipos de Despido
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {despidoTypes.map((type, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className="mr-2 mt-1 text-secondary"
                          size={20}
                        />
                        <span>
                          <strong>{type.title}:</strong> {type.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="mr-3 text-secondary" size={24} />
                  ¿Qué Hacer si Te Despiden?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {accionesDespido.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight
                        className="mr-2 mt-1 text-primary"
                        size={20}
                      />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="mr-3 text-primary" size={24} />
                  Importancia de Conocer Tus Derechos
                </h3>
                <p className="text-gray-600 mb-4">
                  El conocimiento de tus derechos laborales es tu principal
                  escudo contra la vulneración de tus intereses profesionales.
                </p>
                <ul className="space-y-2 text-gray-600">
                  {beneficiosDerecho.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="mr-2 text-secondary" size={16} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Necesitas Asesoría Legal?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Nuestro equipo de profesionales está listo para brindarte
            orientación personalizada sobre tus derechos laborales.
          </p>
          <Link
            to="/contacto"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-all hover:shadow-md"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LegalAdvice;
