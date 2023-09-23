<script>
	export let sucursalesData = [];
	export let images = {};
	export let colorTitle = '';
	export let Default = '';
	export let address = 'EXAMPLE';
	export let titleStore = '';
	import { _ } from 'svelte-i18n';
	import Machisima from '../img/MACHISIMAS ARANDANO_150GR.png';
	import { onMount } from 'svelte';

	let prefix = '';
	let selectedSucursal = Default;
	let showInput = true;

	function selectSucursal() {
		// You can directly use selectedSucursal here if you remove the duplicate variable declaration.
		// Example: selectedSucursal = prefix;
	}

	$: filteredSucursales = prefix
		? sucursalesData.Nombre.filter((sucursal) =>
				sucursal.toLowerCase().startsWith(prefix.toLowerCase())
		  )
		: sucursalesData.sucursales;

	let search = undefined;
	let malls = [];
	$: visibleMalls = search ?
		users.filter(mall => {
			return mall.Nombre.match(`${search}.*`) || mall.Nombre.match(`${search}.*`)
	}) : malls;

	onMount(async () => {
		const resp = await fetch(sucursalesData)
		const data = await resp.json();
		users = data.results;
	});
</script>

<div class="flex flex-col items-center drop-shadow-md p-4 w-full">
	<p class="text-3xl font-bold uppercase {colorTitle}">{titleStore}</p>
	<div class="grid md:grid-cols-2 gap-3 w-full items-center">
		<div class="flex flex-col items-center gap-2">
			<p class="text-1xl text-slate-500">{$_('stores.branches')}</p>
			{#if showInput}
				<input
					placeholder="Nombre Sucursal"
					bind:value={prefix}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			{/if}
			<select
				size={5}
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				bind:value={selectedSucursal}
			>
				{#each sucursalesData as {Nombre}}
					<option value={Nombre} class="hover:bg-gray-300 uppercase" rows={visibleMalls} let:row={user}>{Nombre}</option>
				{/each}
				
			</select>
		</div>
		<div class="flex flex-col items-center">
			<p class="text-1xl text-slate-500 text-center">{$_('stores.ask')}</p>
			<div class="group flex justify-evenly items-center w-40 rounded-xl h-full">
				{#if typeof images === 'object'}
					{#if selectedSucursal}
						{#each images[selectedSucursal] as imagen}
							<img src={imagen} alt={selectedSucursal} class="w-auto h-20" />
						{/each}
					{:else}
						<!-- Mostrar la imagen por defecto -->
						<img src={images[selectedSucursal]} alt="Valor por defecto" class="w-auto h-20" />
					{/if}
				{:else}
					<div class="flex flex-col items-center">
						<img src={images} alt="Machisima" />
						<div class="uppercase dark:text-white text-black font-bold text-2xl">{address}</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
