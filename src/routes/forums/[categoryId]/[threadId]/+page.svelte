<script lang="ts">
	import { page } from '$app/state';
	import type { Post } from '$lib/types';

	const categoryId = $derived(page.params.categoryId);
	const threadId = $derived(page.params.threadId);

	// Placeholder data — replace with real data loading
	const posts: Post[] = [
		{
			id: '1',
			author: 'User',
			body: 'This is the opening post.',
			createdAt: new Date().toISOString()
		}
	];

	let replyBody = $state('');

	function handleReply() {
		// TODO: submit reply to backend
		console.log('Reply to thread', threadId, replyBody);
		replyBody = '';
	}
</script>

<div class="mb-6">
	<a href="/forums" class="text-sm text-mist-600 hover:text-teal-400 transition">Forums</a>
	<span class="mx-2 text-mist-800">/</span>
	<a href="/forums/{categoryId}" class="text-sm text-mist-600 hover:text-teal-400 transition">{categoryId}</a>
	<span class="mx-2 text-mist-800">/</span>
	<span class="text-sm text-mist-400">Thread #{threadId}</span>
</div>

<h1 class="font-medieval mb-6 text-2xl text-teal-300">Thread #{threadId}</h1>

<div class="space-y-4">
	{#each posts as post, i}
		<div class="card overflow-hidden">
			<!-- Post header -->
			<div class="flex items-center justify-between border-b border-teal-800/20 bg-abyss-700/40 px-5 py-2.5">
				<span class="font-medium text-teal-400">{post.author}</span>
				<span class="text-xs text-mist-700">{new Date(post.createdAt).toLocaleDateString()}</span>
			</div>
			<!-- Post body -->
			<div class="px-5 py-4 text-sm leading-relaxed text-mist-300">
				{post.body}
			</div>
		</div>
	{/each}
</div>

<div class="ornate-divider my-8"></div>

<form onsubmit={handleReply} class="space-y-3">
	<label for="reply" class="block text-sm font-medium text-mist-400">Post a Reply</label>
	<textarea
		id="reply"
		bind:value={replyBody}
		required
		rows={4}
		class="card-input w-full px-3 py-2 text-mist-100 placeholder-mist-700"
		placeholder="Write a reply..."
	></textarea>
	<button
		type="submit"
		class="rounded border border-teal-700/50 bg-teal-900/40 px-5 py-2 font-medium text-teal-300 hover:border-teal-600 hover:bg-teal-800/50 hover:text-teal-200 transition"
	>
		Post Reply
	</button>
</form>
