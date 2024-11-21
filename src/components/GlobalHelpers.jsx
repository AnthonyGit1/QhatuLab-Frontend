import React from "react";
import { useLocation } from "react-router-dom";
import AccessibilityMenu from "./AccessibilityMenu";
import SignLanguageHelper from "./SignLanguageHelper";

const GlobalHelpers = () => {
  const location = useLocation();

  const getPageConfig = (pathname) => {
    const configs = {
      "/": {
        title: "Página Principal",
        description:
          "Bienvenido a QhatuLab. Aquí encontrarás una explicación de todas nuestras funcionalidades.",
        videoUrl: "/videos/signs/home.mp4",
      },
      "/comunidad": {
        title: "Comunidad QhatuLab",
        description:
          "Conoce nuestra comunidad y cómo interactuar con otros miembros.",
        videoUrl: "/videos/signs/community.mp4",
      },
      "/capacitacion": {
        title: "Centro de Capacitación",
        description: "Explora nuestros cursos y recursos de aprendizaje.",
        videoUrl: "/videos/signs/training.mp4",
      },
      "/entrevista-rv": {
        title: "Simulador de Entrevistas",
        description: "Guía del simulador de entrevistas en realidad virtual.",
        videoUrl: "/videos/signs/interview.mp4",
      },
      "/login": {
        title: "Iniciar Sesión",
        description: "Inicia sesión en tu cuenta de QhatuLab.",
        videoUrl: "/videos/signs/login.mp4",
      },
      "/registro": {
        title: "Registro",
        description: "Crea una cuenta en QhatuLab para comenzar.",
        videoUrl: "/videos/signs/register.mp4",
      },
    };

    return (
      configs[pathname] || {
        title: "QhatuLab",
        description: "Plataforma de inclusión laboral.",
        videoUrl: "/videos/signs/default.mp4",
      }
    );
  };

  const pageConfig = getPageConfig(location.pathname);

  return (
    <>
      <AccessibilityMenu />
      <SignLanguageHelper section={location.pathname} {...pageConfig} />
    </>
  );
};

export default GlobalHelpers;
