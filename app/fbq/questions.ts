// Frågorna till fotbollsquizet på /fbq. Varje svar är kontrollerat mot källan i `source` (läget i november 2026).
// Nivå: 100 och 200 ska en vanlig fotbollsintresserad klara, 300 är medel, 400 och 500 är kluriga men inte obskyra.
// I "Vem är spelaren?" är frågan spelarens seniorklubbar i ordning enligt Wikipedias faktaruta (B-lag utelämnade).

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
        question: "Vilket land vann VM 2022 i Qatar?",
        answer: "Argentina",
        extra: "3–3 mot Frankrike efter förlängning, 4–2 på straffar. Messis första VM-guld.",
        source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_final",
      },
      {
        value: 200,
        question: "Vem gjorde hattrick för Frankrike i VM-finalen 2022 mot Argentina?",
        answer: "Kylian Mbappé",
        extra: "Andra spelaren någonsin att göra hattrick i en VM-final, efter Geoff Hurst 1966.",
        source: "https://en.wikipedia.org/wiki/2022_FIFA_World_Cup_final",
      },
      {
        value: 300,
        question: "Vem gjorde Spaniens segermål i VM-finalen 2010 mot Nederländerna?",
        answer: "Andrés Iniesta",
        extra: "1–0 i förlängningens 116:e minut i Johannesburg. Spaniens första VM-guld.",
        source: "https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_final",
      },
      {
        value: 400,
        question: "Vem räddade den avgörande straffen när Italien vann EM-finalen 2021 mot England på Wembley?",
        answer: "Gianluigi Donnarumma",
        extra: "Han räddade Bukayo Sakas straff och blev sedan utsedd till turneringens bästa spelare.",
        source: "https://www.uefa.com/news/026b-12bba5b7b7a1-5519282c3d1a-1000--italy-1-1-england-aet-3-2-on-pens-donnarumma-the-hero-as-azzurr/",
      },
      {
        value: 500,
        question: "Vem gjorde Portugals segermål i EM-finalen 2016 mot Frankrike?",
        answer: "Éder",
        extra: "Inhoppare som avgjorde i 109:e minuten. Hans första tävlingsmål för Portugal.",
        source: "https://www.skysports.com/football/news/19692/10498077/portugal-1-0-france-aet-extra-time-eder-strike-hands-portugal-first-ever-tournament-win",
      },
    ],
  },
  {
    name: "Svenska landslaget",
    questions: [
      {
        value: 100,
        question: "Vilken medalj tog Sverige i VM 1994 i USA?",
        answer: "Brons",
        extra: "Sverige slog Bulgarien med 4–0 i bronsmatchen.",
        source: "https://en.wikipedia.org/wiki/1994_FIFA_World_Cup",
      },
      {
        value: 200,
        question: "Vem var förbundskapten när Sverige gick till kvartsfinal i VM 2018?",
        answer: "Janne Andersson",
        extra: "Förbundskapten 2016–2023. Sverige vann gruppen före Mexiko, Sydkorea och Tyskland.",
        source: "https://en.wikipedia.org/wiki/Janne_Andersson",
      },
      {
        value: 300,
        question: "Vem gjorde målet när Sverige slog Schweiz med 1–0 i åttondelsfinalen i VM 2018?",
        answer: "Emil Forsberg",
        extra: "Ett styrt skott i 66:e minuten i S:t Petersburg. Sveriges första kvartsfinal sedan 1994.",
        source: "https://www.skysports.com/football/news/12098/11425019/sweden-1-0-switzerland-emil-forsberg-winner-settles-world-cup-last-16-clash",
      },
      {
        value: 400,
        question: "Vilket land slog ut Sverige i åttondelsfinalen i EM 2021, med ett mål i sista minuten av förlängningen?",
        answer: "Ukraina",
        extra: "2–1 på Hampden Park. Artem Dovbyk nickade in segermålet, Marcus Danielson hade fått rött.",
        source: "https://www.skysports.com/football/sweden-vs-ukraine/report/421525",
      },
      {
        value: 500,
        question: "Vem gjorde målet när Sverige slog Italien med 1–0 i VM-playoffet i november 2017?",
        answer: "Jakob Johansson",
        extra: "Ett styrt skott på Friends Arena. Italien missade sedan VM för första gången sedan 1958.",
        source: "https://inside.fifa.com/news/johansson-gives-sweden-first-leg-advantage-2919416",
      },
    ],
  },
  {
    name: "Premier League",
    questions: [
      {
        value: 100,
        question: "Vilket lag gick obesegrat genom hela Premier League-säsongen 2003/04?",
        answer: "Arsenal",
        extra: "”The Invincibles” under Arsène Wenger: 26 vinster och 12 oavgjorda.",
        source: "https://en.wikipedia.org/wiki/2003%E2%80%9304_Arsenal_F.C._season",
      },
      {
        value: 200,
        question: "Vem satte rekord med 36 mål på en Premier League-säsong 2022/23?",
        answer: "Erling Haaland",
        extra: "Hans första säsong i Manchester City. Rekordet var 34 mål.",
        source: "https://en.wikipedia.org/wiki/2022%E2%80%9323_Premier_League",
      },
      {
        value: 300,
        question: "Vem gjorde målet i 93:20 som gav Manchester City titeln 2011/12 mot QPR?",
        answer: "Sergio Agüero",
        extra: "3–2 i sista omgången. City vann ligan på målskillnad före Manchester United.",
        source: "https://en.wikipedia.org/wiki/Manchester_City_F.C._3%E2%80%932_Queens_Park_Rangers_F.C.",
      },
      {
        value: 400,
        question: "Vilket lag tog bara 11 poäng säsongen 2007/08, sämst i Premier Leagues historia?",
        answer: "Derby County",
        extra: "En enda vinst på hela säsongen.",
        source: "https://en.wikipedia.org/wiki/2007%E2%80%9308_Derby_County_F.C._season",
      },
      {
        value: 500,
        question: "Vem gjorde det snabbaste hattricket i Premier Leagues historia, på 2 minuter och 56 sekunder?",
        answer: "Sadio Mané",
        extra: "För Southampton mot Aston Villa (6–1) i maj 2015.",
        source: "https://www.guinnessworldrecords.com/world-records/385454-fastest-hat-trick-in-a-football-soccer-english-premier-league-match",
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
        extra: "15 titlar, den senaste 2024 mot Borussia Dortmund.",
        source: "https://en.wikipedia.org/wiki/List_of_European_Cup_and_UEFA_Champions_League_finals",
      },
      {
        value: 200,
        question: "Vilket lag låg under med 0–3 i halvtid i finalen 2005 mot AC Milan men vann ändå på straffar?",
        answer: "Liverpool",
        extra: "”Miraklet i Istanbul”. Tre mål på sex minuter i andra halvlek.",
        source: "https://en.wikipedia.org/wiki/2005_UEFA_Champions_League_final",
      },
      {
        value: 300,
        question: "Vem nickade in Real Madrids kvittering i 93:e minuten i finalen 2014 mot Atlético Madrid?",
        answer: "Sergio Ramos",
        extra: "Real vann sedan med 4–1 efter förlängning och tog ”La Décima”, sin tionde titel.",
        source: "https://en.wikipedia.org/wiki/2014_UEFA_Champions_League_final",
      },
      {
        value: 400,
        question: "Vem gjorde båda Inters mål när de slog Bayern med 2–0 i finalen 2010 på Santiago Bernabéu?",
        answer: "Diego Milito",
        extra: "Inter vann trippeln under José Mourinho.",
        source: "https://en.wikipedia.org/wiki/2010_UEFA_Champions_League_final",
      },
      {
        value: 500,
        question: "Barcelona vann med 6–1 mot PSG 2017 efter 0–4 i första matchen. Vem gjorde 6–1-målet i 95:e minuten?",
        answer: "Sergi Roberto",
        extra: "Inhoppare, framspelad av Neymar. Första laget att vända 0–4 i Europacupspel.",
        source: "https://uefa.com/uefachampionsleague/news/0237-0e966ee49e08-4065577d094a-1000--how-barcelona-ripped-up-the-history-books",
      },
    ],
  },
  {
    name: "La Liga",
    questions: [
      {
        value: 100,
        question: "Vem har gjort flest mål i La Ligas historia?",
        answer: "Lionel Messi",
        extra: "474 ligamål för Barcelona mellan 2004 och 2021.",
        source: "https://en.wikipedia.org/wiki/List_of_La_Liga_top_scorers",
      },
      {
        value: 200,
        question: "Vilken klubb vann La Liga 2013/14 under Diego Simeone och bröt Barcelonas och Real Madrids dominans?",
        answer: "Atlético Madrid",
        extra: "Titeln säkrades med 1–1 mot Barcelona på Camp Nou i sista omgången.",
        source: "https://en.wikipedia.org/wiki/2013%E2%80%9314_La_Liga",
      },
      {
        value: 300,
        question: "Hur många ligamål gjorde Lionel Messi säsongen 2011/12, vilket fortfarande är La Liga-rekord?",
        answer: "50 mål",
        extra: "På 37 matcher. Cristiano Ronaldo gjorde 46 samma säsong.",
        source: "https://www.guinnessworldrecords.com/world-records/most-goals-scored-in-a-season-in-the-top-division-of-spanish-football",
      },
      {
        value: 400,
        question: "Vem vann La Ligas skytteliga 2015/16 med 40 mål och bröt Messis och Ronaldos svit?",
        answer: "Luis Suárez",
        extra: "14 mål på de sista fem omgångarna. Ronaldo slutade på 35.",
        source: "https://www.eurosport.com/football/liga/2015-2016/luis-suarez-how-barcelona-forward-ended-messi-and-ronaldo-s-dominance-of-spain-s-scoring-charts_sto5567912/story.shtml",
      },
      {
        value: 500,
        question: "Vilken klubb slutade trea i La Liga 2023/24 och kvalade till Champions League för första gången?",
        answer: "Girona",
        extra: "81 poäng under Míchel. Platsen säkrades med 4–2 mot Barcelona.",
        source: "https://en.wikipedia.org/wiki/2023%E2%80%9324_Girona_FC_season",
      },
    ],
  },
  {
    name: "Vem är spelaren?",
    questions: [
      {
        value: 100,
        question: "Sporting CP → Manchester United → Real Madrid → Juventus → Manchester United → Al-Nassr",
        answer: "Cristiano Ronaldo",
        extra: "Portugisisk anfallare. Spelar i Al-Nassr sedan 2023.",
        source: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
      },
      {
        value: 200,
        question: "Malmö FF → Ajax → Juventus → Inter → Barcelona → AC Milan (lån) → AC Milan → Paris Saint-Germain → Manchester United → LA Galaxy → AC Milan",
        answer: "Zlatan Ibrahimović",
        extra: "Sveriges bäste målskytt genom tiderna. Slutade 2023.",
        source: "https://en.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87",
      },
      {
        value: 300,
        question: "Monaco → Juventus → Arsenal → Barcelona → New York Red Bulls → Arsenal (lån)",
        answer: "Thierry Henry",
        extra: "Fransk anfallare. Arsenals bäste målskytt genom tiderna.",
        source: "https://en.wikipedia.org/wiki/Thierry_Henry",
      },
      {
        value: 400,
        question: "Atlético Madrid → Liverpool → Chelsea → AC Milan (lån) → AC Milan → Atlético Madrid (lån) → Atlético Madrid → Sagan Tosu",
        answer: "Fernando Torres",
        extra: "Spansk anfallare. Avgjorde EM-finalen 2008 och slutade i Japan 2019.",
        source: "https://en.wikipedia.org/wiki/Fernando_Torres",
      },
      {
        value: 500,
        question: "Le Mans → Guingamp → Marseille → Chelsea → Shanghai Shenhua → Galatasaray → Chelsea → Montreal Impact → Phoenix Rising",
        answer: "Didier Drogba",
        extra: "Ivoriansk anfallare. Gjorde kvitteringen och avgjorde straffläggningen i Champions League-finalen 2012.",
        source: "https://en.wikipedia.org/wiki/Didier_Drogba",
      },
    ],
  },
];
