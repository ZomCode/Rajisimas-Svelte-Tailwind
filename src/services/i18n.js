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
                "branch" : "Location",
                "branches" : "Locations",
                "ask" : "What you can find here?",
                "waiting" : "Waiting for an option",
                "branchName" : "Location Name",
                "buy" : "Buy",
                "selectBranch" : "Select a location"
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
            "privacyPolicies" : {
                "MainParagraph" : "Thank you for visiting www.rajisimas.com. Your privacy is important to us, and we are committed to protecting your personal data. <br> This Privacy Policy describes how we collect, use, and share the information we collect from users of our website.",
                "TitleH3" : "Information We Collect",

                "firstH4" : "Personal Information",
                "firstP" : "We may collect personal information that you voluntarily provide, such as your name, email address, phone number, and other similar information when you interact with our website, such as by subscribing to our newsletter, registering on our site, or filling out online forms.",
                
                "secondH4" : "Registration Information",
                "secondP" : "When you visit our website, our servers may automatically collect certain log information, such as your IP address, browser type, Internet service provider, pages you visit, and the date and time of your visit. This information is used to improve the functionality and performance of our website.",
                
                "thirdH4" : "How We Use Your Information",
                "thirdP" : "We use the information we collect for the following purposes:",
                "thirdList" : {
                    "firstLi" : "Provide and improve our services: We use your personal information to provide you with access to our website and improve its functionality and content.",
                    "secondLi" : "Communication: We may use your email address to send you information about our products, promotions, and updates.",
                    "thirdLi" : "Analytics: We use log information and cookie data to analyze trends, administer the website, and gather demographic information about our users."
                },

                "fourthH4" : "How We Share Your Information",
                "fourthP" : "We will not share your personal information with third parties without your consent, unless we are legally required to do so.",
                
                "fifthH4" : "Your Privacy Rights",
                "fifthP" : "You have certain rights in relation to your personal data, including the right to access, correct, delete, or limit the use of your personal information. If you wish to exercise any of these rights, please contact us using the contact information provided below.",
                
                "sixthH4" : "Changes to this Privacy Policy",
                "sixthP" : "We may update this Privacy Policy from time to time to reflect changes in our data collection and use practices. We encourage you to review this policy regularly to stay informed about how we protect your information.",
                
                "seventhH4" : "Questions and Comments",
                "seventhP" : "If you have questions or comments about this Privacy Policy, please contact us using the following information: <a href='mailto:rajisimasconsabor@gmail.com' class='text-green-600 font-bold border-b hover:border-b-2 border-green-700'> rajisimasconsabor@gmail.com </a> <br> 221 515 6962 <br> Thank you for trusting www.rajisimas.com. We value and respect your privacy."
            },
            "termsOfUse" : {
                "firstH3" : "Use of the Site",
                "firstLo" : {
                    "firstLi" : "By accessing the Site, you agree that you will use the content and information provided only for lawful purposes and in accordance with these Terms of Use.",
                    "secondLi" : "You may not use the Site in a manner that could damage, disable, overburden, or impair the operation of the Site or interfere with other users' use and enjoyment.",
                },

                "secondH3" : "Content and Intellectual Property",
                "secondLo" : {
                    "firstLi" : "All content, text, graphics, logos, images, videos, and other materials available on the Site are protected by copyright or other intellectual property laws. All rights reserved.",
                    "secondLi" : "You are not permitted to copy, modify, distribute, transmit, display, sell, or otherwise use the content of the Site without the prior written consent of the owners of the Site.",
                },
                "thirdH3" : "Third Party Links",
                "thirdP" : "The Site may contain links to third-party websites. These links are provided solely as a convenience to you. We have no control over the content of these third-party websites and are not responsible for their content or any damage or loss you may suffer from using them. Access to these third-party websites is at your own risk.",

                "forthH3" : "Modifications and Termination",
                "forthP" : "We reserve the right to modify or discontinue the Site or any portion of it at any time, with or without notice. We may also change these Terms of Use at any time. It is your responsibility to periodically review these terms to be aware of modifications.",

                "fifthH3" : "Limitation of Liability",
                "fifthP" : "To the fullest extent permitted by applicable law, the Site and its owners shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Site.",

                "sixthH3" : "Jurisdiction and Applicable Law",
                "sixthP" : "These Terms of Use are governed by the laws of Mexico, and any dispute relating to these terms shall be submitted to the exclusive jurisdiction of the courts of Puebla, Pue.",
                
                "seventhH3" : "Contact",
                "seventhP" : "If you have any questions or comments about these Terms of Use, please contact us via",
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
                    "terms of use" : "Términos de uso"
                },
                "titleContact" : "Contactanos",
                "contactInfo" : {
                    "location" : "Ubicación",
                    "phone" : "Télefono",
                    "email" : "Correo electrónico"
                },
                "rights" : "Todos los derechos reservados"
            },
            "home" : {
                "title" : "Explora nuestros productos",
                "rajisimasDescription" : "Rajas de jalapeño, zanahoria, cebolla, especias. Únicas con vinagre de manzana. Receta de nuestra abuela, sin conservadores artificiales.",
                "machisimaDescription" : "Salsa macha, mezcla de 4 chiles, pepita, cacahuate y ajonjolí. La salsa que va con todo. Sin conservadores artificiales.",
                "arbolisimoDescription" : "Chile de árbol frito, con especias. Perfecto para acompañar tus caldos. Sin conservadores artificiales.",
                "machísimaarandano" : "Sabor: <br> Arándano"
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
                "buy" : "Comprar",
                "selectBranch" : "Selecciona alguna sucursal"
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
            },
            "privacyPolicies" : {
                "MainParagraph" : "Gracias por visitar www.rajisimas.com. Tu privacidad es importante para nosotros, y nos comprometemos a proteger tus datos personales. <br> Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos la información que recopilamos de los usuarios de nuestro sitio web.",
                "TitleH3" : "Información que recopilamos",

                "firstH4" : "Información Personal",
                "firstP" : "Podemos recopilar información personal que tú proporcionas de manera voluntaria, como tu nombre, dirección de correo electrónico, número de teléfono y otra información similar cuando interactúas con nuestro sitio web, como al suscribirte a nuestro boletín, registrarte en nuestro sitio o completar formularios en línea.",
                
                "secondH4" : "Información de Registro",
                "secondP" : "Cuando visitas nuestro sitio web, nuestros servidores pueden recopilar automáticamente cierta información de registro, como tu dirección IP, tipo de navegador, proveedor de servicios de Internet, páginas que visitas y la fecha y hora de tu visita. Esta información se utiliza para mejorar la funcionalidad y el rendimiento de nuestro sitio web.",
                
                "thirdH4" : "Cómo Utilizamos tu Información",
                "thirdP" : "Utilizamos la información que recopilamos para los siguientes fines:",
                "thirdList" : {
                    "firstLi" : "Proporcionar y mejorar nuestros servicios: Utilizamos tu información personal para proporcionarte acceso a nuestro sitio web y mejorar su funcionalidad y contenido.",
                    "secondLi" : "Comunicación: Podemos utilizar tu dirección de correo electrónico para enviarte información sobre nuestros productos, promociones y actualizaciones.",
                    "thirdLi" : "Análisis: Utilizamos información de registro y datos de cookies para analizar tendencias, administrar el sitio web y recopilar información demográfica sobre nuestros usuarios."
                },

                "fourthH4" : "Cómo Compartimos tu Información",
                "fourthP" : "No compartiremos tu información personal con terceros sin tu consentimiento, a menos que estemos legalmente obligados a hacerlo.",
                
                "fifthH4" : "Tus Derechos de Privacidad",
                "fifthP" : "Tienes ciertos derechos en relación con tus datos personales, incluido el derecho a acceder, corregir, eliminar o limitar el uso de tu información personal. Si deseas ejercer alguno de estos derechos, contáctanos a través de la información de contacto proporcionada a continuación.",
                
                "sixthH4" : "Cambios en esta Política de Privacidad",
                "sixthP" : "Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas de recopilación y uso de datos. Te recomendamos que revises esta política regularmente para estar informado sobre cómo protegemos tu información.",
                
                "seventhH4" : "Preguntas y Comentarios",
                "seventhP" : "Si tienes preguntas o comentarios sobre esta Política de Privacidad, contáctanos a través de la siguiente información: <a href='mailto:rajisimasconsabor@gmail.com' class='text-green-600 font-bold border-b hover:border-b-2 border-green-700'> rajisimasconsabor@gmail.com </a> <br> 221 515 6962 <br> Gracias por confiar en www.rajisimas.com. Valoramos y respetamos tu privacidad."
            },
            "termsOfUse" : {
                "firstH3" : "Uso del Sitio",
                "firstLo" : {
                    "firstLi" : "Al acceder al Sitio, aceptas que utilizarás el contenido y la información proporcionada solo con fines legales y de acuerdo con estos Términos de Uso.",
                    "secondLi" : "No está permitido utilizar el Sitio de manera que pueda dañar, deshabilitar, sobrecargar o perjudicar el funcionamiento del Sitio o interferir con el uso y disfrute de otros usuarios.",
                },

                "secondH3" : "Contenido y Propiedad Intelectual",
                "secondLo" : {
                    "firstLi" : "Todo el contenido, textos, gráficos, logotipos, imágenes, videos y otros materiales disponibles en el Sitio están protegidos por derechos de autor u otras leyes de propiedad intelectual. Todos los derechos están reservados.",
                    "secondLi" : "No tienes permiso para copiar, modificar, distribuir, transmitir, mostrar, vender o usar de cualquier manera el contenido del Sitio sin el consentimiento previo por escrito de los propietarios del Sitio.",
                },
                "thirdH3" : "Enlaces a terceros",
                "thirdP" : "El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces son proporcionados únicamente para tu conveniencia. No tenemos control sobre el contenido de estos sitios web de terceros y no somos responsables de su contenido o de cualquier daño o pérdida que puedas sufrir al utilizarlos. El acceso a estos sitios web de terceros es bajo tu propio riesgo.",

                "forthH3" : "Modificaciones y Terminación",
                "forthP" : "Nos reservamos el derecho de modificar o suspender el Sitio o cualquier parte de él en cualquier momento, con o sin previo aviso. También podemos cambiar estos Términos de Uso en cualquier momento. Es tu responsabilidad revisar periódicamente estos términos para estar al tanto de las modificaciones.",

                "fifthH3" : "Limitación de Responsabilidad",
                "fifthP" : "En la medida en que lo permita la ley aplicable, el Sitio y sus propietarios no serán responsables por ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso del Sitio.",

                "sixthH3" : "Jurisdicción y Ley Aplicable",
                "sixthP" : "Estos Términos de Uso se rigen por las leyes del México, y cualquier disputa relacionada con estos términos se someterá a la jurisdicción exclusiva de los tribunales de Puebla, Pue.",
                
                "seventhH3" : "Contacto",
                "seventhP" : "Si tienes alguna pregunta o comentario sobre estos Términos de Uso, por favor contáctanos a través de",
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
