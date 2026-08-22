export type Lang = "en" | "de" | "fr" | "es";
export type Answers = Record<string, string>;

export const languages: Array<{ code: Lang; label: string; name: string }> = [
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "es", label: "ES", name: "Español" },
];

const authorityDirectory = "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html";

export const cantons = [
  ["AG", "Aargau", "https://www.ag.ch/de/themen/migration-integration"],
  ["AI", "Appenzell Innerrhoden", authorityDirectory],
  ["AR", "Appenzell Ausserrhoden", "https://ar.ch/verwaltung/departement-inneres-und-sicherheit/amt-fuer-inneres/"],
  ["BE", "Bern / Berne", "https://www.migration.sid.be.ch/de/start.html"],
  ["BL", "Basel-Landschaft", "https://www.baselland.ch/politik-und-behorden/direktionen/sicherheitsdirektion/amt_fuer_migration"],
  ["BS", "Basel-Stadt", "https://www.bs.ch/jsd/bdm"],
  ["FR", "Fribourg / Freiburg", "https://www.fr.ch/dsjs/spomi"],
  ["GE", "Genève", "https://www.ge.ch/organisation/office-cantonal-population-migrations-ocpm"],
  ["GL", "Glarus", "https://www.gl.ch/verwaltung/sicherheit-und-justiz/justiz/migration.html/1215"],
  ["GR", "Graubünden / Grigioni", authorityDirectory],
  ["JU", "Jura", "https://www.jura.ch/fr/Autorites/Administration/DSJP/SPOP/Service-de-la-population-SPOP.html"],
  ["LU", "Luzern", "https://migration.lu.ch/"],
  ["NE", "Neuchâtel", authorityDirectory],
  ["NW", "Nidwalden", "https://www.nw.ch/migration/1146"],
  ["OW", "Obwalden", "https://www.ow.ch/fachbereiche/1822"],
  ["SG", "St. Gallen", authorityDirectory],
  ["SH", "Schaffhausen", "https://sh.ch/CMS/Webseite/Kanton-Schaffhausen/Beh-rde/Verwaltung/Departement-des-Innern/Migrationsamt-und-Passb-ro-3454-DE.html"],
  ["SO", "Solothurn", authorityDirectory],
  ["SZ", "Schwyz", authorityDirectory],
  ["TG", "Thurgau", authorityDirectory],
  ["TI", "Ticino", "https://www.ti.ch/popolazione"],
  ["UR", "Uri", authorityDirectory],
  ["VD", "Vaud", "https://www.vd.ch/deiep/spop"],
  ["VS", "Valais / Wallis", "https://www.vs.ch/web/spm"],
  ["ZG", "Zug", "https://zg.ch/de/sicherheitsdirektion/amt-fuer-migration"],
  ["ZH", "Zürich", "https://www.zh.ch/de/sicherheitsdirektion/migrationsamt.html"],
] as const;

export const ui = {
  en: {
    home: "Home", how: "How it works", sources: "Official sources", about: "About", history: "History", verified: "Rules checked 22 Aug 2026",
    eyebrow: "Swiss work & residence permits", titleA: "Your route into Switzerland,", titleB: "without the maze.",
    intro: "Answer a few plain-language questions. Get the likely permit route, who files what, and the official forms for your canton.",
    start: "Find my route", employerStart: "I’m hiring someone", time: "Takes about 3 minutes", privacy: "No login · answers stay on this device",
    routeLabel: "A route, not just a permit letter", routeTitle: "We separate the four decisions that matter",
    layers: [["Entry", "Visa or entry authorisation"], ["Work", "Permission or notification"], ["Residence", "L, B, G or another status"], ["Arrival", "Registration, insurance and timing"]],
    official: "Built from official federal and cantonal guidance", notAdvice: "Guidance, not a binding authority decision",
    back: "Back", next: "Continue", result: "See my route", step: "Step", of: "of", select: "Select one", selectCanton: "Choose the canton where the work will take place",
    resultEyebrow: "Your likely route", confidence: "Source-backed guidance", resultIntro: "Based on the answers you gave. The canton remains the deciding authority.",
    responsibilities: "Your action plan", paperwork: "Paperwork to prepare", officialLinks: "Official starting points", cantonOffice: "Your cantonal authority",
    applicant: "Applicant", employer: "Employer", both: "Applicant + employer", authority: "Authority", open: "Open official page", print: "Print summary", change: "Change answers", restart: "Start again",
    why: "Why this route", visaLayer: "Entry and visa layer", familyLayer: "Bringing family", reviewed: "Information last reviewed 22 August 2026",
    disclaimerTitle: "Before you rely on this", disclaimer: "This navigator organises official information; it does not issue a permit or replace advice from the competent canton. Rules, forms and quotas can change.",
    noData: "Your answers are processed in this browser and are not submitted.", sourceMethod: "Federal rules first, canton-specific filing second.",
  },
  de: {
    home: "Start", how: "So funktioniert’s", sources: "Offizielle Quellen", about: "Über uns", history: "Verlauf", verified: "Regeln geprüft am 22. Aug. 2026",
    eyebrow: "Schweizer Arbeits- & Aufenthaltsbewilligungen", titleA: "Dein Weg in die Schweiz,", titleB: "ohne Behördendschungel.",
    intro: "Beantworte einige einfache Fragen. Du erhältst den voraussichtlichen Bewilligungsweg, Zuständigkeiten und offizielle Formulare für deinen Kanton.",
    start: "Meinen Weg finden", employerStart: "Ich stelle jemanden ein", time: "Dauert etwa 3 Minuten", privacy: "Kein Login · Antworten bleiben auf diesem Gerät",
    routeLabel: "Ein ganzer Weg, nicht nur ein Buchstabe", routeTitle: "Wir trennen die vier entscheidenden Fragen",
    layers: [["Einreise", "Visum oder Einreisebewilligung"], ["Arbeit", "Bewilligung oder Meldung"], ["Aufenthalt", "L, B, G oder anderer Status"], ["Ankunft", "Anmeldung, Versicherung und Fristen"]],
    official: "Auf Basis offizieller Informationen von Bund und Kantonen", notAdvice: "Orientierung, kein verbindlicher Behördenentscheid",
    back: "Zurück", next: "Weiter", result: "Meinen Weg anzeigen", step: "Schritt", of: "von", select: "Bitte wählen", selectCanton: "Kanton des Arbeitsortes wählen",
    resultEyebrow: "Dein voraussichtlicher Weg", confidence: "Quellenbasierte Orientierung", resultIntro: "Auf Grundlage deiner Antworten. Die zuständige kantonale Behörde entscheidet.",
    responsibilities: "Dein Aktionsplan", paperwork: "Unterlagen vorbereiten", officialLinks: "Offizielle Startpunkte", cantonOffice: "Zuständige kantonale Behörde",
    applicant: "Antragstellende Person", employer: "Arbeitgeber", both: "Person + Arbeitgeber", authority: "Behörde", open: "Offizielle Seite öffnen", print: "Zusammenfassung drucken", change: "Antworten ändern", restart: "Neu starten",
    why: "Warum dieser Weg", visaLayer: "Einreise und Visum", familyLayer: "Familiennachzug", reviewed: "Informationen zuletzt geprüft am 22. August 2026",
    disclaimerTitle: "Bevor du dich darauf verlässt", disclaimer: "Dieser Navigator ordnet offizielle Informationen. Er erteilt keine Bewilligung und ersetzt keine Auskunft des zuständigen Kantons. Regeln, Formulare und Kontingente können sich ändern.",
    noData: "Deine Antworten werden nur in diesem Browser verarbeitet.", sourceMethod: "Zuerst Bundesrecht, dann das kantonale Verfahren.",
  },
  fr: {
    home: "Accueil", how: "Fonctionnement", sources: "Sources officielles", about: "À propos", history: "Historique", verified: "Règles vérifiées le 22 août 2026",
    eyebrow: "Permis de travail et de séjour suisses", titleA: "Votre chemin vers la Suisse,", titleB: "sans le labyrinthe.",
    intro: "Répondez à quelques questions simples. Obtenez la voie probable, les responsabilités et les formulaires officiels de votre canton.",
    start: "Trouver ma voie", employerStart: "Je recrute quelqu’un", time: "Environ 3 minutes", privacy: "Sans compte · réponses conservées sur cet appareil",
    routeLabel: "Un parcours, pas seulement une lettre", routeTitle: "Nous séparons les quatre décisions essentielles",
    layers: [["Entrée", "Visa ou autorisation d’entrée"], ["Travail", "Autorisation ou annonce"], ["Séjour", "Permis L, B, G ou autre statut"], ["Arrivée", "Inscription, assurance et délais"]],
    official: "Fondé sur les directives officielles fédérales et cantonales", notAdvice: "Orientation, pas une décision contraignante",
    back: "Retour", next: "Continuer", result: "Voir mon parcours", step: "Étape", of: "sur", select: "Sélectionnez", selectCanton: "Choisissez le canton du lieu de travail",
    resultEyebrow: "Votre parcours probable", confidence: "Orientation fondée sur les sources", resultIntro: "D’après vos réponses. L’autorité cantonale reste décisionnaire.",
    responsibilities: "Votre plan d’action", paperwork: "Documents à préparer", officialLinks: "Points de départ officiels", cantonOffice: "Votre autorité cantonale",
    applicant: "Candidat", employer: "Employeur", both: "Candidat + employeur", authority: "Autorité", open: "Ouvrir la page officielle", print: "Imprimer le résumé", change: "Modifier les réponses", restart: "Recommencer",
    why: "Pourquoi ce parcours", visaLayer: "Entrée et visa", familyLayer: "Regroupement familial", reviewed: "Informations vérifiées le 22 août 2026",
    disclaimerTitle: "Avant de vous y fier", disclaimer: "Ce navigateur organise l’information officielle. Il ne délivre aucun permis et ne remplace pas l’avis du canton compétent. Les règles, formulaires et contingents peuvent changer.",
    noData: "Vos réponses sont traitées uniquement dans ce navigateur.", sourceMethod: "D’abord les règles fédérales, puis le dépôt cantonal.",
  },
  es: {
    home: "Inicio", how: "Cómo funciona", sources: "Fuentes oficiales", about: "Acerca de", history: "Historial", verified: "Normas verificadas el 22 ago 2026",
    eyebrow: "Permisos suizos de trabajo y residencia", titleA: "Tu camino hacia Suiza,", titleB: "sin el laberinto.",
    intro: "Responde unas preguntas sencillas. Obtén la vía probable, quién presenta cada trámite y los formularios oficiales de tu cantón.",
    start: "Encontrar mi vía", employerStart: "Voy a contratar a alguien", time: "Unos 3 minutos", privacy: "Sin cuenta · respuestas solo en este dispositivo",
    routeLabel: "Una ruta, no solo una letra", routeTitle: "Separamos las cuatro decisiones importantes",
    layers: [["Entrada", "Visado o autorización de entrada"], ["Trabajo", "Permiso o notificación"], ["Residencia", "L, B, G u otro estatus"], ["Llegada", "Registro, seguro y plazos"]],
    official: "Basado en orientación oficial federal y cantonal", notAdvice: "Orientación, no una decisión vinculante",
    back: "Atrás", next: "Continuar", result: "Ver mi ruta", step: "Paso", of: "de", select: "Selecciona", selectCanton: "Elige el cantón donde se realizará el trabajo",
    resultEyebrow: "Tu ruta probable", confidence: "Orientación basada en fuentes", resultIntro: "Según tus respuestas. La autoridad cantonal toma la decisión final.",
    responsibilities: "Tu plan de acción", paperwork: "Documentación a preparar", officialLinks: "Puntos de partida oficiales", cantonOffice: "Tu autoridad cantonal",
    applicant: "Solicitante", employer: "Empleador", both: "Solicitante + empleador", authority: "Autoridad", open: "Abrir página oficial", print: "Imprimir resumen", change: "Cambiar respuestas", restart: "Empezar de nuevo",
    why: "Por qué esta ruta", visaLayer: "Entrada y visado", familyLayer: "Reagrupación familiar", reviewed: "Información verificada el 22 de agosto de 2026",
    disclaimerTitle: "Antes de confiar en el resultado", disclaimer: "Este navegador organiza información oficial; no concede permisos ni sustituye la orientación del cantón competente. Las normas, formularios y cupos pueden cambiar.",
    noData: "Tus respuestas se procesan únicamente en este navegador.", sourceMethod: "Primero las normas federales; después, el trámite cantonal.",
  },
} as const;

type QuestionKey = "audience" | "status" | "permit" | "nationality" | "arrangement" | "employerBase" | "residence" | "entryStatus" | "employmentDuration" | "serviceDuration" | "sector" | "euResidence" | "sponsor" | "relationship" | "qualified" | "canton" | "family";

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
  },
  es: {
    audience: ["¿Para quién estás navegando?", "Asignaremos cada trámite a la persona correcta."], status: ["¿Existe ya un estatus suizo?", "Un permiso existente puede cambiar por completo la ruta."],
    permit: ["¿Qué estatus o permiso suizo tiene?", "Usa la letra de la tarjeta; el B de refugiado aparece por separado."], nationality: ["¿Qué grupo de ciudadanía corresponde?", "La ciudadanía —no el género— determina el sistema principal."],
    arrangement: ["¿Cuál será la situación laboral?", "Elige la descripción más cercana."], employerBase: ["¿Dónde tiene sede el empleador o prestador?", "Esto determina si puede usarse la notificación de 90 días."],
    residence: ["¿Dónde se mantendrá la residencia principal?", "Para nacionales de terceros países también importan las zonas fronterizas."], entryStatus: ["¿Cuál es la situación actual de entrada?", "Un visado o permiso Schengen no equivale a permiso de trabajo."],
    employmentDuration: ["¿Cuánto dura el contrato suizo?", "Para UE/AELC suele distinguir notificación, L y B."], serviceDuration: ["¿Cuántos días de servicio se prevén en Suiza este año?", "Cuenta días efectivos para empresa y trabajador."],
    sector: ["¿Qué tipo de trabajo es?", "Algunos sectores notifican desde el primer día; las profesiones reguladas pueden exigir reconocimiento."], euResidence: ["¿El trabajador de un tercer país lleva al menos 12 meses admitido en el mercado UE/AELC?", "Normalmente se exige para la ruta de desplazamiento de 90 días."],
    sponsor: ["¿Qué estatus respalda la reagrupación?", "Los derechos varían entre libre circulación y ley nacional."], relationship: ["¿Cuál es la relación familiar?", "Las parejas no casadas no siguen automáticamente la ruta del cónyuge."],
    qualified: ["¿Qué solidez tiene el caso de admisión?", "La admisión de terceros países suele dirigirse a directivos, especialistas y alta cualificación."], canton: ["¿Dónde se realizará el trabajo?", "El cantón tramita el expediente y proporciona el formulario."],
    family: ["¿Se mudarán familiares cercanos?", "Añadiremos la capa separada de reagrupación familiar."],
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
    local: ["Job with a Swiss employer", "A local employment contract in Switzerland."], frontier: ["Cross-border commuter", "Main home abroad; work physically in Switzerland."], posted: ["Posted worker or service", "Sent by a foreign company for a project or assignment."], self: ["Self-employed or founder", "Create or operate an independent Swiss activity."], familyRoute: ["Joining family", "Residence relies on a family member’s status."], study: ["Student, graduate or jobseeker", "Work alongside study or after graduation/job loss."],
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
  },
  de: {}, fr: {}, es: {},
};

const translateBaseOptions = (lang: "de" | "fr" | "es"): OptionCopy => {
  const x: Record<typeof lang, OptionCopy> = {
    de: {
      person: ["Für mich selbst", "Ich möchte arbeiten, umziehen, pendeln oder gründen."], employer: ["Für eine beschäftigte Person", "Ich plane das Gesuch als Schweizer oder ausländischer Arbeitgeber."], new: ["Noch kein Schweizer Status", "Neuer Umzug, Job oder Einsatz."], existing: ["Bestehender Status", "Die Person hat bereits eine Schweizer Bewilligung oder Schutzstatus."],
      B: ["Bewilligung B", "Aufenthaltsbewilligung"], C: ["Bewilligung C", "Niederlassungsbewilligung"], L: ["Bewilligung L", "Kurzaufenthalt"], G: ["Bewilligung G", "Grenzgänger"], Ci: ["Bewilligung Ci", "Familie von Diplomaten/IO-Personal"], refugeeB: ["Anerkannter Flüchtling · B", "Arbeitsaufnahme wird gemeldet."], F: ["Bewilligung F", "Vorläufig aufgenommen"], N: ["Bewilligung N", "Asylsuchend"], S: ["Bewilligung S", "Schutzstatus"], otherPermit: ["Anderer/unklarer Status", "Der Kanton muss ihn einordnen."],
      swiss: ["Schweizer Bürger/in", "Keine ausländerrechtliche Arbeitsbewilligung."], eu: ["EU- oder EFTA-Bürger/in", "In der Regel gilt die Freizügigkeit."], uk: ["Britische/r Bürger/in", "Nach Brexit meist Drittstaatsregelung."], third: ["Andere Staatsangehörigkeit", "Meist gelten Drittstaatsregeln."],
      local: ["Job bei Schweizer Arbeitgeber", "Lokaler Arbeitsvertrag in der Schweiz."], frontier: ["Grenzgänger/in", "Hauptwohnsitz im Ausland, Arbeit in der Schweiz."], posted: ["Entsendung oder Dienstleistung", "Ausländisches Unternehmen entsendet für einen Auftrag."], self: ["Selbständig oder Gründer/in", "Unabhängige Tätigkeit in der Schweiz."], familyRoute: ["Familiennachzug", "Aufenthalt stützt sich auf ein Familienmitglied."], study: ["Studium, Abschluss oder Jobsuche", "Arbeit während/nach Studium oder Arbeitsverlust."],
      baseSwiss: ["Schweiz", "Lokale Anstellung, keine Auslandsentsendung."], baseEu: ["EU oder EFTA", "Das 90-Tage-Verfahren kann gelten."], baseUk: ["Vereinigtes Königreich", "Das Mobilitätsabkommen kann gelten."], baseOther: ["Anderes Land", "Meist nationales Zulassungsrecht."],
      resEu: ["EU/EFTA-Land", "Für EU/EFTA-Personen kann die Grenzgängerregel gelten."], resNeighbor: ["Nachbarland", "Frankreich, Deutschland, Italien, Österreich oder Liechtenstein."], resOther: ["Anderes Land", "Bewilligung G ist unwahrscheinlich."],
      visa: ["Visum normalerweise nötig", "Das Visum folgt der Arbeitszulassung."], exempt: ["Normalerweise visumfrei", "Visumfreiheit erlaubt keine Arbeit."], schengen: ["EU-/Schengen-Aufenthaltstitel", "Er gibt grundsätzlich keinen Schweizer Arbeitszugang."], unsure: ["Nicht sicher", "Im Resultat folgt der offizielle Nationalitätscheck."],
      under3: ["Bis 3 Monate", "Bei EU/EFTA meist Meldeverfahren."], three12: ["Über 3, unter 12 Monate", "Bei EU/EFTA meist L."], twelveplus: ["12 Monate oder länger", "Bei EU/EFTA meist B."], under8: ["1–8 Arbeitstage", "Einige Dienste sind meldefrei."], nine90: ["9–90 Arbeitstage", "Das Meldeverfahren kann gelten."], over90: ["Mehr als 90 Arbeitstage", "Bewilligungsgesuch nötig."],
      general: ["Allgemeine Dienstleistung", "Die ersten acht Tage sind meist meldefrei."], priority: ["Bau, Gastgewerbe, Reinigung oder Prioritätsbranche", "Meldepflicht ab dem ersten Tag."], regulated: ["Reglementierter Beruf", "Zusätzlich kann Anerkennung nötig sein."], yes: ["Ja", "Bedingung erfüllt."], no: ["Nein", "Der Weg kann blockiert oder geändert sein."],
      sponsorSwissC: ["Schweizer/in oder C-Bewilligung", "Familiennachzug und breiter Arbeitszugang für Ehegatten."], sponsorEu: ["EU/EFTA-Person in der Schweiz", "Freizügigkeitsrechte können gelten."], sponsorThirdB: ["Drittstaat mit B", "Nachzug kann bedingt sein."], sponsorThirdL: ["Drittstaat mit L", "Begrenzt und kantonsabhängig."], sponsorOther: ["Anderer Status", "Spezialprüfung nötig."],
      spouse: ["Ehegatte/Ehegattin", "Rechtsgültig verheiratet."], registered: ["Eingetragene Partnerschaft", "Rechtlich anerkannte Partnerschaft."], unmarried: ["Unverheiratete Partnerschaft", "Kein automatischer Ehegattenanspruch."], child: ["Kind/abhängiger Nachkomme", "Alters- und Abhängigkeitstest möglich."], parent: ["Abhängiger Eltern-/Grosselternteil", "Stark vom Sponsorstatus abhängig."],
      strong: ["Führungskraft, Spezialist/in oder hochqualifiziert", "Studium/Fachausbildung plus Erfahrung."], uncertain: ["Möglicherweise, Nachweise gemischt", "Arbeitgeber sollte den Fall vorab prüfen."], weak: ["Kein Spezialisten-/Hochqualifikationsfall", "Ordentliche Zulassung ist unwahrscheinlich."], familyYes: ["Ja", "Ehegatte, Partner, Kinder oder abhängige Verwandte ergänzen."], familyNo: ["Nein", "Nur der Weg der arbeitenden Person."],
    },
    fr: {
      person: ["Pour moi", "Je veux travailler, déménager, être frontalier ou créer."], employer: ["Pour un employé", "Je prépare le dossier comme employeur suisse ou étranger."], new: ["Pas encore de statut suisse", "Nouveau déménagement, emploi ou mission."], existing: ["Un statut existe", "La personne détient déjà un titre suisse ou de protection."],
      B: ["Permis B", "Autorisation de séjour"], C: ["Permis C", "Autorisation d’établissement"], L: ["Permis L", "Séjour de courte durée"], G: ["Permis G", "Frontalier"], Ci: ["Permis Ci", "Famille de personnel diplomatique/OI"], refugeeB: ["Réfugié reconnu · B", "L’emploi suit une procédure d’annonce."], F: ["Permis F", "Admission provisoire"], N: ["Permis N", "Demandeur d’asile"], S: ["Permis S", "Protection temporaire"], otherPermit: ["Autre statut ou incertain", "Le canton doit le qualifier."],
      swiss: ["Citoyen suisse", "Aucun permis de travail migratoire."], eu: ["Citoyen UE ou AELE", "La libre circulation s’applique généralement."], uk: ["Citoyen britannique", "En principe ressortissant d’État tiers depuis le Brexit."], third: ["Autre nationalité", "Les règles États tiers s’appliquent généralement."],
      local: ["Emploi chez un employeur suisse", "Contrat local en Suisse."], frontier: ["Travail frontalier", "Domicile principal à l’étranger, travail en Suisse."], posted: ["Détachement ou prestation", "Envoyé par une entreprise étrangère."], self: ["Indépendant ou fondateur", "Créer/exploiter une activité suisse."], familyRoute: ["Rejoindre la famille", "Le séjour dépend du statut d’un proche."], study: ["Étudiant, diplômé ou chercheur d’emploi", "Travail pendant/après les études ou après perte d’emploi."],
      baseSwiss: ["Suisse", "Emploi local, pas un détachement."], baseEu: ["UE ou AELE", "L’annonce de 90 jours peut s’appliquer."], baseUk: ["Royaume-Uni", "L’accord de mobilité des services peut s’appliquer."], baseOther: ["Autre pays", "Le droit national s’applique généralement."],
      resEu: ["Pays UE/AELE", "La voie frontalière UE/AELE peut s’appliquer."], resNeighbor: ["Pays voisin", "France, Allemagne, Italie, Autriche ou Liechtenstein."], resOther: ["Autre pays", "Le permis G est peu probable."],
      visa: ["Visa normalement requis", "Le visa reste distinct de l’autorisation de travail."], exempt: ["Normalement exempté de visa", "L’exemption n’autorise pas le travail."], schengen: ["Titre UE/Schengen", "Il ne donne normalement pas accès au marché suisse."], unsure: ["Je ne sais pas", "Le résultat indiquera le vérificateur officiel."],
      under3: ["Jusqu’à 3 mois", "Pour l’UE/AELE, généralement une annonce."], three12: ["Plus de 3, moins de 12 mois", "Pour l’UE/AELE, généralement L."], twelveplus: ["12 mois ou plus", "Pour l’UE/AELE, généralement B."], under8: ["1–8 jours de travail", "Certains services sont sans annonce."], nine90: ["9–90 jours de travail", "La procédure d’annonce peut s’appliquer."], over90: ["Plus de 90 jours", "Une demande de permis est requise."],
      general: ["Service général", "Les huit premiers jours sont généralement sans annonce."], priority: ["Construction, hôtellerie, nettoyage ou secteur prioritaire", "Annonce dès le premier jour."], regulated: ["Profession réglementée", "Une reconnaissance peut aussi être requise."], yes: ["Oui", "Condition remplie."], no: ["Non", "La voie peut être bloquée ou modifiée."],
      sponsorSwissC: ["Suisse ou titulaire C", "Regroupement et large accès au travail du conjoint."], sponsorEu: ["Citoyen UE/AELE en Suisse", "Les droits de libre circulation peuvent s’appliquer."], sponsorThirdB: ["Ressortissant État tiers avec B", "Regroupement éventuellement conditionnel."], sponsorThirdL: ["Ressortissant État tiers avec L", "Voie limitée et cantonale."], sponsorOther: ["Autre statut", "Contrôle spécialisé requis."],
      spouse: ["Conjoint", "Mariage légal."], registered: ["Partenaire enregistré", "Partenariat juridiquement reconnu."], unmarried: ["Partenaire non marié", "Pas de droit automatique comme conjoint."], child: ["Enfant/descendant à charge", "Âge et dépendance peuvent compter."], parent: ["Parent/grand-parent à charge", "Dépend fortement du sponsor."],
      strong: ["Cadre, spécialiste ou hautement qualifié", "Diplôme/formation avancée et expérience."], uncertain: ["Peut-être, preuves mitigées", "L’employeur devrait tester le dossier."], weak: ["Pas de profil spécialiste/hautement qualifié", "L’admission ordinaire est peu probable."], familyYes: ["Oui", "Ajouter conjoint, partenaire, enfants ou proches à charge."], familyNo: ["Non", "Uniquement le parcours du travailleur."],
    },
    es: {
      person: ["Para mí", "Quiero trabajar, mudarme, cruzar la frontera o emprender."], employer: ["Para un empleado", "Preparo el trámite como empleador suizo o extranjero."], new: ["Aún sin estatus suizo", "Nueva mudanza, contratación o misión."], existing: ["Ya existe un estatus", "La persona tiene permiso o protección suiza."],
      B: ["Permiso B", "Residencia"], C: ["Permiso C", "Establecimiento"], L: ["Permiso L", "Estancia corta"], G: ["Permiso G", "Trabajador fronterizo"], Ci: ["Permiso Ci", "Familia de personal diplomático/OI"], refugeeB: ["Refugiado reconocido · B", "El empleo se notifica."], F: ["Permiso F", "Admisión provisional"], N: ["Permiso N", "Solicitante de asilo"], S: ["Permiso S", "Protección temporal"], otherPermit: ["Otro estatus o incierto", "El cantón debe clasificarlo."],
      swiss: ["Ciudadano suizo", "No necesita permiso migratorio de trabajo."], eu: ["Ciudadano UE o AELC", "Suele aplicarse la libre circulación."], uk: ["Ciudadano británico", "Suele tratarse como tercer país tras el Brexit."], third: ["Otra ciudadanía", "Suelen aplicarse reglas de terceros países."],
      local: ["Empleo con empleador suizo", "Contrato local en Suiza."], frontier: ["Trabajador fronterizo", "Residencia principal fuera; trabajo en Suiza."], posted: ["Desplazamiento o servicio", "Enviado por empresa extranjera."], self: ["Autónomo o fundador", "Crear u operar una actividad suiza."], familyRoute: ["Reunirse con familia", "La residencia depende del estatus de un familiar."], study: ["Estudiante, graduado o buscador de empleo", "Trabajo durante/después de estudios o tras perder empleo."],
      baseSwiss: ["Suiza", "Empleo local, no desplazamiento extranjero."], baseEu: ["UE o AELC", "Puede aplicarse la notificación de 90 días."], baseUk: ["Reino Unido", "Puede aplicarse el acuerdo de movilidad."], baseOther: ["Otro país", "Suele aplicarse admisión nacional."],
      resEu: ["País UE/AELC", "Puede aplicar la ruta fronteriza UE/AELC."], resNeighbor: ["País vecino", "Francia, Alemania, Italia, Austria o Liechtenstein."], resOther: ["Otro país", "El permiso G es poco probable."],
      visa: ["Normalmente necesita visado", "El visado sigue separado del permiso laboral."], exempt: ["Normalmente exento de visado", "La exención no autoriza a trabajar."], schengen: ["Permiso UE/Schengen", "No suele dar acceso al mercado suizo."], unsure: ["No lo sé", "El resultado enlazará el comprobador oficial."],
      under3: ["Hasta 3 meses", "Para UE/AELC, suele ser notificación."], three12: ["Más de 3 y menos de 12 meses", "Para UE/AELC, suele ser L."], twelveplus: ["12 meses o más", "Para UE/AELC, suele ser B."], under8: ["1–8 días de trabajo", "Algunos servicios no se notifican."], nine90: ["9–90 días de trabajo", "Puede aplicarse la notificación."], over90: ["Más de 90 días", "Se requiere solicitud de permiso."],
      general: ["Servicio general", "Los primeros ocho días suelen estar exentos."], priority: ["Construcción, hostelería, limpieza u otro sector prioritario", "Notificación desde el primer día."], regulated: ["Profesión regulada", "Puede requerir reconocimiento adicional."], yes: ["Sí", "Condición cumplida."], no: ["No", "La ruta puede bloquearse o cambiar."],
      sponsorSwissC: ["Suizo o titular C", "Reagrupación y amplio acceso laboral del cónyuge."], sponsorEu: ["Ciudadano UE/AELC en Suiza", "Pueden aplicar derechos de libre circulación."], sponsorThirdB: ["Tercer país con B", "Reagrupación posiblemente condicionada."], sponsorThirdL: ["Tercer país con L", "Ruta limitada y cantonal."], sponsorOther: ["Otro estatus", "Revisión especializada."],
      spouse: ["Cónyuge", "Matrimonio legal."], registered: ["Pareja registrada", "Pareja reconocida legalmente."], unmarried: ["Pareja no casada", "Sin derecho automático como cónyuge."], child: ["Hijo/descendiente dependiente", "Puede haber pruebas de edad y dependencia."], parent: ["Padre/abuelo dependiente", "Depende mucho del estatus patrocinador."],
      strong: ["Directivo, especialista o alta cualificación", "Título/formación avanzada y experiencia."], uncertain: ["Tal vez, pruebas mixtas", "El empleador debería evaluar el caso."], weak: ["Sin perfil especialista/alta cualificación", "La admisión ordinaria es poco probable."], familyYes: ["Sí", "Añadir cónyuge, pareja, hijos o dependientes."], familyNo: ["No", "Solo la ruta del trabajador."],
    },
  };
  return x[lang];
};

options.de = translateBaseOptions("de"); options.fr = translateBaseOptions("fr"); options.es = translateBaseOptions("es");

export type WizardStep = { id: QuestionKey; title: string; hint: string; options?: Array<{ value: string; label: string; detail: string }>; kind?: "options" | "canton" };

const choiceKeys: Record<QuestionKey, string[]> = {
  audience: ["person", "employer"], status: ["new", "existing"], permit: ["B", "C", "L", "G", "Ci", "refugeeB", "F", "N", "S", "otherPermit"],
  nationality: ["swiss", "eu", "uk", "third"], arrangement: ["local", "frontier", "posted", "self", "familyRoute", "study"], employerBase: ["baseSwiss", "baseEu", "baseUk", "baseOther"],
  residence: ["resEu", "resNeighbor", "resOther"], entryStatus: ["visa", "exempt", "schengen", "unsure"], employmentDuration: ["under3", "three12", "twelveplus"],
  serviceDuration: ["under8", "nine90", "over90"], sector: ["general", "priority", "regulated"], euResidence: ["yes", "no"], sponsor: ["sponsorSwissC", "sponsorEu", "sponsorThirdB", "sponsorThirdL", "sponsorOther"],
  relationship: ["spouse", "registered", "unmarried", "child", "parent"], qualified: ["strong", "uncertain", "weak"], canton: [], family: ["familyYes", "familyNo"],
};

const makeStep = (id: QuestionKey, lang: Lang): WizardStep => {
  const [title, hint] = questions[lang][id];
  if (id === "canton") return { id, title, hint, kind: "canton" };
  return { id, title, hint, kind: "options", options: choiceKeys[id].map((value) => ({ value, label: options[lang][value][0], detail: options[lang][value][1] })) };
};

export const stepOrder: QuestionKey[] = ["audience", "status", "permit", "nationality", "arrangement", "employerBase", "residence", "entryStatus", "employmentDuration", "serviceDuration", "sector", "euResidence", "sponsor", "relationship", "qualified", "canton", "family"];

export function buildSteps(a: Answers, lang: Lang): WizardStep[] {
  const ids: QuestionKey[] = ["audience", "status"];
  if (a.status === "existing") {
    ids.push("permit");
    if (a.permit) ids.push("arrangement", "canton");
    return ids.map((id) => makeStep(id, lang));
  }
  if (a.status !== "new") return ids.map((id) => makeStep(id, lang));
  ids.push("nationality");
  if (!a.nationality) return ids.map((id) => makeStep(id, lang));
  ids.push("arrangement");
  if (!a.arrangement) return ids.map((id) => makeStep(id, lang));

  if (a.arrangement === "posted") ids.push("employerBase");
  if (a.arrangement === "frontier") ids.push("residence");
  if ((a.nationality === "uk" || a.nationality === "third") && a.arrangement !== "study") ids.push("entryStatus");
  if (a.arrangement === "local" || a.arrangement === "frontier") ids.push("employmentDuration");
  if (a.arrangement === "posted") {
    ids.push("serviceDuration");
    if (a.serviceDuration === "under8" || a.serviceDuration === "nine90") ids.push("sector");
    if (a.nationality === "third" && a.employerBase === "baseEu") ids.push("euResidence");
  }
  if (a.arrangement === "familyRoute") ids.push("sponsor", "relationship");
  if ((a.nationality === "third" || a.nationality === "uk") && (a.arrangement === "local" || a.arrangement === "self")) ids.push("qualified");
  ids.push("canton");
  if (a.arrangement === "local" || a.arrangement === "self") ids.push("family");
  return ids.map((id) => makeStep(id, lang));
}

type RouteKey = "swiss" | "existingOpen" | "existingReview" | "statusNotify" | "statusS" | "statusN" | "euNotify" | "euL" | "euB" | "euG" | "serviceFree" | "serviceNotify" | "ukService" | "euSelf" | "thirdEmployer" | "thirdG" | "thirdService" | "thirdSelf" | "familyEu" | "familySwissC" | "familyThird" | "studyJob" | "specialist";
type Actor = "applicant" | "employer" | "both" | "authority";

const routeText: Record<Lang, Record<RouteKey, [string, string, string]>> = {
  en: {
    swiss: ["No immigration permit", "Swiss citizen: normal employment route", "Swiss citizens do not need a foreign-national work or residence permit."], existingOpen: ["Existing work-capable status", "Your present permit is the starting point", "A C or Ci status normally already carries broad work access, but the card and canton conditions still matter."], existingReview: ["Existing permit review", "Check the change before work starts", "B, L and G permits can carry job, canton or duration conditions. The competent canton should confirm the change."],
    statusNotify: ["Employment notification", "Work is permitted after notification", "Recognised refugees and people with F status may work throughout Switzerland once employment is reported."], statusS: ["Status S notification", "Report the work before it starts", "Status S holders may take employed or self-employed work once it has been reported to the canton of work."], statusN: ["Prior authorisation", "Permit N: canton approval required", "An asylum seeker may not start work until the canton has granted authorisation."],
    euNotify: ["90-day notification", "Short EU/EFTA employment", "For employment with a Swiss employer up to three months, no residence permit is normally issued; the employer files an online notification."], euL: ["Permit L EU/EFTA", "Short-term residence and work", "A contract longer than three months but under twelve months normally leads to an L EU/EFTA permit."], euB: ["Permit B EU/EFTA", "Five-year residence route", "A contract of at least twelve months or unlimited duration normally leads to a B EU/EFTA permit."], euG: ["Permit G EU/EFTA", "Cross-border commuter route", "An EU/EFTA citizen residing in an EU/EFTA state and returning at least weekly may apply in the canton of work."],
    serviceFree: ["Possible notification-free service", "First eight days in a general sector", "EU/EFTA cross-border services can be notification-free for the first eight working days, unless the sector or profession triggers first-day duties."], serviceNotify: ["90-day service notification", "Notify the assignment before work", "Eligible EU/EFTA services up to 90 working days use the online notification procedure, normally eight days in advance."], ukService: ["Swiss–UK service notification", "Short UK service route", "Eligible UK-based posted or self-employed service providers can use the notification procedure under the Services Mobility Agreement."],
    euSelf: ["Permit B EU/EFTA", "Self-employed residence route", "EU/EFTA citizens can become self-employed after registering and proving a genuine, sustainable activity."], thirdEmployer: ["Employer-led L/B application", "Third-country labour-market admission", "The employer applies before entry and work. Approval depends on qualifications, economic interest, precedence, pay conditions and available quotas."], thirdG: ["Permit G · restricted route", "Third-country cross-border application", "This route requires permanent residence in a neighbouring country, at least six months in its border zone, a Swiss border-zone job and labour-market approval."],
    thirdService: ["Prior work permit", "Service outside the notification route", "The assignment needs a cantonal work-permit application before work. For services over 90 days there is generally no entitlement."], thirdSelf: ["Self-employment application", "Prove lasting economic benefit", "A third-country founder must show overall economic interest, financing, viability and a lasting positive effect on the Swiss labour market."], familyEu: ["Family reunification · EU/EFTA", "Residence through free-movement family rights", "Eligible spouses, registered partners and dependent relatives can join. Spouses and children admitted through this route are entitled to work."],
    familySwissC: ["Family reunification", "Joining a Swiss citizen or C holder", "The family residence filing comes first. Spouses of Swiss citizens or C-permit holders do not need a separate work permit."], familyThird: ["Conditional family route", "Canton review required", "Family reunification for B or L sponsors depends on status, housing, means, relationship and cantonal assessment."], studyJob: ["Study or job-search review", "Existing study/graduate rules matter", "Student work, Swiss graduates and jobseekers follow status-specific limits. The canton or university must confirm the exact route."], specialist: ["Specialist authority check", "No safe automatic route", "The facts fall outside a reliable common route. Use the canton before travel, contracting or starting work."],
  },
  de: {
    swiss: ["Keine Ausländerbewilligung", "Schweizer Staatsangehörigkeit: normaler Arbeitsweg", "Schweizer benötigen keine ausländerrechtliche Arbeits- oder Aufenthaltsbewilligung."], existingOpen: ["Bestehender arbeitsfähiger Status", "Die heutige Bewilligung ist Ausgangspunkt", "C oder Ci gewähren meist breiten Arbeitszugang; Karte und kantonale Bedingungen bleiben massgeblich."], existingReview: ["Bestehende Bewilligung prüfen", "Änderung vor Arbeitsbeginn klären", "B, L und G können Stellen-, Kantons- oder Dauerauflagen enthalten."],
    statusNotify: ["Meldung der Erwerbstätigkeit", "Arbeit nach Meldung zulässig", "Anerkannte Flüchtlinge und Personen mit F dürfen nach Meldung schweizweit arbeiten."], statusS: ["Meldung für Status S", "Arbeit vor Beginn melden", "Mit Status S ist unselbständige oder selbständige Arbeit nach Meldung im Arbeitskanton möglich."], statusN: ["Vorgängige Bewilligung", "Ausweis N: Kantonsentscheid nötig", "Asylsuchende dürfen erst nach kantonaler Bewilligung arbeiten."],
    euNotify: ["90-Tage-Meldung", "Kurze EU/EFTA-Anstellung", "Bis drei Monate meldet der Schweizer Arbeitgeber die Beschäftigung online; normalerweise gibt es keine Aufenthaltsbewilligung."], euL: ["Bewilligung L EU/EFTA", "Kurzaufenthalt und Arbeit", "Ein Vertrag über drei und unter zwölf Monaten führt normalerweise zu L EU/EFTA."], euB: ["Bewilligung B EU/EFTA", "Fünfjähriger Aufenthaltsweg", "Ein Vertrag ab zwölf Monaten oder unbefristet führt normalerweise zu B EU/EFTA."], euG: ["Bewilligung G EU/EFTA", "Grenzgängerweg", "EU/EFTA-Personen mit Wohnsitz in EU/EFTA und wöchentlicher Rückkehr beantragen G im Arbeitskanton."],
    serviceFree: ["Möglicherweise meldefrei", "Erste acht Tage, allgemeine Branche", "EU/EFTA-Dienste können acht Tage meldefrei sein, ausser Branche oder Beruf löst Pflichten ab Tag eins aus."], serviceNotify: ["90-Tage-Dienstleistungsmeldung", "Einsatz vorab melden", "Berechtigte EU/EFTA-Dienste bis 90 Arbeitstage werden online, meist acht Tage vorher, gemeldet."], ukService: ["Schweiz–UK-Meldung", "Kurzer britischer Dienstleistungsweg", "Berechtigte UK-Entsendungen oder Selbständige nutzen das Meldeverfahren des Mobilitätsabkommens."],
    euSelf: ["Bewilligung B EU/EFTA", "Weg für Selbständige", "EU/EFTA-Personen können nach Anmeldung und Nachweis einer echten tragfähigen Tätigkeit selbständig arbeiten."], thirdEmployer: ["Arbeitgebergesuch L/B", "Drittstaatszulassung", "Der Arbeitgeber beantragt vor Einreise und Arbeit. Qualifikation, Gesamtinteresse, Vorrang, Lohn und Kontingente entscheiden."], thirdG: ["Bewilligung G · eingeschränkt", "Drittstaat-Grenzgänger", "Nötig sind Daueraufenthalt im Nachbarland, sechs Monate Grenzzone, Schweizer Grenzzonenstelle und Arbeitsmarktprüfung."],
    thirdService: ["Vorgängige Arbeitsbewilligung", "Dienst ausserhalb der Meldung", "Vor Arbeitsbeginn ist ein kantonales Gesuch nötig; über 90 Tage besteht in der Regel kein Anspruch."], thirdSelf: ["Gesuch Selbständigkeit", "Dauerhaften wirtschaftlichen Nutzen belegen", "Gründer aus Drittstaaten müssen Gesamtinteresse, Finanzierung, Tragfähigkeit und positiven Arbeitsmarkteffekt zeigen."], familyEu: ["Familiennachzug · EU/EFTA", "Aufenthalt über Freizügigkeitsrechte", "Berechtigte Ehegatten, registrierte Partner und Abhängige können nachziehen; Ehegatten und Kinder dürfen arbeiten."],
    familySwissC: ["Familiennachzug", "Zu Schweizer/in oder C-Inhaber/in", "Zuerst erfolgt der Familiennachzug. Ehegatten brauchen keine separate Arbeitsbewilligung."], familyThird: ["Bedingter Familienweg", "Kantonale Prüfung nötig", "Bei B- oder L-Sponsoren zählen Status, Wohnung, Mittel, Beziehung und Kantonsentscheid."], studyJob: ["Studium-/Jobsucheprüfung", "Bestehender Status zählt", "Studierendenarbeit, Schweizer Absolventen und Jobsuchende haben statusbezogene Grenzen."], specialist: ["Spezialprüfung", "Kein sicherer Automatismus", "Der Fall liegt ausserhalb eines verlässlichen Standardwegs. Vor Reise oder Arbeitsbeginn den Kanton fragen."],
  },
  fr: {
    swiss: ["Aucun permis migratoire", "Citoyen suisse : emploi ordinaire", "Les citoyens suisses n’ont pas besoin de permis de travail ou séjour pour étrangers."], existingOpen: ["Statut existant permettant le travail", "Le titre actuel est le point de départ", "Les statuts C ou Ci donnent généralement un large accès; la carte et les conditions cantonales restent déterminantes."], existingReview: ["Révision du permis existant", "Vérifier le changement avant le travail", "Les permis B, L et G peuvent comporter des conditions de poste, canton ou durée."],
    statusNotify: ["Annonce de l’activité", "Travail autorisé après annonce", "Les réfugiés reconnus et titulaires F peuvent travailler dans toute la Suisse après annonce."], statusS: ["Annonce statut S", "Annoncer avant le début", "Les titulaires S peuvent travailler comme salariés ou indépendants après annonce au canton de travail."], statusN: ["Autorisation préalable", "Permis N : accord cantonal", "Un demandeur d’asile ne peut commencer avant l’autorisation cantonale."],
    euNotify: ["Annonce 90 jours", "Emploi UE/AELE de courte durée", "Jusqu’à trois mois chez un employeur suisse, celui-ci effectue l’annonce en ligne; aucun titre de séjour n’est normalement délivré."], euL: ["Permis L UE/AELE", "Séjour et travail de courte durée", "Un contrat de plus de trois et moins de douze mois mène normalement au permis L."], euB: ["Permis B UE/AELE", "Voie de séjour de cinq ans", "Un contrat d’au moins douze mois ou illimité mène normalement au permis B."], euG: ["Permis G UE/AELE", "Voie frontalière", "Un citoyen UE/AELE résidant en UE/AELE et rentrant chaque semaine demande le G dans le canton de travail."],
    serviceFree: ["Service possiblement sans annonce", "Huit premiers jours, secteur général", "Les services transfrontaliers UE/AELE peuvent être sans annonce huit jours, sauf secteur ou profession particulière."], serviceNotify: ["Annonce de service 90 jours", "Annoncer la mission en avance", "Les services UE/AELE éligibles jusqu’à 90 jours utilisent l’annonce en ligne, normalement huit jours avant."], ukService: ["Annonce Suisse–Royaume-Uni", "Voie courte de prestation britannique", "Les prestataires britanniques éligibles utilisent la procédure de l’accord de mobilité des services."],
    euSelf: ["Permis B UE/AELE", "Voie indépendante", "Les citoyens UE/AELE peuvent devenir indépendants après inscription et preuve d’une activité réelle et viable."], thirdEmployer: ["Demande L/B par l’employeur", "Admission d’un État tiers", "L’employeur dépose avant l’entrée et le travail. Qualifications, intérêt économique, priorité, salaire et contingents comptent."], thirdG: ["Permis G · voie restreinte", "Frontalier d’un État tiers", "Il faut un séjour permanent dans un pays voisin, six mois en zone frontière, un emploi dans la zone suisse et l’accord du marché du travail."],
    thirdService: ["Permis de travail préalable", "Service hors procédure d’annonce", "Une demande cantonale est nécessaire avant le travail; au-delà de 90 jours, il n’existe généralement aucun droit."], thirdSelf: ["Demande d’activité indépendante", "Prouver un bénéfice économique durable", "Le fondateur doit démontrer intérêt général, financement, viabilité et effet durable sur le marché suisse."], familyEu: ["Regroupement · UE/AELE", "Séjour par les droits de libre circulation", "Conjoints, partenaires enregistrés et proches à charge éligibles peuvent venir; conjoints et enfants admis peuvent travailler."],
    familySwissC: ["Regroupement familial", "Rejoindre un Suisse ou titulaire C", "Le séjour familial est déposé en premier. Le conjoint n’a pas besoin d’un permis de travail distinct."], familyThird: ["Voie familiale conditionnelle", "Examen cantonal", "Pour sponsors B ou L, statut, logement, moyens, relation et canton déterminent l’issue."], studyJob: ["Examen études/recherche d’emploi", "Le statut existant compte", "Travail étudiant, diplômés suisses et demandeurs d’emploi suivent des limites propres au statut."], specialist: ["Contrôle spécialisé", "Aucune voie automatique sûre", "Les faits sortent d’un parcours commun fiable. Contactez le canton avant voyage, contrat ou travail."],
  },
  es: {
    swiss: ["Sin permiso migratorio", "Ciudadano suizo: empleo ordinario", "Los ciudadanos suizos no necesitan permiso de trabajo o residencia para extranjeros."], existingOpen: ["Estatus existente con acceso laboral", "El permiso actual es el punto de partida", "Los estatus C o Ci suelen permitir trabajar ampliamente; siguen importando la tarjeta y condiciones cantonales."], existingReview: ["Revisión del permiso existente", "Comprobar el cambio antes de empezar", "Los permisos B, L y G pueden incluir condiciones de puesto, cantón o duración."],
    statusNotify: ["Notificación de empleo", "Trabajo permitido tras notificar", "Refugiados reconocidos y titulares F pueden trabajar en toda Suiza una vez notificado."], statusS: ["Notificación estatus S", "Notificar antes de empezar", "Titulares S pueden trabajar por cuenta propia o ajena tras notificar al cantón de trabajo."], statusN: ["Autorización previa", "Permiso N: aprobación cantonal", "Un solicitante de asilo no puede empezar antes de la autorización cantonal."],
    euNotify: ["Notificación de 90 días", "Empleo UE/AELC corto", "Hasta tres meses con empleador suizo, este notifica en línea; normalmente no se emite residencia."], euL: ["Permiso L UE/AELC", "Residencia y trabajo de corta duración", "Un contrato de más de tres y menos de doce meses suele llevar a L."], euB: ["Permiso B UE/AELC", "Ruta de residencia de cinco años", "Un contrato de al menos doce meses o indefinido suele llevar a B."], euG: ["Permiso G UE/AELC", "Ruta fronteriza", "Un ciudadano UE/AELC residente en UE/AELC que vuelve semanalmente solicita G en el cantón de trabajo."],
    serviceFree: ["Posible servicio sin notificación", "Primeros ocho días, sector general", "Los servicios UE/AELC pueden estar exentos ocho días, salvo sectores o profesiones con obligación desde el primer día."], serviceNotify: ["Notificación de servicio 90 días", "Notificar antes de trabajar", "Los servicios UE/AELC elegibles hasta 90 días usan notificación en línea, normalmente ocho días antes."], ukService: ["Notificación Suiza–Reino Unido", "Ruta corta británica", "Prestadores británicos elegibles usan la notificación del Acuerdo de Movilidad de Servicios."],
    euSelf: ["Permiso B UE/AELC", "Ruta autónoma", "Los ciudadanos UE/AELC pueden trabajar por cuenta propia tras registrarse y probar una actividad real y viable."], thirdEmployer: ["Solicitud L/B del empleador", "Admisión de tercer país", "El empleador solicita antes de entrada y trabajo. Cuentan cualificación, interés económico, prioridad, salario y cupos."], thirdG: ["Permiso G · ruta restringida", "Fronterizo de tercer país", "Exige residencia permanente en país vecino, seis meses en zona fronteriza, empleo en zona suiza y aprobación laboral."],
    thirdService: ["Permiso laboral previo", "Servicio fuera de notificación", "Se necesita solicitud cantonal antes del trabajo; sobre 90 días normalmente no hay derecho."], thirdSelf: ["Solicitud de actividad autónoma", "Probar beneficio económico duradero", "El fundador debe demostrar interés general, financiación, viabilidad y efecto positivo duradero."], familyEu: ["Reagrupación · UE/AELC", "Residencia por libre circulación", "Cónyuges, parejas registradas y dependientes elegibles pueden venir; cónyuges e hijos admitidos pueden trabajar."],
    familySwissC: ["Reagrupación familiar", "Reunirse con suizo o titular C", "Primero se tramita la residencia familiar. El cónyuge no necesita permiso laboral separado."], familyThird: ["Ruta familiar condicional", "Revisión cantonal", "Para patrocinadores B o L cuentan estatus, vivienda, medios, relación y valoración cantonal."], studyJob: ["Revisión estudios/empleo", "Importa el estatus existente", "Trabajo estudiantil, graduados suizos y buscadores de empleo siguen límites específicos."], specialist: ["Revisión especializada", "Sin ruta automática segura", "Los hechos quedan fuera de una ruta común fiable. Consulta al cantón antes de viajar, contratar o trabajar."],
  },
};

const actionText: Record<Lang, Record<string, string>> = {
  en: {
    noPermit: "Use the normal employment, payroll and social-insurance process; no immigration work permit is needed.", verifyExisting: "Send the current permit, proposed job and start date to the canton and obtain written confirmation if conditions may change.", reportWork: "The employer reports the start, end and any job change to the competent canton before work begins.", requestN: "The employer applies to the canton of work and waits for authorisation before the person starts.",
    employerNotify: "The Swiss employer submits the EasyGov notification no later than the day before the first workday.", providerNotify: "The posting company or self-employed provider submits the EasyGov notification, normally at least eight days in advance.", noNotice: "Confirm the company and worker have not used the eight notification-free days and that no first-day sector rule applies.", regulatedCheck: "If the profession is regulated, complete the separate qualification-recognition declaration before practising.",
    registerCommune: "Register with the commune of residence within 14 days of arrival and before starting work.", applyL: "Present ID/passport and written employment confirmation to receive an L EU/EFTA permit.", applyB: "Present ID/passport and a 12-month or unlimited contract to receive a B EU/EFTA permit.", applyG: "Apply to the immigration/labour authority in the canton of work for a G permit.", proveWeekly: "Document the foreign main residence and ability to return there at least once a week.",
    proveSelf: "Register and submit evidence of genuine self-employment and ability to support the household before beginning activity.", employerPrepare: "The employer prepares the complete labour-market case and the cantonal application form before entry or work.", cantonReview: "The canton reviews the application first; approved third-country cases are normally forwarded to SEM.", semReview: "Wait for the SEM/cantonal decision. A positive decision alone may not yet authorise entry.", visaAfterApproval: "Follow the Swiss representation’s visa or entry-authorisation instructions after the work approval.", registerArrival: "After entry, register at the commune within 14 days and before starting work.",
    insurance: "Arrange mandatory Swiss health insurance within three months where Swiss residence rules apply.", familyApply: "File family reunification with the canton and provide civil-status, identity, housing and sponsor documents.", familyWork: "After family admission, confirm the permit card/registration; the relevant spouse/child work right follows that status.", businessCase: "Submit a detailed business plan, financing, market case, staffing impact and commercial-register documents.", contactCanton: "Contact the canton of work/residence with the full facts before travel, contract start or activity.", universityCheck: "Ask the canton and the educational institution to confirm permitted hours, waiting periods and status conditions.", ensureConditions: "Keep the confirmation and comply with Swiss pay, working-condition and posting rules.",
  },
  de: {
    noPermit: "Normales Arbeits-, Lohn- und Sozialversicherungsverfahren nutzen; keine ausländerrechtliche Arbeitsbewilligung.", verifyExisting: "Heutige Bewilligung, neue Stelle und Startdatum dem Kanton senden und Änderungen schriftlich bestätigen lassen.", reportWork: "Der Arbeitgeber meldet Beginn, Ende und Stellenwechsel vor Arbeitsbeginn dem zuständigen Kanton.", requestN: "Der Arbeitgeber beantragt im Arbeitskanton und wartet vor Arbeitsbeginn auf die Bewilligung.", employerNotify: "Der Schweizer Arbeitgeber meldet über EasyGov spätestens am Tag vor Arbeitsbeginn.", providerNotify: "Entsendefirma oder Selbständige melden über EasyGov, normalerweise mindestens acht Tage vorher.", noNotice: "Prüfen, ob die acht meldefreien Tage ungenutzt sind und keine Branche ab Tag eins meldepflichtig ist.", regulatedCheck: "Bei reglementiertem Beruf zusätzlich Anerkennungserklärung vor Berufsausübung abschliessen.", registerCommune: "Innerhalb 14 Tagen nach Einreise und vor Arbeitsbeginn bei der Wohngemeinde anmelden.", applyL: "Ausweis und schriftliche Arbeitsbestätigung für L EU/EFTA vorlegen.", applyB: "Ausweis und Vertrag ab 12 Monaten/unbefristet für B EU/EFTA vorlegen.", applyG: "G-Bewilligung bei der Migrations-/Arbeitsmarktbehörde des Arbeitskantons beantragen.", proveWeekly: "Ausländischen Hauptwohnsitz und mindestens wöchentliche Rückkehr belegen.", proveSelf: "Echte Selbständigkeit und Unterhaltsfähigkeit vor Tätigkeitsbeginn nachweisen.", employerPrepare: "Arbeitgeber erstellt vor Einreise/Arbeit das vollständige Arbeitsmarktgesuch.", cantonReview: "Der Kanton prüft zuerst; genehmigte Drittstaatsfälle gehen normalerweise ans SEM.", semReview: "SEM-/Kantonsentscheid abwarten; ein positiver Entscheid erlaubt nicht zwingend schon die Einreise.", visaAfterApproval: "Nach Arbeitszulassung den Visum-/Einreiseanweisungen der Schweizer Vertretung folgen.", registerArrival: "Nach Einreise binnen 14 Tagen und vor Arbeitsbeginn bei der Gemeinde anmelden.", insurance: "Bei Schweizer Wohnsitz innert drei Monaten obligatorische Krankenversicherung abschliessen.", familyApply: "Familiennachzug mit Zivilstands-, Identitäts-, Wohnungs- und Sponsornachweisen einreichen.", familyWork: "Nach Zulassung Ausweis/Anmeldung bestätigen; das Arbeitsrecht folgt dem Familienstatus.", businessCase: "Businessplan, Finanzierung, Markt, Beschäftigungseffekt und Handelsregisterunterlagen einreichen.", contactCanton: "Vor Reise, Vertragsbeginn oder Arbeit den zuständigen Kanton mit allen Fakten kontaktieren.", universityCheck: "Kanton und Hochschule zu Arbeitsstunden, Wartefristen und Statusbedingungen fragen.", ensureConditions: "Bestätigung aufbewahren und Schweizer Lohn-, Arbeits- und Entsenderegeln einhalten.",
  },
  fr: {
    noPermit: "Suivre les démarches ordinaires d’emploi, paie et assurances; aucun permis migratoire de travail.", verifyExisting: "Transmettre le permis actuel, le nouvel emploi et la date au canton; obtenir confirmation écrite si les conditions changent.", reportWork: "L’employeur annonce début, fin et changement d’emploi au canton avant le travail.", requestN: "L’employeur demande au canton du travail et attend l’autorisation avant le début.", employerNotify: "L’employeur suisse effectue l’annonce EasyGov au plus tard la veille du premier jour.", providerNotify: "L’entreprise détachante ou l’indépendant annonce via EasyGov, normalement huit jours avant.", noNotice: "Confirmer que les huit jours sans annonce restent disponibles et qu’aucune règle dès le premier jour ne s’applique.", regulatedCheck: "Pour une profession réglementée, accomplir la déclaration de reconnaissance avant l’exercice.", registerCommune: "S’inscrire à la commune dans les 14 jours suivant l’arrivée et avant de travailler.", applyL: "Présenter identité et confirmation d’emploi pour recevoir L UE/AELE.", applyB: "Présenter identité et contrat de 12 mois/illimité pour recevoir B UE/AELE.", applyG: "Demander G auprès de l’autorité du canton de travail.", proveWeekly: "Prouver la résidence principale étrangère et le retour au moins hebdomadaire.", proveSelf: "Prouver activité indépendante réelle et moyens avant de commencer.", employerPrepare: "L’employeur prépare le dossier complet du marché du travail avant entrée ou travail.", cantonReview: "Le canton examine d’abord; les dossiers États tiers approuvés vont normalement au SEM.", semReview: "Attendre la décision SEM/canton; une décision positive n’autorise pas toujours encore l’entrée.", visaAfterApproval: "Après accord de travail, suivre les instructions visa/entrée de la représentation suisse.", registerArrival: "Après l’entrée, s’inscrire dans les 14 jours et avant le travail.", insurance: "Souscrire l’assurance-maladie suisse dans les trois mois lorsque le séjour l’exige.", familyApply: "Déposer le regroupement avec actes civils, identité, logement et documents du sponsor.", familyWork: "Après admission, confirmer titre/inscription; le droit au travail suit le statut familial.", businessCase: "Fournir plan d’affaires, financement, marché, effet sur l’emploi et registre du commerce.", contactCanton: "Contacter le canton avec tous les faits avant voyage, contrat ou activité.", universityCheck: "Faire confirmer par canton et établissement les heures, délais et conditions du statut.", ensureConditions: "Conserver la confirmation et respecter salaire, travail et détachement suisses.",
  },
  es: {
    noPermit: "Seguir empleo, nómina y seguridad social ordinarios; no se necesita permiso migratorio laboral.", verifyExisting: "Enviar permiso actual, nuevo empleo y fecha al cantón; obtener confirmación escrita si cambian condiciones.", reportWork: "El empleador notifica inicio, fin y cambios al cantón antes del trabajo.", requestN: "El empleador solicita al cantón de trabajo y espera autorización antes del inicio.", employerNotify: "El empleador suizo notifica en EasyGov como máximo el día anterior al primero de trabajo.", providerNotify: "Empresa desplazante o autónomo notifica en EasyGov, normalmente ocho días antes.", noNotice: "Confirmar que quedan los ocho días exentos y que no aplica obligación desde el primer día.", regulatedCheck: "En profesiones reguladas, completar también el reconocimiento antes de ejercer.", registerCommune: "Registrarse en la comuna dentro de 14 días de llegada y antes de empezar.", applyL: "Presentar identidad y confirmación laboral para recibir L UE/AELC.", applyB: "Presentar identidad y contrato de 12 meses/indefinido para recibir B UE/AELC.", applyG: "Solicitar G a la autoridad del cantón de trabajo.", proveWeekly: "Probar residencia principal extranjera y retorno al menos semanal.", proveSelf: "Probar actividad autónoma real y medios antes de empezar.", employerPrepare: "El empleador prepara el expediente laboral completo antes de entrada o trabajo.", cantonReview: "El cantón revisa primero; los casos aprobados suelen pasar a SEM.", semReview: "Esperar decisión SEM/cantón; una decisión positiva puede no autorizar aún la entrada.", visaAfterApproval: "Tras aprobación laboral, seguir instrucciones de visado/entrada de la representación suiza.", registerArrival: "Tras entrar, registrarse en 14 días y antes de trabajar.", insurance: "Contratar seguro médico suizo en tres meses cuando aplique residencia.", familyApply: "Solicitar reagrupación con documentos civiles, identidad, vivienda y patrocinador.", familyWork: "Tras admisión, confirmar tarjeta/registro; el derecho laboral sigue el estatus familiar.", businessCase: "Aportar plan de negocio, financiación, mercado, empleo y registro mercantil.", contactCanton: "Contactar al cantón con todos los hechos antes de viajar, contratar o trabajar.", universityCheck: "Pedir a cantón e institución que confirmen horas, esperas y condiciones.", ensureConditions: "Guardar confirmación y cumplir salario, trabajo y desplazamiento suizos.",
  },
};

const docText: Record<Lang, Record<string, string>> = {
  en: { id: "Valid passport or identity card", permit: "Current Swiss permit card and decision", contract: "Signed employment contract or written confirmation", cantonForm: "Cantonal application form", cv: "Tabular CV and work references", qualifications: "Diplomas, qualifications and certified translations", recruitment: "Recruitment evidence from Switzerland and EU/EFTA", roleCase: "Role description, company information and admission justification", salary: "Salary and employment-condition evidence", residence: "Proof of main residence abroad", assignment: "Assignment contract, dates, place and service description", eu12: "Proof of at least 12 months’ lawful EU/EFTA labour-market residence", business: "Three-year business plan, financing and market analysis", register: "Company deed and commercial-register extract", civil: "Civil-status certificates and certified translations", housing: "Evidence of adequate housing", means: "Financial-means and sponsor evidence", photo: "Biometric photo/appointment if requested" },
  de: { id: "Gültiger Pass oder Identitätskarte", permit: "Heutiger Schweizer Ausweis und Entscheid", contract: "Unterzeichneter Vertrag oder Arbeitsbestätigung", cantonForm: "Kantonales Gesuchsformular", cv: "Tabellarischer Lebenslauf und Zeugnisse", qualifications: "Diplome, Qualifikationen und beglaubigte Übersetzungen", recruitment: "Rekrutierungsnachweise Schweiz und EU/EFTA", roleCase: "Stellenbeschreibung, Firmenangaben und Begründung", salary: "Lohn- und Arbeitsbedingungsnachweise", residence: "Nachweis Hauptwohnsitz im Ausland", assignment: "Auftragsvertrag, Daten, Ort und Dienstbeschreibung", eu12: "Nachweis 12 Monate rechtmässige EU/EFTA-Arbeitsmarktintegration", business: "Dreijahres-Businessplan, Finanzierung und Marktanalyse", register: "Gründungsurkunde und Handelsregisterauszug", civil: "Zivilstandsurkunden und beglaubigte Übersetzungen", housing: "Nachweis angemessener Wohnung", means: "Finanzmittel- und Sponsornachweise", photo: "Biometriefoto/-termin falls verlangt" },
  fr: { id: "Passeport ou carte d’identité valable", permit: "Titre suisse actuel et décision", contract: "Contrat signé ou confirmation d’emploi", cantonForm: "Formulaire cantonal", cv: "CV tabulaire et références", qualifications: "Diplômes, qualifications et traductions certifiées", recruitment: "Preuves de recrutement Suisse et UE/AELE", roleCase: "Description du poste, entreprise et justification", salary: "Preuves de salaire et conditions", residence: "Preuve de résidence principale étrangère", assignment: "Contrat de mission, dates, lieu et service", eu12: "Preuve de 12 mois d’admission régulière UE/AELE", business: "Plan d’affaires sur trois ans, financement et marché", register: "Acte de fondation et extrait du registre", civil: "Actes d’état civil et traductions certifiées", housing: "Preuve de logement adéquat", means: "Preuves de moyens et du sponsor", photo: "Photo/rendez-vous biométrique si demandé" },
  es: { id: "Pasaporte o documento de identidad válido", permit: "Tarjeta y decisión suiza actuales", contract: "Contrato firmado o confirmación de empleo", cantonForm: "Formulario cantonal", cv: "CV tabular y referencias", qualifications: "Títulos, cualificaciones y traducciones juradas", recruitment: "Pruebas de contratación en Suiza y UE/AELC", roleCase: "Descripción del puesto, empresa y justificación", salary: "Pruebas de salario y condiciones", residence: "Prueba de residencia principal extranjera", assignment: "Contrato de misión, fechas, lugar y servicio", eu12: "Prueba de 12 meses de admisión laboral UE/AELC", business: "Plan de negocio de tres años, financiación y mercado", register: "Escritura y extracto del registro mercantil", civil: "Certificados civiles y traducciones juradas", housing: "Prueba de vivienda adecuada", means: "Pruebas de medios y patrocinador", photo: "Foto/cita biométrica si se solicita" },
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
} as const;

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
  familyEu: { actor: "applicant", actions: ["familyApply", "familyWork", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing", "means"], sourceIds: ["family", "eu", "cantons"] },
  familySwissC: { actor: "applicant", actions: ["familyApply", "familyWork", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing"], sourceIds: ["family", "general", "cantons"] },
  familyThird: { actor: "applicant", actions: ["familyApply", "contactCanton", "registerArrival", "insurance"], docs: ["id", "permit", "civil", "housing", "means"], sourceIds: ["family", "cantons"] },
  studyJob: { actor: "applicant", actions: ["universityCheck", "verifyExisting", "contactCanton"], docs: ["id", "permit", "contract", "qualifications"], sourceIds: ["eu", "nonEu", "cantons"] },
  specialist: { actor: "both", actions: ["contactCanton"], docs: ["id", "permit", "contract", "roleCase"], sourceIds: ["cantons", "general"] },
};

function resolveRoute(a: Answers): RouteKey {
  if (a.status === "existing") {
    if (a.permit === "C" || a.permit === "Ci") return "existingOpen";
    if (a.permit === "F" || a.permit === "refugeeB") return "statusNotify";
    if (a.permit === "S") return "statusS";
    if (a.permit === "N") return "statusN";
    if (a.permit === "B" || a.permit === "L" || a.permit === "G") return "existingReview";
    return "specialist";
  }
  if (a.nationality === "swiss") return "swiss";
  if (a.arrangement === "familyRoute") {
    if (a.sponsor === "sponsorEu") return "familyEu";
    if (a.sponsor === "sponsorSwissC") return "familySwissC";
    return "familyThird";
  }
  if (a.arrangement === "study") return "studyJob";
  if (a.arrangement === "local") {
    if (a.nationality === "eu") {
      if (a.employmentDuration === "under3") return "euNotify";
      if (a.employmentDuration === "three12") return "euL";
      return "euB";
    }
    return "thirdEmployer";
  }
  if (a.arrangement === "frontier") return a.nationality === "eu" ? "euG" : "thirdG";
  if (a.arrangement === "self") return a.nationality === "eu" ? "euSelf" : "thirdSelf";
  if (a.arrangement === "posted") {
    const short = a.serviceDuration === "under8" || a.serviceDuration === "nine90";
    if (short && a.nationality === "uk" && a.employerBase === "baseUk") return "ukService";
    const euEligible = a.employerBase === "baseEu" && (a.nationality === "eu" || (a.nationality === "third" && a.euResidence === "yes"));
    if (short && euEligible) {
      if (a.serviceDuration === "under8" && a.sector === "general") return "serviceFree";
      return "serviceNotify";
    }
    return "thirdService";
  }
  return "specialist";
}

export type ResultModel = {
  key: RouteKey; badge: string; title: string; summary: string; actor: Actor; actions: string[]; docs: string[];
  sourceLinks: Array<{ label: string; url: string }>; canton?: { code: string; name: string; url: string };
  visaNote?: string; familyNote?: string; warning?: string;
};

const layers: Record<Lang, { visaRequired: string; visaExempt: string; schengen: string; unsure: string; family: string; weak: string; unmarried: string }> = {
  en: { visaRequired: "A visa is a separate step. For work/residence, follow the Swiss representation’s instructions after the work authorisation; long stays normally use the national D-visa process.", visaExempt: "Visa exemption does not authorise employment. Wait for the work/residence approval and follow any entry-authorisation instructions.", schengen: "An EU/Schengen residence permit does not normally grant access to the Swiss labour market. The narrow posted-worker exception is reflected in this route.", unsure: "Use SEM’s official entry checker for the exact nationality. Work authorisation and entry permission remain separate decisions.", family: "Family members need their own residence filing. Add passports, civil-status evidence, housing and—where required—financial means; unmarried partners need an individual canton review.", weak: "The selected profile does not match the usual highly-qualified third-country threshold. Approval is unlikely without a recognised exception or much stronger evidence.", unmarried: "An unmarried partner does not automatically qualify as a spouse. Ask the canton about an individual residence route before relying on family reunification." },
  de: { visaRequired: "Das Visum ist ein separater Schritt. Nach Arbeitszulassung den Anweisungen der Schweizer Vertretung folgen; Langaufenthalte nutzen normalerweise das nationale D-Visum.", visaExempt: "Visumfreiheit erlaubt keine Arbeit. Arbeits-/Aufenthaltsentscheid und allfällige Einreiseanweisung abwarten.", schengen: "Ein EU-/Schengen-Aufenthaltstitel gibt grundsätzlich keinen Schweizer Arbeitsmarktzugang. Die enge Entsendeausnahme ist im Ergebnis berücksichtigt.", unsure: "Den offiziellen SEM-Nationalitätscheck nutzen. Arbeitszulassung und Einreise bleiben getrennte Entscheide.", family: "Familienmitglieder brauchen ein eigenes Aufenthaltsgesuch mit Pässen, Zivilstand, Wohnung und ggf. Finanzmitteln; unverheiratete Partner benötigen Einzelprüfung.", weak: "Das Profil entspricht nicht der üblichen Hochqualifikationsschwelle für Drittstaaten. Ohne Ausnahme oder stärkere Nachweise ist eine Zulassung unwahrscheinlich.", unmarried: "Unverheiratete Partner gelten nicht automatisch als Ehegatten. Vor Verlass auf Familiennachzug den Kanton nach einem individuellen Weg fragen." },
  fr: { visaRequired: "Le visa est une étape distincte. Après l’autorisation de travail, suivre la représentation suisse; les longs séjours passent normalement par le visa national D.", visaExempt: "L’exemption de visa n’autorise pas l’emploi. Attendez l’accord de travail/séjour et les instructions d’entrée.", schengen: "Un titre UE/Schengen ne donne normalement pas accès au marché suisse. L’exception étroite du détachement est intégrée au résultat.", unsure: "Utilisez le vérificateur SEM pour la nationalité exacte. Travail et entrée restent deux décisions distinctes.", family: "Chaque proche a besoin de son dossier de séjour avec passeports, état civil, logement et, si requis, moyens; le partenaire non marié exige un examen individuel.", weak: "Le profil ne correspond pas au seuil habituel de haute qualification des États tiers. Sans exception ou preuves renforcées, l’admission est peu probable.", unmarried: "Un partenaire non marié n’est pas automatiquement assimilé au conjoint. Demandez au canton une voie individuelle avant de compter sur le regroupement." },
  es: { visaRequired: "El visado es un paso separado. Tras la autorización laboral, sigue las instrucciones de la representación suiza; las estancias largas suelen usar visado nacional D.", visaExempt: "La exención de visado no autoriza a trabajar. Espera la aprobación de trabajo/residencia y las instrucciones de entrada.", schengen: "Un permiso UE/Schengen no suele dar acceso al mercado suizo. La excepción estrecha de desplazamiento ya está reflejada.", unsure: "Usa el comprobador oficial de SEM para la nacionalidad exacta. Trabajo y entrada siguen siendo decisiones separadas.", family: "Cada familiar necesita expediente de residencia con pasaportes, estado civil, vivienda y, cuando proceda, medios; parejas no casadas requieren revisión individual.", weak: "El perfil no coincide con el umbral habitual de alta cualificación de terceros países. Sin excepción o pruebas más sólidas, la aprobación es poco probable.", unmarried: "Una pareja no casada no equivale automáticamente a cónyuge. Consulta al cantón una vía individual antes de confiar en la reagrupación." },
};

export function getResult(a: Answers, lang: Lang): ResultModel {
  const key = resolveRoute(a);
  const [badge, title, summary] = routeText[lang][key];
  const def = routeDef[key];
  const cantonRow = cantons.find(([code]) => code === a.canton);
  const result: ResultModel = {
    key, badge, title, summary, actor: def.actor,
    actions: def.actions.map((id) => actionText[lang][id]),
    docs: def.docs.map((id) => docText[lang][id]),
    sourceLinks: def.sourceIds.map((id) => ({ label: sources[id][0], url: sources[id][1] })),
    canton: cantonRow ? { code: cantonRow[0], name: cantonRow[1], url: cantonRow[2] } : undefined,
  };
  if (a.entryStatus === "visa") result.visaNote = layers[lang].visaRequired;
  if (a.entryStatus === "exempt") result.visaNote = layers[lang].visaExempt;
  if (a.entryStatus === "schengen") result.visaNote = layers[lang].schengen;
  if (a.entryStatus === "unsure") result.visaNote = layers[lang].unsure;
  if (a.family === "familyYes") result.familyNote = layers[lang].family;
  if (a.relationship === "unmarried") result.warning = layers[lang].unmarried;
  if (a.qualified === "weak" && (key === "thirdEmployer" || key === "thirdSelf")) result.warning = layers[lang].weak;
  return result;
}

export function getAnswerLabel(key: string, value: string, lang: Lang): string {
  if (key === "canton") return cantons.find(([code]) => code === value)?.[1] ?? value;
  return options[lang][value]?.[0] ?? value;
}
