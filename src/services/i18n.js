import { dictionary, locale, _ } from "svelte-i18n";
import { onMount } from 'svelte';
import { derived } from 'svelte/store';

const MESSAGE_FILE_URL_TEMPLATE = '../lang/{locale}.json';

function setupI18n({ withLocale: _locale } = { withLocale: 'es' }) {
    // Esta función se ejecutará después de que el componente se haya montado en el navegador
    onMount(async () => {
        // Completar la URL del archivo de mensajes usando el idioma seleccionado
        const messageFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale);

        // Utilizar fetch para obtener el archivo de mensajes JSON de forma asíncrona
        try {
            const response = await fetch(messageFileUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const messages = await response.json();
            
            // Establecer el diccionario de mensajes y el idioma
            dictionary.set({ [_locale]: messages });
            locale.set(_locale);
        } catch (error) {
            console.error('Error loading language file:', error);
            // Manejar errores en la carga del archivo de mensajes
        }
    });
}
const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

export { _ , locale , setupI18n , isLocaleLoaded};