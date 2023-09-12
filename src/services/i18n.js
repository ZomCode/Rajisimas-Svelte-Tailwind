import { dictionary, locale, _ } from "svelte-i18n";


dictionary.set({
    en:{
        "header": {
            "home": "Home",
            "whereshop": "Where Shop?",
            "about": "About"
        }
    },
    es:{
        "header": {
            "home": "Inicio",
            "whereshop": "¿Donde comprar?",
            "about": "Nosotros"
        }
    }
});
locale.set('en');

export {_};