<script lang="ts">
	let email = $state('');
	let password = $state('');

	function handleLogin() {
		// TODO: implement authentication
		console.log('Login:', { email, password });
	}
</script>

<div class="mx-auto max-w-md">
	<h1 class="font-medieval mb-6 text-2xl text-teal-300">Log In</h1>

	<form onsubmit={handleLogin} class="card space-y-4 p-6">
		<div>
			<label for="email" class="mb-1 block text-sm font-medium text-mist-400">Email</label>
			<input
				id="email"
				type="email"
				bind:value={email}
				required
				class="card-input w-full px-3 py-2 text-mist-100 placeholder-mist-700"
				placeholder="you@example.com"
			/>
		</div>

		<div>
			<label for="password" class="mb-1 block text-sm font-medium text-mist-400">Password</label>
			<input
				id="password"
				type="password"
				bind:value={password}
				required
				class="card-input w-full px-3 py-2 text-mist-100 placeholder-mist-700"
				placeholder="••••••••"
			/>
		</div>

		<button
			type="submit"
			class="w-full rounded border border-teal-700/50 bg-teal-900/40 py-2 font-medium text-teal-300 hover:border-teal-600 hover:bg-teal-800/50 hover:text-teal-200 transition"
		>
			Log In
		</button>
	</form>

	<p class="mt-4 text-center text-sm text-mist-600">
		Don't have an account?
		<a href="/register" class="text-teal-500 hover:text-teal-400 transition">Register</a>
	</p>
</div>
