<script>
	import '../app.css';

	import Home from '../views/Home.svelte';
	import WhereShop from '../views/Where.svelte';
	import We from '../views/We.svelte';
	import NotFound from '../views/NotFound.svelte';

	import Header from '../component/layout/Header.svelte';
	import Footer from '../component/layout/Footer.svelte';

	import { onMount } from 'svelte';
	import { _, setupI18n, isLocaleLoaded } from '../services/i18n';
	import { Router, Route } from 'svelte-routing';

	let darkMode;
	let darkModeReady = false;

	export let url = "";

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		darkModeReady = true;
	});

	let lang;
	let langReady = 'es';

	$: if (!$isLocaleLoaded) {
		setupI18n({ withLocale: langReady });
	}

	function changeLang() {
		lang === true ? (langReady = 'en') : (langReady = 'es');
		setupI18n({ withLocale: langReady });
	}
</script>

<!-- switch Theme and Language -->
{#if $isLocaleLoaded}
	{#if darkModeReady}
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
			<div class="flex items-center space-x-2 px-4">
				<label class="cursor-pointer">
					<input type="checkbox" class="hidden" bind:checked={lang} on:change={changeLang} />
					<div class="w-10 h-6 bg-gray-300 dark:bg-gray-800 rounded-full p-1">
						<div
							class="bg-white dark:bg-gray-700 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
							style="transform: translateX({lang ? '100%' : '0'})"
						/>
					</div>
				</label>
				<p />
				<span class="text-gray-600 dark:text-gray-300"> {lang ? 'EN' : 'ES'}</span>
			</div>
		</div>
	{/if}
	
	<Router {url}>
		<Header/>
		<Route path="/">
			<Home />
		</Route>
		<Route path="/where" component={WhereShop}>
			<WhereShop />
		</Route>
		<Route path="/we" component={We}>
			<!-- <We /> -->
		</Route>
		<Route path="*" component={NotFound}>
			<NotFound/>
		</Route>
	</Router>
	<Footer />
{:else}
	<section class="h-screen grid place-items-center">Loading...</section>
{/if}

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
