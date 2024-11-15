import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { candidateService } from "../services/api";
import { validateStep } from "../utils/validators";
import {
  TIPOS_DISCAPACIDAD,
  MODALIDADES_TRABAJO,
  TIPOS_CONTRATO,
  NIVELES_EDUCACION,
  RANGOS_SALARIO,
  HABILIDADES,
  AREAS_TRABAJO,
  REGIONES_PERU,
} from "../utils/constants";

const StepIndicator = ({ currentStep, totalSteps, steps }) => (
  <div className="mb-8">
    <div className="relative">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#9333EA] transition-all duration-500"
        />
      </div>
      <div className="flex justify-between w-full">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex flex-col items-center ${
              index + 1 <= currentStep ? "text-[#9333EA]" : "text-gray-400"
            }`}
          >
            <div
              className={`rounded-full transition-colors w-8 h-8 flex items-center justify-center ${
                index + 1 <= currentStep
                  ? "bg-[#9333EA] text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-xs mt-2 font-medium">{step}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    datosPersonales: {
      nombres: "",
      apellidos: "",
      edad: "",
      ubicacion: {
        region: "",
        provincia: "",
        distrito: "",
      },
      email: "",
      telefono: "",
      tipoDiscapacidad: "",
    },
    experiencia: [
      {
        area: "",
        años: 0,
      },
    ],
    educacion: {
      nivel: "",
    },
    habilidades: [],
    preferenciasLaborales: {
      modalidad: "",
      tipoContrato: "",
      areasInteres: [],
      expectativaSalarial: "",
    },
  });

  const steps = [
    "Datos Personales",
    "Ubicación",
    "Experiencia",
    "Habilidades",
    "Preferencias",
  ];

  const addExperience = () => {
    setFormData({
      ...formData,
      experiencia: [
        ...formData.experiencia,
        {
          area: "",
          años: 0,
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const newExperience = formData.experiencia.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      experiencia: newExperience,
    });
  };

  const updateExperience = (index, field, value) => {
    const newExperience = formData.experiencia.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setFormData({
      ...formData,
      experiencia: newExperience,
    });
  };

  const handleNext = () => {
    const { isValid, errors } = validateStep(currentStep, formData);
    setErrors(errors);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateStep(currentStep, formData);
    if (!isValid) {
      setErrors(errors);
      return;
    }

    try {
      const response = await candidateService.create(formData);
      if (response.success) {
        navigate(`/matches/${response.data._id}`);
      }
    } catch (error) {
      setErrors({
        submit: "Error al enviar el formulario. Intente nuevamente.",
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Información Personal
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Nombres */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className={`w-full rounded-lg border ${
                      errors.nombres ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.nombres}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          nombres: e.target.value,
                        },
                      })
                    }
                  />
                  {errors.nombres && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nombres}
                    </p>
                  )}
                </div>

                {/* Apellidos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className={`w-full rounded-lg border ${
                      errors.apellidos ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.apellidos}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          apellidos: e.target.value,
                        },
                      })
                    }
                  />
                  {errors.apellidos && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.apellidos}
                    </p>
                  )}
                </div>

                {/* Edad */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Edad
                  </label>
                  <input
                    type="number"
                    min="1"
                    className={`w-full rounded-lg border ${
                      errors.edad ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.edad}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          edad: e.target.value,
                        },
                      })
                    }
                  />
                  {errors.edad && (
                    <p className="mt-1 text-sm text-red-600">{errors.edad}</p>
                  )}
                </div>

                {/* Correo Electrónico */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className={`w-full rounded-lg border ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          email: e.target.value,
                        },
                      })
                    }
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className={`w-full rounded-lg border ${
                      errors.telefono ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.telefono}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          telefono: e.target.value,
                        },
                      })
                    }
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.telefono}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Tipo de Discapacidad y Ubicación
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Discapacidad
                  </label>
                  <select
                    className={`w-full rounded-lg border ${
                      errors.tipoDiscapacidad
                        ? "border-red-300"
                        : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.datosPersonales.tipoDiscapacidad}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        datosPersonales: {
                          ...formData.datosPersonales,
                          tipoDiscapacidad: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="">Seleccione una opción</option>
                    {TIPOS_DISCAPACIDAD.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                  {errors.tipoDiscapacidad && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.tipoDiscapacidad}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Región
                    </label>
                    <select
                      className={`w-full rounded-lg border ${
                        errors.region ? "border-red-300" : "border-gray-300"
                      } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                      value={formData.datosPersonales.ubicacion.region}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          datosPersonales: {
                            ...formData.datosPersonales,
                            ubicacion: {
                              ...formData.datosPersonales.ubicacion,
                              region: e.target.value,
                            },
                          },
                        })
                      }
                    >
                      <option value="">Seleccione una región</option>
                      {REGIONES_PERU.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                    {errors.region && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.region}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Provincia
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]"
                      value={formData.datosPersonales.ubicacion.provincia}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          datosPersonales: {
                            ...formData.datosPersonales,
                            ubicacion: {
                              ...formData.datosPersonales.ubicacion,
                              provincia: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Distrito
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]"
                      value={formData.datosPersonales.ubicacion.distrito}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          datosPersonales: {
                            ...formData.datosPersonales,
                            ubicacion: {
                              ...formData.datosPersonales.ubicacion,
                              distrito: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Experiencia Laboral
                </h3>
                <button
                  type="button"
                  onClick={addExperience}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#9333EA] hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA]"
                >
                  + Añadir Experiencia
                </button>
              </div>

              <div className="space-y-8">
                {formData.experiencia.map((exp, index) => (
                  <div
                    key={index}
                    className="relative border border-gray-200 rounded-lg p-6"
                  >
                    {formData.experiencia.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeExperience(index)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Área
                        </label>
                        <select
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]"
                          value={exp.area}
                          onChange={(e) =>
                            updateExperience(index, "area", e.target.value)
                          }
                        >
                          <option value="">Seleccione un área</option>
                          {AREAS_TRABAJO.map((area) => (
                            <option key={area} value={area}>
                              {area}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Años de Experiencia
                        </label>
                        <input
                          type="number"
                          min="0"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]"
                          value={exp.años}
                          onChange={(e) =>
                            updateExperience(
                              index,
                              "años",
                              parseInt(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Educación
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nivel de Educación
                </label>
                <select
                  className={`w-full rounded-lg border ${
                    errors.educacion ? "border-red-300" : "border-gray-300"
                  } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                  value={formData.educacion.nivel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      educacion: {
                        nivel: e.target.value,
                      },
                    })
                  }
                >
                  <option value="">Seleccione un nivel</option>
                  {NIVELES_EDUCACION.map((nivel) => (
                    <option key={nivel} value={nivel}>
                      {nivel}
                    </option>
                  ))}
                </select>
                {errors.educacion && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.educacion}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Habilidades
              </h3>

              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Selecciona las habilidades que mejor te describen. Puedes
                  seleccionar múltiples opciones.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HABILIDADES.map((habilidad) => (
                    <div
                      key={habilidad}
                      className={`relative flex items-center p-4 rounded-lg border ${
                        formData.habilidades.includes(habilidad)
                          ? "border-[#9333EA] bg-purple-50"
                          : "border-gray-200 hover:border-[#9333EA]"
                      } cursor-pointer transition-all duration-200`}
                      onClick={() => {
                        if (formData.habilidades.includes(habilidad)) {
                          setFormData({
                            ...formData,
                            habilidades: formData.habilidades.filter(
                              (h) => h !== habilidad
                            ),
                          });
                        } else {
                          setFormData({
                            ...formData,
                            habilidades: [...formData.habilidades, habilidad],
                          });
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-[#9333EA] focus:ring-[#9333EA]"
                        checked={formData.habilidades.includes(habilidad)}
                        onChange={() => {}}
                      />
                      <label className="ml-3 text-sm text-gray-700 break-words">
                        {habilidad.replace(/_/g, " ")}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.habilidades && (
                  <p className="mt-4 text-sm text-red-600">
                    {errors.habilidades}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Preferencias Laborales
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Modalidad de Trabajo
                  </label>
                  <select
                    className={`w-full rounded-lg border ${
                      errors.modalidad ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.preferenciasLaborales.modalidad}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferenciasLaborales: {
                          ...formData.preferenciasLaborales,
                          modalidad: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="">Seleccione una modalidad</option>
                    {MODALIDADES_TRABAJO.map((modalidad) => (
                      <option key={modalidad} value={modalidad}>
                        {modalidad}
                      </option>
                    ))}
                  </select>
                  {errors.modalidad && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.modalidad}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Contrato
                  </label>
                  <select
                    className={`w-full rounded-lg border ${
                      errors.tipoContrato ? "border-red-300" : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.preferenciasLaborales.tipoContrato}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferenciasLaborales: {
                          ...formData.preferenciasLaborales,
                          tipoContrato: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="">Seleccione un tipo de contrato</option>
                    {TIPOS_CONTRATO.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                  {errors.tipoContrato && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.tipoContrato}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expectativa Salarial
                  </label>
                  <select
                    className={`w-full rounded-lg border ${
                      errors.expectativaSalarial
                        ? "border-red-300"
                        : "border-gray-300"
                    } px-4 py-3 text-gray-900 focus:border-[#9333EA] focus:ring-[#9333EA]`}
                    value={formData.preferenciasLaborales.expectativaSalarial}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferenciasLaborales: {
                          ...formData.preferenciasLaborales,
                          expectativaSalarial: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="">Seleccione un rango salarial</option>
                    {RANGOS_SALARIO.map((rango) => (
                      <option key={rango} value={rango}>
                        {rango}
                      </option>
                    ))}
                  </select>
                  {errors.expectativaSalarial && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.expectativaSalarial}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Áreas de Interés
                </label>
                <p className="text-sm text-gray-500 mb-4">
                  Selecciona las áreas en las que te gustaría trabajar
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {AREAS_TRABAJO.map((area) => (
                    <div
                      key={area}
                      className={`relative flex items-center p-4 rounded-lg border ${
                        formData.preferenciasLaborales.areasInteres.includes(
                          area
                        )
                          ? "border-[#9333EA] bg-purple-50"
                          : "border-gray-200 hover:border-[#9333EA]"
                      } cursor-pointer transition-all duration-200`}
                      onClick={() => {
                        if (
                          formData.preferenciasLaborales.areasInteres.includes(
                            area
                          )
                        ) {
                          setFormData({
                            ...formData,
                            preferenciasLaborales: {
                              ...formData.preferenciasLaborales,
                              areasInteres:
                                formData.preferenciasLaborales.areasInteres.filter(
                                  (a) => a !== area
                                ),
                            },
                          });
                        } else {
                          setFormData({
                            ...formData,
                            preferenciasLaborales: {
                              ...formData.preferenciasLaborales,
                              areasInteres: [
                                ...formData.preferenciasLaborales.areasInteres,
                                area,
                              ],
                            },
                          });
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#9333EA] focus:ring-[#9333EA]"
                        checked={formData.preferenciasLaborales.areasInteres.includes(
                          area
                        )}
                        onChange={() => {}}
                      />
                      <label className="ml-3 text-sm text-gray-700">
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Completa tu Perfil
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Ayúdanos a conocerte mejor para encontrar las mejores oportunidades
            laborales
          </p>
        </div>

        {/* Progress Steps */}
        <StepIndicator currentStep={currentStep} totalSteps={5} steps={steps} />

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => {
                  setCurrentStep((current) => current - 1);
                  window.scrollTo(0, 0);
                }}
                className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA]"
              >
                Anterior
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 text-sm font-medium text-white bg-[#9333EA] border border-transparent rounded-lg shadow-sm hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA]"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 text-sm font-medium text-white bg-[#9333EA] border border-transparent rounded-lg shadow-sm hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9333EA]"
              >
                Finalizar Registro
              </button>
            )}
          </div>
        </form>

        {errors.submit && (
          <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
            {errors.submit}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
