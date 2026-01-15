const CURRENCIES = { es: "€", fr: "€", it: "€", de: "€", gb: "£", us: "$" };

const TRANSLATIONS = {
  es: {
    HERO_TITLE: "Cocina mejor, <span class='text-orange-500'>ahorra dinero.</span>",
    LABEL_ELECTRICITY: "Ahorro Eléctrico vs Horno",
    LABEL_TODAY: "Hoy",
    LABEL_ANNUAL: "Ahorro Anual Estimado",
    BUTTON_SHARE_MONEY: "Compartir Ahorro",
    LABEL_HEALTH: "Ahorro Salud",
    LABEL_EXERCISE: "Equivale a correr",
    BUTTON_SHARE_HEALTH: "Presumir de Salud",
    TITLE_GUIDE: "Guía Maestra de Tiempos",
    TITLE_FAQ: "Preguntas Frecuentes",
    TITLE_SEO: "¿Por qué la freidora es la mejor inversión?",
    LABEL_MINUTES_AT: "MINUTOS A",
    NAV_CALCULATOR: "Calculadora",
    NAV_GUIDE: "Guía",
    NAV_FAQ: "FAQ",
    SEO_PARAGRAPH_1: "Utilizar una airfryer no es solo una moda; es la decisión financiera más inteligente para tu hogar en 2026. Con los precios de la electricidad disparados, cocinar en un 50% menos de tiempo que un horno se traduce en dinero real en tu bolsillo. Esta calculadora avanzada usa algoritmos de consumo real para demostrarte lo que ahorras cada día.",
    SEO_PARAGRAPH_2: "Además del ahorro económico, el impacto en tu salud al reducir hasta un 80% las grasas saturadas es un ahorro a largo plazo en bienestar físico. Cocinar con aire es la forma más eficiente de comer sano sin renunciar al sabor crujiente que tanto nos gusta, optimizando cada vatio de energía.",
    SHARE_MESSAGE_MONEY:
      "¡He ahorrado {X}{C} hoy cocinando {F}! ⚡ ¡Eso son {Y}{C} al año! Calcula tu ahorro en:",
    SHARE_MESSAGE_HEALTH:
      "¡He quemado {X} kcal menos cocinando {F}! Equivale a {Y} min de carrera. ¡Pásate al aire!",
    FOOTER_LEGAL: "Aviso Legal",
    FOOTER_PRIVACY: "Privacidad",
    FOOTER_COOKIES: "Cookies",
    COOKIE_TEXT: "Utilizamos cookies propias y de terceros para analizar el tráfico y mostrar anuncios personalizados. Puedes aceptar todas las cookies o rechazar las que no sean necesarias.",
    BUTTON_ACCEPT: "Aceptar todas",
    BUTTON_CLOSE: "Rechazar opcionales",
    CONTENT_LEGAL:
      "Airfryer Saver es una herramienta informativa. Los cálculos de ahorro son estimaciones basadas en consumos medios de electrodomésticos (Horno 3000W vs Airfryer 1500W). No nos hacemos responsables de variaciones en la factura eléctrica real.",
    CONTENT_PRIVACY:
      "No almacenamos ni solicitamos datos personales. Este sitio utiliza Google AdSense, que puede emplear cookies para mostrar anuncios personalizados basados en tus intereses y visitas previas a este u otros sitios web.",
    CONTENT_COOKIES:
      "Utilizamos cookies técnicas necesarias para el funcionamiento de la web y cookies de terceros (Google AdSense) para analizar el tráfico y personalizar la publicidad. Al navegar por la web, aceptas su uso.",
  },
  en: {
    HERO_TITLE: "Cook better, <span class='text-orange-500'>save money.</span>",
    LABEL_ELECTRICITY: "Electricity vs Oven",
    LABEL_TODAY: "Today",
    LABEL_ANNUAL: "Annual Savings",
    BUTTON_SHARE_MONEY: "Share Savings",
    LABEL_HEALTH: "Health Savings",
    LABEL_EXERCISE: "Equivalent to running",
    BUTTON_SHARE_HEALTH: "Share Health",
    TITLE_GUIDE: "Master Guide",
    TITLE_FAQ: "FAQ",
    TITLE_SEO: "Why Airfryers in 2026?",
    LABEL_MINUTES_AT: "MINUTES AT",
    NAV_CALCULATOR: "Calculator",
    NAV_GUIDE: "Guide",
    NAV_FAQ: "FAQ",
    SEO_PARAGRAPH_1: "Using an airfryer is not just a trend; it's the smartest financial decision for your home in 2026. With electricity prices soaring, cooking in 50% less time translates to real money in your pocket. This advanced calculator uses real consumption algorithms to show your daily savings.",
    SEO_PARAGRAPH_2: "Beyond financial savings, reducing saturated fats by up to 80% is a long-term investment in your physical well-being. Air cooking is the most efficient way to eat healthy without sacrificing the crunch we all love, optimizing every watt of energy.",
    SHARE_MESSAGE_MONEY: "Saved {X}{C} today cooking {F}! ⚡ That's {Y}{C} per year! Calculate your savings at:",
    SHARE_MESSAGE_HEALTH: "Cut {X} kcal cooking {F}! Like running for {Y} min. Go Airfryer!",
    FOOTER_LEGAL: "Legal Notice",
    FOOTER_PRIVACY: "Privacy",
    FOOTER_COOKIES: "Cookies",
    COOKIE_TEXT: "We use our own and third-party cookies to analyze traffic and show personalized ads. You can accept all cookies or reject non-essential ones.",
    BUTTON_ACCEPT: "Accept all",
    BUTTON_CLOSE: "Reject optional",
    CONTENT_LEGAL:
      "Airfryer Saver is an informational tool. Savings calculations are estimates based on average appliance consumption (Oven 3000W vs Airfryer 1500W). We are not responsible for variations in your actual electricity bill.",
    CONTENT_PRIVACY:
      "We do not store or request personal data. This site uses Google AdSense, which may use cookies to show personalized ads based on your interests and previous visits to this or other websites.",
    CONTENT_COOKIES:
      "We use technical cookies necessary for the website's operation and third-party cookies (Google AdSense) to analyze traffic and personalize advertising. By browsing the web, you accept their use.",
  },
  fr: {
    HERO_TITLE: "Cuisinez mieux, <span class='text-orange-500'>économisez.</span>",
    LABEL_ELECTRICITY: "Économie Électricité",
    LABEL_TODAY: "Aujourd'hui",
    LABEL_ANNUAL: "Économie Annuelle",
    BUTTON_SHARE_MONEY: "Partager",
    LABEL_HEALTH: "Santé",
    LABEL_EXERCISE: "Équivalent à la course",
    BUTTON_SHARE_HEALTH: "Partager Santé",
    TITLE_GUIDE: "Guide des Temps",
    TITLE_FAQ: "FAQ",
    TITLE_SEO: "Pourquoi l'airfryer?",
    LABEL_MINUTES_AT: "MINUTES À",
    NAV_CALCULATOR: "Calculatrice",
    NAV_GUIDE: "Guide",
    NAV_FAQ: "FAQ",
    SEO_PARAGRAPH_1: "L'airfryer est le choix financier le plus intelligent en 2026. Cuisiner deux fois plus vite signifie des factures d'électricité réduites. Ce calculateur utilise des algorithmes de consommation réelle pour prouver vos économies quotidiennes.",
    SEO_PARAGRAPH_2: "Économisez de l'argent et gagnez en santé en réduisant les graisses saturées de 80%. C'est l'efficacité pure pour votre maison sans sacrifier le goût croustillant.",
    SHARE_MESSAGE_MONEY: "J'ai économisé {X}{C} aujourd'hui avec {F} ! ⚡ Soit {Y}{C} par an ! Calculez vos économies :",
    SHARE_MESSAGE_HEALTH: "J'ai réduit {X} kcal avec {F} ! 🏃 Équivalent à {Y} min de course. Passez à l'Airfryer !",
    FOOTER_LEGAL: "Mentions Légales",
    FOOTER_PRIVACY: "Confidentialité",
    FOOTER_COOKIES: "Cookies",
    COOKIE_TEXT: "Nous utilisons des cookies pour analyser le trafic et diffuser des annonces personnalisées. Vous pouvez accepter tous les cookies ou refuser ceux qui ne sont pas nécessaires.",
    BUTTON_ACCEPT: "Tout accepter",
    BUTTON_CLOSE: "Refuser optionnels",
    CONTENT_LEGAL:
      "Airfryer Saver est un outil informatif. Les calculs d'économies sont des estimations basées sur la consommation moyenne des appareils (Four 3000W vs Airfryer 1500W). Nous ne sommes pas responsables des variations de votre facture réelle.",
    CONTENT_PRIVACY:
      "Nous ne stockons ni ne demandons de données personnelles. Ce site utilise Google AdSense, qui peut utiliser des cookies pour diffuser des annonces personnalisées basées sur vos intérêts et vos visites précédentes.",
    CONTENT_COOKIES:
      "Nous utilisons des cookies techniques nécessaires au fonctionnement du site et des cookies tiers (Google AdSense) pour analyser le trafic et personnaliser la publicité. En naviguant sur le site, vous acceptez leur utilisation.",
  },
  it: {
    HERO_TITLE: "Cucina meglio, <span class='text-orange-500'>risparmia.</span>",
    LABEL_ELECTRICITY: "Risparmio Elettrico",
    LABEL_TODAY: "Oggi",
    LABEL_ANNUAL: "Risparmio Annuo",
    BUTTON_SHARE_MONEY: "Condividi",
    LABEL_HEALTH: "Salute",
    LABEL_EXERCISE: "Equivale alla corsa",
    BUTTON_SHARE_HEALTH: "Condividi Salute",
    TITLE_GUIDE: "Guida Tempi",
    TITLE_FAQ: "FAQ",
    TITLE_SEO: "Perché l'airfryer?",
    LABEL_MINUTES_AT: "MINUTI A",
    NAV_CALCULATOR: "Calcolatrice",
    NAV_GUIDE: "Guida",
    NAV_FAQ: "FAQ",
    SEO_PARAGRAPH_1: "L'airfryer è la mossa finanziaria più intelligente del 2026. Cucinare in metà tempo significa bollette più basse. Questo calcolatore avanzato ti mostra quanto risparmi ogni giorno.",
    SEO_PARAGRAPH_2: "Risparmia denaro e guadagna salute riducendo i grassi saturi dell'80%. Efficienza pura per la tua casa senza rinunciare alla croccantezza.",
    SHARE_MESSAGE_MONEY: "Ho risparmiato {X}{C} oggi cucinando {F}! ⚡ Sono {Y}{C} all'anno! Calcola il tuo risparmio:",
    SHARE_MESSAGE_HEALTH: "Ho ridotto {X} kcal cucinando {F}! 🏃 Equivalente a {Y} min di corsa. Passa all'Airfryer!",
    FOOTER_LEGAL: "Note Legali",
    FOOTER_PRIVACY: "Privacy",
    FOOTER_COOKIES: "Cookies",
    COOKIE_TEXT: "Utilizziamo cookie propri e di terze parti per analizzare il traffico e mostrare annunci personalizzati. Puoi accettare tutti i cookie o rifiutare quelli non necessari.",
    BUTTON_ACCEPT: "Accetta tutti",
    BUTTON_CLOSE: "Rifiuta opzionali",
    CONTENT_LEGAL:
      "Airfryer Saver è uno strumento informativo. I calcoli del risparmio sono stime basate sul consumo medio degli elettrodomestici (Forno 3000W vs Airfryer 1500W). Non siamo responsabili per variazioni nella bolletta elettrica reale.",
    CONTENT_PRIVACY:
      "Non memorizziamo né richiediamo dati personali. Questo sito utilizza Google AdSense, che può utilizzare i cookie per mostrare annunci personalizzati basati sui tuoi interessi e sulle tue visite precedenti.",
    CONTENT_COOKIES:
      "Utilizziamo cookie tecnici necessari per il funzionamento del sito e cookie di terze parti (Google AdSense) per analizzare il traffico e personalizzare la pubblicità. Navigando nel sito, ne accetti l'uso.",
  },
  de: {
    HERO_TITLE: "Besser kochen, <span class='text-orange-500'>sparen.</span>",
    LABEL_ELECTRICITY: "Stromersparnis",
    LABEL_TODAY: "Heute",
    LABEL_ANNUAL: "Jahresersparnis",
    BUTTON_SHARE_MONEY: "Teilen",
    LABEL_HEALTH: "Gesundheit",
    LABEL_EXERCISE: "Entspricht dem Laufen",
    BUTTON_SHARE_HEALTH: "Teilen",
    TITLE_GUIDE: "Zeitanleitung",
    TITLE_FAQ: "FAQ",
    TITLE_SEO: "Warum Airfryer?",
    LABEL_MINUTES_AT: "MINUTEN BEI",
    NAV_CALCULATOR: "Rechner",
    NAV_GUIDE: "Anleitung",
    NAV_FAQ: "FAQ",
    SEO_PARAGRAPH_1: "Airfryers sind 2026 die klügste finanzielle Entscheidung. Schnelleres Kochen bedeutet niedrigere Rechnungen. Dieser Rechner zeigt Ihre täglichen Einsparungen präzise an.",
    SEO_PARAGRAPH_2: "Sparen Sie Geld und bleiben Sie gesund, indem Sie gesättigte Fette um 80% reduzieren. Reine Effizienz für Ihr Zuhause ohne Geschmacksverlust.",
    SHARE_MESSAGE_MONEY: "Heute {X}{C} gespart beim Kochen von {F}! ⚡ Das sind {Y}{C} pro Jahr! Berechnen Sie Ihre Ersparnis:",
    SHARE_MESSAGE_HEALTH: "{X} kcal weniger beim Kochen von {F}! 🏃 Entspricht {Y} Min. Laufen. Zeit für den Airfryer!",
    FOOTER_LEGAL: "Impressum",
    FOOTER_PRIVACY: "Datenschutz",
    FOOTER_COOKIES: "Cookies",
    COOKIE_TEXT: "Wir verwenden eigene und Cookies von Drittanbietern, um den Datenverkehr zu analysieren und personalisierte Werbung anzuzeigen. Sie können alle Cookies akzeptieren oder optionale ablehnen.",
    BUTTON_ACCEPT: "Alle akzeptieren",
    BUTTON_CLOSE: "Optionale ablehnen",
    CONTENT_LEGAL:
      "Airfryer Saver ist ein Informationstool. Die Einsparungsberechnungen sind Schätzungen, die auf dem durchschnittlichen Verbrauch von Geräten basieren (Backofen 3000W vs. Airfryer 1500W). Wir haften nicht für Abweichungen in Ihrer tatsächlichen Stromrechnung.",
    CONTENT_PRIVACY:
      "Wir speichern oder fordern keine personenbezogenen Daten an. Diese Website verwendet Google AdSense, das Cookies verwenden kann, um personalisierte Anzeigen basierend auf Ihren Interessen und früheren Besuchen anzuzeigen.",
    CONTENT_COOKIES:
      "Wir verwenden für den Betrieb der Website notwendige technische Cookies und Cookies von Drittanbietern (Google AdSense), um den Datenverkehr zu analysieren und die Werbung zu personalisieren. Durch das Surfen auf der Website akzeptieren Sie deren Verwendung.",
  },
};

const FAQ_DATA = {
  es: [
    {
      q: "¿Consume menos que un horno?",
      a: "Absolutamente. Al calentar un espacio mucho más pequeño (3-5 litros frente a 60 litros del horno) y hacerlo circular rápidamente, reduces el tiempo de cocción casi a la mitad, ahorrando entre un 50% y un 70% en tu factura.",
    },
    {
      q: "¿Puedo usar papel de horno?",
      a: "Sí, pero cuidado. Debe ser papel perforado especial para airfryer. Si bloqueas el flujo de aire poniendo papel normal que cubra todo el fondo, los alimentos no se cocinarán bien por abajo y puedes sobrecalentar la máquina.",
    },
    {
      q: "¿Cómo se limpia correctamente?",
      a: "La cesta va al lavavajillas sin problemas. Lo importante es limpiar la resistencia superior (la espiral que calienta) con un cepillo suave cada 3 meses para que la grasa no se queme y genere humo.",
    },
    {
      q: "¿Es necesario precalentar?",
      a: "Solo para carnes rojas (filetes, chuletas) donde buscas un sellado rápido. Para verduras, patatas o recalentar comida, es un gasto de energía innecesario; empieza en frío y ahorra luz.",
    },
    {
      q: "¿Cuánto aceite ahorro realmente?",
      a: "Muchísimo. Pasas de sumergir las patatas en medio litro de aceite a usar solo una cucharada pulverizada. Reduces la ingesta de calorías vacías y ahorras dinero en aceite de oliva.",
    },
  ],
  en: [
    {
      q: "Does it use less energy than an oven?",
      a: "Absolutely. By heating a much smaller space (3-5 liters vs. 60 liters in an oven) and circulating air rapidly, you cut cooking time almost in half, saving between 50% and 70% on your electricity bill.",
    },
    {
      q: "Can I use baking paper?",
      a: "Yes, but be careful. It must be special perforated paper for airfryers. If you block the airflow with regular paper covering the entire bottom, food won't cook evenly, and you might overheat the machine.",
    },
    {
      q: "How do I clean it properly?",
      a: "The basket is usually dishwasher safe. The important part is to clean the upper heating element (the coil) with a soft brush every 3 months to prevent grease buildup and smoke.",
    },
    {
      q: "Is preheating necessary?",
      a: "Only for red meats (steaks, chops) where you want a quick sear. For vegetables, fries, or reheating food, it's an unnecessary energy waste; start cold and save electricity.",
    },
    {
      q: "How much oil do I really save?",
      a: "A huge amount. You go from submerging fries in half a liter of oil to using just a sprayed tablespoon. You reduce empty calorie intake and save money on expensive olive oil.",
    },
  ],
  fr: [
    {
      q: "Consomme-t-elle moins qu'un four ?",
      a: "Absolument. En chauffant un espace beaucoup plus petit (3-5 litres contre 60 pour un four) et en faisant circuler l'air rapidement, vous réduisez le temps de cuisson presque de moitié, économisant 50 à 70% sur votre facture.",
    },
    {
      q: "Puis-je utiliser du papier cuisson ?",
      a: "Oui, mais attention. Il doit être perforé spécialement pour l'airfryer. Si vous bloquez le flux d'air avec du papier normal couvrant tout le fond, les aliments ne cuiront pas bien et l'appareil peut surchauffer.",
    },
    {
      q: "Comment bien la nettoyer ?",
      a: "Le panier passe au lave-vaisselle. L'important est de nettoyer la résistance supérieure (la spirale chauffante) avec une brosse douce tous les 3 mois pour éviter que la graisse ne brûle et fume.",
    },
    {
      q: "Faut-il préchauffer ?",
      a: "Seulement pour les viandes rouges (steaks, côtelettes) pour saisir rapidement. Pour les légumes ou réchauffer, c'est un gaspillage d'énergie inutile ; commencez à froid et économisez.",
    },
    {
      q: "Combien d'huile est économisée ?",
      a: "Énormément. Vous passez d'un bain d'huile à une simple cuillère pulvérisée. Vous réduisez l'ingestion de calories vides et économisez de l'argent sur l'huile d'olive.",
    },
  ],
  it: [
    {
      q: "Consuma meno di un forno?",
      a: "Assolutamente. Riscaldando uno spazio molto più piccolo (3-5 litri contro 60) e facendo circolare l'aria rapidamente, riduci i tempi di cottura quasi a metà, risparmiando tra il 50% e il 70% in bolletta.",
    },
    {
      q: "Posso usare carta forno?",
      a: "Sì, ma attenzione. Deve essere carta perforata speciale per airfryer. Se blocchi il flusso d'aria con carta normale che copre tutto il fondo, il cibo non cuocerà bene e potresti surriscaldare la macchina.",
    },
    {
      q: "Come si pulisce correttamente?",
      a: "Il cestello va in lavastoviglie. L'importante è pulire la resistenza superiore (la spirale) con una spazzola morbida ogni 3 mesi affinché il grasso non bruci creando fumo.",
    },
    {
      q: "È necessario preriscaldare?",
      a: "Solo per carni rosse (bistecche) dove cerchi una sigillatura rapida. Per verdure, patatine o riscaldare, è uno spreco di energia inutile; inizia a freddo e risparmia luce.",
    },
    {
      q: "Quanto olio risparmio davvero?",
      a: "Moltissimo. Passi dall'immergere le patatine in mezzo litro d'olio a usarne solo un cucchiaio spray. Riduci le calorie vuote e risparmi soldi sull'olio d'oliva.",
    },
  ],
  de: [
    {
      q: "Verbraucht er weniger als ein Ofen?",
      a: "Absolut. Da ein viel kleinerer Raum (3-5 Liter vs. 60 Liter) erhitzt wird und die Luft schnell zirkuliert, halbieren Sie fast die Kochzeit und sparen 50% bis 70% Ihrer Stromrechnung.",
    },
    {
      q: "Kann ich Backpapier verwenden?",
      a: "Ja, aber Vorsicht. Es muss gelochtes Spezialpapier sein. Wenn Sie den Luftstrom mit normalem Papier blockieren, das den Boden bedeckt, wird das Essen nicht gleichmäßig gar und das Gerät kann überhitzen.",
    },
    {
      q: "Wie reinige ich ihn richtig?",
      a: "Der Korb ist spülmaschinenfest. Wichtig ist, das obere Heizelement (die Spirale) alle 3 Monate mit einer weichen Bürste zu reinigen, damit Fett nicht verbrennt und Rauch erzeugt.",
    },
    {
      q: "Ist Vorheizen notwendig?",
      a: "Nur bei rotem Fleisch (Steaks), um es scharf anzubraten. Für Gemüse, Pommes oder zum Aufwärmen ist es Energieverschwendung; starten Sie kalt und sparen Sie Strom.",
    },
    {
      q: "Wie viel Öl spare ich wirklich?",
      a: "Enorm viel. Statt Pommes in einem halben Liter Öl zu frittieren, nutzen Sie nur einen Sprühstoß. Sie reduzieren leere Kalorien und sparen Geld beim teuren Olivenöl.",
    },
  ],
};

const FOOD_DATA = {
  patatas: {
    icono: "🍟",
    nombres: {
      es: "Patatas Fritas",
      en: "French Fries",
      fr: "Frites",
      it: "Patatine",
      de: "Pommes",
    },
    // Calories per typical portion (approx 200g)
    // Deep fried: ~600kcal. Airfry: ~300kcal.
    trad_cal: 600,
    air_cal: 300,
    trad_min: 45, // Oven/Deep fry total time
    air_min: 20,
    temp: "200",
    tips: {
      es: "Lávalas antes para quitar el almidón y conseguir que queden extra crujientes.",
      en: "Wash them first to remove starch and get them extra crispy.",
      fr: "Lavez-les d'abord pour enlever l'amidon et les rendre très croustillantes.",
      it: "Lavale prima per rimuovere l'amido e farle diventare extra croccanti.",
      de: "Vorher waschen, um Stärke zu entfernen und sie extra knusprig zu machen.",
    },
  },
  alitas: {
    icono: "🍗",
    nombres: {
      es: "Alitas",
      en: "Wings",
      fr: "Ailerons",
      it: "Ali",
      de: "Flügel",
    },
    trad_cal: 550, // Deep fried (6 wings)
    air_cal: 380, // Air fried (fat drains)
    trad_min: 45,
    air_min: 22,
    temp: "195",
    tips: {
      es: "Colócalas con la piel hacia arriba para que la grasa se drene perfectamente.",
      en: "Place them skin-side up so the fat drains perfectly.",
      fr: "Placez-les peau vers le haut pour que la graisse s'écoule parfaitement.",
      it: "Metterle con la pelle rivolta verso l'alto in modo che il grasso coli perfettamente.",
      de: "Mit der Hautseite nach oben legen, damit das Fett perfekt abläuft.",
    },
  },
  salmon: {
    icono: "🐟",
    nombres: {
      es: "Salmón",
      en: "Salmon",
      fr: "Saumon",
      it: "Salmone",
      de: "Lachs",
    },
    trad_cal: 400, // Pan fried with oil
    air_cal: 320, // Air fried
    trad_min: 20,
    air_min: 12,
    temp: "180",
    tips: {
      es: "Piel hacia abajo, no necesita nada de aceite adicional.",
      en: "Skin side down, no additional oil needed.",
      fr: "Peau vers le bas, pas besoin d'huile supplémentaire.",
      it: "Pelle verso il basso, non serve olio extra.",
      de: "Hautseite nach unten, kein zusätzliches Öl nötig.",
    },
  },
  croquetas: {
    icono: "🧆",
    nombres: {
      es: "Croquetas",
      en: "Croquettes",
      fr: "Croquettes",
      it: "Crocchette",
      de: "Kroketten",
    },
    trad_cal: 450, // Deep fried
    air_cal: 250, // Air fried sprayed
    trad_min: 20, // Deep fryer setup + fry time
    air_min: 10,
    temp: "200",
    tips: {
      es: "Si son congeladas, pulveriza un toque de aceite para un dorado óptimo.",
      en: "If frozen, spray a touch of oil for optimal browning.",
      fr: "Si elles sont surgelées, vaporisez un peu d'huile pour un dorage optimal.",
      it: "Se sono surgelate, spruzza un filo d'olio per una doratura perfetta.",
      de: "Wenn sie gefroren sind, mit etwas Öl besprühen für optimale Bräunung.",
    },
  },
  pizza: {
    icono: "🍕",
    nombres: {
      es: "Pizza",
      en: "Pizza",
      fr: "Pizza",
      it: "Pizza",
      de: "Pizza",
    },
    trad_cal: 600,
    air_cal: 540, // Reduced to reflect oil/fat loss through basket
    trad_min: 22,
    air_min: 10,
    temp: "180",
    tips: {
      es: "Recupera el crujiente original mucho mejor que el microondas.",
      en: "Recovers the original crunch much better than the microwave.",
      fr: "Retrouve son croustillant original bien mieux qu'au micro-ondes.",
      it: "Recupera la croccantezza originale molto meglio del microonde.",
      de: "Wird viel knuspriger als in der Mikrowelle.",
    },
  },
  bacon: {
    icono: "🥓",
    nombres: {
      es: "Bacon",
      en: "Bacon",
      fr: "Lardon",
      it: "Pancetta",
      de: "Speck",
    },
    trad_cal: 300, // Pan fried (cooks in own fat but sits in it)
    air_cal: 250, // Drains fat
    trad_min: 15,
    air_min: 8,
    temp: "190",
    tips: {
      es: "Pon un trozo de pan debajo para absorber la grasa y evitar humos.",
      en: "Put a piece of bread underneath to absorb fat and prevent smoke.",
      fr: "Placez un morceau de pain dessous pour absorber la graisse et éviter la fumée.",
      it: "Metti un pezzo di pane sotto per assorbire il grasso ed evitare fumo.",
      de: "Legen Sie ein Stück Brot darunter, um Fett aufzusaugen und Rauch zu vermeiden.",
    },
  },
  brocoli: {
    icono: "🥦",
    nombres: {
      es: "Brócoli",
      en: "Broccoli",
      fr: "Brocoli",
      it: "Broccoli",
      de: "Brokkoli",
    },
    trad_cal: 120, // Roasted with oil
    air_cal: 80, // Roasted less oil
    trad_min: 25,
    air_min: 8,
    temp: "185",
    tips: {
      es: "Queda con una textura tostada increíble. Añade especias al final.",
      en: "It gets an amazing toasted texture. Add spices at the end.",
      fr: "Une texture grillée incroyable. Ajoutez les épices à la fin.",
      it: "Ottiene una consistenza tostata incredibile. Aggiungi le spezie alla fine.",
      de: "Erhält eine tolle Rösttextur. Gewürze erst am Ende hinzufügen.",
    },
  },
  nuggets: {
    icono: "🐤",
    nombres: {
      es: "Nuggets",
      en: "Nuggets",
      fr: "Nuggets",
      it: "Nuggets",
      de: "Nuggets",
    },
    trad_cal: 480, // Deep fried
    air_cal: 300, // Air fried
    trad_min: 20,
    air_min: 12,
    temp: "200",
    tips: {
      es: "Agita el cesto a mitad de tiempo para un dorado uniforme.",
      en: "Shake the basket halfway through for even browning.",
      fr: "Secouez le panier à mi-cuisson pour un dorage uniforme.",
      it: "Scuoti il cestello a metà cottura per una doratura uniforme.",
      de: "Korb nach der Hälfte der Zeit schütteln für gleichmäßige Bräunung.",
    },
  },
  filete: {
    icono: "🥩",
    nombres: {
      es: "Filete",
      en: "Steak",
      fr: "Steak",
      it: "Bistecca",
      de: "Steak",
    },
    trad_cal: 400, // Pan seared with butter/oil
    air_cal: 350,
    trad_min: 15,
    air_min: 10,
    temp: "200",
    tips: {
      es: "Precalienta la freidora 5 minutos para sellar bien la carne.",
      en: "Preheat the airfryer for 5 minutes to sear the meat properly.",
      fr: "Préchauffez la friteuse 5 minutes pour bien saisir la viande.",
      it: "Preriscalda la friggitrice 5 minuti per sigillare bene la carne.",
      de: "Airfryer 5 Minuten vorheizen, um das Fleisch scharf anzubraten.",
    },
  },
  almendras: {
    icono: "🥜",
    nombres: {
      es: "Almendras",
      en: "Almonds",
      fr: "Amandes",
      it: "Mandorle",
      de: "Mandeln",
    },
    trad_cal: 620, // Fried in oil
    air_cal: 580, // Dry roasted (healthier)
    trad_min: 15,
    air_min: 6,
    temp: "160",
    tips: {
      es: "Vigílalas bien, se tuestan en un abrir y cerrar de ojos.",
      en: "Watch them closely, they toast in the blink of an eye.",
      fr: "Surveillez-les bien, elles grillent en un clin d'œil.",
      it: "Controllale bene, si tostano in un batter d'occhio.",
      de: "Gut beobachten, sie rösten blitzschnell.",
    },
  },
  albondigas: {
    icono: "🧆",
    nombres: {
      es: "Albóndigas",
      en: "Meatballs",
      fr: "Boulettes",
      it: "Polpette",
      de: "Fleischbällchen",
    },
    trad_cal: 450, // Pan fried
    air_cal: 300, // Air fried
    trad_min: 25,
    air_min: 12,
    temp: "190",
    tips: {
      es: "Pulveriza aceite para que queden jugosas por dentro.",
      en: "Spray oil so they stay juicy on the inside.",
      fr: "Vaporisez de l'huile pour qu'elles restent juteuses à l'intérieur.",
      it: "Spruzza olio per farle rimanere succose all'interno.",
      de: "Mit Öl besprühen, damit sie innen saftig bleiben.",
    },
  },
  esparragos: {
    icono: "🌿",
    nombres: {
      es: "Espárragos",
      en: "Asparagus",
      fr: "Asperges",
      it: "Asparagi",
      de: "Spargel",
    },
    trad_cal: 80, // Roasted oil
    air_cal: 50, // Less oil
    trad_min: 20,
    air_min: 8,
    temp: "190",
    tips: {
      es: "Corta la base dura y añade sal gorda al final.",
      en: "Cut the hard base and add coarse salt at the end.",
      fr: "Coupez la base dure et ajoutez du gros sel à la fin.",
      it: "Taglia la base dura e aggiungi sale grosso alla fine.",
      de: "Harte Enden abschneiden und am Ende grobes Salz hinzufügen.",
    },
  },
  pimiento: {
    icono: "🫑",
    nombres: {
      es: "Pimientos",
      en: "Peppers",
      fr: "Poivrons",
      it: "Peperoni",
      de: "Paprika",
    },
    trad_cal: 90,
    air_cal: 60,
    trad_min: 35,
    air_min: 15,
    temp: "180",
    tips: {
      es: "Perfectos para asar. Si los quieres pelar, mételos en una bolsa.",
      en: "Perfect for roasting. If you want to peel them, put them in a bag.",
      fr: "Parfaits pour rôtir. Pour les peler, mettez-les dans un sac.",
      it: "Perfetti per arrostire. Se vuoi pelarli, mettili in un sacchetto.",
      de: "Ideal zum Rösten. Zum Schälen nach dem Garen in eine Tüte legen.",
    },
  },
  pan: {
    icono: "🍞",
    nombres: {
      es: "Tostadas",
      en: "Toast",
      fr: "Toast",
      it: "Toast",
      de: "Toast",
    },
    trad_cal: 180, // Buttered/Skillet toasted
    air_cal: 150, // Dry toasted
    trad_min: 10,
    air_min: 4,
    temp: "200",
    tips: {
      es: "Cuidado, el aire puede mover las rebanadas muy finas.",
      en: "Careful, the air can blow very thin slices around.",
      fr: "Attention, l'air peut déplacer les tranches très fines.",
      it: "Attenzione, l'aria può spostare le fette molto sottili.",
      de: "Vorsicht, der Luftstrom kann sehr dünne Scheiben bewegen.",
    },
  },
  gambas: {
    icono: "🍤",
    nombres: {
      es: "Gambas",
      en: "Prawns",
      fr: "Crevettes",
      it: "Gamberi",
      de: "Garnelen",
    },
    trad_cal: 250, // Pan fried garlic oil
    air_cal: 150,
    trad_min: 12,
    air_min: 6,
    temp: "190",
    tips: {
      es: "Cocción ultra rápida. No te pases de tiempo.",
      en: "Ultra fast cooking. Don't overcook them.",
      fr: "Cuisson ultra rapide. Ne dépassez pas le temps.",
      it: "Cottura ultra rapida. Non superare il tempo.",
      de: "Ultra schnelles Garen. Zeit nicht überschreiten.",
    },
  },
  tofu: {
    icono: "🧊",
    nombres: { es: "Tofu", en: "Tofu", fr: "Tofu", it: "Tofu", de: "Tofu" },
    trad_cal: 180, // Pan fried oil
    air_cal: 120,
    trad_min: 25,
    air_min: 15,
    temp: "190",
    tips: {
      es: "Sécalo muy bien con papel de cocina antes de meterlo.",
      en: "Dry it very well with paper towels before putting it in.",
      fr: "Séchez-le très bien avec du papier absorbant avant de l'insérer.",
      it: "Asciugalo molto bene con carta da cucina prima di inserirlo.",
      de: "Vor dem Garen mit Küchenpapier sehr gut abtrocknen.",
    },
  },
  manzana: {
    icono: "🍎",
    nombres: {
      es: "Manzana",
      en: "Apple",
      fr: "Pomme",
      it: "Mela",
      de: "Apfel",
    },
    trad_cal: 120, // Pan fried with sugar/butter
    air_cal: 80, // Baked/Dehydrated
    trad_min: 30,
    air_min: 15,
    temp: "150",
    tips: {
      es: "Corta láminas casi transparentes para un snack sano.",
      en: "Cut almost transparent slices for a healthy snack.",
      fr: "Coupez des tranches presque transparentes pour un en-cas sain.",
      it: "Taglia fette quasi trasparenti per uno snack sano.",
      de: "Für einen gesunden Snack fast durchsichtige Scheiben schneiden.",
    },
  },
  mazorca: {
    icono: "🌽",
    nombres: { es: "Mazorca", en: "Corn", fr: "Maïs", it: "Mais", de: "Mais" },
    trad_cal: 150, // Boiled/Grilled butter
    air_cal: 130, // Roasted
    trad_min: 25,
    air_min: 12,
    temp: "190",
    tips: {
      es: "Úntala con mantequilla y sal antes de empezar.",
      en: "Spread butter and salt before starting.",
      fr: "Étalez du beurre et du sel avant de commencer.",
      it: "Spalmala con burro e sale prima di iniziare.",
      de: "Vor dem Start mit Butter und Salz einreiben.",
    },
  },
  castanas: {
    icono: "🌰",
    nombres: {
      es: "Castañas",
      en: "Chestnuts",
      fr: "Châtaignes",
      it: "Castagne",
      de: "Kastanien",
    },
    trad_cal: 220, // Traditional roast often uses more fat or sugar
    air_cal: 200, // Dry optimized roast
    trad_min: 40,
    air_min: 15,
    temp: "200",
    tips: {
      es: "Hazles un corte profundo en cruz para que no exploten.",
      en: "Make a deep cross-cut so they don't explode.",
      fr: "Faites une incision profonde en croix pour qu'elles n'explosent pas.",
      it: "Fai un taglio profondo a croce per evitarne l'esplosione.",
      de: "Tief über Kreuz einschneiden, damit sie nicht explodieren.",
    },
  },
  bizcocho: {
    icono: "🍰",
    nombres: {
      es: "Bizcocho",
      en: "Cake",
      fr: "Gâteau",
      it: "Torta",
      de: "Kuchen",
    },
    trad_cal: 400, // Oven baked (often larger portions/different crust)
    air_cal: 350, // Airfryer baked (often lighter texture/smaller)
    trad_min: 45,
    air_min: 25,
    temp: "160",
    tips: {
      es: "Usa un molde adecuado y deja espacio para que suba.",
      en: "Use a suitable mold and leave space for it to rise.",
      fr: "Utilisez un moule adapté et laissez de l'espace pour qu'il lève.",
      it: "Usa uno stampo adatto e lascia spazio per la lievitazione.",
      de: "Verwenden Sie eine passende Form und lassen Sie Platz zum Aufgehen.",
    },
  },
  salchichas: {
    icono: "🌭",
    nombres: {
      es: "Salchichas",
      en: "Sausages",
      fr: "Saucisses",
      it: "Salsicce",
      de: "Würstchen",
    },
    trad_cal: 300,
    air_cal: 240, // Drains fat significantly more than a pan
    trad_min: 15,
    air_min: 8,
    temp: "180",
    tips: {
      es: "Pínchalas con un tenedor para que suelten la grasa.",
      en: "Prick them with a fork to release the fat.",
      fr: "Piquez-les avec une fourchette pour libérer la graisse.",
      it: "Punzecchiale con una forchetta per far uscire il grasso.",
      de: "Mit einer Gabel einstechen, damit das Fett austreten kann.",
    },
  },
  donuts: {
    icono: "🍩",
    nombres: {
      es: "Donuts",
      en: "Donuts",
      fr: "Donuts",
      it: "Donuts",
      de: "Donuts",
    },
    trad_cal: 450, // Deep fried
    air_cal: 250, // Air fried
    trad_min: 20, // Deep fry process
    air_min: 8,
    temp: "175",
    tips: {
      es: "Pincela con un poco de leche para un acabado dorado.",
      en: "Brush with a little milk for a golden finish.",
      fr: "Badigeonnez d'un peu de lait pour une finition dorée.",
      it: "Spennella con un po' di latte per una finitura dorata.",
      de: "Für ein goldenes Finish mit etwas Milch bestreichen.",
    },
  },
  berenjena: {
    icono: "🍆",
    nombres: {
      es: "Berenjena",
      en: "Eggplant",
      fr: "Aubergine",
      it: "Melanzana",
      de: "Aubergine",
    },
    trad_cal: 150, // Absorbs LOTS of oil in pan
    air_cal: 50,
    trad_min: 20,
    air_min: 12,
    temp: "190",
    tips: {
      es: "Sálalas 10 min antes para que pierdan el amargor.",
      en: "Salt them 10 min before to remove bitterness.",
      fr: "Salez-les 10 min avant pour enlever l'amertume.",
      it: "Salale 10 minuti prima per togliere l'amaro.",
      de: "10 Min. vorher salzen, um Bitterstoffe zu entziehen.",
    },
  },
  queso: {
    icono: "🧀",
    nombres: {
      es: "Queso",
      en: "Cheese",
      fr: "Fromage",
      it: "Formaggio",
      de: "Käse",
    },
    trad_cal: 320, // Fried Camembert (sits in fat)
    air_cal: 280, // Air fried (drains fat)
    trad_min: 15,
    air_min: 8,
    temp: "180",
    tips: {
      es: "Ideal para dipear. Hazle unos cortes arriba.",
      en: "Ideal for dipping. Make some cuts on top.",
      fr: "Idéal pour tremper. Faites quelques entailles sur le dessus.",
      it: "Ideale per intingere. Fai dei tagli sulla parte superiore.",
      de: "Ideal zum Dippen. Oben kreuzweise einschneiden.",
    },
  },
  champis: {
    icono: "🍄",
    nombres: {
      es: "Champiñones",
      en: "Mushrooms",
      fr: "Champignons",
      it: "Funghi",
      de: "Pilze",
    },
    trad_cal: 80, // Sautéed oil
    air_cal: 40,
    trad_min: 15,
    air_min: 8,
    temp: "180",
    tips: {
      es: "Rellénalos con ajo y perejil para un sabor explosivo.",
      en: "Stuff them with garlic and parsley for explosive flavor.",
      fr: "Garnissez-les d'ail et de persil pour une saveur explosive.",
      it: "Farciteli con aglio e prezzemolo per un sapore esplosivo.",
      de: "Mit Knoblauch und Petersilie füllen für explosiven Geschmack.",
    },
  },
};

const DEVICE_NAMES = {
  es: { horno: "HORNO", airfryer: "AIRFRYER", temp: "TEMP" },
  en: { horno: "OVEN", airfryer: "AIR FRYER", temp: "TEMP" },
  fr: { horno: "FOUR", airfryer: "FRITEUSE", temp: "TEMP" },
  it: { horno: "FORNO", airfryer: "FRIGGITRICE", temp: "TEMP" },
  de: { horno: "OFEN", airfryer: "HEISSLUFTFRITTEUSE", temp: "TEMP" },
};

const POWER_DATA = {
  // Average Watts
  oven: 3000,
  airfryer: 1500
};
