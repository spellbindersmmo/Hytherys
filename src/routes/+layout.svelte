<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Hytherys Forum</title>
</svelte:head>

<div class="min-h-screen bg-gray-950 text-gray-100">
	<Navbar />
	<main class="mx-auto max-w-5xl px-4 py-8">
		{@render children()}
	</main>
</div>
