import React from 'react';
import { Link } from 'react-router-dom';
import { Construction, ChevronLeft, BellRing } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="mt-24 mb-12 sm:mx-auto sm:w-full sm:max-w-md">
        <Link 
          to="/" 
          className="flex items-center justify-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          {/* Logo o icono */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img src="/img/logo.png" alt="QhatuLab" className="h-12" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Próximamente
            </h2>
            <div className="flex justify-center gap-2 my-4">
              <div className="w-8 h-1 bg-primary"></div>
              <div className="w-8 h-1 bg-secondary"></div>
            </div>
            <p className="text-gray-600 mt-4">
              Estamos trabajando en mejorar tu experiencia. El inicio de sesión estará disponible muy pronto.
            </p>
          </div>

          {/* Formulario de notificación */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <BellRing className="h-5 w-5 text-secondary" />
              ¿Quieres ser notificado cuando esté listo?
            </h3>
            <div className="mt-4">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                  aria-label="Notificarme"
                >
                  Notificarme
                </button>
              </form>
            </div>
          </div>

          {/* Enlaces alternativos */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              ¿Aún no tienes una cuenta?
            </p>
            <Link
              to="/registro"
              className="w-full flex justify-center py-3 px-4 border border-secondary text-secondary rounded-md hover:bg-secondary hover:text-white transition-all"
              aria-label="Regístrate aquí"
              title="Regístrate aquí"
            >
              Regístrate aquí
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda? 
            <Link 
              to="/contacto" 
              className="ml-1 text-primary hover:text-primary-dark"
              aria-label="Contáctanos"
              title="Contáctanos"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;