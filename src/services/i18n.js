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
            },
            "footer": {
                "titleSections" : "Sections",
                "sections" : {
                    "home": "Home",
                    "whereshop": "Where Shop?",
                    "about": "About"
                },
                "titleSupport" : "Support",
                "support" : {
                    "privacy policies" : "Privacy policies",
                    "terms of use" : "Terms of use"
                },
                "titleContact" : "Contact us",
                "contactInfo" : {
                    "location" : "Location",
                    "phone" : "Phone",
                    "email" : "E-mail"
                },
                "rights" : "All rights reserved"
            },
            "sectionsProducts" : "Explore our products",
            "ContactUs" : {
                "titleContactUs" : "Contact us",
                "email" : "Email",
                "phone" : "Phone",
                "subject" : "Subjet",
                "company" : "Company",
                "message" : "Message"
            },
            "stores" : {
                "titlePhysicalStores" : "Physical stores",
                "titleOnlineStores" : "Online stores",
                "branch" : "Branch",
                "branches" : "Branches",
                "ask" : "What you can find here?",
                "waiting" : "Waiting for an option",
                "branchName" : "Branch Name",
                "buy" : "Buy"
            }
        },
        es: {
            "header": {
                "home": "Inicio",
                "whereshop": "¿Dónde comprar?",
                "about": "Nosotros"
            },
            "footer": {
                "titleSections" : "Secciones",
                "sections" : {
                    "home": "Inicio",
                    "whereshop": "¿Dónde comprar?",
                    "about": "Nosotros"
                },
                "titleSupport" : "Soporte",
                "support" : {
                    "privacy policies" : "Póliticas de privacidad",
                    "terms of use" : "Terminos de uso"
                },
                "titleContact" : "Contactanos",
                "contactInfo" : {
                    "location" : "Ubicación",
                    "phone" : "Telefono",
                    "email" : "Correo Electronico"
                },
                "rights" : "Todos los derechos reservados"
            },
            "sectionsProducts" : "Cónoce nuestros productos",
            "ContactUs" : {
                "titleContactUs" : "Contacta con nosotros",
                "email" : "Correo electrónico",
                "phone" : "Teléfono",
                "subject" : "Asunto",
                "company" : "Empresa",
                "message" : "Mensaje"
            },
            "stores" : {
                "titlePhysicalStores" : "Tiendas Físicas",
                "titleOnlineStores" : "Tiendas en Linea",
                "branch" : "Sucursal",
                "branches" : "Sucursales",
                "ask" : "¿Que puedes encontrar aquí?",
                "waiting" : "Esperando una opción",
                "branchName" : "Nombre Sucursal",
                "buy" : "Comprar"
            }

        }
    });
    locale.set(_locale);
}

const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

export { _ , setupI18n, isLocaleLoaded};
