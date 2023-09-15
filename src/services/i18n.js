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
<<<<<<< HEAD
            },
            "footer": {
                "title sections" : "Sections",
                "sections" : {
                    "home": "Home",
                    "whereshop": "Where Shop?",
                    "about": "About"
                },
                "title support" : "Support",
                "support" : {
                    "privacy policies" : "Privacy policies",
                    "terms of use" : "Terms of use"
                },
                "title contact" : "Contact us",
                "contactInfo" : {
                    "location" : "Location",
                    "phone" : "Phone",
                    "email" : "E-mail"
                }
            },
            "sectionsProducts" : "Explore our products",
            "sectionContactUs" : "Contact us"

=======
            }
>>>>>>> 89779193b19175cfbac3629b77801e2603441d80
        },
        es: {
            "header": {
                "home": "Inicio",
<<<<<<< HEAD
                "whereshop": "¿Dónde comprar?",
                "about": "Nosotros"
            },
            "footer": {
                "title sections" : "Secciones",
                "sections" : {
                    "home": "Inicio",
                    "whereshop": "¿Dónde comprar?",
                    "about": "Nosotros"
                },
                "title support" : "Soporte",
                "support" : {
                    "privacy policies" : "Pólitas de privacidad",
                    "terms of use" : "Terminos de uso"
                },
                "title contact" : "Contactanos",
                "contactInfo" : {
                    "location" : "Ubicación",
                    "phone" : "Telefono",
                    "email" : "Correo Electronico"
                }
            },
            "sectionsProducts" : "Cónoce nuestros productos",
            "sectionContactUs" : "Contacta con nosotros"
=======
                "whereshop": "¿Donde comprar?",
                "about": "Nosotros"
            }
>>>>>>> 89779193b19175cfbac3629b77801e2603441d80
        }
    });
    locale.set(_locale);
}

const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

<<<<<<< HEAD
export { _ , setupI18n, isLocaleLoaded};
=======
export { _, setupI18n, isLocaleLoaded};
>>>>>>> 89779193b19175cfbac3629b77801e2603441d80
