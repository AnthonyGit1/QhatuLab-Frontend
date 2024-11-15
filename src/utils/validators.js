export const validateStep = (step, formData) => {
  const errors = {};

  switch (step) {
    case 1:
      if (!formData.datosPersonales.nombres)
        errors.nombres = "El nombre es requerido";
      if (!formData.datosPersonales.apellidos)
        errors.apellidos = "Los apellidos son requeridos";
      if (!formData.datosPersonales.edad) errors.edad = "La edad es requerida";
      if (!formData.datosPersonales.email)
        errors.email = "El email es requerido";
      if (!formData.datosPersonales.telefono)
        errors.telefono = "El teléfono es requerido";
      break;

    case 2:
      if (!formData.datosPersonales.tipoDiscapacidad)
        errors.tipoDiscapacidad = "Seleccione un tipo de discapacidad";
      if (!formData.datosPersonales.ubicacion.region)
        errors.region = "Seleccione una región";
      break;

    case 3:
      if (!formData.educacion.nivel)
        errors.educacion = "Seleccione su nivel de educación";
      if (!formData.experiencia[0].area)
        errors.experienciaArea = "Seleccione un área de experiencia";
      break;

    case 4:
      if (formData.habilidades.length === 0)
        errors.habilidades = "Seleccione al menos una habilidad";
      break;

    case 5:
      const errors = {};
      if (!formData.preferenciasLaborales.modalidad && currentStep === 5)
        errors.modalidad = "Seleccione una modalidad de trabajo";
      if (!formData.preferenciasLaborales.tipoContrato && currentStep === 5)
        errors.tipoContrato = "Seleccione un tipo de contrato";
      if (
        !formData.preferenciasLaborales.expectativaSalarial &&
        currentStep === 5
      )
        errors.expectativaSalarial = "Seleccione un rango salarial";
      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      };
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
