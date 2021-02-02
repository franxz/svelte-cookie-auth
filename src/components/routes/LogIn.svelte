<script>
  import AuthCard from '../authComponents/AuthCard.svelte'
  import AuthButton from '../authComponents/AuthButton.svelte'
  import AuthInput from '../authComponents/AuthInput.svelte'
  import page from 'page'
  import { authApi, postReqOptJSON } from '../../config'
  import { logIn } from '../../auth.js'

  const cardProps = {
    title: '¡Hola!',
    subtitle: 'Completa los datos de tu cuenta para ingresar'
  }

  async function handleSubmit(event) {
    const payload = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    try {
      let res = await fetch(authApi.logIn, postReqOptJSON(payload))
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
    <AuthInput txt="Email" name="email" required="{true}" />

    <AuthInput txt="Contraseña" name="password" type="password" required="{true}" />
    
    <AuthButton txt="Ingresar" />
  </form>

  <span slot="footer">¿No estás registrado? <a href="/register">Crear una cuenta</a></span>
</AuthCard>