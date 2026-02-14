<script lang="ts">
	import type { Category } from '$lib/types';

	// Placeholder data — replace with real data loading
	const categories: Category[] = [
		{
			id: 'news',
			name: 'Announcements & News',
			description: 'Official server updates, patch notes, and event schedules.',
			threadCount: 0
		},
		{
			id: 'general',
			name: 'General Discussion',
			description: 'Talk about anything related to Hytherys and the server.',
			threadCount: 0
		},
		{
			id: 'lore',
			name: 'Lore & Stories',
			description: 'Share tales, history, and roleplay narratives from the realm.',
			threadCount: 0
		},
		{
			id: 'guilds',
			name: 'Guilds & Factions',
			description: 'Recruit members, form alliances, and manage your guild.',
			threadCount: 0
		},
		{
			id: 'builds',
			name: 'Builds & Creations',
			description: 'Showcase your builds, towns, and creations.',
			threadCount: 0
		},
		{
			id: 'help',
			name: 'Help & Support',
			description: 'Ask questions, report issues, and get assistance.',
			threadCount: 0
		}
	];
</script>

<h1 class="font-medieval mb-8 text-3xl text-teal-300">Forums</h1>

<div class="space-y-3">
	{#each categories as category}
		<a
			href="/forums/{category.id}"
			class="card group block p-5"
		>
			<div class="flex items-center justify-between">
				<div>
					<h2 class="font-medieval text-lg text-mist-200 group-hover:text-teal-300">
						{category.name}
					</h2>
					<p class="mt-1 text-sm text-mist-600">{category.description}</p>
				</div>
				<span class="text-xs text-mist-700">{category.threadCount} threads</span>
			</div>
		</a>
	{/each}
</div>
