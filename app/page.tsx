import { type ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  Answers,
  Lang,
  buildSteps,
  cantons,
  getAnswerLabel,
  getResult,
  permitOfficialLinks,
  languages,
  stepOrder,
  ui,
  type RouteKey,
} from "./permit-engine";
import {
  formatHistoryDate,
  historyEntries,
  historyUi,
  type HistoryKind,
} from "./history";
import {
  decodeShareHash,
  encodeShareHash,
  isShareHash,
} from "./share";
import {
  applyTheme,
  readThemeMode,
  themeModes,
  type ThemeMode,
} from "./theme";
import { persistLang, readLang } from "./language";

type Screen = "home" | "wizard" | "result" | "history" | "legal" | "permits";

const credits = {
  github: "https://github.com/djui/permitpilot",
  githubPrivacy: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
  people: [
    { name: "Julie Thomas", href: "https://www.linkedin.com/in/julie-thomas-99b3b073/", role: "designer" },
    { name: "Uwe Dauernheim", href: "https://www.linkedin.com/in/uwedauernheim", role: "developer" },
  ],
} as const;

const extras = {
  en: {
    howTitle: "One clear route through federal rules and cantonal paperwork.",
    howLead: "Only questions that change the route, then who files what—and in which order.",
    cards: [["Legally relevant questions", "Questions cover citizenship, status, work model, duration and canton—not characteristics that do not affect the route."], ["Responsibilities separated", "Applicant, employer and authority tasks appear in their proper order, including entry and arrival."], ["A result you can check", "Every route points back to SEM, ch.ch, EasyGov and the responsible canton."]],
    common: "Common routes covered", coverage: "Employees · founders · commuters · posted services · family · students · graduates · jobseekers · existing permits · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Federal rules first. The canton remains the deciding authority.",
    sourceLead: "PermitPilot organises official Swiss guidance. Open the source yourself before you file.",
    sources: [
      ["SEM", "State Secretariat for Migration", "Federal rules on admission, permits and visas.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Swiss government portal", "Plain-language overview of living and working in Switzerland.", "https://www.ch.ch/"],
      ["EasyGov", "Business point of contact", "Employer notifications and work-permit filings.", "https://www.easygov.swiss/"],
      ["26 cantons", "Cantonal migration offices", "The competent office that processes the application.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Designed in France.\nDeveloped in Sweden.\nFor Switzerland.",
    aboutBody: "PermitPilot is private, unpaid, best-effort work. It is not a Swiss government site and does not speak for SEM, the Confederation or any canton. It organises official information; it does not issue a permit or replace advice from the competent canton.",
    designer: "Design", developer: "Development", githubLabel: "GitHub", unofficial: "Unofficial",
    permitsTitle: "Swiss permit letters",
    permitsLead: "Each letter is the status printed on the foreign-national identity document. These are official SEM starting pages, not a decision.",
    contribute: "The source is on GitHub. Issues and pull requests are welcome.",
    githubPrivacyLabel: "GitHub privacy statement",
    legalTitle: "Legal and privacy",
    legalLead: "These notices describe this unofficial navigator. They are not a substitute for advice from a lawyer or the competent canton.",
    legalSections: [
      ["Not a government site", "PermitPilot is a private, unpaid project. It is not a Swiss government site and does not speak for SEM, the Confederation or any canton."],
      ["Not legal advice", "This navigator is general information. It is not legal, tax or immigration advice, does not issue a permit, and does not replace the competent canton or a qualified advisor."],
      ["No warranty", "Guidance is best-effort and may be incomplete or out of date. Rules, forms, quotas and cantonal practice can change. The Changes page records when rules were last reviewed. Open the official source before you file."],
      ["Your answers", "There is no account. Wizard answers are processed in your browser and are not uploaded to PermitPilot. If you copy a result link, the answers are in that link and visible to anyone who opens it. GitHub Pages may log technical data such as IP addresses under GitHub’s privacy statement."],
      ["Liability", "To the extent the applicable law allows, the authors accept no liability for decisions taken in reliance on this site. Rights that cannot be waived remain unaffected."],
      ["Contact", "Questions and corrections belong in GitHub issues for this project."],
    ],
  },
  de: {
    howTitle: "Ein klarer Weg durch Bundesregeln und kantonale Formulare.",
    howLead: "Nur Fragen, die den Weg ändern – dann wer was in welcher Reihenfolge einreicht.",
    cards: [["Nur rechtlich relevante Fragen", "Die Fragen betreffen Staatsangehörigkeit, Status, Arbeitsmodell, Dauer und Kanton – nicht irrelevante Merkmale."], ["Zuständigkeiten getrennt", "Aufgaben von Person, Arbeitgeber und Behörde erscheinen in der richtigen Reihenfolge."], ["Prüfbares Ergebnis", "Jeder Weg führt zu SEM, ch.ch, EasyGov und dem zuständigen Kanton."]],
    common: "Abgedeckte Standardwege", coverage: "Angestellte · Gründer · Grenzgänger · Entsendungen · Familie · Studium · Absolventen · Jobsuche · bestehende Bewilligungen · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Zuerst Bundesrecht. Der Kanton bleibt die entscheidende Behörde.",
    sourceLead: "PermitPilot ordnet offizielle Schweizer Informationen. Öffne die Quelle, bevor du einreichst.",
    sources: [
      ["SEM", "Staatssekretariat für Migration", "Bundesregeln zu Zulassung, Bewilligungen und Visa.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Schweizer Behördenportal", "Verständliche Übersicht zu Leben und Arbeiten in der Schweiz.", "https://www.ch.ch/"],
      ["EasyGov", "Anlaufstelle für Unternehmen", "Meldungen und Bewilligungsgesuche von Arbeitgebern.", "https://www.easygov.swiss/"],
      ["26 Kantone", "Kantonale Migrationsämter", "Die zuständige Stelle, die das Gesuch bearbeitet.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Entworfen in Frankreich.\nEntwickelt in Schweden.\nFür die Schweiz.",
    aboutBody: "PermitPilot ist unbezahlte Privatarbeit nach bestem Wissen. Es ist keine Website der Schweizer Behörden und spricht nicht für das SEM, den Bund oder einen Kanton. Es ordnet offizielle Informationen; es erteilt keine Bewilligung und ersetzt keine Auskunft des zuständigen Kantons.",
    designer: "Gestaltung", developer: "Entwicklung", githubLabel: "GitHub", unofficial: "Inoffiziell",
    permitsTitle: "Schweizer Bewilligungsbuchstaben",
    permitsLead: "Jeder Buchstabe ist der Status auf dem Ausländerausweis. Das sind offizielle SEM-Startseiten, kein Entscheid.",
    contribute: "Der Quellcode liegt auf GitHub. Issues und Pull Requests sind willkommen.",
    githubPrivacyLabel: "GitHub-Datenschutzerklärung",
    legalTitle: "Rechtliches und Datenschutz",
    legalLead: "Diese Hinweise beschreiben den inoffiziellen Navigator. Sie ersetzen keine Beratung durch eine Anwältin, einen Anwalt oder den zuständigen Kanton.",
    legalSections: [
      ["Keine Behördenwebsite", "PermitPilot ist ein unbezahltes privates Projekt. Es ist keine Website der Schweizer Behörden und spricht nicht für das SEM, den Bund oder einen Kanton."],
      ["Keine Rechtsberatung", "Der Navigator ist allgemeine Information. Er ist keine Rechts-, Steuer- oder Migrationsberatung, erteilt keine Bewilligung und ersetzt weder den zuständigen Kanton noch eine fachkundige Beratung."],
      ["Keine Gewähr", "Die Orientierung erfolgt nach bestem Wissen und kann unvollständig oder veraltet sein. Regeln, Formulare, Kontingente und kantonale Praxis können sich ändern. Die Seite Änderungen hält fest, wann Regeln zuletzt geprüft wurden. Öffne die offizielle Quelle, bevor du einreichst."],
      ["Deine Antworten", "Es gibt kein Konto. Antworten im Assistenten bleiben in deinem Browser und werden nicht an PermitPilot hochgeladen. Kopierst du einen Ergebnis-Link, stehen die Antworten darin und sind für jede Person sichtbar, die ihn öffnet. GitHub Pages kann technische Daten wie IP-Adressen gemäss der Datenschutzerklärung von GitHub protokollieren."],
      ["Haftung", "Soweit das anwendbare Recht es zulässt, übernehmen die Autorin und der Autor keine Haftung für Entscheidungen im Vertrauen auf diese Seite. Unverzichtbare Rechte bleiben unberührt."],
      ["Kontakt", "Fragen und Korrekturen gehören in die GitHub-Issues dieses Projekts."],
    ],
  },
  fr: {
    howTitle: "Un parcours clair entre règles fédérales et démarches cantonales.",
    howLead: "Uniquement ce qui change le parcours, puis qui dépose quoi, et dans quel ordre.",
    cards: [["Questions juridiquement utiles", "Les questions portent sur la nationalité, le statut, le modèle de travail, la durée et le canton – pas les caractéristiques sans effet juridique."], ["Responsabilités séparées", "Les tâches du candidat, de l’employeur et de l’autorité apparaissent dans le bon ordre."], ["Un résultat vérifiable", "Chaque parcours renvoie au SEM, à ch.ch, EasyGov et au canton compétent."]],
    common: "Parcours courants couverts", coverage: "Salariés · fondateurs · frontaliers · détachements · famille · études · diplômés · recherche d’emploi · permis existants · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Les règles fédérales d’abord. Le canton reste l’autorité décisionnaire.",
    sourceLead: "PermitPilot organise l’information officielle suisse. Ouvrez la source avant de déposer un dossier.",
    sources: [
      ["SEM", "Secrétariat d’État aux migrations", "Règles fédérales sur l’admission, les permis et les visas.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portail des autorités suisses", "Vue d’ensemble claire de la vie et du travail en Suisse.", "https://www.ch.ch/"],
      ["EasyGov", "Guichet des entreprises", "Annonces et demandes de permis déposées par l’employeur.", "https://www.easygov.swiss/"],
      ["26 cantons", "Offices cantonaux des migrations", "L’autorité compétente qui traite la demande.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Conçu en France.\nDéveloppé en Suède.\nPour la Suisse.",
    aboutBody: "PermitPilot est un travail privé, non rémunéré, réalisé au mieux. Ce n’est pas un site des autorités suisses et il ne parle ni pour le SEM, ni pour la Confédération, ni pour un canton. Il organise l’information officielle ; il ne délivre aucun permis et ne remplace pas l’avis du canton compétent.",
    designer: "Conception", developer: "Développement", githubLabel: "GitHub", unofficial: "Non officiel",
    permitsTitle: "Lettres de permis suisses",
    permitsLead: "Chaque lettre est le statut imprimé sur le titre pour étrangers. Ce sont des pages de départ du SEM, pas une décision.",
    contribute: "Le code source est sur GitHub. Les issues et les pull requests sont les bienvenues.",
    githubPrivacyLabel: "Déclaration de confidentialité GitHub",
    legalTitle: "Mentions et confidentialité",
    legalLead: "Ces avis décrivent ce navigateur non officiel. Ils ne remplacent pas le conseil d’un avocat ou du canton compétent.",
    legalSections: [
      ["Pas un site des autorités", "PermitPilot est un projet privé, non rémunéré. Ce n’est pas un site des autorités suisses et il ne parle ni pour le SEM, ni pour la Confédération, ni pour un canton."],
      ["Pas un conseil juridique", "Ce navigateur est une information générale. Il n’est pas un conseil juridique, fiscal ou en migration, ne délivre aucun permis et ne remplace ni le canton compétent ni un conseiller qualifié."],
      ["Sans garantie", "L’orientation est fournie au mieux et peut être incomplète ou périmée. Règles, formulaires, contingents et pratique cantonale peuvent changer. La page Changements indique la dernière revue des règles. Ouvrez la source officielle avant de déposer."],
      ["Vos réponses", "Il n’y a pas de compte. Les réponses du guide restent dans votre navigateur et ne sont pas téléversées vers PermitPilot. Si vous copiez un lien de résultat, les réponses y figurent et sont visibles pour quiconque l’ouvre. GitHub Pages peut enregistrer des données techniques telles que des adresses IP selon la déclaration de confidentialité de GitHub."],
      ["Responsabilité", "Dans la mesure où le droit applicable le permet, les auteurs n’acceptent aucune responsabilité pour les décisions prises en se fondant sur ce site. Les droits auxquels on ne peut renoncer restent inchangés."],
      ["Contact", "Questions et corrections : issues GitHub de ce projet."],
    ],
  },
  it: {
    howTitle: "Un percorso chiaro tra regole federali e pratiche cantonali.",
    howLead: "Solo ciò che cambia il percorso, poi chi deposita cosa e in quale ordine.",
    cards: [["Domande giuridicamente rilevanti", "Le domande riguardano cittadinanza, statuto, modello di lavoro, durata e cantone — non caratteristiche senza effetto sul percorso."], ["Responsabilità separate", "I compiti di richiedente, datore e autorità appaiono nell’ordine giusto."], ["Un risultato verificabile", "Ogni percorso rimanda a SEM, ch.ch, EasyGov e al cantone competente."]],
    common: "Percorsi comuni coperti", coverage: "Dipendenti · fondatori · frontalieri · distacchi · famiglia · studio · diplomati · ricerca di lavoro · permessi esistenti · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Prima le regole federali. Il cantone resta l’autorità che decide.",
    sourceLead: "PermitPilot organizza le indicazioni ufficiali svizzere. Apri la fonte prima di depositare.",
    sources: [
      ["SEM", "Segreteria di Stato della migrazione", "Regole federali su ammissione, permessi e visti.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portale delle autorità svizzere", "Panoramica chiara su vivere e lavorare in Svizzera.", "https://www.ch.ch/"],
      ["EasyGov", "Sportello per le imprese", "Notifiche e domande di permesso del datore di lavoro.", "https://www.easygov.swiss/"],
      ["26 cantoni", "Uffici cantonali della migrazione", "L’autorità competente che tratta la domanda.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Progettato in Francia.\nSviluppato in Svezia.\nPer la Svizzera.",
    aboutBody: "PermitPilot è un lavoro privato, non retribuito, fatto al meglio delle possibilità. Non è un sito delle autorità svizzere e non parla per la SEM, la Confederazione o un cantone. Organizza informazioni ufficiali; non rilascia un permesso né sostituisce il parere del cantone competente.",
    designer: "Progettazione", developer: "Sviluppo", githubLabel: "GitHub", unofficial: "Non ufficiale",
    permitsTitle: "Lettere dei permessi svizzeri",
    permitsLead: "Ogni lettera è lo statuto stampato sul titolo per stranieri. Sono pagine SEM di partenza, non una decisione.",
    contribute: "Il codice è su GitHub. Issue e pull request sono benvenute.",
    githubPrivacyLabel: "Informativa sulla privacy di GitHub",
    legalTitle: "Note legali e privacy",
    legalLead: "Questi avvisi descrivono il navigatore non ufficiale. Non sostituiscono il parere di un avvocato o del cantone competente.",
    legalSections: [
      ["Non è un sito delle autorità", "PermitPilot è un progetto privato, non retribuito. Non è un sito delle autorità svizzere e non parla per la SEM, la Confederazione o un cantone."],
      ["Non è consulenza legale", "Il navigatore è informazione generale. Non è consulenza legale, fiscale o in materia di migrazione, non rilascia un permesso e non sostituisce il cantone competente né un consulente qualificato."],
      ["Senza garanzia", "L’orientamento è al meglio delle possibilità e può essere incompleto o superato. Norme, formulari, contingenti e prassi cantonale possono cambiare. La pagina Modifiche registra l’ultima verifica delle norme. Apri la fonte ufficiale prima di depositare."],
      ["Le tue risposte", "Non c’è un account. Le risposte della guida restano nel browser e non vengono caricate su PermitPilot. Se copi un link del risultato, le risposte sono nel link e visibili a chiunque lo apra. GitHub Pages può registrare dati tecnici come indirizzi IP secondo l’informativa sulla privacy di GitHub."],
      ["Responsabilità", "Nella misura consentita dal diritto applicabile, gli autori non accettano responsabilità per decisioni prese facendo affidamento su questo sito. Restano salvi i diritti a cui non si può rinunciare."],
      ["Contatto", "Domande e correzioni: issue GitHub di questo progetto."],
    ],
  },
  rm: {
    howTitle: "Ina via clera tras reglas federalas e formulars chantunals.",
    howLead: "Mo quai che mida la via, lura tgi depona tge – ed en tge successiun.",
    cards: [["Mo dumondas giuridicamain relevantas", "Las dumondas concernan naziunalitad, status, model da lavur, durada e chantun – betg caracteristicas senza effect sin la via."], ["Cumpetenzas separadas", "Incumbensas da persuna, patrun ed autoritad cumparan en la successiun giusta."], ["Resultat verifitgabel", "Mintga via maina tar SEM, ch.ch, EasyGov ed il chantun cumpetent."]],
    common: "Vias da standard cuvridas", coverage: "Engaschads · fundaturs · pendulars · emessas · famiglia · studi · absolvents · tschertga da lavur · permissiuns existentas · B/C/L/G/F/N/S/Ci",
    sourceTitle: "L’emprim il dretg federal. Il chantun resta l’autoritad decisiva.",
    sourceLead: "PermitPilot ordinescha infurmaziuns uffizialas svizras. Avra la funtauna avant che deponer.",
    sources: [
      ["SEM", "Secretariat da stadi per migraziun", "Reglas federalas davart admissiun, permissiuns e visums.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portal da las autoritads svizras", "Survista chapibla davart viver e lavurar en Svizra.", "https://www.ch.ch/"],
      ["EasyGov", "Punct da contact per interpresas", "Annunzia e dumondas da permissiun dals patruns.", "https://www.easygov.swiss/"],
      ["26 chantuns", "Uffizis chantunals da migraziun", "L’autoritad cumpetenta che elavura la dumonda.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Entaschà en Frantscha.\nSviluppà en Svezia.\nPer la Svizra.",
    aboutBody: "PermitPilot è lavur privata, nunpajaida, tenor meglier savida. El n’è betg ina pagina da las autoritads svizras e na discuorra ni per il SEM, ni per la Confederaziun, ni per in chantun. El ordinescha infurmaziuns uffizialas; el na dat nagina permissiun e na remplazzà betg la infurmaziun dal chantun cumpetent.",
    designer: "Design", developer: "Svilup", githubLabel: "GitHub", unofficial: "Betg uffizial",
    permitsTitle: "Letra da permissiuns svizras",
    permitsLead: "Mintga letra è il status stampà sin la carta per esters. Quai èn paginas da partenza dal SEM, betg ina decisiun.",
    contribute: "Il code da funtauna è sin GitHub. Issues e pull requests èn bainvegnids.",
    githubPrivacyLabel: "Decleraziun da protecziun da datas da GitHub",
    legalTitle: "Legal e protecziun da datas",
    legalLead: "Quests avis describan quest navigatur betg uffizial. Els na remplazzan betg il consel d’in advocat u dal chantun cumpetent.",
    legalSections: [
      ["Betg ina pagina da las autoritads", "PermitPilot è in project privat, nunpajaì. El n’è betg ina pagina da las autoritads svizras e na discuorra ni per il SEM, ni per la Confederaziun, ni per in chantun."],
      ["Betg consel giuridic", "Il navigatur è infurmaziun generala. El n’è betg consel giuridic, fiscal u da migraziun, na dat nagina permissiun e na remplazzà ni il chantun cumpetent ni in consel qualificà."],
      ["Nagina garanzia", "L’orientaziun succeda tenor meglier savida e po esser incumpletta u veglia. Reglas, formulars, contingents e pratica chantunala pon midar. La pagina Midadas registrescha cura che las reglas èn vegnidas verifitgadas l’ultima giada. Avra la funtauna uffiziala avant che deponer."],
      ["Tias respostas", "I na dat nagin conto. Las respostas dal gid restan en tes navigatur e na vegnan betg chargiadas tar PermitPilot. Sche ti copieschias ina colliaziun dal resultat, stattan las respostas en la colliaziun e visiblas per mintgin che l’avra. GitHub Pages po protocollar datas tecnicas sco adressas IP tenor la decleraziun da protecziun da datas da GitHub."],
      ["Responsabladad", "En la mesira che il dretg applicabel permitta, n’acceptan ils auturs nagina responsabladad per decisiuns prendidas en fiducia sin questa pagina. Dretgs che na sa laschan betg desister restan nuntractads."],
      ["Contact", "Dumondas e correcziuns appartegnan a las issues GitHub da quest project."],
    ],
  },
} as const;

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 16 16" focusable="false">
        <path d="M8 1.2c-2.6 0-4.7 2-4.7 4.5 0 3.4 4.7 9.1 4.7 9.1s4.7-5.7 4.7-9.1c0-2.5-2.1-4.5-4.7-4.5z" fill="#fff" />
        <circle cx="8" cy="5.6" r="1.7" fill="currentColor" />
      </svg>
    </span>
  );
}

function LanguageFlag({ code }: { code: Lang }) {
  return (
    <svg className="language-flag" viewBox="0 0 16 12" aria-hidden="true" focusable="false">
      {code === "en" && (
        <>
          <rect width="16" height="12" fill="#012169" />
          <path d="M0 0h16v12H0z" fill="#012169" />
          <path d="M0 0l16 12M16 0L0 12" stroke="#fff" strokeWidth="2.4" />
          <path d="M0 0l16 12M16 0L0 12" stroke="#c8102e" strokeWidth="1.2" />
          <path d="M8 0v12M0 6h16" stroke="#fff" strokeWidth="4" />
          <path d="M8 0v12M0 6h16" stroke="#c8102e" strokeWidth="2.4" />
        </>
      )}
      {code === "de" && (
        <>
          <rect width="16" height="4" y="0" fill="#000" />
          <rect width="16" height="4" y="4" fill="#dd0000" />
          <rect width="16" height="4" y="8" fill="#ffce00" />
        </>
      )}
      {code === "fr" && (
        <>
          <rect width="5.4" height="12" fill="#002395" />
          <rect width="5.2" height="12" x="5.4" fill="#fff" />
          <rect width="5.4" height="12" x="10.6" fill="#ed2939" />
        </>
      )}
      {code === "it" && (
        <>
          <rect width="5.4" height="12" fill="#009246" />
          <rect width="5.2" height="12" x="5.4" fill="#fff" />
          <rect width="5.4" height="12" x="10.6" fill="#ce2b37" />
        </>
      )}
      {code === "rm" && (
        <>
          <rect width="16" height="12" fill="#da291c" />
          <rect x="6.4" y="2.2" width="3.2" height="7.6" fill="#fff" />
          <rect x="3.4" y="4.4" width="9.2" height="3.2" fill="#fff" />
        </>
      )}
    </svg>
  );
}

function useDismissibleMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return { open, setOpen, rootRef };
}

function LanguageSwitch({
  language,
  onChange,
  label,
}: {
  language: Lang;
  onChange: (code: Lang) => void;
  label: string;
}) {
  const { open, setOpen, rootRef } = useDismissibleMenu();
  const listId = useId();
  const current = languages.find((item) => item.code === language) ?? languages[0];

  return (
    <div className={open ? "bar-switch is-open" : "bar-switch"} ref={rootRef}>
      <button
        type="button"
        className="bar-switch-trigger"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <LanguageFlag code={current.code} />
        <span>{current.label}</span>
      </button>
      {open && (
        <ul className="bar-menu" id={listId} role="listbox" aria-label={label}>
          {languages.map((item) => (
            <li key={item.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={language === item.code}
                className={language === item.code ? "active" : ""}
                onClick={() => {
                  onChange(item.code);
                  setOpen(false);
                }}
              >
                <LanguageFlag code={item.code} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg className="theme-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.6v1.6M8 12.8v1.6M1.6 8h1.6M12.8 8h1.6M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M3.3 12.7l1.1-1.1M11.6 4.4l1.1-1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    );
  }
  if (mode === "dark") {
    return (
      <svg className="theme-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M10.2 2.4a6 6 0 1 0 3.4 9.8 5.2 5.2 0 0 1-7.2-7.1 6 6 0 0 0 3.8-2.7z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg className="theme-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 2.8v10.4a5.2 5.2 0 0 0 0-10.4z" fill="currentColor" />
    </svg>
  );
}

function ThemeSwitch({
  mode,
  onChange,
  theme,
  themeAuto,
  themeLight,
  themeDark,
}: {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
  theme: string;
  themeAuto: string;
  themeLight: string;
  themeDark: string;
}) {
  const { open, setOpen, rootRef } = useDismissibleMenu();
  const listId = useId();
  const labels = { auto: themeAuto, light: themeLight, dark: themeDark };

  return (
    <div className={open ? "bar-switch is-open" : "bar-switch"} ref={rootRef}>
      <button
        type="button"
        className="bar-switch-trigger"
        aria-label={theme}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <ThemeIcon mode={mode} />
        <span>{labels[mode]}</span>
      </button>
      {open && (
        <ul className="bar-menu" id={listId} role="listbox" aria-label={theme}>
          {themeModes.map((value) => (
            <li key={value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={mode === value}
                className={mode === value ? "active" : ""}
                onClick={() => {
                  onChange(value);
                  setOpen(false);
                }}
              >
                <ThemeIcon mode={value} />
                <span>{labels[value]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ShareControl({
  copied,
  shareLabel,
  copiedLabel,
  warn,
  confirmLabel,
  onCopy,
}: {
  copied: boolean;
  shareLabel: string;
  copiedLabel: string;
  warn: string;
  confirmLabel: string;
  onCopy: () => Promise<void>;
}) {
  const { open, setOpen, rootRef } = useDismissibleMenu();
  const dialogId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) confirmRef.current?.focus();
  }, [open]);

  return (
    <div className="share-switch" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-live="polite"
        onClick={() => setOpen((value) => !value)}
      >
        <i className={copied ? "action-icon check-icon" : "action-icon link-icon"} aria-hidden="true" />
        {copied ? copiedLabel : shareLabel}
      </button>
      {open && (
        <div className="share-popover no-print" id={dialogId} role="dialog" aria-label={shareLabel}>
          <p>{warn}</p>
          <button
            type="button"
            ref={confirmRef}
            onClick={() => {
              void onCopy().then(() => setOpen(false));
            }}
          >
            {confirmLabel}
          </button>
        </div>
      )}
    </div>
  );
}

function Brand({ onClick, homeLabel }: { onClick?: () => void; homeLabel?: string }) {
  const content = <><BrandMark /><span className="brand-copy"><strong>Permit Pilot</strong></span></>;
  return onClick
    ? <button type="button" className="brand" onClick={onClick} aria-label={homeLabel ? `PermitPilot · ${homeLabel}` : "PermitPilot"}>{content}</button>
    : <div className="brand">{content}</div>;
}

function NewTabHint({ label }: { label: string }) {
  return <span className="visually-hidden"> ({label})</span>;
}

function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  opensNewTab,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  opensNewTab: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={ariaLabel}>
      {children}
      {!ariaLabel && <NewTabHint label={opensNewTab} />}
    </a>
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

export default function Home() {
  const [language, setLanguage] = useState<Lang>(() => (
    typeof window === "undefined" ? "en" : readLang()
  ));
  const [screen, setScreen] = useState<Screen>(() => {
    if (typeof window === "undefined") return "home";
    if (window.location.hash === "#history") return "history";
    if (window.location.hash === "#legal") return "legal";
    if (window.location.hash === "#permits") return "permits";
    return "home";
  });
  const [historyFilter, setHistoryFilter] = useState<"all" | HistoryKind>("all");
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [wizardDir, setWizardDir] = useState<"forward" | "back">("forward");
  const [pinnedKey, setPinnedKey] = useState<RouteKey | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => (
    typeof window === "undefined" ? "auto" : readThemeMode()
  ));
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isFirstRender = useRef(true);
  const t = ui[language];
  const x = extras[language];
  const h = historyUi[language];
  const steps = useMemo(() => buildSteps(answers, language), [answers, language]);
  const safeIndex = Math.min(stepIndex, Math.max(steps.length - 1, 0));
  const current = steps[safeIndex];
  const result = useMemo(
    () => getResult(answers, language),
    [answers, language],
  );
  const routeMismatch = pinnedKey !== null && pinnedKey !== result.key;
  const visibleHistory = historyFilter === "all"
    ? historyEntries
    : historyEntries.filter((entry) => entry.kind === historyFilter);

  useEffect(() => {
    let generation = 0;
    const applyHash = () => {
      const currentGeneration = ++generation;
      const hash = window.location.hash;
      if (hash === "#history") {
        setScreen("history");
        return;
      }
      if (hash === "#legal") {
        setScreen("legal");
        return;
      }
      if (hash === "#permits") {
        setScreen("permits");
        return;
      }
      if (isShareHash(hash)) {
        void decodeShareHash(hash).then((decoded) => {
          if (currentGeneration !== generation) return;
          if (!decoded) {
            setPinnedKey(null);
            setScreen("home");
            window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
            return;
          }
          setLanguage(decoded.lang);
          setAnswers(decoded.answers);
          setPinnedKey(decoded.key);
          setShareUrl(window.location.href);
          setLinkCopied(false);
          setScreen("result");
        });
        return;
      }
      setScreen((previous) => (previous === "history" || previous === "legal" || previous === "permits" ? "home" : previous));
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => {
      generation = -1;
      window.removeEventListener("hashchange", applyHash);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    applyTheme(themeMode);
    if (themeMode !== "auto") return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("auto");
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [themeMode]);

  useEffect(() => {
    const title = screen === "wizard" && current
      ? `${current.title} · PermitPilot`
      : screen === "result"
        ? `${result.title} · PermitPilot`
        : screen === "history"
          ? `${h.title} · PermitPilot`
          : screen === "legal"
            ? `${x.legalTitle} · PermitPilot`
            : screen === "permits"
              ? `${x.permitsTitle} · PermitPilot`
              : "PermitPilot";
    document.title = title;
  }, [screen, current, result.title, h.title, x.legalTitle, x.permitsTitle]);

  useEffect(() => {
    const root = document.documentElement;
    const onPointerDown = () => root.classList.add("using-pointer");
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") root.classList.remove("using-pointer");
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const first = isFirstRender.current;
    isFirstRender.current = false;
    if (first && screen === "home") return;
    if (screen === "home") return;
    headingRef.current?.focus();
  }, [screen, safeIndex]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const clearHash = () => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  const leaveResult = () => {
    setPinnedKey(null);
    setLinkCopied(false);
    setShareUrl(null);
    clearHash();
  };

  const goHome = () => {
    leaveResult();
    setMenuOpen(false);
    setScreen("home");
    scrollToTop();
    window.setTimeout(() => headingRef.current?.focus(), 0);
  };

  const goHistory = () => {
    setMenuOpen(false);
    setScreen("history");
    if (window.location.hash !== "#history") window.location.hash = "history";
    scrollToTop();
  };

  const goLegal = () => {
    leaveResult();
    setMenuOpen(false);
    setScreen("legal");
    if (window.location.hash !== "#legal") window.location.hash = "legal";
    scrollToTop();
  };

  const goPermits = () => {
    leaveResult();
    setMenuOpen(false);
    setScreen("permits");
    if (window.location.hash !== "#permits") window.location.hash = "permits";
    scrollToTop();
  };

  const startWizard = (audience?: "person" | "employer") => {
    leaveResult();
    setMenuOpen(false);
    setAnswers(audience ? { audience } : {});
    setWizardDir("forward");
    setStepIndex(audience ? 1 : 0);
    setScreen("wizard");
    scrollToTop();
  };

  const setAnswer = (value: string) => {
    if (!current) return;
    const rank = stepOrder.indexOf(current.id);
    setAnswers((previous) => {
      const next: Answers = {};
      for (const [key, answer] of Object.entries(previous)) {
        const keyRank = stepOrder.indexOf(key as (typeof stepOrder)[number]);
        if (keyRank >= 0 && keyRank <= rank) next[key] = answer;
      }
      next[current.id] = value;
      return next;
    });
  };

  const nextStep = () => {
    if (!current || !answers[current.id]) return;
    if (safeIndex >= steps.length - 1) {
      const next = getResult(answers, language);
      const hash = encodeShareHash({ key: next.key, lang: language, answers });
      const path = `${window.location.pathname}${window.location.search}${hash}`;
      window.history.replaceState(null, "", path);
      setPinnedKey(next.key);
      setLinkCopied(false);
      setShareUrl(`${window.location.origin}${path}`);
      setScreen("result");
      scrollToTop();
      return;
    }
    setWizardDir("forward");
    setStepIndex(safeIndex + 1);
    scrollToTop();
  };

  const previousStep = () => {
    if (safeIndex === 0) return goHome();
    setWizardDir("back");
    setStepIndex(safeIndex - 1);
  };

  const navigateHomeSection = (id: string) => {
    leaveResult();
    setMenuOpen(false);
    setScreen("home");
    window.setTimeout(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      const heading = target?.querySelector("h2");
      if (heading instanceof HTMLElement) {
        heading.classList.add("focus-target");
        heading.tabIndex = -1;
        heading.focus();
      }
    }, 40);
  };

  const jumpToQuestion = (id: (typeof stepOrder)[number]) => {
    leaveResult();
    setMenuOpen(false);
    const index = buildSteps(answers, language).findIndex((step) => step.id === id);
    const nextIndex = index >= 0 ? index : 0;
    setWizardDir(nextIndex < safeIndex ? "back" : "forward");
    setStepIndex(nextIndex);
    setScreen("wizard");
    scrollToTop();
  };

  const changeAnswers = () => {
    jumpToQuestion(steps[Math.max(steps.length - 1, 0)]?.id ?? "audience");
  };

  const copyShareLink = async () => {
    try {
      const url = shareUrl ?? window.location.href;
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  };

  const actorLabel = t[result.actor];
  const pathAnswers = stepOrder.filter((key) => answers[key]).map((key) => ({
    key,
    label: getAnswerLabel(key, answers[key], language),
  }));

  const navItems = (
    <>
      <button type="button" onClick={() => navigateHomeSection("how")}>{t.how}</button>
      <button type="button" onClick={() => navigateHomeSection("sources")}>{t.sources}</button>
      <button type="button" onClick={goPermits}>{t.permits}</button>
      <button type="button" onClick={goHistory}>{t.history}</button>
      <button type="button" onClick={() => navigateHomeSection("about")}>{t.about}</button>
    </>
  );

  return (
    <div className="site-shell">
      <a
        href="#main"
        className="skip-link no-print"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        {t.skipToContent}
      </a>
      <header className="topbar no-print">
        <Brand onClick={goHome} homeLabel={t.home} />
        <nav id="primary-nav" className={menuOpen ? "desktop-nav is-open" : "desktop-nav"} aria-label={t.primaryNav}>
          {navItems}
        </nav>
        <div className="topbar-end">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {t.menu}
          </button>
          <LanguageSwitch
            language={language}
            onChange={(code) => {
              persistLang(code);
              setLanguage(code);
            }}
            label={t.language}
          />
          <ThemeSwitch
            mode={themeMode}
            onChange={setThemeMode}
            theme={t.theme}
            themeAuto={t.themeAuto}
            themeLight={t.themeLight}
            themeDark={t.themeDark}
          />
        </div>
      </header>

      <main id="main" tabIndex={-1}>

      {screen === "home" && (
        <>
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1 ref={headingRef} tabIndex={-1} className="page-heading">{t.titleA}<br /><em>{t.titleB}</em></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => startWizard()}>{t.start}<span aria-hidden="true">→</span></button>
                <button type="button" className="secondary-button" onClick={() => startWizard("employer")}>{t.employerStart}<span aria-hidden="true">→</span></button>
              </div>
              <div className="microcopy">
                <span><i className="clock-icon" aria-hidden="true" />{t.time}</span>
                <span><i className="lock-icon" aria-hidden="true" />{t.privacy}</span>
                <button type="button" className="verified-pill" onClick={goHistory}><span aria-hidden="true" />{t.verified}</button>
              </div>
              <p className="hero-guard">{t.notAdvice} · {t.notLegalAdvice}</p>
            </div>
            <aside className="route-card" aria-label={t.routeTitle}>
              <div className="route-card-head">
                <div><span className="mini-label">{t.routeLabel}</span><h2>{t.routeTitle}</h2></div>
                <div className="permit-stack" aria-hidden="true"><span>L</span><span>B</span><span>G</span></div>
              </div>
              <div className="route-list">
                {t.layers.map(([title, detail], index) => (
                  <div className="route-row" key={title}>
                    <span className="route-number">0{index + 1}</span>
                    <span className="route-track"><span className="route-dot" /></span>
                    <div><strong>{title}</strong><small>{detail}</small></div>
                  </div>
                ))}
              </div>
              <div className="route-footer"><span className="source-seal"><BrandMark /></span><div><strong>{t.official}</strong><small>{t.notAdvice}</small></div></div>
            </aside>
          </section>

          <section className="home-band how-band" id="how">
            <div className="home-band-inner">
              <div className="section-intro">
                <p className="eyebrow">{t.how}</p>
                <h2>{x.howTitle}</h2>
                <p>{x.howLead}</p>
              </div>
              <div className="method-grid">
                {x.cards.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
              </div>
              <div className="coverage"><strong>{x.common}</strong><span>{x.coverage}</span></div>
            </div>
          </section>

          <section className="home-band sources-band" id="sources">
            <div className="home-band-inner">
              <div className="section-intro">
                <p className="eyebrow">{t.sources}</p>
                <h2>{x.sourceTitle}</h2>
                <p>{x.sourceLead}</p>
              </div>
              <div className="source-grid">
                {x.sources.map(([name, role, detail, url]) => (
                  <ExternalLink className="source-tile" href={url} key={name} opensNewTab={t.opensNewTab}>
                    <strong>{name}</strong>
                    <span>{role}</span>
                    <p>{detail}</p>
                    <i aria-hidden="true">↗</i>
                  </ExternalLink>
                ))}
              </div>
            </div>
          </section>

          <section className="home-band about-band" id="about">
            <div className="home-band-inner about-inner">
              <div className="section-intro">
                <p className="eyebrow">{t.about}</p>
                <h2>{x.aboutTitle}</h2>
                <p>{x.aboutBody}</p>
                <ul className="about-people">
                  {credits.people.map((person) => (
                    <li key={person.name}>
                      <ExternalLink href={person.href} ariaLabel={`${person.name} · LinkedIn (${t.opensNewTab})`} opensNewTab={t.opensNewTab}>
                        {person.name}<i aria-hidden="true">↗</i>
                      </ExternalLink>
                      <span>{x[person.role]}</span>
                    </li>
                  ))}
                </ul>
                <p className="about-contribute">
                  {x.contribute}{" "}
                  <ExternalLink href={credits.github} opensNewTab={t.opensNewTab}>{x.githubLabel}<i aria-hidden="true">↗</i></ExternalLink>
                </p>
              </div>
              <div className="about-meta">
                <p>{t.noData}</p>
                <p>{t.notAdvice}</p>
                <button type="button" className="secondary-button" onClick={() => startWizard()}>{t.start}<span aria-hidden="true">→</span></button>
              </div>
            </div>
          </section>
        </>
      )}

      {screen === "wizard" && current && (
        <section className="wizard-shell">
          <div className="wizard-progress" aria-hidden="true"><span style={{ width: `${((safeIndex + 1) / steps.length) * 100}%` }} /></div>
          <div className="wizard-meta"><button type="button" onClick={previousStep}><span aria-hidden="true">← </span>{t.back}</button><span>{t.step} {safeIndex + 1} {t.of} {steps.length}</span></div>
          <div key={current.id} className={`wizard-card wizard-enter-${wizardDir}`}>
            <p className="eyebrow">PermitPilot</p>
            <h1 ref={headingRef} tabIndex={-1} className="page-heading" id="wizard-question">{current.title}</h1>
            <p>{current.hint}</p>
            {current.id === "permit" && (
              <p className="permit-sources">
                <span>{t.officialPages}</span>
                {permitOfficialLinks(language, answers).map((link) => (
                  <ExternalLink href={link.url} key={link.value} opensNewTab={t.opensNewTab}>{link.label}<i aria-hidden="true">↗</i></ExternalLink>
                ))}
              </p>
            )}

            {current.kind === "canton" ? (
              <div className="select-wrap">
                <label htmlFor="canton-select">{t.selectCanton}</label>
                <select id="canton-select" value={answers.canton ?? ""} onChange={(event) => setAnswer(event.target.value)}>
                  <option value="" disabled>{t.select}</option>
                  {cantons.map(([code, name]) => <option value={code} key={code}>{code} · {name}</option>)}
                </select>
                <span className="select-arrow" aria-hidden="true">↓</span>
              </div>
            ) : (
              <fieldset className={`choice-list ${current.options && current.options.length > 6 ? "choice-list-compact" : ""}`}>
                <legend className="visually-hidden">{current.title}</legend>
                {current.options?.map((option) => (
                  <label key={option.value} className={answers[current.id] === option.value ? "choice selected" : "choice"} htmlFor={`${current.id}-${option.value}`}>
                    <input
                      id={`${current.id}-${option.value}`}
                      type="radio"
                      name={current.id}
                      value={option.value}
                      checked={answers[current.id] === option.value}
                      onChange={() => setAnswer(option.value)}
                    />
                    <span className="choice-radio" aria-hidden="true" />
                    <span className="choice-copy">
                      {option.label}
                      <small>{option.detail}</small>
                    </span>
                  </label>
                ))}
              </fieldset>
            )}

            <div className="wizard-actions">
              <button type="button" className="primary-button wizard-next" disabled={!answers[current.id]} onClick={nextStep}>
                {safeIndex === steps.length - 1 ? t.result : t.next}<span aria-hidden="true">→</span>
              </button>
              <small><i className="lock-icon" aria-hidden="true" />{t.noData}</small>
            </div>
          </div>
        </section>
      )}

      {screen === "result" && (
        <section className="result-shell">
          <header className="print-masthead print-only">
            <Brand />
            <div className="print-masthead-meta">
              <strong>{x.unofficial}</strong>
              <small>{t.resultEyebrow}</small>
              <small>{t.reviewed}</small>
              <small>{t.notLegalAdvice}</small>
            </div>
          </header>
          <div className="result-hero">
            <div className="result-title-block">
              <div className="result-toolbar">
                <div className="result-kicker"><span className="result-status-dot" />{t.resultEyebrow}</div>
                <div className="result-actions no-print">
                  <ShareControl
                    copied={linkCopied}
                    shareLabel={t.share}
                    copiedLabel={t.copied}
                    warn={t.shareWarn}
                    confirmLabel={t.shareConfirm}
                    onCopy={copyShareLink}
                  />
                  <button type="button" onClick={() => window.print()}>
                    <i className="action-icon print-icon" aria-hidden="true" />
                    {t.print}
                  </button>
                  <button type="button" onClick={changeAnswers}>
                    <i className="action-icon change-icon" aria-hidden="true" />
                    {t.change}
                  </button>
                </div>
              </div>
              <div className="result-badge">{result.badge}</div>
              <h1 ref={headingRef} tabIndex={-1} className="page-heading">{result.title}</h1>
              <p>{result.summary}</p>
              <nav className="result-path" aria-label={t.path}>
                <ol>
                  {pathAnswers.map((item) => (
                    <li key={item.key}>
                      <button type="button" onClick={() => jumpToQuestion(item.key)}>{item.label}</button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <aside className="result-notes">
              <div className="confidence-card">
                <span>i</span><div><strong>{t.confidence}</strong><small>{t.resultIntro}</small></div>
              </div>
              <section className="disclaimer-card">
                <span>i</span><div><strong>{t.disclaimerTitle}</strong><p>{t.disclaimer}</p></div>
              </section>
            </aside>
          </div>

          <div className="result-layout">
            <div className="result-main">
              {(routeMismatch || result.warning || result.visaNote || result.familyNote || result.quotaNote || result.recognitionNote) && (
                <div className="layer-stack">
                  {routeMismatch && <div className="layer-alert warning"><span>!</span><div><strong>{t.mismatchTitle}</strong><p>{t.mismatchBody}</p></div></div>}
                  {result.warning && <div className="layer-alert warning"><span>!</span><div><strong>{t.why}</strong><p>{result.warning}</p></div></div>}
                  {result.visaNote && <div className="layer-alert"><span>V</span><div><strong>{t.visaLayer}</strong><p>{result.visaNote}</p></div></div>}
                  {result.familyNote && <div className="layer-alert family"><span>+</span><div><strong>{t.familyLayer}</strong><p>{result.familyNote}</p></div></div>}
                  {result.quotaNote && <div className="layer-alert"><span>Q</span><div><strong>{t.quotaLayer}</strong><p>{result.quotaNote}</p></div></div>}
                  {result.recognitionNote && <div className="layer-alert"><span>R</span><div><strong>{t.recognitionLayer}</strong><p>{result.recognitionNote}</p></div></div>}
                </div>
              )}

              <section className="result-section action-plan">
                <div className="section-heading">
                  <h2>{t.responsibilities}</h2>
                  <p><span className={`actor-tag actor-${result.actor}`}>{actorLabel}</span></p>
                </div>
                <div className="timeline">
                  {result.actions.map((action, index) => (
                    <div className="timeline-item" key={`${action.text}-${index}`}>
                      <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <div className="timeline-copy">
                          {action.actor !== result.actor && (
                            <span className={`actor-tag actor-${action.actor}`}>{t[action.actor]}</span>
                          )}
                          <p>{action.text}</p>
                        </div>
                        {action.when && <small>{action.when}</small>}
                        {index === 0 && <small>{t.actionCaveat}</small>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="result-section">
                <div className="section-heading">
                  <h2>{t.paperwork}</h2>
                  <p>{t.official}</p>
                </div>
                <ul className="doc-checklist">
                  {result.docs.map((doc) => (
                    <li key={doc.label}>
                      <span className="doc-check" aria-hidden="true" />
                      {doc.url
                        ? <ExternalLink href={doc.url} opensNewTab={t.opensNewTab}>{doc.label}<i aria-hidden="true">↗</i></ExternalLink>
                        : <p>{doc.label}</p>}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="result-sidebar">
              {result.canton && (
                <section className="canton-card">
                  <span className="mini-label">{t.cantonOffice}</span>
                  <h3>
                    {result.canton.name}
                    <span className="canton-code">{result.canton.code}</span>
                  </h3>
                  <p>{t.sourceMethod}</p>
                  <ExternalLink href={result.canton.url} opensNewTab={t.opensNewTab}>{t.open}<span aria-hidden="true">↗</span></ExternalLink>
                </section>
              )}

              <section className="source-card">
                <span className="mini-label">{t.officialLinks}</span>
                <div className="source-links">
                  {result.sourceLinks.map(({ label, url }) => (
                    <ExternalLink href={url} key={url} opensNewTab={t.opensNewTab}>
                      <span className="source-dot" aria-hidden="true" />{label}<i aria-hidden="true">↗</i>
                    </ExternalLink>
                  ))}
                </div>
                <small>{t.reviewed}</small>
              </section>
            </aside>
          </div>

          <div className="result-footer-action no-print"><button type="button" className="primary-button" onClick={() => startWizard()}>{t.restart}<span aria-hidden="true">→</span></button></div>
        </section>
      )}

      {screen === "history" && (
        <section className="history-shell">
          <div className="section-intro">
            <p className="eyebrow">{t.history}</p>
            <h1 ref={headingRef} tabIndex={-1} className="page-heading">{h.title}</h1>
            <p>{h.lead}</p>
          </div>
          <div className="history-filters" role="group" aria-label={t.history}>
            {(["all", "rules", "product"] as const).map((filter) => (
              <button
                type="button"
                key={filter}
                aria-pressed={historyFilter === filter}
                className={historyFilter === filter ? "active" : ""}
                onClick={() => setHistoryFilter(filter)}
              >
                {h[filter]}
              </button>
            ))}
          </div>
          <ol className="history-list">
            {visibleHistory.map((entry) => (
              <li className="history-item" key={`${entry.date}-${entry.kind}-${entry.title.en}`}>
                <div className="history-meta">
                  <time dateTime={entry.date}>{formatHistoryDate(entry.date, language)}</time>
                  <span className={`history-kind history-kind-${entry.kind}`}>{h[entry.kind]}</span>
                </div>
                <h2>{entry.title[language]}</h2>
                <p>{entry.body[language]}</p>
                {entry.source && (
                  <ExternalLink href={entry.source.url} opensNewTab={t.opensNewTab}>{h.source} · {entry.source.label}<span aria-hidden="true">↗</span></ExternalLink>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {screen === "permits" && (
        <section className="legal-shell">
          <div className="section-intro">
            <p className="eyebrow">{t.permits}</p>
            <h1 ref={headingRef} tabIndex={-1} className="page-heading">{x.permitsTitle}</h1>
            <p>{x.permitsLead}</p>
          </div>
          <ol className="permit-index">
            {permitOfficialLinks(language).map((link) => (
              <li key={link.value}>
                <span className="permit-letter">{link.value === "refugeeB" ? "B" : link.value === "otherPermit" ? "·" : link.value}</span>
                <ExternalLink href={link.url} opensNewTab={t.opensNewTab}>{link.label}<i aria-hidden="true">↗</i></ExternalLink>
              </li>
            ))}
          </ol>
        </section>
      )}

      {screen === "legal" && (
        <section className="legal-shell">
          <div className="section-intro">
            <p className="eyebrow">{t.legal}</p>
            <h1 ref={headingRef} tabIndex={-1} className="page-heading">{x.legalTitle}</h1>
            <p>{x.legalLead}</p>
          </div>
          {x.legalSections.map(([title, detail]) => (
            <section className="legal-block" key={title}>
              <h2>{title}</h2>
              <p>{detail}</p>
            </section>
          ))}
          <p className="legal-block">
            <ExternalLink href={credits.githubPrivacy} opensNewTab={t.opensNewTab}>{x.githubPrivacyLabel}<i aria-hidden="true"> ↗</i></ExternalLink>
            {" · "}
            <ExternalLink href={credits.github} opensNewTab={t.opensNewTab}>{x.githubLabel}<i aria-hidden="true"> ↗</i></ExternalLink>
          </p>
        </section>
      )}

      </main>

      <footer className="no-print">
        <Brand onClick={goHome} homeLabel={t.home} />
        <div className="footer-meta">
          <span>{x.unofficial}</span>
          <button type="button" onClick={goLegal}>{t.legal}</button>
          <ExternalLink href={credits.github} opensNewTab={t.opensNewTab}>{x.githubLabel}</ExternalLink>
          <span>© 2026</span>
          <span className="footer-affil">{t.notAffiliated}</span>
        </div>
      </footer>
    </div>
  );
}
