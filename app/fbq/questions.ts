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
        question: "Vilket land vann herr-VM 2026?",
        answer: "Spanien",
        extra: "1–0 mot Argentina i finalen på MetLife Stadium. Ferran Torres gjorde målet i förlängningen.",
        source: "https://www.npr.org/2026/07/19/nx-s1-5899071/spain-2026-world-cup-champion",
      },
      {
        value: 200,
        question: "Vilket land har vunnit flest herr-VM?",
        answer: "Brasilien",
        extra: "Fem titlar: 1958, 1962, 1970, 1994 och 2002.",
        source: "https://www.si.com/soccer/fifa-world-cup-full-list-of-winners",
      },
      {
        value: 300,
        question: "Vilket land vann det allra första VM, 1930?",
        answer: "Uruguay",
        extra: "På hemmaplan, mot Argentina i finalen.",
        source: "https://www.si.com/soccer/fifa-world-cup-full-list-of-winners",
      },
      {
        value: 400,
        question: "Vem blev under VM 2026 den bästa målskytten i VM-historien?",
        answer: "Kylian Mbappé",
        extra: "22 VM-mål, före Lionel Messi (21) och Miroslav Klose (16).",
        source:
          "https://www.foxsports.com/articles/soccer/kylian-mbappe-passes-lionel-messi-for-career-world-cup-scoring-record-with-22-goals",
      },
      {
        value: 500,
        question: "Vilket land vann EM 1992, trots att laget kom med som ersättare bara två veckor innan?",
        answer: "Danmark",
        extra: "Danmark ersatte Jugoslavien och slog Tyskland med 2–0 i finalen.",
        source: "https://en.wikipedia.org/wiki/UEFA_Euro_1992",
      },
    ],
  },
  {
    name: "Svenska landslaget",
    questions: [
      {
        value: 100,
        question: "Vem är herrlandslagets bästa målskytt genom tiderna?",
        answer: "Zlatan Ibrahimović",
        extra: "62 mål på 122 landskamper.",
        source: "https://en.wikipedia.org/wiki/List_of_international_goals_scored_by_Zlatan_Ibrahimovi%C4%87",
      },
      {
        value: 200,
        question: "Sverige spelade VM-final på hemmaplan 1958. Vilket land förlorade Sverige mot?",
        answer: "Brasilien",
        extra: "5–2 på Råsunda. 17-årige Pelé blev den yngsta målskytten i en VM-final.",
        source: "https://en.wikipedia.org/wiki/1958_FIFA_World_Cup_final",
      },
      {
        value: 300,
        question: "Vilken placering tog Sverige i VM 1994 i USA?",
        answer: "Trea (brons)",
        extra: "4–0 mot Bulgarien i bronsmatchen på Rose Bowl.",
        source: "https://fbref.com/en/comps/1/1994/schedule/1994-World-Cup-Scores-and-Fixtures",
      },
      {
        value: 400,
        question: "Vilket land slog ut Sverige i kvartsfinalen i VM 2018?",
        answer: "England",
        extra: "2–0 i Samara, mål av Harry Maguire och Dele Alli.",
        source: "https://www.thefa.com/news/2018/jul/07/england-sweden-world-cup-quarter-final-report-070718",
      },
      {
        value: 500,
        question: "Vem har spelat flest landskamper för svenska herrlandslaget?",
        answer: "Anders Svensson",
        extra: "148 landskamper mellan 1999 och 2013.",
        source: "https://en.wikipedia.org/wiki/Sweden_national_football_team_records_and_statistics",
      },
    ],
  },
  {
    name: "Premier League",
    questions: [
      {
        value: 100,
        question: "Vilken klubb har Anfield som hemmaarena?",
        answer: "Liverpool",
        source: "https://en.wikipedia.org/wiki/Anfield",
      },
      {
        value: 200,
        question: "Vilken klubb vann Premier League säsongen 2015/16, trots odds på 5000 mot 1?",
        answer: "Leicester City",
        extra: "Klubbens första titel i högsta divisionen, med Claudio Ranieri som tränare.",
        source: "https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League",
      },
      {
        value: 300,
        question: "Vilket lag gick obesegrat genom hela Premier League-säsongen 2003/04?",
        answer: "Arsenal",
        extra: "”The Invincibles”: 26 vinster, 12 oavgjorda och 0 förluster.",
        source: "https://www.si.com/soccer/premier-league-winners-by-year-clubs-stats-and-historic-moments",
      },
      {
        value: 400,
        question: "Vem är Premier Leagues bästa målskytt genom tiderna?",
        answer: "Alan Shearer",
        extra: "260 mål på 441 matcher.",
        source: "https://www.premierleague.com/en/news/3553671",
      },
      {
        value: 500,
        question: "Vem gjorde det snabbaste hattricket i Premier Leagues historia, på 2 minuter och 56 sekunder?",
        answer: "Sadio Mané",
        extra: "För Southampton mot Aston Villa (6–1) i maj 2015.",
        source:
          "https://www.guinnessworldrecords.com/world-records/385454-fastest-hat-trick-in-a-football-soccer-english-premier-league-match",
      },
    ],
  },
  {
    name: "Champions League",
    questions: [
      {
        value: 100,
        question: "Vilken klubb har vunnit Europacupen/Champions League flest gånger?",
        answer: "Real Madrid",
        extra: "15 titler, senast 2024.",
        source:
          "https://www.uefa.com/uefachampionsleague/news/0239-0e96d80bc2f6-d4e7f311245e-1000--is-there-a-champions-league-holders-curse/",
      },
      {
        value: 200,
        question: "Vilken klubb vann Champions League både 2025 och 2026?",
        answer: "Paris Saint-Germain",
        extra: "5–0 mot Inter 2025 och vinst mot Arsenal på straffar i Budapest 2026.",
        source:
          "https://www.uefa.com/uefachampionsleague/news/0239-0e96d80bc2f6-d4e7f311245e-1000--is-there-a-champions-league-holders-curse/",
      },
      {
        value: 300,
        question: "Vem är Champions Leagues bästa målskytt genom tiderna?",
        answer: "Cristiano Ronaldo",
        extra: "140 mål på 183 matcher.",
        source: "https://en.wikipedia.org/wiki/List_of_UEFA_Champions_League_top_scorers",
      },
      {
        value: 400,
        question: "Vilket lag låg under med 0–3 i halvtid i finalen i Istanbul 2005, men vann ändå?",
        answer: "Liverpool",
        extra: "3–3 mot Milan efter förlängning, vinst med 3–2 på straffar.",
        source: "https://en.wikipedia.org/wiki/2005_UEFA_Champions_League_final",
      },
      {
        value: 500,
        question: "Vilken svensk klubb spelade final i Europacupen 1979?",
        answer: "Malmö FF",
        extra: "Förlust med 0–1 mot Nottingham Forest i München. Enda svenska laget i en final.",
        source: "https://en.wikipedia.org/wiki/1979_European_Cup_final",
      },
    ],
  },
  {
    name: "La Liga",
    questions: [
      {
        value: 100,
        question: "Vilka två klubbar möts i El Clásico?",
        answer: "Real Madrid och Barcelona",
        source: "https://en.wikipedia.org/wiki/El_Cl%C3%A1sico",
      },
      {
        value: 200,
        question: "Real Betis och Sevilla FC möts i ”El Gran Derbi”. I vilken stad?",
        answer: "Sevilla",
        source: "https://www.laliga.com/en-GB/partidazos/el-gran-derbi",
      },
      {
        value: 300,
        question: "Vem är La Ligas bästa målskytt genom tiderna?",
        answer: "Lionel Messi",
        extra: "474 mål på 520 matcher för Barcelona.",
        source: "https://www.guinnessworldrecords.com/world-records/382108-most-goals-scored-in-a-la-liga-career",
      },
      {
        value: 400,
        question: "Vem är tvåa i La Ligas skytteliga genom tiderna, efter Messi?",
        answer: "Cristiano Ronaldo",
        extra: "311 mål på 292 matcher för Real Madrid.",
        source:
          "https://www.goal.com/en/news/lionel-messi-cristiano-ronaldo-top-10-la-liga-goalscorers-of-all-time/xrsq7xenmn81mtodnebf9q7s",
      },
      {
        value: 500,
        question: "Vilken klubb vann La Liga säsongen 1999/2000, klubbens första och enda ligatitel?",
        answer: "Deportivo La Coruña",
        extra: "69 poäng, det lägsta för en mästare sedan trepoängssystemet infördes.",
        source: "https://en.wikipedia.org/wiki/1999%E2%80%932000_La_Liga",
      },
    ],
  },
  {
    name: "Vem är spelaren?",
    questions: [
      {
        value: 100,
        question:
          "Norsk anfallare som gjorde 36 mål i sin första Premier League-säsong, 2022/23, vilket är rekord för en säsong.",
        answer: "Erling Haaland",
        extra: "Han slog Alan Shearers och Andy Coles gemensamma rekord på 34 mål.",
        source: "https://olympics.com/en/news/most-goals-scored-in-a-premier-league-season-football",
      },
      {
        value: 200,
        question:
          "Svensk anfallare som vann Guldskon som Europas bästa ligamålskytt med Celtic säsongen 2000/01 och senare vann Champions League med Barcelona.",
        answer: "Henrik Larsson",
        extra: "35 ligamål och 53 mål totalt för Celtic den säsongen.",
        source: "https://en.wikipedia.org/wiki/Henrik_Larsson",
      },
      {
        value: 300,
        question:
          "Kroatisk mittfältare som vann Ballon d’Or 2018 och därmed bröt Messis och Ronaldos tioåriga dominans.",
        answer: "Luka Modrić",
        extra: "Samma år vann han Champions League med Real Madrid och Guldbollen som VM:s bästa spelare.",
        source: "https://www.nbcsports.com/soccer/news/ballon-dor-modric-ends-messi-ronaldos-10-year-duopoly",
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
