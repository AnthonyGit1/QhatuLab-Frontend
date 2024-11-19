# QhatuLab - Plataforma de Empleo Inclusivo 🌟

![QhatuLab Logo](/public/logo.png)

QhatuLab es una plataforma innovadora diseñada para conectar el talento diverso con empleadores comprometidos, facilitando la inclusión laboral de personas con discapacidad a través de tecnología de vanguardia y un enfoque centrado en el usuario.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/qhatulab)
[![Made with Love](https://img.shields.io/badge/Made%20with-Love-ff69b4.svg)](https://github.com/yourusername/qhatulab)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🌟 Características Principales

- **Personalización Adaptativa**: Interfaz personalizable según las necesidades específicas de cada usuario
- **Formación Especializada**: Cursos y recursos adaptados para diferentes perfiles
- **Simulador de Entrevistas**: Entrenamiento con IA para preparación laboral
- **Comunidad Inclusiva**: Espacio de networking y apoyo mutuo
- **Accesibilidad Universal**: Diseño centrado en la accesibilidad WCAG 2.1

## 🚀 Stack Tecnológico

### Frontend
- React.js 18
- Tailwind CSS
- Lucide Icons
- React Router DOM
- Vite

### Backend
- Ruby on Rails
- MongoDB
- JWT Authentication

### IA y Machine Learning
- Llama 2 (vía Replicate)
- APIs de procesamiento de lenguaje natural

### Infraestructura
- Vercel (Frontend)
- Railway (Backend & MongoDB)
- Replicate (Modelo IA)

## 📂 Estructura del Proyecto

```
qhatulab-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.jsx
├── .env.example
├── package.json
└── README.md
```

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/yourusername/qhatulab.git
cd qhatulab
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

## 🌐 Despliegue

El proyecto está configurado para despliegue continuo:

- **Frontend**: Automáticamente desplegado en Vercel con cada push a `main`
- **Backend**: Desplegado en Railway con CI/CD configurado
- **Base de Datos**: MongoDB hosteado en Railway
- **IA**: Modelo Llama 2 accesible vía Replicate

## 🤝 Contribución

Las contribuciones son siempre bienvenidas. Por favor, lee nuestras [guías de contribución](CONTRIBUTING.md) antes de enviar un PR.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Equipo

- **Anthony Rosas** - Backend & IA
- **Jaci Lucas** - Frontend & UX
- **Joshelyn Riveros** - Contenido & Testing

## 🌟 Agradecimientos

- [Vercel](https://vercel.com) por el hosting
- [Railway](https://railway.app) por la infraestructura
- [Replicate](https://replicate.com) por el acceso a modelos de IA
- Todos los contribuidores que hacen posible este proyecto

## 📧 Contacto

Para preguntas y soporte, por favor contacta a:
- Email: support@qhatulab.com
- Twitter: [@qhatulab](https://twitter.com/qhatulab)
- LinkedIn: [QhatuLab](https://linkedin.com/company/qhatulab)

---

<div align="center">
  Hecho con ❤️ por el equipo de QhatuLab
</div>