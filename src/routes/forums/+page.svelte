<script lang="ts">
	import type { Category } from '$lib/types';

	// Placeholder data — replace with real data loading
	const categories: Category[] = [
		{
			id: '1',
			name: 'General Discussion',
			description: 'Talk about anything and everything.',
			threadCount: 0
		},
		{
			id: '2',
			name: 'Announcements',
			description: 'Official news and updates.',
			threadCount: 0
		}
	];
</script>

<h1 class="mb-6 text-2xl font-bold">Forums</h1>

<div class="space-y-4">
	{#each categories as category}
		<a
			href="/forums/{category.id}"
			class="block rounded-lg border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-700"
		>
			<div class="flex items-center justify-between">
				<div>
					<h2 class="text-lg font-semibold">{category.name}</h2>
					<p class="mt-1 text-sm text-gray-400">{category.description}</p>
				</div>
				<span class="text-sm text-gray-500">{category.threadCount} threads</span>
			</div>
		</a>
	{/each}
</div>
