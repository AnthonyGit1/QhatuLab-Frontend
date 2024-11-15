import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo y Nombre */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="QhatuLab Logo"
              />
              <span className="font-bold text-xl text-gray-900">QhatuLab</span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/empleos"
              className="text-gray-700 hover:text-[#9333EA] transition-colors"
            >
              Empleos IA
            </Link>
            <Link
              to="/comunidad"
              className="text-gray-700 hover:text-[#9333EA] transition-colors"
            >
              Comunidad
            </Link>
            <Link
              to="/capacitacion"
              className="text-gray-700 hover:text-[#9333EA] transition-colors"
            >
              Capacitación
            </Link>
            <Link
              to="/asistente"
              className="text-gray-700 hover:text-[#9333EA] transition-colors"
            >
              Asistente IA
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-[#9333EA] transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/registro"
                className="bg-[#9333EA] text-white px-4 py-2 rounded-lg hover:bg-[#7C3AED] transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/empleos"
              className="block px-3 py-2 text-gray-700 hover:text-[#9333EA]"
            >
              Empleos IA
            </Link>
            <Link
              to="/comunidad"
              className="block px-3 py-2 text-gray-700 hover:text-[#9333EA]"
            >
              Comunidad
            </Link>
            <Link
              to="/capacitacion"
              className="block px-3 py-2 text-gray-700 hover:text-[#9333EA]"
            >
              Capacitación
            </Link>
            <Link
              to="/asistente"
              className="block px-3 py-2 text-gray-700 hover:text-[#9333EA]"
            >
              Asistente IA
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-[#9333EA]"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/registro"
              className="block px-3 py-2 bg-[#9333EA] text-white rounded-lg"
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;