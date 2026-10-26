"use client";

import Script from "next/script";
import { useEffect } from "react";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;

type Mixpanel = {
  init: (token: string, config?: Record<string, unknown>) => void;
  track: (event: string, props?: Record<string, unknown>) => void;
};
type TikTok = { track: (event: string, props?: Record<string, unknown>) => void };

declare global {
  interface Window {
    mixpanel?: Mixpanel;
    ttq?: TikTok;
  }
}

function track(event: string, props: Record<string, unknown> = {}) {
  window.mixpanel?.track(event, props);
}

export function Tracking() {
  useEffect(() => {
    // Delegate clicks so the server-rendered page needs no handlers.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const label = link.textContent?.trim() ?? "";
      if (href.includes("apps.apple.com")) {
        track("App Store Click", { label });
        window.ttq?.track("ClickButton", { content_name: label });
      } else if (href === "#download") {
        track("Download CTA Click", { label });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      {MIXPANEL_TOKEN && (
        <Script id="mixpanel-init" strategy="afterInteractive">
          {`(function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);
mixpanel.init(${JSON.stringify(MIXPANEL_TOKEN)}, {
  autocapture: true,
  record_sessions_percent: 100,
  track_pageview: true,
  persistence: "localStorage",
});`}
        </Script>
      )}
      {TIKTOK_PIXEL_ID && (
        <Script id="tiktok-pixel-init" strategy="afterInteractive">
          {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  ttq.load(${JSON.stringify(TIKTOK_PIXEL_ID)});
  ttq.page();
}(window, document, 'ttq');`}
        </Script>
      )}
    </>
  );
}
