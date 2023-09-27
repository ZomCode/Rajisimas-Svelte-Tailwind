<script>
	export let sucursalesData = [];
	export let images;
	export let colorTitle;
	export let titleStore;
	export let showInput;

	import { _ } from 'svelte-i18n';

	let searchTerm = '';
	$: selectedSucursal = '';
	let address = '';
	let url = '';

	function handleSelectChange(event) {
		selectedSucursal = event.target.value;
		const selectedData = sucursalesData.find((sucursal) => sucursal.Nombre === selectedSucursal);
		address = selectedData.Direccion;
		url = selectedData.Url;
	}

	function handleSearchInput() {
		const foundSucursal = sucursalesData.find((sucursal) =>
			sucursal.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
		);
		if (foundSucursal) {
			selectedSucursal = foundSucursal.Nombre;
			address = foundSucursal.Direccion;
			url = foundSucursal.Url;
		} else {
			// Si no se encuentra ninguna sucursal, puedes manejarlo aquí.
			// Por ejemplo, mostrar un mensaje de error.
			selectedSucursal = '';
			address = 'Lo sentimos no encontramos nada 😔';
			url = '';
		}
	}
</script>

<div class="group flex flex-col items-center drop-shadow-md p-4 w-full shadow-inner">
	<div class="text-3xl font-bold uppercase {colorTitle}">
		{titleStore}
	</div>
	<div class="grid justify-items-evenly grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
		<div class="flex flex-col items-center p-4 gap-2 col-span-1 shadow-xl rounded-lg">
			<p class="text-1xl text-slate-500">
				{sucursalesData.length > 1 ? $_('stores.branches') : $_('stores.branch')}
			</p>
			{#if showInput}
				<input
					placeholder={$_('stores.branchName')}
					bind:value={searchTerm}
					on:input={handleSearchInput}
					class="
						block w-full p-2.5 text-sm rounded-lg
						bg-gray-50 border
						border-gray-300
						text-gray-900
						focus:ring-blue-500
						focus:border-blue-500
						dark:bg-gray-700
						dark:border-gray-600
						dark:placeholder-gray-400
						dark:text-white
						dark:focus:ring-blue-500
						dark:focus:border-blue-500
					"
				/>
			{/if}
			<select
				size={5}
				class="
					block w-full p-2.5 text-sm rounded-lg
					bg-gray-50 border
					border-gray-300
					text-gray-900
					focus:ring-blue-500
					focus:border-blue-500
					dark:bg-gray-700
					dark:border-gray-600
					dark:placeholder-gray-400
					dark:text-white
					dark:focus:ring-blue-500
					dark:focus:border-blue-500
				"
				bind:value={selectedSucursal}
				on:change={handleSelectChange}
			>
				{#each sucursalesData as { Nombre }}
					<option value={Nombre} class="hover:bg-gray-300 uppercase">{Nombre}</option>
				{/each}
			</select>
		</div>
		<div class="flex flex-col items-center gap-2 col-span-1 md:col-span-2 shadow-xl rounded-lg p-4 w-full">
			<p class="text-1xl text-slate-500 text-center">{$_('stores.ask')}</p>
			<div class="flex flex-col justify-evenly items-center rounded-xl h-full w-full">
				{#if Array.isArray(images) === true}
					<div class="flex justify-evenly w-full py-2">
						{#each images as image}
							<img
								src={image}
								alt={selectedSucursal}
								class="animate-fade-down animate-once animate-ease-linear h-[10em]"
							/>
						{/each}
					</div>
					<a
						href={url}
						class="
							text-1xl font-bold uppercase
							dark:text-white text-black group-hover:text-gray-700 dark:group-hover:text-gray-400
							animate-fade-down animate-once animate-ease-linear
						"
						target="_blank"
					>
						{address}
					</a>
				{:else if typeof images === 'object'}
					{#if selectedSucursal}
						<div class="flex justify-evenly flex-wrap w-full py-2">
							{#each images[selectedSucursal] as imagen}
								<img
									src={imagen}
									alt={selectedSucursal}
									class="animate-fade-down animate-once animate-ease-linear h-[10em]"
								/>
							{/each}
						</div>
						<a
							href={url}
							class="
								text-1xl font-bold uppercase
								dark:text-white text-black group-hover:text-gray-700 dark:group-hover:text-gray-400
								animate-fade-down animate-once animate-ease-linear
							"
							target="_blank"
						>
							{address}
						</a>
					{:else}
						<div class="dark:text-white text-black py-6">{$_('stores.waiting')}🤔😁</div>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>
