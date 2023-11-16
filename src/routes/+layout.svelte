<script>
	import '../app.css';

	import Header from '../component/layout/Header.svelte';
	import Widegt from '../component/Widget.svelte';
	import Footer from '../component/layout/Footer.svelte';

	import { _ , setupI18n } from '../services/i18n';
	import FloatIconWa from '../component/FloatWA.svelte';

	setupI18n({ withLocale: 'es' });
</script>

<main class="h-auto w-auto">
	<Widegt />
	<FloatIconWa />
	<Header />
	<slot />
	<Footer />
</main>
