<script>
    import { _ } from 'svelte-i18n';
</script>

<main class="dark:bg-dark-100">	
	<section
		class="
		container
		mx-auto
		sm:px-6
		lg:px-8
		min-h-screen
	"
	>
		<h2 class="uppercase w-full h-[30vh] bg-green-600 grid place-items-center text-center text-4xl font-bold dark:text-white" >
			{$_('footer.support.terms of use')}
		</h2>	
		<article class="font-semibold [&>h3]:pt-6 [&>h3]:pb-3 [&>h3]:text-yellow-900 dark:[&>h3]:text-yellow-400 [&>h3]:font-bold py-4 px-4 dark:text-white">
			<h3>
				1. {$_('termsOfUse.firstH3')}
			</h3>
			<ol type="a" class="list-alpha list-inside">
				<li>
					{$_('termsOfUse.firstLo.firstLi')}
				</li>
				<li>
					{$_('termsOfUse.firstLo.secondLi')}
				</li>
			</ol>
			<h3>
				2. {$_('termsOfUse.secondH3')}
			</h3>
			<ol class="list-alpha list-inside">
				<li>
					{$_('termsOfUse.secondLo.firstLi')}
				</li>
				<li>
					{$_('termsOfUse.secondLo.secondLi')}
				</li>
			</ol>
			<h3>
				3. {$_('termsOfUse.thirdH3')}
			</h3>
			<p>
				{$_('termsOfUse.thirdP')}
			</p>
			<h3>
				4. {$_('termsOfUse.forthH3')}
			</h3>
			<p>
				{$_('termsOfUse.forthP')}
			</p>
			<h3>
				5. {$_('termsOfUse.fifthH3')}
			</h3>
			<p>
				{$_('termsOfUse.fifthP')}
			</p>
			<h3>
				6. {$_('termsOfUse.sixthH3')}
			</h3>
			<p>
				{$_('termsOfUse.sixthP')}
			</p>
			<h3>
				7. {$_('termsOfUse.seventhH3')}
			</h3>
			<p>
				{$_('termsOfUse.seventhP')}
				<a href="mailto:rajisimasconsabor@gmail.com" class="text-green-600 font-bold border-b hover:border-b-2 border-green-700">rajisimasconsabor@gmail.com</a>
			</p>
		</article>
	</section>
</main>
