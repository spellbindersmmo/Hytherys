<script lang="ts">
	import { page } from '$app/state';

	const categoryId = $derived(page.params.categoryId);

	let title = $state('');
	let body = $state('');

	function handleSubmit() {
		// TODO: submit thread to backend
		console.log('New thread:', { categoryId, title, body });
	}
</script>

<div class="mb-6">
	<a href="/forums" class="text-sm text-mist-600 hover:text-teal-400 transition">Forums</a>
	<span class="mx-2 text-mist-800">/</span>
	<a href="/forums/{categoryId}" class="text-sm text-mist-600 hover:text-teal-400 transition">{categoryId}</a>
	<span class="mx-2 text-mist-800">/</span>
	<span class="text-sm text-mist-400">New Thread</span>
</div>

<h1 class="font-medieval mb-6 text-2xl text-teal-300">Create a New Thread</h1>

<form onsubmit={handleSubmit} class="space-y-4">
	<div>
		<label for="title" class="mb-1 block text-sm font-medium text-mist-400">Title</label>
		<input
			id="title"
			bind:value={title}
			required
			class="card-input w-full px-3 py-2 text-mist-100 placeholder-mist-700"
			placeholder="Thread title"
		/>
	</div>

	<div>
		<label for="body" class="mb-1 block text-sm font-medium text-mist-400">Body</label>
		<textarea
			id="body"
			bind:value={body}
			required
			rows={8}
			class="card-input w-full px-3 py-2 text-mist-100 placeholder-mist-700"
			placeholder="Write your post..."
		></textarea>
	</div>

	<button
		type="submit"
		class="rounded border border-teal-700/50 bg-teal-900/40 px-6 py-2 font-medium text-teal-300 hover:border-teal-600 hover:bg-teal-800/50 hover:text-teal-200 transition"
	>
		Create Thread
	</button>
</form>
