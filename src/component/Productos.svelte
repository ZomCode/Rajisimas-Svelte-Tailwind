<script>
	import ProductCard2 from './productCard2.svelte';
	import { _ } from 'svelte-i18n';
	var Productos = 
		[
			{
				"Nombre": "Rajísimas", 
				"Gramage": [460, 235], 
				"Variante": false
			},
			// {"Nombre": "Rajisimas", "Gramage": 235, "Sabor": false},
			{
				"Nombre": "Machísima", 
				"Gramage": [230, 150], 
				"Variante": {
					"Sabor": "Arandano",
					"Gramage": 150
			}},
			// {"Nombre": "Machísima", "Gramage": 150, "Sabor": false},
			// {"Nombre": "Machísima", "Gramage": 150, "Sabor": "Arandano"},
			{
				"Nombre": "Arbolísimo", 
				"Gramage": [150], 
				"Variante": false
			},
		];
</script>

<section class="bg-gray-200 dark:bg-gray-800 flex flex-col items-center gap-6 p-6">
	<div class="dark:text-white font-bold text-5xl p-6 uppercase">
		{$_('sectionsProducts')}
	</div>
	<ProductCard2 
		ArrayProductos={Productos} 
	/>
</section>