<script>
    import { Img } from 'flowbite-svelte';

	import Rajisimas1 from '../img/Rajisimas1.jpg';
	import Rajisimas2 from '../img/OFICIAL 235gr.png';

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

	<article class="w-full text-white font-semibold p-20 grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        <Img src="{Rajisimas1}" size="max-w-lg" class="col-span-1 md:col-span-2 rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"/>
        <div class="col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus iure placeat
            mollitia dolor ea inventore voluptates maiores ipsa. Dolores in maiores quaerat perferendis
            eaque rerum harum ratione amet nihil.
        </div>

        <div class="col-span-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet repudiandae rem
            quisquam illum vero eaque laudantium mollitia! Sequi quia totam fuga! Nulla sequi
            dignissimos animi neque quae fuga rem.
        </div>

        <Img src="{Rajisimas1}" class="col-span-1 md:col-span-2 rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" />


        <img src="{Rajisimas1}" alt="" class="col-span-1 md:col-span-2 border-8 rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <!-- <img src="{Rajisimas1}" alt="" class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 col-span-2"> -->
        <!-- <Img src="{Rajisimas1}" size="max-w-lg" class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 col-span-2" /> -->
        <div class="col-span-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ea soluta! Illo aut
            sequi eveniet dignissimos doloribus voluptatibus exercitationem ipsa, quisquam facere
            veritatis laborum reiciendis et vel, nam adipisci beatae.
        </div>
	</article>

</section>
