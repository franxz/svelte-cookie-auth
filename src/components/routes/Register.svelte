<script>
  import AuthCard from '../authComponents/AuthCard.svelte';
  import AuthButton from '../authComponents/AuthButton.svelte';
  import AuthInput from '../authComponents/AuthInput.svelte';

  const cardProps = {
    title: '¡Bienvenido!',
    subtitle: 'Completa el formulario para crear una cuenta'
  }
</script>


<AuthCard {...cardProps}>
  <form slot="form">
    <AuthInput txt="Nombre de usuario" name="name" required="{true}" />

    <AuthInput txt="Email" name="email" required="{true}" />

    <AuthInput txt="Contraseña" name="password" type="password" required="{true}" />

    <AuthInput txt="Confirmar contraseña" name="confirmPassword" type="password" required="{true}" />
    
    <AuthButton txt="Registrarse" />
  </form>

  <span slot="footer">¿Ya tienes una cuenta? <a href="/login">Ingresar</a></span>
</AuthCard>