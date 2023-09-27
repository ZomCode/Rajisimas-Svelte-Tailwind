<script>
	import logoRajisimas from '../img/logoR.webp';

	import { _ } from 'svelte-i18n';
</script>

<section
	class="
    grid items-center
    h-[100vh] w-full bg-no-repeat bg-cover bg-center bg-[url('src/img/bgRajisimas.webp')] dark:bg-gradient-to-t from-gray-600 to-gray-200"
>
	<div
		class="
			flex flex-col items-center justify-evenly
			backdrop-blur-md
			bg-opacity-30 rounded-lg
			bg-gray-300
			p-4 mx-auto
			h-[90vh]
        "
	>
		<div
			class="
				flex flex-col items-center
			"
		>
			<img src={logoRajisimas} alt="Rajisimas" class="h-[40vw] md:[h-30vw] lg:h-[20vw]" />
			<p class="font-bold- text-2xl">{$_('ContactUs.titleContactUs')}</p>
		</div>
		<form action="">
			<div class="grid gap-2 grid-cols-1 md:grid-cols-2 text-gray-700">
				<div class="flex flex-col my-3">
					<!-- <label for="correo" class="font-bold">Correo</label> -->
					<input
						type="email"
						name="correo"
						id="correo"
						placeholder="{$_('ContactUs.email')}*"
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
						placeholder={$_('ContactUs.phone')}
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
						placeholder="{$_('ContactUs.subject')}*"
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
						placeholder="{$_('ContactUs.company')}*"
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
				<div class="flex flex-col md:col-span-2">
					<!-- <label for="descripcion" class="font-bold">Mensaje</label> -->
					<textarea
						name="Mensaje"
						id="Mensaje"
						rows="3"
						placeholder="{$_('ContactUs.message')}*"
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
							resize-none
						"
					/>
				</div>
			</div>
		</form>
	</div>
</section>
