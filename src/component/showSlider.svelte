<script>
	let currentSlide = 0;
	let interval;

	import { onMount } from 'svelte';
	import LetrasR from '../img/Letras.png';
	import Rajisimas1 from '../img/Rajisimas1.jpg';
	import Arbolisimo1 from '../img/Arbolisimo1.jpg';

	const slides = [Rajisimas1, Arbolisimo1, LetrasR, Rajisimas1, Arbolisimo1];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	function startInterval() {
		interval = setInterval(nextSlide, 3000);
	}

	onMount(() => {
		startInterval();
	});
</script>

<section class="relative">
	<div class="block relative h-[40vw] md:h-[40vw] lg:h-[30vw] xl:h-[38vw]">
		<img
			class="absolute w-full h-full object-cover"
			src={slides[currentSlide]}
			alt={`Slide ${currentSlide + 1}`}
		/>
		<button
			class="
			absolute
			left-0
			top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded z-10"
			on:click={prevSlide}
		>
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white md:w-10 md:h-10 lg:w-16 lg:h-16"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 8 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.4"
					d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
				/>
			</svg>
		</button>
		<button
			class="
			absolute
			right-0
			top-1/2 transform -translate-y-1/2 px-2 py-1 text-white rounded z-10"
			on:click={nextSlide}
		>
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white md:w-10 md:h-10 lg:w-16 lg:h-16"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 8 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.4"
					d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
				/>
			</svg>
		</button>
	</div>
</section>
