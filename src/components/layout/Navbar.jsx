import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Función para cerrar el menú móvil
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Scroll al inicio cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/comunidad', label: 'Comunidad' },
    { path: '/capacitacion', label: 'Capacitación' },
    { path: '/entrevista-rv', label: 'Entrevista RV' },
    { path: '/asesoria-legal', label: 'Asesoria Legal' },
    { path: '/apoyo-psicologico', label: 'Apoyo Psicológico' },
  ];

  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo y Nombre */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img
                className="h-8 w-auto"
                src="/img/logo.png"
                alt="QhatuLab Logo"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                QhatuLab
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 transition-colors relative group ${
                  isActive(link.path) ? 'text-primary' : 'hover:text-primary'
                }`}
                aria-label={link.label}
                title={link.label}
              >
                {link.label}
                {/* Indicador de página activa */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
                  isActive(link.path) ? 'bg-primary scale-x-100' : 'bg-primary'
                }`} />
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-secondary transition-colors"
                aria-label="Iniciar Sesión"
                title="Iniciar Sesión"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/registro"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-all hover:shadow-md"
                aria-label="Registrarse"
                title="Registrarse"
              >
                Registrarse
              </Link>
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-primary transition-colors"
            aria-label="Abrir menú"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
                onClick={closeMenu}
                aria-label={link.label}
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors"
              onClick={closeMenu}
              aria-label="Iniciar Sesión"
              title="Iniciar Sesión"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/registro"
              className="block px-3 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all hover:shadow-md"
              onClick={closeMenu}
              aria-label="Registrarse"
              title="Registrarse"
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