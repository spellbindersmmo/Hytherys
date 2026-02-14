<script lang="ts">
	let email = $state('');
	let password = $state('');

	function handleLogin() {
		// TODO: implement authentication
		console.log('Login:', { email, password });
	}
</script>

<div class="mx-auto max-w-md">
	<h1 class="mb-6 text-2xl font-bold">Log In</h1>

	<form onsubmit={handleLogin} class="space-y-4">
		<div>
			<label for="email" class="mb-1 block text-sm font-medium text-gray-300">Email</label>
			<input
				id="email"
				type="email"
				bind:value={email}
				required
				class="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
				placeholder="you@example.com"
			/>
		</div>

		<div>
			<label for="password" class="mb-1 block text-sm font-medium text-gray-300">Password</label>
			<input
				id="password"
				type="password"
				bind:value={password}
				required
				class="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
				placeholder="••••••••"
			/>
		</div>

		<button
			type="submit"
			class="w-full rounded bg-indigo-600 py-2 font-medium text-white hover:bg-indigo-500"
		>
			Log In
		</button>
	</form>

	<p class="mt-4 text-center text-sm text-gray-400">
		Don't have an account?
		<a href="/register" class="text-indigo-400 hover:text-indigo-300">Register</a>
	</p>
</div>
