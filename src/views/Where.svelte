<script>
	import WhereShop from '../component/WhereShop.svelte';
	import { _ } from 'svelte-i18n';

	import chedahuiJson from '../Json/Chedrahui.json';
	import oxxoJson from '../Json/Oxxo.json';
	import unamJson from '../Json/Unam.json';

	import Rajisimas1 from '../img/RAJISIMAS_460gr.webp';
	import Rajisimas2 from '../img/RAJISIMAS_235gr.webp';
	import Machisima1 from '../img/MACHISIMA_230gr.webp';
	import Machisima2 from '../img/MACHISIMA_150gr.webp';
	import Machisima3 from '../img/MACHISIMA ARANDANO_150gr.webp';
	import Arbolisimo from '../img/ARBOLISIMO_340gr.webp';

	let imgSucurChe = {
		'Plaza Crystal': [Rajisimas2, Machisima2,Machisima3],
		'Selecto Angelopolis': [Rajisimas2, Machisima2,Machisima3],
		'Cruz del Sur': [Rajisimas2, Machisima2,Machisima3],
		'Explanada Puebla': [Rajisimas2, Machisima2,Machisima3],
		'Centro Sur': [Machisima2,Machisima3],
		'UPAEP': [Machisima2,Machisima3],
		'Xonaca': [Machisima2,Machisima3],
		'Atlixco': [Rajisimas2, Machisima2,Machisima3],
		'Teziutlan': [Machisima2,Machisima3],
		'Tepeaca': [Machisima2,Machisima3]
	};

	let stores = [
		{
			title: 'CHEDRAHUI',
			sucursalesData: chedahuiJson,
			colorTitle: 'text-orange-600',
			images: imgSucurChe,
			default: '',
			showInput: true
		},
		{
			title: 'OXXO',
			sucursalesData: oxxoJson,
			colorTitle: 'text-yellow-400',
			images: Rajisimas1, 
			default: '',
			showInput: true
		},
		{
			title: 'TIENDA UNAM',
			sucursalesData: unamJson,
			colorTitle: 'text-blue-400',
			images: Rajisimas1,
			default: '',
			showInput: false
		}
		// Add more stores here as needed.
	];
</script>

<section
	class="flex flex-col py-4 gap-x-4 items-center md:justify-center dark:bg-gray-800 bg-white"
>
	<div class="flex items-center gap-x-3 font-bold text-4xl text-center dark:text-white text-black">
		{$_('stores.titlePhysicalStores')}
		<svg
			class="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 20"
		>
		</svg>
	</div>

	{#each stores as store}
		<WhereShop
			titleStore = {store.title}
			sucursalesData = {store.sucursalesData}
			colorTitle = {store.colorTitle}
			images = {store.images}
			showInput = {store.showInput}
		/>
	{/each}

	<!-- <iframe src="https://www.google.com/maps/d/embed?mid=1OcA7MHYwefDy7Mzlzb3kaV5R3NswvE4&hl=es-419&ehbc=2E312F" width="640" height="480" title="none"></iframe> -->
	<div class="flex flex-col items-center">
		<div class="font-bold text-4xl text-center dark:text-white text-black">
			{$_('stores.titleOnlineStores')}
		</div>
		<div />
	</div>
	<div>
		<p class="text-3xl font-bold uppercase text-yellow-300">Mercado Libre</p>
	</div>
	<div class="flex flex-col items-center drop-shadow-md p-4 w-full">
		<div class="grid md:grid-cols-3 gap-3 w-full items-center">
			<div class="flex flex-col items-center gap-2">
				<a href="https://rajisimas.mercadoshops.com.mx/" target="_blank" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold pb-2 px-4 rounded w-80 h-40 text-6xl grid place-items-center">
					{$_('stores.buy')}
				</a> 
			</div>
			<div class="flex flex-col col-span-2 items-center">
				<p class="text-1xl text-slate-500 text-center">{$_('stores.ask')}</p>
				<div class="flex flex-wrap justify-center gap-5 p-4 rounded-xl h-full [&>img]:w-24 animate-fade animate-once animate-ease-linear">
					<img src="{Rajisimas1}" alt="{Rajisimas1}">
					<img src="{Rajisimas2}" alt="{Rajisimas2}">
					<img src="{Machisima1}" alt="{Machisima1}">
					<img src="{Machisima2}" alt="{Machisima2}">
					<img src="{Machisima3}" alt="{Machisima3}">
					<img src="{Arbolisimo}" alt="{Arbolisimo}">
				</div>
			</div>
		</div>
	</div>
	
</section>
