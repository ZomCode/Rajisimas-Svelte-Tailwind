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
            "home" : {
                "title" : "Explore our products",
                "rajisimasDescription" : "Slices of jalapeño, carrot, onion, spices. Uniquely with apple cider vinegar. Our grandmother's recipe, no artificial preservatives.",
                "machisimaDescription" : "Macha sauce, a blend of 4 chilies, pumpkin seeds, peanuts, and sesame seeds. The sauce that goes with everything. No artificial preservatives.",
                "arbolisimoDescription" : "Fried árbol chili, with spices. Perfect to accompany your broths. No artificial preservatives.",
                "machísimaarandano" : "Taste: <br> Blueberry",
            },
            "ContactUs" : {
                "titleContactUs" : "Contact us",
                "email" : "Email",
                "phone" : "Phone",
                "subject" : "Subjet",
                "company" : "Company",
                "message" : "Message"
            },
            "stores" : {
                'titleSection' : "We have a great Chain of Self-Service Stores",
                "titlePhysicalStores" : "Physical stores",
                "titleOnlineStores" : "Online stores",
                "branch" : "Branch",
                "branches" : "Branches",
                "ask" : "What you can find here?",
                "waiting" : "Waiting for an option",
                "branchName" : "Branch Name",
                "buy" : "Buy"
            },
            "we" : {
                "about" : {
                    "Line1" : "<strong>R</strong>ajisimas was founded in 2018 by two young entrepreneurs with the intention of creating a legacy of flavor and tradition around the world."
                    ,
                    "Line2" : "<strong>O</strong>ne of the key factors in this venture has been listening to customers, who have been a driving force for continuous improvement. As a result, the brand was professionalized and they approached various government agencies and associations that have supported every step of Rajisimas."
                    ,
                    "Line3" : "<strong>C</strong>urrently, more products have been developed, such as the <em>'Machísima'</em> macha sauce and the <em>'Arbolísimo'</em> fried chili tree. These products have been innovative and diversified in their flavors to appeal to every palate."
                    ,
                    "Line4" : "<strong>O</strong>ver the years, the Rajisimas family has grown and expanded, currently counting with 3 active partners forming a strong and consolidated team convinced that, <span class='text-yellow-300'>'Alone we can go faster, but together we can go further.'</span>"
                },
                "mission" : {
                    "tittleMission" : "Mision",
                    "text" : "Create healthy food products with great taste and tradition, making people's lives easier, integrating sustainable practices for our planet, based on a social economy model."
                },
                "vission" : {
                    "tittleVission" : "Vision",
                    "text" : "To export our products starting in 2024, reaching more Latinos around the world, and conquering the nostalgia market."
                },
                "values" : {
                    "tittleValues" : "Values",
                    "text" : "JOY • HONESTY • RESPECT • JUSTICE • SOLIDARITY • EXCELLENCE • INNOVATION • TEAMWORK • SOCIAL RESPONSIBILITY"
                },
            },
            "error" : {
                "PageNotFound" : "Page Not Found",
                "back" : "Back to Top"
            },
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
                    "terms of use" : "Términos de uso"
                },
                "titleContact" : "Contactanos",
                "contactInfo" : {
                    "location" : "Ubicación",
                    "phone" : "Télefono",
                    "email" : "Correo electrónico "
                },
                "rights" : "Todos los derechos reservados"
            },
            "home" : {
                "title" : "Explora nuestros productos",
                "rajisimasDescription" : "Rajas de jalapeño, zanahoria, cebolla, especias. Únicas con vinagre de manzana. Receta de nuestra abuela, sin conservadores artificiales.",
                "machisimaDescription" : "Salsa macha, mezcla de 4 chiles, pepita, cacahuate y ajonjolí. La salsa que va con todo. Sin conservadores artificiales.",
                "arbolisimoDescription" : "Chile de árbol frito, con especias. Perfecto para acompañar tus caldos. Sin conservadores artificiales.",
                "machísimaarandano" : "Sabor: <br> Arandano"
            },
            "ContactUs" : {
                "titleContactUs" : "Contacta con nosotros",
                "email" : "Correo electrónico",
                "phone" : "Teléfono",
                "subject" : "Asunto",
                "company" : "Empresa",
                "message" : "Mensaje"
            },
            "stores" : {
                'titleSection' : "Contamos con una gran Cadena de Tiendas de Autoservicio",
                "titlePhysicalStores" : "Tiendas Físicas",
                "titleOnlineStores" : "Tiendas en Linea",
                "branch" : "Sucursal",
                "branches" : "Sucursales",
                "ask" : "¿Que puedes encontrar aquí?",
                "waiting" : "Esperando una opción",
                "branchName" : "Nombre Sucursal",
                "buy" : "Comprar"
            },
            "we" : {
                "about" : {
                    "Line1" : "<strong>R</strong>ajisimas nació en 2018 con dos jóvenes emprendedores, con la  intención de crear un legado de sabor y tradición alrededor del mundo."
                    ,
                    "Line2" : "<strong>U</strong>na de las principales claves dentro de este emprendimiento ha sido escuchar a los clientes, quienes han sido un impulso para la mejora continua; fue así que profesionalizaron la marca y se acercaron a diversas dependencias y asociaciones que han apoyado cada paso de Rajisimas."
                    ,
                    "Line3" : "<strong>A</strong>ctualmente se han desarrollado más productos como salsa macha <em>'Machísima'</em> y chile de árbol frito <em>'Arbolísimo'</em>, los cuales se han innovado y diversificado en los sabores para conquistar a cada paladar."
                    ,
                    "Line4" : "<strong>E</strong>n este transcurso de años la familia Rajisimas ha ido creciendo y expandiéndose, contando actualmente con 3 socios activos formando un equipo firme y consolidado convencidos que, <span class='text-yellow-300'>'Solos podemos llegar más rápido, pero juntos más lejos.'</span>"
                },
                "mission" : {
                    "tittleMission" : "Misión",
                    "text" : "Crear productos alimenticios saludables con gran sabor y tradición, facilitando la vida de las personas, integrando prácticas sostenibles para nuestro planeta, basándonos en un modelo de economía social."
                },
                "vission" : {
                    "tittleVission" : "Visión",
                    "text" : "Exportar nuestros productos a partir del 2024 llegando a más latinos alrededor del mundo, conquistando el mercado de la nostalgia"
                },
                "values" : {
                    "tittleValues" : "Valores",
                    "text" : "ALEGRÍA • HONESTIDAD • RESPETO • JUSTICIA • SOLIDARIDAD • EXCELENCIA • INNOVACIÓN • TRABAJO EN EQUIPO • RESPONSABILIDAD SOCIAL" 
                }
            },
            "error" : {
                "PageNotFound" : "Pagína no encontrada",
                "back" : "Regresar al inicio"
            }
        }
    });
    locale.set(_locale);
}
const isLocaleLoaded = derived(locale, $locale => {
    if (typeof $locale !== 'string') {
        return;
    }
    document.querySelector('html').setAttribute('lang', $locale);
});

export { _ , setupI18n, isLocaleLoaded};
