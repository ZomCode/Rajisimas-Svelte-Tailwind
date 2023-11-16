<script>
    import {_} from 'svelte-i18n';
</script>
<section class="
    w-screen h-screen
    dark:bg-[#0F0F0F]
    text-black dark:text-white
    flex flex-col justify-center items-center
    bg-repeat bg-center
    "
    style="background-image: url(../img/LogoR.webp);"
>
    <h2 class="text-6xl">404</h2>
    <p class="text-2xl">
        {$_('error.PageNotFound')}
    </p>
    <a class="text-xl underline underline-offset-4 hover:underline-offset-1 after:content-['↗']" href="/">
        {$_('error.back')}
    </a>
</section>