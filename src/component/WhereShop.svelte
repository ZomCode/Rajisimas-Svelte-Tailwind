<script>
	export let sucursalesData = [];
	export let images = {};
	export let colorTitle = '';
	export let Default = '';

	let prefix = '';
	let selectedSucursal = Default;

	function selectSucursal(event) {
		selectedSucursal = event.target.value;
		console.log(sucursalesData)
	}
</script>

<div class="flex flex-col items-center drop-shadow-md p-4 w-full">
	<p class="text-3xl font-bold uppercase {colorTitle}">{sucursalesData[0].nombre}</p>
	<div class="grid md:grid-cols-2 gap-3 w-full">
		<div class="flex flex-col items-center gap-2">
			<p class="text-1xl text-slate-500">Sucursales</p>
			<input
				placeholder="Nombre Sucursal"
				bind:value={prefix}
				class="p-2 rounded-lg border-2 border-gray-300 w-full"
			/>
			<select
				bind:value={selectedSucursal}
				size={5}
				class="p-2 rounded-lg border-2 border-gray-300 w-full"
				on:change={selectSucursal}
			>
				{#each sucursalesData[0].sucursales as sucur}
					<option value={sucur} class="uppercase">{sucur}</option>
				{/each}
			</select>
		</div>
		<div class="flex flex-col items-center">
			<p class="text-1xl text-slate-500 text-center">¿Qué puedes encontrar aquí?</p>
			<div class="group flex justify-evenly items-center w-40 rounded-xl h-full">
				{#if selectedSucursal}
					{#each images[selectedSucursal] as imagen}
						<img src={imagen} alt={selectedSucursal} class="w-auto h-20" />
					{/each}
				{:else}
					<!-- Mostrar la imagen por defecto -->
					<img src={images[selectedSucursal]} alt="Valor por defecto" class="w-auto h-20" />
				{/if}
			</div>
		</div>
	</div>
</div>
