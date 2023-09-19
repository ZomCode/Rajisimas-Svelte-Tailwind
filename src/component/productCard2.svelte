<script>
	import Rajisimas1 from '../img/RAJISIMAS 460gr.png';
	import Rajisimas2 from '../img/OFICIAL 235gr.png';
	import Machisima1 from '../img/RAJISIMAS 460gr.png';
	import Machisima2 from '../img/OFICIAL 235gr.png';
	import Machisima3 from '../img/RAJISIMAS 460gr.png';
	import Arbolisimo from '../img/OFICIAL 235gr.png';

	export let ArrayProductos;
</script>
{#each ArrayProductos as Producto}
	<div
		class="
			group
			flex justify-center items-center
			rounded-lg bg-slate-500
			w-[90%]
			h-40
			"
	>
		<div
			class="
			absolute
			font-bold italic text-4xl p-2 dark:text-dark text-white group-hover:text-yellow-400
			border-y-2 group-hover:backdrop-blur-md group-hover:border-y-2 group-hover:border-yellow-400
			transition-all duration-1000 ease-in-out
			lg:group-hover:-translate-x-[38vw] group-hover:-translate-x-[25rem] group-hover:scale-150
			"
		>
			{Producto.Nombre}
		</div>
		<div
			class="
			flex
			group-hover:flex justify-evenly
			w-full
			transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100
			"
		>
			<!-- Itera sobre los tipos de gramaje y posibles variantes -->
			{#each Producto.Gramage as Gramage}
				<div class="rounded-xl w-40 h-auto drop-shadow-lg flex items-center">
					<img src={Gramage === 460 ? Rajisimas1 : Rajisimas2} alt="Rajisimas" />
					<p class="text-slate-400">{Gramage} gr</p>
				</div>
			{/each}
			{#if Producto.Variante}
				<div class="rounded-xl w-40 h-auto drop-shadow-lg flex items-center">
					<img src={Producto.Variante === 'Arandano' ? Rajisimas1 : Rajisimas2} alt="Rajisimas" />
					<p class="text-slate-400 flex">{Producto.Variante.Sabor} {Producto.Variante.Gramage}gr</p>
				</div>
			{/if}
		</div>
	</div>
{/each}