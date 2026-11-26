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
        question: "Vilket land slog ut England ur EM 2016 med 2–1 i åttondelsfinalen i Nice?",
        answer: "Island",
        extra: "Alla mål kom inom 18 minuter. Roy Hodgson avgick efter matchen.",
        source: "https://www.thefa.com/news/england/2016/jun/england-iceland-report-270616",
      },
      {
        value: 200,
        question: "Vem gjorde Portugals segermål i EM-finalen 2016 mot Frankrike?",
        answer: "Éder",
        extra: "Inhoppare som avgjorde i 109:e minuten. Hans första tävlingsmål för Portugal.",
        source: "https://www.skysports.com/football/news/19692/10498077/portugal-1-0-france-aet-extra-time-eder-strike-hands-portugal-first-ever-tournament-win",
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
        question: "Vem räddade den avgörande straffen när Italien vann EM-finalen 2021 mot England på Wembley?",
        answer: "Gianluigi Donnarumma",
        extra: "Han räddade Bukayo Sakas straff och blev sedan utsedd till turneringens bästa spelare.",
        source: "https://www.uefa.com/news/026b-12bba5b7b7a1-5519282c3d1a-1000--italy-1-1-england-aet-3-2-on-pens-donnarumma-the-hero-as-azzurr/",
      },
      {
        value: 500,
        question: "Vilket land vann Afrikanska mästerskapet 2012, med 8–7 på straffar mot Elfenbenskusten i Libreville?",
        answer: "Zambia",
        extra: "Landets första titel, spelad nära platsen för flygolyckan 1993 som tog landslagets liv.",
        source: "https://en.wikipedia.org/wiki/2012_Africa_Cup_of_Nations_final",
      },
    ],
  },
  {
    name: "Svenska landslaget",
    questions: [
      {
        value: 100,
        question: "Vem var förbundskapten när Sverige gick till kvartsfinal i VM 2018?",
        answer: "Janne Andersson",
        extra: "Förbundskapten 2016–2023. Sverige vann gruppen före Mexiko, Sydkorea och Tyskland.",
        source: "https://en.wikipedia.org/wiki/Janne_Andersson",
      },
      {
        value: 200,
        question: "Vem gjorde målet när Sverige slog Schweiz med 1–0 i åttondelsfinalen i VM 2018?",
        answer: "Emil Forsberg",
        extra: "Ett styrt skott i 66:e minuten i S:t Petersburg. Sveriges första kvartsfinal sedan 1994.",
        source: "https://www.skysports.com/football/news/12098/11425019/sweden-1-0-switzerland-emil-forsberg-winner-settles-world-cup-last-16-clash",
      },
      {
        value: 300,
        question: "Vilket land slog ut Sverige i åttondelsfinalen i EM 2021, med ett mål i sista minuten av förlängningen?",
        answer: "Ukraina",
        extra: "2–1 på Hampden Park. Artem Dovbyk nickade in segermålet, Marcus Danielson hade fått rött.",
        source: "https://www.skysports.com/football/sweden-vs-ukraine/report/421525",
      },
      {
        value: 400,
        question: "Vem gjorde målet när Sverige slog Italien med 1–0 i VM-playoffet i november 2017?",
        answer: "Jakob Johansson",
        extra: "Ett styrt skott på Friends Arena. Italien missade sedan VM för första gången sedan 1958.",
        source: "https://inside.fifa.com/news/johansson-gives-sweden-first-leg-advantage-2919416",
      },
      {
        value: 500,
        question: "Sverige och Danmark spelade 2–2 i EM 2004 så att båda gick vidare och Italien åkte ut. Vem gjorde Sveriges kvittering i slutminuterna?",
        answer: "Mattias Jonson",
        extra: "Henrik Larsson hade gjort 1–1 på straff. Italien anklagade lagen för uppgjord match, men Uefa avfärdade klagomålet.",
        source: "https://www.uefa.com/uefaeuro/history/news/0253-0d7b43eb7e45-61cfdedd08d6-1000--denmark-and-sweden-through-after-euro-2004-group-c-draw/",
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
        question: "Vem gjorde båda Inters mål när de slog Bayern med 2–0 i finalen 2010 på Santiago Bernabéu?",
        answer: "Diego Milito",
        extra: "Inter vann trippeln under José Mourinho.",
        source: "https://www.uefa.com/uefachampionsleague/news/0253-0d7ad4002db3-b3b86ec9621f-1000--inter-s-2010-champions-league-glory",
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
        question: "Vem gjorde hattrick i andra halvlek när Tottenham vände 0–2 mot Ajax i semifinalen 2019?",
        answer: "Lucas Moura",
        extra: "Det avgörande 3–2-målet kom i sjätte tilläggsminuten. Tottenham gick vidare på bortamål.",
        source: "https://www.skysports.com/football/news/11945/11985411/ajax-2-3-tottenham-lucas-mouras-miracle-in-amsterdam-revisited",
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
