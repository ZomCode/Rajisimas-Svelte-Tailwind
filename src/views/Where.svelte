<script>
	import Rajisimas from '../img/RAJISIMAS 460gr.png';
	import Machisima from '../img/MACHISIMAS ARANDANO_150GR.png';
	import WhereShop from '../component/WhereShop.svelte';

	let DefaultOpcion = "Oxxo"

	let sucursales = [
		{
			nombre: 'Oxxo',
			sucursales: [
				'Oxxo Geo del Sur',
				'Oxxo',
				'Oxxo Magistral',
				'Oxxo 117 Oriente',
				'Oxxo Sadasi',
				'Oxxo Heroes de Puebla II',
				'Oxxo Karpas Jardìn',
				'Oxxo España',
				'Oxxo El Portòn',
				'Oxxo Lomas del Marmol',
				'Oxxo Villas Carmel',
				'Oxxo Patrimonio',
				'Oxxo San Isidro',
				'Oxxo Geovillas',
				'Oxxo Oriòn',
				'Oxxo',
				'Oxxo Mateo del Regil',
				'Oxxo Plaza W',
				'Oxxo Pabellòn Atlixcayotl',
				'Oxxo Òpera',
				'Oxxo Sinfonìa',
				'Oxxo Gas Lomas',
				'Oxxo Lomas II',
				'Oxxo Lomas de Angelop',
				'Oxxo Aventura',
				'Oxxo Plaza del Arco',
				'Oxxo Hda. Santa Clara',
				'Oxxo Santa Isabel',
				'Oxxo Olivos',
				'Oxxo La Huerta',
				'Oxxo Plaza San Carlos',
				'Oxxo Xixitla',
				'Oxxo San Pedro',
				'Oxxo 4 caminos',
				'Oxxo Jerusalèn',
				'Oxxo Rivadavia',
				'Oxxo Tlatempa',
				'Oxxo 30 Poniente',
				'Oxxo Sindicato',
				'Oxxo Campanario',
				'Oxxo Cañada',
				'Oxxo Cumbres Barreal',
				'Oxxo Bello Horizonte',
				'Oxxo Maya Norte',
				'Oxxo Morillotla',
				'Oxxo Plaza Arcoiris',
				'Oxxo Itzel',
				'Oxxo Belo Horizonte',
				'Oxxo',
				'Oxxo Casa Club',
				'Oxxo HaciendaSanCarlos',
				'Oxxo Floripa',
				'Oxxo El Marquès',
				'Oxxo El Rosal',
				'Oxxo San Juan',
				'Oxxo Bosques de Chapultepec',
				'Oxxo Nuevo Horizonte',
				'Oxxo del Valle',
				'Oxxo Real Campestre',
				'Oxxo Periferico Bosques',
				'Oxxo Xoxtla',
				'Oxxo Paseo Segovia',
				'Oxxo Segovia'
			]
		},
		{
			nombre: 'Chedraui',
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
		}
	];
	let sucursalesOxxo = [
		{
			nombre: 'Oxxo',
			sucursales: [
				'Geo del Sur',
				'Oxxo',
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
				'Oxxo',
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
		}
	];
	let sucursalesChe = [
		{
			nombre: 'Chedraui',
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
		}
	];

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

	let imgSucurOXXO = {
		Oxxo: [Rajisimas],
		"Geo del Sur": [Machisima],
		OXXO3: [Rajisimas],
		OXXO4: [Machisima]
	};
</script>

<section class="flex flex-col py-4 gap-x-4 items-center md:justify-center bg-zinc-800">
	<div class="flex items-center gap-x-3 font-bold text-4xl text-center text-white">
		TIENDAS FÍSICAS
		<svg
			class="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 16 20"
		>
			<path
				d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
			/>
		</svg>
	</div>
	<WhereShop sucursalesData={sucursalesChe} colorTitle={'text-orange-600'} images={imgSucurChe} Default={"CRYSTAL"}/>
	<WhereShop sucursalesData={sucursalesOxxo} colorTitle={'text-yellow-600'} images={imgSucurOXXO} Default={DefaultOpcion}/>
	<div class="flex flex-col items-center">
		<div class="font-bold text-4xl text-center text-white">TIENDAS EN LINEA</div>
	</div>
</section>
