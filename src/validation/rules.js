const rangeTest = (_min, _max) => ({
  min: _min,
  max: _max,
  message: `Debe tener entre ${_min} y ${_max} caracteres`,
})

const requiredTest = { message: 'Es requerido' }


export const nameRules = {
  stop: true,
  required: requiredTest,
  alphaNumeric: { message: 'Sólo puede contener caracteres alfanuméricos'}, // demasiado restrictivo?
  range: rangeTest(3, 128),
}

export const emailRules = {
  stop: true,
  required: requiredTest,
  email: { message: 'No es una dirección de email válida' },
  range: rangeTest(8, 254),
}

// TODO: testear max bytes, no max caracteres
export const passwordRules = {
  stop: true,
  required: requiredTest,
  format: {
    regex: /^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?[\d]).*$/u, // TODO: ver si esto es un issue o si npm está muy desactualizado
    message: 'Debe contener al menos una minúscula, una mayúscula y un dígito',
  },
  range: rangeTest(8, 72),
}

export const passwordConfirmationRules = (value) => ({
  stop: true,
  required: requiredTest,
  equal: {
    value: value,
    message: 'Las contraseñas no son iguales',
    field: 'Confirmar contraseña', // no se usa, pero es necesario
  },
})