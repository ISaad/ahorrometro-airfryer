let currentLang = "en";
let currentCurrency = "€";

const currencies = { es: "€", fr: "€", it: "€", de: "€", gb: "£", us: "$" };

const i18n = {
  es: {
    hero: "Cocina mejor, <span class='text-orange-500'>ahorra dinero.</span>",
    elec: "Ahorro Eléctrico vs Horno",
    today: "Hoy",
    annual: "Ahorro Anual Estimado",
    share_m: "Compartir Ahorro",
    health: "Ahorro Salud",
    exercise: "Equivale a ejercicio por",
    share_h: "Presumir de Salud",
    guide: "Guía Maestra de Tiempos",
    faq: "Preguntas Frecuentes",
    seo_t: "¿Por qué la freidora es la mejor inversión?",
    min_at: "MINUTOS A",
    nav_c: "Calculadora",
    nav_g: "Guía",
    nav_f: "FAQ",
    p1: "Utilizar una airfryer no es solo una moda; es la decisión financiera más inteligente para tu hogar en 2026. Con los precios de la electricidad disparados, cocinar en un 50% menos de tiempo que un horno se traduce en dinero real en tu bolsillo. Esta calculadora avanzada usa algoritmos de consumo real para demostrarte lo que ahorras cada día.",
    p2: "Además del ahorro económico, el impacto en tu salud al reducir hasta un 80% las grasas saturadas es un ahorro a largo plazo en bienestar físico. Cocinar con aire es la forma más eficiente de comer sano sin renunciar al sabor crujiente que tanto nos gusta, optimizando cada vatio de energía.",
    msg_m:
      "¡He ahorrado hoy {X}€ cocinando {F} con mi Airfryer! Mira cuánto puedes ahorrar tú en:",
    msg_h:
      "¡He quemado {X} kcal menos cocinando {F}! Equivale a {Y} min de carrera. ¡Pásate al aire!",
    f_legal: "Aviso Legal",
    f_priv: "Privacidad",
    f_cook: "Cookies",
  },
  en: {
    hero: "Cook better, <span class='text-orange-500'>save money.</span>",
    elec: "Electricity vs Oven",
    today: "Today",
    annual: "Annual Savings",
    share_m: "Share Savings",
    health: "Health Savings",
    exercise: "Equivalent to",
    share_h: "Share Health",
    guide: "Master Guide",
    faq: "FAQ",
    seo_t: "Why Airfryers in 2026?",
    min_at: "MINUTES AT",
    nav_c: "Calculator",
    nav_g: "Guide",
    nav_f: "FAQ",
    p1: "Using an airfryer is not just a trend; it's the smartest financial decision for your home in 2026. With electricity prices soaring, cooking in 50% less time translates to real money in your pocket. This advanced calculator uses real consumption algorithms to show your daily savings.",
    p2: "Beyond financial savings, reducing saturated fats by up to 80% is a long-term investment in your physical well-being. Air cooking is the most efficient way to eat healthy without sacrificing the crunch we all love, optimizing every watt of energy.",
    msg_m: "Saved {X}€ cooking {F} today! Check your savings here:",
    msg_h: "Cut {X} kcal cooking {F}! Like running for {Y} min. Go Airfryer!",
    f_legal: "Legal Notice",
    f_priv: "Privacy",
    f_cook: "Cookies",
  },
  fr: {
    hero: "Cuisinez mieux, <span class='text-orange-500'>économisez.</span>",
    elec: "Économie Électricité",
    today: "Aujourd'hui",
    annual: "Économie Annuelle",
    share_m: "Partager",
    health: "Santé",
    exercise: "Sport équivalent",
    share_h: "Partager Santé",
    guide: "Guide des Temps",
    faq: "FAQ",
    seo_t: "Pourquoi l'airfryer?",
    min_at: "MINUTES À",
    nav_c: "Calculatrice",
    nav_g: "Guide",
    nav_f: "FAQ",
    p1: "L'airfryer est le choix financier le plus intelligent en 2026. Cuisiner deux fois plus vite signifie des factures d'électricité réduites. Ce calculateur utilise des algorithmes de consommation réelle pour prouver vos économies quotidiennes.",
    p2: "Économisez de l'argent et gagnez en santé en réduisant les graisses saturées de 80%. C'est l'efficacité pure pour votre maison sans sacrifier le goût croustillant.",
    msg_m: "J'ai économisé {X}€ avec {F}!",
    msg_h: "Moins {X} kcal avec {F}!",
    f_legal: "Mentions Légales",
    f_priv: "Confidentialité",
    f_cook: "Cookies",
  },
  it: {
    hero: "Cucina meglio, <span class='text-orange-500'>risparmia.</span>",
    elec: "Risparmio Elettrico",
    today: "Oggi",
    annual: "Risparmio Annuo",
    share_m: "Condividi",
    health: "Salute",
    exercise: "Esercizio equivalente",
    share_h: "Condividi Salute",
    guide: "Guida Tempi",
    faq: "FAQ",
    seo_t: "Perché l'airfryer?",
    min_at: "MINUTI A",
    nav_c: "Calcolatrice",
    nav_g: "Guida",
    nav_f: "FAQ",
    p1: "L'airfryer è la mossa finanziaria più intelligente del 2026. Cucinare in metà tempo significa bollette più basse. Questo calcolatore avanzato ti mostra quanto risparmi ogni giorno.",
    p2: "Risparmia denaro e guadagna salute riducendo i grassi saturi dell'80%. Efficienza pura per la tua casa senza rinunciare alla croccantezza.",
    msg_m: "Ho risparmiato {X}€ con {F}!",
    msg_h: "Meno {X} kcal con {F}!",
    f_legal: "Note Legali",
    f_priv: "Privacy",
    f_cook: "Cookies",
  },
  de: {
    hero: "Besser kochen, <span class='text-orange-500'>sparen.</span>",
    elec: "Stromersparnis",
    today: "Heute",
    annual: "Jahresersparnis",
    share_m: "Teilen",
    health: "Gesundheit",
    exercise: "Sport Äquivalent",
    share_h: "Teilen",
    guide: "Zeitanleitung",
    faq: "FAQ",
    seo_t: "Warum Airfryer?",
    min_at: "MINUTEN BEI",
    nav_c: "Rechner",
    nav_g: "Anleitung",
    nav_f: "FAQ",
    p1: "Airfryers sind 2026 die klügste finanzielle Entscheidung. Schnelleres Kochen bedeutet niedrigere Rechnungen. Dieser Rechner zeigt Ihre täglichen Einsparungen präzise an.",
    p2: "Sparen Sie Geld und bleiben Sie gesund, indem Sie gesättigte Fette um 80% reduzieren. Reine Effizienz für Ihr Zuhause ohne Geschmacksverlust.",
    msg_m: "Habe {X}€ gespart mit {F}!",
    msg_h: "{X} kcal weniger mit {F}!",
    f_legal: "Impressum",
    f_priv: "Datenschutz",
    f_cook: "Cookies",
  },
};

const faqData = {
  es: [
    {
      q: "¿Consume menos que un horno?",
      a: "Absolutamente. Al calentar un espacio mucho más pequeño (3-5 litros frente a 60 litros del horno) y hacerlo circular rápidamente, reduces el tiempo de cocción a la mitad, ahorrando entre un 40% y un 60% en tu factura.",
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
      a: "Absolutely. By heating a much smaller space (3-5 liters vs. 60 liters in an oven) and circulating air rapidly, you cut cooking time in half, saving between 40% and 60% on your electricity bill.",
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
      a: "Absolument. En chauffant un espace beaucoup plus petit (3-5 litres contre 60 pour un four) et en faisant circuler l'air rapidement, vous réduisez le temps de cuisson de moitié, économisant 40 à 60% sur votre facture.",
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
      a: "Assolutamente. Riscaldando uno spazio molto più piccolo (3-5 litri contro 60) e facendo circolare l'aria rapidamente, riduci i tempi di cottura a metà, risparmiando tra il 40% e il 60% in bolletta.",
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
      a: "Absolut. Da ein viel kleinerer Raum (3-5 Liter vs. 60 Liter) erhitzt wird und die Luft schnell zirkuliert, halbieren Sie die Kochzeit und sparen 40% bis 60% Ihrer Stromrechnung.",
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

const foodData = {
  patatas: {
    icono: "🍟",
    nombres: {
      es: "Patatas Fritas",
      en: "French Fries",
      fr: "Frites",
      it: "Patatine",
      de: "Pommes",
    },
    trad: 450,
    air: 15,
    temp: "200°C",
    tiempo: "20",
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
    trad: 180,
    air: 5,
    temp: "195°C",
    tiempo: "22",
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
    trad: 120,
    air: 0,
    temp: "180°C",
    tiempo: "12",
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
    trad: 400,
    air: 10,
    temp: "200°C",
    tiempo: "10",
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
    trad: 80,
    air: 0,
    temp: "180°C",
    tiempo: "4",
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
    trad: 150,
    air: 0,
    temp: "190°C",
    tiempo: "8",
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
    trad: 50,
    air: 5,
    temp: "185°C",
    tiempo: "8",
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
    trad: 350,
    air: 10,
    temp: "200°C",
    tiempo: "12",
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
    trad: 200,
    air: 10,
    temp: "200°C",
    tiempo: "10",
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
    trad: 100,
    air: 0,
    temp: "160°C",
    tiempo: "8",
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
    trad: 180,
    air: 15,
    temp: "190°C",
    tiempo: "12",
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
    trad: 40,
    air: 5,
    temp: "190°C",
    tiempo: "8",
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
    trad: 40,
    air: 5,
    temp: "180°C",
    tiempo: "15",
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
    trad: 30,
    air: 0,
    temp: "200°C",
    tiempo: "4",
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
    trad: 100,
    air: 5,
    temp: "190°C",
    tiempo: "6",
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
    trad: 120,
    air: 5,
    temp: "190°C",
    tiempo: "15",
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
    trad: 60,
    air: 0,
    temp: "150°C",
    tiempo: "15",
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
    trad: 150,
    air: 10,
    temp: "190°C",
    tiempo: "12",
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
    trad: 180,
    air: 0,
    temp: "200°C",
    tiempo: "15",
    tips: {
      es: "Hazles un corte profundo en cruz para que no exploten.",
      en: "Make a deep cross-cut so they don't explode.",
      fr: "Faites une incision profonde en croix pour qu'elles n'explosent pas.",
      it: "Fai un taglio profondo a croce per evitare che esplodano.",
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
    trad: 300,
    air: 5,
    temp: "160°C",
    tiempo: "25",
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
    trad: 250,
    air: 10,
    temp: "180°C",
    tiempo: "10",
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
    trad: 400,
    air: 15,
    temp: "175°C",
    tiempo: "8",
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
    trad: 80,
    air: 5,
    temp: "190°C",
    tiempo: "15",
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
    trad: 250,
    air: 0,
    temp: "180°C",
    tiempo: "10",
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
    trad: 40,
    air: 5,
    temp: "180°C",
    tiempo: "10",
    tips: {
      es: "Rellénalos con ajo y perejil para un sabor explosivo.",
      en: "Stuff them with garlic and parsley for explosive flavor.",
      fr: "Garnissez-les d'ail et de persil pour une saveur explosive.",
      it: "Riempili con aglio e prezzemolo per un sapore esplosivo.",
      de: "Mit Knoblauch und Petersilie füllen für tollen Geschmack.",
    },
  },
};

const legalTexts = {
  es: {
    legal:
      "Aviso Legal 2026: El uso de esta calculadora es meramente informativo. Los cálculos de ahorro eléctrico y calórico son estimaciones basadas en promedios de consumo y no garantizan resultados exactos. Airfryer Saver no se hace responsable del mal uso de los electrodomésticos.",
    privacidad:
      "Política de Privacidad: En Airfryer Saver respetamos tu anonimato. No almacenamos datos personales, ni correos, ni direcciones IP. Los ajustes de idioma se guardan localmente en tu navegador para mejorar tu experiencia.",
    cookies:
      "Política de Cookies: Utilizamos cookies técnicas esenciales para el funcionamiento del sitio y para recordar tu preferencia de idioma. No utilizamos cookies de rastreo ni publicitarias de terceros.",
  },
  en: {
    legal:
      "Legal Notice 2026: This calculator is for informational purposes only. Electricity and calorie savings are estimates based on average consumption and do not guarantee exact results. Airfryer Saver is not liable for any appliance misuse.",
    privacidad:
      "Privacy Policy: At Airfryer Saver, we respect your anonymity. We do not store personal data, emails, or IP addresses. Language settings are stored locally in your browser to enhance your experience.",
    cookies:
      "Cookie Policy: We use essential technical cookies for the website to function and to remember your language preference. No tracking or third-party advertising cookies are used.",
  },
  fr: {
    legal:
      "Mentions Légales 2026 : Cette calculatrice est fournie à titre informatif. Les économies d'énergie et de calories sont des estimations et ne garantissent pas de résultats exacts.",
    privacidad:
      "Confidentialité : Nous ne stockons aucune donnée personnelle, e-mail ou adresse IP. Vos préférences sont enregistrées localement dans votre navigateur.",
    cookies:
      "Cookies : Nous utilisons uniquement des cookies techniques essentiels au fonctionnement du site.",
  },
  it: {
    legal:
      "Note Legali 2026: Questo calcolatore ha scopo puramente informativo. I risparmi energetici e calorici sono stime basate su medie e non garantiscono risultati esatti.",
    privacidad:
      "Privacy: Non memorizziamo dati personali, e-mail o indirizzi IP. Le impostazioni della lingua sono salvate localmente nel browser.",
    cookies:
      "Cookie: Utilizziamo solo cookie tecnici essenziali per il funzionamento del sito.",
  },
  de: {
    legal:
      "Impressum 2026: Dieser Rechner dient nur zu Informationszwecken. Die Strom- und Kalorienersparnisse sind Schätzungen und garantieren keine exakten Ergebnisse.",
    privacidad:
      "Datenschutz: Wir speichern keine persönlichen Daten, E-Mails oder IP-Adressen. Spracheinstellungen werden lokal in Ihrem Browser gespeichert.",
    cookies:
      "Cookies: Wir verwenden nur technisch notwendige Cookies für den Betrieb der Website.",
  },
};

function changeLanguage(lang) {
  currentLang = lang; // Actualizamos la variable global
  const t = i18n[lang] || i18n["en"];

  // Títulos y Textos principales
  document.getElementById("hero-title").innerHTML = t.hero;
  document.getElementById("label-elec").innerText = t.elec;
  document.getElementById("label-today").innerText = t.today;
  document.getElementById("label-annual").innerText = t.annual;
  document.getElementById("label-health").innerText = t.health;
  document.getElementById("label-exercise").innerText = t.exercise;
  document.getElementById("btn-share-money").innerText = t.share_m;
  document.getElementById("btn-share-health").innerText = t.share_h;
  document.getElementById("guide-title").innerText = t.guide;
  document.getElementById("faq-title").innerText = t.faq;
  document.getElementById("seo-title").innerText = t.seo_t;
  document.getElementById("seo-p1").innerText = t.p1;
  document.getElementById("seo-p2").innerText = t.p2;

  // Traducción del menú de cabecera (Nav)
  document.getElementById("nav-calc").innerText = t.nav_c;
  document.getElementById("nav-guide").innerText = t.nav_g;
  document.getElementById("nav-faq").innerText = t.nav_f;

  // Traducción de los botones del Footer (Los que te daban guerra)
  document.getElementById("btn-f-legal").innerText = t.f_legal;
  document.getElementById("btn-f-priv").innerText = t.f_priv;
  document.getElementById("btn-f-cook").innerText = t.f_cook;

  // Actualizar Selector de Alimentos (El desplegable de la calculadora)
  const sel = document.getElementById("alimento-principal");
  sel.innerHTML = Object.keys(foodData)
    .map(
      (k) =>
        `<option value="${k}">${foodData[k].icono} ${
          foodData[k].nombres[lang] || foodData[k].nombres["es"]
        }</option>`
    )
    .join("");

  // Actualizar Guía Visual (Las tarjetitas de abajo)
  document.getElementById("guia-full").innerHTML = Object.keys(foodData)
    .map(
      (k) => `
        <div onclick="seleccionarGuia('${k}')" class="p-4 bg-white rounded-3xl text-center border border-slate-100 hover:border-orange-400 transition-all cursor-pointer shadow-sm">
            <p class="text-2xl mb-2">${foodData[k].icono}</p>
            <p class="text-[9px] font-black text-slate-400 uppercase mb-2">${
              foodData[k].nombres[lang] || foodData[k].nombres["es"]
            }</p>
            <p class="text-[10px] font-bold text-slate-800">${
              foodData[k].tiempo
            }' - ${foodData[k].temp}</p>
        </div>`
    )
    .join("");

  // Actualizar FAQ
  const fData = faqData[lang] || faqData["es"];
  document.getElementById("faq-container").innerHTML = fData
    .map(
      (f) => `
        <details class="group p-4 border-b border-slate-100 cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-slate-700">${f.q}<i data-lucide="plus" class="w-5 h-5 text-orange-500 group-open:rotate-45 transition-transform"></i></summary>
            <p class="mt-4 text-slate-500 text-sm italic leading-relaxed">${f.a}</p>
        </details>`
    )
    .join("");

  actualizarTodo();
  if (window.lucide) lucide.createIcons();

  // Inyectar artículos SEO
  const articles = articlesData[lang] || articlesData["es"];
  const container = document.getElementById("articles-section");
  if (container) {
    container.innerHTML = articles
      .map(
        (art) => `
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 class="text-lg font-black text-slate-800 mb-3">${art.t}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">${art.p}</p>
            </div>
        `
      )
      .join("");
  }
}

function actualizarTodo() {
  // 1. Pillamos el precio de la luz (con paracaídas por si el input no existe)
  const inputElec = document.getElementById("elec-price");
  const elecPrice = inputElec ? parseFloat(inputElec.value) || 0.2 : 0.2;

  // 2. Pillamos el alimento seleccionado
  const select = document.getElementById("alimento-principal");
  if (!select || !select.value) return;

  const foodKey = select.value;
  const food = foodData[foodKey];
  if (!food) return;

  // 3. CONVERSIÓN FORZADA A NÚMERO (Aquí está la magia, cabronazo)
  // Usamos tus nombres originales: 'trad' para horno y 'tiempo' para airfryer
  let tiempoHorno = parseFloat(food.trad) || 0;
  // Si el tiempo es mayor de 120 min, asumimos que es un error y dividimos por 10
  if (tiempoHorno > 120) tiempoHorno = tiempoHorno / 10;

  let tiempoAir = parseFloat(food.tiempo) || 0;
  const ahorroGrasa = parseFloat(food.air) || 0;

  // 4. CÁLCULOS REALISTAS
  // Un horno gasta unos 2.2kW pero el termostato solo actúa el 60% del tiempo
  const consumoHorno = 2.2 * (tiempoHorno / 60) * 0.6;
  // Una Airfryer gasta 1.5kW y el termostato actúa el 70% del tiempo
  const consumoAir = 1.5 * (tiempoAir / 60) * 0.7;

  const costoHorno = consumoHorno * elecPrice;
  const costoAir = consumoAir * elecPrice;

  const ahorroHoy = Math.max(0, costoHorno - costoAir);

  // Estimación: 2 veces por semana (104 veces al año)
  // Antes tenías 52 * 3 = 156 veces, por eso salía tan alto
  const ahorroAnual = ahorroHoy * 104;

  // Calculamos ahorro calórico: 1g aceite = 9kcal.
  // Estimamos que en horno/sartén se usan 15g más que en airfryer.
  const ahorroCal = ahorroGrasa * 9 + 100;

  // 5. INYECCIÓN EN EL HTML (Asegurando IDs)
  const hHoy = document.getElementById("ahorro-hoy-text");
  const hAno = document.getElementById("ahorro-ano-text");
  const hCal = document.getElementById("calorias-text");
  const hEjer = document.getElementById("ejercicio-text");

  if (hHoy) hHoy.innerText = ahorroHoy.toFixed(2) + currentCurrency;
  if (hAno) hAno.innerText = ahorroAnual.toFixed(0) + currentCurrency;
  if (hCal) hCal.innerText = "-" + Math.round(ahorroCal);
  if (hEjer) hEjer.innerText = Math.round(ahorroCal / 8) + " min";

  // 6. ACTUALIZAR EL CONSEJO (TIP)
  const tituloTip = document.getElementById("nombre-comida-truco");
  const textoTip = document.getElementById("tip-texto");

  if (food) {
    // 1. Ponemos el nombre del alimento en el título naranja (quitando el ---)
    if (tituloTip) {
      const nombreAlimento = food.nombres[currentLang] || food.nombres["es"];
      tituloTip.innerText = nombreAlimento;
    }

    // 2. Ponemos el consejo real en el párrafo de abajo
    if (textoTip) {
      const consejo = food.tips[currentLang] || food.tips["es"] || "¡Disfruta!";
      textoTip.innerText = `"${consejo}"`; // Le pongo comillas para que quede más pro
    }
  }
}

function compartir(tipo) {
  const lang = currentLang;
  const t = i18n[lang] || i18n["es"];
  const key = document.getElementById("alimento-principal").value;
  const f = foodData[key].nombres[lang] || foodData[key].nombres["es"];

  // Limpiamos el dinero (quitando €) y las calorías (quitando el menos)
  let valX =
    tipo === "dinero"
      ? document
          .getElementById("ahorro-hoy-text")
          .innerText.replace("€", "")
          .trim()
      : document
          .getElementById("calorias-text")
          .innerText.replace("-", "")
          .trim();

  const valY = document
    .getElementById("ejercicio-text")
    .innerText.split(" ")[0];

  let msg =
    tipo === "dinero"
      ? t.msg_m.replace("{X}", valX).replace("{F}", f)
      : t.msg_h.replace("{X}", valX).replace("{F}", f).replace("{Y}", valY);

  window.open(
    `https://wa.me/?text=${encodeURIComponent(
      msg + " " + window.location.href
    )}`,
    "_blank"
  );
}

function seleccionarGuia(k) {
  document.getElementById("alimento-principal").value = k;
  actualizarTodo();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLegal(t) {
  // Usamos la variable global currentLang que es la que manda ahora
  const lang = currentLang;
  const texts = legalTexts[lang] || legalTexts["es"];

  // Títulos traducidos según el tipo (legal, privacidad o cookies)
  const titles = {
    es: {
      legal: "Aviso Legal",
      privacidad: "Privacidad",
      cookies: "Política de Cookies",
    },
    en: {
      legal: "Legal Notice",
      privacidad: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    fr: {
      legal: "Mentions Légales",
      privacidad: "Confidentialité",
      cookies: "Cookies",
    },
    it: { legal: "Note Legali", privacidad: "Privacy", cookies: "Cookies" },
    de: { legal: "Impressum", privacidad: "Datenschutz", cookies: "Cookies" },
  };

  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalContainer = document.getElementById("modal-container");

  if (modalTitle && modalBody && modalContainer) {
    modalTitle.innerText = titles[lang][t] || titles["es"][t];
    modalBody.innerText = texts[t];
    modalContainer.classList.remove("hidden");
  }
}

function closeLegal() {
  document.getElementById("modal-container").classList.add("hidden");
}

function toggleLangMenu() {
  document.getElementById("lang-options").classList.toggle("hidden");
}

window.onclick = function (event) {
  if (!event.target.closest("#custom-select-container")) {
    const menu = document.getElementById("lang-options");
    if (menu) menu.classList.add("hidden");
  }
};

function selectLang(lang, countryCode) {
  // 1. Guardamos el idioma y la moneda
  currentLang = lang;
  currentCurrency = currencies[countryCode] || "€";

  // 2. Cerramos el menú
  const options = document.getElementById("lang-options");
  if (options) options.classList.add("hidden");

  // 3. Actualizamos el botón principal de forma manual y segura
  // Creamos un mapeo rápido de nombres para no liarla con el DOM
  const names = {
    es: "Español",
    us: "English",
    gb: "English",
    fr: "Français",
    it: "Italiano",
    de: "Deutsch",
  };
  const langName = names[countryCode] || "Español";

  const langSelected = document.getElementById("lang-selected");
  if (langSelected) {
    langSelected.innerHTML = `
            <img src="https://flagcdn.com/w20/${countryCode}.png" width="20"> ${langName}
        `;
  }

  // 4. Cambiamos los textos y recalculamos
  changeLanguage(lang);
}

// Cerrar el menú si haces clic fuera
window.onclick = function (event) {
  if (!event.target.closest("#custom-select-container")) {
    document.getElementById("lang-options").classList.add("hidden");
  }
};

// Al cargar la ventana, detectamos el idioma del "cliente"
window.onload = function () {
  let browserLang = (navigator.language || navigator.userLanguage)
    .substring(0, 2)
    .toLowerCase();
  const supportedLangs = ["es", "en", "fr", "it", "de"];
  const targetLang = supportedLangs.includes(browserLang) ? browserLang : "en";

  const initialCountry = { es: "es", en: "us", fr: "fr", it: "it", de: "de" };

  // Iniciamos la web
  selectLang(targetLang, initialCountry[targetLang]);

  setTimeout(() => {
    actualizarTodo();
  }, 100);
};
