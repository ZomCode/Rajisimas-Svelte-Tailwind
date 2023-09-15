<script>
	export let sucursal;
	export let imagenesSucursal;

	let selectedImage = '';

	$: {
		selectImage();
	}

	function selectImage() {
		selectedImage = imagenesSucursal[sucursal];
	}
</script>

<div class="group flex flex-col items-center w-40 bg-blue-500 rounded-xl">
  {sucursal} <!-- Asegúrate de mostrar la variable sucursal aquí -->
  <div class={selectedImage ? 'group-hover:flex' : 'hidden'}>
    <img src={selectedImage[sucursal]} alt={sucursal} class="w-auto h-20" />
  </div>
</div>

