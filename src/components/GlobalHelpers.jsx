import React from "react";
import { useLocation } from "react-router-dom";
import AccessibilityMenu from "./AccessibilityMenu";
import SignLanguageHelper from "./SignLanguageHelper";

const GlobalHelpers = () => {
  const location = useLocation();

  const getPageConfig = (pathname) => {
    const configs = {
      "/": {
        section: "home",
        title: "QhatuLab",
        description: "Plataforma líder en inclusión laboral y desarrollo profesional."
      },
      "/comunidad": {
        section: "other",
        title: "Comunidad QhatuLab",
        description: "Espacio de interacción y networking para profesionales diversos. Conecta con otros miembros y participa en eventos."
      },
      "/capacitacion": {
        section: "other",
        title: "Centro de Capacitación",
        description: "Accede a cursos especializados y recursos de aprendizaje adaptados a diferentes necesidades."
      },
      "/entrevista-rv": {
        section: "other",
        title: "Simulador de Entrevistas",
        description: "Practica y mejora tus habilidades de entrevista en un entorno virtual seguro."
      },
      "/login": {
        section: "other",
        title: "Iniciar Sesión",
        description: "Accede a tu cuenta de QhatuLab para continuar tu desarrollo profesional."
      },
      "/registro": {
        section: "other",
        title: "Crear Cuenta",
        description: "Únete a QhatuLab y comienza tu viaje hacia el empleo inclusivo."
      }
    };

    // Configuración por defecto si la ruta no existe
    return configs[pathname] || {
      section: "other",
      title: "QhatuLab",
      description: "Plataforma líder en inclusión laboral y desarrollo profesional."
    };
  };

  // Obtener la configuración para la página actual
  const pageConfig = getPageConfig(location.pathname);

  return (
    <>
      <AccessibilityMenu />
      <SignLanguageHelper {...pageConfig} />
    </>
  );
};

export default GlobalHelpers;