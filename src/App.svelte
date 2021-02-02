<svelte:head>
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
		--usafa-blue: #035483; --green-blue-crayola: #0582CA; --carolina-blue: #069EF6;
		--eerie-black: #1D201F; --xanadu: #788581; --cultured: #EEF0EF;

		--ff: 'Lato', sans-serif;
	}

	:global(body) {
		background-color: #3E2C3F;
	}

	main :global(h1, p, span, label, input) {
    font-family: var(--ff);
  }

  main :global(a) {
    color: var(--green-blue-crayola);
    font-weight: 700;

    transition: .5s ease;
  }
	main :global(a:hover) {
    color: var(--carolina-blue);
  }

	main {
		display: flex;
		justify-content: center;

		padding: 1em;
	}

</style>