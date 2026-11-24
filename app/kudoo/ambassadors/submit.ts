// The site is a static export on GitHub Pages, so there is no server of our own.
// Applications are posted to a hosted form endpoint that emails them to us.
// FORM_ENDPOINT and FORM_ACCESS_KEY are set once the form service is chosen.

export const FORM_ENDPOINT = "https://api.web3forms.com/submit";
export const FORM_ACCESS_KEY = process.env.NEXT_PUBLIC_AMBASSADOR_FORM_KEY ?? "";

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
