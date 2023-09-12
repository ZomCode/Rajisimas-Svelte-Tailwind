<script>
	import { Router, Link, Route } from 'svelte-routing';
	import '../app.css';
	import { _ } from '../services/i18n';

	import Home from '../views/Home.svelte';
	import WhereShop from '../views/Where.svelte';
	import We from '../views/We.svelte';
	import Footer from '../component/Footer.svelte';

	import imgLogo from '../img/LogoR.png';
	import LetrasR from '../img/Letras.png';
	import NotFound from '../views/NotFound.svelte';
	import { onMount } from 'svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let darkMode;
	let darkModeReady = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
		darkModeReady = true;
	});
	let lang = 'es';
</script>

<!-- switch Theme and Language -->
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
		<!-- <div class="flex items-center space-x-2 px-4">
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
	</div>
{/if}

<Router>
	<nav class="flex justify-between md:justify-around items-center bg-yellow-400 p-8 text-2xl">
		<div class="flex items-center">
			<Link to="/">
				<img src={imgLogo} alt="LogoRajisimas" class="h-auto w-20" />
			</Link>
			<Link to="/">
				<img src={LetrasR} alt="LogoRajisimas" class="h-auto w-20" />
			</Link>
		</div>

		<!-- Menú desplegable para pantallas pequeñas -->
		<div class="md:hidden">
			<button class="text-white" on:click={toggleMenu}>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>
		</div>

		<!-- Menú principal para pantallas medianas y grandes -->
		<div class="hidden md:flex space-x-4 font-bold">
			<Link to="/" class="nav-link hover:text-white">{$_('header.home')}</Link>
			<Link to="/Where" class="nav-link hover:text-white">{$_('header.whereshop')}</Link>
			<Link to="/We" class=" hover:text-white">{$_('header.about')}</Link>
		</div>
	</nav>

	<!-- Menú desplegable con efecto de transición -->
	{#if isMenuOpen}
		<div class="md:hidden transition-transform duration-500 ease-in-out font-bold text-1xl">
			<div class="flex flex-col space-y-4 p-4 bg-yellow-400">
				<Link to="/" class="nav-link">{$_('header.home')}</Link>
				<Link to="/Where" class="nav-link">{$_('header.whereshop')}</Link>
				<Link to="/We" class="nav-link">{$_('header.about')}</Link>
			</div>
		</div>
	{/if}

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
<Footer />

<style>
	* {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
