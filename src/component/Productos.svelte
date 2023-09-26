<script>
	import Rajisimas1 from '../img/RAJISIMAS 460gr.png';
	import Rajisimas2 from '../img/OFICIAL 235gr.png';
	import Machisima1 from '../img/RAJISIMAS 460gr.png';
	import Machisima2 from '../img/OFICIAL 235gr.png';
	import Machisima3 from '../img/RAJISIMAS 460gr.png';
	import Arbolisimo from '../img/OFICIAL 235gr.png';

	import { _ } from 'svelte-i18n';

	var Productos = [
		{
			"Nombre": "Rajísimas",
			"Variantes": [
				{
					"Gramage": 460,
					"Sabor": null,
					"Img": Rajisimas1
				},
				{
					"Gramage": 235,
					"Sabor": null,
					"Img": Rajisimas2
				}
			]
		},
		{
			"Nombre": "Machísima",
			"Variantes": [
				{
					"Gramage": 230,
					"Sabor": null,
					"Img": Rajisimas1
				},
				{
					"Gramage": 150,
					"Sabor": null,
					"Img": Rajisimas2
				},
				{
					"Gramage": 150,
					"Sabor": "Arandano",
					"Img": Rajisimas2
				}
			]
		},
		{
			"Nombre": "Arbolísimo",
			"Variantes": [
				{
					"Gramage": 150,
					"Sabor": null,
					"Img": Rajisimas2
				}
			]
		}
	];
</script>

<section class="bg-gray-200 dark:bg-gray-800 flex flex-col items-center gap-6 p-6 [&>div]:animate-fade-up animate-once animate-duration-1000 animate-delay-[50ms] animate-ease-in">
	<div class="dark:text-white font-bold text-5xl p-6 uppercase">
		{$_('sectionsProducts')}
	</div>

	{#each Productos as {Nombre, Variantes}}
		<div
			class="
				group
				flex justify-center items-center
				rounded-lg bg-slate-500
				w-[90vw]
				h-100%
				"
		>
			<div
				class="
					absolute
					font-bold italic text-4xl p-2 dark:text-dark text-white group-hover:text-yellow-400
					border-y-2 group-hover:backdrop-blur-md group-hover:border-y-2 group-hover:border-yellow-400
					transition-all duration-1000 ease-in-out
					group-hover:-translate-x-[90vw]
					md:group-hover:-translate-x-[30vw]
					lg:group-hover:-translate-x-[40vw]
					group-hover:scale-[1.4]
				"
			>
				{Nombre}
			</div>
			<div
				class="
					flex 
					flex-col 
					md:flex-row justify-evenly
					gap-6
					transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100
				"
			>
				<!-- Itera sobre los tipos de gramaje y posibles variantes -->
				{#each Variantes as {Gramage, Sabor, Img}}
					<div class="flex items-center">
						<img src={Img} alt="Rajisimas" class="h-40" />
						{#if Sabor}
							<div class="flex flex-col [&>p]:m-0">
								<p class="text-slate-700 font-semibold">Sabor: {Sabor}</p>
								<p class="text-slate-700 font-semibold">{Gramage}gr</p>
							</div>
						{:else}
							<p class="text-slate-700 font-semibold">{Gramage}gr</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>