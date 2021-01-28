<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet">
</svelte:head>

<script>
	//export let name;

	import page from 'page';
	import Index from './components/routes/Index.svelte';
	import LogIn from './components/routes/LogIn.svelte';
	import Register from './components/routes/Register.svelte';
	import { onMount } from 'svelte';
	import { auth, guest } from './middlewares.js'


	let route;

	page('/', auth, () => route = Index)
	page('/login', guest, () => route = LogIn)
	page('/register', guest, () => route = Register)

	page.start()

	onMount(async () => {
		//const res = await fetch('/isLoggedIn');
		//...
	});
</script>


<main>
	<svelte:component this={route} />
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