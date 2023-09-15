<script>
	import RajisimasIMG from '../img/bgRajisimas.jpg';
	import logoRajisimas from '../img/logoR.png';

	import { _ } from 'svelte-i18n';
</script>

<section
	class="
    grid items-center
    bg-gradient-to-t from-slate-800 to-slate-300
    h-[90vh] w-full bg-no-repeat bg-cover bg-center"
	style="background-image: url({RajisimasIMG});"
>
	<div
		class="flex flex-col justify-center md:justify-evenly
        backdrop-blur-md
        bg-opacity-50 rounded-lg
        bg-gray-300
        px-3 mx-auto
        max-h-[90%] min-h-[60%]
        max-w-[90%] md:max-w-[60%]
        "
	>
		<div
			class="
			flex flex-col items-center justify-center
			text-center
			p-3 w-[50%] lg:w-[40%] xl:w-[30%] h-auto mx-auto"
		>
			<img src={logoRajisimas} alt="Rajisimas" class="" />
			<p class="w-full font-bold- text-2xl">{$_('sectionContactUs')}</p>
		</div>
		<div class="grid gap-x-2 grid-cols-1 md:grid-cols-2 text-gray-700">
			<div class="flex flex-col my-3">
				<!-- <label for="correo" class="font-bold">Correo</label> -->
				<input
					type="email"
					name="correo"
					id="correo"
					placeholder="Correo electrónico*"
					class="
						bg-transparent p-2
						rounded-lg
						border-2
						border-gray-300
						hover:border-lime-700
						focus:outline-none
						focus:ring
						focus:ring-lime-200
						focus:border-transparent
						placeholder:text-gray-600"
				/>
			</div>
			<div class="flex flex-col my-3">
				<!-- <label for="telefono" class="font-bold">Télefono</label> -->
				<input
					type="tel"
					name="telefono"
					id="telefono"
					placeholder="Teléfono"
					class="
						bg-transparent p-2
						rounded-lg
						border-2
						border-gray-300
						hover:border-lime-700
						focus:outline-none
						focus:ring
						focus:ring-lime-200
						focus:border-transparent
						placeholder:text-gray-600"
				/>
			</div>
			<div class="flex flex-col my-3">
				<!-- <label for="asunto" class="font-bold">Asunto</label> -->
				<input
					type="text"
					name="asunto"
					id="asunto"
					placeholder="Asunto*"
					class="
						bg-transparent p-2
						rounded-lg
						border-2
						border-gray-300
						hover:border-lime-700
						focus:outline-none
						focus:ring
						focus:ring-lime-200
						focus:border-transparent
						placeholder:text-gray-600"
				/>
			</div>
			<div class="flex flex-col my-3">
				<!-- <label for="empresa" class="font-bold">Empresa</label> -->
				<input
					type="text"
					name="empresa"
					id="empresa"
					placeholder="Empresa*"
					class="
						bg-transparent p-2
						rounded-lg
						border-2
						border-gray-300
						hover:border-lime-700
						focus:outline-none
						focus:ring
						focus:ring-lime-200
						focus:border-transparent
						placeholder:text-gray-600"
				/>
			</div>
			<div class="flex flex-col my-3 md:col-span-2">
				<!-- <label for="descripcion" class="font-bold">Mensaje</label> -->
				<textarea
					name="Mensaje"
					id="Mensaje"
					cols="30"
					rows="5"
					placeholder="Mensaje*"
					class="
						bg-transparent p-2
						rounded-lg
						border-2
						border-gray-300
						hover:border-lime-700
						focus:outline-none
						focus:ring
						focus:ring-lime-200
						focus:border-transparent
						placeholder:text-gray-600
						resize-none"
				/>
			</div>
		</div>
	</div>
</section>
