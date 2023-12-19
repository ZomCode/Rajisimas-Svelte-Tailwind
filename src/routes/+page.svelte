<script>
    import Productos from "../component/Productos.svelte";
    import Contact from "../component/Contact.svelte";
    import { _ } from 'svelte-i18n';

    import { Carousel } from 'flowbite-svelte';

    import imgShowSlider1 from '../img/Rajisimas1.webp';
	import imgShowSlider2 from '../img/Arbolisimo1.webp';
    import imgShowSlider3 from '../img/Image2.webp';


    const images = [
        {
            alt: 'Imagen de Rajísimas',
            src: imgShowSlider1,
            title: 'Rajísimas Tradición con sabor'
        },
        {
            alt: 'Imagen de Arbolísimo',
            src: imgShowSlider2,
            title: 'Rajísimas Tradición con sabor'
        },
        {
            alt: 'Imagen de Arbolísimo',
            src: imgShowSlider3,
            title: 'Rajísimas Tradición con sabor'
        }
    ];
</script>

<svelte:head>
	<title>Rajísimas | {$_('header.home')}</title>
</svelte:head>

<Carousel 
    {images} 
    duration={3000} 
    let:Indicators 
    let:Controls 
    class="rounded-none max-h-[15vh] md:max-h-full animate-fade animate-once animate-duration-1000 animate-delay-[50ms] animate-ease-in"
>
    <Controls/>
    <Indicators/>
</Carousel>
<section 
	class="
		dark:bg-dark-100
		bg-no-repeat bg-cover bg-center
		bg-fixed
		bg-bgImgLight
		dark:bg-bgImgDark
		flex flex-col items-center 
		gap-14 py-14 px-6
		[&>div]:animate-fade-up animate-once animate-duration-1000 animate-ease-in
		first:bg-red-900
		"
	>
		<h2 class="font-bold text-4xl sm:text-5xl p-6 uppercase text-center 
			text-black dark:text-white
			rounded-xl"
		>
			{$_('home.title')}
		</h2>

        <Productos/>
</section>
<Contact/>