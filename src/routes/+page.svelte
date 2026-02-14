<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<section class="py-16 text-center">
	<h1 class="text-4xl font-bold">Welcome to Hytherys</h1>
	<p class="mt-4 text-gray-400">Join the discussion.</p>
	<button
		onclick={() => goto('/forums')}
		class="mt-8 rounded bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500"
	>
		Browse Forums
	</button>
</section>
