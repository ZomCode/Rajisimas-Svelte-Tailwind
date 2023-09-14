import { dictionary, locale, _ } from "svelte-i18n";
import { derived } from 'svelte/store';

function setupI18n({
    withLocale: _locale
} = {
        withLocale: 'es'
    }) {
    dictionary.set({
        en: {
            "header": {
                "home": "Home",
                "whereshop": "Where Shop?",
                "about": "About"
            }
        },
        es: {
            "header": {
                "home": "Inicio",
                "whereshop": "¿Donde comprar?",
                "about": "Nosotros"
            }
        }
    });
    locale.set(_locale);
}

const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

export { _, setupI18n, isLocaleLoaded};