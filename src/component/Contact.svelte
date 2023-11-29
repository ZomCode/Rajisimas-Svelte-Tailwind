<script>
	import { _ } from 'svelte-i18n';
	import imagenDesktop from '../img/FondoDesktop.webp'

	let email = '';
	let tel = '';
	let about = '';
	let company = '';
	let message = '';

	const enviarFormulario = () => {
		if (email === '' || about === '' || company === '' || message === '') {
			alert('Por favor, llene todos los campos obligatorios (*)');
		} else {
			alert('Gracias por contactarnos, te responderemos lo más pronto posible');
			email = '';
			tel = '';
			about = '';
			company = '';
			message = '';
		}
	};
</script>

<section
	class="
    grid items-center
	min-h-[70vh]
	bg-no-repeat bg-cover bg-center
	bg-fixed
	"
	style={[`background-image: url(${imagenDesktop})`]}
>
	<article
		class="
			flex flex-col items-center
			backdrop-blur-md
			bg-opacity-30 rounded-lg
			bg-gray-300
			min-h-min
			p-4 my-8 m-auto
			w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]
        "
	>
		<div
			class="
				flex flex-col items-center text-center py-4
			"
		>
			<!-- <img src={logoRajisimas} alt="Rajisimas" class="h-24" /> -->
			<h4 class="font-bold- text-4xl text-yellow-50 dark:text-yellow-950">
				{$_('ContactUs.titleContactUs')}
			</h4>
		</div>
		<form
			action="https://formsubmit.co/rajisimasconsabor@gmail.com"
			method="POST"
			class="
				w-full 
				grid grid-cols-1 md:grid-cols-2 gap-4 
				text-black dark:text-white

				[&>input]:w-full
				[&>input]:placeholder:text-gray-950 [&>input]:dark:placeholder:text-gray-700
				[&>textarea]:placeholder:text-slate-900 [&>textarea]:dark:placeholder:text-gray-700
				[&>input]:rounded-lg
				[&>textarea]:rounded-lg

				[&>textarea]:w-full
				md:[&>textarea]:col-span-2
				place-items-center
				[&>button]:col-span-1 md:[&>button]:col-span-2
			"
		>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="{$_('ContactUs.email')}*"
				bind:value={email}
				required
				autocomplete="email"
				class="
					bg-transparent p-2
					border-2
					border-gray-300
					hover:border-rose-700
					focus:outline-none
					focus:ring
					focus:ring-rose-700
					focus:border-transparent
				"
			/>
			<input
				type="tel"
				name="tel"
				id="tel"
				placeholder={$_('ContactUs.phone')}
				bind:value={tel}
				accept="[0-9]"
				required
				autocomplete="tel"
				class="
					bg-transparent p-2
					border-2
					border-gray-300
					hover:border-rose-700
					focus:outline-none
					focus:ring
					focus:ring-rose-700
					focus:border-transparent
				"
			/>
			<input
				type="text"
				name="_subject"
				id="_subject"
				placeholder="{$_('ContactUs.subject')}*"
				bind:value={about}
				required
				class="
					bg-transparent p-2
					border-2
					border-gray-300
					hover:border-rose-700
					focus:outline-none
					focus:ring
					focus:ring-rose-700
					focus:border-transparent
				"
			/>
			<input
				type="text"
				name="company"
				id="company"
				placeholder="{$_('ContactUs.company')}*"
				bind:value={company}
				required
				autocomplete="organization"
				class="
					bg-transparent p-2
					border-2
					border-gray-300
					hover:border-rose-700
					focus:outline-none
					focus:ring
					focus:ring-rose-700
					focus:border-transparent
				"
			/>
			<textarea
				name="message"
				id="message"
				rows="3"
				placeholder="{$_('ContactUs.message')}*"
				bind:value={message}
				required
				class="
					bg-transparent p-2
					border-2
					border-gray-300
					hover:border-rose-700
					focus:outline-none
					focus:ring
					focus:ring-rose-700
					resize-none
					focus:border-transparent
				"
			/>
			<button
				type="submit"
				class="
					flex justify-center
					rounded-md
					font-semibold
					text-white
					bg-gradient-to-r from-[#dd1e84] to-[#de1f86]
					hover:from-[#de1f86] hover:to-[#911457]
					hover:ring-0
					mt-2
					px-4 py-2 
					w-1/2
					md:w-1/4
					
				"
				on:click={enviarFormulario}
			>
				Enviar
			</button>
		</form>
	</article>
</section>
