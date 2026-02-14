<script lang="ts">
	import { page } from '$app/state';
	import type { Thread } from '$lib/types';

	const categoryId = $derived(page.params.categoryId);

	// Placeholder data — replace with real data loading
	const threads: Thread[] = [];
</script>

<div class="mb-6 flex items-center justify-between">
	<div>
		<a href="/forums" class="text-sm text-mist-600 hover:text-teal-400 transition">Forums</a>
		<span class="mx-2 text-mist-800">/</span>
		<span class="text-sm text-mist-400">{categoryId}</span>
	</div>
	<a
		href="/forums/{categoryId}/new"
		class="rounded border border-teal-700/50 bg-teal-900/40 px-4 py-2 text-sm font-medium text-teal-300 hover:border-teal-600 hover:bg-teal-800/50 hover:text-teal-200 transition"
	>
		New Thread
	</a>
</div>

<div class="ornate-divider mb-6"></div>

{#if threads.length === 0}
	<div class="card p-8 text-center">
		<p class="text-mist-600">No threads yet. Be the first to start one.</p>
	</div>
{:else}
	<div class="space-y-2">
		{#each threads as thread}
			<a
				href="/forums/{categoryId}/{thread.id}"
				class="card group block p-4"
			>
				<div class="flex items-center justify-between">
					<h2 class="font-semibold text-mist-200 group-hover:text-teal-300">{thread.title}</h2>
					<span class="text-xs text-mist-700">{thread.replyCount} replies</span>
				</div>
				<p class="mt-1 text-sm text-mist-600">
					by <span class="text-teal-500">{thread.author}</span>
				</p>
			</a>
		{/each}
	</div>
{/if}
