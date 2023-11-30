<script>
	import WhereShop from '../../component/WhereShop.svelte';
	import { _ } from 'svelte-i18n';

	import chedahuiJson from '../../Json/Chedrahui.json';
	import oxxoJson from '../../Json/Oxxo.json';
	import unamJson from '../../Json/Unam.json';

	import Rajisimas1 from '../../img/RAJISIMAS_460gr.webp';
	import Rajisimas2 from '../../img/RAJISIMAS_235gr.webp';
	import Machisima1 from '../../img/MACHISIMA_230gr.webp';
	import Machisima2 from '../../img/MACHISIMA_150gr.webp';
	import Machisima3 from '../../img/MACHISIMA ARANDANO_150gr.webp';
	import Arbolisimo from '../../img/ARBOLISIMO_340gr.webp';

	import LogoChedrahui from '../../img/Logo_Cherdraui.svg';
	import LogoOxxo from '../../img/Logo_Oxxo.svg';
	import LogoUnam from '../../img/logoTU-sm.svg';

	let imgSucurChe = {
		'Plaza Crystal': [Rajisimas2, Machisima2],
		'Selecto Angelopolis': [Rajisimas2, Machisima2],
		'Cruz del Sur': [Rajisimas2, Machisima2],
		'Explanada Puebla': [Rajisimas2, Machisima2],
		'Centro Sur': [Machisima2],
		UPAEP: [Machisima2],
		Xonaca: [Machisima2],
		Atlixco: [Rajisimas2, Machisima2],
		Teziutlan: [Machisima2],
		Tepeaca: [Machisima2]
	};
	let imgSucurOxxo = [
		Machisima2, Machisima3
	];
	let imgSucurUnam = [
		Rajisimas1, Machisima1
	];

	let stores = [
		{
			title: 'CHEDRAHUI',
			sucursalesData: chedahuiJson,
			colorTitle: 'text-orange-600',
			images: imgSucurChe,
			showInput: true
		},
		{
			title: 'OXXO',
			sucursalesData: oxxoJson,
			colorTitle: 'text-yellow-400',
			images: imgSucurOxxo,
			showInput: true
		},
		{
			title: 'TIENDA UNAM',
			sucursalesData: unamJson,
			colorTitle: 'text-blue-400',
			images: imgSucurUnam,
			showInput: false
		}
		// Add more stores here as needed.
	];
</script>

<svelte:head>
	<title>Rajísimas | {$_('header.whereshop')}</title>
</svelte:head>

<section class="flex flex-col items-center md:justify-center gap-y-4 dark:bg-[#0F0F0F] bg-white py-4 bg-no-repeat bg-cover bg-center bg-fixed bg-bgImgLight dark:bg-bgImgDark">
	<article class="h-auto md:h-[100vh] flex flex-col justify-evenly py-4">
		<h2 class="font-bold text-2xl md:text-4xl text-center dark:text-white text-black mx-8 md:mx-12">
			{$_('stores.titleSection')}
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 w-full [&>img]:h-[8em] p-4">
			<img loading="lazy" src="{LogoChedrahui}" alt="Logo Chedrahui" class="sm:min-h-[16em]">
			<img loading="lazy" src="{LogoOxxo}" alt="Logo Oxxo" class="sm:min-h-[16em]">
			<img loading="lazy" src="{LogoUnam}" alt="Logo Tienda Unam" class="sm:min-h-[1em] col-span-1 md:col-span-2 dark:bg-white p-2 rounded-lg">
		</div>
	</article>

	<article class="flex flex-col w-full">
		<h3 class="font-bold text-4xl text-center dark:text-white text-black efect-fade-up">
			{$_('stores.titlePhysicalStores')}
		</h3>
	
		{#each stores as store}
			<WhereShop
				titleStore={store.title}
				sucursalesData={store.sucursalesData}
				colorTitle={store.colorTitle}
				images={store.images}
				showInput={store.showInput}
			/>
		{/each}
	
		<h4 class="font-bold text-4xl text-center dark:text-white text-black w-full efect-fade-up">
			{$_('stores.titleOnlineStores')}
		</h4>
		<div class="flex flex-col items-center p-4 w-full efect-fade-up">
			<h5 class="w-full text-center text-3xl font-bold uppercase text-yellow-300">
				Mercado Libre
			</h5>
			<div class="grid justify-items-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 h-auto">
				<div class="flex justify-center items-center gap-2 col-span-1 md:col-span-2 lg:md:col-span-1 shadow-xl rounded-xl p-4">
					<a
						href="https://rajisimas.mercadoshops.com.mx/"
						target="_blank"
						class="
							grid place-items-center
							bg-gradient-to-r from-[#de1f86] to-[#de1f86]
							hover:from-[#de1f86] hover:to-[#911457]
							text-white font-bold text-3xl

							dark:text-black
							
							rounded-2xl
							w-3/4 lg:h-1/4
							pb-2 overflow-hidden
						"
					>
						{$_('stores.buy')}
					</a>
				</div>
				<div class="flex flex-col items-center gap-2 col-span-1 md:col-span-2 shadow-xl rounded-lg w-full">
					<p class="text-1xl text-slate-500 text-center py-4">
						{$_('stores.ask')}
					</p>
					<div
						class="
							grid grid-cols-2 md:grid-cols-3 place-content-around place-items-center gap-2 md:gap-4 
							rounded-xl
							[&>img]:w-32 sm:[&>img]:min-h-40
							animate-fade animate-once animate-ease-linear 
							py-4 w-full
							"
					>
						<img loading="lazy" src={Rajisimas1} alt={Rajisimas1} />
						<img loading="lazy" src={Rajisimas2} alt={Rajisimas2} />
						<img loading="lazy" src={Machisima1} alt={Machisima1} />
						<img loading="lazy" src={Machisima2} alt={Machisima2} />
						<img loading="lazy" src={Machisima3} alt={Machisima3} />
						<img loading="lazy" src={Arbolisimo} alt={Arbolisimo} />
					</div>
				</div>
			</div>
		</div>
	</article>
</section>

<style>
	@keyframes show {
		from{
			opacity: 0;
			scale: 25%;
		}

		to{
			opacity: 1;
			scale: 100%;
		}
	}

	.efect-fade-up{
		view-timeline-name: --fadeUp;
		view-timeline-axis: block;

		animation-timeline: --fadeUp;
		animation-name: show;

		animation-range: entry 10% 	cover 40%;
		animation-fill-mode: both;
	}
</style>