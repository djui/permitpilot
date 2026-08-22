import assert from "node:assert/strict";
import test from "node:test";
import {
  buildSteps,
  getResult,
  resolveRoute,
  type Answers,
} from "../app/permit-engine.ts";

const euLocal = (duration: string): Answers => ({
  audience: "person",
  status: "new",
  nationality: "eu",
  arrangement: "local",
  employmentDuration: duration,
  canton: "ZH",
});

test("existing C and Ci stay open", () => {
  assert.equal(resolveRoute({ status: "existing", permit: "C" }), "existingOpen");
  assert.equal(resolveRoute({ status: "existing", permit: "Ci" }), "existingOpen");
});

test("existing protection statuses keep their routes", () => {
  assert.equal(resolveRoute({ status: "existing", permit: "F" }), "statusNotify");
  assert.equal(resolveRoute({ status: "existing", permit: "refugeeB" }), "statusNotify");
  assert.equal(resolveRoute({ status: "existing", permit: "S" }), "statusS");
  assert.equal(resolveRoute({ status: "existing", permit: "N" }), "statusN");
});

test("existing B/L/G without changeIntent stay on existingReview", () => {
  assert.equal(resolveRoute({ status: "existing", permit: "B" }), "existingReview");
  assert.equal(resolveRoute({ status: "existing", permit: "L", nationality: "third" }), "existingReview");
  assert.equal(resolveRoute({ status: "existing", permit: "G" }), "existingReview");
});

test("EU local employment splits notify / L / B", () => {
  assert.equal(resolveRoute(euLocal("under3")), "euNotify");
  assert.equal(resolveRoute(euLocal("three12")), "euL");
  assert.equal(resolveRoute(euLocal("twelveplus")), "euB");
});

test("Swiss citizens need no immigration permit", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "swiss", arrangement: "local" }), "swiss");
});

test("family routes follow the sponsor", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "familyRoute", sponsor: "sponsorEu" }), "familyEu");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "familyRoute", sponsor: "sponsorSwissC" }), "familySwissC");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "familyRoute", sponsor: "sponsorThirdB" }), "familyThird");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "familyRoute", sponsor: "sponsorOther" }), "specialist");
});

test("study without studyPhase keeps the generic fallback", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "study" }), "studyJob");
});

test("studyPhase splits SEM-backed study routes", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "study", studyPhase: "studying" }), "studySideJob");
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "study", studyPhase: "studying" }), "studySideJob");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "study", studyPhase: "studyOnly" }), "studyResidence");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "study", studyPhase: "graduated" }), "graduateSearch");
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "study", studyPhase: "graduated" }), "euJobseeker");
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "study", studyPhase: "jobseeking" }), "euJobseeker");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "study", studyPhase: "jobseeking" }), "specialist");
});

test("EU student side jobs are not a third-country employer filing", () => {
  const eu = getResult({ status: "new", nationality: "eu", arrangement: "study", studyPhase: "studying" }, "en");
  assert.equal(eu.key, "studySideJob");
  assert.equal(eu.actor, "applicant");
  assert.ok(!eu.actions.some((item) => /employer applies/i.test(item.text)));
  const third = getResult({ status: "new", nationality: "third", arrangement: "study", studyPhase: "studying" }, "en");
  assert.ok(third.actions.some((item) => /employer applies/i.test(item.text)));
});

test("existing B/L life events", () => {
  assert.equal(resolveRoute({ status: "existing", permit: "B", nationality: "third", changeIntent: "newEmployer" }), "existingBChange");
  assert.equal(resolveRoute({ status: "existing", permit: "L", nationality: "third", changeIntent: "newEmployer" }), "existingLChange");
  assert.equal(resolveRoute({ status: "existing", permit: "L", nationality: "eu", changeIntent: "newEmployer" }), "existingBChange");
  assert.equal(resolveRoute({ status: "existing", permit: "B", nationality: "eu", changeIntent: "toSelf" }), "euSelf");
  assert.equal(resolveRoute({ status: "existing", permit: "B", nationality: "uk", changeIntent: "toSelf" }), "thirdSelf");
  assert.equal(resolveRoute({ status: "existing", permit: "B", nationality: "eu", changeIntent: "toC" }), "settlementC");
  assert.equal(resolveRoute({ status: "existing", permit: "B", nationality: "third", changeIntent: "newCanton" }), "existingReview");
});

test("frontier residence outside EU/neighbours is specialist", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "frontier", residence: "resOther" }), "specialist");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "frontier", residence: "resNeighbor", borderZone: "no" }), "specialist");
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "frontier", residence: "resEu" }), "euG");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "frontier", residence: "resNeighbor", borderZone: "yes" }), "thirdG");
});

test("dual nationality can switch the admission system", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "third", alsoSwissOrEu: "alsoSwiss", arrangement: "local" }), "swiss");
  assert.equal(resolveRoute({ status: "new", nationality: "uk", alsoSwissOrEu: "alsoEu", arrangement: "local", employmentDuration: "twelveplus" }), "euB");
});

test("non-gainful EU residence is a dedicated route", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "inactive" }), "euInactive");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "inactive" }), "specialist");
});

test("third-country local employment stays one route", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "uk", arrangement: "local", employmentDuration: "three12" }), "thirdEmployer");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "local", employmentDuration: "twelveplus" }), "thirdEmployer");
});

test("posted short UK services use the mobility agreement", () => {
  assert.equal(resolveRoute({
    status: "new",
    nationality: "uk",
    arrangement: "posted",
    employerBase: "baseUk",
    serviceDuration: "nine90",
    sector: "general",
  }), "ukService");
});

test("buildSteps asks studyPhase for study and skips unused existing arrangement", () => {
  const study = buildSteps({ status: "new", nationality: "eu", arrangement: "study" }, "en").map((s) => s.id);
  assert.deepEqual(study, ["audience", "status", "nationality", "arrangement", "studyPhase", "canton"]);

  const existingB = buildSteps({ status: "existing", permit: "B" }, "en").map((s) => s.id);
  assert.deepEqual(existingB, ["audience", "status", "permit", "nationality", "changeIntent", "canton"]);

  const existingC = buildSteps({ status: "existing", permit: "C" }, "en").map((s) => s.id);
  assert.deepEqual(existingC, ["audience", "status", "permit", "canton"]);
});

test("getResult returns dated action items and UK quota note", () => {
  const third = getResult({
    audience: "employer",
    status: "new",
    nationality: "uk",
    arrangement: "local",
    employmentDuration: "twelveplus",
    qualified: "strong",
    canton: "ZH",
  }, "en");
  assert.equal(third.key, "thirdEmployer");
  assert.ok(third.actions.length > 0);
  assert.equal(typeof third.actions[0].text, "string");
  assert.ok(third.actions[0].actor);
  assert.match(third.badge, /UK quota/);
  assert.match(third.title, /UK labour-market/);
  assert.ok(third.quotaNote);

  const uncertain = getResult({
    status: "new",
    nationality: "third",
    arrangement: "local",
    qualified: "uncertain",
    canton: "ZH",
  }, "en");
  assert.ok(uncertain.warning);

  const family = getResult({
    status: "new",
    nationality: "eu",
    arrangement: "familyRoute",
    sponsor: "sponsorEu",
    relationship: "spouse",
    canton: "VD",
  }, "en");
  assert.match(family.actions.map((item) => item.text).join(" "), /work/i);
});

test("remaining common routes still resolve", () => {
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "self" }), "euSelf");
  assert.equal(resolveRoute({ status: "new", nationality: "third", arrangement: "self" }), "thirdSelf");
  assert.equal(resolveRoute({
    status: "new",
    nationality: "eu",
    arrangement: "posted",
    employerBase: "baseEu",
    serviceDuration: "under8",
    sector: "general",
  }), "serviceFree");
  assert.equal(resolveRoute({
    status: "new",
    nationality: "eu",
    arrangement: "posted",
    employerBase: "baseEu",
    serviceDuration: "nine90",
    sector: "general",
  }), "serviceNotify");
  assert.equal(resolveRoute({
    status: "new",
    nationality: "third",
    arrangement: "posted",
    employerBase: "baseOther",
    serviceDuration: "over90",
  }), "thirdService");
  assert.equal(resolveRoute({ status: "new", nationality: "eu", arrangement: "frontier", residence: "resOther" }), "specialist");
  assert.equal(resolveRoute({ status: "existing", permit: "G", nationality: "eu", changeIntent: "toSelf" }), "existingReview");
  assert.equal(resolveRoute({ status: "existing", permit: "G", nationality: "eu", changeIntent: "newEmployer" }), "existingReview");
});

test("employer audience puts employer-led steps first", () => {
  const result = getResult({
    audience: "employer",
    status: "new",
    nationality: "eu",
    arrangement: "posted",
    employerBase: "baseEu",
    serviceDuration: "under8",
    sector: "general",
  }, "en");
  assert.equal(result.actions[0].actor, "both");
  assert.ok(result.actions.some((item) => item.actor === "applicant"));
  assert.ok(result.actions.findIndex((item) => item.actor === "applicant") > 0);
});

test("SEM starting URLs follow the UI language", () => {
  const de = getResult({
    status: "new",
    nationality: "eu",
    arrangement: "local",
    employmentDuration: "twelveplus",
    canton: "ZH",
  }, "de");
  assert.ok(de.sourceLinks.some((link) => link.url.includes("/sem/de/")));
  const rm = getResult({
    status: "new",
    nationality: "eu",
    arrangement: "local",
    employmentDuration: "twelveplus",
    canton: "ZH",
  }, "rm");
  assert.ok(rm.sourceLinks.every((link) => !link.url.includes("/sem/rm/")));
});

test("family relationship notes follow SEM circles", () => {
  const registered = getResult({
    status: "new",
    nationality: "third",
    arrangement: "familyRoute",
    sponsor: "sponsorEu",
    relationship: "registered",
    canton: "VD",
  }, "en");
  assert.match(registered.familyNote ?? "", /registered partnership/i);

  const childEu = getResult({
    status: "new",
    nationality: "third",
    arrangement: "familyRoute",
    sponsor: "sponsorEu",
    relationship: "child",
    canton: "VD",
  }, "en");
  assert.match(childEu.familyNote ?? "", /under 21/);

  const childThird = getResult({
    status: "new",
    nationality: "third",
    arrangement: "familyRoute",
    sponsor: "sponsorThirdB",
    relationship: "child",
    canton: "ZH",
  }, "en");
  assert.match(childThird.familyNote ?? "", /under 18/);

  const parentThird = getResult({
    status: "new",
    nationality: "third",
    arrangement: "familyRoute",
    sponsor: "sponsorSwissC",
    relationship: "parent",
    canton: "BE",
  }, "en");
  assert.match(parentThird.warning ?? "", /not a standard/i);
});

test("posted priority sector uses the notification route", () => {
  assert.equal(resolveRoute({
    status: "new",
    nationality: "eu",
    arrangement: "posted",
    employerBase: "baseEu",
    serviceDuration: "under8",
    sector: "priority",
  }), "serviceNotify");
});

test("weak qualification warns on third-country labour routes", () => {
  const result = getResult({
    status: "new",
    nationality: "third",
    arrangement: "local",
    qualified: "weak",
    canton: "ZH",
  }, "en");
  assert.match(result.warning ?? "", /unlikely/i);
});

test("employer audience uses hiring titles and hire-facing steps", () => {
  const result = getResult({
    audience: "employer",
    status: "new",
    nationality: "eu",
    arrangement: "local",
    employmentDuration: "twelveplus",
    canton: "ZH",
  }, "en");
  assert.match(result.title, /Hire on a B EU\/EFTA/i);
  assert.ok(result.actions.some((item) => /The hire registers/i.test(item.text)));
});

test("dated actions exist on EasyGov notification", () => {
  const result = getResult({
    audience: "employer",
    status: "new",
    nationality: "eu",
    arrangement: "local",
    employmentDuration: "under3",
    canton: "BE",
  }, "en");
  assert.equal(result.key, "euNotify");
  assert.ok(result.actions[0].when);
});
