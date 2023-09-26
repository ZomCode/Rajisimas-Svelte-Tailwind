<script>
    import ShowSlider from "../component/showSlider.svelte";
    import Productos from "../component/Productos.svelte";
    import Contact from "../component/Contact.svelte";

    import { Carousel } from 'flowbite-svelte';

    import Rajisimas1 from '../img/Rajisimas1.jpg';
	import Arbolisimo1 from '../img/Arbolisimo1.jpg';

    const images = [
        {
            alt: 'Cosmic timetraveler',
            src: Rajisimas1,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        },
        {
            alt: 'Cosmic timetraveler 2',
            src: Arbolisimo1,
            title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
        }
    ]
</script>

<Carousel {images} duration={3000} let:Indicators let:Controls class="rounded-none max-h-[15vh] md:max-h-full">
    <Controls/>
  <!-- <a slot="slide" href="http://google.com/search?q={images[index].title}" target="_blank" let:Slide let:index>
    <Slide image={images[index]} />
  </a> -->
    <Indicators />
</Carousel>
<!-- <ShowSlider></ShowSlider> -->
<Productos></Productos>
<Contact></Contact>
