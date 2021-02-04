<svelte:head>
	<title>Svelte Cookie Auth</title>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
</svelte:head>


<script>
	import page from 'page'
	import Home from './components/routes/Home.svelte'
	import LogIn from './components/routes/LogIn.svelte'
	import Register from './components/routes/Register.svelte'
	import NotFound from './components/routes/NotFound.svelte'
	import Loading from './components/Loading.svelte'
	import { onMount } from 'svelte'
	import { auth, guest } from './middleware'
	import { logIn } from './auth'
	import { authApi, getReqOpt } from './config'


	let isLoading = true

	// ROUTER
	let route

	page('/', auth, () => route = Home)
	page('/login', guest, () => route = LogIn)
	page('/register', guest, () => route = Register)
	page('*', () => route = NotFound)

	page.start({ dispatch: false })


	// chequear si estoy logueado
	onMount(async () => {
		try {
			const res = await fetch(authApi.isLoggedIn, getReqOpt)
			if (res.ok) {
				logIn()
			}
			page(window.location.pathname) // los middleware auth y guest se encargan del resto
			isLoading = false
			
		} catch(err) {
			console.error(err)
		}
	})
</script>


<main>
	<Loading {isLoading}>
		<svelte:component this={route} />
	</Loading>
</main>


<style>

	:global(:root) {
		--bg: #181c2b; --fg: white;
		--primary: #002cde; --primary2: #006bff; --primary-2: #151e42;
		--text: #212529; --text2: #6C757D; --text3: #bec7cf;

		--error: #FF1654;
		--success: #00CC66;

		--ff: 'Lato', sans-serif;
	}

	:global(body) {
		background-color: var(--bg);
		font-family: var(--ff);
		color: var(--text);
	}

  main :global(a) {
    color: var(--primary);
    font-weight: 700;

    transition: .25s;
  }
	main :global(a:hover) {
    color: var(--primary2);
  }

	main {
		display: flex;
		justify-content: center;

		padding: 1em;
	}

</style>