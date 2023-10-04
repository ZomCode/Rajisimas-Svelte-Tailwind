<script>
	import '../app.css';

	import Home from '../views/Home.svelte';
	import WhereShop from '../views/Where.svelte';
	import We from '../views/We.svelte';
	import NotFound from '../views/404.svelte';

	import Header from '../component/layout/Header.svelte';
	import Widegt from '../component/Widget.svelte';
	import Footer from '../component/layout/Footer.svelte';

	import { _, setupI18n } from '../services/i18n';
	import { Router, Route } from 'svelte-routing';

	let url = '';

	setupI18n({ withLocale: 'es' });
</script>


<Router {url}>
	<Widegt />
	<Header />
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
		<NotFound />
	</Route>
</Router>
<Footer />
