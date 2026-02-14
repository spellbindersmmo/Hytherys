<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Hytherys Forum</title>
</svelte:head>

<!-- Fixed background scene -->
<div class="bg-scene"></div>
<div class="side-glow-left"></div>
<div class="side-glow-right"></div>

<!-- Page content -->
<div class="relative z-10 min-h-screen text-mist-200">
	<Navbar />
	<div class="ornate-divider"></div>
	<main class="mx-auto max-w-6xl px-4 py-8">
		{@render children()}
	</main>
	<footer class="border-t border-teal-900/40 py-6 text-center text-sm text-mist-700">
		Hytherys &mdash; A Hytale Community
	</footer>
</div>
