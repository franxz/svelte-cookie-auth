<script>
  import { redirect } from "page"
  import { logOut } from "../../auth"
  import { authApi, postReqOpt, getReqOpt } from "../../config"
  import { onMount } from 'svelte'
  import Loading from "../Loading.svelte";

  
  let userData

  onMount(async () => {
		try {
			const res = await fetch(authApi.home, getReqOpt)
			if (res.ok) {
        userData = await res.json()
			}
			
		} catch(err) {
			console.error(err)
		}
	})

  async function handleLogOutClick(event) {
    try {
      const res = await fetch(authApi.logOut, postReqOpt);
      if (res.ok) {
        logOut()
        redirect('/login')
      }
    } catch(err) {
      console.error(err)
    }
  }
</script>


<Loading isLoading={userData===undefined}>
  <div style="color: white;">
    <h1>Home de {userData.name}</h1>
    <ul>
      <li>Tu id es: {userData.user_id}</li>
      <li>Tu email es: {userData.email}</li>
    </ul>
    <a href="/logOut" on:click|preventDefault={handleLogOutClick}>LogOut</a>
  </div>
</Loading>