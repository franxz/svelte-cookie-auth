<script>
  import AuthCard from '../authComponents/AuthCard.svelte';
  import AuthButton from '../authComponents/AuthButton.svelte';
  import AuthInput from '../authComponents/AuthInput.svelte';

  const cardProps = {
    title: '¡Bienvenido!',
    subtitle: 'Completa el formulario para crear una cuenta',
    style: ''
  }

  function handleClick() {
    cardProps.style = `${cardProps.style} position: absolute;`;
  }
</script>


<AuthCard {...cardProps}>
  <form action="server/register" method="post" slot="form">
    <AuthInput txt="Nombre de usuario" name="name" />

    <AuthInput txt="Email" name="email" />

    <AuthInput txt="Contraseña" name="password" type="password" />

    <AuthInput txt="Confirmar contraseña" name="confirmPassword" type="password" />
    
    <AuthButton txt="Registrarse" style="margin-top: 1.5em" />
  </form>

  <span slot="footer">
    ¿Ya tienes una cuenta? <a href="/login" on:click="{handleClick()}">Ingresar</a>
  </span>
</AuthCard>