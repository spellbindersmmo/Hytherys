<script lang="ts">
	// Placeholder data — replace with real data loading
	const latestNews = [
		{
			id: '1',
			category: 'news',
			title: 'Server Launch: The Realm Awakens',
			author: 'Admin',
			date: 'Feb 12, 2026',
			excerpt:
				'After months of preparation, the gates of Hytherys are finally open. Join us as we embark on a new chapter in this medieval fantasy world built on Hytale.',
			thumbnail: '/hero.jpeg'
		},
		{
			id: '2',
			category: 'lore',
			title: 'The Chronicle of the Shattered Monolith',
			author: 'Lorekeeper',
			date: 'Feb 10, 2026',
			excerpt:
				'Deep within the Whispering Glade stands a monument older than memory itself. Its origins have been lost, but the inscriptions speak of an age before the fracture...',
			thumbnail: null
		},
		{
			id: '3',
			category: 'news',
			title: 'Patch 0.2.0 — New Biomes & Crafting Overhaul',
			author: 'Admin',
			date: 'Feb 8, 2026',
			excerpt:
				'This update introduces two new explorable biomes, a complete rework of the crafting system, and dozens of quality-of-life improvements.',
			thumbnail: null
		},
		{
			id: '4',
			category: 'guilds',
			title: 'The Ironveil Pact — Recruiting Warriors',
			author: 'IronCommander',
			date: 'Feb 6, 2026',
			excerpt:
				'The Ironveil Pact seeks battle-hardened warriors and cunning tacticians. If you have the steel and the will, our gates are open.',
			thumbnail: null
		},
		{
			id: '5',
			category: 'builds',
			title: 'Showcase: The Citadel of Dawnreach',
			author: 'MasterBuilder',
			date: 'Feb 4, 2026',
			excerpt:
				'A towering fortress perched on the eastern cliffs — months of work culminating in one of the most ambitious builds on the server.',
			thumbnail: null
		}
	];

	const categoryLabel: Record<string, string> = {
		news: 'News',
		lore: 'Lore',
		guilds: 'Guilds',
		builds: 'Builds'
	};

	const categoryColor: Record<string, string> = {
		news: 'text-teal-400',
		lore: 'text-mauve-400',
		guilds: 'text-ember-400',
		builds: 'text-mist-400'
	};
</script>

<!-- Server description -->
<section class="text-center py-12">
	<h1 class="font-medieval text-4xl tracking-wide text-teal-300 drop-shadow-lg">
		Hytherys
	</h1>
	<p class="mx-auto mt-3 max-w-2xl text-mist-300 leading-relaxed">
		A medieval fantasy Hytale server where nations rise and fall, ancient lore shapes the land, and every adventurer writes their own legend. Explore vast realms, forge alliances, and build your legacy.
	</p>
</section>

<div class="ornate-divider"></div>

<!-- Feature highlights -->
<section class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
	<a href="/forums/lore" class="card group block p-4 text-center">
		<h3 class="font-medieval text-sm text-mauve-400 group-hover:text-mauve-300">Rich Lore</h3>
		<p class="mt-1 text-xs text-mist-600">A deep, living world with history and myth.</p>
	</a>
	<a href="/forums/guilds" class="card group block p-4 text-center">
		<h3 class="font-medieval text-sm text-ember-400 group-hover:text-ember-300">Guilds & Nations</h3>
		<p class="mt-1 text-xs text-mist-600">Form factions, wage wars, forge alliances.</p>
	</a>
	<a href="/forums/builds" class="card group block p-4 text-center">
		<h3 class="font-medieval text-sm text-mist-300 group-hover:text-mist-100">Custom Builds</h3>
		<p class="mt-1 text-xs text-mist-600">Towns, castles, and creations to explore.</p>
	</a>
	<a href="/forums/general" class="card group block p-4 text-center">
		<h3 class="font-medieval text-sm text-teal-400 group-hover:text-teal-300">Active Community</h3>
		<p class="mt-1 text-xs text-mist-600">Events, discussions, and a welcoming playerbase.</p>
	</a>
</section>

<div class="ornate-divider mt-8 mb-6"></div>

<!-- Two-column: News feed + Sidebar -->
<section class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

	<!-- Left: Latest News -->
	<div>
		<h2 class="font-medieval mb-4 text-xl text-teal-300">Latest News</h2>
		<div class="space-y-3">
			{#each latestNews as post}
				<a href="/forums/{post.category}/{post.id}" class="card group flex gap-4 p-4">
					{#if post.thumbnail}
						<img
							src={post.thumbnail}
							alt=""
							class="hidden sm:block h-24 w-36 flex-shrink-0 rounded object-cover"
						/>
					{/if}
					<div class="min-w-0">
						<div class="flex items-center gap-2 text-xs">
							<span class={categoryColor[post.category]}>{categoryLabel[post.category]}</span>
							<span class="text-mist-700">&middot;</span>
							<span class="text-mist-600">{post.date}</span>
						</div>
						<h3 class="mt-1 font-semibold text-mist-200 group-hover:text-teal-300 transition truncate">
							{post.title}
						</h3>
						<p class="mt-1 text-sm text-mist-500 line-clamp-2">
							{post.excerpt}
						</p>
						<span class="mt-2 inline-block text-xs text-mist-600">
							by <span class="text-teal-500">{post.author}</span>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Right: Sidebar -->
	<aside class="space-y-4">
		<!-- Server status -->
		<div class="card p-5">
			<h3 class="font-medieval text-sm text-teal-300 mb-3">Server Status</h3>
			<div class="space-y-2 text-sm">
				<div class="flex items-center justify-between">
					<span class="text-mist-500">Status</span>
					<span class="text-ember-400">Online</span>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-mist-500">Players</span>
					<span class="text-mist-200">0 / 100</span>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-mist-500">Version</span>
					<span class="text-mist-200">Hytale Beta</span>
				</div>
			</div>
		</div>

		<!-- Quick links -->
		<div class="card p-5">
			<h3 class="font-medieval text-sm text-teal-300 mb-3">Quick Links</h3>
			<ul class="space-y-2 text-sm">
				<li>
					<a href="/forums/news" class="text-mist-400 hover:text-teal-300 transition">Announcements</a>
				</li>
				<li>
					<a href="/forums/lore" class="text-mist-400 hover:text-teal-300 transition">Lore & Stories</a>
				</li>
				<li>
					<a href="/forums/guilds" class="text-mist-400 hover:text-teal-300 transition">Guilds & Factions</a>
				</li>
				<li>
					<a href="/forums/builds" class="text-mist-400 hover:text-teal-300 transition">Builds & Creations</a>
				</li>
				<li>
					<a href="/forums/help" class="text-mist-400 hover:text-teal-300 transition">Help & Support</a>
				</li>
			</ul>
		</div>

		<!-- Recent activity -->
		<div class="card p-5">
			<h3 class="font-medieval text-sm text-teal-300 mb-3">Recent Activity</h3>
			<ul class="space-y-3 text-sm">
				<li>
					<a href="/forums/news/1" class="block text-mist-300 hover:text-teal-300 transition truncate">Server Launch: The Realm Awakens</a>
					<span class="text-xs text-mist-700">by Admin &middot; Feb 12</span>
				</li>
				<li>
					<a href="/forums/lore/2" class="block text-mist-300 hover:text-teal-300 transition truncate">The Chronicle of the Shattered Monolith</a>
					<span class="text-xs text-mist-700">by Lorekeeper &middot; Feb 10</span>
				</li>
				<li>
					<a href="/forums/guilds/4" class="block text-mist-300 hover:text-teal-300 transition truncate">The Ironveil Pact — Recruiting Warriors</a>
					<span class="text-xs text-mist-700">by IronCommander &middot; Feb 6</span>
				</li>
			</ul>
		</div>
	</aside>

</section>
