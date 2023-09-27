<script>
    import ShowSlider from "../component/showSlider.svelte";
    import Productos from "../component/Productos.svelte";
    import Contact from "../component/Contact.svelte";

    import { Carousel } from 'flowbite-svelte';

    import imgShowSlider1 from '../img/Rajisimas1.webp';
	import imgShowSlider2 from '../img/Arbolisimo1.webp';

    const images = [
        {
            alt: 'Cosmic timetraveler',
            src: imgShowSlider1,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        },
        {
            alt: 'Cosmic timetraveler 2',
            src: imgShowSlider2,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        }
    ];
</script>

<Carousel {images} duration={3000} let:Indicators let:Controls class="rounded-none max-h-[15vh] md:max-h-full animate-fade animate-once animate-duration-1000 animate-delay-[50ms] animate-ease-in">
    <Controls/>
  <!-- <a slot="slide" href="http://google.com/search?q={images[index].title}" target="_blank" let:Slide let:index>
    <Slide image={images[index]} />
  </a> -->
    <Indicators />
</Carousel>
<!-- <ShowSlider></ShowSlider> -->
<Productos></Productos>
<Contact></Contact>
