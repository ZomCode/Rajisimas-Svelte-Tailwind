<script>
	import { Img } from 'flowbite-svelte';
	import { _ } from 'svelte-i18n';

	import Team1 from '../img/Team1.webp';
    import Team2 from '../img/Team2.webp';
    import Team3 from '../img/Team3.webp';
    import Team4 from '../img/Team4.webp';
</script>

<section class="dark:bg-gray-800 bg-gray-200 flex flex-col">
	<article
		class="
            flex flex-col justify-center items-center
            bg-[url('src/img/bgRajisimas.webp')]
            bg-no-repeat bg-cover bg-center
            brightness-100
            min-h-[95vh]
            h-[100vh]
            w-[100%]
        "
	>
		<div
			class="
                flex flex-col justify-center items-center
                h-full w-full
                backdrop-brightness-50 backdrop-blur-sm bg-black/30
                gap-4
                p-4
            "
		>
			<h4
				class="
                    text-3xl md:text-7xl text-slate-500 font-semibold
                "
			>
				¿Rajísimas?
			</h4>
			<p
				class="
                    m-0 w-full md:w-[40vw]
                    text-base md:text-3xl font-semibold
                    text-white
                    text-center
                "
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati esse nulla aliquam
				dolorum, atque dicta cumque amet impedit, eligendi incidunt debitis quibusdam quos eos vero.
				Distinctio voluptatibus molestias officiis!
			</p>
		</div>
	</article>

	<article class="grid grid-cols-1 gap-4 p-10 [&>div>figure>img]:max-h-80 px-12 md:px-24">
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group">
			<figure
				class="
                order-1
                
                relative border rounded-lg shadow-md
                dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                border-black shadow-gray-400 group-hover:black
                transition-all duration-1000 ease-in-out
                filter grayscale group-hover:grayscale-0"
			>
				<img class="h-auto rounded-lg" src="{Team1}" alt="sample 1" />
				<figcaption class="absolute bottom-6 px-4 text-lg dark:text-white text-white">
                    Co-Founder
                </figcaption>
			</figure>
			<div
				class="
                    order-last
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black
                    text-center font-semibold select-none
                "
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat
				mollitia dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis
				eaque rerum harum ratione amet nihil.
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group">
			<figure
				class="
                order-1
                md:order-2
                relative border rounded-lg shadow-md
                dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                border-black shadow-gray-400 group-hover:black
                transition-all duration-1000 ease-in-out
                filter grayscale group-hover:grayscale-0"
			>
				<img class="h-auto rounded-lg" src="{Team2}" alt="sample 1" />
				<figcaption class="absolute bottom-6 px-4 text-lg dark:text-white text-white">
                    Co-Founder
                </figcaption>
			</figure>

			<div
				class="
                    order-2
                    md:order-1
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black font-semibold select-none
                "
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat
				mollitia dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis
				eaque rerum harum ratione amet nihil.
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group">
			<figure
				class="
                order-1
                relative border rounded-lg shadow-md
                dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                border-black shadow-gray-400 group-hover:black
                transition-all duration-1000 ease-in-out
                filter grayscale group-hover:grayscale-0"
			>
				<img class="h-auto rounded-lg" src="{Team4}" alt="sample 1" />
				<figcaption class="absolute bottom-6 px-4 text-lg dark:text-white text-white">
                    Co-Founder
                </figcaption>
			</figure>
			<div
				class="
                    order-2
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black font-semibold select-none
                "
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat
				mollitia dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis
				eaque rerum harum ratione amet nihil.
			</div>
		</div>
	</article>
</section>
