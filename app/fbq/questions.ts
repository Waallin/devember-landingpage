// Frågorna till fotbollsquizet på /fbq. Varje svar är kontrollerat mot källan i `source` (läget i november 2026).

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
        question: "Vilket land vann med 7–1 mot Brasilien i VM-semifinalen 2014 i Belo Horizonte?",
        answer: "Tyskland",
        extra: "Brasiliens största förlust någonsin. Toni Kroos gjorde två mål på två minuter.",
        source: "https://en.wikipedia.org/wiki/Brazil_v_Germany_(2014_FIFA_World_Cup)",
      },
      {
        value: 200,
        question: "Vilket land vann EM 2004, som en av de största skrällarna i EM:s historia?",
        answer: "Grekland",
        extra: "1–0 mot värdlandet Portugal i finalen i Lissabon. Angelos Charisteas gjorde målet.",
        source:
          "https://www.uefa.com/uefaeuro/history/news/0254-0d7b673abd33-d04e3bb2cd62-1000--greece-crowned-kings-of-europe-after-euro-2004-final-win-ag",
      },
      {
        value: 300,
        question: "Vem gjorde Spaniens segermål i VM-finalen 2026 mot Argentina?",
        answer: "Ferran Torres",
        extra: "1–0 i förlängningen på MetLife Stadium. Spaniens andra VM-guld.",
        source: "https://www.npr.org/2026/07/19/nx-s1-5899071/spain-2026-world-cup-champion",
      },
      {
        value: 400,
        question: "Vem blev under VM 2026 den bästa målskytten i VM-historien, och med hur många mål?",
        answer: "Kylian Mbappé, 22 mål",
        extra: "Före Lionel Messi (21) och Miroslav Klose (16).",
        source:
          "https://www.foxsports.com/articles/soccer/kylian-mbappe-passes-lionel-messi-for-career-world-cup-scoring-record-with-22-goals",
      },
      {
        value: 500,
        question: "Vilket land vann det allra första EM, 1960?",
        answer: "Sovjetunionen",
        extra: "2–1 mot Jugoslavien efter förlängning i Paris. Lev Jasjin stod i mål.",
        source: "https://en.wikipedia.org/wiki/1960_European_Nations%27_Cup_final",
      },
    ],
  },
  {
    name: "Svenska landslaget",
    questions: [
      {
        value: 100,
        question: "Vilket land slog ut Sverige i kvartsfinalen i VM 2018?",
        answer: "England",
        extra: "2–0 i Samara, mål av Harry Maguire och Dele Alli.",
        source: "https://www.thefa.com/news/2018/jul/07/england-sweden-world-cup-quarter-final-report-070718",
      },
      {
        value: 200,
        question: "Vem gjorde målet när Sverige slog Schweiz med 1–0 i åttondelsfinalen i VM 2018?",
        answer: "Emil Forsberg",
        extra: "Ett styrt skott i 66:e minuten i S:t Petersburg. Sveriges första kvartsfinal sedan 1994.",
        source:
          "https://www.skysports.com/football/news/12098/11425019/sweden-1-0-switzerland-emil-forsberg-winner-settles-world-cup-last-16-clash",
      },
      {
        value: 300,
        question: "Vem var förbundskapten när Sverige tog VM-brons 1994?",
        answer: "Tommy Svensson",
        extra: "Förbundskapten 1991–1997. Ledde också Sverige till semifinal i EM 1992.",
        source: "https://en.wikipedia.org/wiki/Tommy_Svensson",
      },
      {
        value: 400,
        question: "Vem har spelat flest landskamper för svenska herrlandslaget?",
        answer: "Anders Svensson",
        extra: "148 landskamper mellan 1999 och 2013.",
        source: "https://en.wikipedia.org/wiki/Sweden_national_football_team_records_and_statistics",
      },
      {
        value: 500,
        question: "Sverige förlorade VM-finalen 1958 med 2–5 mot Brasilien. Vilka två gjorde Sveriges mål?",
        answer: "Nils Liedholm och Agne Simonsson",
        extra: "Liedholm blev, 35 år gammal, den äldsta målskytten i en VM-final.",
        source: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_final",
      },
    ],
  },
  {
    name: "Premier League",
    questions: [
      {
        value: 100,
        question: "Vem är Premier Leagues bästa målskytt genom tiderna?",
        answer: "Alan Shearer",
        extra: "260 mål på 441 matcher.",
        source: "https://www.premierleague.com/en/news/3553671",
      },
      {
        value: 200,
        question: "Vilken tränare ledde Leicester City till Premier League-titeln 2015/16?",
        answer: "Claudio Ranieri",
        extra: "Leicester vann trots odds på 5000 mot 1.",
        source: "https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League",
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
        question: "Vem gjorde det snabbaste hattricket i Premier Leagues historia, på 2 minuter och 56 sekunder?",
        answer: "Sadio Mané",
        extra: "För Southampton mot Aston Villa (6–1) i maj 2015.",
        source:
          "https://www.guinnessworldrecords.com/world-records/385454-fastest-hat-trick-in-a-football-soccer-english-premier-league-match",
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
        question: "Vilket lag låg under med 0–3 i halvtid i finalen i Istanbul 2005, men vann ändå?",
        answer: "Liverpool",
        extra: "3–3 mot Milan efter förlängning, vinst med 3–2 på straffar.",
        source: "https://en.wikipedia.org/wiki/2005_UEFA_Champions_League_final",
      },
      {
        value: 200,
        question: "PSG vann Champions League-finalen 2026 på straffar i Budapest. Vilket lag förlorade?",
        answer: "Arsenal",
        extra: "PSG blev andra klubben att försvara titeln i Champions League-eran, efter Real Madrid.",
        source:
          "https://www.uefa.com/uefachampionsleague/news/0239-0e96d80bc2f6-d4e7f311245e-1000--is-there-a-champions-league-holders-curse/",
      },
      {
        value: 300,
        question: "Vilken klubb vann den allra första Europacupen, 1956?",
        answer: "Real Madrid",
        extra: "4–3 mot Reims i Paris. Början på fem raka titlar.",
        source: "https://en.wikipedia.org/wiki/1956_European_Cup_final",
      },
      {
        value: 400,
        question: "Vilken svensk klubb spelade final i Europacupen 1979?",
        answer: "Malmö FF",
        extra: "Förlust med 0–1 mot Nottingham Forest i München. Enda svenska laget i en final.",
        source: "https://en.wikipedia.org/wiki/1979_European_Cup_final",
      },
      {
        value: 500,
        question: "Vilken klubb vann Europacupen 1991 efter straffar mot Marseille i Bari?",
        answer: "Röda Stjärnan (Crvena zvezda)",
        extra: "0–0 efter förlängning, 5–3 på straffar. Klubbens enda Europacuptitel.",
        source: "https://en.wikipedia.org/wiki/1991_European_Cup_final",
      },
    ],
  },
  {
    name: "La Liga",
    questions: [
      {
        value: 100,
        question: "Vem är La Ligas bästa målskytt genom tiderna?",
        answer: "Lionel Messi",
        extra: "474 mål på 520 matcher för Barcelona.",
        source: "https://www.guinnessworldrecords.com/world-records/382108-most-goals-scored-in-a-la-liga-career",
      },
      {
        value: 200,
        question: "Vem är tvåa i La Ligas skytteliga genom tiderna, efter Messi?",
        answer: "Cristiano Ronaldo",
        extra: "311 mål på 292 matcher för Real Madrid.",
        source:
          "https://www.goal.com/en/news/lionel-messi-cristiano-ronaldo-top-10-la-liga-goalscorers-of-all-time/xrsq7xenmn81mtodnebf9q7s",
      },
      {
        value: 300,
        question: "Vilken klubb säkrade La Liga-titeln 2013/14 med 1–1 mot Barcelona på Camp Nou i sista omgången?",
        answer: "Atlético Madrid",
        extra: "Diego Godín nickade in kvitteringen. Klubbens första ligatitel på 18 år.",
        source: "https://en.wikipedia.org/wiki/Barcelona_1%E2%80%931_Atl%C3%A9tico_Madrid_(May_2014)",
      },
      {
        value: 400,
        question: "Vilken klubb vann La Liga säsongen 1999/2000, klubbens första och enda ligatitel?",
        answer: "Deportivo La Coruña",
        extra: "69 poäng, det lägsta för en mästare sedan trepoängssystemet infördes.",
        source: "https://en.wikipedia.org/wiki/1999%E2%80%932000_La_Liga",
      },
      {
        value: 500,
        question: "Real Madrid och Barcelona har aldrig åkt ur La Liga. Vilken är den tredje klubben som aldrig har gjort det?",
        answer: "Athletic Bilbao",
        extra: "Har varit med i högsta serien sedan starten 1929.",
        source: "https://www.laliga.com/en-US/news/five-things-you-may-not-know-about-athletic-club",
      },
    ],
  },
  {
    name: "Vem är spelaren?",
    questions: [
      {
        value: 100,
        question:
          "Svensk anfallare som vann Guldskon som Europas bästa ligamålskytt med Celtic säsongen 2000/01 och senare vann Champions League med Barcelona.",
        answer: "Henrik Larsson",
        extra: "35 ligamål och 53 mål totalt för Celtic den säsongen.",
        source: "https://en.wikipedia.org/wiki/Henrik_Larsson",
      },
      {
        value: 200,
        question:
          "Kroatisk mittfältare som vann Ballon d’Or 2018 och därmed bröt Messis och Ronaldos tioåriga dominans.",
        answer: "Luka Modrić",
        extra: "Samma år vann han Champions League med Real Madrid och Guldbollen som VM:s bästa spelare.",
        source: "https://www.nbcsports.com/soccer/news/ballon-dor-modric-ends-messi-ronaldos-10-year-duopoly",
      },
      {
        value: 300,
        question:
          "Ungersk anfallare som gjorde fyra mål när Real Madrid vann Europacupfinalen 1960 med 7–3 mot Eintracht Frankfurt.",
        answer: "Ferenc Puskás",
        extra: "Ingen annan har gjort fyra mål i en Europacup- eller Champions League-final.",
        source:
          "https://www.guinnessworldrecords.com/world-records/117235-most-goals-scored-in-a-single-football-soccer-european-cup-uefa-champions-leagu",
      },
      {
        value: 400,
        question: "Sovjetisk målvakt, kallad ”Svarta spindeln”, som är den enda målvakten som vunnit Ballon d’Or (1963).",
        answer: "Lev Jasjin",
        extra: "Priset för årets bästa målvakt, Jasjin-trofén, är uppkallat efter honom.",
        source: "https://en.wikipedia.org/wiki/1963_Ballon_d%27Or",
      },
      {
        value: 500,
        question:
          "Svensk anfallare som är AC Milans bästa målskytt genom tiderna och vann Serie A:s skytteliga fem gånger.",
        answer: "Gunnar Nordahl",
        extra: "210 ligamål för Milan. En tredjedel av trion Gre-No-Li.",
        source: "https://en.wikipedia.org/wiki/Gunnar_Nordahl",
      },
    ],
  },
];
