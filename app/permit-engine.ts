export type Lang = "en" | "de" | "fr" | "it" | "rm";
export type Answers = Record<string, string>;

export const languages: Array<{ code: Lang; label: string; name: string }> = [
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "rm", label: "RM", name: "Rumantsch" },
];

const authorityDirectory = "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html";

export const cantons = [
  ["AG", "Aargau", "https://www.ag.ch/de/themen/migration-integration"],
  ["AI", "Appenzell Innerrhoden", "https://www.ai.ch/themen/auslaender/migration"],
  ["AR", "Appenzell Ausserrhoden", "https://ar.ch/verwaltung/departement-inneres-und-sicherheit/amt-fuer-inneres/"],
  ["BE", "Bern / Berne", "https://www.migration.sid.be.ch/de/start.html"],
  ["BL", "Basel-Landschaft", "https://www.baselland.ch/politik-und-behorden/direktionen/sicherheitsdirektion/amt_fuer_migration"],
  ["BS", "Basel-Stadt", "https://www.bs.ch/jsd/bdm"],
  ["FR", "Fribourg / Freiburg", "https://www.fr.ch/dsjs/spomi"],
  ["GE", "Genève", "https://www.ge.ch/organisation/office-cantonal-population-migrations-ocpm"],
  ["GL", "Glarus", "https://www.gl.ch/verwaltung/sicherheit-und-justiz/justiz/migration.html/1215"],
  ["GR", "Graubünden / Grigioni", "https://www.gr.ch/DE/institutionen/verwaltung/djsg/afm"],
  ["JU", "Jura", "https://www.jura.ch/fr/Autorites/Administration/DSJP/SPOP/Service-de-la-population-SPOP.html"],
  ["LU", "Luzern", "https://migration.lu.ch/"],
  ["NE", "Neuchâtel", "https://www.ne.ch/autorites/decs/smig"],
  ["NW", "Nidwalden", "https://www.nw.ch/migration/1146"],
  ["OW", "Obwalden", "https://www.ow.ch/fachbereiche/1822"],
  ["SG", "St. Gallen", "https://www.sg.ch/politik-verwaltung/departemente-und-staatskanzlei/sicherheits--und-justizdepartement/migrationsamt.html"],
  ["SH", "Schaffhausen", "https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Departement-des-Innern/Migrationsamt-und-Passb-ro-3454-DE.html"],
  ["SO", "Solothurn", "https://so.ch/verwaltung/departement-des-innern/migrationsamt/"],
  ["SZ", "Schwyz", "https://www.sz.ch/behoerden/verwaltung/volkswirtschaftsdepartement/amt-fuer-migration.html/8756-8758-8802-10373-10961"],
  ["TG", "Thurgau", "https://migrationsamt.tg.ch/"],
  ["TI", "Ticino", "https://www.ti.ch/popolazione"],
  ["UR", "Uri", "https://www.ur.ch/arbeit/6424"],
  ["VD", "Vaud", "https://www.vd.ch/deiep/spop"],
  ["VS", "Valais / Wallis", "https://www.vs.ch/web/spm"],
  ["ZG", "Zug", "https://zg.ch/de/sicherheitsdirektion/amt-fuer-migration"],
  ["ZH", "Zürich", "https://www.zh.ch/de/sicherheitsdirektion/migrationsamt.html"],
] as const;

export const ui = {
  en: {
    home: "Home", how: "How it works", sources: "Official sources", about: "About", history: "Changes", legal: "Legal", permits: "Permit letters", verified: "Last rules review 22 Aug 2026",
    skipToContent: "Skip to content", primaryNav: "Primary navigation", language: "Language", menu: "Menu", opensNewTab: "opens in a new tab",
    theme: "Appearance", themeAuto: "Auto", themeLight: "Light", themeDark: "Dark",
    eyebrow: "Swiss work & residence permits", titleA: "Your route into Switzerland,", titleB: "without the maze.",
    intro: "Answer a few plain-language questions. Get the likely permit route, who files what, and the official forms for your canton.",
    start: "Find my route", employerStart: "I’m hiring someone", time: "Takes about 3 minutes", privacy: "No login · answers are not sent to us",
    routeLabel: "A route, not just a permit letter", routeTitle: "We separate the four decisions that matter",
    layers: [["Entry", "Visa or entry authorisation"], ["Work", "Permission or notification"], ["Residence", "L, B, G or another status"], ["Arrival", "Registration, insurance and timing"]],
    official: "Built from official federal and cantonal guidance", notAdvice: "Guidance, not a binding authority decision",
    back: "Back", next: "Continue", result: "See my route", step: "Step", of: "of", select: "Select one", selectCanton: "Choose the canton where the work will take place",
    resultEyebrow: "Your likely route", confidence: "Source-backed guidance", resultIntro: "Based on the answers you gave. The canton remains the deciding authority.",
    responsibilities: "Your action plan", paperwork: "Paperwork to prepare", officialLinks: "Official starting points", officialPages: "Official pages", path: "Your path", cantonOffice: "Your cantonal authority",
    applicant: "Applicant", employer: "Employer", both: "Applicant + employer", authority: "Authority", open: "Open official page", print: "Print summary", share: "Copy link", copied: "Copied", change: "Change answers", restart: "Start again",
    why: "Why this route", visaLayer: "Entry and visa layer", familyLayer: "Bringing family", quotaLayer: "Quotas", recognitionLayer: "Qualification recognition", reviewed: "Information last reviewed 22 August 2026",
    disclaimerTitle: "Before you rely on this", disclaimer: "This is private, best-effort work, not a Swiss government service. It organises official information; it does not issue a permit, is not legal advice, and does not replace the competent canton or a qualified advisor. Rules, forms and quotas can change.",
    noData: "Answers stay in this browser and are not uploaded. A copied result link contains the answers.", sourceMethod: "Federal rules first, canton-specific filing second.",
    notLegalAdvice: "This is not legal, tax or immigration advice.",
    notAffiliated: "Not affiliated with SEM, the Confederation or any canton.",
    shareWarn: "The link includes your answers. Anyone who opens it can see them.",
    shareConfirm: "Copy anyway",
    mismatchTitle: "This link named another route",
    mismatchBody: "Today’s navigator shows the route that matches these answers. Confirm with the canton before you rely on either version.",
    actionCaveat: "Typical steps from official guidance — confirm timing and forms with the canton.",
  },
  de: {
    home: "Start", how: "So funktioniert’s", sources: "Offizielle Quellen", about: "Über uns", history: "Änderungen", legal: "Rechtliches", permits: "Bewilligungsbuchstaben", verified: "Letzte Regelprüfung 22. Aug. 2026",
    skipToContent: "Zum Inhalt springen", primaryNav: "Hauptnavigation", language: "Sprache", menu: "Menü", opensNewTab: "öffnet in einem neuen Tab",
    theme: "Darstellung", themeAuto: "Auto", themeLight: "Hell", themeDark: "Dunkel",
    eyebrow: "Schweizer Arbeits- & Aufenthaltsbewilligungen", titleA: "Dein Weg in die Schweiz,", titleB: "ohne Behördendschungel.",
    intro: "Beantworte einige einfache Fragen. Du erhältst den voraussichtlichen Bewilligungsweg, Zuständigkeiten und offizielle Formulare für deinen Kanton.",
    start: "Meinen Weg finden", employerStart: "Ich stelle jemanden ein", time: "Dauert etwa 3 Minuten", privacy: "Kein Login · Antworten werden nicht an uns gesendet",
    routeLabel: "Ein ganzer Weg, nicht nur ein Buchstabe", routeTitle: "Wir trennen die vier entscheidenden Fragen",
    layers: [["Einreise", "Visum oder Einreisebewilligung"], ["Arbeit", "Bewilligung oder Meldung"], ["Aufenthalt", "L, B, G oder anderer Status"], ["Ankunft", "Anmeldung, Versicherung und Fristen"]],
    official: "Auf Basis offizieller Informationen von Bund und Kantonen", notAdvice: "Orientierung, kein verbindlicher Behördenentscheid",
    back: "Zurück", next: "Weiter", result: "Meinen Weg anzeigen", step: "Schritt", of: "von", select: "Bitte wählen", selectCanton: "Kanton des Arbeitsortes wählen",
    resultEyebrow: "Dein voraussichtlicher Weg", confidence: "Quellenbasierte Orientierung", resultIntro: "Auf Grundlage deiner Antworten. Die zuständige kantonale Behörde entscheidet.",
    responsibilities: "Dein Aktionsplan", paperwork: "Unterlagen vorbereiten", officialLinks: "Offizielle Startpunkte", officialPages: "Offizielle Seiten", path: "Dein Weg", cantonOffice: "Zuständige kantonale Behörde",
    applicant: "Antragstellende Person", employer: "Arbeitgeber", both: "Person + Arbeitgeber", authority: "Behörde", open: "Offizielle Seite öffnen", print: "Zusammenfassung drucken", share: "Link kopieren", copied: "Kopiert", change: "Antworten ändern", restart: "Neu starten",
    why: "Warum dieser Weg", visaLayer: "Einreise und Visum", familyLayer: "Familiennachzug", quotaLayer: "Kontingente", recognitionLayer: "Anerkennung von Qualifikationen", reviewed: "Informationen zuletzt geprüft am 22. August 2026",
    disclaimerTitle: "Bevor du dich darauf verlässt", disclaimer: "Das ist unbezahlte Privatarbeit nach bestem Wissen, kein Angebot der Schweizer Behörden. Der Navigator ordnet offizielle Informationen. Er erteilt keine Bewilligung, ist keine Rechtsberatung und ersetzt weder den zuständigen Kanton noch eine fachkundige Beratung. Regeln, Formulare und Kontingente können sich ändern.",
    noData: "Antworten bleiben in diesem Browser und werden nicht hochgeladen. Ein kopierter Ergebnis-Link enthält die Antworten.", sourceMethod: "Zuerst Bundesrecht, dann das kantonale Verfahren.",
    notLegalAdvice: "Das ist keine Rechts-, Steuer- oder Migrationsberatung.",
    notAffiliated: "Nicht verbunden mit dem SEM, dem Bund oder einem Kanton.",
    shareWarn: "Der Link enthält deine Antworten. Wer ihn öffnet, kann sie sehen.",
    shareConfirm: "Trotzdem kopieren",
    mismatchTitle: "Dieser Link nannte einen anderen Weg",
    mismatchBody: "Der Navigator zeigt heute den Weg, der zu diesen Antworten passt. Vor einer Entscheidung den Kanton fragen.",
    actionCaveat: "Typische Schritte laut offizieller Orientierung — Fristen und Formulare beim Kanton bestätigen.",
  },
  fr: {
    home: "Accueil", how: "Fonctionnement", sources: "Sources officielles", about: "À propos", history: "Changements", legal: "Mentions", permits: "Lettres de permis", verified: "Dernière revue des règles le 22 août 2026",
    skipToContent: "Aller au contenu", primaryNav: "Navigation principale", language: "Langue", menu: "Menu", opensNewTab: "s’ouvre dans un nouvel onglet",
    theme: "Apparence", themeAuto: "Auto", themeLight: "Clair", themeDark: "Sombre",
    eyebrow: "Permis de travail et de séjour suisses", titleA: "Votre chemin vers la Suisse,", titleB: "sans le labyrinthe.",
    intro: "Répondez à quelques questions simples. Obtenez la voie probable, les responsabilités et les formulaires officiels de votre canton.",
    start: "Trouver ma voie", employerStart: "Je recrute quelqu’un", time: "Environ 3 minutes", privacy: "Sans compte · réponses non envoyées vers nous",
    routeLabel: "Un parcours, pas seulement une lettre", routeTitle: "Nous séparons les quatre décisions essentielles",
    layers: [["Entrée", "Visa ou autorisation d’entrée"], ["Travail", "Autorisation ou annonce"], ["Séjour", "Permis L, B, G ou autre statut"], ["Arrivée", "Inscription, assurance et délais"]],
    official: "Fondé sur les directives officielles fédérales et cantonales", notAdvice: "Orientation, pas une décision contraignante",
    back: "Retour", next: "Continuer", result: "Voir mon parcours", step: "Étape", of: "sur", select: "Sélectionnez", selectCanton: "Choisissez le canton du lieu de travail",
    resultEyebrow: "Votre parcours probable", confidence: "Orientation fondée sur les sources", resultIntro: "D’après vos réponses. L’autorité cantonale reste décisionnaire.",
    responsibilities: "Votre plan d’action", paperwork: "Documents à préparer", officialLinks: "Points de départ officiels", officialPages: "Pages officielles", path: "Votre parcours", cantonOffice: "Votre autorité cantonale",
    applicant: "Candidat", employer: "Employeur", both: "Candidat + employeur", authority: "Autorité", open: "Ouvrir la page officielle", print: "Imprimer le résumé", share: "Copier le lien", copied: "Copié", change: "Modifier les réponses", restart: "Recommencer",
    why: "Pourquoi ce parcours", visaLayer: "Entrée et visa", familyLayer: "Regroupement familial", quotaLayer: "Contingents", recognitionLayer: "Reconnaissance des qualifications", reviewed: "Informations vérifiées le 22 août 2026",
    disclaimerTitle: "Avant de vous y fier", disclaimer: "Il s’agit d’un travail privé, réalisé au mieux, et non d’un service des autorités suisses. Ce navigateur organise l’information officielle. Il ne délivre aucun permis, n’est pas un conseil juridique et ne remplace ni le canton compétent ni un conseiller qualifié. Les règles, formulaires et contingents peuvent changer.",
    noData: "Les réponses restent dans ce navigateur et ne sont pas téléversées. Un lien de résultat copié contient les réponses.", sourceMethod: "D’abord les règles fédérales, puis le dépôt cantonal.",
    notLegalAdvice: "Ceci n’est pas un conseil juridique, fiscal ou en migration.",
    notAffiliated: "Sans lien avec le SEM, la Confédération ou un canton.",
    shareWarn: "Le lien contient vos réponses. Quiconque l’ouvre peut les voir.",
    shareConfirm: "Copier quand même",
    mismatchTitle: "Ce lien nommait un autre parcours",
    mismatchBody: "Le navigateur d’aujourd’hui montre le parcours qui correspond à ces réponses. Vérifiez auprès du canton avant de vous fier à l’une ou l’autre version.",
    actionCaveat: "Étapes typiques selon l’orientation officielle — confirmez délais et formulaires auprès du canton.",
  },
  it: {
    home: "Inizio", how: "Come funziona", sources: "Fonti ufficiali", about: "Chi siamo", history: "Modifiche", legal: "Note legali", permits: "Lettere di permesso", verified: "Ultima verifica delle norme il 22 ago 2026",
    skipToContent: "Vai al contenuto", primaryNav: "Navigazione principale", language: "Lingua", menu: "Menu", opensNewTab: "si apre in una nuova scheda",
    theme: "Aspetto", themeAuto: "Auto", themeLight: "Chiaro", themeDark: "Scuro",
    eyebrow: "Permessi svizzeri di lavoro e soggiorno", titleA: "Il tuo percorso verso la Svizzera,", titleB: "senza il labirinto.",
    intro: "Rispondi ad alcune domande semplici. Ottieni la via probabile, chi presenta cosa e i formulari ufficiali del tuo cantone.",
    start: "Trova il mio percorso", employerStart: "Sto assumendo qualcuno", time: "Circa 3 minuti", privacy: "Senza account · le risposte non ci vengono inviate",
    routeLabel: "Un percorso, non solo una lettera", routeTitle: "Separiamo le quattro decisioni che contano",
    layers: [["Ingresso", "Visto o autorizzazione d’ingresso"], ["Lavoro", "Permesso o notifica"], ["Soggiorno", "L, B, G o altro statuto"], ["Arrivo", "Iscrizione, assicurazione e termini"]],
    official: "Basato sulle indicazioni ufficiali federali e cantonali", notAdvice: "Orientamento, non una decisione vincolante",
    back: "Indietro", next: "Continua", result: "Vedi il mio percorso", step: "Passo", of: "di", select: "Seleziona", selectCanton: "Scegli il cantone del luogo di lavoro",
    resultEyebrow: "Il tuo percorso probabile", confidence: "Orientamento basato sulle fonti", resultIntro: "In base alle tue risposte. L’autorità cantonale resta decisiva.",
    responsibilities: "Il tuo piano d’azione", paperwork: "Documenti da preparare", officialLinks: "Punti di partenza ufficiali", officialPages: "Pagine ufficiali", path: "Il tuo percorso", cantonOffice: "La tua autorità cantonale",
    applicant: "Richiedente", employer: "Datore di lavoro", both: "Richiedente + datore", authority: "Autorità", open: "Apri pagina ufficiale", print: "Stampa il riepilogo", share: "Copia il link", copied: "Copiato", change: "Modifica le risposte", restart: "Ricomincia",
    why: "Perché questo percorso", visaLayer: "Ingresso e visto", familyLayer: "Ricongiungimento familiare", quotaLayer: "Contingenti", recognitionLayer: "Riconoscimento delle qualifiche", reviewed: "Informazioni verificate il 22 agosto 2026",
    disclaimerTitle: "Prima di farci affidamento", disclaimer: "Questo è un lavoro privato, fatto al meglio delle possibilità, non un servizio delle autorità svizzere. Il navigatore organizza informazioni ufficiali; non rilascia un permesso, non è consulenza legale e non sostituisce il cantone competente né un consulente qualificato. Norme, formulari e contingenti possono cambiare.",
    noData: "Le risposte restano in questo browser e non vengono caricate. Un link copiato del risultato contiene le risposte.", sourceMethod: "Prima il diritto federale, poi la procedura cantonale.",
    notLegalAdvice: "Non è consulenza legale, fiscale o in materia di migrazione.",
    notAffiliated: "Non affiliato a SEM, Confederazione o a un cantone.",
    shareWarn: "Il link include le tue risposte. Chi lo apre può vederle.",
    shareConfirm: "Copia comunque",
    mismatchTitle: "Questo link indicava un altro percorso",
    mismatchBody: "Il navigatore di oggi mostra il percorso che corrisponde a queste risposte. Conferma con il cantone prima di fare affidamento su una delle due versioni.",
    actionCaveat: "Passi tipici dalle indicazioni ufficiali — conferma tempi e formulari con il cantone.",
  },
  rm: {
    home: "Cumenzament", how: "Co funcziun’igl", sources: "Funtaunas uffizialas", about: "Davart nus", history: "Midadas", legal: "Legal", permits: "Letras da permissiun", verified: "Ultima verificaziun da las reglas ils 22 avust 2026",
    skipToContent: "Siglir tar il cuntegn", primaryNav: "Navigaziun principala", language: "Lingua", menu: "Menu", opensNewTab: "s’avra en in nov tab",
    theme: "Aspect", themeAuto: "Auto", themeLight: "Cler", themeDark: "Stgir",
    eyebrow: "Permissiuns svizras da lavur e dimora", titleA: "Tia via en Svizra,", titleB: "senza il labirint.",
    intro: "Responda a paucas dumondas simplas. Ti retschaivas la via probabla, tgi depona tge e ils formulars uffizials per tes chantun.",
    start: "Chattar mia via", employerStart: "Jau engaschi insatgi", time: "Circa 3 minutas", privacy: "Nagin login · las respostas na vegnan betg tramessas a nus",
    routeLabel: "Ina via entira, betg be ina lettera", routeTitle: "Nus separam las quatter decisiuns decisivas",
    layers: [["Entrada", "Visum u permissiun d’entrada"], ["Lavur", "Permissiun u annunzia"], ["Dimora", "L, B, G u in auter status"], ["Arrivada", "Annunzia, assicuranza e termins"]],
    official: "Sin basa d’indicaziuns uffizialas da Confederaziun e chantuns", notAdvice: "Orientaziun, betg ina decisiun obliganta",
    back: "Enavos", next: "Cuntinuar", result: "Mussar mia via", step: "Pass", of: "da", select: "Tscherna", selectCanton: "Tscherna il chantun dal lieu da lavur",
    resultEyebrow: "Tia via probabla", confidence: "Orientaziun sin basa da funtaunas", resultIntro: "Sin basa da tias respostas. L’autoritad chantunala resta decisiva.",
    responsibilities: "Tes plan d’acziun", paperwork: "Documents da preparar", officialLinks: "Puncts da partenza uffizials", officialPages: "Paginas uffizialas", path: "Tia via", cantonOffice: "Tia autoritad chantunala",
    applicant: "Persuna che dumonda", employer: "Patrun", both: "Persuna + patrun", authority: "Autoritad", open: "Avrir la pagina uffiziala", print: "Stampar il resumaziun", share: "Copiar la colliaziun", copied: "Copià", change: "Midar las respostas", restart: "Cumenzar danovamain",
    why: "Pertge questa via", visaLayer: "Entrada e visum", familyLayer: "Reuniun da famiglia", quotaLayer: "Contingents", recognitionLayer: "Recunuschientscha da qualificaziuns", reviewed: "Infurmaziuns verifitgadas ils 22 avust 2026",
    disclaimerTitle: "Avant che ta basar sin quai", disclaimer: "Quai è lavur privata tenor meglier savida, betg in servetsch da las autoritads svizras. Quest navigatur ordinescha infurmaziuns uffizialas; el na dat nagina permissiun, n’è betg consel giuridic e na remplazzà ni il chantun cumpetent ni in consel qualificà. Reglas, formulars e contingents pon midar.",
    noData: "Las respostas restan en quest navigatur e na vegnan betg chargiadas. Ina colliaziun copiada dal resultat cuntegna las respostas.", sourceMethod: "L’emprim il dretg federal, lura la procedura chantunala.",
    notLegalAdvice: "Quai n’è betg consel giuridic, fiscal u da migraziun.",
    notAffiliated: "Betg collià cun il SEM, la Confederaziun u in chantun.",
    shareWarn: "La colliaziun cuntegna tias respostas. Tgi che l’avra po las vesair.",
    shareConfirm: "Copiar tuttina",
    mismatchTitle: "Questa colliaziun numnava in’autra via",
    mismatchBody: "Il navigatur dad oz mussa la via che correspunda a questas respostas. Confermar tar il chantun avant che sa basar sin ina da las duas versiuns.",
    actionCaveat: "Pass tipics tenor orientaziun uffiziala — confermar termins e formulars tar il chantun.",
  },
} as const;

type QuestionKey = "audience" | "status" | "permit" | "nationality" | "alsoSwissOrEu" | "arrangement" | "employerBase" | "residence" | "entryStatus" | "employmentDuration" | "serviceDuration" | "sector" | "euResidence" | "sponsor" | "relationship" | "qualified" | "studyPhase" | "changeIntent" | "borderZone" | "canton" | "family";

const questions: Record<Lang, Record<QuestionKey, [string, string]>> = {
  en: {
    audience: ["Who are you navigating for?", "We’ll assign each filing step to the right person."], status: ["Is there already a Swiss status in place?", "Existing permits can change the route completely."],
    permit: ["Which Swiss status or permit is held?", "Use the letter printed on the permit. Refugee B is listed separately."], nationality: ["Which citizenship group applies?", "Citizenship—not gender—determines the main admission system."],
    arrangement: ["What will the work situation be?", "Choose the closest description; you can review it later."], employerBase: ["Where is the employing or service company based?", "This decides whether the 90-day notification procedure can apply."],
    residence: ["Where will the person keep their main residence?", "Cross-border permits depend on the country and, for third-country nationals, border zones."], entryStatus: ["What is the person’s current entry situation?", "A visa or Schengen permit is separate from permission to work."],
    employmentDuration: ["How long is the Swiss employment contract?", "For EU/EFTA citizens this usually distinguishes notification, L and B routes."], serviceDuration: ["How many days of service are planned in Switzerland this calendar year?", "Count effective working days for the company and worker."],
    sector: ["Which type of work is involved?", "Some sectors require notification from day one; regulated professions may need recognition."], euResidence: ["Has the third-country worker been admitted to the EU/EFTA labour market for at least 12 months?", "This is normally required for the 90-day posted-worker route."],
    sponsor: ["Whose status supports the family move?", "Family rights differ under free movement and national law."], relationship: ["What is the family relationship?", "Unmarried partners do not automatically follow the spouse route."],
    qualified: ["How strong is the admission case?", "Third-country admission usually targets managers, specialists and highly qualified workers."], canton: ["Where will the work take place?", "The canton processes the filing and supplies the application form."],
    family: ["Will close family members move too?", "We’ll add the separate family-reunification layer."],
    alsoSwissOrEu: ["Is there also Swiss or EU/EFTA citizenship?", "A second citizenship can change which admission system applies."],
    studyPhase: ["What is the study or job-search situation?", "SEM treats studying, a Swiss degree and ordinary job-seeking as different routes."],
    changeIntent: ["What is changing on the existing permit?", "Job, canton, self-employment and settlement follow different federal rules."],
    borderZone: ["Has the person lived at least six months in the neighbouring border zone?", "Third-country G permits normally require this residence period."],
  },
  de: {
    audience: ["Für wen navigierst du?", "Wir ordnen jeden Schritt der richtigen Person zu."], status: ["Besteht bereits ein Schweizer Status?", "Eine bestehende Bewilligung kann den Weg vollständig ändern."],
    permit: ["Welcher Schweizer Status liegt vor?", "Wähle den Buchstaben auf dem Ausweis; Flüchtlingsstatus B ist separat."], nationality: ["Welche Staatsangehörigkeitsgruppe gilt?", "Die Staatsangehörigkeit – nicht das Geschlecht – bestimmt das System."],
    arrangement: ["Wie sieht die Arbeitssituation aus?", "Wähle die passendste Beschreibung."], employerBase: ["Wo sitzt der Arbeitgeber oder Dienstleister?", "Davon hängt das 90-Tage-Meldeverfahren ab."],
    residence: ["Wo bleibt der Hauptwohnsitz?", "Bei Drittstaatsangehörigen gelten für Grenzgänger zusätzlich Grenzzonen."], entryStatus: ["Wie ist die aktuelle Einreisesituation?", "Visum oder Schengen-Ausweis sind nicht gleich Arbeitsbewilligung."],
    employmentDuration: ["Wie lange läuft der Schweizer Arbeitsvertrag?", "Bei EU/EFTA unterscheidet dies meist Meldung, L und B."], serviceDuration: ["Wie viele Arbeitstage sind dieses Kalenderjahr in der Schweiz geplant?", "Gezählt wird für Unternehmen und Person."],
    sector: ["Um welche Art von Arbeit geht es?", "Einige Branchen sind ab dem ersten Tag meldepflichtig; reglementierte Berufe brauchen Anerkennung."], euResidence: ["Ist die Drittstaatsperson seit mindestens 12 Monaten regulär im EU/EFTA-Arbeitsmarkt zugelassen?", "Das ist in der Regel Voraussetzung für die 90-Tage-Entsendung."],
    sponsor: ["Auf wessen Status stützt sich der Familiennachzug?", "Die Rechte unterscheiden sich nach Freizügigkeits- und nationalem Recht."], relationship: ["Welche Familienbeziehung besteht?", "Unverheiratete Partner fallen nicht automatisch unter den Ehegattenweg."],
    qualified: ["Wie stark ist der Zulassungsfall?", "Drittstaatszulassung richtet sich meist an Führungskräfte, Spezialisten und Hochqualifizierte."], canton: ["Wo wird gearbeitet?", "Der Kanton bearbeitet das Gesuch und stellt das Formular bereit."],
    family: ["Ziehen enge Familienmitglieder mit?", "Wir ergänzen den separaten Familiennachzug."],
    alsoSwissOrEu: ["Besteht zusätzlich eine Schweizer oder EU/EFTA-Staatsangehörigkeit?", "Eine zweite Staatsangehörigkeit kann das Zulassungssystem ändern."],
    studyPhase: ["Wie ist die Studien- oder Jobsuchesituation?", "SEM unterscheidet Studium, Schweizer Abschluss und gewöhnliche Jobsuche."],
    changeIntent: ["Was ändert sich an der bestehenden Bewilligung?", "Stelle, Kanton, Selbständigkeit und Niederlassung folgen unterschiedlichen Bundesregeln."],
    borderZone: ["Wohnt die Person seit mindestens sechs Monaten in der Grenzzone des Nachbarlands?", "Für Drittstaat-G ist diese Frist in der Regel nötig."],
  },
  fr: {
    audience: ["Pour qui faites-vous cette démarche ?", "Nous attribuerons chaque dépôt à la bonne personne."], status: ["Un statut suisse existe-t-il déjà ?", "Un permis existant peut modifier entièrement le parcours."],
    permit: ["Quel statut ou permis suisse est détenu ?", "Utilisez la lettre du titre; le statut B de réfugié est séparé."], nationality: ["Quel groupe de nationalité s’applique ?", "La nationalité – et non le genre – détermine le régime principal."],
    arrangement: ["Quelle sera la situation professionnelle ?", "Choisissez la description la plus proche."], employerBase: ["Où se trouve l’employeur ou le prestataire ?", "Cela détermine l’accès à la procédure d’annonce de 90 jours."],
    residence: ["Où restera la résidence principale ?", "Pour les ressortissants d’États tiers, les zones frontalières comptent aussi."], entryStatus: ["Quelle est la situation d’entrée actuelle ?", "Un visa ou titre Schengen est distinct du droit de travailler."],
    employmentDuration: ["Quelle est la durée du contrat suisse ?", "Pour l’UE/AELE, cela distingue généralement annonce, L et B."], serviceDuration: ["Combien de jours de service sont prévus en Suisse cette année ?", "Comptez les jours effectifs pour l’entreprise et la personne."],
    sector: ["Quel type de travail est concerné ?", "Certains secteurs exigent une annonce dès le premier jour; les professions réglementées peuvent exiger une reconnaissance."], euResidence: ["Le travailleur d’un État tiers est-il admis depuis au moins 12 mois sur le marché UE/AELE ?", "C’est normalement requis pour le détachement de 90 jours."],
    sponsor: ["Quel statut soutient le regroupement familial ?", "Les droits diffèrent entre libre circulation et droit national."], relationship: ["Quel est le lien familial ?", "Les partenaires non mariés ne suivent pas automatiquement la voie du conjoint."],
    qualified: ["Quelle est la solidité du dossier d’admission ?", "L’admission de ressortissants d’États tiers vise généralement cadres, spécialistes et personnes hautement qualifiées."], canton: ["Où le travail sera-t-il effectué ?", "Le canton traite le dossier et fournit le formulaire."],
    family: ["Des proches vont-ils aussi déménager ?", "Nous ajouterons la couche distincte du regroupement familial."],
    alsoSwissOrEu: ["Existe-t-il aussi une citoyenneté suisse ou UE/AELE ?", "Une seconde nationalité peut changer le régime d’admission."],
    studyPhase: ["Quelle est la situation d’études ou de recherche d’emploi ?", "Le SEM distingue études, diplôme suisse et recherche d’emploi ordinaire."],
    changeIntent: ["Que change-t-il sur le permis existant ?", "Emploi, canton, indépendance et établissement suivent des règles fédérales différentes."],
    borderZone: ["La personne habite-t-elle depuis au moins six mois la zone frontière du pays voisin ?", "Le permis G d’un État tiers l’exige généralement."],
  },
  it: {
    audience: ["Per chi stai facendo questa procedura?", "Assegneremo ogni deposito alla persona giusta."], status: ["Esiste già uno statuto svizzero?", "Un permesso esistente può cambiare del tutto il percorso."],
    permit: ["Quale statuto o permesso svizzero è detenuto?", "Usa la lettera sul titolo; lo statuto B di rifugiato è separato."], nationality: ["Quale gruppo di cittadinanza si applica?", "La cittadinanza — non il genere — determina il regime principale."],
    arrangement: ["Quale sarà la situazione lavorativa?", "Scegli la descrizione più vicina."], employerBase: ["Dov’è la sede del datore o del prestatore?", "Questo decide se può valere la notifica di 90 giorni."],
    residence: ["Dove resterà la residenza principale?", "Per i cittadini di Stati terzi contano anche le zone di frontiera."], entryStatus: ["Qual è la situazione d’ingresso attuale?", "Visto o titolo Schengen non equivalgono al diritto di lavorare."],
    employmentDuration: ["Quanto dura il contratto svizzero?", "Per UE/AELS di solito distingue notifica, L e B."], serviceDuration: ["Quanti giorni di servizio sono previsti in Svizzera quest’anno?", "Conta i giorni effettivi per impresa e persona."],
    sector: ["Che tipo di lavoro è?", "Alcuni settori notificano dal primo giorno; le professioni regolamentate possono richiedere il riconoscimento."], euResidence: ["Il lavoratore di uno Stato terzo è ammesso da almeno 12 mesi sul mercato UE/AELS?", "Di norma è richiesto per il distacco di 90 giorni."],
    sponsor: ["Quale statuto sostiene il ricongiungimento?", "I diritti differiscono tra libera circolazione e diritto nazionale."], relationship: ["Qual è il legame familiare?", "I partner non sposati non seguono automaticamente la via del coniuge."],
    qualified: ["Quanto è solido il caso di ammissione?", "L’ammissione di Stati terzi mira di solito a quadri, specialisti e persone altamente qualificate."], canton: ["Dove si svolgerà il lavoro?", "Il cantone tratta la domanda e fornisce il formulario."],
    family: ["Si trasferiranno anche familiari stretti?", "Aggiungeremo il livello separato del ricongiungimento familiare."],
    alsoSwissOrEu: ["C’è anche una cittadinanza svizzera o UE/AELS?", "Una seconda cittadinanza può cambiare il regime di ammissione."],
    studyPhase: ["Qual è la situazione di studio o di ricerca di lavoro?", "La SEM distingue studio, diploma svizzero e ricerca di lavoro ordinaria."],
    changeIntent: ["Cosa cambia sul permesso esistente?", "Posto, cantone, attività indipendente e domicilio seguono norme federali diverse."],
    borderZone: ["La persona vive da almeno sei mesi nella zona di frontiera del Paese vicino?", "Per il G di Stato terzo questo periodo è di regola necessario."],
  },
  rm: {
    audience: ["Per tgi navigheschas ti?", "Nus attribuin mintga pass a la persuna giusta."], status: ["Datti gia in status svizzer?", "Ina permissiun existenta po midar cumplettamain la via."],
    permit: ["Tge status svizzer è avant maun?", "Tscherna la lettera sin la carta; il status da fugitiv B è separat."], nationality: ["Tge gruppa da naziunalitad vala?", "La naziunalitad – betg il schlatta – determinescha il sistem."],
    arrangement: ["Co vesa ora la situaziun da lavur?", "Tscherna la descripziun la pli adattada."], employerBase: ["Nua è la sedia dal patrun u dal purschider?", "Da quai dependa la procedura d’annunzia da 90 dis."],
    residence: ["Nua resta la dimora principala?", "Per persunas da stadis terzs valan per pendulars er zonas da cunfin."], entryStatus: ["Co è la situaziun d’entrada actuala?", "Visum u titel Schengen n’è betg egual a la permissiun da lavurar."],
    employmentDuration: ["Quant ditg dura il contract svizzer?", "Tar UE/AELE distingua quai per ordinari annunzia, L e B."], serviceDuration: ["Quant dis da lavur èn planisads en Svizra quest onn civil?", "Contà vegn per interpresa e persuna."],
    sector: ["Da tge gener da lavur sa tracti?", "Tschertas branchas èn suttamessas a l’annunzia gia dal emprim di; profesiuns regladas basegnan recunuschientscha."], euResidence: ["È la persuna da stadis terzs admessa dapi almain 12 mais sin il martgà da lavur UE/AELE?", "Quai è per ordinari la premissa per l’emessa da 90 dis."],
    sponsor: ["Sin tge status sa basa la reuniun da famiglia?", "Ils dretgs differeschan tenor la libra circulaziun e il dretg naziunal."], relationship: ["Tge relaziun da famiglia è avant maun?", "Partenaris nunmaridads na ravan betg automaticamain sut la via dals conjugals."],
    qualified: ["Quant ferm è il cas d’admissiun?", "L’admissiun da stadis terzs sa drizza per ordinari a manaders, spezialists e persunas fitg qualifitgadas."], canton: ["Nua vegn lavurà?", "Il chantun elavura la dumonda e metta a disposiziun il formular."],
    family: ["Vegnan er commembers da famiglia stretgs?", "Nus cumplettain la reuniun da famiglia separada."],
    alsoSwissOrEu: ["Datti er ina burgaisia svizra u da l’UE/AELE?", "Ina segunda naziunalitad po midar il sistem d’admissiun."],
    studyPhase: ["Co è la situaziun da studi u da tschertga da lavur?", "Il SEM distingua studi, conclusiun svizra e tschertga da lavur ordinaria."],
    changeIntent: ["Tge mida tar la permissiun existenta?", "Plazza, chantun, sulslevadad e domicili suondan autras reglas federalas."],
    borderZone: ["Viva la persuna dapi almain sis mais en la zona da cunfin dal pajais vischin?", "Per G da stadis terzs è questa durata per ordinari necessaria."],
  },
};

type OptionCopy = Record<string, [string, string]>;
const options: Record<Lang, OptionCopy> = {
  en: {
    person: ["For myself", "I want to work, move, commute or start a business."], employer: ["For an employee", "I’m a Swiss or foreign employer planning the filing."],
    new: ["No Swiss status yet", "This is a new move, job or assignment."], existing: ["There is an existing status", "The person already holds a Swiss permit or protection status."],
    B: ["Permit B", "Residence permit"], C: ["Permit C", "Settlement permit"], L: ["Permit L", "Short-term residence"], G: ["Permit G", "Cross-border commuter"], Ci: ["Permit Ci", "Family of diplomatic/IGO personnel"],
    refugeeB: ["Recognised refugee · B", "Employment uses a notification route."], F: ["Permit F", "Provisionally admitted"], N: ["Permit N", "Asylum seeker"], S: ["Permit S", "Temporary protection"], otherPermit: ["Another or unclear status", "The canton must classify it."],
    swiss: ["Swiss citizen", "No immigration work permit is required."], eu: ["EU or EFTA citizen", "Free movement rules normally apply."], uk: ["United Kingdom citizen", "Usually treated as a third-country national after Brexit."], third: ["Another citizenship", "Third-country admission rules usually apply."],
    local: ["Job with a Swiss employer", "A local employment contract in Switzerland."], frontier: ["Cross-border commuter", "Main home abroad; work physically in Switzerland."], posted: ["Posted worker or service", "Sent by a foreign company for a project or assignment."], self: ["Self-employed or founder", "Create or operate an independent Swiss activity."], familyRoute: ["Joining family", "Residence relies on a family member’s status."], study: ["Student, graduate or jobseeker", "Work alongside study or after graduation/job loss."], inactive: ["Residence without gainful work", "Retiree, private means, or another stay without employment."],
    baseSwiss: ["Switzerland", "This is local employment, not a foreign posting."], baseEu: ["EU or EFTA", "The 90-day notification route may apply."], baseUk: ["United Kingdom", "The Swiss–UK Services Mobility Agreement may apply."], baseOther: ["Another country", "National admission rules normally apply."],
    resEu: ["An EU/EFTA country", "EU/EFTA frontier rules can apply to EU/EFTA citizens."], resNeighbor: ["A neighbouring country", "France, Germany, Italy, Austria or Liechtenstein."], resOther: ["Another country", "A G permit is unlikely; check the work arrangement."],
    visa: ["A visa is normally required", "Entry visa still follows work authorisation."], exempt: ["Normally visa-exempt", "Visa exemption does not authorise work."], schengen: ["Has an EU/Schengen residence permit", "It does not normally give Swiss labour-market access."], unsure: ["Not sure", "Use the official nationality checker in the result."],
    under3: ["Up to 3 months", "Usually the notification route for EU/EFTA citizens."], three12: ["More than 3, under 12 months", "Usually an L route for EU/EFTA citizens."], twelveplus: ["12 months or longer", "Usually a B route for EU/EFTA citizens."],
    under8: ["1–8 working days", "Some service sectors can be notification-free."], nine90: ["9–90 working days", "The notification procedure may apply."], over90: ["More than 90 working days", "A permit application is required."],
    general: ["General service sector", "Normally notification-free for the first eight days."], priority: ["Construction, hospitality, cleaning or another priority sector", "Notification is required from day one."], regulated: ["Regulated profession", "Qualification recognition may also be required."],
    yes: ["Yes", "This condition is met."], no: ["No", "This may block or change the route."],
    sponsorSwissC: ["Swiss citizen or Permit C holder", "Family reunification plus broad work access for a spouse."], sponsorEu: ["EU/EFTA citizen in Switzerland", "Free-movement family rights may apply."], sponsorThirdB: ["Third-country Permit B holder", "Family reunification may be conditional."], sponsorThirdL: ["Third-country Permit L holder", "Family route is limited and canton-dependent."], sponsorOther: ["Another status", "A specialist canton check is needed."],
    spouse: ["Spouse", "Legally married."], registered: ["Registered partner", "A legally recognised registered partnership."], unmarried: ["Unmarried partner", "No automatic spouse entitlement."], child: ["Child or dependent descendant", "Age and dependency tests can apply."], parent: ["Dependent parent or grandparent", "Rules depend strongly on the sponsor’s status."],
    strong: ["Manager, specialist or highly qualified", "Degree/advanced training plus relevant experience."], uncertain: ["Possibly, but evidence is mixed", "The employer should test the case before committing."], weak: ["No specialist or advanced qualification case", "Ordinary third-country admission is unlikely."],
    familyYes: ["Yes", "Add spouse/partner, children or dependent relatives."], familyNo: ["No", "Only the worker’s route is needed."],
    alsoSwiss: ["Also Swiss", "Swiss citizenship governs; no foreign-national work permit."], alsoEu: ["Also EU or EFTA", "Free-movement rules normally apply instead of third-country admission."], alsoNeither: ["Neither", "Keep the United Kingdom or other third-country rules."],
    studying: ["Studying and want a side job", "Work alongside a recognised Swiss course of study."], studyOnly: ["Studying, without taking a job", "Residence for the studies themselves."], graduated: ["Just graduated from a Swiss higher-education institution", "Looking for qualified work after a Swiss degree."], jobseeking: ["Looking for work, not as a Swiss graduate", "Ordinary job-seeking, not the Swiss-graduate search stay."],
    renew: ["Renewal or the same job continues", "Check remaining duration and conditions."], newEmployer: ["A new employer or job", "The current permit may or may not allow the change."], newCanton: ["A move to another canton", "The new canton must confirm the status."], toSelf: ["Switch to self-employment", "A new permit is often required."], toC: ["Apply for a settlement permit C", "Residence time and integration conditions decide."],
  },
  de: {}, fr: {}, it: {}, rm: {},
};

const translateBaseOptions = (lang: "de" | "fr" | "it" | "rm"): OptionCopy => {
  const x: Record<typeof lang, OptionCopy> = {
    de: {
      person: ["Für mich selbst", "Ich möchte arbeiten, umziehen, pendeln oder gründen."], employer: ["Für eine beschäftigte Person", "Ich plane das Gesuch als Schweizer oder ausländischer Arbeitgeber."], new: ["Noch kein Schweizer Status", "Neuer Umzug, Job oder Einsatz."], existing: ["Bestehender Status", "Die Person hat bereits eine Schweizer Bewilligung oder Schutzstatus."],
      B: ["Bewilligung B", "Aufenthaltsbewilligung"], C: ["Bewilligung C", "Niederlassungsbewilligung"], L: ["Bewilligung L", "Kurzaufenthalt"], G: ["Bewilligung G", "Grenzgänger"], Ci: ["Bewilligung Ci", "Familie von Diplomaten/IO-Personal"], refugeeB: ["Anerkannter Flüchtling · B", "Arbeitsaufnahme wird gemeldet."], F: ["Bewilligung F", "Vorläufig aufgenommen"], N: ["Bewilligung N", "Asylsuchend"], S: ["Bewilligung S", "Schutzstatus"], otherPermit: ["Anderer/unklarer Status", "Der Kanton muss ihn einordnen."],
      swiss: ["Schweizer Bürger/in", "Keine ausländerrechtliche Arbeitsbewilligung."], eu: ["EU- oder EFTA-Bürger/in", "In der Regel gilt die Freizügigkeit."], uk: ["Britische/r Bürger/in", "Nach Brexit meist Drittstaatsregelung."], third: ["Andere Staatsangehörigkeit", "Meist gelten Drittstaatsregeln."],
      local: ["Job bei Schweizer Arbeitgeber", "Lokaler Arbeitsvertrag in der Schweiz."], frontier: ["Grenzgänger/in", "Hauptwohnsitz im Ausland, Arbeit in der Schweiz."], posted: ["Entsendung oder Dienstleistung", "Ausländisches Unternehmen entsendet für einen Auftrag."], self: ["Selbständig oder Gründer/in", "Unabhängige Tätigkeit in der Schweiz."], familyRoute: ["Familiennachzug", "Aufenthalt stützt sich auf ein Familienmitglied."], study: ["Studium, Abschluss oder Jobsuche", "Arbeit während/nach Studium oder Arbeitsverlust."], inactive: ["Aufenthalt ohne Erwerbstätigkeit", "Ruhestand, eigene Mittel oder anderer Aufenthalt ohne Arbeit."],
      baseSwiss: ["Schweiz", "Lokale Anstellung, keine Auslandsentsendung."], baseEu: ["EU oder EFTA", "Das 90-Tage-Verfahren kann gelten."], baseUk: ["Vereinigtes Königreich", "Das Mobilitätsabkommen kann gelten."], baseOther: ["Anderes Land", "Meist nationales Zulassungsrecht."],
      resEu: ["EU/EFTA-Land", "Für EU/EFTA-Personen kann die Grenzgängerregel gelten."], resNeighbor: ["Nachbarland", "Frankreich, Deutschland, Italien, Österreich oder Liechtenstein."], resOther: ["Anderes Land", "Bewilligung G ist unwahrscheinlich."],
      visa: ["Visum normalerweise nötig", "Das Visum folgt der Arbeitszulassung."], exempt: ["Normalerweise visumfrei", "Visumfreiheit erlaubt keine Arbeit."], schengen: ["EU-/Schengen-Aufenthaltstitel", "Er gibt grundsätzlich keinen Schweizer Arbeitszugang."], unsure: ["Nicht sicher", "Im Resultat folgt der offizielle Nationalitätscheck."],
      under3: ["Bis 3 Monate", "Bei EU/EFTA meist Meldeverfahren."], three12: ["Über 3, unter 12 Monate", "Bei EU/EFTA meist L."], twelveplus: ["12 Monate oder länger", "Bei EU/EFTA meist B."], under8: ["1–8 Arbeitstage", "Einige Dienste sind meldefrei."], nine90: ["9–90 Arbeitstage", "Das Meldeverfahren kann gelten."], over90: ["Mehr als 90 Arbeitstage", "Bewilligungsgesuch nötig."],
      general: ["Allgemeine Dienstleistung", "Die ersten acht Tage sind meist meldefrei."], priority: ["Bau, Gastgewerbe, Reinigung oder Prioritätsbranche", "Meldepflicht ab dem ersten Tag."], regulated: ["Reglementierter Beruf", "Zusätzlich kann Anerkennung nötig sein."], yes: ["Ja", "Bedingung erfüllt."], no: ["Nein", "Der Weg kann blockiert oder geändert sein."],
      sponsorSwissC: ["Schweizer/in oder C-Bewilligung", "Familiennachzug und breiter Arbeitszugang für Ehegatten."], sponsorEu: ["EU/EFTA-Person in der Schweiz", "Freizügigkeitsrechte können gelten."], sponsorThirdB: ["Drittstaat mit B", "Nachzug kann bedingt sein."], sponsorThirdL: ["Drittstaat mit L", "Begrenzt und kantonsabhängig."], sponsorOther: ["Anderer Status", "Spezialprüfung nötig."],
      spouse: ["Ehegatte/Ehegattin", "Rechtsgültig verheiratet."], registered: ["Eingetragene Partnerschaft", "Rechtlich anerkannte Partnerschaft."], unmarried: ["Unverheiratete Partnerschaft", "Kein automatischer Ehegattenanspruch."], child: ["Kind/abhängiger Nachkomme", "Alters- und Abhängigkeitstest möglich."], parent: ["Abhängiger Eltern-/Grosselternteil", "Stark vom Sponsorstatus abhängig."],
      strong: ["Führungskraft, Spezialist/in oder hochqualifiziert", "Studium/Fachausbildung plus Erfahrung."], uncertain: ["Möglicherweise, Nachweise gemischt", "Arbeitgeber sollte den Fall vorab prüfen."], weak: ["Kein Spezialisten-/Hochqualifikationsfall", "Ordentliche Zulassung ist unwahrscheinlich."], familyYes: ["Ja", "Ehegatte, Partner, Kinder oder abhängige Verwandte ergänzen."], familyNo: ["Nein", "Nur der Weg der arbeitenden Person."],
      alsoSwiss: ["Auch Schweizer/in", "Die Schweizer Staatsangehörigkeit gilt; keine Ausländerarbeitsbewilligung."], alsoEu: ["Auch EU oder EFTA", "Es gilt in der Regel die Freizügigkeit statt Drittstaatszulassung."], alsoNeither: ["Keine von beiden", "Es bleiben die Regeln für das Vereinigte Königreich oder andere Drittstaaten."],
      studying: ["Studium und Nebenjob", "Arbeit neben einer anerkannten Schweizer Ausbildung."], studyOnly: ["Studium, ohne Erwerbstätigkeit", "Aufenthalt für das Studium selbst."], graduated: ["Abschluss an einer Schweizer Hochschule", "Qualifizierte Stelle nach Schweizer Abschluss suchen."], jobseeking: ["Jobsuche, nicht als Schweizer Absolvent/in", "Gewöhnliche Jobsuche, nicht der Absolventenaufenthalt."],
      renew: ["Verlängerung oder dieselbe Stelle", "Restlaufzeit und Auflagen prüfen."], newEmployer: ["Neuer Arbeitgeber oder neue Stelle", "Die heutige Bewilligung erlaubt den Wechsel möglicherweise nicht."], newCanton: ["Umzug in einen anderen Kanton", "Der neue Kanton muss den Status bestätigen."], toSelf: ["Wechsel in die Selbständigkeit", "Oft ist eine neue Bewilligung nötig."], toC: ["Niederlassungsbewilligung C beantragen", "Aufenthaltsdauer und Integration entscheiden."],
    },
    fr: {
      person: ["Pour moi", "Je veux travailler, déménager, être frontalier ou créer."], employer: ["Pour un employé", "Je prépare le dossier comme employeur suisse ou étranger."], new: ["Pas encore de statut suisse", "Nouveau déménagement, emploi ou mission."], existing: ["Un statut existe", "La personne détient déjà un titre suisse ou de protection."],
      B: ["Permis B", "Autorisation de séjour"], C: ["Permis C", "Autorisation d’établissement"], L: ["Permis L", "Séjour de courte durée"], G: ["Permis G", "Frontalier"], Ci: ["Permis Ci", "Famille de personnel diplomatique/OI"], refugeeB: ["Réfugié reconnu · B", "L’emploi suit une procédure d’annonce."], F: ["Permis F", "Admission provisoire"], N: ["Permis N", "Demandeur d’asile"], S: ["Permis S", "Protection temporaire"], otherPermit: ["Autre statut ou incertain", "Le canton doit le qualifier."],
      swiss: ["Citoyen suisse", "Aucun permis de travail migratoire."], eu: ["Citoyen UE ou AELE", "La libre circulation s’applique généralement."], uk: ["Citoyen britannique", "En principe ressortissant d’État tiers depuis le Brexit."], third: ["Autre nationalité", "Les règles États tiers s’appliquent généralement."],
      local: ["Emploi chez un employeur suisse", "Contrat local en Suisse."], frontier: ["Travail frontalier", "Domicile principal à l’étranger, travail en Suisse."], posted: ["Détachement ou prestation", "Envoyé par une entreprise étrangère."], self: ["Indépendant ou fondateur", "Créer/exploiter une activité suisse."], familyRoute: ["Rejoindre la famille", "Le séjour dépend du statut d’un proche."], study: ["Étudiant, diplômé ou chercheur d’emploi", "Travail pendant/après les études ou après perte d’emploi."], inactive: ["Séjour sans activité lucrative", "Retraite, moyens propres ou autre séjour sans emploi."],
      baseSwiss: ["Suisse", "Emploi local, pas un détachement."], baseEu: ["UE ou AELE", "L’annonce de 90 jours peut s’appliquer."], baseUk: ["Royaume-Uni", "L’accord de mobilité des services peut s’appliquer."], baseOther: ["Autre pays", "Le droit national s’applique généralement."],
      resEu: ["Pays UE/AELE", "La voie frontalière UE/AELE peut s’appliquer."], resNeighbor: ["Pays voisin", "France, Allemagne, Italie, Autriche ou Liechtenstein."], resOther: ["Autre pays", "Le permis G est peu probable."],
      visa: ["Visa normalement requis", "Le visa reste distinct de l’autorisation de travail."], exempt: ["Normalement exempté de visa", "L’exemption n’autorise pas le travail."], schengen: ["Titre UE/Schengen", "Il ne donne normalement pas accès au marché suisse."], unsure: ["Je ne sais pas", "Le résultat indiquera le vérificateur officiel."],
      under3: ["Jusqu’à 3 mois", "Pour l’UE/AELE, généralement une annonce."], three12: ["Plus de 3, moins de 12 mois", "Pour l’UE/AELE, généralement L."], twelveplus: ["12 mois ou plus", "Pour l’UE/AELE, généralement B."], under8: ["1–8 jours de travail", "Certains services sont sans annonce."], nine90: ["9–90 jours de travail", "La procédure d’annonce peut s’appliquer."], over90: ["Plus de 90 jours", "Une demande de permis est requise."],
      general: ["Service général", "Les huit premiers jours sont généralement sans annonce."], priority: ["Construction, hôtellerie, nettoyage ou secteur prioritaire", "Annonce dès le premier jour."], regulated: ["Profession réglementée", "Une reconnaissance peut aussi être requise."], yes: ["Oui", "Condition remplie."], no: ["Non", "La voie peut être bloquée ou modifiée."],
      sponsorSwissC: ["Suisse ou titulaire C", "Regroupement et large accès au travail du conjoint."], sponsorEu: ["Citoyen UE/AELE en Suisse", "Les droits de libre circulation peuvent s’appliquer."], sponsorThirdB: ["Ressortissant État tiers avec B", "Regroupement éventuellement conditionnel."], sponsorThirdL: ["Ressortissant État tiers avec L", "Voie limitée et cantonale."], sponsorOther: ["Autre statut", "Contrôle spécialisé requis."],
      spouse: ["Conjoint", "Mariage légal."], registered: ["Partenaire enregistré", "Partenariat juridiquement reconnu."], unmarried: ["Partenaire non marié", "Pas de droit automatique comme conjoint."], child: ["Enfant/descendant à charge", "Âge et dépendance peuvent compter."], parent: ["Parent/grand-parent à charge", "Dépend fortement du sponsor."],
      strong: ["Cadre, spécialiste ou hautement qualifié", "Diplôme/formation avancée et expérience."], uncertain: ["Peut-être, preuves mitigées", "L’employeur devrait tester le dossier."], weak: ["Pas de profil spécialiste/hautement qualifié", "L’admission ordinaire est peu probable."], familyYes: ["Oui", "Ajouter conjoint, partenaire, enfants ou proches à charge."], familyNo: ["Non", "Uniquement le parcours du travailleur."],
      alsoSwiss: ["Aussi suisse", "La citoyenneté suisse s’applique ; aucun permis de travail pour étrangers."], alsoEu: ["Aussi UE ou AELE", "La libre circulation s’applique généralement à la place de l’admission d’État tiers."], alsoNeither: ["Ni l’un ni l’autre", "Les règles du Royaume-Uni ou d’un autre État tiers restent."],
      studying: ["Études et activité accessoire", "Travailler à côté d’une formation suisse reconnue."], studyOnly: ["Études, sans emploi", "Séjour pour les études elles-mêmes."], graduated: ["Diplôme d’une haute école suisse", "Chercher un emploi qualifié après un diplôme suisse."], jobseeking: ["Recherche d’emploi, pas comme diplômé suisse", "Recherche ordinaire, pas le séjour des diplômés."],
      renew: ["Renouvellement ou le même emploi continue", "Vérifier la durée restante et les conditions."], newEmployer: ["Nouvel employeur ou nouvel emploi", "Le permis actuel peut ou non autoriser le changement."], newCanton: ["Déménagement dans un autre canton", "Le nouveau canton doit confirmer le statut."], toSelf: ["Passer à l’indépendance", "Un nouveau permis est souvent nécessaire."], toC: ["Demander un permis d’établissement C", "La durée de séjour et l’intégration décident."],
    },
    it: {
      person: ["Per me", "Voglio lavorare, trasferirmi, fare il frontaliero o avviare un’attività."], employer: ["Per un dipendente", "Preparo la domanda come datore svizzero o estero."], new: ["Ancora nessuno statuto svizzero", "Nuovo trasferimento, posto o incarico."], existing: ["Uno statuto esiste già", "La persona ha già un titolo svizzero o di protezione."],
      B: ["Permesso B", "Permesso di dimora"], C: ["Permesso C", "Permesso di domicilio"], L: ["Permesso L", "Soggiorno di breve durata"], G: ["Permesso G", "Frontaliero"], Ci: ["Permesso Ci", "Famiglia di personale diplomatico/OI"], refugeeB: ["Rifugiato riconosciuto · B", "L’impiego segue una notifica."], F: ["Permesso F", "Ammissione provvisoria"], N: ["Permesso N", "Richiedente l’asilo"], S: ["Permesso S", "Protezione temporanea"], otherPermit: ["Altro statuto o incerto", "Il cantone deve qualificarlo."],
      swiss: ["Cittadino svizzero", "Nessun permesso di lavoro per stranieri."], eu: ["Cittadino UE o AELS", "Di regola vale la libera circolazione."], uk: ["Cittadino britannico", "Dopo la Brexit di solito regole di Stato terzo."], third: ["Altra cittadinanza", "Di solito valgono le regole per Stati terzi."],
      local: ["Impiego presso un datore svizzero", "Contratto locale in Svizzera."], frontier: ["Frontaliero", "Domicilio principale all’estero, lavoro in Svizzera."], posted: ["Distacco o prestazione", "Inviato da un’impresa estera per un incarico."], self: ["Indipendente o fondatore", "Creare o gestire un’attività svizzera."], familyRoute: ["Ricongiungimento familiare", "Il soggiorno si basa sullo statuto di un familiare."], study: ["Studio, diploma o ricerca di lavoro", "Lavoro durante/dopo gli studi o dopo la perdita del posto."], inactive: ["Soggiorno senza attività lucrativa", "Pensione, mezzi propri o altro soggiorno senza impiego."],
      baseSwiss: ["Svizzera", "Impiego locale, non un distacco dall’estero."], baseEu: ["UE o AELS", "Può valere la procedura di notifica di 90 giorni."], baseUk: ["Regno Unito", "Può valere l’accordo sulla mobilità dei servizi."], baseOther: ["Altro Paese", "Di solito vale il diritto nazionale di ammissione."],
      resEu: ["Paese UE/AELS", "Per cittadini UE/AELS può valere la via frontaliera."], resNeighbor: ["Paese vicino", "Francia, Germania, Italia, Austria o Liechtenstein."], resOther: ["Altro Paese", "Il permesso G è poco probabile."],
      visa: ["Di solito serve un visto", "Il visto resta distinto dall’autorizzazione al lavoro."], exempt: ["Di solito esente da visto", "L’esenzione non autorizza a lavorare."], schengen: ["Titolo UE/Schengen", "Di regola non dà accesso al mercato del lavoro svizzero."], unsure: ["Non so", "Nel risultato c’è il verificatore ufficiale della nazionalità."],
      under3: ["Fino a 3 mesi", "Per UE/AELS di solito notifica."], three12: ["Più di 3, meno di 12 mesi", "Per UE/AELS di solito L."], twelveplus: ["12 mesi o più", "Per UE/AELS di solito B."], under8: ["1–8 giorni lavorativi", "Alcuni servizi sono senza notifica."], nine90: ["9–90 giorni lavorativi", "Può valere la procedura di notifica."], over90: ["Più di 90 giorni lavorativi", "Serve una domanda di permesso."],
      general: ["Servizio generale", "I primi otto giorni sono di solito senza notifica."], priority: ["Edilizia, alberghiero, pulizie o settore prioritario", "Notifica dal primo giorno."], regulated: ["Professione regolamentata", "Può servire anche il riconoscimento."], yes: ["Sì", "Condizione soddisfatta."], no: ["No", "Il percorso può essere bloccato o modificato."],
      sponsorSwissC: ["Cittadino svizzero o titolare C", "Ricongiungimento e ampio accesso al lavoro per il coniuge."], sponsorEu: ["Cittadino UE/AELS in Svizzera", "Possono valere i diritti di libera circolazione."], sponsorThirdB: ["Stato terzo con B", "Il ricongiungimento può essere condizionato."], sponsorThirdL: ["Stato terzo con L", "Via limitata e cantonale."], sponsorOther: ["Altro statuto", "Serve un esame specializzato."],
      spouse: ["Coniuge", "Matrimonio legalmente valido."], registered: ["Partner registrato", "Unione legalmente riconosciuta."], unmarried: ["Partner non sposato", "Nessun diritto automatico come coniuge."], child: ["Figlio/discendente a carico", "Possono valere età e dipendenza."], parent: ["Genitore/nonno a carico", "Dipende fortemente dallo statuto del sostenitore."],
      strong: ["Quadro, specialista o altamente qualificato", "Laurea/formazione avanzata e esperienza."], uncertain: ["Forse, prove miste", "Il datore dovrebbe verificare il caso prima."], weak: ["Nessun profilo da specialista/alta qualifica", "L’ammissione ordinaria è improbabile."], familyYes: ["Sì", "Aggiungere coniuge, partner, figli o parenti a carico."], familyNo: ["No", "Solo il percorso della persona che lavora."],
      alsoSwiss: ["Anche svizzero", "Vale la cittadinanza svizzera; nessun permesso di lavoro per stranieri."], alsoEu: ["Anche UE o AELS", "Di regola vale la libera circolazione al posto dell’ammissione di Stato terzo."], alsoNeither: ["Nessuna delle due", "Restano le regole del Regno Unito o di un altro Stato terzo."],
      studying: ["Studio e lavoro accessorio", "Lavorare accanto a una formazione svizzera riconosciuta."], studyOnly: ["Studio, senza impiego", "Soggiorno per gli studi stessi."], graduated: ["Diploma di un’alta scuola svizzera", "Cercare un lavoro qualificato dopo un diploma svizzero."], jobseeking: ["Ricerca di lavoro, non come diplomato svizzero", "Ricerca ordinaria, non il soggiorno dei diplomati."],
      renew: ["Rinnovo o lo stesso posto continua", "Verificare durata residua e condizioni."], newEmployer: ["Nuovo datore o nuovo posto", "Il permesso attuale può o meno consentire il cambiamento."], newCanton: ["Trasferimento in un altro cantone", "Il nuovo cantone deve confermare lo statuto."], toSelf: ["Passare all’attività indipendente", "Spesso serve un nuovo permesso."], toC: ["Chiedere il permesso di domicilio C", "Decidono durata di soggiorno e integrazione."],
    },
    rm: {
      person: ["Per mai sez", "Jau vuless lavurar, translocar, pendular u fundar."], employer: ["Per ina persuna engaschada", "Jau planisesch la dumonda sco patrun svizzer u ester."], new: ["Anc nagin status svizzer", "Nov translocament, plazza u engaschi."], existing: ["Status existent", "La persuna ha gia ina permissiun svizra u in status da protecziun."],
      B: ["Permissiun B", "Permissiun da dimora"], C: ["Permissiun C", "Permissiun da domicili"], L: ["Permissiun L", "Curta dimora"], G: ["Permissiun G", "Pendular"], Ci: ["Permissiun Ci", "Famiglia da persunal diplomatic/OI"], refugeeB: ["Fugitiv renconuschì · B", "L’engaschi vegn annunzià."], F: ["Permissiun F", "Recehì provisoricamain"], N: ["Permissiun N", "Tschertgader d’asil"], S: ["Permissiun S", "Status da protecziun"], otherPermit: ["Auter/nuncler status", "Il chantun sto l’ordinar."],
      swiss: ["Burgais svizzer", "Nagina permissiun da lavur per esters."], eu: ["Burgais da l’UE u da l’AELE", "Per ordinari vala la libra circulaziun."], uk: ["Burgais britannic", "Suenter la Brexit per ordinari reglas da stadis terzs."], third: ["Autra naziunalitad", "Per ordinari valan las reglas da stadis terzs."],
      local: ["Plazza tar in patrun svizzer", "Contract local en Svizra."], frontier: ["Pendular", "Dimora principala a l’exteriur, lavur en Svizra."], posted: ["Emessa u prestaziun", "In’interpresa estra trametta per in incumbenza."], self: ["Sulslev u fundatur", "Activitad independenta en Svizra."], familyRoute: ["Reuniun da famiglia", "La dimora sa basa sin il status d’in commember da famiglia."], study: ["Studi, conclusiun u tschertga da lavur", "Lavur durant/suenter il studi u suenter perdita da la plazza."], inactive: ["Dimora senza activitad lucrativa", "Pensiun, meds atgns u autra dimora senza plazza."],
      baseSwiss: ["Svizra", "Engaschi local, nagina emessa da l’exteriur."], baseEu: ["UE u AELE", "La procedura da 90 dis po valair."], baseUk: ["Reginavel Unì", "L’accord da mobilitad po valair."], baseOther: ["Auter pajais", "Per ordinari vala il dretg naziunal d’admissiun."],
      resEu: ["Pajais da l’UE/AELE", "Per persunas da l’UE/AELE po valair la regla da pendulars."], resNeighbor: ["Pajais vischin", "Frantscha, Germania, Italia, Austria u Liechtenstein."], resOther: ["Auter pajais", "La permissiun G è improbabla."],
      visa: ["Visum per ordinari necessari", "Il visum suonda l’admissiun da lavur."], exempt: ["Per ordinari senza visum", "L’exempziun na permetta betg da lavurar."], schengen: ["Titel da dimora UE/Schengen", "El na dat per ordinari nagin access al martgà da lavur svizzer."], unsure: ["Betg segir", "En il resultat suonda il check uffizial da la naziunalitad."],
      under3: ["Fin 3 mais", "Tar UE/AELE per ordinari procedura d’annunzia."], three12: ["Dapli che 3, main che 12 mais", "Tar UE/AELE per ordinari L."], twelveplus: ["12 mais u dapli", "Tar UE/AELE per ordinari B."], under8: ["1–8 dis da lavur", "Tscherts servetschs èn senza annunzia."], nine90: ["9–90 dis da lavur", "La procedura d’annunzia po valair."], over90: ["Dapli che 90 dis da lavur", "Dumonda da permissiun necessaria."],
      general: ["Servetsch general", "Ils emprims otg dis èn per ordinari senza annunzia."], priority: ["Construcziun, gastgewerb, nettar u branscha prioritara", "Obligaziun d’annunzia dal emprim di."], regulated: ["Professiun reglada", "Er recunuschientscha po esser necessaria."], yes: ["Gea", "Cundiziun ademplida."], no: ["Na", "La via po vegnir bloccada u midada."],
      sponsorSwissC: ["Svizzer/a u permissiun C", "Reuniun da famiglia e vast access a la lavur per conjugals."], sponsorEu: ["Persuna da l’UE/AELE en Svizra", "Dretgs da libra circulaziun pon valair."], sponsorThirdB: ["Stadi terz cun B", "La reuniun po esser cundiziunada."], sponsorThirdL: ["Stadi terz cun L", "Limità e dependent dal chantun."], sponsorOther: ["Auter status", "Examen spezial necessari."],
      spouse: ["Conjugal", "Maridà legalmain."], registered: ["Partenadi registrà", "Partenadi recunuschì legalmain."], unmarried: ["Partenadi nunmaridà", "Nagin dretg automatic sco conjugal."], child: ["Uffant/descendent dependent", "Test d’oldadad e dependencia pussaivel."], parent: ["Genitur/bap e mamma gronds dependents", "Dependì fermamain dal status dal sponsor."],
      strong: ["Manader, spezialist u fitg qualifitgà", "Studi/furmaziun avanzada e experientscha."], uncertain: ["Eventualmain, cumprovas maschadadas", "Il patrun duess examinar il cas avant."], weak: ["Nagin cas da spezialist/auta qualificaziun", "L’admissiun ordinaria è improbabla."], familyYes: ["Gea", "Conjugal, partenari, uffants u parents dependents cumplettar."], familyNo: ["Na", "Mo la via da la persuna che lavura."],
      alsoSwiss: ["Era svizzer/a", "La burgaisia svizra vala; nagina permissiun da lavur per esters."], alsoEu: ["Era UE u AELE", "Per ordinari vala la libra circulaziun enstagl l’admissiun da stadis terzs."], alsoNeither: ["Nagina da las duas", "Las reglas dal Reginavel Unì u d’in auter stadi terz restan."],
      studying: ["Studi e lavur accessora", "Lavurar sper ina furmaziun svizra recunuschida."], studyOnly: ["Studi, senza plazza", "Dimora per il studi sez."], graduated: ["Conclusiun d’ina scola auta svizra", "Tschertgar ina plazza qualifitgada suenter in conclus svizzer."], jobseeking: ["Tschertga da lavur, betg sco absolvent svizzer", "Tschertga ordinaria, betg la dimora d’absolvents."],
      renew: ["Prolungaziun u la medema plazza cuntinuescha", "Examinar la durada restanta e las cundiziuns."], newEmployer: ["Nov patrun u nova plazza", "La permissiun actuala po u na po betg permetter la midada."], newCanton: ["Translocaziun en in auter chantun", "Il nov chantun sto confermar il status."], toSelf: ["Midar tar la sulslevadad", "Savens è necessaria ina nova permissiun."], toC: ["Dumandar la permissiun da domicili C", "Durada da dimora ed integraziun decidan."],
    },
  };
  return x[lang];
};

options.de = translateBaseOptions("de"); options.fr = translateBaseOptions("fr"); options.it = translateBaseOptions("it"); options.rm = translateBaseOptions("rm");

export type WizardStep = { id: QuestionKey; title: string; hint: string; options?: Array<{ value: string; label: string; detail: string }>; kind?: "options" | "canton" };

const choiceKeys: Record<QuestionKey, string[]> = {
  audience: ["person", "employer"], status: ["new", "existing"], permit: ["B", "C", "L", "G", "Ci", "refugeeB", "F", "N", "S", "otherPermit"],
  nationality: ["swiss", "eu", "uk", "third"], alsoSwissOrEu: ["alsoSwiss", "alsoEu", "alsoNeither"],
  arrangement: ["local", "frontier", "posted", "self", "familyRoute", "study", "inactive"], employerBase: ["baseSwiss", "baseEu", "baseUk", "baseOther"],
  residence: ["resEu", "resNeighbor", "resOther"], entryStatus: ["visa", "exempt", "schengen", "unsure"], employmentDuration: ["under3", "three12", "twelveplus"],
  serviceDuration: ["under8", "nine90", "over90"], sector: ["general", "priority", "regulated"], euResidence: ["yes", "no"], sponsor: ["sponsorSwissC", "sponsorEu", "sponsorThirdB", "sponsorThirdL", "sponsorOther"],
  relationship: ["spouse", "registered", "unmarried", "child", "parent"], qualified: ["strong", "uncertain", "weak"],
  studyPhase: ["studying", "studyOnly", "graduated", "jobseeking"], changeIntent: ["renew", "newEmployer", "newCanton", "toSelf", "toC"],
  borderZone: ["yes", "no"], canton: [], family: ["familyYes", "familyNo"],
};

const makeStep = (id: QuestionKey, lang: Lang): WizardStep => {
  const [title, hint] = questions[lang][id];
  if (id === "canton") return { id, title, hint, kind: "canton" };
  return { id, title, hint, kind: "options", options: choiceKeys[id].map((value) => ({ value, label: options[lang][value][0], detail: options[lang][value][1] })) };
};

export const stepOrder: QuestionKey[] = ["audience", "status", "permit", "nationality", "alsoSwissOrEu", "arrangement", "employerBase", "residence", "entryStatus", "employmentDuration", "serviceDuration", "sector", "euResidence", "sponsor", "relationship", "qualified", "studyPhase", "changeIntent", "borderZone", "canton", "family"];

export function effectiveNationality(a: Answers): string {
  if (a.alsoSwissOrEu === "alsoSwiss") return "swiss";
  if (a.alsoSwissOrEu === "alsoEu") return "eu";
  return a.nationality;
}

export function buildSteps(a: Answers, lang: Lang): WizardStep[] {
  const ids: QuestionKey[] = ["audience", "status"];
  if (a.status === "existing") {
    ids.push("permit");
    if (a.permit === "B" || a.permit === "L" || a.permit === "G") {
      ids.push("nationality", "changeIntent");
    }
    if (a.permit) ids.push("canton");
    return ids.map((id) => makeStep(id, lang));
  }
  if (a.status !== "new") return ids.map((id) => makeStep(id, lang));
  ids.push("nationality");
  if (!a.nationality) return ids.map((id) => makeStep(id, lang));
  if (a.nationality === "uk" || a.nationality === "third") {
    ids.push("alsoSwissOrEu");
    if (!a.alsoSwissOrEu) return ids.map((id) => makeStep(id, lang));
  }
  const nat = effectiveNationality(a);
  if (nat === "swiss") {
    ids.push("canton");
    return ids.map((id) => makeStep(id, lang));
  }
  ids.push("arrangement");
  if (!a.arrangement) return ids.map((id) => makeStep(id, lang));

  if (a.arrangement === "posted") ids.push("employerBase");
  if (a.arrangement === "frontier") {
    ids.push("residence");
    if ((nat === "third" || nat === "uk") && (a.residence === "resNeighbor" || a.residence === "resEu")) ids.push("borderZone");
  }
  if ((nat === "uk" || nat === "third") && a.arrangement !== "study" && a.arrangement !== "inactive") ids.push("entryStatus");
  if (a.arrangement === "local" || a.arrangement === "frontier") ids.push("employmentDuration");
  if (a.arrangement === "posted") {
    ids.push("serviceDuration");
    if (a.serviceDuration === "under8" || a.serviceDuration === "nine90") ids.push("sector");
    if (nat === "third" && a.employerBase === "baseEu") ids.push("euResidence");
  }
  if (a.arrangement === "familyRoute") ids.push("sponsor", "relationship");
  if (a.arrangement === "study") ids.push("studyPhase");
  if ((nat === "third" || nat === "uk") && (a.arrangement === "local" || a.arrangement === "self")) ids.push("qualified");
  ids.push("canton");
  if (a.arrangement === "local" || a.arrangement === "self") ids.push("family");
  return ids.map((id) => makeStep(id, lang));
}

export type RouteKey = "swiss" | "existingOpen" | "existingReview" | "existingLChange" | "existingBChange" | "settlementC" | "statusNotify" | "statusS" | "statusN" | "euNotify" | "euL" | "euB" | "euG" | "serviceFree" | "serviceNotify" | "ukService" | "euSelf" | "thirdEmployer" | "thirdG" | "thirdService" | "thirdSelf" | "familyEu" | "familySwissC" | "familyThird" | "studyJob" | "studySideJob" | "studyResidence" | "graduateSearch" | "euJobseeker" | "euInactive" | "specialist";
export type Actor = "applicant" | "employer" | "both" | "authority";
export type ActionItem = { text: string; actor: Actor; when?: string };

const routeText: Record<Lang, Record<RouteKey, [string, string, string]>> = {
  en: {
    swiss: ["No immigration permit", "Swiss citizen: normal employment route", "Swiss citizens do not need a foreign-national work or residence permit."], existingOpen: ["Existing work-capable status", "Your present permit is the starting point", "A C or Ci status normally already carries broad work access; a job change is usually free, but the card and canton conditions still matter."], existingReview: ["Existing permit review", "Check the change before work starts", "B, L and G permits can carry job, canton or duration conditions. The competent canton should confirm the change."],
    existingLChange: ["L permit job change", "Same sector, canton approval", "A third-country L holder may change job only in the same sector and profession, and only if the current job cannot reasonably continue. The new employer applies before work starts."], existingBChange: ["B permit job change", "Usually notify, sometimes authorise", "As a rule a B holder can change salaried job without a new permit. If the card is tied to a specific job or labour-market condition, ask the canton before starting."], settlementC: ["Settlement permit C", "Check the residence period first", "C is usually available after five years for EU-15/EFTA nationals with a settlement treaty, and after ten years for most others, if integration conditions including language are met. The canton decides; this is not an automatic grant."],
    statusNotify: ["Employment notification", "Work is permitted after notification", "Recognised refugees and people with F status may work throughout Switzerland once employment is reported."], statusS: ["Status S notification", "Report the work before it starts", "Status S holders may take employed or self-employed work once it has been reported to the canton of work."], statusN: ["Prior authorisation", "Permit N: canton approval required", "An asylum seeker may not start work until the canton has granted authorisation."],
    euNotify: ["90-day notification", "Short EU/EFTA employment", "For employment with a Swiss employer up to three months, no residence permit is normally issued; the employer files an online notification."], euL: ["Permit L EU/EFTA", "Short-term residence and work", "A contract longer than three months but under twelve months normally leads to an L EU/EFTA permit."], euB: ["Permit B EU/EFTA", "Five-year residence route", "A contract of at least twelve months or unlimited duration normally leads to a B EU/EFTA permit."], euG: ["Permit G EU/EFTA", "Cross-border commuter route", "An EU/EFTA citizen residing in an EU/EFTA state and returning at least weekly may apply in the canton of work."],
    serviceFree: ["Possible notification-free service", "First eight days in a general sector", "EU/EFTA cross-border services can be notification-free for the first eight working days, unless the sector or profession triggers first-day duties."], serviceNotify: ["90-day service notification", "Notify the assignment before work", "Eligible EU/EFTA services up to 90 working days use the online notification procedure, normally eight days in advance."], ukService: ["Swiss–UK service notification", "Short UK service route", "Eligible UK-based posted or self-employed service providers can use the notification procedure under the Services Mobility Agreement."],
    euSelf: ["Permit B EU/EFTA", "Self-employed residence route", "EU/EFTA citizens can become self-employed after registering and proving a genuine, sustainable activity."], thirdEmployer: ["Employer-led L/B application", "Third-country labour-market admission", "The employer applies before entry and work. Approval depends on qualifications, economic interest, precedence, pay conditions and available quotas."], thirdG: ["Permit G · restricted route", "Third-country cross-border application", "This route requires permanent residence in a neighbouring country, at least six months in its border zone, a Swiss border-zone job and labour-market approval."],
    thirdService: ["Prior work permit", "Service outside the notification route", "The assignment needs a cantonal work-permit application before work. For services over 90 days there is generally no entitlement."], thirdSelf: ["Self-employment application", "Prove lasting economic benefit", "A third-country founder must show overall economic interest, financing, viability and a lasting positive effect on the Swiss labour market."],     familyEu: ["Family reunification · EU/EFTA", "Residence through free-movement family rights", "Eligible spouses, registered partners and dependent relatives can join. Once admitted, the canton confirms work access on the issued permit."],
    familySwissC: ["Family reunification", "Joining a Swiss citizen or C holder", "The family residence filing comes first. Once admitted, the canton confirms whether a separate work permit is needed."], familyThird: ["Conditional family route", "Canton review required", "Family reunification for B or L sponsors depends on status, housing, means, relationship and cantonal assessment."],
    studyJob: ["Study or job-search review", "Existing study/graduate rules matter", "Student work, Swiss graduates and jobseekers follow status-specific limits. The canton or university must confirm the exact route."],
    studySideJob: ["Student work authorisation", "Work alongside recognised studies", "Students at a Swiss higher-education institution may take a side job after six months, usually up to 15 hours a week in term, if the university confirms it will not delay the degree and the employer applies."],
    studyResidence: ["Student residence", "Stay for recognised studies", "Admission to a state-recognised school, sufficient means and health insurance lead to a student residence permit, usually for one year and renewable until the studies end."],
    graduateSearch: ["Graduate job-search stay", "Six months after a Swiss degree", "Third-country graduates of a recognised Swiss higher-education institution may stay six months to look for qualified work. Later admission can waive labour-market precedence if the job is of overriding scientific or economic interest; a quota still applies."],
    euJobseeker: ["Job-seeker L EU/EFTA", "Look for work under free movement", "EU/EFTA jobseekers need no permit for three months. After that a short-stay L permit can be issued and extended up to one year if they have sufficient means and a genuine chance of finding work."],
    euInactive: ["Non-gainful EU/EFTA residence", "Means and insurance, then register", "EU/EFTA nationals not in gainful work may reside if they have sufficient means and health insurance. Register with the commune within 14 days."],
    specialist: ["Specialist authority check", "No safe automatic route", "The facts fall outside a reliable common route. Use the canton before travel, contracting or starting work."],
  },
  de: {
    swiss: ["Keine Ausländerbewilligung", "Schweizer Staatsangehörigkeit: normaler Arbeitsweg", "Schweizer benötigen keine ausländerrechtliche Arbeits- oder Aufenthaltsbewilligung."], existingOpen: ["Bestehender arbeitsfähiger Status", "Die heutige Bewilligung ist Ausgangspunkt", "C oder Ci gewähren meist breiten Arbeitszugang; ein Stellenwechsel ist in der Regel frei. Karte und kantonale Bedingungen bleiben massgeblich."], existingReview: ["Bestehende Bewilligung prüfen", "Änderung vor Arbeitsbeginn klären", "B, L und G können Stellen-, Kantons- oder Dauerauflagen enthalten."],
    existingLChange: ["Stellenwechsel mit L", "Gleiche Branche, Kantonsentscheid", "Drittstaat-L darf nur in derselben Branche und demselben Beruf wechseln, und nur wenn die heutige Stelle nicht zumutbar weitergeführt werden kann. Der neue Arbeitgeber beantragt vor Arbeitsbeginn."], existingBChange: ["Stellenwechsel mit B", "Meist Meldung, manchmal Bewilligung", "In der Regel kann B ohne neue Bewilligung die Stelle wechseln. Ist die Karte an eine bestimmte Stelle oder Arbeitsmarktauflage gebunden, vor Beginn den Kanton fragen."], settlementC: ["Niederlassungsbewilligung C", "Zuerst die Aufenthaltsdauer prüfen", "C ist meist nach fünf Jahren für EU-15/EFTA mit Niederlassungsvertrag und nach zehn Jahren für die übrigen möglich, wenn Integrations- und Sprachbedingungen erfüllt sind. Der Kanton entscheidet; es gibt keinen Automatismus."],
    statusNotify: ["Meldung der Erwerbstätigkeit", "Arbeit nach Meldung zulässig", "Anerkannte Flüchtlinge und Personen mit F dürfen nach Meldung schweizweit arbeiten."], statusS: ["Meldung für Status S", "Arbeit vor Beginn melden", "Mit Status S ist unselbständige oder selbständige Arbeit nach Meldung im Arbeitskanton möglich."], statusN: ["Vorgängige Bewilligung", "Ausweis N: Kantonsentscheid nötig", "Asylsuchende dürfen erst nach kantonaler Bewilligung arbeiten."],
    euNotify: ["90-Tage-Meldung", "Kurze EU/EFTA-Anstellung", "Bis drei Monate meldet der Schweizer Arbeitgeber die Beschäftigung online; normalerweise gibt es keine Aufenthaltsbewilligung."], euL: ["Bewilligung L EU/EFTA", "Kurzaufenthalt und Arbeit", "Ein Vertrag über drei und unter zwölf Monaten führt normalerweise zu L EU/EFTA."], euB: ["Bewilligung B EU/EFTA", "Fünfjähriger Aufenthaltsweg", "Ein Vertrag ab zwölf Monaten oder unbefristet führt normalerweise zu B EU/EFTA."], euG: ["Bewilligung G EU/EFTA", "Grenzgängerweg", "EU/EFTA-Personen mit Wohnsitz in EU/EFTA und wöchentlicher Rückkehr beantragen G im Arbeitskanton."],
    serviceFree: ["Möglicherweise meldefrei", "Erste acht Tage, allgemeine Branche", "EU/EFTA-Dienste können acht Tage meldefrei sein, ausser Branche oder Beruf löst Pflichten ab Tag eins aus."], serviceNotify: ["90-Tage-Dienstleistungsmeldung", "Einsatz vorab melden", "Berechtigte EU/EFTA-Dienste bis 90 Arbeitstage werden online, meist acht Tage vorher, gemeldet."], ukService: ["Schweiz–UK-Meldung", "Kurzer britischer Dienstleistungsweg", "Berechtigte UK-Entsendungen oder Selbständige nutzen das Meldeverfahren des Mobilitätsabkommens."],
    euSelf: ["Bewilligung B EU/EFTA", "Weg für Selbständige", "EU/EFTA-Personen können nach Anmeldung und Nachweis einer echten tragfähigen Tätigkeit selbständig arbeiten."], thirdEmployer: ["Arbeitgebergesuch L/B", "Drittstaatszulassung", "Der Arbeitgeber beantragt vor Einreise und Arbeit. Qualifikation, Gesamtinteresse, Vorrang, Lohn und Kontingente entscheiden."], thirdG: ["Bewilligung G · eingeschränkt", "Drittstaat-Grenzgänger", "Nötig sind Daueraufenthalt im Nachbarland, sechs Monate Grenzzone, Schweizer Grenzzonenstelle und Arbeitsmarktprüfung."],
    thirdService: ["Vorgängige Arbeitsbewilligung", "Dienst ausserhalb der Meldung", "Vor Arbeitsbeginn ist ein kantonales Gesuch nötig; über 90 Tage besteht in der Regel kein Anspruch."], thirdSelf: ["Gesuch Selbständigkeit", "Dauerhaften wirtschaftlichen Nutzen belegen", "Gründer aus Drittstaaten müssen Gesamtinteresse, Finanzierung, Tragfähigkeit und positiven Arbeitsmarkteffekt zeigen."],     familyEu: ["Familiennachzug · EU/EFTA", "Aufenthalt über Freizügigkeitsrechte", "Berechtigte Ehegatten, registrierte Partner und Abhängige können nachziehen. Nach der Zulassung bestätigt der Kanton den Arbeitszugang auf dem ausgestellten Ausweis."],
    familySwissC: ["Familiennachzug", "Zu Schweizer/in oder C-Inhaber/in", "Zuerst erfolgt der Familiennachzug. Nach der Zulassung bestätigt der Kanton, ob eine separate Arbeitsbewilligung nötig ist."], familyThird: ["Bedingter Familienweg", "Kantonale Prüfung nötig", "Bei B- oder L-Sponsoren zählen Status, Wohnung, Mittel, Beziehung und Kantonsentscheid."],
    studyJob: ["Studium-/Jobsucheprüfung", "Bestehender Status zählt", "Studierendenarbeit, Schweizer Absolventen und Jobsuchende haben statusbezogene Grenzen."],
    studySideJob: ["Bewilligung Nebenjob Studium", "Arbeit neben anerkanntem Studium", "Studierende an einer Schweizer Hochschule dürfen nach sechs Monaten nebenbei arbeiten, in der Regel höchstens 15 Wochenstunden im Semester, wenn die Hochschule bestätigt, dass der Abschluss nicht verzögert wird, und der Arbeitgeber das Gesuch stellt."],
    studyResidence: ["Aufenthalt zum Studium", "Aufenthalt für anerkannte Ausbildung", "Zulassung an einer staatlich anerkannten Schule, ausreichende Mittel und Krankenversicherung führen zu einer Studierendenbewilligung, meist ein Jahr, verlängerbar bis zum Abschluss."],
    graduateSearch: ["Jobsuche nach Schweizer Abschluss", "Sechs Monate nach dem Diplom", "Drittstaatsabsolventen einer anerkannten Schweizer Hochschule dürfen sechs Monate eine passende Stelle suchen. Spätere Zulassung kann den Inländervorrang aussetzen, wenn die Arbeit von überwiegendem wissenschaftlichem oder wirtschaftlichem Interesse ist; ein Kontingent gilt weiter."],
    euJobseeker: ["Jobsuche L EU/EFTA", "Stelle suchen unter Freizügigkeit", "EU/EFTA-Jobsuchende brauchen drei Monate keine Bewilligung. Danach kann L ausgestellt und bis ein Jahr verlängert werden, wenn Mittel und eine echte Chance auf eine Stelle belegt sind."],
    euInactive: ["EU/EFTA ohne Erwerbstätigkeit", "Mittel und Versicherung, dann anmelden", "EU/EFTA-Personen ohne Erwerbstätigkeit dürfen sich aufhalten, wenn Mittel und Krankenversicherung ausreichen. Innert 14 Tagen bei der Gemeinde anmelden."],
    specialist: ["Spezialprüfung", "Kein sicherer Automatismus", "Der Fall liegt ausserhalb eines verlässlichen Standardwegs. Vor Reise oder Arbeitsbeginn den Kanton fragen."],
  },
  fr: {
    swiss: ["Aucun permis migratoire", "Citoyen suisse : emploi ordinaire", "Les citoyens suisses n’ont pas besoin de permis de travail ou séjour pour étrangers."], existingOpen: ["Statut existant permettant le travail", "Le titre actuel est le point de départ", "Les statuts C ou Ci donnent généralement un large accès; un changement d’emploi est en principe libre. La carte et les conditions cantonales restent déterminantes."], existingReview: ["Révision du permis existant", "Vérifier le changement avant le travail", "Les permis B, L et G peuvent comporter des conditions de poste, canton ou durée."],
    existingLChange: ["Changement d’emploi avec L", "Même secteur, accord cantonal", "Un titulaire L d’un État tiers ne peut changer d’emploi que dans le même secteur et la même profession, et seulement si l’emploi actuel ne peut raisonnablement continuer. Le nouvel employeur dépose avant le travail."], existingBChange: ["Changement d’emploi avec B", "En principe notification, parfois autorisation", "En règle générale, un titulaire B peut changer d’emploi salarié sans nouveau permis. Si la carte est liée à un poste ou à une condition du marché du travail, demandez au canton avant de commencer."], settlementC: ["Permis d’établissement C", "Vérifier d’abord la durée de séjour", "Le C est en général possible après cinq ans pour les nationaux UE-15/AELE liés par un traité d’établissement, et après dix ans pour la plupart des autres, si les conditions d’intégration y compris la langue sont remplies. Le canton décide ; ce n’est pas un octroi automatique."],
    statusNotify: ["Annonce de l’activité", "Travail autorisé après annonce", "Les réfugiés reconnus et titulaires F peuvent travailler dans toute la Suisse après annonce."], statusS: ["Annonce statut S", "Annoncer avant le début", "Les titulaires S peuvent travailler comme salariés ou indépendants après annonce au canton de travail."], statusN: ["Autorisation préalable", "Permis N : accord cantonal", "Un demandeur d’asile ne peut commencer avant l’autorisation cantonale."],
    euNotify: ["Annonce 90 jours", "Emploi UE/AELE de courte durée", "Jusqu’à trois mois chez un employeur suisse, celui-ci effectue l’annonce en ligne; aucun titre de séjour n’est normalement délivré."], euL: ["Permis L UE/AELE", "Séjour et travail de courte durée", "Un contrat de plus de trois et moins de douze mois mène normalement au permis L."], euB: ["Permis B UE/AELE", "Voie de séjour de cinq ans", "Un contrat d’au moins douze mois ou illimité mène normalement au permis B."], euG: ["Permis G UE/AELE", "Voie frontalière", "Un citoyen UE/AELE résidant en UE/AELE et rentrant chaque semaine demande le G dans le canton de travail."],
    serviceFree: ["Service possiblement sans annonce", "Huit premiers jours, secteur général", "Les services transfrontaliers UE/AELE peuvent être sans annonce huit jours, sauf secteur ou profession particulière."], serviceNotify: ["Annonce de service 90 jours", "Annoncer la mission en avance", "Les services UE/AELE éligibles jusqu’à 90 jours utilisent l’annonce en ligne, normalement huit jours avant."], ukService: ["Annonce Suisse–Royaume-Uni", "Voie courte de prestation britannique", "Les prestataires britanniques éligibles utilisent la procédure de l’accord de mobilité des services."],
    euSelf: ["Permis B UE/AELE", "Voie indépendante", "Les citoyens UE/AELE peuvent devenir indépendants après inscription et preuve d’une activité réelle et viable."], thirdEmployer: ["Demande L/B par l’employeur", "Admission d’un État tiers", "L’employeur dépose avant l’entrée et le travail. Qualifications, intérêt économique, priorité, salaire et contingents comptent."], thirdG: ["Permis G · voie restreinte", "Frontalier d’un État tiers", "Il faut un séjour permanent dans un pays voisin, six mois en zone frontière, un emploi dans la zone suisse et l’accord du marché du travail."],
    thirdService: ["Permis de travail préalable", "Service hors procédure d’annonce", "Une demande cantonale est nécessaire avant le travail; au-delà de 90 jours, il n’existe généralement aucun droit."], thirdSelf: ["Demande d’activité indépendante", "Prouver un bénéfice économique durable", "Le fondateur doit démontrer intérêt général, financement, viabilité et effet durable sur le marché suisse."],     familyEu: ["Regroupement · UE/AELE", "Séjour par les droits de libre circulation", "Conjoints, partenaires enregistrés et proches à charge éligibles peuvent venir. Une fois admis, le canton confirme l’accès au travail sur le titre délivré."],
    familySwissC: ["Regroupement familial", "Rejoindre un Suisse ou titulaire C", "Le séjour familial est déposé en premier. Une fois admis, le canton confirme si un permis de travail distinct est nécessaire."], familyThird: ["Voie familiale conditionnelle", "Examen cantonal", "Pour sponsors B ou L, statut, logement, moyens, relation et canton déterminent l’issue."],
    studyJob: ["Examen études/recherche d’emploi", "Le statut existant compte", "Travail étudiant, diplômés suisses et demandeurs d’emploi suivent des limites propres au statut."],
    studySideJob: ["Autorisation d’activité accessoire", "Travailler à côté d’études reconnues", "Les étudiants d’une haute école suisse peuvent exercer une activité accessoire après six mois, en principe 15 heures par semaine en période de cours, si l’école confirme que le diplôme n’est pas retardé et que l’employeur dépose la demande."],
    studyResidence: ["Séjour d’études", "Rester pour une formation reconnue", "L’admission dans un établissement reconnu, des moyens suffisants et une assurance-maladie mènent à un permis d’études, en général un an, renouvelable jusqu’à la fin des études."],
    graduateSearch: ["Recherche d’emploi après diplôme suisse", "Six mois après le diplôme", "Les diplômés d’États tiers d’une haute école suisse reconnue peuvent rester six mois pour chercher un emploi qualifié. L’admission ultérieure peut déroger à la priorité indigène si l’emploi présente un intérêt scientifique ou économique prépondérant ; un contingent s’applique encore."],
    euJobseeker: ["Permis L de recherche d’emploi UE/AELE", "Chercher un emploi en libre circulation", "Les demandeurs d’emploi UE/AELE n’ont pas besoin de permis pendant trois mois. Ensuite un L de courte durée peut être délivré et prolongé jusqu’à un an s’ils justifient de moyens et d’une chance réelle de trouver un emploi."],
    euInactive: ["Séjour UE/AELE sans activité lucrative", "Moyens et assurance, puis inscription", "Les ressortissants UE/AELE sans activité lucrative peuvent séjourner s’ils ont des moyens suffisants et une assurance-maladie. S’inscrire à la commune dans les 14 jours."],
    specialist: ["Contrôle spécialisé", "Aucune voie automatique sûre", "Les faits sortent d’un parcours commun fiable. Contactez le canton avant voyage, contrat ou travail."],
  },
  it: {
    swiss: ["Nessun permesso migratorio", "Cittadino svizzero: impiego ordinario", "I cittadini svizzeri non necessitano di un permesso di lavoro o soggiorno per stranieri."], existingOpen: ["Statuto esistente con accesso al lavoro", "Il titolo attuale è il punto di partenza", "C o Ci danno di solito un ampio accesso; un cambio di posto è in genere libero. Restano decisive carta e condizioni cantonali."], existingReview: ["Esame del permesso esistente", "Chiarire il cambiamento prima del lavoro", "B, L e G possono avere condizioni di posto, cantone o durata."],
    existingLChange: ["Cambio di posto con L", "Stesso settore, decisione cantonale", "Un titolare L di Stato terzo può cambiare posto solo nello stesso settore e professione, e solo se il posto attuale non può ragionevolmente continuare. Il nuovo datore chiede prima del lavoro."], existingBChange: ["Cambio di posto con B", "Di solito notifica, a volte autorizzazione", "Di regola un titolare B può cambiare posto dipendente senza un nuovo permesso. Se la carta è legata a un posto o a una condizione del mercato del lavoro, chiedere al cantone prima di iniziare."], settlementC: ["Permesso di domicilio C", "Verificare prima la durata di soggiorno", "Il C è di solito possibile dopo cinque anni per i cittadini UE-15/AELS con trattato di domicilio e dopo dieci anni per gli altri, se sono soddisfatte le condizioni di integrazione inclusa la lingua. Decide il cantone; non è un automatismo."],
    statusNotify: ["Notifica dell’attività", "Lavoro ammesso dopo la notifica", "Rifugiati riconosciuti e titolari F possono lavorare in tutta la Svizzera dopo la notifica."], statusS: ["Notifica per lo statuto S", "Notificare prima dell’inizio", "Con lo statuto S il lavoro dipendente o indipendente è possibile dopo la notifica al cantone di lavoro."], statusN: ["Autorizzazione preventiva", "Permesso N: serve la decisione cantonale", "Un richiedente l’asilo può iniziare solo dopo l’autorizzazione cantonale."],
    euNotify: ["Notifica di 90 giorni", "Impiego UE/AELS breve", "Fino a tre mesi il datore svizzero notifica online; di solito non si rilascia un permesso di soggiorno."], euL: ["Permesso L UE/AELS", "Soggiorno breve e lavoro", "Un contratto di più di tre e meno di dodici mesi porta di solito a L UE/AELS."], euB: ["Permesso B UE/AELS", "Via di soggiorno di cinque anni", "Un contratto di almeno dodici mesi o a tempo indeterminato porta di solito a B UE/AELS."], euG: ["Permesso G UE/AELS", "Via frontaliera", "Un cittadino UE/AELS con domicilio in UE/AELS e ritorno almeno settimanale chiede il G nel cantone di lavoro."],
    serviceFree: ["Servizio forse senza notifica", "Primi otto giorni, settore generale", "I servizi UE/AELS possono essere senza notifica per otto giorni, salvo settore o professione con obblighi dal primo giorno."], serviceNotify: ["Notifica di servizio 90 giorni", "Notificare l’incarico in anticipo", "I servizi UE/AELS ammessi fino a 90 giorni lavorativi si notificano online, di solito otto giorni prima."], ukService: ["Notifica Svizzera–Regno Unito", "Via breve britannica", "I prestatori britannici ammessi usano la notifica dell’accordo sulla mobilità dei servizi."],
    euSelf: ["Permesso B UE/AELS", "Via per indipendenti", "I cittadini UE/AELS possono diventare indipendenti dopo l’iscrizione e la prova di un’attività reale e sostenibile."], thirdEmployer: ["Domanda L/B del datore", "Ammissione di Stato terzo", "Il datore chiede prima dell’ingresso e del lavoro. Contano qualifica, interesse complessivo, precedenza, salario e contingenti."], thirdG: ["Permesso G · via ristretta", "Frontaliero di Stato terzo", "Servono domicilio permanente nel Paese vicino, sei mesi in zona di frontiera, un posto nella zona svizzera e l’esame del mercato del lavoro."],
    thirdService: ["Permesso di lavoro preventivo", "Servizio fuori dalla notifica", "Prima del lavoro serve una domanda cantonale; oltre 90 giorni di regola non c’è un diritto."], thirdSelf: ["Domanda di attività indipendente", "Provare un beneficio economico duraturo", "Il fondatore di uno Stato terzo deve mostrare interesse complessivo, finanziamento, sostenibilità ed effetto positivo sul mercato svizzero."],     familyEu: ["Ricongiungimento · UE/AELS", "Soggiorno tramite i diritti di libera circolazione", "Coniugi, partner registrati e familiari a carico ammessi possono raggiungere. Dopo l’ammissione, il cantone conferma l’accesso al lavoro sul titolo rilasciato."],
    familySwissC: ["Ricongiungimento familiare", "Raggiungere un cittadino svizzero o un titolare C", "Prima si deposita il soggiorno familiare. Dopo l’ammissione, il cantone conferma se serve un permesso di lavoro separato."], familyThird: ["Via familiare condizionata", "Esame cantonale necessario", "Per sostenitori B o L contano statuto, alloggio, mezzi, relazione e decisione cantonale."],
    studyJob: ["Esame studio/ricerca di lavoro", "Conta lo statuto esistente", "Lavoro studentesco, diplomati svizzeri e chi cerca lavoro hanno limiti propri dello statuto."],
    studySideJob: ["Autorizzazione al lavoro accessorio", "Lavoro accanto a studi riconosciuti", "Gli studenti di un’alta scuola svizzera possono lavorare in parallelo dopo sei mesi, di regola al massimo 15 ore a settimana in semestre, se l’istituto conferma che il diploma non slitta e il datore presenta la domanda."],
    studyResidence: ["Soggiorno per studio", "Restare per una formazione riconosciuta", "L’ammissione in un istituto riconosciuto, mezzi sufficienti e assicurazione malattia portano a un permesso di studio, di solito un anno, rinnovabile fino alla fine degli studi."],
    graduateSearch: ["Ricerca di lavoro dopo diploma svizzero", "Sei mesi dopo il diploma", "I diplomati di Stati terzi di un’alta scuola svizzera riconosciuta possono restare sei mesi per cercare un lavoro qualificato. L’ammissione successiva può derogare alla precedenza indigena se il lavoro è di interesse scientifico o economico preponderante; resta un contingente."],
    euJobseeker: ["L per ricerca di lavoro UE/AELS", "Cercare lavoro in libera circolazione", "Chi cerca lavoro UE/AELS non ha bisogno di permesso per tre mesi. Poi un L di breve durata può essere rilasciato e prorogato fino a un anno con mezzi e una reale possibilità di trovare lavoro."],
    euInactive: ["Soggiorno UE/AELS senza attività lucrativa", "Mezzi e assicurazione, poi iscrizione", "I cittadini UE/AELS senza attività lucrativa possono soggiornare se hanno mezzi sufficienti e assicurazione malattia. Iscriversi al comune entro 14 giorni."],
    specialist: ["Esame specializzato", "Nessun automatismo sicuro", "Il caso è fuori da una via standard affidabile. Chiedere al cantone prima di viaggio, contratto o lavoro."],
  },
  rm: {
    swiss: ["Nagina permissiun per esters", "Burgaisia svizra: via da lavur normala", "Svizzers na basegnan nagina permissiun da lavur u dimora per esters."], existingOpen: ["Status existent che permetta da lavurar", "La permissiun actuala è il punct da partenza", "C u Ci dattan per ordinari vast access; ina midada da plazza è per ordinari libra. Carta e cundiziuns chantunalas restan decisivas."], existingReview: ["Examinar la permissiun existenta", "Schliar la midada avant l’entschatta da lavur", "B, L e G pon cuntegnair cundiziuns da plazza, chantun u durada."],
    existingLChange: ["Midada da plazza cun L", "Medema branscha, decisiun dal chantun", "In L da stadis terzs dastga midar plazza mo en la medema branscha e professiun, e mo sche la plazza actuala na po betg vegnir mantegnida en moda raschunaivla. Il nov patrun dumonda avant la lavur."], existingBChange: ["Midada da plazza cun B", "Per ordinari annunzia, balsem permissiun", "Per ordinari po B midar plazza dependenta senza nova permissiun. Sche la carta è colliada cun ina plazza u ina cundiziun dal martgà da lavur, dumandar il chantun avant l’entschatta."], settlementC: ["Permissiun da domicili C", "Examinar l’emprim la durada da dimora", "C è per ordinari pussaivel suenter tschintg onns per burgais da l’UE-15/AELE cun contract da domicili e suenter diesch onns per ils auters, sche las cundiziuns d’integraziun inclus la lingua èn ademplidas. Il chantun decida; i n’è betg in automatissem."],
    statusNotify: ["Annunzia da l’activitad", "Lavur permessa suenter l’annunzia", "Fugitivs renconuschids e persunas cun F dastgan lavurar en tut la Svizra suenter l’annunzia."], statusS: ["Annunzia per il status S", "Annunziar avant l’entschatta", "Cun status S è lavur dependenta u sulsleva pussaivla suenter l’annunzia en il chantun da lavur."], statusN: ["Permissiun preventiva", "Carta N: decisiun dal chantun necessaria", "Tschertgaders d’asil dastgan cumenzar pir suenter la permissiun chantunala."],
    euNotify: ["Annunzia da 90 dis", "Engaschi curt UE/AELE", "Fin trais mais annunzia il patrun svizzer online; per ordinari na vegn dada nagina permissiun da dimora."], euL: ["Permissiun L UE/AELE", "Curta dimora e lavur", "In contract da dapli che trais e main che dudesch mais maina per ordinari a L UE/AELE."], euB: ["Permissiun B UE/AELE", "Via da dimora da tschintg onns", "In contract d’almain dudesch mais u senza termin maina per ordinari a B UE/AELE."], euG: ["Permissiun G UE/AELE", "Via da pendulars", "Persunas da l’UE/AELE cun dimora en l’UE/AELE e return almain emnaivla dumondan G en il chantun da lavur."],
    serviceFree: ["Eventualmain senza annunzia", "Emprims otg dis, branscha generala", "Servetschs UE/AELE pon esser otg dis senza annunzia, nun ch’ina branscha u professiun laschia nascher obligs dal emprim di."], serviceNotify: ["Annunzia da servetsch da 90 dis", "Annunziar l’incumbenza avant", "Servetschs UE/AELE autorisads fin 90 dis da lavur vegnan annunziads online, per ordinari otg dis avant."], ukService: ["Annunzia Svizra–Reginavel Unì", "Via curta britannica", "Purschiders britannics autorisads dovran la procedura d’annunzia da l’accord da mobilitad."],
    euSelf: ["Permissiun B UE/AELE", "Via per sulslevs", "Persunas da l’UE/AELE pon daventar sulslevas suenter l’annunzia e la cumprova d’ina activitad vera e durabla."], thirdEmployer: ["Dumonda L/B dal patrun", "Admissiun da stadis terzs", "Il patrun dumonda avant entrada e lavur. Qualificaziun, interess general, precedenza, salari e contingents decidan."], thirdG: ["Permissiun G · via limitada", "Pendular da stadis terzs", "Necessaris èn dimora permanenta en il pajais vischin, sis mais en la zona da cunfin, ina plazza svizra da cunfin e l’examen dal martgà da lavur."],
    thirdService: ["Permissiun da lavur preventiva", "Servetsch ordaifer l’annunzia", "Avant la lavur è necessaria ina dumonda chantunala; sur 90 dis n’exista per ordinari nagin dretg."], thirdSelf: ["Dumonda da sulslevadad", "Cumprovar in niz economic durabel", "Fundaturs da stadis terzs ston mussar interess general, finanziament, capacitad da durar ed effect positiv sin il martgà da lavur svizzer."],     familyEu: ["Reuniun da famiglia · UE/AELE", "Dimora sur ils dretgs da libra circulaziun", "Conjugals, partenaris registrads e dependents autorisads pon suandar. Suenter l’admissiun conferma il chantun l’access da lavur sin la permissiun dada."],
    familySwissC: ["Reuniun da famiglia", "Tar ina persuna svizra u ina persuna cun C", "L’emprim succeda la reuniun da famiglia. Suenter l’admissiun conferma il chantun sche ina permissiun da lavur separada è necessaria."], familyThird: ["Via da famiglia cundiziunada", "Examen chantunal necessari", "Tar sponsurs B u L quintan status, abitaziun, meds, relaziun e decisiun dal chantun."],
    studyJob: ["Examen da studi/tschertga da lavur", "Il status existent quint", "Lavur da students, absolvents svizzers e tschertgaders da lavur han limits tenor il status."],
    studySideJob: ["Permissiun da lavur accessora", "Lavur sper studi recunuschì", "Students d’ina scola auta svizra dastgan lavurar sper il studi suenter sis mais, per ordinari maximalmain 15 uras emnaivlas durant il semester, sche la scola conferma ch’il conclus na vegn betg retardà e sche il patrun depona la dumonda."],
    studyResidence: ["Dimora da studi", "Restar per ina furmaziun recunuschida", "L’admissiun tar ina scola recunuschida dal stadi, meds suffizients ed assicuranza da malsogna mainan ad ina permissiun da studi, per ordinari in onn, prolungabla fin la fin dal studi."],
    graduateSearch: ["Tschertga da lavur suenter conclus svizzer", "Sis mais suenter il diplom", "Absolvents da stadis terzs d’ina scola auta svizra recunuschida dastgan restar sis mais per tschertgar ina plazza qualifitgada. L’admissiun posteriura po suspender la precedenza indigena sche la lavur è d’interess scientific u economic preponderant; in contingent vala vinavant."],
    euJobseeker: ["L da tschertga da lavur UE/AELE", "Tschertgar lavur sut libra circulaziun", "Tschertgaders da lavur UE/AELE na basegnan nagina permissiun duront trais mais. Suenter po L vegnir dà e prolungà fin in onn sche meds ed ina schanza vera da chattar ina plazza èn cumprovads."],
    euInactive: ["Dimora UE/AELE senza activitad lucrativa", "Meds ed assicuranza, lura s’annunziar", "Persunas da l’UE/AELE senza activitad lucrativa dastgan dimorar sche meds ed assicuranza da malsogna bastan. S’annunziar tar la vischnanca entaifer 14 dis."],
    specialist: ["Examen spezial", "Nagin automatissem segir", "Il cas è ordaifer ina via standard fidabla. Dumandar il chantun avant viadi, contract u lavur."],
  },
};

const actionText: Record<Lang, Record<string, string>> = {
  en: {
    noPermit: "Use the normal employment, payroll and social-insurance process; no immigration work permit is needed.", verifyExisting: "Send the current permit, proposed job and start date to the canton and obtain written confirmation if conditions may change.", reportWork: "The employer reports the start, end and any job change to the competent canton before work begins.", requestN: "The employer applies to the canton of work and waits for authorisation before the person starts.",
    employerNotify: "The Swiss employer submits the EasyGov notification no later than the day before the first workday.", providerNotify: "The posting company or self-employed provider submits the EasyGov notification, normally at least eight days in advance.", noNotice: "Confirm the company and worker have not used the eight notification-free days and that no first-day sector rule applies.", regulatedCheck: "If the profession is regulated, complete the separate qualification-recognition declaration before practising.",
    registerCommune: "Register with the commune of residence within 14 days of arrival and before starting work.", applyL: "Present ID/passport and written employment confirmation to apply for an L EU/EFTA permit.", applyB: "Present ID/passport and a 12-month or unlimited contract to apply for a B EU/EFTA permit.", applyG: "Apply to the immigration/labour authority in the canton of work for a G permit.", proveWeekly: "Document the foreign main residence and ability to return there at least once a week.",
    proveSelf: "Register and submit evidence of genuine self-employment and ability to support the household before beginning activity.", employerPrepare: "The employer prepares the complete labour-market case and the cantonal application form before entry or work.", cantonReview: "The canton reviews the application first; approved third-country cases are normally forwarded to SEM.", semReview: "Wait for the SEM/cantonal decision. A positive decision alone may not yet authorise entry.", visaAfterApproval: "Follow the Swiss representation’s visa or entry-authorisation instructions after the work approval.", registerArrival: "After entry, register at the commune within 14 days and before starting work.",
    insurance: "Arrange mandatory Swiss health insurance within three months where Swiss residence rules apply.", familyApply: "File family reunification with the canton and provide civil-status, identity, housing and sponsor documents.", familyWork: "After family admission, confirm the permit card/registration; the canton confirms work access on the issued status.", businessCase: "Submit a detailed business plan, financing, market case, staffing impact and commercial-register documents.", contactCanton: "Contact the canton of work/residence with the full facts before travel, contract start or activity.", universityCheck: "Ask the canton and the educational institution to confirm permitted hours, waiting periods and status conditions.", ensureConditions: "Keep the confirmation and comply with Swiss pay, working-condition and posting rules.", notifyJobChange: "Notify the canton of the new employer and start date before work begins; obtain written confirmation if the card carries a job condition.", applySettlement: "Ask the canton whether the residence period, integration and language minima for a C permit are met, and file only with their current checklist.", registerInactive: "Register with the commune of residence within 14 days and apply for a non-gainful residence permit with proof of means and insurance.", proveMeans: "Show sufficient financial means for the household so that Swiss social assistance would not be required.", employerStudentWork: "The employer applies for the side job and attaches the university confirmation that the hours will not delay the degree.", applyJobseeker: "If the job search will last more than three months, apply for a short-stay L permit and document ongoing search efforts and means.", applyGraduateStay: "Apply to the canton for the six-month job-search authorisation before the student permit expires, with the diploma, housing and means.", familyWorkEu: "Once admitted, EU/EFTA family members normally have access to employment on the issued permit; confirm the card wording.", familyWorkSwissC: "Once admitted, a spouse of a Swiss citizen or C holder normally has broad work access; confirm with the canton whether a separate work permit is needed.", familyWorkThird: "Work access for family members of a third-country B or L sponsor is canton-specific; do not start work until the card or a written confirmation allows it.",
  },
  de: {
    noPermit: "Normales Arbeits-, Lohn- und Sozialversicherungsverfahren nutzen; keine ausländerrechtliche Arbeitsbewilligung.", verifyExisting: "Heutige Bewilligung, neue Stelle und Startdatum dem Kanton senden und Änderungen schriftlich bestätigen lassen.", reportWork: "Der Arbeitgeber meldet Beginn, Ende und Stellenwechsel vor Arbeitsbeginn dem zuständigen Kanton.", requestN: "Der Arbeitgeber beantragt im Arbeitskanton und wartet vor Arbeitsbeginn auf die Bewilligung.", employerNotify: "Der Schweizer Arbeitgeber meldet über EasyGov spätestens am Tag vor Arbeitsbeginn.", providerNotify: "Entsendefirma oder Selbständige melden über EasyGov, normalerweise mindestens acht Tage vorher.", noNotice: "Prüfen, ob die acht meldefreien Tage ungenutzt sind und keine Branche ab Tag eins meldepflichtig ist.", regulatedCheck: "Bei reglementiertem Beruf zusätzlich Anerkennungserklärung vor Berufsausübung abschliessen.", registerCommune: "Innerhalb 14 Tagen nach Einreise und vor Arbeitsbeginn bei der Wohngemeinde anmelden.", applyL: "Ausweis und schriftliche Arbeitsbestätigung für L EU/EFTA vorlegen.", applyB: "Ausweis und Vertrag ab 12 Monaten/unbefristet für B EU/EFTA vorlegen.", applyG: "G-Bewilligung bei der Migrations-/Arbeitsmarktbehörde des Arbeitskantons beantragen.", proveWeekly: "Ausländischen Hauptwohnsitz und mindestens wöchentliche Rückkehr belegen.", proveSelf: "Echte Selbständigkeit und Unterhaltsfähigkeit vor Tätigkeitsbeginn nachweisen.", employerPrepare: "Arbeitgeber erstellt vor Einreise/Arbeit das vollständige Arbeitsmarktgesuch.", cantonReview: "Der Kanton prüft zuerst; genehmigte Drittstaatsfälle gehen normalerweise ans SEM.", semReview: "SEM-/Kantonsentscheid abwarten; ein positiver Entscheid erlaubt nicht zwingend schon die Einreise.", visaAfterApproval: "Nach Arbeitszulassung den Visum-/Einreiseanweisungen der Schweizer Vertretung folgen.", registerArrival: "Nach Einreise binnen 14 Tagen und vor Arbeitsbeginn bei der Gemeinde anmelden.", insurance: "Bei Schweizer Wohnsitz innert drei Monaten obligatorische Krankenversicherung abschliessen.", familyApply: "Familiennachzug mit Zivilstands-, Identitäts-, Wohnungs- und Sponsornachweisen einreichen.", familyWork: "Nach Zulassung Ausweis/Anmeldung bestätigen; der Kanton bestätigt den Arbeitszugang auf dem ausgestellten Status.", businessCase: "Businessplan, Finanzierung, Markt, Beschäftigungseffekt und Handelsregisterunterlagen einreichen.", contactCanton: "Vor Reise, Vertragsbeginn oder Arbeit den zuständigen Kanton mit allen Fakten kontaktieren.", universityCheck: "Kanton und Hochschule zu Arbeitsstunden, Wartefristen und Statusbedingungen fragen.", ensureConditions: "Bestätigung aufbewahren und Schweizer Lohn-, Arbeits- und Entsenderegeln einhalten.", notifyJobChange: "Neuen Arbeitgeber und Startdatum vor Arbeitsbeginn dem Kanton melden; schriftliche Bestätigung einholen, wenn die Karte eine Stellenauflage trägt.", applySettlement: "Beim Kanton klären, ob Aufenthaltsdauer, Integration und Sprachminima für C erfüllt sind, und nur mit der aktuellen Checkliste einreichen.", registerInactive: "Innert 14 Tagen bei der Wohngemeinde anmelden und eine Bewilligung ohne Erwerbstätigkeit mit Mittel- und Versicherungsnachweis beantragen.", proveMeans: "Ausreichende Mittel für den Haushalt nachweisen, sodass keine Schweizer Sozialhilfe nötig wäre.", employerStudentWork: "Der Arbeitgeber beantragt den Nebenjob und legt die Hochschulbestätigung bei, dass die Stunden den Abschluss nicht verzögern.", applyJobseeker: "Dauert die Jobsuche länger als drei Monate, L beantragen und laufende Suche sowie Mittel belegen.", applyGraduateStay: "Die sechsmonatige Jobsuchebewilligung vor Ablauf der Studierendenbewilligung beim Kanton beantragen, mit Diplom, Wohnung und Mitteln.", familyWorkEu: "Nach Zulassung haben EU/EFTA-Familienangehörige in der Regel Arbeitszugang auf dem ausgestellten Ausweis; den Kartentext prüfen.", familyWorkSwissC: "Nach Zulassung hat der Ehegatte einer Schweizer Person oder C-Inhaberin in der Regel breiten Arbeitszugang; beim Kanton klären, ob eine separate Arbeitsbewilligung nötig ist.", familyWorkThird: "Der Arbeitszugang von Familienangehörigen eines Drittstaat-B- oder L-Sponsors ist kantonsabhängig; nicht arbeiten, bis Karte oder schriftliche Bestätigung es erlaubt.",
  },
  fr: {
    noPermit: "Suivre les démarches ordinaires d’emploi, paie et assurances; aucun permis migratoire de travail.", verifyExisting: "Transmettre le permis actuel, le nouvel emploi et la date au canton; obtenir confirmation écrite si les conditions changent.", reportWork: "L’employeur annonce début, fin et changement d’emploi au canton avant le travail.", requestN: "L’employeur demande au canton du travail et attend l’autorisation avant le début.", employerNotify: "L’employeur suisse effectue l’annonce EasyGov au plus tard la veille du premier jour.", providerNotify: "L’entreprise détachante ou l’indépendant annonce via EasyGov, normalement huit jours avant.", noNotice: "Confirmer que les huit jours sans annonce restent disponibles et qu’aucune règle dès le premier jour ne s’applique.", regulatedCheck: "Pour une profession réglementée, accomplir la déclaration de reconnaissance avant l’exercice.", registerCommune: "S’inscrire à la commune dans les 14 jours suivant l’arrivée et avant de travailler.", applyL: "Présenter identité et confirmation d’emploi pour demander un permis L UE/AELE.", applyB: "Présenter identité et contrat de 12 mois/illimité pour demander un permis B UE/AELE.", applyG: "Demander G auprès de l’autorité du canton de travail.", proveWeekly: "Prouver la résidence principale étrangère et le retour au moins hebdomadaire.", proveSelf: "Prouver activité indépendante réelle et moyens avant de commencer.", employerPrepare: "L’employeur prépare le dossier complet du marché du travail avant entrée ou travail.", cantonReview: "Le canton examine d’abord; les dossiers États tiers approuvés vont normalement au SEM.", semReview: "Attendre la décision SEM/canton; une décision positive n’autorise pas toujours encore l’entrée.", visaAfterApproval: "Après accord de travail, suivre les instructions visa/entrée de la représentation suisse.", registerArrival: "Après l’entrée, s’inscrire dans les 14 jours et avant le travail.", insurance: "Souscrire l’assurance-maladie suisse dans les trois mois lorsque le séjour l’exige.", familyApply: "Déposer le regroupement avec actes civils, identité, logement et documents du sponsor.", familyWork: "Après admission, confirmer titre/inscription; le canton confirme l’accès au travail sur le statut délivré.", businessCase: "Fournir plan d’affaires, financement, marché, effet sur l’emploi et registre du commerce.", contactCanton: "Contacter le canton avec tous les faits avant voyage, contrat ou activité.", universityCheck: "Faire confirmer par canton et établissement les heures, délais et conditions du statut.", ensureConditions: "Conserver la confirmation et respecter salaire, travail et détachement suisses.", notifyJobChange: "Annoncer au canton le nouvel employeur et la date avant le travail ; obtenir une confirmation écrite si la carte porte une condition d’emploi.", applySettlement: "Demander au canton si la durée de séjour, l’intégration et les minima linguistiques pour un C sont remplis, et déposer uniquement avec leur liste actuelle.", registerInactive: "S’inscrire à la commune dans les 14 jours et demander un permis sans activité lucrative avec preuves de moyens et d’assurance.", proveMeans: "Justifier de moyens suffisants pour le ménage afin de ne pas recourir à l’aide sociale suisse.", employerStudentWork: "L’employeur demande l’activité accessoire et joint la confirmation de l’école que les heures ne retardent pas le diplôme.", applyJobseeker: "Si la recherche d’emploi dure plus de trois mois, demander un L de courte durée et documenter la recherche et les moyens.", applyGraduateStay: "Demander au canton l’autorisation de recherche de six mois avant l’échéance du permis d’études, avec diplôme, logement et moyens.", familyWorkEu: "Une fois admis, les membres de famille UE/AELE ont en principe accès à l’emploi sur le titre délivré ; vérifier le libellé de la carte.", familyWorkSwissC: "Une fois admis, le conjoint d’un Suisse ou titulaire C a en principe un large accès au travail ; confirmer auprès du canton si un permis distinct est nécessaire.", familyWorkThird: "L’accès au travail des proches d’un sponsor B ou L d’État tiers dépend du canton ; ne pas commencer avant la carte ou une confirmation écrite.",
  },
  it: {
    noPermit: "Seguire le procedure ordinarie di impiego, salario e assicurazioni sociali; nessun permesso di lavoro per stranieri.", verifyExisting: "Inviare al cantone il titolo attuale, il nuovo posto e la data d’inizio e farsi confermare per scritto eventuali cambiamenti.", reportWork: "Il datore notifica inizio, fine e cambi di posto al cantone competente prima del lavoro.", requestN: "Il datore chiede al cantone di lavoro e attende l’autorizzazione prima dell’inizio.", employerNotify: "Il datore svizzero notifica su EasyGov al più tardi il giorno prima del primo giorno di lavoro.", providerNotify: "L’impresa che distacca o l’indipendente notifica su EasyGov, di solito almeno otto giorni prima.", noNotice: "Verificare che gli otto giorni senza notifica non siano usati e che nessun settore obblighi dal primo giorno.", regulatedCheck: "Per una professione regolamentata, completare anche la dichiarazione di riconoscimento prima di esercitare.", registerCommune: "Iscriversi al comune di domicilio entro 14 giorni dall’arrivo e prima di iniziare a lavorare.", applyL: "Presentare documento e conferma scritta d’impiego per chiedere L UE/AELS.", applyB: "Presentare documento e contratto di 12 mesi/indeterminato per chiedere B UE/AELS.", applyG: "Chiedere il G all’autorità di migrazione/mercato del lavoro del cantone di lavoro.", proveWeekly: "Documentare il domicilio principale all’estero e il ritorno almeno settimanale.", proveSelf: "Provare un’attività indipendente reale e i mezzi di sussistenza prima di iniziare.", employerPrepare: "Il datore prepara il dossier completo del mercato del lavoro prima dell’ingresso o del lavoro.", cantonReview: "Il cantone esamina per primo; i casi di Stati terzi approvati vanno di solito al SEM.", semReview: "Attendere la decisione SEM/cantone; una decisione positiva non autorizza sempre già l’ingresso.", visaAfterApproval: "Dopo l’ammissione al lavoro, seguire le istruzioni di visto/ingresso della rappresentanza svizzera.", registerArrival: "Dopo l’ingresso, iscriversi al comune entro 14 giorni e prima di lavorare.", insurance: "Se vale il domicilio svizzero, stipulare l’assicurazione malattia obbligatoria entro tre mesi.", familyApply: "Depositare il ricongiungimento con atti di stato civile, identità, alloggio e documenti del sostenitore.", familyWork: "Dopo l’ammissione, confermare titolo/iscrizione; il cantone conferma l’accesso al lavoro sullo statuto rilasciato.", businessCase: "Presentare piano d’affari, finanziamento, mercato, effetto sull’occupazione e documenti del registro di commercio.", contactCanton: "Contattare il cantone competente con tutti i fatti prima di viaggio, contratto o lavoro.", universityCheck: "Chiedere a cantone e istituto ore ammesse, termini di attesa e condizioni dello statuto.", ensureConditions: "Conservare la conferma e rispettare salario, condizioni di lavoro e regole di distacco svizzere.", notifyJobChange: "Notificare al cantone il nuovo datore e la data prima del lavoro; ottenere conferma scritta se la carta ha una condizione di posto.", applySettlement: "Chiedere al cantone se durata di soggiorno, integrazione e minimi linguistici per il C sono soddisfatti e depositare solo con la loro lista attuale.", registerInactive: "Iscriversi al comune entro 14 giorni e chiedere un permesso senza attività lucrativa con prove di mezzi e assicurazione.", proveMeans: "Provare mezzi sufficienti per il nucleo così da non ricorrere all’aiuto sociale svizzero.", employerStudentWork: "Il datore chiede il lavoro accessorio e allega la conferma dell’istituto che le ore non ritardano il diploma.", applyJobseeker: "Se la ricerca di lavoro dura più di tre mesi, chiedere un L di breve durata e documentare ricerca e mezzi.", applyGraduateStay: "Chiedere al cantone l’autorizzazione di ricerca di sei mesi prima della scadenza del permesso di studio, con diploma, alloggio e mezzi.", familyWorkEu: "Dopo l’ammissione, i familiari UE/AELS hanno di regola accesso al lavoro sul titolo rilasciato; verificare il testo della carta.", familyWorkSwissC: "Dopo l’ammissione, il coniuge di un cittadino svizzero o titolare C ha di regola un ampio accesso al lavoro; confermare con il cantone se serve un permesso separato.", familyWorkThird: "L’accesso al lavoro dei familiari di un sostenitore B o L di Stato terzo dipende dal cantone; non iniziare prima della carta o di una conferma scritta.",
  },
  rm: {
    noPermit: "Dovrar la procedura normala da lavur, salari ed assicuranzas socialas; nagina permissiun da lavur per esters.", verifyExisting: "Trametter la permissiun actuala, la nova plazza e la data al chantun e laschar confermar per scrit midadas.", reportWork: "Il patrun annunzia entschatta, fin e midament da plazza al chantun cumpetent avant la lavur.", requestN: "Il patrun dumonda en il chantun da lavur ed spetga la permissiun avant l’entschatta.", employerNotify: "Il patrun svizzer annunzia via EasyGov il pli tard il di avant l’emprim di da lavur.", providerNotify: "L’interpresa che trametta u il sulslev annunzia via EasyGov, per ordinari almain otg dis avant.", noNotice: "Examinar sche ils otg dis senza annunzia n’èn betg duvrads e sche nagina branscha n’è suttamessa dal emprim di.", regulatedCheck: "Tar ina professiun reglada cumplettar er la decleraziun da recunuschientscha avant l’exercizi.", registerCommune: "S’annunziar tar la vischnanca da dimora entaifer 14 dis suenter l’entrada e davant da cumenzar a lavurar.", applyL: "Presentar legitimaziun e conferma scritta da lavur per L UE/AELE.", applyB: "Presentar legitimaziun e contract da 12 mais/senza termin per B UE/AELE.", applyG: "Dumandar G tar l’autoritad da migraziun/martgà da lavur dal chantun da lavur.", proveWeekly: "Cumprovar la dimora principala a l’exteriur ed il return almain emnaivel.", proveSelf: "Cumprovar ina sulslevadad vera e la capacitad da mantegnair avant l’entschatta.", employerPrepare: "Il patrun elavura avant entrada/lavur la dumonda cumpleta dal martgà da lavur.", cantonReview: "Il chantun examina l’emprim; cas da stadis terzs approvads van per ordinari al SEM.", semReview: "Spetgar la decisiun SEM/chantun; ina decisiun positiva na permetta betg adina gia l’entrada.", visaAfterApproval: "Suenter l’admissiun da lavur suandar las instrucziuns da visum/entrada da la represchentanza svizra.", registerArrival: "Suenter l’entrada s’annunziar tar la vischnanca entaifer 14 dis e davant da lavurar.", insurance: "Tar dimora svizra terminar l’assicuranza da malsogna obligatorica entaifer trais mais.", familyApply: "Deponer la reuniun da famiglia cun documents da stadi civil, identitad, abitaziun e sponsor.", familyWork: "Suenter l’admissiun confermar carta/annunzia; il chantun conferma l’access da lavur sin il status dà.", businessCase: "Deponer plan d’affars, finanziament, martgà, effect sin l’occupaziun e documents dal register da commerzi.", contactCanton: "Contactar il chantun cumpetent cun tut ils fatgs avant viadi, contract u lavur.", universityCheck: "Dumandar chantun ed instituzione davart uras, termins d’aspectativa e cundiziuns dal status.", ensureConditions: "Conservar la conferma e resguardar salari, cundiziuns da lavur e reglas d’emessa svizras.", notifyJobChange: "Annunziar al chantun il nov patrun e la data avant la lavur; laschar confermar per scrit sche la carta ha ina cundiziun da plazza.", applySettlement: "Dumandar il chantun sche durada da dimora, integraziun e lims da lingua per C èn ademplids e deponer mo cun lur glista actuala.", registerInactive: "S’annunziar tar la vischnanca entaifer 14 dis e dumandar ina permissiun senza activitad lucrativa cun cumprova da meds ed assicuranza.", proveMeans: "Mussar meds suffizients per la chasa uschia ch’i na dovra nagina agid social svizzer.", employerStudentWork: "Il patrun dumonda la lavur accessora e metta tar la conferma da la scola che las uras na retardeschan betg il conclus.", applyJobseeker: "Sche la tschertga da lavur dura dapli che trais mais, dumandar L e cumprovar tschertga e meds.", applyGraduateStay: "Dumandar al chantun la permissiun da tschertga da sis mais avant che la permissiun da studi scada, cun diplom, abitaziun e meds.", familyWorkEu: "Suenter l’admissiun han commembers da famiglia UE/AELE per ordinari access da lavur sin la permissiun dada; examinar il text da la carta.", familyWorkSwissC: "Suenter l’admissiun ha il conjugal d’ina persuna svizra u d’ina persuna cun C per ordinari vast access da lavur; confermar tar il chantun sche ina permissiun separada è necessaria.", familyWorkThird: "L’access da lavur da commembers da famiglia d’in sponsur B u L da stadis terzs dependa dal chantun; betg cumenzar avant la carta u ina conferma scritta.",
  },
};

const docText: Record<Lang, Record<string, string>> = {
  en: { id: "Valid passport or identity card", permit: "Current Swiss permit card and decision", contract: "Signed employment contract or written confirmation", cantonForm: "Cantonal application form", cv: "Tabular CV and work references", qualifications: "Diplomas, qualifications and certified translations", recruitment: "Recruitment evidence from Switzerland and EU/EFTA", roleCase: "Role description, company information and admission justification", salary: "Salary and employment-condition evidence", residence: "Proof of main residence abroad", assignment: "Assignment contract, dates, place and service description", eu12: "Proof of at least 12 months’ lawful EU/EFTA labour-market residence", business: "Three-year business plan, financing and market analysis", register: "Company deed and commercial-register extract", civil: "Civil-status certificates and certified translations", housing: "Evidence of adequate housing", means: "Financial-means and sponsor evidence", photo: "Biometric photo/appointment if requested" },
  de: { id: "Gültiger Pass oder Identitätskarte", permit: "Heutiger Schweizer Ausweis und Entscheid", contract: "Unterzeichneter Vertrag oder Arbeitsbestätigung", cantonForm: "Kantonales Gesuchsformular", cv: "Tabellarischer Lebenslauf und Zeugnisse", qualifications: "Diplome, Qualifikationen und beglaubigte Übersetzungen", recruitment: "Rekrutierungsnachweise Schweiz und EU/EFTA", roleCase: "Stellenbeschreibung, Firmenangaben und Begründung", salary: "Lohn- und Arbeitsbedingungsnachweise", residence: "Nachweis Hauptwohnsitz im Ausland", assignment: "Auftragsvertrag, Daten, Ort und Dienstbeschreibung", eu12: "Nachweis 12 Monate rechtmässige EU/EFTA-Arbeitsmarktintegration", business: "Dreijahres-Businessplan, Finanzierung und Marktanalyse", register: "Gründungsurkunde und Handelsregisterauszug", civil: "Zivilstandsurkunden und beglaubigte Übersetzungen", housing: "Nachweis angemessener Wohnung", means: "Finanzmittel- und Sponsornachweise", photo: "Biometriefoto/-termin falls verlangt" },
  fr: { id: "Passeport ou carte d’identité valable", permit: "Titre suisse actuel et décision", contract: "Contrat signé ou confirmation d’emploi", cantonForm: "Formulaire cantonal", cv: "CV tabulaire et références", qualifications: "Diplômes, qualifications et traductions certifiées", recruitment: "Preuves de recrutement Suisse et UE/AELE", roleCase: "Description du poste, entreprise et justification", salary: "Preuves de salaire et conditions", residence: "Preuve de résidence principale étrangère", assignment: "Contrat de mission, dates, lieu et service", eu12: "Preuve de 12 mois d’admission régulière UE/AELE", business: "Plan d’affaires sur trois ans, financement et marché", register: "Acte de fondation et extrait du registre", civil: "Actes d’état civil et traductions certifiées", housing: "Preuve de logement adéquat", means: "Preuves de moyens et du sponsor", photo: "Photo/rendez-vous biométrique si demandé" },
  it: { id: "Passaporto o carta d’identità valida", permit: "Titolo svizzero attuale e decisione", contract: "Contratto firmato o conferma d’impiego", cantonForm: "Formulario cantonale", cv: "CV tabellare e referenze", qualifications: "Diplomi, qualifiche e traduzioni certificate", recruitment: "Prove di reclutamento in Svizzera e UE/AELS", roleCase: "Descrizione del posto, dati dell’impresa e motivazione", salary: "Prove di salario e condizioni di lavoro", residence: "Prova del domicilio principale all’estero", assignment: "Contratto d’incarico, date, luogo e descrizione del servizio", eu12: "Prova di 12 mesi di ammissione regolare al mercato UE/AELS", business: "Piano d’affari triennale, finanziamento e mercato", register: "Atto di fondazione ed estratto del registro di commercio", civil: "Atti di stato civile e traduzioni certificate", housing: "Prova di un alloggio adeguato", means: "Prove dei mezzi e del sostenitore", photo: "Foto/appuntamento biometrico se richiesto" },
  rm: { id: "Passaport u carta d’identitad valida", permit: "Carta svizra actuala e decisiun", contract: "Contract suttascrit u conferma da lavur", cantonForm: "Formular chantunal da dumonda", cv: "Curriculum tabular e attestaziuns", qualifications: "Diploms, qualificaziuns e translatziuns certificadas", recruitment: "Cumprovas da recrutament Svizra ed UE/AELE", roleCase: "Descripziun da la plazza, datas da l’interpresa e motivaziun", salary: "Cumprovas da salari e cundiziuns da lavur", residence: "Cumprova da la dimora principala a l’exteriur", assignment: "Contract d’incumbenza, datas, lieu e descripziun dal servetsch", eu12: "Cumprova da 12 mais d’admissiun regulara UE/AELE", business: "Plan d’affars da trais onns, finanziament e martgà", register: "Act da fundaziun ed extract dal register da commerzi", civil: "Documents da stadi civil e translatziuns certificadas", housing: "Cumprova d’ina abitaziun adattada", means: "Cumprovas da meds e dal sponsor", photo: "Foto/termin biometric sche pretendi" },
};

const sources = {
  general: ["Working in Switzerland · SEM", "https://www.sem.admin.ch/sem/en/home/overview-arbeit.html"],
  eu: ["EU/EFTA free movement FAQ · SEM", "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/eu-efta_buerger_schweiz/faq.html"],
  notify: ["90-day notification procedure · SEM", "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html"],
  easygov: ["Online notification · EasyGov", "https://www.easygov.swiss/easygov/"],
  nonEu: ["Non-EU/EFTA employment · SEM", "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige.html"],
  procedure: ["Third-country application procedure · SEM", "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/verfahrensablauf.html"],
  documents: ["Official application document checklist · SEM", "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/verfahrensablauf/gesuchsunterlagen.html"],
  entry: ["Entry and nationality checker · SEM", "https://www.sem.admin.ch/sem/en/home/themen/einreise.html"],
  family: ["Family reunification · SEM", "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/eu-efta_buerger_schweiz/faq.html"],
  self: ["Foreign founders and self-employment · SME Portal", "https://www.kmu.admin.ch/en/foreign-national-setting-up-a-business"],
  asylum: ["Employment for asylum and protection statuses · SEM", "https://www.sem.admin.ch/sem/en/home/themen/arbeit/erwerbstaetige_asylbereich.html"],
  gThird: ["Third-country G permit · SEM", "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis_g__grenzgaengerbewilligung.html"],
  cantons: ["All cantonal immigration and labour authorities · SEM", authorityDirectory],
  workFaq: ["FAQ – Working · SEM", "https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html"],
  recognition: ["Recognition of foreign qualifications · recognition.swiss", "https://www.anerkennung.swiss/en"],
  quotas: ["2026 work-permit quotas · Federal Council", "https://www.ivi.admin.ch/en/newnsb/7HwBjdg5HpBA"],
  settlement: ["C EU/EFTA permit · SEM", "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_c_eu_efta.html"],
} as const;

const permitPages = {
  B: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_b_eu_efta.html",
  C: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_c_eu_efta.html",
  L: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_l_eu_efta.html",
  G: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_g_eu_efta.html",
  Ci: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_ci_eu_efta.html",
  F: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis_f__vorlaeufig.html",
  N: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis_n__asylsuchende.html",
  S: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis_s__schutzbeduerftige.html",
  refugeeB: sources.asylum[1],
  otherPermit: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html",
} as const;

const biometricPermit = "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/biometr_auslaenderausweis.html";
const zefixSearch = "https://www.zefix.admin.ch/en/search/entity/welcome";
const applicationDocuments = sources.documents[1];

export function permitSourceUrl(value: string, answers: Answers = {}): string | undefined {
  if (value === "G" && (answers.nationality === "third" || answers.nationality === "uk")) return sources.gThird[1];
  return permitPages[value as keyof typeof permitPages];
}

export function localiseUrl(url: string, lang: Lang): string {
  if (lang !== "de" && lang !== "fr" && lang !== "it") return url;
  return url.replace("/sem/en/", `/sem/${lang}/`);
}

export function permitOfficialLinks(lang: Lang, answers: Answers = {}): Array<{ value: string; label: string; url: string }> {
  return choiceKeys.permit.flatMap((value) => {
    const url = permitSourceUrl(value, answers);
    const label = options[lang][value]?.[0];
    return url && label ? [{ value, label, url: localiseUrl(url, lang) }] : [];
  });
}

function documentSourceUrl(id: string, answers: Answers): string | undefined {
  switch (id) {
    case "cv":
    case "qualifications":
    case "recruitment":
    case "roleCase":
    case "salary":
    case "contract":
    case "id":
      return applicationDocuments;
    case "cantonForm":
      return sources.cantons[1];
    case "permit":
    case "photo":
      return biometricPermit;
    case "assignment":
    case "eu12":
      return sources.notify[1];
    case "residence":
      return permitSourceUrl("G", answers);
    case "business":
      return sources.self[1];
    case "register":
      return zefixSearch;
    case "civil":
    case "housing":
    case "means":
      return sources.family[1];
    default:
      return undefined;
  }
}

const routeDef: Record<RouteKey, { actor: Actor; actions: string[]; docs: string[]; sourceIds: Array<keyof typeof sources> }> = {
  swiss: { actor: "employer", actions: ["noPermit"], docs: ["id", "contract"], sourceIds: ["general"] },
  existingOpen: { actor: "both", actions: ["verifyExisting", "ensureConditions"], docs: ["permit", "id", "contract"], sourceIds: ["general", "cantons"] },
  existingReview: { actor: "both", actions: ["verifyExisting", "contactCanton"], docs: ["permit", "id", "contract"], sourceIds: ["general", "cantons"] },
  statusNotify: { actor: "employer", actions: ["reportWork", "ensureConditions"], docs: ["permit", "contract"], sourceIds: ["asylum", "cantons"] },
  statusS: { actor: "employer", actions: ["reportWork", "ensureConditions"], docs: ["permit", "contract"], sourceIds: ["asylum", "easygov"] },
  statusN: { actor: "employer", actions: ["requestN", "ensureConditions"], docs: ["permit", "cantonForm", "contract"], sourceIds: ["asylum", "cantons"] },
  euNotify: { actor: "employer", actions: ["employerNotify", "ensureConditions"], docs: ["id", "contract"], sourceIds: ["notify", "easygov", "eu"] },
  euL: { actor: "applicant", actions: ["registerCommune", "applyL", "insurance"], docs: ["id", "contract", "photo"], sourceIds: ["eu", "cantons"] },
  euB: { actor: "applicant", actions: ["registerCommune", "applyB", "insurance"], docs: ["id", "contract", "photo"], sourceIds: ["eu", "cantons"] },
  euG: { actor: "both", actions: ["applyG", "proveWeekly", "ensureConditions"], docs: ["id", "contract", "residence"], sourceIds: ["eu", "cantons"] },
  serviceFree: { actor: "both", actions: ["noNotice", "regulatedCheck", "ensureConditions"], docs: ["id", "assignment"], sourceIds: ["notify", "eu"] },
  serviceNotify: { actor: "employer", actions: ["providerNotify", "regulatedCheck", "ensureConditions"], docs: ["id", "assignment"], sourceIds: ["notify", "easygov"] },
  ukService: { actor: "employer", actions: ["providerNotify", "regulatedCheck", "ensureConditions"], docs: ["id", "assignment"], sourceIds: ["notify", "easygov"] },
  euSelf: { actor: "applicant", actions: ["proveSelf", "registerCommune", "applyB", "insurance"], docs: ["id", "business", "register", "means"], sourceIds: ["eu", "self", "cantons"] },
  thirdEmployer: { actor: "employer", actions: ["employerPrepare", "cantonReview", "semReview", "visaAfterApproval", "registerArrival", "insurance"], docs: ["cantonForm", "id", "contract", "cv", "qualifications", "recruitment", "roleCase", "salary"], sourceIds: ["nonEu", "procedure", "documents", "entry", "cantons"] },
  thirdG: { actor: "employer", actions: ["employerPrepare", "applyG", "proveWeekly"], docs: ["cantonForm", "id", "contract", "residence", "qualifications", "recruitment"], sourceIds: ["gThird", "nonEu", "cantons"] },
  thirdService: { actor: "employer", actions: ["employerPrepare", "cantonReview", "semReview", "visaAfterApproval"], docs: ["cantonForm", "id", "assignment", "qualifications", "salary"], sourceIds: ["nonEu", "procedure", "documents", "cantons"] },
  thirdSelf: { actor: "applicant", actions: ["businessCase", "cantonReview", "semReview", "visaAfterApproval", "registerArrival", "insurance"], docs: ["cantonForm", "id", "cv", "qualifications", "business", "register", "means"], sourceIds: ["self", "nonEu", "procedure", "cantons"] },
  familyEu: { actor: "applicant", actions: ["familyApply", "familyWorkEu", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing", "means"], sourceIds: ["family", "eu", "cantons"] },
  familySwissC: { actor: "applicant", actions: ["familyApply", "familyWorkSwissC", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing"], sourceIds: ["family", "general", "cantons"] },
  familyThird: { actor: "applicant", actions: ["familyApply", "familyWorkThird", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing", "means"], sourceIds: ["family", "cantons"] },
  studyJob: { actor: "applicant", actions: ["universityCheck", "verifyExisting", "contactCanton"], docs: ["id", "permit", "contract", "qualifications"], sourceIds: ["eu", "nonEu", "workFaq", "cantons"] },
  studySideJob: { actor: "both", actions: ["universityCheck", "employerStudentWork", "ensureConditions"], docs: ["id", "permit", "contract", "qualifications"], sourceIds: ["workFaq", "cantons"] },
  studyResidence: { actor: "applicant", actions: ["registerCommune", "proveMeans", "insurance"], docs: ["id", "qualifications", "means", "photo"], sourceIds: ["eu", "workFaq", "cantons"] },
  graduateSearch: { actor: "applicant", actions: ["applyGraduateStay", "universityCheck", "contactCanton"], docs: ["id", "permit", "qualifications", "means", "housing"], sourceIds: ["workFaq", "nonEu", "cantons"] },
  euJobseeker: { actor: "applicant", actions: ["registerCommune", "applyJobseeker", "proveMeans", "insurance"], docs: ["id", "means", "photo"], sourceIds: ["eu", "workFaq", "cantons"] },
  euInactive: { actor: "applicant", actions: ["proveMeans", "registerInactive", "insurance"], docs: ["id", "means", "photo"], sourceIds: ["eu", "cantons"] },
  existingLChange: { actor: "employer", actions: ["employerPrepare", "notifyJobChange", "contactCanton"], docs: ["permit", "id", "contract", "cantonForm"], sourceIds: ["workFaq", "cantons"] },
  existingBChange: { actor: "both", actions: ["notifyJobChange", "verifyExisting", "ensureConditions"], docs: ["permit", "id", "contract"], sourceIds: ["workFaq", "cantons"] },
  settlementC: { actor: "applicant", actions: ["applySettlement", "contactCanton"], docs: ["permit", "id", "means"], sourceIds: ["settlement", "cantons"] },
  specialist: { actor: "both", actions: ["contactCanton"], docs: ["id", "permit", "contract", "roleCase"], sourceIds: ["cantons", "general"] },
};

export function resolveRoute(a: Answers): RouteKey {
  if (a.status === "existing") {
    if (a.permit === "C" || a.permit === "Ci") return "existingOpen";
    if (a.permit === "F" || a.permit === "refugeeB") return "statusNotify";
    if (a.permit === "S") return "statusS";
    if (a.permit === "N") return "statusN";
    if (a.permit === "B" || a.permit === "L" || a.permit === "G") {
      if (a.changeIntent === "toC") return "settlementC";
      if (a.changeIntent === "toSelf" && (a.permit === "B" || a.permit === "L")) {
        return a.nationality === "eu" ? "euSelf" : "thirdSelf";
      }
      if (a.changeIntent === "newEmployer") {
        if (a.permit === "L" && a.nationality !== "eu" && a.nationality !== "swiss") return "existingLChange";
        if (a.permit === "B" || a.permit === "L") return "existingBChange";
      }
      return "existingReview";
    }
    return "specialist";
  }
  const nat = effectiveNationality(a);
  if (nat === "swiss") return "swiss";
  if (a.arrangement === "familyRoute") {
    if (a.sponsor === "sponsorEu") return "familyEu";
    if (a.sponsor === "sponsorSwissC") return "familySwissC";
    return "familyThird";
  }
  if (a.arrangement === "inactive") return nat === "eu" ? "euInactive" : "specialist";
  if (a.arrangement === "study") {
    if (a.studyPhase === "studying") return "studySideJob";
    if (a.studyPhase === "studyOnly") return "studyResidence";
    if (a.studyPhase === "graduated") return nat === "eu" ? "euJobseeker" : "graduateSearch";
    if (a.studyPhase === "jobseeking") return nat === "eu" ? "euJobseeker" : "specialist";
    return "studyJob";
  }
  if (a.arrangement === "local") {
    if (nat === "eu") {
      if (a.employmentDuration === "under3") return "euNotify";
      if (a.employmentDuration === "three12") return "euL";
      return "euB";
    }
    return "thirdEmployer";
  }
  if (a.arrangement === "frontier") {
    if (a.residence === "resOther") return "specialist";
    if (nat === "eu") return "euG";
    if (a.borderZone === "no") return "specialist";
    return "thirdG";
  }
  if (a.arrangement === "self") return nat === "eu" ? "euSelf" : "thirdSelf";
  if (a.arrangement === "posted") {
    const short = a.serviceDuration === "under8" || a.serviceDuration === "nine90";
    if (short && nat === "uk" && a.employerBase === "baseUk") return "ukService";
    const euEligible = a.employerBase === "baseEu" && (nat === "eu" || (nat === "third" && a.euResidence === "yes"));
    if (short && euEligible) {
      if (a.serviceDuration === "under8" && a.sector === "general") return "serviceFree";
      return "serviceNotify";
    }
    return "thirdService";
  }
  return "specialist";
}

export type DocItem = { label: string; url?: string };

export type ResultModel = {
  key: RouteKey; badge: string; title: string; summary: string; actor: Actor; actions: ActionItem[]; docs: DocItem[];
  sourceLinks: Array<{ label: string; url: string }>; canton?: { code: string; name: string; url: string };
  visaNote?: string; familyNote?: string; warning?: string; quotaNote?: string; recognitionNote?: string;
};

type WhenKey = "dayBefore" | "eightDays" | "fourteenDays" | "threeMonths" | "beforeEntry" | "beforeWork" | "beforeExpiry";

const actionMeta: Record<string, { actor: Actor; when?: WhenKey }> = {
  noPermit: { actor: "employer" },
  verifyExisting: { actor: "both" },
  reportWork: { actor: "employer", when: "beforeWork" },
  requestN: { actor: "employer", when: "beforeWork" },
  employerNotify: { actor: "employer", when: "dayBefore" },
  providerNotify: { actor: "employer", when: "eightDays" },
  noNotice: { actor: "both" },
  regulatedCheck: { actor: "applicant" },
  registerCommune: { actor: "applicant", when: "fourteenDays" },
  applyL: { actor: "applicant" },
  applyB: { actor: "applicant" },
  applyG: { actor: "both" },
  proveWeekly: { actor: "applicant" },
  proveSelf: { actor: "applicant" },
  employerPrepare: { actor: "employer", when: "beforeEntry" },
  cantonReview: { actor: "authority" },
  semReview: { actor: "authority" },
  visaAfterApproval: { actor: "applicant" },
  registerArrival: { actor: "applicant", when: "fourteenDays" },
  insurance: { actor: "applicant", when: "threeMonths" },
  familyApply: { actor: "applicant" },
  familyWork: { actor: "applicant" },
  familyWorkEu: { actor: "applicant" },
  familyWorkSwissC: { actor: "applicant" },
  familyWorkThird: { actor: "applicant" },
  businessCase: { actor: "applicant" },
  contactCanton: { actor: "both" },
  universityCheck: { actor: "applicant" },
  ensureConditions: { actor: "both" },
  notifyJobChange: { actor: "both", when: "beforeWork" },
  applySettlement: { actor: "applicant" },
  registerInactive: { actor: "applicant", when: "fourteenDays" },
  proveMeans: { actor: "applicant" },
  employerStudentWork: { actor: "employer", when: "beforeWork" },
  applyJobseeker: { actor: "applicant" },
  applyGraduateStay: { actor: "applicant", when: "beforeExpiry" },
};

const whenText: Record<Lang, Record<WhenKey, string>> = {
  en: {
    dayBefore: "No later than the day before work starts",
    eightDays: "Normally at least eight days before work starts",
    fourteenDays: "Within 14 days of arrival, before work starts",
    threeMonths: "Within three months of taking up Swiss residence",
    beforeEntry: "Before entry and before work starts",
    beforeWork: "Before the new work starts",
    beforeExpiry: "Before the current student permit expires",
  },
  de: {
    dayBefore: "Spätestens am Tag vor Arbeitsbeginn",
    eightDays: "Normalerweise mindestens acht Tage vor Arbeitsbeginn",
    fourteenDays: "Innert 14 Tagen nach Ankunft, vor Arbeitsbeginn",
    threeMonths: "Innert drei Monaten nach Begründung des Schweizer Wohnsitzes",
    beforeEntry: "Vor Einreise und vor Arbeitsbeginn",
    beforeWork: "Bevor die neue Arbeit beginnt",
    beforeExpiry: "Bevor die heutige Studierendenbewilligung abläuft",
  },
  fr: {
    dayBefore: "Au plus tard la veille du premier jour de travail",
    eightDays: "Normalement au moins huit jours avant le début du travail",
    fourteenDays: "Dans les 14 jours suivant l’arrivée, avant de travailler",
    threeMonths: "Dans les trois mois suivant la prise de domicile en Suisse",
    beforeEntry: "Avant l’entrée et avant le début du travail",
    beforeWork: "Avant le début du nouvel emploi",
    beforeExpiry: "Avant l’échéance du permis d’études actuel",
  },
  it: {
    dayBefore: "Al più tardi il giorno prima dell’inizio del lavoro",
    eightDays: "Di solito almeno otto giorni prima dell’inizio del lavoro",
    fourteenDays: "Entro 14 giorni dall’arrivo, prima di lavorare",
    threeMonths: "Entro tre mesi dal domicilio in Svizzera",
    beforeEntry: "Prima dell’ingresso e prima del lavoro",
    beforeWork: "Prima che inizi il nuovo lavoro",
    beforeExpiry: "Prima della scadenza del permesso di studio attuale",
  },
  rm: {
    dayBefore: "Il pli tard il di avant l’entschatta da la lavur",
    eightDays: "Per ordinari almain otg dis avant l’entschatta da la lavur",
    fourteenDays: "Entaifer 14 dis suenter l’entrada, davant da lavurar",
    threeMonths: "Entaifer trais mais suenter la dimora svizra",
    beforeEntry: "Avant l’entrada e davant l’entschatta da la lavur",
    beforeWork: "Avant che la nova lavur cumenza",
    beforeExpiry: "Avant che la permissiun da studi actuala scada",
  },
};

const thirdDurationBadge: Record<Lang, { l: string; b: string }> = {
  en: { l: "Permit L · third-country", b: "Permit B · third-country" },
  de: { l: "Bewilligung L · Drittstaat", b: "Bewilligung B · Drittstaat" },
  fr: { l: "Permis L · État tiers", b: "Permis B · État tiers" },
  it: { l: "Permesso L · Stato terzo", b: "Permesso B · Stato terzo" },
  rm: { l: "Permissiun L · stadi terz", b: "Permissiun B · stadi terz" },
};

const labourQuotaRoutes = new Set<RouteKey>(["thirdEmployer", "thirdG", "thirdSelf", "graduateSearch", "existingLChange"]);

const layers: Record<Lang, {
  visaRequired: string; visaExempt: string; schengen: string; unsure: string;
  family: string; familyEu: string; familySwissC: string; familyThird: string;
  weak: string;   uncertain: string; unmarried: string;
  ukQuota: string; thirdQuota: string; serviceQuota: string; recognition: string;
  studySideEu: string;
}> = {
  en: {
    visaRequired: "A visa is a separate step. For work/residence, follow the Swiss representation’s instructions after the work authorisation; long stays normally use the national D-visa process.",
    visaExempt: "Visa exemption does not authorise employment. Wait for the work/residence approval and follow any entry-authorisation instructions.",
    schengen: "An EU/Schengen residence permit does not normally grant access to the Swiss labour market. The narrow posted-worker exception is reflected in this route.",
    unsure: "Use SEM’s official entry checker for the exact nationality. Work authorisation and entry permission remain separate decisions.",
    family: "Family members need their own residence filing. Add passports, civil-status evidence, housing and—where required—financial means; unmarried partners need an individual canton review.",
    familyEu: "Eligible family members follow free-movement family rights. Once admitted, work access is normally on the issued permit; confirm the card wording with the canton.",
    familySwissC: "Joining a Swiss citizen or C holder is a family-residence filing first. A spouse normally has broad work access afterwards; still confirm with the canton whether a separate work permit is needed.",
    familyThird: "Family reunification for a third-country B or L sponsor depends on status, housing, means and the canton. Do not start work until the card or a written confirmation allows it.",
    weak: "The selected profile does not match the usual highly-qualified third-country threshold. Approval is unlikely without a recognised exception or much stronger evidence.",
    uncertain: "The admission case is not yet clearly highly qualified. The canton will weigh qualifications, economic interest and evidence; a thin file is more likely to be refused.",
    unmarried: "An unmarried partner does not automatically qualify as a spouse. Ask the canton about an individual residence route before relying on family reunification.",
    ukQuota: "UK nationals remain outside free movement. 2026 uses a separate UK quota of 2,100 B and 1,400 L permits. A quota place is not an entitlement.",
    thirdQuota: "2026 third-country labour-market quotas are 4,500 B and 4,000 L permits. A quota place is not an entitlement.",
    serviceQuota: "Assignments over 120 days sit under a separate EU/EFTA service-provider quota (3,000 L and 500 B in 2026). That quota is not an entitlement for this assignment.",
    recognition: "If the profession is regulated in Switzerland, start qualification recognition at recognition.swiss before practising.",
    studySideEu: "EU/EFTA students register with the commune for their studies. A side job is usually possible within the permitted hours; confirm with the canton and university rather than filing a third-country labour-market application. Term-time work is often limited to about 15 hours a week so the degree is not delayed.",
  },
  de: {
    visaRequired: "Das Visum ist ein separater Schritt. Nach Arbeitszulassung den Anweisungen der Schweizer Vertretung folgen; Langaufenthalte nutzen normalerweise das nationale D-Visum.",
    visaExempt: "Visumfreiheit erlaubt keine Arbeit. Arbeits-/Aufenthaltsentscheid und allfällige Einreiseanweisung abwarten.",
    schengen: "Ein EU-/Schengen-Aufenthaltstitel gibt grundsätzlich keinen Schweizer Arbeitsmarktzugang. Die enge Entsendeausnahme ist im Ergebnis berücksichtigt.",
    unsure: "Den offiziellen SEM-Nationalitätscheck nutzen. Arbeitszulassung und Einreise bleiben getrennte Entscheide.",
    family: "Familienmitglieder brauchen ein eigenes Aufenthaltsgesuch mit Pässen, Zivilstand, Wohnung und ggf. Finanzmitteln; unverheiratete Partner benötigen Einzelprüfung.",
    familyEu: "Berechtigte Familienangehörige folgen den Freizügigkeitsrechten. Nach Zulassung steht der Arbeitszugang in der Regel auf dem ausgestellten Ausweis; den Kartentext beim Kanton prüfen.",
    familySwissC: "Der Nachzug zu einer Schweizer Person oder C-Inhaberin ist zuerst ein Familiengesuch. Ehegatten haben danach meist breiten Arbeitszugang; trotzdem beim Kanton klären, ob eine separate Arbeitsbewilligung nötig ist.",
    familyThird: "Familiennachzug zu einem Drittstaat-B- oder L-Sponsor hängt von Status, Wohnung, Mitteln und Kanton ab. Nicht arbeiten, bis Karte oder schriftliche Bestätigung es erlaubt.",
    weak: "Das Profil entspricht nicht der üblichen Hochqualifikationsschwelle für Drittstaaten. Ohne Ausnahme oder stärkere Nachweise ist eine Zulassung unwahrscheinlich.",
    uncertain: "Der Zulassungsfall ist noch nicht klar hochqualifiziert. Der Kanton wägt Qualifikation, wirtschaftliches Interesse und Nachweise; ein dünnes Dossier wird eher abgelehnt.",
    unmarried: "Unverheiratete Partner gelten nicht automatisch als Ehegatten. Vor Verlass auf Familiennachzug den Kanton nach einem individuellen Weg fragen.",
    ukQuota: "Britische Staatsangehörige bleiben ausserhalb der Personenfreizügigkeit. 2026 gilt ein eigenes UK-Kontingent von 2’100 B- und 1’400 L-Bewilligungen. Ein Kontingentsplatz ist kein Anspruch.",
    thirdQuota: "Die Drittstaatenkontingente 2026 betragen 4’500 B- und 4’000 L-Bewilligungen. Ein Kontingentsplatz ist kein Anspruch.",
    serviceQuota: "Einsätze über 120 Tage fallen unter ein eigenes EU/EFTA-Dienstleistungskontingent (2026: 3’000 L und 500 B). Dieses Kontingent gibt keinen Anspruch für diesen Einsatz.",
    recognition: "Ist der Beruf in der Schweiz reglementiert, die Anerkennung der Qualifikation vor der Ausübung über recognition.swiss klären.",
    studySideEu: "EU/EFTA-Studierende melden sich für das Studium bei der Gemeinde an. Ein Nebenjob ist meist im Rahmen der erlaubten Stunden möglich; Kanton und Hochschule fragen, statt ein Drittstaats-Arbeitsmarktgesuch zu stellen. Im Semester sind oft rund 15 Wochenstunden die Grenze, damit der Abschluss nicht verzögert wird.",
  },
  fr: {
    visaRequired: "Le visa est une étape distincte. Après l’autorisation de travail, suivre la représentation suisse; les longs séjours passent normalement par le visa national D.",
    visaExempt: "L’exemption de visa n’autorise pas l’emploi. Attendez l’accord de travail/séjour et les instructions d’entrée.",
    schengen: "Un titre UE/Schengen ne donne normalement pas accès au marché suisse. L’exception étroite du détachement est intégrée au résultat.",
    unsure: "Utilisez le vérificateur SEM pour la nationalité exacte. Travail et entrée restent deux décisions distinctes.",
    family: "Chaque proche a besoin de son dossier de séjour avec passeports, état civil, logement et, si requis, moyens; le partenaire non marié exige un examen individuel.",
    familyEu: "Les membres de famille éligibles suivent les droits de libre circulation. Une fois admis, l’accès au travail figure en principe sur le titre ; vérifiez le libellé auprès du canton.",
    familySwissC: "Rejoindre un Suisse ou un titulaire C est d’abord un dossier de séjour familial. Le conjoint a ensuite généralement un large accès au travail ; confirmez toutefois auprès du canton si un permis distinct est nécessaire.",
    familyThird: "Le regroupement auprès d’un sponsor B ou L d’État tiers dépend du statut, du logement, des moyens et du canton. Ne pas commencer à travailler avant la carte ou une confirmation écrite.",
    weak: "Le profil ne correspond pas au seuil habituel de haute qualification des États tiers. Sans exception ou preuves renforcées, l’admission est peu probable.",
    uncertain: "Le dossier n’est pas encore clairement hautement qualifié. Le canton pèsera qualifications, intérêt économique et preuves ; un dossier mince a plus de chances d’être refusé.",
    unmarried: "Un partenaire non marié n’est pas automatiquement assimilé au conjoint. Demandez au canton une voie individuelle avant de compter sur le regroupement.",
    ukQuota: "Les ressortissants britanniques restent hors libre circulation. 2026 prévoit un contingent UK distinct de 2 100 B et 1 400 L. Une place de contingent n’est pas un droit.",
    thirdQuota: "Les contingents 2026 pour les États tiers sont de 4 500 B et 4 000 L. Une place de contingent n’est pas un droit.",
    serviceQuota: "Les missions de plus de 120 jours relèvent d’un contingent distinct pour prestataires UE/AELE (3 000 L et 500 B en 2026). Ce contingent n’ouvre aucun droit pour cette mission.",
    recognition: "Si la profession est réglementée en Suisse, démarrez la reconnaissance des qualifications sur recognition.swiss avant d’exercer.",
    studySideEu: "Les étudiants UE/AELE s’inscrivent à la commune pour leurs études. Une activité accessoire est en principe possible dans les heures autorisées ; confirmez auprès du canton et de l’école plutôt que de déposer une demande d’État tiers. En période de cours, la limite est souvent d’environ 15 heures par semaine pour ne pas retarder le diplôme.",
  },
  it: {
    visaRequired: "Il visto è un passo distinto. Dopo l’autorizzazione al lavoro, seguire la rappresentanza svizzera; i soggiorni lunghi usano di solito il visto nazionale D.",
    visaExempt: "L’esenzione dal visto non autorizza a lavorare. Attendere la decisione di lavoro/soggiorno e le eventuali istruzioni d’ingresso.",
    schengen: "Un titolo UE/Schengen di regola non dà accesso al mercato del lavoro svizzero. La stretta eccezione del distacco è già considerata.",
    unsure: "Usare il verificatore ufficiale SEM per la nazionalità esatta. Autorizzazione al lavoro e ingresso restano decisioni distinte.",
    family: "Ogni familiare ha bisogno di una propria domanda di soggiorno con passaporti, stato civile, alloggio e, se richiesto, mezzi; i partner non sposati richiedono un esame individuale.",
    familyEu: "I familiari ammessi seguono i diritti di libera circolazione. Dopo l’ammissione l’accesso al lavoro è di regola sul titolo rilasciato; verificare il testo con il cantone.",
    familySwissC: "Il ricongiungimento a un cittadino svizzero o titolare C è prima una domanda di soggiorno familiare. Il coniuge ha poi di solito un ampio accesso al lavoro; confermare comunque con il cantone se serve un permesso distinto.",
    familyThird: "Il ricongiungimento a un sostenitore B o L di Stato terzo dipende da statuto, alloggio, mezzi e cantone. Non iniziare a lavorare prima della carta o di una conferma scritta.",
    weak: "Il profilo non corrisponde alla soglia usuale di alta qualifica per Stati terzi. Senza eccezione o prove più solide, l’ammissione è improbabile.",
    uncertain: "Il caso di ammissione non è ancora chiaramente altamente qualificato. Il cantone valuta qualifiche, interesse economico e prove; un dossier esile è più facilmente respinto.",
    unmarried: "Un partner non sposato non equivale automaticamente al coniuge. Chiedere al cantone una via individuale prima di contare sul ricongiungimento.",
    ukQuota: "I cittadini britannici restano fuori dalla libera circolazione. Nel 2026 vige un contingente UK distinto di 2’100 B e 1’400 L. Un posto di contingente non è un diritto.",
    thirdQuota: "I contingenti 2026 per Stati terzi sono 4’500 B e 4’000 L. Un posto di contingente non è un diritto.",
    serviceQuota: "Gli incarichi oltre 120 giorni rientrano in un contingente distinto per prestatori UE/AELS (3’000 L e 500 B nel 2026). Quel contingente non dà un diritto per questo incarico.",
    recognition: "Se la professione è regolamentata in Svizzera, avviare il riconoscimento delle qualifiche su recognition.swiss prima di esercitare.",
    studySideEu: "Gli studenti UE/AELS si iscrivono al comune per gli studi. Un lavoro accessorio è di solito possibile nelle ore ammesse; confermare con cantone e istituto invece di un’ammissione di Stato terzo. Durante i corsi il limite è spesso di circa 15 ore a settimana perché il diploma non sia ritardato.",
  },
  rm: {
    visaRequired: "Il visum è in pass separat. Suenter l’admissiun da lavur suandar las instrucziuns da la represchentanza svizra; dimoras lungas dovran per ordinari il visum naziunal D.",
    visaExempt: "L’exempziun dal visum na permetta betg da lavurar. Spetgar la decisiun da lavur/dimora ed eventualas instrucziuns d’entrada.",
    schengen: "In titel UE/Schengen na dat per ordinari nagin access al martgà da lavur svizzer. L’excepziun stretga da l’emessa è gia considerada.",
    unsure: "Dovrar il check uffizial dal SEM per la naziunalitad exacta. Admissiun da lavur ed entrada restan decisiuns separadas.",
    family: "Mintga commember da famiglia basegna ina atgna dumonda da dimora cun passaports, stadi civil, abitaziun e sche necessari meds; partenaris nunmaridads basegnan in examen individual.",
    familyEu: "Commembers da famiglia privilegiads suondan ils dretgs da libra circulaziun. Suenter l’admissiun è l’access da lavur per ordinari sin la permissiun dada; examinar il text tar il chantun.",
    familySwissC: "La reuniun tar ina persuna svizra u ina persuna cun C è l’emprim ina dumonda da dimora da famiglia. Il conjugal ha lura per ordinari vast access da lavur; confermar tuttina tar il chantun sche ina permissiun separada è necessaria.",
    familyThird: "La reuniun da famiglia tar in sponsur B u L da stadis terzs dependa dal status, da l’abitaziun, dals meds e dal chantun. Betg cumenzar a lavurar avant la carta u ina conferma scritta.",
    weak: "Il profil na correspunda betg al lim usità d’auta qualificaziun per stadis terzs. Senza excepziun u cumprovas pli fermas è ina admissiun improbabla.",
    uncertain: "Il cas d’admissiun n’è betg anc cler autamain qualifitgà. Il chantun pesarà qualificaziuns, interess economic e cumprovas; in dossier magher vegn pli facilmain refusa.",
    unmarried: "In partenari nunmaridà n’è betg automaticamain egual a in conjugal. Dumandar il chantun ina via individuala avant che sa basar sin la reuniun da famiglia.",
    ukQuota: "Burgais britannics restan ordaifer la libra circulaziun. 2026 ha in contingent UK separat da 2’100 B e 1’400 L. In plaz dal contingent n’è betg in dretg.",
    thirdQuota: "Ils contingents 2026 per stadis terzs èn 4’500 B e 4’000 L. In plaz dal contingent n’è betg in dretg.",
    serviceQuota: "Incumbensas sur 120 dis crodan sut in contingent separat per purschiders UE/AELE (3’000 L e 500 B il 2026). Quel contingent na dat nagin dretg per questa incumbensa.",
    recognition: "Sche la professiun è reglada en Svizra, cumenzar la recunuschientscha da qualificaziuns sin recognition.swiss avant l’exercizi.",
    studySideEu: "Students UE/AELE s’annunzian tar la vischnanca per il studi. Ina lavur accessora è per ordinari pussaivla entaifer las uras permessas; confermar tar chantun e scola enstagl d’ina dumonda da stadis terzs. Durant il semester èn savens bunamain 15 uras per emna il lim, uschia che il conclus na vegn betg retardà.",
  },
};

function buildActions(ids: string[], lang: Lang, fallback: Actor, audience?: string): ActionItem[] {
  const items = ids.map((id) => {
    const meta = actionMeta[id];
    const actor = meta?.actor ?? fallback;
    const whenKey = meta?.when;
    const item: ActionItem = { text: actionText[lang][id], actor };
    if (whenKey) item.when = whenText[lang][whenKey];
    return item;
  });
  if (audience !== "employer") return items;
  const rank = (actor: Actor) => (actor === "employer" || actor === "both" ? 0 : 1);
  return [...items].sort((left, right) => rank(left.actor) - rank(right.actor));
}

function addSource(result: ResultModel, id: keyof typeof sources, lang: Lang) {
  const url = localiseUrl(sources[id][1], lang);
  if (result.sourceLinks.some((link) => link.url === url)) return;
  result.sourceLinks.push({ label: sources[id][0], url });
}

export function isRouteKey(value: string): value is RouteKey {
  return Object.prototype.hasOwnProperty.call(routeText.en, value);
}

export function getResult(a: Answers, lang: Lang, key: RouteKey = resolveRoute(a)): ResultModel {
  const [badge, title, summary] = routeText[lang][key];
  const def = routeDef[key];
  const cantonRow = cantons.find(([code]) => code === a.canton);
  const nat = effectiveNationality(a);
  const result: ResultModel = {
    key, badge, title, summary, actor: def.actor,
    actions: buildActions(def.actions, lang, def.actor, a.audience),
    docs: def.docs.map((id) => {
      const url = documentSourceUrl(id, a);
      return url ? { label: docText[lang][id], url: localiseUrl(url, lang) } : { label: docText[lang][id] };
    }),
    sourceLinks: def.sourceIds.map((id) => ({ label: sources[id][0], url: localiseUrl(sources[id][1], lang) })),
    canton: cantonRow ? { code: cantonRow[0], name: cantonRow[1], url: cantonRow[2] } : undefined,
  };
  if (key === "thirdEmployer") {
    if (a.employmentDuration === "twelveplus") result.badge = thirdDurationBadge[lang].b;
    else if (a.employmentDuration === "under3" || a.employmentDuration === "three12") result.badge = thirdDurationBadge[lang].l;
  }
  if (key === "studySideJob" && nat === "eu") {
    result.summary = layers[lang].studySideEu;
    result.actor = "applicant";
    result.actions = buildActions(["registerCommune", "universityCheck", "ensureConditions"], lang, "applicant", a.audience);
  }
  if (a.entryStatus === "visa") result.visaNote = layers[lang].visaRequired;
  if (a.entryStatus === "exempt") result.visaNote = layers[lang].visaExempt;
  if (a.entryStatus === "schengen") result.visaNote = layers[lang].schengen;
  if (a.entryStatus === "unsure") result.visaNote = layers[lang].unsure;
  if (key === "familyEu") result.familyNote = layers[lang].familyEu;
  else if (key === "familySwissC") result.familyNote = layers[lang].familySwissC;
  else if (key === "familyThird") result.familyNote = layers[lang].familyThird;
  else if (a.family === "familyYes") result.familyNote = layers[lang].family;
  if (a.relationship === "unmarried") result.warning = layers[lang].unmarried;
  if (a.qualified === "uncertain" && (key === "thirdEmployer" || key === "thirdSelf")) result.warning = layers[lang].uncertain;
  if (a.qualified === "weak" && (key === "thirdEmployer" || key === "thirdSelf")) result.warning = layers[lang].weak;
  if (labourQuotaRoutes.has(key)) {
    if (nat === "uk") {
      result.quotaNote = layers[lang].ukQuota;
      addSource(result, "quotas", lang);
    } else if (nat === "third") {
      result.quotaNote = layers[lang].thirdQuota;
      addSource(result, "quotas", lang);
    }
  }
  if (key === "thirdService" && a.serviceDuration === "over90") {
    result.quotaNote = layers[lang].serviceQuota;
    addSource(result, "quotas", lang);
  }
  if (a.sector === "regulated" || def.actions.includes("regulatedCheck")) {
    result.recognitionNote = layers[lang].recognition;
    addSource(result, "recognition", lang);
  }
  return result;
}

export function getAnswerLabel(key: string, value: string, lang: Lang): string {
  if (key === "canton") return cantons.find(([code]) => code === value)?.[1] ?? value;
  return options[lang][value]?.[0] ?? value;
}
