<script>
	import { Link } from 'svelte-routing';
	import { _ } from '../../services/i18n';

	import imgLogo from '../../img/LogoR.webp';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function getMenuIconPath(isOpen) {
		return isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16';
	}
</script>

<nav class="flex justify-between md:justify-around items-center bg-yellow-300 p-8 text-2xl">
	<div class="flex items-center">
		<Link to="/">
			<img src={imgLogo} alt="LogoRajisimas" class="h-auto w-24" />
		</Link>
	</div>

	<div class="md:hidden">
		<button class="text-white" on:click={toggleMenu}>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={getMenuIconPath(isMenuOpen)}
				/>
			</svg>
		</button>
	</div>

	<div class="hidden md:flex space-x-4 font-bold">
		<Link to="/" class="nav-link hover:text-white">{$_('header.home')}</Link>
		<Link to="/where" class="nav-link hover:text-white">{$_('header.whereshop')}</Link>
		<Link to="/we" class=" hover:text-white">{$_('header.about')}</Link>
	</div>
</nav>

{#if isMenuOpen}
	<div class="md:hidden transition-transform duration-1000 ease-in-out font-bold text-1xl">
		<div class="flex flex-col space-y-4 p-4 bg-yellow-400">
			<Link to="/" class="nav-link" on:click={toggleMenu}>{$_('header.home')}</Link>
			<Link to="/where" class="nav-link" on:click={toggleMenu}>{$_('header.whereshop')}</Link>
			<Link to="/we" class="nav-link" on:click={toggleMenu}>{$_('header.about')}</Link>
		</div>
	</div>
{/if}

