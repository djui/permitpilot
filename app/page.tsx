"use client";

import { useMemo, useState } from "react";
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

type Screen = "home" | "wizard" | "result";

const extras = {
  en: {
    methodEyebrow: "Designed around the actual decision", methodTitle: "One clear route through federal rules and cantonal paperwork.",
    cards: [["Legally relevant questions", "We ask about citizenship, status, work model, duration and canton—not characteristics that do not affect the route."], ["Responsibilities separated", "Applicant, employer and authority tasks appear in their proper order, including entry and arrival."], ["Sources you can verify", "Every result points back to SEM, ch.ch, EasyGov and the responsible canton."]],
    common: "Common routes covered", coverage: "Employees · founders · cross-border commuters · posted services · family · students · B/C/L/G/F/N/S/Ci",
  },
  de: {
    methodEyebrow: "Entlang des echten Entscheids", methodTitle: "Ein klarer Weg durch Bundesregeln und kantonale Formulare.",
    cards: [["Nur rechtlich relevante Fragen", "Wir fragen nach Staatsangehörigkeit, Status, Arbeitsmodell, Dauer und Kanton – nicht nach irrelevanten Merkmalen."], ["Zuständigkeiten getrennt", "Aufgaben von Person, Arbeitgeber und Behörde erscheinen in der richtigen Reihenfolge."], ["Prüfbare Quellen", "Jedes Ergebnis führt zu SEM, ch.ch, EasyGov und dem zuständigen Kanton."]],
    common: "Abgedeckte Standardwege", coverage: "Angestellte · Gründer · Grenzgänger · Entsendungen · Familie · Studium · B/C/L/G/F/N/S/Ci",
  },
  fr: {
    methodEyebrow: "Conçu autour de la vraie décision", methodTitle: "Un parcours clair entre règles fédérales et démarches cantonales.",
    cards: [["Questions juridiquement utiles", "Nous demandons nationalité, statut, modèle de travail, durée et canton – pas les caractéristiques sans effet juridique."], ["Responsabilités séparées", "Les tâches du candidat, de l’employeur et de l’autorité apparaissent dans le bon ordre."], ["Sources vérifiables", "Chaque résultat renvoie au SEM, à ch.ch, EasyGov et au canton compétent."]],
    common: "Parcours courants couverts", coverage: "Salariés · fondateurs · frontaliers · détachements · famille · étudiants · B/C/L/G/F/N/S/Ci",
  },
  es: {
    methodEyebrow: "Diseñado según la decisión real", methodTitle: "Una ruta clara entre normas federales y trámites cantonales.",
    cards: [["Preguntas con relevancia legal", "Preguntamos ciudadanía, estatus, modelo de trabajo, duración y cantón; no rasgos que no cambian la ruta."], ["Responsabilidades separadas", "Las tareas del solicitante, empleador y autoridad aparecen en el orden correcto."], ["Fuentes verificables", "Cada resultado enlaza SEM, ch.ch, EasyGov y el cantón competente."]],
    common: "Rutas comunes cubiertas", coverage: "Empleados · fundadores · fronterizos · desplazados · familia · estudiantes · B/C/L/G/F/N/S/Ci",
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
  const [screen, setScreen] = useState<Screen>("home");
  const [answers, setAnswers] = useState<Answers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const t = ui[language];
  const x = extras[language];
  const steps = useMemo(() => buildSteps(answers, language), [answers, language]);
  const safeIndex = Math.min(stepIndex, Math.max(steps.length - 1, 0));
  const current = steps[safeIndex];
  const result = useMemo(() => getResult(answers, language), [answers, language]);

  const goHome = () => {
    setScreen("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startWizard = (audience?: "person" | "employer") => {
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
              <div className="verified-pill"><span />{t.verified}</div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => startWizard()}>{t.start}<span aria-hidden="true">→</span></button>
                <button className="text-button" onClick={() => startWizard("employer")}>{t.employerStart}</button>
              </div>
              <div className="microcopy"><span><i className="clock-icon" />{t.time}</span><span><i className="lock-icon" />{t.privacy}</span></div>
            </div>
            <aside className="route-card" id="how" aria-label={t.routeTitle}>
              <div className="route-card-head">
                <div><span className="mini-label">{t.routeLabel}</span><h2>{t.routeTitle}</h2></div>
                <div className="permit-stack" aria-hidden="true"><span>L</span><span>B</span><span>G</span></div>
              </div>
              <div className="route-list">
                {t.layers.map(([title, detail], index) => (
                  <div className="route-row" key={title}>
                    <span className="route-number">0{index + 1}</span><span className="route-dot" />
                    <div><strong>{title}</strong><small>{detail}</small></div>{index < 3 && <span className="route-line" />}
                  </div>
                ))}
              </div>
              <div className="route-footer"><span className="source-seal"><SwissMark /></span><div><strong>{t.official}</strong><small>{t.notAdvice}</small></div></div>
            </aside>
          </section>

          <section className="trust-strip" aria-label="Sources"><span>SEM</span><span>ch.ch</span><span>EasyGov</span><span>26 cantons</span></section>

          <section className="method-section" id="sources">
            <div className="method-heading"><p className="eyebrow">{x.methodEyebrow}</p><h2>{x.methodTitle}</h2></div>
            <div className="method-grid">
              {x.cards.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
            </div>
            <div className="coverage"><strong>{x.common}</strong><span>{x.coverage}</span></div>
          </section>

          <section className="about-strip" id="about">
            <div><span className="mini-label">{t.official}</span><h2>{t.sourceMethod}</h2></div>
            <p>{t.noData}</p>
            <button className="secondary-button" onClick={() => startWizard()}>{t.start}<span>→</span></button>
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
                <div className="document-grid">
                  {result.docs.map((doc) => <div className="document-item" key={doc}><span className="paper-icon" /><p>{doc}</p></div>)}
                </div>
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

      <footer className="no-print"><Brand /><p>{t.notAdvice}</p><span>© 2026</span></footer>
    </main>
  );
}
