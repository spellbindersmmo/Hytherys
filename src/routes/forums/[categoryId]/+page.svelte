<script lang="ts">
	import { page } from '$app/state';
	import type { Thread } from '$lib/types';

	const categoryId = $derived(page.params.categoryId);

	// Placeholder data — replace with real data loading
	const threads: Thread[] = [];
</script>

<div class="mb-6 flex items-center justify-between">
	<h1 class="text-2xl font-bold">Category #{categoryId}</h1>
	<a
		href="/forums/{categoryId}/new"
		class="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
	>
		New Thread
	</a>
</div>

{#if threads.length === 0}
	<p class="text-gray-500">No threads yet. Be the first to start one.</p>
{:else}
	<div class="space-y-3">
		{#each threads as thread}
			<a
				href="/forums/{categoryId}/{thread.id}"
				class="block rounded-lg border border-gray-800 bg-gray-900 p-4 transition hover:border-gray-700"
			>
				<h2 class="font-semibold">{thread.title}</h2>
				<p class="mt-1 text-sm text-gray-400">
					by {thread.author} &middot; {thread.replyCount} replies
				</p>
			</a>
		{/each}
	</div>
{/if}
