<script>
	import '../app.css';

	import Header from '../component/layout/Header.svelte';
	import Widegt from '../component/Widget.svelte';
	import Footer from '../component/layout/Footer.svelte';

	import { _ , setupI18n } from '../services/i18n';
	import FloatWa from '../component/FloatWA.svelte';

	setupI18n({ withLocale: 'es' });
</script>

<FloatWa />
<Widegt />
<main>
	<Header />
	<slot />
	<Footer />
</main>
