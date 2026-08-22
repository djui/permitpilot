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
    kind: "rules",
    source: {
      label: "SEM",
      url: "https://www.sem.admin.ch/sem/en/home/overview-arbeit.html",
    },
    title: {
      en: "Rules re-checked; official starting links updated",
      de: "Regeln erneut geprüft; offizielle Startlinks aktualisiert",
      fr: "Règles revérifiées ; liens officiels mis à jour",
      es: "Normas reexaminadas; enlaces oficiales actualizados",
    },
    body: {
      en: "The navigator’s routes were checked again on 22 August 2026 against SEM, EasyGov and cantonal guidance. No further federal admission-rule change has been encoded. The 2026 quotas remain as decided by the Federal Council on 19 November 2025. ch.ch topic pages for working and family reunification no longer resolve; those result links now open the SEM working overview and free-movement FAQ. The canton remains the deciding authority.",
      de: "Die Wege im Navigator wurden am 22. August 2026 erneut mit SEM, EasyGov und kantonalen Angaben abgeglichen. Es ist keine weitere bundesrechtliche Zulassungsänderung hinterlegt. Die Kontingente 2026 bleiben wie am 19. November 2025 vom Bundesrat beschlossen. Die ch.ch-Themenseiten zu Arbeit und Familiennachzug sind nicht mehr erreichbar; die Ergebnislinks führen jetzt zur SEM-Übersicht Arbeit und zur Freizügigkeits-FAQ. Der Kanton bleibt die entscheidende Behörde.",
      fr: "Les parcours du navigateur ont été revérifiés le 22 août 2026 auprès du SEM, d’EasyGov et des indications cantonales. Aucun autre changement fédéral d’admission n’a été encodé. Les contingents 2026 restent ceux décidés par le Conseil fédéral le 19 novembre 2025. Les pages thématiques ch.ch sur le travail et le regroupement familial ne répondent plus ; ces liens ouvrent désormais l’aperçu SEM du travail et la FAQ sur la libre circulation. Le canton reste l’autorité décisionnaire.",
      es: "Las rutas del navegador se contrastaron de nuevo el 22 de agosto de 2026 con SEM, EasyGov y la orientación cantonal. No se ha incorporado ningún otro cambio federal de admisión. Los cupos de 2026 siguen siendo los decididos por el Consejo Federal el 19 de noviembre de 2025. Las páginas temáticas de ch.ch sobre trabajo y reagrupación familiar ya no responden; esos enlaces abren ahora la visión general laboral de SEM y la FAQ de libre circulación. El cantón sigue siendo la autoridad que decide.",
    },
  },
  {
    date: "2026-08-20",
    kind: "product",
    title: {
      en: "First public release",
      de: "Erste öffentliche Fassung",
      fr: "Première version publique",
      es: "Primera versión pública",
    },
    body: {
      en: "PermitPilot launched as a multilingual decision wizard for common Swiss work and residence routes. Results separate applicant and employer tasks and link to SEM, ch.ch, EasyGov and the competent canton.",
      de: "PermitPilot startete als mehrsprachiger Entscheidungsnavigator für gängige Schweizer Arbeits- und Aufenthaltswege. Ergebnisse trennen Aufgaben von Person und Arbeitgeber und verweisen auf SEM, ch.ch, EasyGov und den zuständigen Kanton.",
      fr: "PermitPilot a été lancé comme un assistant de décision multilingue pour les parcours suisses courants de travail et de séjour. Les résultats séparent les tâches du candidat et de l’employeur et renvoient au SEM, à ch.ch, EasyGov et au canton compétent.",
      es: "PermitPilot se publicó como un asistente de decisión multilingüe para las vías suizas habituales de trabajo y residencia. Los resultados separan las tareas del solicitante y del empleador y enlazan SEM, ch.ch, EasyGov y el cantón competente.",
    },
  },
  {
    date: "2026-08-20",
    kind: "rules",
    title: {
      en: "Rules reviewed against official sources",
      de: "Regeln anhand offizieller Quellen geprüft",
      fr: "Règles vérifiées sur les sources officielles",
      es: "Normas revisadas con fuentes oficiales",
    },
    body: {
      en: "The navigator’s routes were checked against SEM, ch.ch, EasyGov and cantonal guidance in force on 20 August 2026. No further federal admission-rule change has been encoded since that review. The canton remains the deciding authority.",
      de: "Die Wege im Navigator wurden am 20. August 2026 mit SEM, ch.ch, EasyGov und kantonalen Angaben abgeglichen. Seit dieser Prüfung ist keine weitere bundesrechtliche Zulassungsänderung hinterlegt. Der Kanton bleibt die entscheidende Behörde.",
      fr: "Les parcours du navigateur ont été vérifiés le 20 août 2026 auprès du SEM, de ch.ch, d’EasyGov et des indications cantonales. Aucun autre changement fédéral d’admission n’a été encodé depuis. Le canton reste l’autorité décisionnaire.",
      es: "Las rutas del navegador se contrastaron el 20 de agosto de 2026 con SEM, ch.ch, EasyGov y la orientación cantonal. No se ha incorporado ningún otro cambio federal de admisión desde esa revisión. El cantón sigue siendo la autoridad que decide.",
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
      es: "Cupos de permiso 2026 sin cambios",
    },
    body: {
      en: "On 19 November 2025 the Federal Council kept 2026 quotas at 2025 levels, in force from 1 January 2026: 8,500 third-country permits (4,500 B, 4,000 L); 3,500 UK permits (2,100 B, 1,400 L); and 3,500 EU/EFTA service-provider permits for assignments over 120 days (3,000 L, 500 B). UK nationals remain outside free movement; the UK quota is a separate allocation, not a return to the EU/EFTA system.",
      de: "Am 19. November 2025 beliess der Bundesrat die Kontingente 2026 auf dem Stand von 2025, in Kraft ab 1. Januar 2026: 8’500 Drittstaatenbewilligungen (4’500 B, 4’000 L); 3’500 UK-Bewilligungen (2’100 B, 1’400 L); 3’500 Bewilligungen für EU/EFTA-Dienstleistungserbringende über 120 Tage (3’000 L, 500 B). Britische Staatsangehörige bleiben ausserhalb der Personenfreizügigkeit; das UK-Kontingent ist eine eigene Quote, keine Rückkehr ins EU/EFTA-System.",
      fr: "Le 19 novembre 2025, le Conseil fédéral a maintenu les contingents 2026 au niveau de 2025, en vigueur dès le 1er janvier 2026 : 8 500 autorisations pour les États tiers (4 500 B, 4 000 L) ; 3 500 pour le Royaume-Uni (2 100 B, 1 400 L) ; 3 500 pour les prestataires UE/AELE au-delà de 120 jours (3 000 L, 500 B). Les ressortissants britanniques restent hors libre circulation ; le contingent UK est une allocation séparée, pas un retour au régime UE/AELE.",
      es: "El 19 de noviembre de 2025 el Consejo Federal mantuvo los cupos de 2026 al nivel de 2025, vigentes desde el 1 de enero de 2026: 8.500 permisos de terceros países (4.500 B, 4.000 L); 3.500 del Reino Unido (2.100 B, 1.400 L); 3.500 para prestadores UE/AELC de más de 120 días (3.000 L, 500 B). Los nacionales británicos siguen fuera de la libre circulación; el cupo británico es una asignación aparte, no un retorno al régimen UE/AELC.",
    },
  },
];

const dateLocales: Record<Lang, string> = {
  en: "en-GB",
  de: "de-CH",
  fr: "fr-CH",
  es: "es-ES",
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
    lead: "Permit-rule updates and PermitPilot product changes, kept apart. Rules last reviewed 22 August 2026.",
    all: "All",
    rules: "Permit rules",
    product: "PermitPilot",
    source: "Official source",
  },
  de: {
    title: "Was sich geändert hat",
    lead: "Änderungen bei den Bewilligungsregeln und bei PermitPilot, getrennt geführt. Regeln zuletzt geprüft am 22. August 2026.",
    all: "Alle",
    rules: "Bewilligungsregeln",
    product: "PermitPilot",
    source: "Offizielle Quelle",
  },
  fr: {
    title: "Ce qui a changé",
    lead: "Mises à jour des règles de permis et de PermitPilot, tenues séparément. Règles vérifiées le 22 août 2026.",
    all: "Tout",
    rules: "Règles de permis",
    product: "PermitPilot",
    source: "Source officielle",
  },
  es: {
    title: "Qué ha cambiado",
    lead: "Cambios en las normas de permisos y en PermitPilot, por separado. Normas revisadas el 22 de agosto de 2026.",
    all: "Todo",
    rules: "Normas de permiso",
    product: "PermitPilot",
    source: "Fuente oficial",
  },
} as const;
