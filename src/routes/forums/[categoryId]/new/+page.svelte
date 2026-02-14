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

<h1 class="mb-6 text-2xl font-bold">New Thread</h1>

<form onsubmit={handleSubmit} class="space-y-4">
	<div>
		<label for="title" class="mb-1 block text-sm font-medium text-gray-300">Title</label>
		<input
			id="title"
			bind:value={title}
			required
			class="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
			placeholder="Thread title"
		/>
	</div>

	<div>
		<label for="body" class="mb-1 block text-sm font-medium text-gray-300">Body</label>
		<textarea
			id="body"
			bind:value={body}
			required
			rows={8}
			class="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
			placeholder="Write your post..."
		></textarea>
	</div>

	<button
		type="submit"
		class="rounded bg-indigo-600 px-6 py-2 font-medium text-white hover:bg-indigo-500"
	>
		Create Thread
	</button>
</form>
