<script>
	import '../app.css';
	import { setupI18n, isLocaleLoaded } from '../services/i18n';
	import { onMount } from 'svelte';
	import { Router, Route } from 'svelte-routing';

	import Home from '../views/Home.svelte';
	import WhereShop from '../views/Where.svelte';
	import We from '../views/We.svelte';
	import NotFound from '../views/NotFound.svelte';

	import Header from '../component/Layout/Header.svelte';
	import Footer from '../component/Layout/Footer.svelte';

	let darkMode;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		darkModeReady = true;
	});

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: 'es' });
	}
</script>

{#if $isLocaleLoaded}
	{#if darkModeReady}
		<Header />
		<Router>
			<Route path="/">
				<Home />
			</Route>
			<Route path="/Where">
				<WhereShop />
			</Route>
			<Route path="/We">
				<We />
			</Route>
			<Route path="*" component={NotFound} />
		</Router>
		<div class="absolute flex p-4 bg-green-600 right-2 rounded-b-xl divide-x">
			<div class="flex items-center space-x-2 px-4">
				<label class="cursor-pointer">
					<input
						type="checkbox"
						class="hidden"
						bind:checked={darkMode}
						on:change={() => document.documentElement.classList.toggle('dark')}
					/>
					<div class="w-10 h-6 bg-gray-300 dark:bg-gray-800 rounded-full p-1">
						<div
							class="bg-white dark:bg-gray-700 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
							style="transform: translateX({darkMode ? '100%' : '0'})"
						/>
					</div>
				</label>
				<p />
				<span class="text-gray-600 dark:text-gray-300"> {darkMode ? '🌑' : '🌞'}</span>
			</div>
		</div>
		<!-- <div class="flex items-center space-x-2 px-4">
			<div>
				<label class="cursor-pointer">
					<input
						type="checkbox"
						class="hidden"
					/>
					<div class="w-10 h-6 bg-gray-300 dark:bg-gray-800 rounded-full p-1">
						<div
							class="bg-white dark:bg-gray-700 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
							style="transform: translateX({lang ? '100%' : '0'})"
						/>
					</div>
				</label>
				<p />
				<span class="text-gray-600 dark:text-gray-300"> {lang === 'es' ? 'EN' : 'ES'}</span>
			</div> -->
		<Footer />
	{/if}
{:else}
	<p>Loading...</p>
{/if}

<!-- switch Theme and Language -->

<style>
	* {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
