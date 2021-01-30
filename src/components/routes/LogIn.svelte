<script>
  import AuthCard from '../authComponents/AuthCard.svelte'
  import AuthButton from '../authComponents/AuthButton.svelte'
  import AuthInput from '../authComponents/AuthInput.svelte'
  import page from 'page'
  import { logIn } from '../../auth.js'
  import { postReqOptJSON } from '../../config'

  const cardProps = {
    title: '¡Hola!',
    subtitle: 'Completa los datos de tu cuenta para ingresar'
  }

  const endPoint = 'http://localhost:3000/login'

  async function handleSubmit(event) {
    const payload = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    try {
      let res = await fetch(endPoint, postReqOptJSON(payload))
      
      // DEBUG // TODO: purge
      //res = await res.json();
      //console.log(res);
      
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