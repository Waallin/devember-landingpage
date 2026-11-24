// The site is a static export on GitHub Pages, so there is no server of our own.
// Applications are posted to a hosted form endpoint that emails them to us.
// Web3Forms form "Kudoo ambassadors" on viktor@devember.se. The access key is
// public by design (it only lets you send to that inbox), so it lives in code.

export const FORM_ENDPOINT = "https://api.web3forms.com/submit";
export const FORM_ACCESS_KEY = "c21f2d21-73e3-494c-95a3-73accd7638ea";

export type Application = {
  handle: string;
  email: string;
  country: string;
  followers: string;
  journey: string;
  consent: boolean;
};

export async function submitApplication(app: Application, botcheck: string) {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: FORM_ACCESS_KEY,
      subject: `Kudoo ambassador application: @${app.handle}`,
      from_name: "Kudoo ambassadors",
      replyto: app.email,
      botcheck,
      "TikTok handle": `@${app.handle}`,
      "TikTok profile": `https://www.tiktok.com/@${app.handle}`,
      Email: app.email,
      Country: app.country,
      Followers: app.followers || "Not given",
      Journey: app.journey || "Not given",
      "Consent to contact": app.consent ? "Yes" : "No",
    }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: boolean };
  if (!res.ok || data.success === false) throw new Error(`Form service answered ${res.status}`);
}
