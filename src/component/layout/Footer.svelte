<script>
	import LetrasR from '../../img/Letras.png';

	import { _ } from '../../services/i18n'
</script>

<footer class="bg-gradient-to-t from-lime-900 to-lime-500">
	<div class="grid grid-cols-1 lg:grid-cols-3 mx-3">
		<div class="col-span-1 flex flex-col items-center justify-center">
			<div class="w-[50%]">
				<img src={LetrasR} alt="" />
			</div>
			<div class="flex items-center text-white py-3 dark:text-black">
				<svg
					class="w-6 h-6 text-gray-800 dark:text-white fill-black"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 8 19"
				>
					<path
						fill-rule="evenodd"
						d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
						clip-rule="evenodd"
					/>
				</svg>
				Facebook
			</div>
			<div class="flex items-center text-white py-3 dark:text-black">
				<svg
					class="w-6 h-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
					/>
				</svg>
				Rajisimas
			</div>
		</div>
		<div class="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8 p-3 md:items-center">
			<div class="col-span-1 h-full flex flex-col justify-around">
				<p class="font-bold text-2xl">{$_('footer.titlesections')}</p>
				<ul class="list-inside md:list-disc">
					<li>{$_('footer.sections.home')}</li>
					<li>{$_('footer.sections.whereshop')}</li>
					<li>{$_('footer.sections.about')}</li>
				</ul>
			</div>
			<div class="col-span-1 h-full flex flex-col justify-around">
				<p class="font-bold text-2xl">{$_('footer.titlesupport')}</p>
				<ul class="md:list-disc">
					<li>{$_('footer.support.privacy policies')}</li>
					<li>{$_('footer.support.terms of use')}</li>
				</ul>
			</div>
			<div class="col-span-2 md:col-span-1 h-full flex flex-col justify-around">
				<p class="font-bold text-2xl">{$_('footer.title contact')}</p>
				<p>
					{$_('footer.contactInfo.location')}: <br>
					{$_('footer.contactInfo.phone')}: <br>
					{$_('footer.contactInfo.email')}:
					<a href="mailto:contacto@rajismas.com.mx">contacto@rajisimas.com</a>
				</p>
			</div>
		</div>
	</div>
	<div class="text-center border-t border-green-800 py-2 text-base">
		© 2022-2023 Rajísimas. All Rights Reserved.
	</div>
</footer>
