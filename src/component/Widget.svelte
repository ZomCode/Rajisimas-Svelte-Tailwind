<script>
    import { setupI18n } from '../services/i18n';

    let darkMode;
	let darkModeReady = true;

    let lang;
	let langReady = 'es';

    //cargar el tema
	function changeLang() {
		lang === true ? (langReady = 'en') : (langReady = 'es');
		setupI18n({ withLocale: langReady });
	}

	//funcion para cambiar el tema
	const changeTheme = () => {
		darkMode === true ? (darkModeReady = false) : (darkModeReady = true);
		document.documentElement.classList.toggle('dark'); 
	};
</script>

<div class="fixed z-20 flex p-2 md:p-4 right-4 max-w-min bg-green-600 rounded-b-xl divide-x">
    <div class="flex items-center px-4">
        <label class="cursor-pointer">
            <input
                type="checkbox"
                class="hidden"
                bind:checked={darkMode}
                on:change={changeTheme}
            />
            <div class="w-10 h-6 bg-gray-300 dark:bg-[#0F0F0F] rounded-full p-1">
                <div
                    class="bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
                    style="transform: translateX({darkMode ? '100%' : '0'})"
                />
            </div>
        </label>
        <p />
        <span class="text-gray-600 dark:text-gray-300"> {darkMode ? '🌞' : '🌑'}</span>
    </div>
    <div class="flex items-center space-x-2 px-4">
        <label class="cursor-pointer">
            <input 
                type="checkbox" 
                class="hidden" 
                bind:checked={lang} 
                on:change={changeLang} />
            <div class="w-10 h-6 bg-gray-300 dark:bg-[#0F0F0F] rounded-full p-1">
                <div
                    class="bg-white dark:bg-gray-800 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300"
                    style="transform: translateX({lang ? '100%' : '0'})"
                />
            </div>
        </label>
        <p />
        <span class="text-slate-800 dark:text-gray-300 font-semibold"> {lang ? 'EN' : 'ES'}</span>
    </div>
</div>