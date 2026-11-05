import Image from "next/image";
import type { CSSProperties } from "react";
import logo from "@/app/icon.png";
import profilePicture from "@/assets/devember/profilepicture.png";
import insynskollenIcon from "@/assets/insynskollen/icon.png";
import kudooIcon from "@/assets/kudoo/icon.png";
import kudooFunnel from "@/assets/kudoo/analytics-funnel.png";
import kudooStorePoints from "@/assets/kudoo/kudoo-store-points.png";
import kudooStoreScan from "@/assets/kudoo/kudoo-store-scan.png";
import kudooStoreMeal from "@/assets/kudoo/kudoo-store-meal.png";
import kudooStoreProgress from "@/assets/kudoo/kudoo-store-progress.png";
import primeIcon from "@/assets/prime/icon.png";
import { projects, site } from "@/lib/content";

const links = {
  insynskollenApp: projects[0].stores[0].href,
  insynskollenPlay: projects[0].stores[1].href,
  kudooApp: projects[1].stores[0].href,
  primeApp: projects[2].stores[0].href,
  linkedin: site.footer.links[0].href,
};

export function DesktopLanding() {
  return (
    <div className="dv-base" style={{ minHeight: "100%" }} data-spec="start:e002">
      <header className="dv-header" data-spec="start:e003">
        <div className="dv-container dv-header__inner">
          <a className="dv-logo" href="#top" aria-label="Devember, till toppen" data-spec="start:e005">
            <Image src={logo} alt="" width={31} height={28} data-spec="start:e006" />
            <span className="dv-wordmark" data-spec="start:e007">
              Devember
            </span>
          </a>
          <nav aria-label="Huvudmeny">
            <ul className="dv-nav">
              <li>
                <a href="#apps" data-spec="start:e011">
                  Apps
                </a>
              </li>
              <li>
                <a href="#about" data-spec="start:e013">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-spec="start:e015">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="top">
        <section style={{ padding: "112px 0 64px" }}>
          <div className="dv-container" style={{ display: "grid", gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)", gap: "64px", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <p className="dv-meta" data-spec="start:e020">
                Devember · one-person app studio
              </p>
              <h1 className="dv-display" data-spec="start:e021">
                Built. Shipped. Measured.
              </h1>
              <p className="dv-lead" data-spec="start:e022">
                I build apps, put them in front of real users early and let the data decide what comes next.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a className="dv-btn" href={`mailto:${site.footer.email}`} data-spec="start:e024">
                  Email me{" "}
                  <span className="dv-arrow" aria-hidden="true" data-spec="start:e025">
                    →
                  </span>
                </a>
                <a className="dv-btn dv-btn--quiet" href="#apps" data-spec="start:e026">
                  See the apps{" "}
                  <span className="dv-arrow" aria-hidden="true" data-spec="start:e027">
                    →
                  </span>
                </a>
              </div>
            </div>
            <dl className="dv-stats" style={{ gridTemplateColumns: "minmax(0, 1fr)", gap: "28px", margin: "0" }}>
              <div className="dv-stat">
                <dd className="dv-stat__value" style={{ margin: "0" }} data-spec="start:e030">
                  35+
                </dd>
                <dt className="dv-stat__label" data-spec="start:e031">
                  paying users, Insynskollen
                </dt>
                <dd className="dv-stat__source" style={{ margin: "0" }} data-spec="start:e032">
                  RevenueCat · [MÅNAD ÅR] · platshållare
                </dd>
              </div>
              <div className="dv-stat">
                <dd className="dv-stat__value" style={{ margin: "0" }} data-spec="start:e034">
                  3
                </dd>
                <dt className="dv-stat__label" data-spec="start:e035">
                  apps live in the App Store
                </dt>
                <dd className="dv-stat__source" style={{ margin: "0" }} data-spec="start:e036">
                  App Store · [MÅNAD ÅR]
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section style={{ padding: "64px 0" }} id="apps">
          <div className="dv-container">
            <div className="dv-sechead">
              <p className="dv-meta" data-spec="start:e040">
                01 · Apps · Featured
              </p>
              <h2 className="dv-h1" data-spec="start:e041">
                Kudoo WeightLoss
              </h2>
              <p className="dv-lead" data-spec="start:e042">
                Makes weight loss simpler with a points system, daily step goals and AI food scanning.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)", gap: "24px", alignItems: "stretch" }}>
              <div className="dv-card" style={{ padding: "32px", gap: "24px", justifyContent: "space-between" }} data-spec="start:e044">
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <Image className="dv-app__icon" src={kudooIcon} alt="" width={64} height={64} data-spec="start:e046" />
                  <span className="dv-badge dv-badge--moss" data-spec="start:e047">
                    Live
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p className="dv-meta" data-spec="start:e049">
                    What I learned
                  </p>
                  <p className="dv-body" data-spec="start:e050">
                    Most people get through onboarding, but only 6 of the 52 who create an account start a trial. That last step loses the most, so that is where I look first.
                  </p>
                </div>
                <ul className="dv-app__stack">
                  <li data-spec="start:e052">
                    React Native
                  </li>
                  <li data-spec="start:e053">
                    Firebase
                  </li>
                  <li data-spec="start:e054">
                    HealthKit
                  </li>
                  <li data-spec="start:e055">
                    RevenueCat
                  </li>
                </ul>
                <div className="dv-app__links">
                  <a className="dv-store" href={links.kudooApp} data-spec="start:e057" target="_blank" rel="noreferrer">
                    App Store{" "}
                    <span className="dv-arrow" aria-hidden="true" data-spec="start:e058">
                      →
                    </span>
                  </a>
                </div>
              </div>
              <figure className="dv-media">
                <div className="dv-media__frame" style={{ aspectRatio: "auto", height: "100%", minHeight: "420px" }} data-spec="start:e062">
                  <Image src={kudooFunnel} alt="Mixpanel onboarding funnel for Kudoo: 116 users opened onboarding, 94 finished, 52 created an account and 6 started a trial" width={1600} height={1050} />
                </div>
                <figcaption className="dv-media__cap" data-spec="start:e064">
                  Onboarding funnel, Kudoo. Mixpanel, last 30 days to November 2026.
                </figcaption>
              </figure>
            </div>
            <div className="dv-shots" style={{ marginTop: "24px" }}>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "220px" }}>
                <div className="dv-media__frame" data-spec="start:e067">
                  <Image src={kudooStorePoints} alt="Kudoo screenshot, simple daily points" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "220px" }}>
                <div className="dv-media__frame" data-spec="start:e070">
                  <Image src={kudooStoreScan} alt="Kudoo screenshot, snap a photo of your food" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "220px" }}>
                <div className="dv-media__frame" data-spec="start:e073">
                  <Image src={kudooStoreMeal} alt="Kudoo screenshot, points for a meal" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "220px" }}>
                <div className="dv-media__frame" data-spec="start:e076">
                  <Image src={kudooStoreProgress} alt="Kudoo screenshot, weekly progress" width={660} height={1434} />
                </div>
              </figure>
            </div>
          </div>
        </section>
        <section style={{ padding: "64px 0" }}>
          <div className="dv-container">
            <div className="dv-sechead">
              <p className="dv-meta" data-spec="start:e081">
                02 · More apps
              </p>
              <h2 className="dv-h2" data-spec="start:e082">
                Two more in the App Store.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px" }}>
              <article className="dv-app" data-spec="start:e084">
                <div className="dv-app__head">
                  <Image className="dv-app__icon" src={insynskollenIcon} alt="" width={64} height={64} data-spec="start:e086" />
                  <h3 className="dv-h3" data-spec="start:e087">
                    Insynskollen
                  </h3>
                </div>
                <p className="dv-body dv-muted" data-spec="start:e088">
                  Insider trading on the Swedish stock market, easier to follow. AI summaries and push notifications.
                </p>
                <ul className="dv-app__stack">
                  <li data-spec="start:e090">
                    Firebase
                  </li>
                  <li data-spec="start:e091">
                    React Native
                  </li>
                  <li data-spec="start:e092">
                    ChatGPT
                  </li>
                  <li>
                    Puppeteer
                  </li>
                </ul>
                <div className="dv-app__links">
                  <a className="dv-store" href={links.insynskollenApp} data-spec="start:e094" target="_blank" rel="noreferrer">
                    App Store{" "}
                    <span className="dv-arrow" aria-hidden="true" data-spec="start:e095">
                      →
                    </span>
                  </a>
                  <a className="dv-store" href={links.insynskollenPlay} target="_blank" rel="noreferrer">
                    Google Play{" "}
                    <span className="dv-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </article>
              <article className="dv-app" data-spec="start:e096">
                <div className="dv-app__head">
                  <Image className="dv-app__icon" src={primeIcon} alt="" width={64} height={64} data-spec="start:e098" />
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                    <span className="dv-badge" data-spec="start:e100">
                      First app shipped
                    </span>
                    <h3 className="dv-h3" data-spec="start:e101">
                      Prime Quiz
                    </h3>
                  </div>
                </div>
                <p className="dv-body dv-muted" data-spec="start:e102">
                  A quiz game, and the first app I took all the way to the App Store.
                </p>
                <ul className="dv-app__stack">
                  <li data-spec="start:e104">
                    React Native
                  </li>
                  <li data-spec="start:e105">
                    Firebase
                  </li>
                </ul>
                <div className="dv-app__links">
                  <a className="dv-store" href={links.primeApp} data-spec="start:e107" target="_blank" rel="noreferrer">
                    App Store{" "}
                    <span className="dv-arrow" aria-hidden="true" data-spec="start:e108">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section style={{ padding: "64px 0" }}>
          <div className="dv-container">
            <div className="dv-sechead">
              <p className="dv-meta" data-spec="start:e112">
                03 · How I work
              </p>
              <h2 className="dv-h2" data-spec="start:e113">
                Real behavior beats assumptions.
              </h2>
            </div>
            <ol className="dv-process">
              <li data-spec="start:e115">
                <span className="dv-process__name" data-spec="start:e116">
                  Build
                </span>
                <span className="dv-process__desc" data-spec="start:e117">
                  An MVP, not a plan.
                </span>
              </li>
              <li data-spec="start:e118">
                <span className="dv-process__name" data-spec="start:e119">
                  Ship
                </span>
                <span className="dv-process__desc" data-spec="start:e120">
                  To real users early.
                </span>
              </li>
              <li data-spec="start:e121">
                <span className="dv-process__name" data-spec="start:e122">
                  Measure
                </span>
                <span className="dv-process__desc" data-spec="start:e123">
                  Funnels and retention.
                </span>
              </li>
              <li data-spec="start:e124">
                <span className="dv-process__name" data-spec="start:e125">
                  Learn
                </span>
                <span className="dv-process__desc" data-spec="start:e126">
                  What people actually do.
                </span>
              </li>
              <li data-spec="start:e127">
                <span className="dv-process__name" data-spec="start:e128">
                  Iterate
                </span>
                <span className="dv-process__desc" data-spec="start:e129">
                  Then back to build.
                </span>
              </li>
            </ol>
            <p className="dv-process__loop" data-spec="start:e130">
              05 → 01
            </p>
            <dl className="dv-tech" style={{ marginTop: "64px" }}>
              <div className="dv-tech__group">
                <dt data-spec="start:e133">
                  AI and building
                </dt>
                <dd>
                  <span className="dv-tech__item" data-spec="start:e135">
                    Claude
                  </span>
                  <span className="dv-tech__item" data-spec="start:e136">
                    ChatGPT
                  </span>
                  <span className="dv-tech__item" data-spec="start:e137">
                    Cursor
                  </span>
                </dd>
              </div>
              <div className="dv-tech__group">
                <dt data-spec="start:e139">
                  Technology
                </dt>
                <dd>
                  <span className="dv-tech__item" data-spec="start:e141">
                    Next.js
                  </span>
                  <span className="dv-tech__item" data-spec="start:e142">
                    React Native
                  </span>
                  <span className="dv-tech__item" data-spec="start:e143">
                    TypeScript
                  </span>
                </dd>
              </div>
              <div className="dv-tech__group">
                <dt data-spec="start:e145">
                  Product and shipping
                </dt>
                <dd>
                  <span className="dv-tech__item" data-spec="start:e147">
                    Expo
                  </span>
                  <span className="dv-tech__item" data-spec="start:e148">
                    RevenueCat
                  </span>
                  <span className="dv-tech__item" data-spec="start:e149">
                    Mixpanel
                  </span>
                </dd>
              </div>
              <div className="dv-tech__group">
                <dt data-spec="start:e151">
                  Design and workflow
                </dt>
                <dd>
                  <span className="dv-tech__item" data-spec="start:e153">
                    Figma
                  </span>
                  <span className="dv-tech__item" data-spec="start:e154">
                    Linear
                  </span>
                  <span className="dv-tech__item" data-spec="start:e155">
                    GitHub
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section style={{ padding: "64px 0 96px" }} id="about">
          <div className="dv-container">
            <div className="dv-deep" style={{ padding: "56px", display: "grid", gridTemplateColumns: "minmax(0, 3fr) minmax(0, 7fr)", gap: "48px", alignItems: "center" }} id="contact" data-spec="start:e158">
              <figure className="dv-media dv-media--portrait">
                <div className="dv-media__frame" data-spec="start:e160">
                  <Image src={profilePicture} alt="Viktor, the developer behind Devember" width={697} height={870} />
                </div>
              </figure>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p className="dv-meta" data-spec="start:e163">
                  04 · About and contact
                </p>
                <h2 className="dv-h1" data-spec="start:e164">
                  I&apos;m Viktor. Want to talk?
                </h2>
                <p className="dv-lead" data-spec="start:e165">
                  I&apos;m a trained frontend developer and have built mobile apps since 2023. I work AI-first, in Claude Code. Devember is where I build my own ideas, so send an idea, a question or something you want built.
                </p>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", margin: 0, padding: 0 }}>
                  <li className="dv-tech__item">Trained frontend developer</li>
                  <li className="dv-tech__item">Mobile apps since 2023</li>
                  <li className="dv-tech__item">AI-first · Claude Code</li>
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a className="dv-btn" href={`mailto:${site.footer.email}`} data-spec="start:e167">
                    Email me{" "}
                    <span className="dv-arrow" aria-hidden="true" data-spec="start:e168">
                      →
                    </span>
                  </a>
                  <a className="dv-btn dv-btn--soft" href={links.linkedin} data-spec="start:e169" target="_blank" rel="noreferrer">
                    LinkedIn{" "}
                    <span className="dv-arrow" aria-hidden="true" data-spec="start:e170">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="dv-footer">
        <div className="dv-container dv-footer__inner">
          <span data-spec="start:e173">
            Devember AB · Sweden
          </span>
          <span data-spec="start:e174">
            © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}

export function MobileLanding() {
  return (
    <div className="dv-base" style={{ minHeight: "100%" }} data-spec="start:e176">
      <header className="dv-header" data-spec="start:e177">
        <div className="dv-container dv-header__inner">
          <a className="dv-logo" href="#top-m" aria-label="Devember, till toppen" data-spec="start:e179">
            <Image src={logo} alt="" width={31} height={28} data-spec="start:e180" />
            <span className="dv-wordmark" data-spec="start:e181">
              Devember
            </span>
          </a>
          <button className="dv-iconbtn" type="button" aria-label="Öppna meny" aria-expanded="false" data-spec="start:e182">
            <svg className="dv-icon dv-icon--sm" viewBox="0 0 24 24" aria-hidden="true" data-spec="start:e183">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>
      <main id="top-m">
        <section style={{ padding: "48px 0 56px" }}>
          <div className="dv-container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p className="dv-meta" data-spec="start:e187">
              Devember · one-person app studio
            </p>
            <h1 className="dv-display" data-spec="start:e188">
              Built. Shipped. Measured.
            </h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
              <div className="dv-stat">
                <span className="dv-stat__value" data-spec="start:e191">
                  35+
                </span>
                <span className="dv-stat__label" data-spec="start:e192">
                  paying users
                </span>
                <span className="dv-stat__source" data-spec="start:e193">
                  Insynskollen · [MÅNAD ÅR]
                </span>
              </div>
              <div className="dv-stat">
                <span className="dv-stat__value" data-spec="start:e195">
                  3
                </span>
                <span className="dv-stat__label" data-spec="start:e196">
                  apps live
                </span>
                <span className="dv-stat__source" data-spec="start:e197">
                  App Store · [MÅNAD ÅR]
                </span>
              </div>
            </div>
            <p className="dv-body dv-muted" data-spec="start:e198">
              I build apps, put them in front of real users early and let the data decide what comes next.
            </p>
            <a className="dv-btn dv-btn--block" href={`mailto:${site.footer.email}`} data-spec="start:e199">
              Email me{" "}
              <span className="dv-arrow" aria-hidden="true" data-spec="start:e200">
                →
              </span>
            </a>
          </div>
        </section>
        <section style={{ padding: "56px 0" }} id="apps-m">
          <div className="dv-container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="dv-meta" data-spec="start:e203">
              01 · Apps · Featured
            </p>
            <div className="dv-app__head">
              <Image className="dv-app__icon" src={kudooIcon} alt="" width={64} height={64} data-spec="start:e205" />
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                <span className="dv-badge dv-badge--moss" data-spec="start:e207">
                  Live
                </span>
                <h2 className="dv-h2" data-spec="start:e208">
                  Kudoo WeightLoss
                </h2>
              </div>
            </div>
            <p className="dv-body dv-muted" data-spec="start:e209">
              Makes weight loss simpler with a points system, daily step goals and AI food scanning.
            </p>
            <div className="dv-shots" style={{ margin: "0 -16px", padding: "0 16px 8px" }}>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "156px" }}>
                <div className="dv-media__frame" data-spec="start:e212">
                  <Image src={kudooStorePoints} alt="Kudoo screenshot, simple daily points" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "156px" }}>
                <div className="dv-media__frame" data-spec="start:e215">
                  <Image src={kudooStoreScan} alt="Kudoo screenshot, snap a photo of your food" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "156px" }}>
                <div className="dv-media__frame" data-spec="start:e218">
                  <Image src={kudooStoreMeal} alt="Kudoo screenshot, points for a meal" width={660} height={1434} />
                </div>
              </figure>
              <figure className="dv-media dv-media--phone" style={{ flexBasis: "156px" }}>
                <div className="dv-media__frame" data-spec="start:e221">
                  <Image src={kudooStoreProgress} alt="Kudoo screenshot, weekly progress" width={660} height={1434} />
                </div>
              </figure>
            </div>
            <figure className="dv-media">
              <div className="dv-media__frame" style={{ "--ratio": "4 / 3" } as CSSProperties} data-spec="start:e224">
                <Image src={kudooFunnel} alt="Mixpanel onboarding funnel for Kudoo: 116 users opened onboarding, 94 finished, 52 created an account and 6 started a trial" width={1600} height={1050} />
              </div>
              <figcaption className="dv-media__cap" data-spec="start:e226">
                Onboarding funnel, Kudoo. Mixpanel, 30 days to Nov 2026.
              </figcaption>
            </figure>
            <div className="dv-card" style={{ padding: "20px", gap: "8px" }} data-spec="start:e227">
              <p className="dv-meta" data-spec="start:e228">
                What I learned
              </p>
              <p className="dv-body" data-spec="start:e229">
                Most people get through onboarding, but only 6 of the 52 who create an account start a trial. That last step loses the most, so that is where I look first.
              </p>
            </div>
            <ul className="dv-app__stack">
              <li data-spec="start:e231">
                React Native
              </li>
              <li data-spec="start:e232">
                Firebase
              </li>
              <li data-spec="start:e233">
                HealthKit
              </li>
              <li data-spec="start:e234">
                RevenueCat
              </li>
            </ul>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "8px" }}>
              <a className="dv-store" href={links.kudooApp} style={{ justifyContent: "center" }} data-spec="start:e236" target="_blank" rel="noreferrer">
                App Store{" "}
                <span className="dv-arrow" aria-hidden="true" data-spec="start:e237">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
        <section style={{ padding: "56px 0" }}>
          <div className="dv-container" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p className="dv-meta" data-spec="start:e242">
              02 · More apps
            </p>
            <a className="dv-card dv-card--link" href={links.insynskollenApp} style={{ padding: "16px", flexDirection: "row", alignItems: "center", gap: "16px" }} data-spec="start:e243" target="_blank" rel="noreferrer">
              <Image className="dv-app__icon" src={insynskollenIcon} alt="" width={56} height={56} style={{ width: "56px", height: "56px" }} data-spec="start:e244" />
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1", minWidth: "0" }}>
                <span className="dv-h3" style={{ fontSize: "20px" }} data-spec="start:e246">
                  Insynskollen
                </span>
                <span className="dv-small" data-spec="start:e247">
                  Insider trades, AI summaries, alerts
                </span>
              </span>
              <span className="dv-arrow" aria-hidden="true" style={{ color: "var(--ember-ink)" }} data-spec="start:e248">
                →
              </span>
            </a>
            <a className="dv-card dv-card--link" href={links.primeApp} style={{ padding: "16px", flexDirection: "row", alignItems: "center", gap: "16px" }} data-spec="start:e249" target="_blank" rel="noreferrer">
              <Image className="dv-app__icon" src={primeIcon} alt="" width={56} height={56} style={{ width: "56px", height: "56px" }} data-spec="start:e250" />
              <span style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1", minWidth: "0" }}>
                <span className="dv-h3" style={{ fontSize: "20px" }} data-spec="start:e252">
                  Prime Quiz
                </span>
                <span className="dv-small" data-spec="start:e253">
                  My first app in the App Store
                </span>
              </span>
              <span className="dv-arrow" aria-hidden="true" style={{ color: "var(--ember-ink)" }} data-spec="start:e254">
                →
              </span>
            </a>
          </div>
        </section>
        <section style={{ padding: "56px 0" }}>
          <div className="dv-container">
            <div className="dv-sechead" style={{ marginBottom: "24px" }}>
              <p className="dv-meta" data-spec="start:e258">
                03 · How I work
              </p>
              <h2 className="dv-h2" data-spec="start:e259">
                Real behavior beats assumptions.
              </h2>
            </div>
            <ol className="dv-process" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
              <li style={{ flexDirection: "row", alignItems: "baseline", gap: "16px", padding: "16px" }} data-spec="start:e261">
                <span className="dv-process__name" data-spec="start:e262">
                  Build
                </span>
                <span className="dv-small" style={{ marginLeft: "auto" }} data-spec="start:e263">
                  An MVP
                </span>
              </li>
              <li style={{ flexDirection: "row", alignItems: "baseline", gap: "16px", padding: "16px" }} data-spec="start:e264">
                <span className="dv-process__name" data-spec="start:e265">
                  Ship
                </span>
                <span className="dv-small" style={{ marginLeft: "auto" }} data-spec="start:e266">
                  Early
                </span>
              </li>
              <li style={{ flexDirection: "row", alignItems: "baseline", gap: "16px", padding: "16px" }} data-spec="start:e267">
                <span className="dv-process__name" data-spec="start:e268">
                  Measure
                </span>
                <span className="dv-small" style={{ marginLeft: "auto" }} data-spec="start:e269">
                  Mixpanel
                </span>
              </li>
              <li style={{ flexDirection: "row", alignItems: "baseline", gap: "16px", padding: "16px" }} data-spec="start:e270">
                <span className="dv-process__name" data-spec="start:e271">
                  Learn
                </span>
                <span className="dv-small" style={{ marginLeft: "auto" }} data-spec="start:e272">
                  Real use
                </span>
              </li>
              <li style={{ flexDirection: "row", alignItems: "baseline", gap: "16px", padding: "16px" }} data-spec="start:e273">
                <span className="dv-process__name" data-spec="start:e274">
                  Iterate
                </span>
                <span className="dv-small" style={{ marginLeft: "auto" }} data-spec="start:e275">
                  Repeat
                </span>
              </li>
            </ol>
            <p className="dv-small" style={{ marginTop: "24px" }} data-spec="start:e276">
              Built with React Native, Next.js, Expo, RevenueCat, Mixpanel, Claude and Cursor.
            </p>
          </div>
        </section>
        <section style={{ padding: "0 0 48px" }} id="contact-m">
          <div className="dv-container">
            <div className="dv-deep" style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: "20px" }} id="about-m" data-spec="start:e279">
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <figure className="dv-media dv-media--square" style={{ width: "72px", flex: "none" }}>
                  <div className="dv-media__frame" style={{ borderRadius: "16px" }} data-spec="start:e282">
                    <Image src={profilePicture} alt="Viktor, the developer behind Devember" width={697} height={870} />
                  </div>
                </figure>
                <p className="dv-meta" data-spec="start:e284">
                  04 · About and contact
                </p>
              </div>
              <h2 className="dv-h1" data-spec="start:e285">
                I&apos;m Viktor. Want to talk?
              </h2>
              <p className="dv-body" data-spec="start:e286">
                I&apos;m a trained frontend developer and have built mobile apps since 2023. I work AI-first, in Claude Code. Devember is where I build my own ideas, so send an idea, a question or something you want built.
              </p>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", margin: 0, padding: 0 }}>
                <li className="dv-tech__item">Trained frontend developer</li>
                <li className="dv-tech__item">Mobile apps since 2023</li>
                <li className="dv-tech__item">AI-first · Claude Code</li>
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a className="dv-btn dv-btn--block" href={`mailto:${site.footer.email}`} data-spec="start:e288">
                  Email me{" "}
                  <span className="dv-arrow" aria-hidden="true" data-spec="start:e289">
                    →
                  </span>
                </a>
                <a className="dv-btn dv-btn--soft dv-btn--block" href={links.linkedin} data-spec="start:e290" target="_blank" rel="noreferrer">
                  LinkedIn{" "}
                  <span className="dv-arrow" aria-hidden="true" data-spec="start:e291">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="dv-footer">
        <div className="dv-container dv-footer__inner">
          <span data-spec="start:e294">
            Devember AB · Sweden
          </span>
          <span data-spec="start:e295">
            © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
