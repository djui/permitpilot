import { useEffect, useMemo, useState } from "react";
import {
  Answers,
  Lang,
  buildSteps,
  cantons,
  getAnswerLabel,
  getResult,
  languages,
  stepOrder,
  ui,
} from "./permit-engine";
import {
  formatHistoryDate,
  historyEntries,
  historyUi,
  type HistoryKind,
} from "./history";

type Screen = "home" | "wizard" | "result" | "history";

const extras = {
  en: {
    howTitle: "One clear route through federal rules and cantonal paperwork.",
    howLead: "We ask only what changes the route, then show who files what—and in which order.",
    cards: [["Legally relevant questions", "We ask about citizenship, status, work model, duration and canton—not characteristics that do not affect the route."], ["Responsibilities separated", "Applicant, employer and authority tasks appear in their proper order, including entry and arrival."], ["A result you can check", "Every route points back to SEM, ch.ch, EasyGov and the responsible canton."]],
    common: "Common routes covered", coverage: "Employees · founders · cross-border commuters · posted services · family · students · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Federal rules first. The canton remains the deciding authority.",
    sourceLead: "PermitPilot organises official Swiss guidance. Open the source yourself before you file.",
    sources: [
      ["SEM", "State Secretariat for Migration", "Federal rules on admission, permits and visas.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Swiss government portal", "Plain-language overview of living and working in Switzerland.", "https://www.ch.ch/"],
      ["EasyGov", "Business point of contact", "Employer notifications and work-permit filings.", "https://www.easygov.swiss/"],
      ["26 cantons", "Cantonal migration offices", "The competent office that processes the application.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Designed in France, developed in Sweden. For Switzerland.",
    aboutBody: "PermitPilot is an independent navigator. It organises official information; it does not issue a permit or replace advice from the competent canton.",
  },
  de: {
    howTitle: "Ein klarer Weg durch Bundesregeln und kantonale Formulare.",
    howLead: "Wir fragen nur, was den Weg ändert, und zeigen, wer was in welcher Reihenfolge einreicht.",
    cards: [["Nur rechtlich relevante Fragen", "Wir fragen nach Staatsangehörigkeit, Status, Arbeitsmodell, Dauer und Kanton – nicht nach irrelevanten Merkmalen."], ["Zuständigkeiten getrennt", "Aufgaben von Person, Arbeitgeber und Behörde erscheinen in der richtigen Reihenfolge."], ["Prüfbares Ergebnis", "Jeder Weg führt zu SEM, ch.ch, EasyGov und dem zuständigen Kanton."]],
    common: "Abgedeckte Standardwege", coverage: "Angestellte · Gründer · Grenzgänger · Entsendungen · Familie · Studium · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Zuerst Bundesrecht. Der Kanton bleibt die entscheidende Behörde.",
    sourceLead: "PermitPilot ordnet offizielle Schweizer Informationen. Öffne die Quelle, bevor du einreichst.",
    sources: [
      ["SEM", "Staatssekretariat für Migration", "Bundesregeln zu Zulassung, Bewilligungen und Visa.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Schweizer Behördenportal", "Verständliche Übersicht zu Leben und Arbeiten in der Schweiz.", "https://www.ch.ch/"],
      ["EasyGov", "Anlaufstelle für Unternehmen", "Meldungen und Bewilligungsgesuche von Arbeitgebern.", "https://www.easygov.swiss/"],
      ["26 Kantone", "Kantonale Migrationsämter", "Die zuständige Stelle, die das Gesuch bearbeitet.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Entworfen in Frankreich, entwickelt in Schweden. Für die Schweiz.",
    aboutBody: "PermitPilot ist ein unabhängiger Navigator. Er ordnet offizielle Informationen; er erteilt keine Bewilligung und ersetzt keine Auskunft des zuständigen Kantons.",
  },
  fr: {
    howTitle: "Un parcours clair entre règles fédérales et démarches cantonales.",
    howLead: "Nous ne demandons que ce qui change le parcours, puis indiquons qui dépose quoi, et dans quel ordre.",
    cards: [["Questions juridiquement utiles", "Nous demandons nationalité, statut, modèle de travail, durée et canton – pas les caractéristiques sans effet juridique."], ["Responsabilités séparées", "Les tâches du candidat, de l’employeur et de l’autorité apparaissent dans le bon ordre."], ["Un résultat vérifiable", "Chaque parcours renvoie au SEM, à ch.ch, EasyGov et au canton compétent."]],
    common: "Parcours courants couverts", coverage: "Salariés · fondateurs · frontaliers · détachements · famille · étudiants · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Les règles fédérales d’abord. Le canton reste l’autorité décisionnaire.",
    sourceLead: "PermitPilot organise l’information officielle suisse. Ouvrez la source avant de déposer un dossier.",
    sources: [
      ["SEM", "Secrétariat d’État aux migrations", "Règles fédérales sur l’admission, les permis et les visas.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portail des autorités suisses", "Vue d’ensemble claire de la vie et du travail en Suisse.", "https://www.ch.ch/"],
      ["EasyGov", "Guichet des entreprises", "Annonces et demandes de permis déposées par l’employeur.", "https://www.easygov.swiss/"],
      ["26 cantons", "Offices cantonaux des migrations", "L’autorité compétente qui traite la demande.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Conçu en France, développé en Suède. Pour la Suisse.",
    aboutBody: "PermitPilot est un navigateur indépendant. Il organise l’information officielle ; il ne délivre aucun permis et ne remplace pas l’avis du canton compétent.",
  },
  it: {
    howTitle: "Un percorso chiaro tra regole federali e pratiche cantonali.",
    howLead: "Chiediamo solo ciò che cambia il percorso, poi indichiamo chi deposita cosa e in quale ordine.",
    cards: [["Domande giuridicamente rilevanti", "Chiediamo cittadinanza, statuto, modello di lavoro, durata e cantone — non caratteristiche senza effetto sul percorso."], ["Responsabilità separate", "I compiti di richiedente, datore e autorità appaiono nell’ordine giusto."], ["Un risultato verificabile", "Ogni percorso rimanda a SEM, ch.ch, EasyGov e al cantone competente."]],
    common: "Percorsi comuni coperti", coverage: "Dipendenti · fondatori · frontalieri · distacchi · famiglia · studenti · B/C/L/G/F/N/S/Ci",
    sourceTitle: "Prima le regole federali. Il cantone resta l’autorità che decide.",
    sourceLead: "PermitPilot organizza le indicazioni ufficiali svizzere. Apri la fonte prima di depositare.",
    sources: [
      ["SEM", "Segreteria di Stato della migrazione", "Regole federali su ammissione, permessi e visti.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portale delle autorità svizzere", "Panoramica chiara su vivere e lavorare in Svizzera.", "https://www.ch.ch/"],
      ["EasyGov", "Sportello per le imprese", "Notifiche e domande di permesso del datore di lavoro.", "https://www.easygov.swiss/"],
      ["26 cantoni", "Uffici cantonali della migrazione", "L’autorità competente che tratta la domanda.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Progettato in Francia, sviluppato in Svezia. Per la Svizzera.",
    aboutBody: "PermitPilot è un navigatore indipendente. Organizza informazioni ufficiali; non rilascia un permesso né sostituisce il parere del cantone competente.",
  },
  rm: {
    howTitle: "Ina via clera tras reglas federalas e formulars chantunals.",
    howLead: "Nus dumondain mo quai che mida la via e mussain tgi depona tge – ed en tge successiun.",
    cards: [["Mo dumondas giuridicamain relevantas", "Nus dumondain naziunalitad, status, model da lavur, durada e chantun – betg caracteristicas senza effect sin la via."], ["Cumpetenzas separadas", "Incumbensas da persuna, patrun ed autoritad cumparan en la successiun giusta."], ["Resultat verifitgabel", "Mintga via maina tar SEM, ch.ch, EasyGov ed il chantun cumpetent."]],
    common: "Vias da standard cuvridas", coverage: "Engaschads · fundaturs · pendulars · emessas · famiglia · studi · B/C/L/G/F/N/S/Ci",
    sourceTitle: "L’emprim il dretg federal. Il chantun resta l’autoritad decisiva.",
    sourceLead: "PermitPilot ordinescha infurmaziuns uffizialas svizras. Avra la funtauna avant che deponer.",
    sources: [
      ["SEM", "Secretariat da stadi per migraziun", "Reglas federalas davart admissiun, permissiuns e visums.", "https://www.sem.admin.ch/"],
      ["ch.ch", "Portal da las autoritads svizras", "Survista chapibla davart viver e lavurar en Svizra.", "https://www.ch.ch/"],
      ["EasyGov", "Punct da contact per interpresas", "Annunzia e dumondas da permissiun dals patruns.", "https://www.easygov.swiss/"],
      ["26 chantuns", "Uffizis chantunals da migraziun", "L’autoritad cumpetenta che elavura la dumonda.", "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"],
    ],
    aboutTitle: "Entaschà en Frantscha, sviluppà en Svezia. Per la Svizra.",
    aboutBody: "PermitPilot è in navigatur independent. El ordinescha infurmaziuns uffizialas; el na dat nagina permissiun e na remplazzà betg la infurmaziun dal chantun cumpetent.",
  },
} as const;

function SwissMark() {
  return <span className="swiss-mark" aria-hidden="true"><span /></span>;
}

function Brand({ onClick }: { onClick?: () => void }) {
  const content = <><SwissMark /><span className="brand-copy"><strong>Permit</strong><span>Pilot</span></span></>;
  return onClick ? <button className="brand" onClick={onClick} aria-label="PermitPilot home">{content}</button> : <div className="brand">{content}</div>;
}

function OptionSymbol({ value }: { value: string }) {
  const labels: Record<string, string> = {
    person: "01", employer: "02", new: "+", existing: "✓", swiss: "CH", eu: "EU", uk: "UK", third: "•••",
    local: "⌂", frontier: "↔", posted: "↗", self: "◇", familyRoute: "+", study: "A",
    B: "B", C: "C", L: "L", G: "G", Ci: "Ci", refugeeB: "B", F: "F", N: "N", S: "S", otherPermit: "?",
    baseSwiss: "CH", baseEu: "EU", baseUk: "UK", baseOther: "•••", resEu: "EU", resNeighbor: "↔", resOther: "•••",
    visa: "V", exempt: "✓", schengen: "ID", unsure: "?", under3: "<3", three12: "L", twelveplus: "B",
    under8: "≤8", nine90: "90", over90: ">90", general: "○", priority: "!", regulated: "R",
    yes: "✓", no: "×", familyYes: "+", familyNo: "—", strong: "◆", uncertain: "?", weak: "○",
    sponsorSwissC: "CH", sponsorEu: "EU", sponsorThirdB: "B", sponsorThirdL: "L", sponsorOther: "?",
    spouse: "∞", registered: "=", unmarried: "≈", child: "+", parent: "↑",
  };
  return <span className="option-symbol" aria-hidden="true">{labels[value] ?? "·"}</span>;
}

export default function Home() {
  const [language, setLanguage] = useState<Lang>("en");
  const [screen, setScreen] = useState<Screen>(() => (
    typeof window !== "undefined" && window.location.hash === "#history" ? "history" : "home"
  ));
  const [historyFilter, setHistoryFilter] = useState<"all" | HistoryKind>("all");
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const t = ui[language];
  const x = extras[language];
  const h = historyUi[language];
  const steps = useMemo(() => buildSteps(answers, language), [answers, language]);
  const safeIndex = Math.min(stepIndex, Math.max(steps.length - 1, 0));
  const current = steps[safeIndex];
  const result = useMemo(() => getResult(answers, language), [answers, language]);
  const visibleHistory = historyFilter === "all"
    ? historyEntries
    : historyEntries.filter((entry) => entry.kind === historyFilter);

  useEffect(() => {
    const syncHash = () => {
      setScreen(window.location.hash === "#history" ? "history" : (previous) => (
        previous === "history" ? "home" : previous
      ));
    };
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const clearHash = () => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  };

  const goHome = () => {
    clearHash();
    setScreen("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHistory = () => {
    setScreen("history");
    if (window.location.hash !== "#history") window.location.hash = "history";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startWizard = (audience?: "person" | "employer") => {
    clearHash();
    setAnswers(audience ? { audience } : {});
    setStepIndex(audience ? 1 : 0);
    setScreen("wizard");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      setScreen("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStepIndex(safeIndex + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousStep = () => {
    if (safeIndex === 0) return goHome();
    setStepIndex(safeIndex - 1);
  };

  const navigateHomeSection = (id: string) => {
    clearHash();
    setScreen("home");
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 40);
  };

  const actorLabel = t[result.actor];
  const summaryKeys = ["permit", "nationality", "arrangement", "employmentDuration", "serviceDuration", "canton"];
  const summaryAnswers = summaryKeys.filter((key) => answers[key]).map((key) => getAnswerLabel(key, answers[key], language));

  return (
    <main className="site-shell">
      <header className="topbar no-print">
        <Brand onClick={goHome} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => navigateHomeSection("how")}>{t.how}</button>
          <button onClick={() => navigateHomeSection("sources")}>{t.sources}</button>
          <button onClick={() => navigateHomeSection("about")}>{t.about}</button>
          <button onClick={goHistory}>{t.history}</button>
        </nav>
        <div className="language-switch" aria-label="Language">
          {languages.map(({ code, label, name }) => (
            <button key={code} title={name} className={language === code ? "active" : ""} onClick={() => setLanguage(code)} aria-pressed={language === code}>{label}</button>
          ))}
        </div>
      </header>

      {screen === "home" && (
        <>
          <section className="hero">
            <div className="hero-copy">
              <button className="verified-pill" onClick={goHistory}><span />{t.verified}</button>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => startWizard()}>{t.start}<span aria-hidden="true">→</span></button>
                <button className="text-button" onClick={() => startWizard("employer")}>{t.employerStart}</button>
              </div>
              <div className="microcopy"><span><i className="clock-icon" />{t.time}</span><span><i className="lock-icon" />{t.privacy}</span></div>
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
              <div className="route-footer"><span className="source-seal"><SwissMark /></span><div><strong>{t.official}</strong><small>{t.notAdvice}</small></div></div>
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
                  <a className="source-tile" href={url} target="_blank" rel="noreferrer" key={name}>
                    <strong>{name}</strong>
                    <span>{role}</span>
                    <p>{detail}</p>
                    <i aria-hidden="true">↗</i>
                  </a>
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
              </div>
              <div className="about-meta">
                <p>{t.noData}</p>
                <p>{t.notAdvice}</p>
                <button className="secondary-button" onClick={() => startWizard()}>{t.start}<span>→</span></button>
                <button className="text-button" onClick={goHistory}>{t.history}</button>
              </div>
            </div>
          </section>
        </>
      )}

      {screen === "wizard" && current && (
        <section className="wizard-shell" aria-live="polite">
          <div className="wizard-progress"><span style={{ width: `${((safeIndex + 1) / steps.length) * 100}%` }} /></div>
          <div className="wizard-meta"><button onClick={previousStep}>← {t.back}</button><span>{t.step} {safeIndex + 1} {t.of} {steps.length}</span></div>
          <div className="wizard-card">
            <p className="eyebrow">PermitPilot</p>
            <h1>{current.title}</h1>
            <p>{current.hint}</p>

            {current.kind === "canton" ? (
              <div className="select-wrap">
                <label htmlFor="canton-select">{t.selectCanton}</label>
                <select id="canton-select" value={answers.canton ?? ""} onChange={(event) => setAnswer(event.target.value)}>
                  <option value="" disabled>{t.select}</option>
                  {cantons.map(([code, name]) => <option value={code} key={code}>{code} · {name}</option>)}
                </select>
                <span className="select-arrow">↓</span>
              </div>
            ) : (
              <div className={`choice-grid ${current.options && current.options.length > 6 ? "choice-grid-compact" : ""}`}>
                {current.options?.map((option) => (
                  <button key={option.value} className={answers[current.id] === option.value ? "choice selected" : "choice"} onClick={() => setAnswer(option.value)} aria-pressed={answers[current.id] === option.value}>
                    <OptionSymbol value={option.value} /><strong>{option.label}</strong><small>{option.detail}</small><i>→</i>
                  </button>
                ))}
              </div>
            )}

            <div className="wizard-actions">
              <button className="primary-button wizard-next" disabled={!answers[current.id]} onClick={nextStep}>
                {safeIndex === steps.length - 1 ? t.result : t.next}<span aria-hidden="true">→</span>
              </button>
              <small><i className="lock-icon" />{t.noData}</small>
            </div>
          </div>
        </section>
      )}

      {screen === "result" && (
        <section className="result-shell">
          <div className="result-hero">
            <div className="result-title-block">
              <div className="result-kicker"><span className="result-status-dot" />{t.resultEyebrow}</div>
              <div className="result-badge">{result.badge}</div>
              <h1>{result.title}</h1>
              <p>{result.summary}</p>
              <div className="answer-chips">{summaryAnswers.map((label) => <span key={label}>{label}</span>)}</div>
            </div>
            <aside className="confidence-card">
              <span>✓</span><div><strong>{t.confidence}</strong><small>{t.resultIntro}</small></div>
            </aside>
          </div>

          <div className="result-actions no-print">
            <button className="secondary-button" onClick={() => window.print()}>{t.print}<span>↗</span></button>
            <button className="text-button" onClick={() => { setScreen("wizard"); setStepIndex(Math.max(steps.length - 1, 0)); }}>{t.change}</button>
          </div>

          <div className="result-layout">
            <div className="result-main">
              {(result.warning || result.visaNote || result.familyNote) && (
                <div className="layer-stack">
                  {result.warning && <div className="layer-alert warning"><span>!</span><div><strong>{t.why}</strong><p>{result.warning}</p></div></div>}
                  {result.visaNote && <div className="layer-alert"><span>V</span><div><strong>{t.visaLayer}</strong><p>{result.visaNote}</p></div></div>}
                  {result.familyNote && <div className="layer-alert family"><span>+</span><div><strong>{t.familyLayer}</strong><p>{result.familyNote}</p></div></div>}
                </div>
              )}

              <section className="result-section action-plan">
                <div className="section-heading"><span className="section-index">01</span><div><h2>{t.responsibilities}</h2><p><span className={`actor-tag actor-${result.actor}`}>{actorLabel}</span></p></div></div>
                <div className="timeline">
                  {result.actions.map((action, index) => <div className="timeline-item" key={action}><span className="timeline-number">{String(index + 1).padStart(2, "0")}</span><div><p>{action}</p>{index === 0 && <small>{t.sourceMethod}</small>}</div></div>)}
                </div>
              </section>

              <section className="result-section">
                <div className="section-heading"><span className="section-index">02</span><div><h2>{t.paperwork}</h2><p>{t.official}</p></div></div>
                <ul className="doc-checklist">
                  {result.docs.map((doc) => (
                    <li key={doc}>
                      <span className="doc-check" aria-hidden="true" />
                      <p>{doc}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="result-sidebar">
              {result.canton && (
                <section className="canton-card">
                  <span className="mini-label">{t.cantonOffice}</span>
                  <div className="canton-code">{result.canton.code}</div>
                  <h3>{result.canton.name}</h3>
                  <p>{t.sourceMethod}</p>
                  <a href={result.canton.url} target="_blank" rel="noreferrer">{t.open}<span>↗</span></a>
                </section>
              )}

              <section className="source-card">
                <span className="mini-label">{t.officialLinks}</span>
                <div className="source-links">
                  {result.sourceLinks.map(({ label, url }) => <a href={url} target="_blank" rel="noreferrer" key={url}><span className="source-dot" />{label}<i>↗</i></a>)}
                </div>
                <small>{t.reviewed}</small>
              </section>

              <section className="disclaimer-card">
                <span>i</span><div><strong>{t.disclaimerTitle}</strong><p>{t.disclaimer}</p></div>
              </section>
            </aside>
          </div>

          <div className="result-footer-action no-print"><button className="primary-button" onClick={() => startWizard()}>{t.restart}<span>→</span></button></div>
        </section>
      )}

      {screen === "history" && (
        <section className="history-shell">
          <div className="section-intro">
            <p className="eyebrow">{t.history}</p>
            <h1>{h.title}</h1>
            <p>{h.lead}</p>
          </div>
          <div className="history-filters" role="tablist" aria-label={t.history}>
            {(["all", "rules", "product"] as const).map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={historyFilter === filter}
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
                  <a href={entry.source.url} target="_blank" rel="noreferrer">{h.source} · {entry.source.label}<span>↗</span></a>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <footer className="no-print">
        <Brand onClick={goHome} />
        <button className="text-button" onClick={goHistory}>{t.history}</button>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
