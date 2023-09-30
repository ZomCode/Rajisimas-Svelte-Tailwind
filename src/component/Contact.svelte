<script>
	import logoRajisimas from '../img/logoR.webp';

	import { _ } from 'svelte-i18n';

	let email = '';
	let tel = '';
	let about = '';
	let company = '';
	let message = '';

	function enviarFormulario() {
    // Captura los datos del formulario
    const datosFormulario = {
		email,
		tel,
		about,
		company,
		message
    };
	

    // Realiza una solicitud HTTP (por ejemplo, utilizando fetch) para enviar los datos al servidor
    fetch('/tu-servidor-de-procesamiento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosFormulario)
    })
    .then(response => {
      if (response.ok) {
        // La solicitud se completó con éxito, puedes realizar acciones adicionales aquí
        console.log('Formulario enviado con éxito');
      } else {
        // Manejar errores si es necesario
        console.error('Error al enviar el formulario');
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
  }
</script>

<section
	class="
    grid items-center
    h-[100vh] w-full 
	bg-no-repeat bg-cover bg-center bg-[url('src/img/bgRajisimas.webp')] 
	dark:bg-gradient-to-t from-gray-600 to-gray-200"
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
		<form>
			<div class="grid gap-2 grid-cols-1 md:grid-cols-2 text-gray-700">
				<div class="flex flex-col my-3">
					<!-- <label for="correo" class="font-bold">Correo</label> -->
					<input
						type="email"
						name="email"
						id="email"
						placeholder="{$_('ContactUs.email')}*"
						bind:value={email} 
						required
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
						name="tel"
						id="tel"
						placeholder={$_('ContactUs.phone')}
						bind:value={tel} 
						required
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
						name="about"
						id="about"
						placeholder="{$_('ContactUs.subject')}*"
						bind:value={about} 
						required
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
						name="company"
						id="company"
						placeholder="{$_('ContactUs.company')}*"
						bind:value={company} 
						required
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
						name="message"
						id="message"
						rows="3"
						placeholder="{$_('ContactUs.message')}*"
						bind:value={message} 
						required
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
				<button 
					type="button" 
					class="
						col-span-1 md:col-span-2
						rounded-full
						font-semibold
						text-white
						bg-gradient-to-r from-green-500 to-yellow-400
						
						px-4 py-2 hover:ring-4 ring-offset-2 ring-offset-green-900 ring-lime-900 mt-2 text-center
					"
					on:click={enviarFormulario}
				>
					Enviar
				</button>

			</div>
		</form>
	</div>
</section>
