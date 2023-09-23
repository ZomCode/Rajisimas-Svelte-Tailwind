<script>
	import { _ } from 'svelte-i18n';
	import chedahuiJson from '../Json/Chedrahui.json';
	import oxxoJson from '../Json/Oxxo.json';
	import unamJson from '../Json/Unam.json';

	import WhereShop from '../component/WhereShop.svelte';
	import Rajisimas from '../img/RAJISIMAS 460gr.png';
	import Machisima from '../img/MACHISIMAS ARANDANO_150GR.png';

	// Combine sucursal data and images into a single object or array.
	let sucursalesChe = {
		sucursales: [
			'CRYSTAL',
			'SELECTO',
			'CRUZ DEL SUR',
			'EXPLANADA',
			'CENTRO SUR',
			'UPAEP',
			'XONACA',
			'ATLIXCO',
			'TEZIUTLAN',
			'TEPEACA'
		]
	};

	let sucursalesOxxo = {
		sucursales: [
			'Geo del Sur',
			'Magistral',
			'117 Oriente',
			'Sadasi',
			'Heroes de Puebla II',
			'Karpas Jardìn',
			'España',
			'El Portòn',
			'Lomas del Marmol',
			'Villas Carmel',
			'Patrimonio',
			'San Isidro',
			'Geovillas',
			'Oriòn',
			'OXXO',
			'Mateo del Regil',
			'Plaza W',
			'Pabellòn Atlixcayotl',
			'Òpera',
			'Sinfonìa',
			'Gas Lomas',
			'Lomas II',
			'Lomas de Angelop',
			'Aventura',
			'Plaza del Arco',
			'Hda. Santa Clara',
			'Santa Isabel',
			'Olivos',
			'La Huerta',
			'Plaza San Carlos',
			'Xixitla',
			'San Pedro',
			'4 caminos',
			'Jerusalèn',
			'Rivadavia',
			'Tlatempa',
			'30 Poniente',
			'Sindicato',
			'Campanario',
			'Cañada',
			'Cumbres Barreal',
			'Bello Horizonte',
			'Maya Norte',
			'Morillotla',
			'Plaza Arcoiris',
			'Itzel',
			'Belo Horizonte',
			'Oxxo',
			'Casa Club',
			'HaciendaSanCarlos',
			'Floripa',
			'El Marquès',
			'El Rosal',
			'San Juan',
			'Bosques de Chapultepec',
			'Nuevo Horizonte',
			'del Valle',
			'Real Campestre',
			'Periferico Bosques',
			'Xoxtla',
			'Paseo Segovia',
			'Segovia'
		]
	};

	let sucursalesUNAM = {
		sucursales: [
			'UNAM'
		]
	};

	let imgSucurChe = {
		CRYSTAL: [Machisima, Rajisimas],
		SELECTO: [Machisima, Rajisimas],
		'CRUZ DEL SUR': [Machisima, Rajisimas],
		EXPLANADA: [Machisima, Rajisimas],
		'CENTRO SUR': [Machisima],
		UPAEP: [Machisima],
		XONACA: [Machisima],
		ATLIXCO: [Rajisimas, Machisima],
		TEZIUTLAN: [Machisima],
		TEPEACA: [Machisima]
	};

	let stores = [
		{
			title: 'CHEDRAHUI',
			sucursalesData: chedahuiJson,
			colorTitle: 'text-orange-600',
			images: imgSucurChe,
			Default: 'CRYSTAL'
		},
		{
			title: 'OXXO',
			sucursalesData: oxxoJson,
			colorTitle: 'text-yellow-400',
			images: Machisima, // Set images as null or provide the appropriate data here.
			Default: 'OXXO'
		},
		{
			title: 'TIENDA UNAM',
			sucursalesData: unamJson,
			colorTitle: 'text-blue-400',
			images: Rajisimas, // Set images as null or provide the appropriate data here.
			Default: 'UNAM'
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
			<!-- SVG path here -->
		</svg>
	</div>

	{#each stores as store}
		<WhereShop
			titleStore={store.title}
			sucursalesData={store.sucursalesData}
			colorTitle={store.colorTitle}
			images={store.images}
			Default={store.Default}
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
</section>
