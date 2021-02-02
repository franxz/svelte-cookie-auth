<script>
  import AuthCard from '../authComponents/AuthCard.svelte'
  import AuthButton from '../authComponents/AuthButton.svelte'
  import AuthValInput from '../authComponents/AuthValInput.svelte'
  import page from 'page'
  import { authApi, postReqOptJSON } from '../../config'
  import { logIn } from '../../auth'
  import { emailRules, Field, nameRules, passwordConfirmationRules, passwordRules } from '../../validation'


  const cardProps = {
    title: '¡Bienvenido!',
    subtitle: 'Completa el formulario para crear una cuenta'
  }
  

  const formState = {
    name: new Field('', nameRules),
    email: new Field('', emailRules),
    password: new Field('', passwordRules),
    passwordConfirmation: new Field('', passwordConfirmationRules('')),
  }


  // EVENTOS
  function handleInput(event) {
    const name = event.target.name
    let value = event.target.value

    switch (name) {
      case 'name':
        value = value.trim()
        break
      
      case 'email':
        value = value.trim().toLowerCase()
        break
      
      case 'password':
        // cada vez que actualizo el valor de password, debo actualizar las reglas de passwordConfirmation
        formState.passwordConfirmation.rules = passwordConfirmationRules(value)
        formState.passwordConfirmation.validate()
        break
    }

    formState[name].value = value
    formState[name].validate()
  }

  async function handleSubmit(event) {
    // si el formulario no es válido vuelvo
    for (const field in formState) {
      if (!formState[field].valResult.approved) {
        console.log("NO VALIDO")
        return
      }
    }

    // obtengo payload
    const payload = {}
    for (const field in formState) {
      payload[field] = formState[field].value
    }

    // envío el formulario
    try {
      let res = await fetch(authApi.register, postReqOptJSON(payload))
      if (res.ok) {
        logIn()
        page.redirect('/')
      }
    } catch (err) {
      console.error(err)
    }
  }
</script>


<!-- Registro tiene validación por ApproveJs (componente AuthValInput) -->
<AuthCard {...cardProps}>
  <form slot="form" on:submit|preventDefault={handleSubmit} on:input={handleInput} autocomplete="off">
    <AuthValInput txt="Nombre de usuario" name="name" validation={formState.name.valResult} />

    <AuthValInput txt="Email" name="email" validation={formState.email.valResult} />

    <AuthValInput txt="Contraseña" name="password" type="password" validation={formState.password.valResult} />

    <AuthValInput txt="Confirmar contraseña" name="passwordConfirmation" type="password" validation={formState.passwordConfirmation.valResult} />

    <AuthButton txt="Registrarse" />
  </form>

  <span slot="footer">¿Ya tienes una cuenta? <a href="/login">Ingresar</a></span>
</AuthCard>