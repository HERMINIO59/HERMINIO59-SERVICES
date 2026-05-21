const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const menuLinks = document.querySelectorAll(".site-menu a");
const languageButtons = document.querySelectorAll(".language-option");
const leadForm = document.querySelector("#lead-form");

const translations = {
  en: {
    pageTitle: "HERMINIO59 Services | Handyman & Renovation Support",
    metaDescription:
      "HERMINIO59 Services provides premium handyman, painting, repair, installation, maintenance, cabinet, trim finish, and small remodeling support in Naples, Florida.",
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    menuLabel: "Open navigation menu",
    languageLabel: "Language selector",
    navServices: "Services",
    navWork: "Work",
    navWhy: "Why Us",
    navAbout: "About",
    navContact: "Contact",
    navPhone: "Call/Text (786) 372-0107",
    navCta: "Request Estimate",
    heroEyebrow: "HERMINIO59 Services",
    heroTitle: "Premium handyman services in Naples.",
    heroText:
      "Painting, repairs, installations, maintenance, cabinetry, trim finish, and small remodeling support.",
    primaryCta: "Request Free Estimate",
    callPhone: "Call or Text (786) 372-0107",
    textPhone: "Send Text Message",
    trustOne: "Naples, Florida",
    trustTwo: "Free estimates",
    trustThree: "English and Spanish",
    photoNoteLabel: "Featured project work",
    photoNoteText: "Real finish work, installs, cabinetry, and decking.",
    brandOne: "Black / Gold Identity",
    brandTwo: "Naples Service Area",
    brandThree: "Free Estimates",
    brandFour: "Real Project Photos",
    featuredEyebrow: "Featured work",
    featuredTitle: "Higher-value projects lead the visual story.",
    featuredText:
      "The pool decking project is treated as premium build work, not pressure washing. Featured images are prioritized for trust, finish quality, and perceived value.",
    featuredCardLabel: "Featured build",
    featuredCardTitle: "Pool Decking Project",
    featuredCardText: "Premium exterior build work with strong visual impact.",
    featuredCardTwoLabel: "Interior finish",
    featuredCardTwoTitle: "Modern Finish Work",
    featuredCardTwoText: "Clean, high-contrast interior work for a premium impression.",
    servicesEyebrow: "Services",
    servicesTitle: "Focused services for Naples-area homes.",
    servicesText:
      "Clear handyman support organized around the approved services customers are most likely to request.",
    serviceOneTitle: "Handyman Services",
    serviceOneText: "General help for small and medium home projects.",
    serviceTwoTitle: "Painting",
    serviceTwoText: "Painting support for cleaner, fresher spaces.",
    serviceThreeTitle: "Home Repairs",
    serviceThreeText: "Repair-focused work for common home issues.",
    serviceFourTitle: "Installations",
    serviceFourText: "Installation support for household improvements.",
    serviceFiveTitle: "Maintenance",
    serviceFiveText: "Routine maintenance support to keep homes in better shape.",
    serviceSixTitle: "Small Remodeling Support",
    serviceSixText: "Focused support for smaller improvement projects.",
    serviceSevenTitle: "Trim Finish",
    serviceSevenText: "Clean finish details that help a project feel complete and professional.",
    serviceEightTitle: "Cabinet Installation",
    serviceEightText: "Cabinet installation support for clean, functional spaces.",
    galleryEyebrow: "Project gallery",
    galleryTitle: "Prioritized real work with stronger visual value.",
    galleryText:
      "Gallery order favors premium-looking work: deck build, interior finish, cabinetry, bathroom work, and clean installation details.",
    galleryOne: "Premium pool decking build",
    galleryTwo: "Premium interior finish",
    galleryThree: "Cabinetry detail",
    galleryFour: "Bathroom finish support",
    galleryFive: "Clean installation detail",
    whyEyebrow: "Why choose HERMINIO59",
    whyTitle: "Built around trust, clarity, and useful work.",
    whyOneTitle: "Clean and organized",
    whyOneText: "Presentation and workflow should feel professional from the first contact.",
    whyTwoTitle: "Focused services",
    whyTwoText: "The site stays focused on handyman and renovation work only.",
    whyThreeTitle: "Local service area",
    whyThreeText: "Serving Naples, Marco Island, Bonita Springs, Bonita Beach, and Ave Maria.",
    aboutEyebrow: "About",
    aboutTitle:
      "HERMINIO59 Services is the visible brand for International Handyman & Renovation LLC.",
    aboutText:
      "The website presents a serious local service business based in Naples, Florida, with real project photos, bilingual communication, and a premium black-and-gold HERMINIO59 identity.",
    contactEyebrow: "Contact",
    contactTitle: "Request a free estimate.",
    contactText:
      "Call or text HERMINIO59 Services for handyman, painting, repairs, installations, maintenance, cabinet installation, trim finish, and small remodeling support in Naples and nearby service areas.",
    contactCardTitle: "HERMINIO59 Services",
    contactPhoneLabel: "Call or Text",
    contactLocationLabel: "Location",
    contactLocation: "Naples, Florida",
    contactAreaLabel: "Service areas",
    contactArea: "Naples, Marco Island, Bonita Springs, Bonita Beach, Ave Maria",
    contactEstimateLabel: "Estimates",
    contactEstimate: "Free estimates available",
    contactEmailLabel: "Email",
    contactEmail: "herminio59services@gmail.com",
    contactHoursLabel: "Hours",
    contactHours: "Pending before launch",
    leadFormEyebrow: "Lead intake",
    leadFormTitle: "Tell us what you need.",
    leadFormText:
      "This opens your email with the request already organized for HERMINIO59 Services.",
    fieldName: "Name",
    fieldNamePlaceholder: "Your full name",
    fieldPhone: "Phone",
    fieldPhonePlaceholder: "Best phone number",
    fieldEmail: "Email optional",
    fieldEmailPlaceholder: "Email if you want updates there",
    fieldCity: "City / service area",
    fieldService: "Service type",
    fieldUrgency: "Urgency",
    fieldDescription: "Job description",
    fieldDescriptionPlaceholder:
      "Describe the project, location details, and any photos you can send later.",
    fieldContactMethod: "Preferred contact method",
    selectPlaceholder: "Select one",
    cityOther: "Other nearby area",
    serviceOther: "Other",
    urgencyFlexible: "Flexible",
    urgencyWeek: "This week",
    urgencySoon: "As soon as possible",
    urgencyTime: "Time-sensitive",
    methodCall: "Call",
    methodText: "Text",
    methodEmail: "Email",
    consentText:
      "I agree to be contacted by call, text, or email about this request. Message and data rates may apply.",
    submitLead: "Send Request by Email",
    formNote:
      "No complex backend yet. This V1 keeps the lead organized for email storage and future automation.",
    backTop: "Back to Top",
    footerLocation: "Naples, Florida",
    footerPending:
      "Call or text (786) 372-0107, or email herminio59services@gmail.com for free estimates. Hours are pending confirmation.",
    floatCall: "Text",
    floatCallLabel: "Call or text HERMINIO59 Services at 786-372-0107",
  },
  es: {
    pageTitle: "HERMINIO59 Services | Handyman y Renovaciones",
    metaDescription:
      "HERMINIO59 Services ofrece servicios premium de handyman, pintura, reparaciones, instalaciones, mantenimiento, gabinetes, trim finish y apoyo en remodelaciones peque\u00f1as en Naples, Florida.",
    skipLink: "Saltar al contenido",
    navLabel: "Navegaci\u00f3n principal",
    menuLabel: "Abrir men\u00fa de navegaci\u00f3n",
    languageLabel: "Selector de idioma",
    navServices: "Servicios",
    navWork: "Trabajos",
    navWhy: "Por Qu\u00e9",
    navAbout: "Nosotros",
    navContact: "Contacto",
    navPhone: "Llamar/Text (786) 372-0107",
    navCta: "Pedir Estimado",
    heroEyebrow: "HERMINIO59 Services",
    heroTitle: "Handyman premium en Naples.",
    heroText:
      "Pintura, reparaciones, instalaciones, mantenimiento, gabinetes, trim finish y apoyo en remodelaciones peque\u00f1as.",
    primaryCta: "Pedir Estimado Gratis",
    callPhone: "Llamar o enviar texto (786) 372-0107",
    textPhone: "Enviar Mensaje de Texto",
    trustOne: "Naples, Florida",
    trustTwo: "Estimados gratis",
    trustThree: "Ingl\u00e9s y espa\u00f1ol",
    photoNoteLabel: "Trabajos destacados",
    photoNoteText: "Trabajos reales de acabado, instalaciones, gabinetes y decking.",
    brandOne: "Identidad Negro / Dorado",
    brandTwo: "\u00c1rea de Naples",
    brandThree: "Estimados Gratis",
    brandFour: "Fotos Reales",
    featuredEyebrow: "Trabajos destacados",
    featuredTitle: "Los proyectos de m\u00e1s valor dirigen la historia visual.",
    featuredText:
      "El proyecto de pool decking se presenta como construcci\u00f3n premium, no como pressure washing. Las fotos destacadas se priorizan por confianza, calidad de acabado y valor visual.",
    featuredCardLabel: "Construcci\u00f3n destacada",
    featuredCardTitle: "Proyecto de Pool Decking",
    featuredCardText: "Trabajo exterior premium con fuerte impacto visual.",
    featuredCardTwoLabel: "Acabado interior",
    featuredCardTwoTitle: "Acabados Modernos",
    featuredCardTwoText: "Trabajo interior limpio y de alto contraste para una impresi\u00f3n premium.",
    servicesEyebrow: "Servicios",
    servicesTitle: "Servicios enfocados para hogares en el \u00e1rea de Naples.",
    servicesText:
      "Apoyo claro de handyman organizado alrededor de los servicios aprobados que los clientes suelen pedir.",
    serviceOneTitle: "Servicios de Handyman",
    serviceOneText: "Ayuda general para proyectos peque\u00f1os y medianos del hogar.",
    serviceTwoTitle: "Pintura",
    serviceTwoText: "Apoyo de pintura para espacios m\u00e1s limpios y renovados.",
    serviceThreeTitle: "Reparaciones del Hogar",
    serviceThreeText: "Trabajos enfocados en resolver problemas comunes de la casa.",
    serviceFourTitle: "Instalaciones",
    serviceFourText: "Apoyo en instalaciones para mejoras del hogar.",
    serviceFiveTitle: "Mantenimiento",
    serviceFiveText: "Mantenimiento pr\u00e1ctico para conservar mejor la propiedad.",
    serviceSixTitle: "Apoyo en Remodelaciones Peque\u00f1as",
    serviceSixText: "Apoyo enfocado para proyectos de mejora m\u00e1s peque\u00f1os.",
    serviceSevenTitle: "Trim Finish",
    serviceSevenText: "Detalles de acabado limpio que hacen que el proyecto se vea completo y profesional.",
    serviceEightTitle: "Instalaci\u00f3n de Gabinetes",
    serviceEightText: "Apoyo en instalaci\u00f3n de gabinetes para espacios limpios y funcionales.",
    galleryEyebrow: "Galer\u00eda de trabajos",
    galleryTitle: "Trabajo real priorizado por mayor valor visual.",
    galleryText:
      "La galer\u00eda prioriza trabajos de apariencia premium: deck, acabados interiores, gabinetes, ba\u00f1os y detalles limpios de instalaci\u00f3n.",
    galleryOne: "Pool decking premium",
    galleryTwo: "Acabado interior premium",
    galleryThree: "Detalle de gabinetes",
    galleryFour: "Apoyo en acabado de ba\u00f1o",
    galleryFive: "Detalle limpio de instalaci\u00f3n",
    whyEyebrow: "Por qu\u00e9 elegir HERMINIO59",
    whyTitle: "Construido sobre confianza, claridad y trabajo \u00fatil.",
    whyOneTitle: "Limpio y organizado",
    whyOneText: "La presentaci\u00f3n y el proceso deben sentirse profesionales desde el primer contacto.",
    whyTwoTitle: "Servicios enfocados",
    whyTwoText: "El sitio se mantiene enfocado solo en handyman y renovaciones.",
    whyThreeTitle: "\u00c1rea de servicio local",
    whyThreeText: "Servicio para Naples, Marco Island, Bonita Springs, Bonita Beach y Ave Maria.",
    aboutEyebrow: "Nosotros",
    aboutTitle:
      "HERMINIO59 Services es la marca visible de International Handyman & Renovation LLC.",
    aboutText:
      "El sitio presenta un negocio local serio basado en Naples, Florida, con fotos reales de proyectos, comunicaci\u00f3n biling\u00fce y una identidad premium HERMINIO59 en negro y dorado.",
    contactEyebrow: "Contacto",
    contactTitle: "Pide un estimado gratis.",
    contactText:
      "Llama o env\u00eda texto a HERMINIO59 Services para handyman, pintura, reparaciones, instalaciones, mantenimiento, instalaci\u00f3n de gabinetes, trim finish y apoyo en remodelaciones peque\u00f1as en Naples y \u00e1reas cercanas.",
    contactCardTitle: "HERMINIO59 Services",
    contactPhoneLabel: "Llamar o Texto",
    contactLocationLabel: "Ubicaci\u00f3n",
    contactLocation: "Naples, Florida",
    contactAreaLabel: "\u00c1reas de servicio",
    contactArea: "Naples, Marco Island, Bonita Springs, Bonita Beach, Ave Maria",
    contactEstimateLabel: "Estimados",
    contactEstimate: "Estimados gratis disponibles",
    contactEmailLabel: "Email",
    contactEmail: "herminio59services@gmail.com",
    contactHoursLabel: "Horarios",
    contactHours: "Pendiente antes del lanzamiento",
    leadFormEyebrow: "Entrada de cliente",
    leadFormTitle: "Dinos qu\u00e9 necesitas.",
    leadFormText:
      "Esto abre tu email con la solicitud ya organizada para HERMINIO59 Services.",
    fieldName: "Nombre",
    fieldNamePlaceholder: "Tu nombre completo",
    fieldPhone: "Tel\u00e9fono",
    fieldPhonePlaceholder: "Mejor n\u00famero de tel\u00e9fono",
    fieldEmail: "Email opcional",
    fieldEmailPlaceholder: "Email si quieres recibir actualizaciones ah\u00ed",
    fieldCity: "Ciudad / \u00e1rea de servicio",
    fieldService: "Tipo de servicio",
    fieldUrgency: "Urgencia",
    fieldDescription: "Descripci\u00f3n del trabajo",
    fieldDescriptionPlaceholder:
      "Describe el proyecto, detalles de ubicaci\u00f3n y cualquier foto que puedas enviar despu\u00e9s.",
    fieldContactMethod: "M\u00e9todo preferido de contacto",
    selectPlaceholder: "Selecciona uno",
    cityOther: "Otra \u00e1rea cercana",
    serviceOther: "Otro",
    urgencyFlexible: "Flexible",
    urgencyWeek: "Esta semana",
    urgencySoon: "Lo antes posible",
    urgencyTime: "Sensible al tiempo",
    methodCall: "Llamada",
    methodText: "Texto",
    methodEmail: "Email",
    consentText:
      "Acepto ser contactado por llamada, texto o email sobre esta solicitud. Pueden aplicar cargos de mensajes y datos.",
    submitLead: "Enviar Solicitud por Email",
    formNote:
      "Sin backend complejo todav\u00eda. Esta V1 mantiene el lead organizado para email y automatizaci\u00f3n futura.",
    backTop: "Volver Arriba",
    footerLocation: "Naples, Florida",
    footerPending:
      "Llama o env\u00eda texto al (786) 372-0107, o escribe a herminio59services@gmail.com para estimados gratis. Los horarios siguen pendientes de confirmaci\u00f3n.",
    floatCall: "Texto",
    floatCallLabel: "Llamar o enviar texto a HERMINIO59 Services al 786-372-0107",
  },
};

function closeMenu() {
  document.body.classList.remove("menu-open");
  siteMenu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":");
      element.setAttribute(attribute, dictionary[key]);
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteMenu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!leadForm.reportValidity()) {
      return;
    }

    const data = new FormData(leadForm);
    const lines = [
      "New HERMINIO59 Services lead",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `City / Service Area: ${data.get("city")}`,
      `Service Type: ${data.get("service")}`,
      `Urgency: ${data.get("urgency")}`,
      `Preferred Contact Method: ${data.get("contactMethod")}`,
      "",
      "Job Description:",
      data.get("description"),
      "",
      `SMS / Contact Consent: ${data.get("consent") ? "Yes" : "No"}`,
      "",
      "Source: HERMINIO59 Services website lead form V1",
    ];

    const subject = encodeURIComponent("New HERMINIO59 Services Lead");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:herminio59services@gmail.com?subject=${subject}&body=${body}`;
  });
}

setLanguage("en");
