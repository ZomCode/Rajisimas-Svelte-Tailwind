<script>
	import { _ } from 'svelte-i18n';

	import Team1 from '../../img/LogoR.webp';
    import Team2 from '../../img/LOGO_MACHISIMA.webp';
    import Team4 from '../../img/LOGO_ARBOLISIMO.webp';
</script>
<svelte:head>
	<title>Rajísimas | {$_('header.about')}</title>
</svelte:head>
<section class="dark:bg-[#0F0F0F] bg-gray-200 flex flex-col">
	<article
		class="
            flex flex-col justify-center items-center
            bg-bgImgLight2
			dark:bg-bgImgDark2
            bg-no-repeat bg-cover bg-center
            brightness-100
            min-h-[95vh]
            w-[100%]
			h-[100vh]
        "
	>
		<div
			class="
                flex flex-col justify-center items-center
            	h-full w-full
                backdrop-brightness-50 backdrop-blur-sm bg-black/10
                gap-4
                p-4
            "
		>
			<h2
				class="
                    text-3xl lg:text-7xl text-yellow-300 font-semibold
                "
			>
				Rajísimas
			</h2>
			<p
				class="
                    m-0 w-full md:w-[70vw]
                    text-base lg:text-3xl font-semibold
                    text-white
                    text-justify
					[&>strong]:text-yellow-300
					[&>em]:text-rose-400
					gap-y-8
                "
			>
				{@html $_('we.about.Line1')}
				<br>
				{@html $_('we.about.Line2')}
				<br>
				{@html $_('we.about.Line3')}
				<br>
				{@html $_('we.about.Line4')}
			</p>
		</div>
	</article>

	<article 
		class="
			grid grid-cols-1 gap-4 py-10 px-12 md:px-24 bg-no-repeat bg-cover bg-center bg-fixed bg-bgImgLight2 dark:bg-bgImgDark2
			[&>div>figure>img]:max-h-80 dark:text-white text-black
		"
	>
		<div 
			class="
				grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group
			"
		>
			<figure
				class="
					order-1
					relative 
					rounded-lg
				"
			>
				<img loading="lazy" class="h-auto rounded-lg" src="{Team1}" alt="sample 1" />
			</figure>
			<div class="
				order-last
				col-span-1
				md:flex flex-col md:justify-center
				font-semibold select-none
				text-left
				"
			>
				<h3 class="text-4xl text-center">
					{$_('we.mission.tittleMission')}
				</h3>
				<p class="text-2xl">
					{$_('we.mission.text')}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group ">
			<figure
				class="
					order-1
					md:order-2
					relative 
					rounded-lg
					
				"
			>
				<img loading="lazy" class="h-auto rounded-lg" src="{Team2}" alt="sample 1" />
			</figure>
			<div class="
				order-2
				md:order-1
				col-span-1
				md:flex flex-col md:justify-center
				font-semibold select-none
				text-right
				"
			>
				<h3 class="text-4xl text-center">
					{$_('we.vission.tittleVission')}
				</h3>
				<p class="text-2xl text-justify">
					{$_('we.vission.text')}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 group">
			<figure
				class="
                order-1
                relative
				rounded-lg"
			>
				<img loading="lazy" class="h-auto rounded-lg" src="{Team4}" alt="sample 1" />
			</figure>
			<div
				class="
					order-2
                    col-span-1
                    md:flex flex-col md:justify-center
                    font-semibold select-none
					text-left
				"
			>
				<h3 class="text-4xl text-center">
					{$_('we.values.tittleValues')}
				</h3>
				<p class="text-2xl text-center">
					{$_('we.values.text')}
				</p>
			</div>
		</div>
	</article>
</section>
