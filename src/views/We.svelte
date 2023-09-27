<script>
	import { Img } from 'flowbite-svelte';
	import { _ } from 'svelte-i18n';

	import Rajisimas1 from '../img/Rajisimas1.webp';
	import { onMount } from 'svelte';

    let viewPort = window.innerWidth;
    onMount(() => {
        window.addEventListener('resize', () => {
            viewPort = window.innerWidth;
            console.log(viewPort);
        });
    });
    
</script>

<section class="dark:bg-gray-800 bg-gray-200 flex flex-col">
	<article
		class="
            flex flex-col justify-center items-center
            bg-[url('src/img/bgRajisimas.webp')]
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

	<article class="grid grid-cols-1 gap-4 p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 group">
            <Img
                src={Rajisimas1}
                class="
                    order-1
                    col-span-1
                    lg:col-span-2
                    border rounded-lg shadow-md
                    dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                    border-black shadow-gray-400 group-hover:black
                    transition-all duration-1000 ease-in-out
                    cursor-pointer 
                    filter grayscale group-hover:grayscale-0
                "
                caption="Co-Leader"
            />
            <div
                class="
                    order-last
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black font-semibold
                "
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat mollitia
                dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis eaque rerum
                harum ratione amet nihil.
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 group">
            <Img
                src={Rajisimas1}
                class="
                    order-1
                    md:order-2
                    col-span-1
                    lg:col-span-2
                    border rounded-lg shadow-md
                    dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                    border-black shadow-gray-400 group-hover:black
                    transition-all duration-1000 ease-in-out
                    cursor-pointer 
                    filter grayscale group-hover:grayscale-0
                "
            />
            <div
                class="
                    order-2
                    md:order-1
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black font-semibold
                "
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat mollitia
                dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis eaque rerum
                harum ratione amet nihil.
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 group">
            <Img
                src={Rajisimas1}
                class="
                    order-1
                    col-span-1
                    lg:col-span-2
                    border rounded-lg shadow-md
                    dark:border-white dark:shadow-gray-700 dark:group-hover:shadow-white
                    border-black shadow-gray-400 group-hover:black
                    transition-all duration-1000 ease-in-out
                    cursor-pointer 
                    filter grayscale group-hover:grayscale-0
                "
            />
            <div
                class="
                    order-2
                    col-span-1
                    md:flex md:items-center
                    dark:text-white text-black font-semibold
                "
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat mollitia
                dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis eaque rerum
                harum ratione amet nihil.
            </div>
        </div>
        
	</article>
</section>
