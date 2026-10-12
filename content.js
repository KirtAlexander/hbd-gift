/**
 * ===================================================================
 * DIARIO / SCRAPBOOK DE CUMPLEAÑOS - CONTENIDO EDITABLE
 * ===================================================================
 * ¡Hola Alex! Aquí puedes cambiar fácilmente todos los textos,
 * fechas, fotos y detalles de tu regalo para Yazmin sin tocar el código.
 */

const scrapbookData = {
  // --- DATOS PERSONALES & CONFIGURACIÓN ---
  personal: {
    girlName: "Mi niña",
    boyName: "Alex",
    birthdayDate: "13 de Octubre", // Fecha de cumpleaños
    relationshipStartDate: "2022-01-16T00:00:00", // 16 de enero de 2022
    favoriteColor: "#9333ea", // Morado / Lavanda
    accentColor: "#c084fc",
    pageTitle: "Para el amor de mi vida 💜 | Feliz Cumpleaños",
  },

  // --- MÚSICA DE FONDO ---
  music: {
    title: "Bajo el agua",
    artist: "Manuel Medrano",
    audioSrc: "files/musica.mp3",
    note: "Te dedico esta canción",
  },

  // --- PORTADA DEL DIARIO ---
  cover: {
    badge: "Carta especial de cumpleaños",
    title: "Para la cumpleañera más hermosa del universo",
    subtitle: "El diario de nuestra historia & un pedacito de mi corazón",
    birthGreeting: "¡Feliz Cumpleaños, Mi Amor!",
    buttonText: "Abrir Diario",
    tagline: "Hecho a mano con todo mi amor por Alex",
  },

  // --- CARTA PRINCIPAL ---
  letter: {
    title: "Mi niña hermosa,",
    date: "13 de Octubre de 2026",
    paragraphs: [
      "Hoy celebro no solo el día en que llegaste a este mundo, sino la fortuna infinita de que nuestros caminos se hayan cruzado. Desde el día número 1, cada instante a tu lado se ha convertido en mi recuerdo favorito.",
      "Tu risa tiene la magia de iluminar hasta mis días más feos y tristes, tu ternura me devuelve la calma y tu forma de ser me inspira a ser mejor cada día. Adoro cada gesto tuyo, la dulzura de tu mirada y la complicidad que solo existe cuando estamos juntos.",
      "Diseñé este pequeño diario como un recuerdo nuestro: a las risas compartidas, a las tardes que parecieron minutos, a los abrazos que lo curan todo y a cada sueño que seguimos construyendo paso a paso.",
      "En este nuevo año de vida, te deseo toda la felicidad del universo, que cada uno de tus sueños se cumpla y que la vida te sonría tanto como tú me haces sonreír a mí. Gracias por elegirme, por cuidarme y por ser mi hogar.",
      "¡Feliz cumpleaños, mi niña hermosa! Te amo con cada latido de mi corazón."
    ],
    closing: "Por siempre y para siempre tuyo,",
    signature: "El amor de tu vida :3"
  },

  // --- CONTADOR DE TIEMPO JUNTOS ---
  counter: {
    title: "Nuestra Historia en Números",
    subtitle: "Llevamos caminando de la mano desde aquel mágico 16 de enero de 2022:",
    loveQuote: "«Y cada segundo contigo vale más que toda una eternidad sin ti.»",
  },

  // --- CARRUSEL DE FOTOS POLAROID ---
  gallery: [
    {
      src: "files/foto1.jpeg",
      caption: "Nuestra primera foto juntos",
      date: "El comienzo de todo",
      rotation: -2,
    },
    {
      src: "files/foto4.jpeg",
      caption: "Esa tarde mágica donde no paramos de reír",
      date: "Cómplices siempre",
      rotation: 3,
    },
    {
      src: "files/foto11.jpeg",
      caption: "Tu risa, mi lugar favorito en el mundo",
      date: "Sonrisas infinitas",
      rotation: -3,
    },
    {
      src: "files/foto10.jpeg",
      caption: "Nuestra escapada y glamping en la naturaleza",
      date: "Coleccionando aventuras",
      rotation: 2,
    },
    {
      src: "files/foto12.jpeg",
      caption: "Día de río y sol inolvidable",
      date: "Tú iluminando todo",
      rotation: -1,
    },
    {
      src: "files/foto5.jpeg",
      caption: "Cielos morados y atardeceres contigo",
      date: "Contigo al fin del mundo",
      rotation: 2,
    },
    {
      src: "files/foto6.jpeg",
      caption: "Tu mirada que siempre me enloquece",
      date: "Amor puro",
      rotation: -2,
    },
    {
      src: "files/foto7.jpeg",
      caption: "Porque te veías chistosita y tierna dormilona",
      date: "Mi taquito favorito",
      rotation: 3,
    },
    {
      src: "files/foto9.jpeg",
      caption: "Nuestros abrazos que detienen el tiempo",
      date: "Hogar y paz",
      rotation: -1,
    },
    {
      src: "files/foto13.jpeg",
      caption: "Cómplices de travesuras y de todo :3",
      date: "Tú y yo",
      rotation: 2,
    },
    {
      src: "files/foto8.jpeg",
      caption: "Por muchos años más a tu lado",
      date: "Juntos por siempre y un poquito más",
      rotation: -2,
    },
    {
      src: "files/foto2.jpeg",
      caption: "Ese beso que lo cura todo",
      date: "Para toda la vida",
      rotation: 2,
    }
  ],

  // --- LÍNEA DE TIEMPO / NUESTRA HISTORIA ---
  // Ahora las fotos SÍ cargan y cuentan su historia cronológica
  timeline: [
    {
      date: "Principios de 2022",
      title: "El primer instante",
      description: "El día en que cruzamos nuestras miradas y palabras. No sabía todo lo que vendría, pero supe que eras alguien verdaderamente especial.",
      sticker: "Destino",
      icon: "sparkles",
      photo: "files/foto1.jpeg",
    },
    {
      date: "16 de Enero de 2022",
      title: "El inicio de nuestra historia",
      description: "El día que nos dijimos que sí y decidimos empezar a escribir este viaje juntos. La mejor decisión que he tomado en mi vida.",
      sticker: "Día 1",
      icon: "heart",
      photo: "files/foto2.jpeg",
    },
    {
      date: "Nuestras primeras salidas",
      title: "Risas, confidencias y café",
      description: "Esas primeras citas donde las horas pasaban volando y no queríamos despedirnos. Cada conversación me confirmaba lo maravillosa que eres.",
      sticker: "Inolvidable",
      icon: "coffee",
      photo: "files/foto3.jpeg",
    },
    {
      date: "Nuestras aventuras",
      title: "Descubriendo el mundo juntos",
      description: "Nuestros paseos, viajes y escapadas. Descubrir que no importa a dónde vayamos, el mejor destino siempre eres tú.",
      sticker: "Aventuras",
      icon: "compass",
      photo: "files/foto10.jpeg",
    },
    {
      date: "Atardeceres y cielos morados",
      title: "Coleccionando recuerdos mágicos",
      description: "Madrugar o ver caer la tarde, contemplar los paisajes en tu color favorito y agradecerle a la vida por tenerte a mi lado.",
      sticker: "Mágico",
      icon: "sun",
      photo: "files/foto5.jpeg",
    },
    {
      date: "13 de Octubre de 2026",
      title: "Celebrando tu hermosa vida",
      description: "Hoy celebro tu vida, tu luz y todo lo que eres. Deseo que este cumpleaños sea tan brillante, mágico y lleno de amor como tú.",
      sticker: "Feliz Cumple",
      icon: "gift",
      photo: "files/foto8.jpeg",
    },
  ],

  // --- 10 RAZONES POR LAS QUE TE QUIERO ---
  reasons: [
    {
      number: "01",
      title: "Tu sonrisa iluminadora",
      text: "Porque tienes la sonrisa más genuina y hermosa del planeta; es capaz de iluminar mi peor día en un solo segundo.",
      color: "purple",
      icon: "sun",
    },
    {
      number: "02",
      title: "Tu ternura infinita",
      text: "Por la forma tan dulce en la que me miras y cómo me haces sentir seguro, en paz y completamente en casa.",
      color: "lavender",
      icon: "heart",
    },
    {
      number: "03",
      title: "Tu risa contagiosa",
      text: "Por tus carcajadas espontáneas que llenan cualquier habitación de alegría y son mi sonido favorito en el mundo.",
      color: "peach",
      icon: "smile",
    },
    {
      number: "04",
      title: "Nuestra complicidad",
      text: "Porque nos entendemos con una sola mirada, tenemos nuestros propios chistes y puedo ser 100% yo mismo contigo.",
      color: "yellow",
      icon: "sparkles",
    },
    {
      number: "05",
      title: "Tu gran corazón",
      text: "Por la nobleza de tus sentimientos, tu empatía con los demás y la pasión que le pones a las cosas que amas.",
      color: "rose",
      icon: "heart-outline",
    },
    {
      number: "06",
      title: "Tus abrazos que curan",
      text: "Por esos abrazos tuyos en los que el tiempo se detiene y todos los problemas del mundo desaparecen por completo.",
      color: "purple",
      icon: "heart",
    },
    {
      number: "07",
      title: "Nuestras pláticas",
      text: "Porque podemos hablar de las cosas más profundas de la vida o de las mayores tonterías durante horas sin aburrirnos.",
      color: "lavender",
      icon: "moon",
    },
    {
      number: "08",
      title: "Cómo me impulsas",
      text: "Por creer en mí incluso cuando yo dudo, motivarme a perseguir mis sueños y celebrar cada uno de mis logros como tuyo.",
      color: "peach",
      icon: "star",
    },
    {
      number: "09",
      title: "Tus pequeños detalles",
      text: "Por cómo recuerdas lo que me gusta, tus caricias inesperadas y la magia que pones en cada día cotidiano.",
      color: "yellow",
      icon: "mail",
    },
    {
      number: "10",
      title: "Simplemente por ser tú",
      text: "Porque eres exactamente la persona con la que soñé compartir mi vida. Te amo por quien eres, hoy, mañana y siempre.",
      color: "rose",
      icon: "crown",
    },
  ],

  // --- SORPRESA FINAL (SOBRE INTERACTIVO & CUPÓN DE REGALO) ---
  surprise: {
    envelopePrompt: "Toca el sobre para abrir tu sorpresa de cumpleaños...",
    envelopeTag: "Para mi chiquitina",
    modalTitle: "¡Sorpresa Especial de Cumpleaños!",
    modalSubtitle: "Porque te mereces todo lo lindo de este mundo...",
    coupon: {
      tag: "VALE DE AMOR OFICIAL & EXCLUSIVO",
      title: "Una Cita Mágica de Ensueño",
      includes: [
        { icon: "utensils", text: "Una cena romántica en tu restaurante favorito (¡todo lo que quieras pedir!)" },
        { icon: "cake", text: "Tus postres preferidos y un brindis especial por tu vida" },
        { icon: "camera", text: "Una tarde llena de fotos, risas y paseos a tu lugar favorito" },
        { icon: "gift", text: "Un regalo sorpresa que he preparado especialmente para ti" },
        { icon: "infinity", text: "Abrazos y besos ilimitados garantizados" }
      ],
      terms: "Válido en cualquier momento de tu vida • No vence jamás • Canjeable con Alex",
      code: "MINIÑA-CUMPLE-2026-AMOR-ETERNO",
    },
    specialMessage: "Este regalo no es solo un vale, es la promesa de seguir haciéndote la mujer más feliz y amada del mundo. ¡Feliz día mi reina!",
  },

  // --- CIERRE ---
  closing: {
    quote: "«En este y en todos los universos, te elegiría a ti una y mil veces.»",
    phrase: "Gracias por existir y por hacer de mi vida un lugar tan hermoso.",
    signoff: "Con todo mi amor para siempre,",
    author: "Kirt - Alex <3",
    year: "2026",
  }
};
