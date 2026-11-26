// Frågorna till fotbollsquizet på /fbq. Varje svar är kontrollerat mot källan i `source` (läget i november 2026).
// I "Vem är spelaren?" är frågan spelarens seniorklubbar i ordning, enligt Wikipedias faktaruta.
// Alla spelare där spelar i Premier League, La Liga eller Allsvenskan (november 2026).

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
        question: "Manchester United → Preston (lån) → Sunderland (lån) → Arsenal → Watford → Brighton → Chelsea",
        answer: "Danny Welbeck",
        extra: "Engelsman. Gick från Brighton till Chelsea i augusti 2026, 35 år gammal.",
        source: "https://www.skysports.com/football/news/11668/13568440/chelsea-transfer-news-danny-welbeck-completes-move-to-stamford-bridge-from-brighton-for-undisclosed-fee",
      },
      {
        value: 200,
        question: "Athletic Bilbao → Ponferradina (lån) → Valladolid (lån) → Athletic Bilbao → Chelsea → Real Madrid (lån) → Bournemouth (lån) → Arsenal",
        answer: "Kepa Arrizabalaga",
        extra: "Spansk målvakt. Spelar i Arsenal sedan 2025.",
        source: "https://en.wikipedia.org/wiki/Kepa_Arrizabalaga",
      },
      {
        value: 300,
        question: "Tenerife → Newcastle → Leicester → Real Betis (lån) → Real Betis → Villarreal",
        answer: "Ayoze Pérez",
        extra: "Spansk anfallare. Spelar i Villarreal sedan 2024.",
        source: "https://en.wikipedia.org/wiki/Ayoze_P%C3%A9rez",
      },
      {
        value: 400,
        question: "Rosenborg → Bodø/Glimt (lån) → Groningen → Midtjylland → Crystal Palace → Gent (lån) → Trabzonspor (lån) → RB Leipzig → Real Sociedad (lån) → Villarreal → Atlético Madrid",
        answer: "Alexander Sørloth",
        extra: "Norsk anfallare. Spelar i Atlético Madrid sedan 2024.",
        source: "https://en.wikipedia.org/wiki/Alexander_S%C3%B8rloth",
      },
      {
        value: 500,
        question: "Cambridge → Hamilton Wanderers → Waikato → West Bromwich → Barnsley (lån) → Brighton (lån) → Birmingham (lån) → Bristol City (lån) → Millwall (lån) → Leicester (lån) → Leicester → Ipswich (lån) → Leeds → Burnley → Newcastle → Nottingham Forest (lån) → Nottingham Forest",
        answer: "Chris Wood",
        extra: "Nyzeeländsk anfallare. Spelar i Nottingham Forest sedan 2023.",
        source: "https://en.wikipedia.org/wiki/Chris_Wood_(footballer,_born_1991)",
      },
    ],
  },
];
