<script>
	import { Carousel } from 'flowbite-svelte';
    import Rajisimas1 from '../img/RAJISIMAS 460gr.png';
	import Rajisimas2 from '../img/OFICIAL 235gr.png';
	const images = [
        {
            alt: 'Cosmic timetraveler',
            src: Rajisimas1,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        },
        {
            alt: 'Cosmic timetraveler 2',
            src: Rajisimas2,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        }
    ]

	let index = 0;
	let image;
</script>

<section class="bg-gray-800 flex flex-col">
	<article
		class="
            flex flex-col justify-center items-center
            bg-[url('src/img/bgRajisimas.jpg')]
            bg-no-repeat bg-cover bg-center
            brightness-100
            h-[95vh]
            w-[100%]
        "
	>
		<div
			class="
                flex flex-col justify-center items-center
                h-full w-full
                backdrop-brightness-50 backdrop-blur-sm bg-black/30
            "
		>
			<h4
				class="
            text-4xl text-slate-500 font-semibold"
			>
				¿Rajísimas?
			</h4>
			<p
				class="
            m-0 w-[40vw] text-center text-white"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati esse nulla aliquam
				dolorum, atque dicta cumque amet impedit, eligendi incidunt debitis quibusdam quos eos vero.
				Distinctio voluptatibus molestias officiis!
			</p>
		</div>
	</article>

	<article class="h-[100vh] w-full">
        <Carousel {images} let:Indicators let:Controls on:change={({ detail }) => (image = detail)}>
            <Controls />
            <Indicators />
        </Carousel>

        <div class="rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
            {image?.alt}
        </div>
        <div class="grid place-items-center">
            HOLA
        </div>
	</article>
</section>
