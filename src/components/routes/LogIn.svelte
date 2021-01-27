<script>
  import AuthCard from '../authComponents/AuthCard.svelte';
  import AuthButton from '../authComponents/AuthButton.svelte';
  import AuthInput from '../authComponents/AuthInput.svelte';

  const cardProps = {
    title: '¡Hola!',
    subtitle: 'Completa los datos de tu cuenta para ingresar',
    style: ''
  }

  function handleClick() {
    cardProps.style = `${cardProps.style} position: absolute;`;
  }
</script>


<AuthCard {...cardProps}>
  <form action="server/login" method="post" slot="form">
    <AuthInput txt="Email" name="email" />

    <AuthInput txt="Contraseña" name="password" type="password" />
    
    <AuthButton txt="Ingresar" style="margin-top: 1.5em" />
  </form>

  <span slot="footer">
    ¿No estás registrado? <a href="/register" on:click="{handleClick()}">Crear una cuenta</a>
  </span>
</AuthCard>