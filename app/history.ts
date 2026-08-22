import type { Lang } from "./permit-engine";

export type HistoryKind = "rules" | "product";

export type HistoryEntry = {
  date: string;
  kind: HistoryKind;
  source?: { label: string; url: string };
  title: Record<Lang, string>;
  body: Record<Lang, string>;
};

export const historyEntries: HistoryEntry[] = [
  {
    date: "2026-08-22",
    kind: "product",
    title: {
      en: "Clearer study, existing-permit and family routes, plus a dated action plan",
      de: "Klarere Wege für Studium, bestehende Bewilligungen und Familie, plus datierter Aktionsplan",
      fr: "Parcours plus clairs pour études, permis existants et famille, plus un plan d’action daté",
      it: "Percorsi più chiari per studio, permessi esistenti e famiglia, più un piano d’azione datato",
      rm: "Vias pli cleras per studi, permissiuns existentas e famiglia, plus in plan d’acziun datà",
    },
    body: {
      en: "The wizard now asks whether you are studying, a Swiss graduate or job-seeking; what is changing on an existing B, L or G permit; and whether a second Swiss or EU/EFTA citizenship applies. Results split those cases, add EU non-gainful residence, and spell out family work rights. Each action step names who files it and, where official guidance gives a deadline, when. SEM starting pages open in German, French or Italian when you use those languages. There is a Permit letters index, and the site remembers your language on the next visit.",
      de: "Der Assistent fragt jetzt, ob du studierst, einen Schweizer Hochschulabschluss hast oder Arbeit suchst; was sich an einer bestehenden B-, L- oder G-Bewilligung ändert; und ob eine zweite Schweizer oder EU/EFTA-Staatsangehörigkeit gilt. Die Ergebnisse trennen diese Fälle, ergänzen den EU-Aufenthalt ohne Erwerbstätigkeit und nennen die Arbeitsrechte der Familie. Jeder Schritt sagt, wer ihn einreicht, und — wo die offizielle Orientierung eine Frist nennt — wann. SEM-Startseiten öffnen auf Deutsch, Französisch oder Italienisch, wenn du diese Sprachen nutzt. Es gibt ein Verzeichnis der Bewilligungsbuchstaben, und die Seite merkt sich deine Sprache beim nächsten Besuch.",
      fr: "L’assistant demande désormais si vous étudiez, si vous êtes diplômé d’une haute école suisse ou en recherche d’emploi ; ce qui change sur un permis B, L ou G existant ; et s’il existe une seconde citoyenneté suisse ou UE/AELE. Les résultats séparent ces cas, ajoutent le séjour UE sans activité lucrative et précisent l’accès au travail des proches. Chaque étape indique qui dépose et, lorsque l’orientation officielle donne un délai, quand. Les pages de départ du SEM s’ouvrent en allemand, français ou italien selon la langue choisie. Un index des lettres de permis est disponible, et le site retient votre langue à la visite suivante.",
      it: "La guida chiede ora se studi, se hai un diploma di un’alta scuola svizzera o se cerchi lavoro; che cosa cambia su un permesso B, L o G esistente; e se vale una seconda cittadinanza svizzera o UE/AELS. I risultati separano questi casi, aggiungono il soggiorno UE senza attività lucrativa e precisano l’accesso al lavoro dei familiari. Ogni passo indica chi deposita e, se l’orientamento ufficiale dà un termine, quando. Le pagine SEM di partenza si aprono in tedesco, francese o italiano se usi quelle lingue. C’è un indice delle lettere di permesso e il sito ricorda la lingua alla visita successiva.",
      rm: "Il gid dumonda ussa sche ti studioschas, has ina conclusiun d’ina scola auta svizra u tschertgas lavur; tge che mida tar ina permissiun B, L u G existenta; e sche ina segunda burgaisia svizra u UE/AELE vala. Ils resultats separan quests cas, cumplettan la dimora UE senza activitad lucrativa e numnan ils dretgs da lavur da la famiglia. Mintga pass di tgi depona ed — nua che l’orientaziun uffiziala dat in termin — cura. Las paginas da partenza dal SEM s’avran en tudestg, franzos u talian sche ti dovras quellas linguas. I dat in register da las letras da permissiun, e la pagina sa regorda tia lingua tar la proxima visita.",
    },
  },
  {
    date: "2026-08-22",
    kind: "rules",
    source: {
      label: "SEM",
      url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/faq.html",
    },
    title: {
      en: "Study, job-change and settlement routes aligned with SEM working guidance",
      de: "Studien-, Stellenwechsel- und Niederlassungswege an SEM-Arbeitsregeln angeglichen",
      fr: "Parcours d’études, de changement d’emploi et d’établissement alignés sur le SEM",
      it: "Percorsi di studio, cambio posto e domicilio allineati alle indicazioni SEM",
      rm: "Vias da studi, midament da plazza e colonisaziun allineadas tar las indicaziuns SEM",
    },
    body: {
      en: "Student side jobs, Swiss-graduate search stays and EU/EFTA job-seeking are now separate routes, with the old combined study result kept only for older links. Changing employer on a third-country L permit stays limited to the same sector and profession; a B holder can usually change job unless the card carries a condition. Settlement permit C is explained as a 5- or 10-year check, not a promise. UK work results show the 2026 UK quota (2,100 B / 1,400 L), third-country labour results show 4,500 B / 4,000 L, and long posted services note the separate 120-day EU/EFTA service quota. A G permit is not offered if the home is outside a neighbouring border zone. Dual Swiss or EU/EFTA citizenship switches the admission system. Family work rights follow the sponsor. The canton remains the deciding authority.",
      de: "Nebenjobs im Studium, Jobsuche nach Schweizer Hochschulabschluss und EU/EFTA-Jobsuche sind jetzt getrennte Wege; das frühere Sammelergebnis gilt nur noch für ältere Links. Ein Stellenwechsel mit Drittstaat-L bleibt auf dieselbe Branche und denselben Beruf beschränkt; mit B ist ein Wechsel in der Regel ohne neue Bewilligung möglich, ausser die Karte trägt eine Auflage. Die Niederlassungsbewilligung C wird als 5- oder 10-Jahres-Prüfung erklärt, nicht als Zusage. UK-Arbeitswege zeigen das UK-Kontingent 2026 (2’100 B / 1’400 L), Drittstaat-Arbeitswege 4’500 B / 4’000 L, und lange Entsendungen den Hinweis auf das 120-Tage-Dienstleistungskontingent. G entfällt, wenn der Wohnsitz ausserhalb der Nachbar-Grenzzone liegt. Eine zweite Schweizer oder EU/EFTA-Staatsangehörigkeit wechselt das Zulassungssystem. Die Arbeitsrechte der Familie folgen dem Sponsor. Der Kanton bleibt die entscheidende Behörde.",
      fr: "L’activité accessoire des étudiants, la recherche d’emploi après un diplôme suisse et la recherche d’emploi UE/AELE sont désormais des parcours distincts ; l’ancien résultat unique ne sert que les anciens liens. Un changement d’employeur avec un L d’État tiers reste limité au même secteur et à la même profession ; un titulaire B peut en principe changer d’emploi, sauf si la carte porte une condition. Le permis C est présenté comme un contrôle à 5 ou 10 ans, pas une promesse. Les résultats UK affichent le contingent 2026 (2 100 B / 1 400 L), ceux des États tiers 4 500 B / 4 000 L, et les longues prestations le contingent distinct au-delà de 120 jours. Le G n’est pas proposé si le domicile est hors zone frontière voisine. Une seconde citoyenneté suisse ou UE/AELE change le régime d’admission. L’accès au travail des proches suit le sponsor. Le canton reste l’autorité décisionnaire.",
      it: "Il lavoro accessorio degli studenti, la ricerca dopo un diploma svizzero e la ricerca di lavoro UE/AELS sono ora percorsi distinti; il vecchio risultato unico resta solo per i link precedenti. Un cambio di datore con L di Stato terzo resta limitato allo stesso settore e professione; un titolare B può di regola cambiare posto, salvo condizione sulla carta. Il permesso C è spiegato come verifica a 5 o 10 anni, non come promessa. I risultati UK mostrano il contingente 2026 (2’100 B / 1’400 L), quelli di Stati terzi 4’500 B / 4’000 L, e i lunghi distacchi il contingente distinto oltre 120 giorni. Il G non è proposto se il domicilio è fuori dalla zona di frontiera vicina. Una seconda cittadinanza svizzera o UE/AELS cambia il regime di ammissione. L’accesso al lavoro dei familiari segue il sostenitore. Il cantone resta l’autorità che decide.",
      rm: "Lavurs accessoras da students, tschertga suenter ina conclusiun svizra e tschertga da lavur UE/AELE èn ussa vias separadas; il vegl resultat commün vala mo per colliaziuns veglias. In midament da patrun cun L da stadis terzs resta limità a la medema branscha e professiun; cun B po ins per ordinari midar plazza, nun che la carta portia ina cundiziun. La permissiun C vegn spiegada sco examen da 5 u 10 onns, betg sco promessa. Resultats UK mussan il contingent 2026 (2’100 B / 1’400 L), quels da stadis terzs 4’500 B / 4’000 L, ed emessas lungas l’avis dal contingent separat sur 120 dis. G na vegn betg purschì sche la dimora è ordaifer la zona da cunfin vischina. Ina segunda burgaisia svizra u UE/AELE mida il sistem d’admissiun. Ils dretgs da lavur da la famiglia suondan il sponsur. Il chantun resta l’autoritad decisiva.",
    },
  },
  {
    date: "2026-08-22",
    kind: "product",
    title: {
      en: "Languages, shareable results, legal notices, and dark mode",
      de: "Sprachen, teilbare Ergebnisse, rechtliche Hinweise und dunkler Modus",
      fr: "Langues, résultats partageables, mentions légales et mode sombre",
      it: "Lingue, risultati condivisibili, note legali e tema scuro",
      rm: "Linguas, resultats per parter, avis legal e modus stgir",
    },
    body: {
      en: "The navigator now uses Switzerland’s official languages plus English: German, French, Italian, Romansh and English. Spanish is no longer offered. You can copy a result link and send it; the link contains the answers, follows today’s route, and warns before copying. Where an official English SEM or admin.ch page exists, paperwork and permit letters open that page. There is a Legal page with privacy and liability notices; the site mark is not a Swiss cross; printouts say unofficial. Julie Thomas and Uwe Dauernheim are named on About, and the source is on GitHub. You can skip to the main content, use How it works, Official sources, Changes and About on a phone, and choose appearance next to the language menu: Auto follows your device, or lock Light or Dark.",
      de: "Der Navigator nutzt jetzt die Amtssprachen der Schweiz plus Englisch: Deutsch, Französisch, Italienisch, Rätoromanisch und Englisch. Spanisch wird nicht mehr angeboten. Du kannst einen Ergebnis-Link kopieren und weitergeben; der Link enthält die Antworten, folgt dem heutigen Weg und warnt vor dem Kopieren. Wo eine offizielle englische Seite von SEM oder admin.ch existiert, öffnen Unterlagen und Bewilligungsbuchstaben diese Seite. Es gibt eine Seite Rechtliches zu Datenschutz und Haftung; das Seitenzeichen ist kein Schweizerkreuz; Ausdrucke kennzeichnen die Seite als inoffiziell. Julie Thomas und Uwe Dauernheim stehen auf Über uns, der Quellcode liegt auf GitHub. Du kannst zum Inhalt springen, So funktioniert’s, Offizielle Quellen, Änderungen und Über uns auf dem Handy nutzen und neben der Sprachwahl die Darstellung wählen: Auto folgt dem Gerät, oder du legst Hell oder Dunkel fest.",
      fr: "Le navigateur utilise désormais les langues officielles de la Suisse plus l’anglais : allemand, français, italien, romanche et anglais. L’espagnol n’est plus proposé. Vous pouvez copier un lien de résultat et l’envoyer ; le lien contient les réponses, suit le parcours d’aujourd’hui et avertit avant la copie. Lorsqu’une page officielle anglaise du SEM ou d’admin.ch existe, les documents et les lettres de permis l’ouvrent. Une page Mentions décrit confidentialité et responsabilité ; le sigle n’est plus une croix suisse ; les impressions indiquent le caractère non officiel. Julie Thomas et Uwe Dauernheim figurent sur À propos, et le code est sur GitHub. Vous pouvez aller au contenu, utiliser Fonctionnement, Sources officielles, Changements et À propos sur un téléphone, et choisir l’apparence à côté de la langue : Auto suit l’appareil, ou vous imposez Clair ou Sombre.",
      it: "Il navigatore usa ora le lingue ufficiali della Svizzera più l’inglese: tedesco, francese, italiano, romancio e inglese. Lo spagnolo non è più offerto. Puoi copiare un link al risultato e inviarlo; il link contiene le risposte, segue il percorso di oggi e avvisa prima di copiare. Dove esiste una pagina ufficiale in inglese di SEM o admin.ch, documenti e lettere di permesso la aprono. C’è una pagina Note legali su privacy e responsabilità; il segno del sito non è più una croce svizzera; le stampe indicano che è non ufficiale. Julie Thomas e Uwe Dauernheim sono indicati in Chi siamo, e il codice è su GitHub. Puoi andare al contenuto, usare Come funziona, Fonti ufficiali, Modifiche e Chi siamo sul telefono, e scegliere l’aspetto accanto alla lingua: Auto segue il dispositivo, oppure fissi Chiaro o Scuro.",
      rm: "Il navigatur dovra ussa las linguas uffizialas da la Svizra plus l’englais: tudestg, franzos, talian, rumantsch ed englais. Spagnol na vegn betg pli purschì. Ti pos copiar ina colliaziun al resultat e trametter ella; la colliaziun cuntegna las respostas, suonda la via dad oz ed averta avant copiar. Nua ch’ina pagina uffiziala englaisa da SEM u admin.ch exista, avran documents e letras da permissiun quella pagina. I dat ina pagina Legal davart protecziun da datas e responsabladad; il segn da la pagina n’è betg pli ina crusch svizra; stamps di ch’igl è betg uffizial. Julie Thomas ed Uwe Dauernheim stattan sin Davart nus, ed il code è sin GitHub. Ti pos siglir tar il cuntegn, duvrar Co funcziun’igl, Funtaunas uffizialas, Midadas e Davart nus sin telefonin, e tscherner l’aspect sper la tscherna da lingua: Auto suonda tes apparat, u ti fixeschas Cler u Stgir.",
    },
  },
  {
    date: "2026-08-22",
    kind: "rules",
    source: {
      label: "SEM",
      url: "https://www.sem.admin.ch/sem/en/home/overview-arbeit.html",
    },
    title: {
      en: "Rules re-checked; official starting links updated",
      de: "Regeln erneut geprüft; offizielle Startlinks aktualisiert",
      fr: "Règles revérifiées ; liens officiels mis à jour",
      it: "Norme rivedute; link ufficiali aggiornati",
      rm: "Reglas puspè examinadas; colliaziuns uffizialas actualisadas",
    },
    body: {
      en: "The navigator’s routes were checked again on 22 August 2026 against SEM, EasyGov and cantonal guidance. No further federal admission-rule change has been encoded. The 2026 quotas remain as decided by the Federal Council on 19 November 2025. ch.ch topic pages for working and family reunification no longer resolve; those result links now open the SEM working overview and free-movement FAQ. The canton remains the deciding authority.",
      de: "Die Wege im Navigator wurden am 22. August 2026 erneut mit SEM, EasyGov und kantonalen Angaben abgeglichen. Es ist keine weitere bundesrechtliche Zulassungsänderung hinterlegt. Die Kontingente 2026 bleiben wie am 19. November 2025 vom Bundesrat beschlossen. Die ch.ch-Themenseiten zu Arbeit und Familiennachzug sind nicht mehr erreichbar; die Ergebnislinks führen jetzt zur SEM-Übersicht Arbeit und zur Freizügigkeits-FAQ. Der Kanton bleibt die entscheidende Behörde.",
      fr: "Les parcours du navigateur ont été revérifiés le 22 août 2026 auprès du SEM, d’EasyGov et des indications cantonales. Aucun autre changement fédéral d’admission n’a été encodé. Les contingents 2026 restent ceux décidés par le Conseil fédéral le 19 novembre 2025. Les pages thématiques ch.ch sur le travail et le regroupement familial ne répondent plus ; ces liens ouvrent désormais l’aperçu SEM du travail et la FAQ sur la libre circulation. Le canton reste l’autorité décisionnaire.",
      it: "I percorsi del navigatore sono stati ricontrollati il 22 agosto 2026 con SEM, EasyGov e le indicazioni cantonali. Non è stato codificato alcun ulteriore cambiamento federale di ammissione. I contingenti 2026 restano quelli decisi dal Consiglio federale il 19 novembre 2025. Le pagine tematiche ch.ch su lavoro e ricongiungimento familiare non rispondono più; quei link aprono ora la panoramica SEM sul lavoro e la FAQ sulla libera circolazione. Il cantone resta l’autorità che decide.",
      rm: "Las vias dal navigatur èn vegnidas puspè verifitgadas ils 22 avust 2026 tar SEM, EasyGov ed indicaziuns chantunalas. Nagina ulteriura midada federala d’admissiun n’è vegnida codifitgada. Ils contingents 2026 restan quels ch’il Cussegl federal ha decidì ils 19 november 2025. Las paginas tematicas da ch.ch davart lavur e reuniun da famiglia na funcziunan betg pli; quellas colliaziuns avran ussa la survista SEM da lavur e la FAQ da la libra circulaziun. Il chantun resta l’autoritad decisiva.",
    },
  },
  {
    date: "2026-08-20",
    kind: "product",
    title: {
      en: "First public release",
      de: "Erste öffentliche Fassung",
      fr: "Première version publique",
      it: "Prima versione pubblica",
      rm: "Emprima versiun publica",
    },
    body: {
      en: "PermitPilot launched as a multilingual decision wizard for common Swiss work and residence routes. Results separate applicant and employer tasks and link to SEM, ch.ch, EasyGov and the competent canton.",
      de: "PermitPilot startete als mehrsprachiger Entscheidungsnavigator für gängige Schweizer Arbeits- und Aufenthaltswege. Ergebnisse trennen Aufgaben von Person und Arbeitgeber und verweisen auf SEM, ch.ch, EasyGov und den zuständigen Kanton.",
      fr: "PermitPilot a été lancé comme un assistant de décision multilingue pour les parcours suisses courants de travail et de séjour. Les résultats séparent les tâches du candidat et de l’employeur et renvoient au SEM, à ch.ch, EasyGov et au canton compétent.",
      it: "PermitPilot è stato lanciato come assistente decisionale multilingue per i percorsi svizzeri usuali di lavoro e soggiorno. I risultati separano i compiti del richiedente e del datore e rimandano a SEM, ch.ch, EasyGov e al cantone competente.",
      rm: "PermitPilot è vegnì lantschà sco navigatur da decisiun multilingu per vias svizras usitadas da lavur e dimora. Ils resultats separan las incumbensas da la persuna e dal patrun e mainan tar SEM, ch.ch, EasyGov ed il chantun cumpetent.",
    },
  },
  {
    date: "2026-08-20",
    kind: "rules",
    title: {
      en: "Rules reviewed against official sources",
      de: "Regeln anhand offizieller Quellen geprüft",
      fr: "Règles vérifiées sur les sources officielles",
      it: "Norme verificate sulle fonti ufficiali",
      rm: "Reglas verifitgadas sin funtaunas uffizialas",
    },
    body: {
      en: "The navigator’s routes were checked against SEM, ch.ch, EasyGov and cantonal guidance in force on 20 August 2026. No further federal admission-rule change has been encoded since that review. The canton remains the deciding authority.",
      de: "Die Wege im Navigator wurden am 20. August 2026 mit SEM, ch.ch, EasyGov und kantonalen Angaben abgeglichen. Seit dieser Prüfung ist keine weitere bundesrechtliche Zulassungsänderung hinterlegt. Der Kanton bleibt die entscheidende Behörde.",
      fr: "Les parcours du navigateur ont été vérifiés le 20 août 2026 auprès du SEM, de ch.ch, d’EasyGov et des indications cantonales. Aucun autre changement fédéral d’admission n’a été encodé depuis. Le canton reste l’autorité décisionnaire.",
      it: "I percorsi del navigatore sono stati verificati il 20 agosto 2026 presso SEM, ch.ch, EasyGov e le indicazioni cantonali. Da allora non è stato codificato alcun ulteriore cambiamento federale di ammissione. Il cantone resta l’autorità che decide.",
      rm: "Las vias dal navigatur èn vegnidas verifitgadas ils 20 avust 2026 tar SEM, ch.ch, EasyGov ed indicaziuns chantunalas. Dapi lura n’è nagina ulteriura midada federala d’admissiun vegnida codifitgada. Il chantun resta l’autoritad decisiva.",
    },
  },
  {
    date: "2026-01-01",
    kind: "rules",
    source: {
      label: "admin.ch",
      url: "https://www.ivi.admin.ch/en/newnsb/7HwBjdg5HpBA",
    },
    title: {
      en: "2026 work-permit quotas unchanged",
      de: "Bewilligungskontingente 2026 unverändert",
      fr: "Contingents 2026 inchangés",
      it: "Contingenti 2026 invariati",
      rm: "Contingents 2026 nunmidads",
    },
    body: {
      en: "On 19 November 2025 the Federal Council kept 2026 quotas at 2025 levels, in force from 1 January 2026: 8,500 third-country permits (4,500 B, 4,000 L); 3,500 UK permits (2,100 B, 1,400 L); and 3,500 EU/EFTA service-provider permits for assignments over 120 days (3,000 L, 500 B). UK nationals remain outside free movement; the UK quota is a separate allocation, not a return to the EU/EFTA system.",
      de: "Am 19. November 2025 beliess der Bundesrat die Kontingente 2026 auf dem Stand von 2025, in Kraft ab 1. Januar 2026: 8’500 Drittstaatenbewilligungen (4’500 B, 4’000 L); 3’500 UK-Bewilligungen (2’100 B, 1’400 L); 3’500 Bewilligungen für EU/EFTA-Dienstleistungserbringende über 120 Tage (3’000 L, 500 B). Britische Staatsangehörige bleiben ausserhalb der Personenfreizügigkeit; das UK-Kontingent ist eine eigene Quote, keine Rückkehr ins EU/EFTA-System.",
      fr: "Le 19 novembre 2025, le Conseil fédéral a maintenu les contingents 2026 au niveau de 2025, en vigueur dès le 1er janvier 2026 : 8 500 autorisations pour les États tiers (4 500 B, 4 000 L) ; 3 500 pour le Royaume-Uni (2 100 B, 1 400 L) ; 3 500 pour les prestataires UE/AELE au-delà de 120 jours (3 000 L, 500 B). Les ressortissants britanniques restent hors libre circulation ; le contingent UK est une allocation séparée, pas un retour au régime UE/AELE.",
      it: "Il 19 novembre 2025 il Consiglio federale ha mantenuto i contingenti 2026 al livello del 2025, in vigore dal 1° gennaio 2026: 8’500 permessi per Stati terzi (4’500 B, 4’000 L); 3’500 permessi UK (2’100 B, 1’400 L); 3’500 permessi per prestatori UE/AELS oltre 120 giorni (3’000 L, 500 B). I cittadini britannici restano fuori dalla libera circolazione; il contingente UK è un’assegnazione distinta, non un ritorno al regime UE/AELS.",
      rm: "Ils 19 november 2025 ha il Cussegl federal mantegnì ils contingents 2026 sin il nivel da 2025, en vigur dapi il 1. schaner 2026: 8’500 permissiuns per stadis terzs (4’500 B, 4’000 L); 3’500 permissiuns UK (2’100 B, 1’400 L); 3’500 permissiuns per purschiders UE/AELE sur 120 dis (3’000 L, 500 B). Burgais britannics restan ordaifer la libra circulaziun; il contingent UK è ina attribuziun separada, betg in return al sistem UE/AELE.",
    },
  },
];

const dateLocales: Record<Lang, string> = {
  en: "en-GB",
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
  rm: "rm-CH",
};

export function formatHistoryDate(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(dateLocales[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export const historyUi = {
  en: {
    title: "What has changed",
    lead: "Permit-rule updates and site changes, kept apart. Rules last reviewed 22 August 2026.",
    all: "All",
    rules: "Permit Rules",
    product: "Site",
    source: "Official source",
  },
  de: {
    title: "Was sich geändert hat",
    lead: "Änderungen bei den Bewilligungsregeln und an der Website, getrennt geführt. Regeln zuletzt geprüft am 22. August 2026.",
    all: "Alle",
    rules: "Bewilligungsregeln",
    product: "Website",
    source: "Offizielle Quelle",
  },
  fr: {
    title: "Ce qui a changé",
    lead: "Mises à jour des règles de permis et du site, tenues séparément. Règles vérifiées le 22 août 2026.",
    all: "Tout",
    rules: "Règles de permis",
    product: "Site",
    source: "Source officielle",
  },
  it: {
    title: "Cosa è cambiato",
    lead: "Aggiornamenti delle norme sui permessi e del sito, tenuti distinti. Norme verificate il 22 agosto 2026.",
    all: "Tutto",
    rules: "Norme sui permessi",
    product: "Sito",
    source: "Fonte ufficiale",
  },
  rm: {
    title: "Tge è sa midà",
    lead: "Actualisaziuns da las reglas da permissiun e da la pagina, menadas separadamain. Reglas verifitgadas ils 22 avust 2026.",
    all: "Tut",
    rules: "Reglas da permissiun",
    product: "Pagina",
    source: "Funtauna uffiziala",
  },
} as const;
