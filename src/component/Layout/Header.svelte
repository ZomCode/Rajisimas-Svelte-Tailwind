<script>
    import { Link } from 'svelte-routing';

    import imgLogo from '../../img/LogoR.png';
	import LetrasR from '../../img/Letras.png';
    import { _ } from '../../services/i18n';

    let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

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