<script>
	import { _ } from '../../services/i18n';

	import imgLogo from '../../img/LogoR.webp';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="flex justify-between md:justify-around items-center bg-yellow-300 p-8 text-2xl">
	<div class="flex items-center">
		<a href="/">
			<img src={imgLogo} alt="LogoRajisimas" class="h-auto w-24" />
		</a>
	</div>

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

	<div class="hidden md:flex gap-x-4 [&>a]:p-2 font-bold hover:[&>a]:text-white uppercase">
		<a href="/" class="nav-link">{$_('header.home')}</a>
		<a href="/whereshop" class="nav-link">{$_('header.whereshop')}</a>
		<a href="/about" class="nav-link">{$_('header.about')}</a>
	</div>
</nav>

{#if isMenuOpen}
	<div class="md:hidden font-bold text-1xl hover:[&>a]:text-white">
		<div class="flex flex-col space-y-4 p-4 bg-yellow-400">
			<a href="/" class="nav-link" on:click={toggleMenu}>{$_('header.home')}</a>
			<a href="/whereshop" class="nav-link" on:click={toggleMenu}>{$_('header.whereshop')}</a>
			<a href="/about" class="nav-link" on:click={toggleMenu}>{$_('header.about')}</a>
		</div>
	</div>
{/if}

