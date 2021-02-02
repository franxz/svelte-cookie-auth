<script>
  import AuthCard from '../authComponents/AuthCard.svelte'
  import AuthButton from '../authComponents/AuthButton.svelte'
  import AuthInput from '../authComponents/AuthInput.svelte'
  import page from 'page'
  import { authApi, postReqOptJSON } from '../../config'
  import { logIn } from '../../auth'

  const cardProps = {
    title: '¡Bienvenido!',
    subtitle: 'Completa el formulario para crear una cuenta'
  }

  async function handleSubmit(event) {
    const payload = {
      name: event.target.r_name.value,
      email: event.target.r_email.value,
      password: event.target.r_password.value,
      passwordConfirmation: event.target.r_passwordConfirmation.value,
    }

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


<AuthCard {...cardProps}>
  <form slot="form" on:submit|preventDefault={handleSubmit}>
    <AuthInput txt="Nombre de usuario" name="name" required="{true}" />

    <AuthInput txt="Email" name="email" required="{true}" />

    <AuthInput txt="Contraseña" name="password" type="password" required="{true}" />

    <AuthInput txt="Confirmar contraseña" name="passwordConfirmation" type="password" required="{true}" />
    
    <AuthButton txt="Registrarse" />
  </form>

  <span slot="footer">¿Ya tienes una cuenta? <a href="/login">Ingresar</a></span>
</AuthCard>