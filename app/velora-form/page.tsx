"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  MISSING_QUESTION_ID,
  NEVER_TRIED,
  OUTCOME_QUESTION_ID,
  TRIED_QUESTION_ID,
  buildExperienceSummary,
  experienceMissingTitle,
  experienceQuestions,
  experienceSummaryCta,
  experienceSummaryEyebrow,
  toggleTried,
} from "./experience-summary";
import { BARRIER_QUESTION_TITLE, GOAL_QUESTION_TITLE, buildGoalSummary, goalSummaryCta, goalSummaryEyebrow } from "./goal-summary";
import {
  healthIntroCta,
  healthIntroEyebrow,
  healthIntroHeadline,
  healthIntroNote,
  healthIntroParagraphs,
  healthQuestions,
  healthSummaryCta,
  healthSummaryEyebrow,
  healthSummaryHeadline,
  healthSummaryParagraphs,
} from "./health-summary";
import { AboutYou } from "./AboutYou";
import { aboutAnswerKey, aboutViewIsComplete, aboutViews, type AboutField } from "./about-you";
import { PersonalizedSummary } from "./PersonalizedSummary";
import { SocialProof } from "./SocialProof";
import { socialProof } from "./social-proof";
import { Recommendation } from "./Recommendation";
import { type BookingSlot } from "./recommendation-summary";
import { MOTION_FAST_MS, TransitionFrame, usePrefersReducedMotion, useScreenTransition } from "./motion";
import { SectionProgress } from "./SectionProgress";

type StepStatus = "done" | "current" | "upcoming";

type AnswerValue = string | string[];

type QuizOption = string | { value: string; label: string };

type Question = {
  id?: string;
  title: string;
  supporting?: string;
  multi?: boolean;
  options: QuizOption[];
};

type Step = {
  title: string;
  detail: string;
  description: string;
  questions?: Question[];
  recommendation?: boolean;
};

const placeholderOptions = ["Platshållare 1", "Platshållare 2", "Platshållare 3"];

function question(title: string, options: string[] = placeholderOptions): Question {
  return { title, options };
}

const steps: Step[] = [
  {
    title: "Ditt mål",
    detail: "Vad vill du förändra?",
    description: "Vad vill du förändra och varför är det viktigt för dig?",
    questions: [
      question(
        "Vad vill du framför allt uppnå?",
        [
          "Gå ner i vikt och behålla resultatet",
          "Få bättre hälsa",
          "Få mer energi och ork",
          "Känna mig mer bekväm i min kropp",
          "Kunna leva ett mer aktivt liv"
        ]
      ),
      question(
        "Vad skulle förändras mest i ditt liv om du nådde dit?",
        [
          "Jag skulle känna mig friare i vardagen",
          "Jag skulle känna mig tryggare i min kropp",
          "Jag skulle orka göra mer av det jag tycker om",
          "Jag skulle känna mindre oro för min hälsa",
          "Jag skulle känna att jag äntligen lyckats"
        ]
      ),
      question(
        "Vad har främst stått i vägen hittills?",
        [
          "Jag går ner – men går upp igen",
          "Hunger och sug gör det svårt",
          "Jag får inte de resultat jag hoppas på",
          "Det är svårt att hålla nya vanor över tid",
          "Jag vet inte vad som faktiskt fungerar",
          "Jag har inte försökt tidigare"
        ]
      ),
    ],
  },
  {
    title: "Din erfarenhet",
    detail: "Vad har du redan provat?",
    description: "Hjälp oss förstå vad du redan har provat.",
    questions: experienceQuestions,
  },
  {
    title: "Din hälsa",
    detail: "Kan behandlingen passa dig?",
    description: "Nu ser vi om behandlingen kan vara lämplig för dig.",
    questions: [
      {
        title: "Tar du mediciner idag för viktnedgång?",
        supporting: "Exempelvis Wegovy, Mounjaro, Ozempic, Rybelsus eller Zepbound.",
        options: [
          { value: "Ja", label: "Ja" },
          { value: "Nej", label: "Nej" }
        ]
      },
      {
        title: "Har du eller har du haft något av följande?",
        supporting:
          "Välj Ja om något av alternativen stämmer in på dig.\n\n" +
          "• Diabetes typ 1\n" +
          "• Multipel endokrin neoplasi typ II, även om någon i din familj är drabbad\n" +
          "• Medullär tyreoideacancer (MTC), även om någon i din familj är drabbad\n" +
          "• Ätstörningar (anorexia och/eller bulimi)\n" +
          "• Diabetesretinopati",
        options: [
          { value: "Ja", label: "Ja" },
          { value: "Nej", label: "Nej" }
        ]
      }
    ]
  },
  {
    title: "Om dig",
    detail: "Din personliga profil",
    description: "Några sista uppgifter för att anpassa din bedömning.",
  },
  {
    title: "Din rekommendation",
    detail: "Se ditt nästa steg",
    description: "Se nästa steg utifrån dina svar.",
    recommendation: true,
  },
];

const prefaceSteps = [
  { title: "Hittat till Velora", detail: "Du har tagit första steget" },
  { title: "Startat din bedömning", detail: "Vi hjälper dig hela vägen" },
];

function answerKey(stepIndex: number, questionIndex: number) {
  return `${stepIndex}:${questionIndex}`;
}

function questionIndexByTitle(stepIndex: number, title: string) {
  return steps[stepIndex]?.questions?.findIndex((item) => item.title === title) ?? -1;
}

function questionIndexById(stepIndex: number, id: string) {
  return steps[stepIndex]?.questions?.findIndex((item) => item.id === id) ?? -1;
}

function readList(value: AnswerValue | undefined) {
  return Array.isArray(value) ? value : [];
}

function readSingle(value: AnswerValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

function outcomeIsSkipped(answerMap: Record<string, AnswerValue>, stepIdx: number) {
  const triedIndex = questionIndexById(stepIdx, TRIED_QUESTION_ID);
  if (triedIndex < 0) return false;
  return readList(answerMap[answerKey(stepIdx, triedIndex)]).includes(NEVER_TRIED);
}

function questionIsSkipped(stepIdx: number, index: number, answerMap: Record<string, AnswerValue>) {
  const question = steps[stepIdx]?.questions?.[index];
  return question?.id === OUTCOME_QUESTION_ID && outcomeIsSkipped(answerMap, stepIdx);
}

function visibleQuestionIndexes(stepIdx: number, answerMap: Record<string, AnswerValue>) {
  const count = steps[stepIdx]?.questions?.length ?? 0;
  return Array.from({ length: count }, (_, index) => index).filter(
    (index) => !questionIsSkipped(stepIdx, index, answerMap),
  );
}

function optionLabel(option: QuizOption) {
  return typeof option === "string" ? option : option.label;
}

function optionValue(option: QuizOption) {
  return typeof option === "string" ? option : option.value;
}

function optionGrid(options: QuizOption[]) {
  const longest = options.reduce((max, option) => Math.max(max, optionLabel(option).length), 0);
  if (longest > 32) return "grid-cols-1";
  if (longest > 18) return "grid-cols-1 min-[540px]:grid-cols-2";
  return "grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-3";
}

function Check({ className, on }: { className?: string; on?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-on={on === undefined ? undefined : on ? "true" : "false"}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.2 8.2 6.3 11.2 12.8 4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow({ direction }: { direction: "back" | "forward" }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path
        d={direction === "back" ? "M10 3.5 5.5 8 10 12.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VeloraMark() {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-velora-burgundy text-velora-burgundy">
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" aria-hidden="true">
        <path
          d="M8 2.8c1.7 1.6 2.6 3 2.6 4.5A2.6 2.6 0 1 1 5.4 7.3C5.4 5.8 6.3 4.4 8 2.8Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function useDoneCue(done: boolean) {
  const previous = useRef(done);
  const [cue, setCue] = useState(0);
  if (previous.current !== done) {
    previous.current = done;
    if (done) setCue((value) => value + 1);
  }
  return cue;
}

function StepMark({ status }: { status: StepStatus }) {
  const cue = useDoneCue(status === "done");
  return (
    <span className="velora-step-mark" data-status={status}>
      {status === "done" ? <Check key={cue} className={cue > 0 ? "velora-check-in size-3" : "size-3"} /> : null}
    </span>
  );
}

function StepLine({ state }: { state: "done" | "upcoming" }) {
  const cue = useDoneCue(state === "done");
  return (
    <span className="velora-step-line" data-state={state} data-fill={cue > 0 && state === "done" ? "true" : undefined} />
  );
}

function statusFor(index: number, current: number, completeCurrent = false): StepStatus {
  if (index < current || (completeCurrent && index === current)) return "done";
  if (index === current) return "current";
  return "upcoming";
}

function SidebarStep({
  title,
  detail,
  status,
  showLine,
  lineState,
  subtle,
}: {
  title: string;
  detail: string;
  status: StepStatus;
  showLine: boolean;
  lineState?: "done" | "upcoming";
  subtle?: boolean;
}) {
  return (
    <li className="grid grid-cols-[1.375rem_1fr] gap-x-3.5" aria-current={status === "current" ? "step" : undefined}>
      <div className="flex flex-col items-center">
        <StepMark status={status} />
        {showLine ? <StepLine state={lineState ?? "upcoming"} /> : null}
      </div>
      <div className={showLine ? "pb-5" : ""}>
        <p
          className={`text-[15px] leading-5 tracking-[-0.011em] ${
            subtle
              ? "font-medium text-velora-text/70"
              : status === "upcoming"
                ? "font-normal velora-muted"
                : "font-medium text-velora-text"
          }`}
        >
          {title}
        </p>
        <p className={`mt-1 text-[13px] leading-relaxed ${subtle ? "text-velora-text-muted" : "velora-muted"}`}>{detail}</p>
      </div>
    </li>
  );
}

function isSummaryKey(key: string) {
  return (
    key === "goal-summary" ||
    key === "experience-summary" ||
    key === "health-intro" ||
    key === "health-summary"
  );
}

export default function VeloraFormPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [aboutViewIndex, setAboutViewIndex] = useState(0);
  const [showGoalSummary, setShowGoalSummary] = useState(false);
  const [showExperienceSummary, setShowExperienceSummary] = useState(false);
  const [showHealthIntro, setShowHealthIntro] = useState(false);
  const [showHealthSummary, setShowHealthSummary] = useState(false);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [booking, setBooking] = useState<BookingSlot | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const advanceTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    };
  }, []);
  const step = steps[stepIndex];
  const isRecommendation = Boolean(step.recommendation);
  const recommendationDone = isRecommendation && booking !== null;
  const questions = step.questions ?? [];
  const currentQuestion = questions[questionIndex];
  const atStart =
    stepIndex === 0 && questionIndex === 0 && !showGoalSummary && !showExperienceSummary && !showHealthIntro && !showHealthSummary;
  const goalStepIndex = steps.findIndex((item) => item.title === "Ditt mål");
  const goalQuestionIndex = questionIndexByTitle(goalStepIndex, GOAL_QUESTION_TITLE);
  const barrierQuestionIndex = questionIndexByTitle(goalStepIndex, BARRIER_QUESTION_TITLE);
  const experienceStepIndex = steps.findIndex((item) => item.title === "Din erfarenhet");
  const triedQuestionIndex = questionIndexById(experienceStepIndex, TRIED_QUESTION_ID);
  const outcomeQuestionIndex = questionIndexById(experienceStepIndex, OUTCOME_QUESTION_ID);
  const missingQuestionIndex = questionIndexById(experienceStepIndex, MISSING_QUESTION_ID);
  const goalAnswer = goalQuestionIndex >= 0 ? readSingle(answers[answerKey(goalStepIndex, goalQuestionIndex)]) : undefined;
  const barrierAnswer = barrierQuestionIndex >= 0 ? readSingle(answers[answerKey(goalStepIndex, barrierQuestionIndex)]) : undefined;
  const goalSummary = buildGoalSummary(goalAnswer, barrierAnswer);
  const triedAnswers = triedQuestionIndex >= 0 ? readList(answers[answerKey(experienceStepIndex, triedQuestionIndex)]) : [];
  const outcomeAnswer = outcomeQuestionIndex >= 0 ? readSingle(answers[answerKey(experienceStepIndex, outcomeQuestionIndex)]) : undefined;
  const missingAnswer = missingQuestionIndex >= 0 ? readSingle(answers[answerKey(experienceStepIndex, missingQuestionIndex)]) : undefined;
  const experienceSummary = buildExperienceSummary({
    tried: triedAnswers,
    outcome: outcomeAnswer,
    missing: missingAnswer,
  });
  const neverTried = triedAnswers.includes(NEVER_TRIED) || outcomeAnswer === NEVER_TRIED;
  const questionTitle =
    currentQuestion?.id === MISSING_QUESTION_ID ? experienceMissingTitle(neverTried) : currentQuestion?.title;
  const visibleQuestions = visibleQuestionIndexes(stepIndex, answers);
  const sectionQuestionCurrent = visibleQuestions.indexOf(questionIndex) + 1;
  const sectionQuestionTotal = visibleQuestions.length;
  const storedAnswer = answers[answerKey(stepIndex, questionIndex)];
  const showMultiContinue =
    Boolean(currentQuestion?.multi) &&
    readList(storedAnswer).length > 0 &&
    !showGoalSummary &&
    !showExperienceSummary &&
    !showHealthIntro &&
    !showHealthSummary &&
    !step.recommendation;
  const aboutView = step.title === "Om dig" ? aboutViews[aboutViewIndex] : undefined;
  const aboutValues = Object.fromEntries(
    (aboutView?.fields ?? []).map((field) => [field.id, readSingle(answers[aboutAnswerKey(field.id)])]),
  );
  const showAboutContinue = Boolean(aboutView && aboutViewIsComplete(aboutView, aboutValues));

  function clearAdvance() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function goForward(answerMap: Record<string, AnswerValue>) {
    for (let index = questionIndex + 1; index < questions.length; index++) {
      if (!questionIsSkipped(stepIndex, index, answerMap)) {
        setQuestionIndex(index);
        return;
      }
    }

    if (step.title === "Ditt mål") {
      setShowGoalSummary(true);
      return;
    }

    if (step.title === "Din erfarenhet") {
      setShowExperienceSummary(true);
      return;
    }

    if (step.title === "Din hälsa") {
      setShowHealthSummary(true);
      return;
    }

    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
      setQuestionIndex(0);
    }
  }

  function selectOption(value: string) {
    const nextAnswers = { ...answers, [answerKey(stepIndex, questionIndex)]: value };
    setAnswers(nextAnswers);
    clearAdvance();
    if (reducedMotion) {
      goForward(nextAnswers);
      return;
    }
    advanceTimer.current = window.setTimeout(() => {
      advanceTimer.current = null;
      goForward(nextAnswers);
    }, MOTION_FAST_MS);
  }

  function toggleOption(value: string) {
    const key = answerKey(stepIndex, questionIndex);
    const previous = readList(answers[key]);
    const nextValues = toggleTried(previous, value);
    const nextAnswers = { ...answers, [key]: nextValues };
    const leftNever = previous.includes(NEVER_TRIED) || nextValues.includes(NEVER_TRIED);
    if (leftNever && outcomeQuestionIndex >= 0) delete nextAnswers[answerKey(stepIndex, outcomeQuestionIndex)];
    setAnswers(nextAnswers);
  }

  function setAboutAnswer(id: AboutField["id"], value: string) {
    setAnswers({ ...answers, [aboutAnswerKey(id)]: value });
  }

  function continueAbout() {
    if (aboutViewIndex < aboutViews.length - 1) {
      setAboutViewIndex(aboutViewIndex + 1);
      return;
    }
    continueForward();
  }

  function openStep(nextIndex: number) {
    setShowGoalSummary(false);
    setShowExperienceSummary(false);
    setShowHealthIntro(false);
    setShowHealthSummary(false);
    setAboutViewIndex(0);
    setStepIndex(nextIndex);
    setQuestionIndex(0);
    if (steps[nextIndex]?.title === "Din hälsa") setShowHealthIntro(true);
  }

  function continueFromHealthIntro() {
    setShowHealthIntro(false);
    setQuestionIndex(0);
  }

  function continueForward() {
    if (stepIndex < steps.length - 1) openStep(stepIndex + 1);
  }

  function leaveToPreviousStep() {
    if (stepIndex === 0) return;
    const previousIndex = stepIndex - 1;
    const previousStep = steps[previousIndex];
    const previousQuestions = previousStep.questions;
    setShowGoalSummary(false);
    setShowExperienceSummary(false);
    setShowHealthIntro(false);
    setShowHealthSummary(false);
    setStepIndex(previousIndex);
    setQuestionIndex(previousQuestions ? previousQuestions.length - 1 : 0);
    if (previousStep.title === "Om dig") setAboutViewIndex(aboutViews.length - 1);
    if (previousStep.title === "Ditt mål") setShowGoalSummary(true);
    if (previousStep.title === "Din erfarenhet") setShowExperienceSummary(true);
    if (previousStep.title === "Din hälsa") setShowHealthSummary(true);
  }

  function goBack() {
    clearAdvance();

    if (isRecommendation && booking) {
      setBooking(null);
      return;
    }

    if (showHealthSummary) {
      setShowHealthSummary(false);
      const lastIndex = (step.questions?.length ?? 0) - 1;
      if (lastIndex >= 0) setQuestionIndex(lastIndex);
      else setShowHealthIntro(true);
      return;
    }

    if (showHealthIntro) {
      leaveToPreviousStep();
      return;
    }

    if (showExperienceSummary) {
      setShowExperienceSummary(false);
      return;
    }

    if (showGoalSummary) {
      setShowGoalSummary(false);
      return;
    }

    if (step.title === "Om dig") {
      if (aboutViewIndex > 0) {
        setAboutViewIndex(aboutViewIndex - 1);
        return;
      }
      leaveToPreviousStep();
      return;
    }

    for (let index = questionIndex - 1; index >= 0; index--) {
      if (!questionIsSkipped(stepIndex, index, answers)) {
        setQuestionIndex(index);
        return;
      }
    }

    if (step.title === "Din hälsa") {
      setShowHealthIntro(true);
      return;
    }

    leaveToPreviousStep();
  }

  const primaryAction = showGoalSummary
    ? { label: goalSummaryCta, onClick: continueForward }
    : showExperienceSummary
      ? { label: experienceSummaryCta, onClick: continueForward }
      : showHealthIntro
        ? { label: healthIntroCta, onClick: continueFromHealthIntro }
        : showHealthSummary
          ? { label: healthSummaryCta, onClick: continueForward }
          : showAboutContinue
            ? { label: "Fortsätt", onClick: continueAbout }
          : showMultiContinue
            ? { label: "Fortsätt", onClick: () => goForward(answers) }
            : null;

  const screenKey = showGoalSummary
    ? "goal-summary"
    : showExperienceSummary
      ? "experience-summary"
      : showHealthIntro
        ? "health-intro"
        : showHealthSummary
          ? "health-summary"
          : aboutView
            ? "about"
            : isRecommendation
              ? "recommendation"
              : `question-${stepIndex}-${questionIndex}`;

  let progress: ReactNode = null;
  let body: ReactNode = null;

  if (showGoalSummary) {
    body = (
      <PersonalizedSummary eyebrow={goalSummaryEyebrow} headline={goalSummary.headline} paragraphs={goalSummary.paragraphs}>
        <SocialProof quote={socialProof.goal.quote} attribution={socialProof.goal.attribution} />
      </PersonalizedSummary>
    );
  } else if (showExperienceSummary) {
    body = (
      <PersonalizedSummary
        eyebrow={experienceSummaryEyebrow}
        headline={experienceSummary.headline}
        paragraphs={experienceSummary.paragraphs}
      >
        <SocialProof quote={socialProof.experience.quote} attribution={socialProof.experience.attribution} />
      </PersonalizedSummary>
    );
  } else if (showHealthIntro) {
    body = (
      <PersonalizedSummary
        eyebrow={healthIntroEyebrow}
        headline={healthIntroHeadline}
        paragraphs={healthIntroParagraphs}
        note={healthIntroNote}
      />
    );
  } else if (showHealthSummary) {
    body = (
      <PersonalizedSummary
        eyebrow={healthSummaryEyebrow}
        headline={healthSummaryHeadline}
        paragraphs={healthSummaryParagraphs}
      />
    );
  } else if (aboutView) {
    body = (
      <AboutYou
        section={step.title}
        view={aboutView}
        viewIndex={aboutViewIndex}
        viewCount={aboutViews.length}
        values={aboutValues}
        onChange={setAboutAnswer}
      />
    );
  } else if (isRecommendation) {
    body = (
      <Recommendation goal={goalAnswer} tried={triedAnswers} missing={missingAnswer} booking={booking} onBook={setBooking} />
    );
  } else if (currentQuestion) {
    progress =
      sectionQuestionCurrent >= 1 ? (
        <SectionProgress section={step.title} current={sectionQuestionCurrent} total={sectionQuestionTotal} />
      ) : null;
    body = (
      <>
        <p className="sr-only" aria-live="polite">
          {step.title}. Fråga {sectionQuestionCurrent} av {sectionQuestionTotal}. {questionTitle}
        </p>
        <h2
          id="velora-question"
          className="text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.032em] text-balance"
        >
          {questionTitle}
        </h2>
        <p className="mt-4 max-w-[38ch] text-[15px] leading-relaxed velora-muted">
          {currentQuestion.supporting ?? step.description}
        </p>
        <div role="group" aria-labelledby="velora-question" className={`mt-8 grid gap-3 ${optionGrid(currentQuestion.options)}`}>
          {currentQuestion.options.map((option) => {
            const value = optionValue(option);
            const selected = Array.isArray(storedAnswer) ? storedAnswer.includes(value) : storedAnswer === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={selected}
                onClick={() => (currentQuestion.multi ? toggleOption(value) : selectOption(value))}
                className="velora-option"
              >
                <span>{optionLabel(option)}</span>
                <span className="velora-option-mark">
                  <Check className="velora-option-check size-3" on={selected} />
                </span>
              </button>
            );
          })}
        </div>
      </>
    );
  }

  const transition = useScreenTransition(screenKey, body);
  const actionRef = useRef(primaryAction);
  if (transition.visibleKey === screenKey) actionRef.current = primaryAction;
  const shownAction = transition.visibleKey === screenKey ? primaryAction : actionRef.current;

  return (
    <div lang="sv" className="flex min-h-dvh w-full flex-1 flex-col bg-velora-ivory text-velora-text lg:flex-row">
      <h1 className="sr-only lg:hidden">Din personliga bedömning</h1>

      <header className="border-b border-velora-border px-6 pt-[max(1.35rem,env(safe-area-inset-top))] pb-4 sm:px-10 lg:hidden">
        <div className="flex items-center gap-2.5">
          <img src="/assets/velora.svg" alt="Velora Health logo" className="h-6 w-auto" />
        </div>
        <p className="mt-5 text-[13px] leading-5 tracking-[-0.011em] velora-muted">
          <span className="text-velora-text">Steg {stepIndex + 1} av {steps.length}</span>
          <span aria-hidden="true"> · </span>
          {step.title}
        </p>
        <div className="velora-progress mt-3" aria-hidden="true">
          {steps.map((item, index) => (
            <span
              key={item.title}
              data-state={
                index < stepIndex || (recommendationDone && index === stepIndex)
                  ? "done"
                  : index === stepIndex
                    ? "current"
                    : "upcoming"
              }
            />
          ))}
        </div>
      </header>

      <aside className="hidden w-[clamp(300px,32vw,420px)] shrink-0 flex-col bg-velora-blush px-8 py-10 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:overflow-y-auto xl:px-10 xl:py-12">
        <div className="flex items-center gap-2.5">
          <img src="/assets/velora.svg" alt="Velora Health logo" className="h-6 w-auto" />
        </div>

        <h1 className="mt-12 text-[1.85rem] font-medium leading-[1.15] tracking-[-0.03em] text-balance">
          Din personliga bedömning
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed velora-muted">
          Svara på några frågor så hjälper vi dig förstå vilket nästa steg som kan passa dig.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed velora-muted">
          Det tar bara ungefär 3 minuter
        </p>
   

        <ol className="mt-11" aria-label="Bedömningens steg">
          {prefaceSteps.map((item) => (
            <SidebarStep
              key={item.title}
              title={item.title}
              detail={item.detail}
              status="done"
              showLine
              lineState="done"
              subtle
            />
          ))}
          {steps.map((item, index) => {
            const status = statusFor(index, stepIndex, recommendationDone);
            return (
              <SidebarStep
                key={item.title}
                title={item.title}
                detail={item.detail}
                status={status}
                showLine={index < steps.length - 1}
                lineState={index < stepIndex ? "done" : "upcoming"}
              />
            );
          })}
        </ol>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col px-6 py-10 sm:px-10 lg:min-h-dvh lg:px-16 lg:py-16 xl:px-20">
        <div className={`flex w-full min-w-0 max-w-[40rem] flex-col ${isRecommendation ? "" : "lg:flex-1"}`}>
          <div className={isRecommendation ? undefined : "lg:flex-1"}>
            <TransitionFrame transitionKey={screenKey} transition={transition} progress={progress}>
              {transition.shown}
            </TransitionFrame>
          </div>

          <div
            className={`velora-chrome mt-12 flex items-start justify-between gap-4 pb-[max(0.25rem,env(safe-area-inset-bottom))] ${
              isRecommendation ? "" : "lg:mt-auto lg:pt-12"
            }`}
            data-phase={transition.leaving ? "out" : "in"}
          >
            <button type="button" onClick={goBack} disabled={atStart} className="velora-btn-back">
              <Arrow direction="back" />
              Tillbaka
            </button>
            {shownAction ? (
              shownAction.onClick ? (
                <button
                  key={transition.visibleKey}
                  type="button"
                  onClick={shownAction.onClick}
                  data-phase={transition.leaving ? "out" : "in"}
                  data-animate={transition.animate ? "true" : undefined}
                  data-social={
                    transition.visibleKey === "goal-summary" || transition.visibleKey === "experience-summary"
                      ? "true"
                      : undefined
                  }
                  className={`velora-btn cursor-pointer${isSummaryKey(transition.visibleKey) ? " velora-reveal-cta" : ""}`}
                >
                  {shownAction.label}
                  <Arrow direction="forward" />
                </button>
              ) : (
                <span className="velora-btn">
                  {shownAction.label}
                  <Arrow direction="forward" />
                </span>
              )
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
