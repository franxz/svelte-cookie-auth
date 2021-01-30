<script>
  import { redirect } from "page";
  import { logOut } from "../../auth";
  import { postReqOpt } from "../../config";


  async function handleLogOutClick(event) {
    try {
      const res = await fetch('http://localhost:3000/logOut', postReqOpt);
      if (res.ok) {
        logOut()
        redirect('/login')
      }
    } catch(err) {
      console.error(err)
    }
  }
</script>


<div style="color: white;">
  <h1>Todavía está un poco vacío...</h1>
  <p>Pero acá tenés unos links (sólo con fines de testeo)</p>
  <a href="/login">LogIn</a> - <a href="/register">Registro</a> - <a href="/logOut" on:click|preventDefault={handleLogOutClick}>LogOut</a>
</div>