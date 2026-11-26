// Frågorna till fotbollsquizet på /fbq. Varje svar är kontrollerat mot källan i `source` (läget i november 2026).
// I "Vem är spelaren?" är frågan spelarens seniorklubbar i ordning, enligt Wikipedias faktaruta.

export type Question = {
  value: 100 | 200 | 300 | 400 | 500;
  question: string;
  answer: string;
  /** Kort fakta som visas under svaret. */
  extra?: string;
  source: string;
};

export type Category = {
  name: string;
  questions: Question[];
};

export const categories: Category[] = [
  {
    name: "Landslag",
    questions: [
      {
        value: 100,
        question: "Vilket land vann EM 2004, som en av de största skrällarna i EM:s historia?",
        answer: "Grekland",
        extra: "1–0 mot värdlandet Portugal i finalen i Lissabon. Angelos Charisteas gjorde målet.",
        source: "https://www.uefa.com/uefaeuro/history/news/0254-0d7b673abd33-d04e3bb2cd62-1000--greece-crowned-kings-of-europe-after-euro-2004-final-win-ag",
      },
      {
        value: 200,
        question: "Vem gjorde Spaniens segermål i VM-finalen 2026 mot Argentina?",
        answer: "Ferran Torres",
        extra: "1–0 i förlängningen på MetLife Stadium. Spaniens andra VM-guld.",
        source: "https://www.npr.org/2026/07/19/nx-s1-5899071/spain-2026-world-cup-champion",
      },
      {
        value: 300,
        question: "Vilket land vann det allra första EM, 1960?",
        answer: "Sovjetunionen",
        extra: "2–1 mot Jugoslavien efter förlängning i Paris. Lev Jasjin stod i mål.",
        source: "https://en.wikipedia.org/wiki/1960_European_Nations%27_Cup_final",
      },
      {
        value: 400,
        question: "Vem gjorde fem mål i en och samma VM-match, mot Kamerun 1994?",
        answer: "Oleg Salenko",
        extra: "Ryssland vann 6–1. Fem mål i en match är fortfarande VM-rekord.",
        source: "https://en.wikipedia.org/wiki/Oleg_Salenko",
      },
      {
        value: 500,
        question: "Vilket land slog ut Italien ur VM 1966 med 1–0 i Middlesbrough?",
        answer: "Nordkorea",
        extra: "Pak Doo-ik gjorde målet. En av VM:s största skrällar.",
        source: "https://en.wikipedia.org/wiki/Pak_Doo-ik",
      },
    ],
  },
  {
    name: "Svenska landslaget",
    questions: [
      {
        value: 100,
        question: "Vem gjorde målet när Sverige slog Schweiz med 1–0 i åttondelsfinalen i VM 2018?",
        answer: "Emil Forsberg",
        extra: "Ett styrt skott i 66:e minuten i S:t Petersburg. Sveriges första kvartsfinal sedan 1994.",
        source: "https://www.skysports.com/football/news/12098/11425019/sweden-1-0-switzerland-emil-forsberg-winner-settles-world-cup-last-16-clash",
      },
      {
        value: 200,
        question: "Vem var förbundskapten när Sverige tog VM-brons 1994?",
        answer: "Tommy Svensson",
        extra: "Förbundskapten 1991–1997. Ledde också Sverige till semifinal i EM 1992.",
        source: "https://en.wikipedia.org/wiki/Tommy_Svensson",
      },
      {
        value: 300,
        question: "Vem har spelat flest landskamper för svenska herrlandslaget?",
        answer: "Anders Svensson",
        extra: "148 landskamper mellan 1999 och 2013.",
        source: "https://en.wikipedia.org/wiki/Sweden_national_football_team_records_and_statistics",
      },
      {
        value: 400,
        question: "Sverige förlorade VM-finalen 1958 med 2–5 mot Brasilien. Vilka två gjorde Sveriges mål?",
        answer: "Nils Liedholm och Agne Simonsson",
        extra: "Liedholm blev, 35 år gammal, den äldsta målskytten i en VM-final.",
        source: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_final",
      },
      {
        value: 500,
        question: "Sverige vann OS-guld i fotboll 1948 på Wembley. Vilket land slog Sverige i finalen?",
        answer: "Jugoslavien",
        extra: "3–1, två mål av Gunnar Gren och ett av Gunnar Nordahl.",
        source: "https://en.wikipedia.org/wiki/Football_at_the_1948_Summer_Olympics",
      },
    ],
  },
  {
    name: "Premier League",
    questions: [
      {
        value: 100,
        question: "Vilken tränare ledde Leicester City till Premier League-titeln 2015/16?",
        answer: "Claudio Ranieri",
        extra: "Leicester vann trots odds på 5000 mot 1.",
        source: "https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League",
      },
      {
        value: 200,
        question: "Vem gjorde det snabbaste hattricket i Premier Leagues historia, på 2 minuter och 56 sekunder?",
        answer: "Sadio Mané",
        extra: "För Southampton mot Aston Villa (6–1) i maj 2015.",
        source: "https://www.guinnessworldrecords.com/world-records/385454-fastest-hat-trick-in-a-football-soccer-english-premier-league-match",
      },
      {
        value: 300,
        question: "Vilken klubb vann den allra första Premier League-säsongen, 1992/93?",
        answer: "Manchester United",
        extra: "Klubbens första ligatitel på 26 år, tio poäng före Aston Villa.",
        source: "https://www.premierleague.com/en/news/58731",
      },
      {
        value: 400,
        question: "Vilket lag har lägst poäng i Premier Leagues historia, med bara 11 poäng på en säsong?",
        answer: "Derby County (2007/08)",
        extra: "1 vinst, 8 oavgjorda och 29 förluster. Nedflyttade redan i mars.",
        source: "https://www.guinnessworldrecords.com/world-records/89953-lowest-points-total-in-the-football-premier-league",
      },
      {
        value: 500,
        question: "Vem gjorde det allra första målet i Premier League, i augusti 1992?",
        answer: "Brian Deane",
        extra: "Nick efter fem minuter för Sheffield United mot Manchester United (2–1).",
        source: "https://en.wikipedia.org/wiki/Brian_Deane",
      },
    ],
  },
  {
    name: "Champions League",
    questions: [
      {
        value: 100,
        question: "PSG vann Champions League-finalen 2026 på straffar i Budapest. Vilket lag förlorade?",
        answer: "Arsenal",
        extra: "PSG blev andra klubben att försvara titeln i Champions League-eran, efter Real Madrid.",
        source: "https://www.uefa.com/uefachampionsleague/news/0239-0e96d80bc2f6-d4e7f311245e-1000--is-there-a-champions-league-holders-curse/",
      },
      {
        value: 200,
        question: "Vilken klubb vann den allra första Europacupen, 1956?",
        answer: "Real Madrid",
        extra: "4–3 mot Reims i Paris. Början på fem raka titlar.",
        source: "https://en.wikipedia.org/wiki/1956_European_Cup_final",
      },
      {
        value: 300,
        question: "Vilken svensk klubb spelade final i Europacupen 1979?",
        answer: "Malmö FF",
        extra: "Förlust med 0–1 mot Nottingham Forest i München. Enda svenska laget i en final.",
        source: "https://en.wikipedia.org/wiki/1979_European_Cup_final",
      },
      {
        value: 400,
        question: "Vilken klubb vann Europacupen 1991 efter straffar mot Marseille i Bari?",
        answer: "Röda Stjärnan (Crvena zvezda)",
        extra: "0–0 efter förlängning, 5–3 på straffar. Klubbens enda Europacuptitel.",
        source: "https://en.wikipedia.org/wiki/1991_European_Cup_final",
      },
      {
        value: 500,
        question: "Vilken klubb vann Europacupen 1986 sedan målvakten räddat alla fyra straffar mot Barcelona i Sevilla?",
        answer: "Steaua București",
        extra: "Helmuth Duckadam blev ”hjälten från Sevilla”. Första östeuropeiska vinnaren.",
        source: "https://en.wikipedia.org/wiki/1986_European_Cup_final",
      },
    ],
  },
  {
    name: "La Liga",
    questions: [
      {
        value: 100,
        question: "Vilken klubb säkrade La Liga-titeln 2013/14 med 1–1 mot Barcelona på Camp Nou i sista omgången?",
        answer: "Atlético Madrid",
        extra: "Diego Godín nickade in kvitteringen. Klubbens första ligatitel på 18 år.",
        source: "https://en.wikipedia.org/wiki/Barcelona_1%E2%80%931_Atl%C3%A9tico_Madrid_(May_2014)",
      },
      {
        value: 200,
        question: "Vilken klubb vann La Liga säsongen 1999/2000, klubbens första och enda ligatitel?",
        answer: "Deportivo La Coruña",
        extra: "69 poäng, det lägsta för en mästare sedan trepoängssystemet infördes.",
        source: "https://en.wikipedia.org/wiki/1999%E2%80%932000_La_Liga",
      },
      {
        value: 300,
        question: "Vilken klubb vann La Liga både 2001/02 och 2003/04 med Rafael Benítez som tränare?",
        answer: "Valencia",
        extra: "2004 blev det dubbel med Uefacupen.",
        source: "https://en.wikipedia.org/wiki/Rafael_Ben%C3%ADtez",
      },
      {
        value: 400,
        question: "Real Madrid och Barcelona har aldrig åkt ur La Liga. Vilken är den tredje klubben som aldrig har gjort det?",
        answer: "Athletic Bilbao",
        extra: "Har varit med i högsta serien sedan starten 1929.",
        source: "https://www.laliga.com/en-US/news/five-things-you-may-not-know-about-athletic-club",
      },
      {
        value: 500,
        question: "Vilken klubb vann den allra första La Liga-säsongen, 1929?",
        answer: "Barcelona",
        extra: "Tio lag var med. Tränare var Romà Forns.",
        source: "https://en.wikipedia.org/wiki/1929_La_Liga",
      },
    ],
  },
  {
    name: "Vem är spelaren?",
    questions: [
      {
        value: 100,
        question: "Torino → Pisa → Ravenna → Venezia → Atalanta → Juventus → Atlético Madrid → Lazio → Inter → AC Milan → Monaco → Sampdoria → Atalanta → Fiorentina → Atalanta",
        answer: "Christian Vieri",
        extra: "Tre sejourer i Atalanta. Sex säsonger i Inter, 1999–2005.",
        source: "https://en.wikipedia.org/wiki/Christian_Vieri",
      },
      {
        value: 200,
        question: "Hertha BSC → Tottenham → Borussia Dortmund (lån) → Portsmouth → Genoa → AC Milan (lån) → AC Milan → Schalke 04 → AC Milan → Las Palmas → Eintracht Frankfurt → Sassuolo → Barcelona (lån) → Fiorentina → Beşiktaş (lån) → Monza → Hertha BSC",
        answer: "Kevin-Prince Boateng",
        extra: "Ghanansk landslagsspelare. Tre perioder i AC Milan och två i Hertha.",
        source: "https://en.wikipedia.org/wiki/Kevin-Prince_Boateng",
      },
      {
        value: 300,
        question: "Zamalek → Gent → Ajax → Celta Vigo (lån) → Marseille → Roma → Tottenham (lån) → Tottenham → Middlesbrough → Wigan (lån) → Zamalek (lån) → West Ham (lån) → Ajax → Zamalek → Barnsley",
        answer: "Mido",
        extra: "Egyptisk anfallare (Ahmed Hossam). Tre perioder i Zamalek och två i Ajax.",
        source: "https://en.wikipedia.org/wiki/Mido_(footballer)",
      },
      {
        value: 400,
        question: "Radnički Pirot → Loznica → Smederevo → Partizan → PSV → Chelsea → Atlético Madrid → Fenerbahçe → PSG (lån) → PSG → Zenit (lån) → South China → BATE Borisov → South China",
        answer: "Mateja Kežman",
        extra: "Serbisk anfallare. Fyra säsonger i PSV, 2000–2004.",
        source: "https://en.wikipedia.org/wiki/Mateja_Ke%C5%BEman",
      },
      {
        value: 500,
        question: "Liverpool → Le Havre (lån) → Liverpool → Blackburn (lån) → Recreativo → Atlético Madrid → Sporting CP → Zaragoza (lån) → Saint-Étienne (lån) → Rostov → Chicago Fire → Lausanne-Sport → Dundee United → Chainat Hornbill → Saint-Pierroise",
        answer: "Florent Sinama-Pongolle",
        extra: "Fransk anfallare som spelade i England, Spanien, Portugal, Ryssland, USA, Schweiz, Skottland och Thailand.",
        source: "https://en.wikipedia.org/wiki/Florent_Sinama_Pongolle",
      },
    ],
  },
];
