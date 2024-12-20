import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Heart,
  Smile,
  Users,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Clock,
  Star,
  Phone,
  BookOpen,
  Coffee,
  Leaf,
  Target,
  Sparkles,
} from "lucide-react";

const PsychologicalSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [recommendedService, setRecommendedService] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      id: 1,
      question: "¿Cómo te has estado sintiendo últimamente?",
      placeholder: "Comparte tus sentimientos actuales...",
    },
    {
      id: 2,
      question: "¿Qué te preocupa más en este momento?",
      placeholder: "Describe tus preocupaciones...",
    },
    {
      id: 3,
      question: "¿Hay algo que te esté causando mucho dolor o tristeza?",
      placeholder: "Expresa lo que te afecta...",
    },
    {
      id: 4,
      question: "¿Cómo estás manejando tus emociones en estos días?",
      placeholder: "Cuéntanos sobre tu manejo emocional...",
    },
    {
      id: 5,
      question: "¿Te sientes apoyado por las personas que tienes cerca?",
      placeholder: "Háblanos sobre tu red de apoyo...",
    },
    {
      id: 6,
      question: "¿Hay algo que te gustaría cambiar en tu situación actual?",
      placeholder: "Describe los cambios que deseas...",
    },
  ];

  const features = [
    {
      title: "Apoyo Profesional",
      description:
        "Especialistas calificados listos para escucharte y ayudarte.",
      icon: Brain,
    },
    {
      title: "Confidencialidad",
      description: "Tu privacidad es nuestra prioridad absoluta.",
      icon: Heart,
    },
    {
      title: "Atención Personalizada",
      description: "Cada persona es única y merece un enfoque individual.",
      icon: Smile,
    },
    {
      title: "Soporte Continuo",
      description: "Estamos contigo en cada paso de tu proceso.",
      icon: Users,
    },
  ];

  const services = [
    {
      id: "emocional",
      title: "Terapia Emocional",
      description: "Apoyo para manejar emociones, ansiedad y estrés.",
      icon: Heart,
    },
    {
      id: "familiar",
      title: "Terapia Familiar",
      description: "Mejora la comunicación y relaciones familiares.",
      icon: Users,
    },
    {
      id: "personal",
      title: "Desarrollo Personal",
      description: "Alcanza tu máximo potencial y bienestar.",
      icon: Star,
    },
    {
      id: "crisis",
      title: "Intervención en Crisis",
      description: "Apoyo inmediato en situaciones difíciles.",
      icon: AlertCircle,
    },
    {
      id: "mindfulness",
      title: "Mindfulness y Meditación",
      description:
        "Técnicas para reducir el estrés y aumentar la conciencia plena.",
      icon: Leaf,
    },
    {
      id: "pareja",
      title: "Terapia de Pareja",
      description: "Fortalece tu relación y mejora la comunicación.",
      icon: Heart,
    },
    {
      id: "autoestima",
      title: "Desarrollo de Autoestima",
      description: "Construye una imagen positiva y saludable de ti mismo.",
      icon: Sparkles,
    },
    {
      id: "laboral",
      title: "Coaching Laboral",
      description: "Supera desafíos profesionales y alcanza tus metas.",
      icon: Target,
    },
    {
      id: "jovenes",
      title: "Terapia para Jóvenes",
      description: "Apoyo especializado para adolescentes y adultos jóvenes.",
      icon: Smile,
    },
    {
      id: "adicciones",
      title: "Apoyo en Adicciones",
      description: "Acompañamiento en el proceso de recuperación.",
      icon: Coffee,
    },
    {
      id: "duelo",
      title: "Acompañamiento en Duelo",
      description: "Apoyo para procesar pérdidas y gestionar el dolor.",
      icon: Heart,
    },
    {
      id: "estres",
      title: "Manejo del Estrés",
      description: "Estrategias efectivas para manejar la presión diaria.",
      icon: Brain,
    },
  ];

  const handleAnswerSubmit = () => {
    if (currentAnswer.trim() === "") return; // No permite respuestas vacías

    setAnswers({ ...answers, [currentQuestionIndex]: currentAnswer });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(""); // Limpia el input para la siguiente pregunta
    } else {
      const recommendedId = "emocional";
      setRecommendedService(recommendedId);
      setIsModalOpen(true);
    }
  };

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          {children}
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AppointmentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Cita Agendada con Éxito!
            </h2>
            <p className="text-gray-600 mb-4">
              Un especialista se pondrá en contacto contigo dentro de las
              próximas 24 horas para confirmar los detalles de tu cita.
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              Apoyo Psicológico
            </h1>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En <strong>QHATULAB</strong>, creemos que tu bienestar emocional
              es fundamental. Nuestro equipo de profesionales está aquí para
              escucharte y apoyarte en tu camino hacia una mejor salud mental.
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

      {/* Evaluación Psicológica Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Evaluación Psicológica Gratuita
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div className="w-12 h-1 bg-secondary"></div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">
              {questions[currentQuestionIndex].question}
            </h3>
            <textarea
              className="w-full p-4 border rounded-lg mb-4 min-h-[120px]"
              placeholder={questions[currentQuestionIndex].placeholder}
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Pregunta {currentQuestionIndex + 1} de {questions.length}
              </span>
              <button
                onClick={handleAnswerSubmit}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Siguiente"
                  : "Finalizar"}
              </button>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative p-6 rounded-xl bg-white shadow-md flex flex-col justify-between transition-all ${
                  recommendedService === service.id
                    ? "ring-2 ring-secondary"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors mt-4"
                >
                  Agendar Cita
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Señales de Alerta</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 text-primary" size={20} />
                  <span>Cambios significativos en el estado de ánimo</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 text-primary" size={20} />
                  <span>Dificultad para dormir o dormir en exceso</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="mr-2 mt-1 text-primary" size={20} />
                  <span>Pérdida de interés en actividades habituales</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                Recursos de Emergencia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="mr-2 mt-1 text-secondary" size={20} />
                  <span>Línea de Crisis 24/7: 0800-4-1212</span>
                </li>
                <li className="flex items-start">
                  <MessageCircle
                    className="mr-2 mt-1 text-secondary"
                    size={20}
                  />
                  <span>Chat de Apoyo en Línea</span>
                </li>
                <li className="flex items-start">
                  <Users className="mr-2 mt-1 text-secondary" size={20} />
                  <span>Grupos de Apoyo Virtual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Necesitas Apoyo Psicológico?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            No estás solo. Nuestro equipo de profesionales está aquí para
            ayudarte en tu camino hacia el bienestar emocional.
          </p>
          <Link
            to="/contacto"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-all hover:shadow-md inline-flex items-center"
          >
            Contáctanos <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Modals */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Evaluación Completada</h2>
        <p className="text-gray-600 mb-4">
          Basado en tus respuestas, recomendamos nuestro servicio de:
        </p>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-secondary mb-2">
            Terapia Emocional
          </h4>
          <p className="text-gray-700">
            Este servicio te ayudará a manejar mejor tus emociones y desarrollar
            estrategias efectivas para tu bienestar.
          </p>
        </div>
      </Modal>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
};

export default PsychologicalSupport;
