<script lang="ts">
	import { page } from '$app/state';
	import type { Post } from '$lib/types';

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

<h1 class="mb-6 text-2xl font-bold">Thread #{threadId}</h1>

<div class="space-y-4">
	{#each posts as post}
		<div class="rounded-lg border border-gray-800 bg-gray-900 p-5">
			<div class="mb-2 flex items-center justify-between text-sm text-gray-400">
				<span class="font-medium text-gray-200">{post.author}</span>
				<span>{new Date(post.createdAt).toLocaleDateString()}</span>
			</div>
			<p class="text-gray-300">{post.body}</p>
		</div>
	{/each}
</div>

<form onsubmit={handleReply} class="mt-8 space-y-3">
	<label for="reply" class="block text-sm font-medium text-gray-300">Reply</label>
	<textarea
		id="reply"
		bind:value={replyBody}
		required
		rows={4}
		class="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
		placeholder="Write a reply..."
	></textarea>
	<button
		type="submit"
		class="rounded bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500"
	>
		Post Reply
	</button>
</form>
