<script>
	import Rajisimas1 from '../img/RAJISIMAS_460gr.webp';
	import Rajisimas2 from '../img/RAJISIMAS_235gr.webp';
	import Machisima1 from '../img/MACHISIMA_230gr.webp';
	import Machisima2 from '../img/MACHISIMA_150gr.webp';
	import Machisima3 from '../img/MACHISIMA ARANDANO_150gr.webp';
	import Arbolisimo from '../img/ARBOLISIMO_340gr.webp';

	import { _ } from 'svelte-i18n';

	var Productos = [
		{
			Nombre: 'Rajísimas',
			nombreDescription: 'rajisimasDescription',
			Variantes: [
				{
					Gramage: 460,
					Sabor: null,
					Img: Rajisimas1
				},
				{
					Gramage: 235,
					Sabor: null,
					Img: Rajisimas2
				}
			]
		},
		{
			Nombre: 'Machísima',
			nombreDescription: 'machisimaDescription',
			Variantes: [
				{
					Gramage: 230,
					Sabor: null,
					Img: Machisima1
				},
				{
					Gramage: 150,
					Sabor: null,
					Img: Machisima2
				},
				{
					Gramage: 150,
					Sabor: 'Arandano',
					Img: Machisima3
				}
			]
		},
		{
			Nombre: 'Arbolísimo',
			nombreDescription: 'arbolisimoDescription',
			Variantes: [
				{
					Gramage: 150,
					Sabor: null,
					Img: Arbolisimo
				}
			]
		}
	];
</script>

{#each Productos as { Nombre, Variantes, nombreDescription }}
	<article
		class="
				group
				flex flex-col justify-center items-center
				rounded-lg
				shadow-lg
				bg-gray-200 shadow-gray-950
				dark:bg-gray-600 dark:shadow-gray-300
				min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw] xl:min-w-[60vw]
				min-h-[45vh]
				md:min-h-min
				efect-fade-up
				px-4
			"
	>
		<h3
			class="
					absolute
					text-center
					font-bold italic text-4xl p-2
					text-gray-900 dark:text-white group-hover:text-rose-500
					border-y-2 border-black dark:border-white group-hover:backdrop-blur-md group-hover:border-y-2 group-hover:border-black-400
					transition-all duration-1000 ease-in-out
					group-hover:-translate-x-[120vw]
					lg:group-hover:-translate-x-[40vw]
					group-hover:scale-[1.4]
				"
		>
			{Nombre}
		</h3>
		<p
			class="
					text-gray-700 dark:text-gray-300 text-center font-semibold
					absolute bottom-0 pb-2
					group-hover:opacity-0 delay-500 transition-opacity ease-in-out duration-200
				"
		>
			{$_('home.' + nombreDescription)}
		</p>
		<div
			class="
					flex flex-col
					md:flex-row justify-evenly
					w-full
					p-4
					transition-all duration-1000 ease-in-out opacity-[0.1] group-hover:opacity-[1]
				"
		>
			<!-- Itera sobre los tipos de gramaje y pos ibles variantes -->
			{#each Variantes as { Gramage, Sabor, Img }}
				<div class="flex items-center">
					<img
						loading="lazy"
						src={Img}
						alt={Nombre}
						class="h-44 md:hover:scale-110 transition-all ease-in-out duration-500 mx-auto"
					/>
					{#if Sabor}
						<div class="flex flex-col absolute right-2 sm:static">
							<p class="text-slate-700 dark:text-white font-semibold">
								{@html $_('home.' + Nombre.toLocaleLowerCase() + Sabor.toLocaleLowerCase())}
							</p>
							<p class="text-slate-700 dark:text-white font-semibold">{Gramage}gr</p>
						</div>
					{:else}
						<p class="text-slate-700 dark:text-white font-semibold absolute right-12 sm:static">
							{Gramage}gr
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</article>
{/each}

<style>
	@keyframes show {
		from {
			opacity: 0;
			scale: 25%;
		}

		to {
			opacity: 1;
			scale: 100%;
		}
	}

	.efect-fade-up {
		view-timeline-name: --fadeUp;
		view-timeline-axis: block;

		animation-timeline: --fadeUp;
		animation-name: show;

		animation-range: entry 10% cover 20%;
		animation-fill-mode: both;
	}
</style>
