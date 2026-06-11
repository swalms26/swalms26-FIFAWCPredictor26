// FIFA World Cup 2026 - Official Match Schedule
// Source: Al Jazeera / FIFA official schedule, June 11 2026

const WC2026_MATCHES = [
  // ===== GROUP A: Mexico, South Africa, South Korea, Czechia =====
  { id: "gA1", group: "A", home: "Mexico", away: "South Africa", venue: "Mexico City Stadium, Mexico City", kickoff: "2026-06-11T19:00:00Z", stage: "Group A" },
  { id: "gA2", group: "A", home: "South Korea", away: "Czechia", venue: "Estadio Guadalajara, Zapopan", kickoff: "2026-06-12T02:00:00Z", stage: "Group A" },
  { id: "gA3", group: "A", home: "Czechia", away: "South Africa", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-18T16:00:00Z", stage: "Group A" },
  { id: "gA4", group: "A", home: "Mexico", away: "South Korea", venue: "Estadio Guadalajara, Zapopan", kickoff: "2026-06-19T01:00:00Z", stage: "Group A" },
  { id: "gA5", group: "A", home: "Czechia", away: "Mexico", venue: "Mexico City Stadium, Mexico City", kickoff: "2026-06-25T01:00:00Z", stage: "Group A" },
  { id: "gA6", group: "A", home: "South Africa", away: "South Korea", venue: "Estadio Monterrey, Guadalupe", kickoff: "2026-06-25T01:00:00Z", stage: "Group A" },

  // ===== GROUP B: Canada, Bosnia, Qatar, Switzerland =====
  { id: "gB1", group: "B", home: "Canada", away: "Bosnia and Herzegovina", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-12T19:00:00Z", stage: "Group B" },
  { id: "gB2", group: "B", home: "Qatar", away: "Switzerland", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-13T19:00:00Z", stage: "Group B" },
  { id: "gB3", group: "B", home: "Switzerland", away: "Bosnia and Herzegovina", venue: "Los Angeles Stadium", kickoff: "2026-06-18T19:00:00Z", stage: "Group B" },
  { id: "gB4", group: "B", home: "Canada", away: "Qatar", venue: "BC Place, Vancouver", kickoff: "2026-06-18T22:00:00Z", stage: "Group B" },
  { id: "gB5", group: "B", home: "Switzerland", away: "Canada", venue: "BC Place, Vancouver", kickoff: "2026-06-24T19:00:00Z", stage: "Group B" },
  { id: "gB6", group: "B", home: "Bosnia and Herzegovina", away: "Qatar", venue: "Seattle Stadium, Seattle", kickoff: "2026-06-24T19:00:00Z", stage: "Group B" },

  // ===== GROUP C: Brazil, Morocco, Haiti, Scotland =====
  { id: "gC1", group: "C", home: "Brazil", away: "Morocco", venue: "New York New Jersey Stadium", kickoff: "2026-06-13T22:00:00Z", stage: "Group C" },
  { id: "gC2", group: "C", home: "Haiti", away: "Scotland", venue: "Boston Stadium, Boston", kickoff: "2026-06-14T01:00:00Z", stage: "Group C" },
  { id: "gC3", group: "C", home: "Scotland", away: "Morocco", venue: "Boston Stadium, Boston", kickoff: "2026-06-19T22:00:00Z", stage: "Group C" },
  { id: "gC4", group: "C", home: "Brazil", away: "Haiti", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-20T00:30:00Z", stage: "Group C" },
  { id: "gC5", group: "C", home: "Scotland", away: "Brazil", venue: "Miami Stadium, Miami", kickoff: "2026-06-24T22:00:00Z", stage: "Group C" },
  { id: "gC6", group: "C", home: "Morocco", away: "Haiti", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-24T22:00:00Z", stage: "Group C" },

  // ===== GROUP D: USA, Paraguay, Australia, Turkiye =====
  { id: "gD1", group: "D", home: "USA", away: "Paraguay", venue: "Los Angeles Stadium", kickoff: "2026-06-13T01:00:00Z", stage: "Group D" },
  { id: "gD2", group: "D", home: "Australia", away: "Turkiye", venue: "BC Place, Vancouver", kickoff: "2026-06-14T04:00:00Z", stage: "Group D" },
  { id: "gD3", group: "D", home: "USA", away: "Australia", venue: "Seattle Stadium, Seattle", kickoff: "2026-06-19T19:00:00Z", stage: "Group D" },
  { id: "gD4", group: "D", home: "Turkiye", away: "Paraguay", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-20T03:00:00Z", stage: "Group D" },
  { id: "gD5", group: "D", home: "Turkiye", away: "USA", venue: "Los Angeles Stadium", kickoff: "2026-06-26T02:00:00Z", stage: "Group D" },
  { id: "gD6", group: "D", home: "Paraguay", away: "Australia", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-26T02:00:00Z", stage: "Group D" },

  // ===== GROUP E: Germany, Curacao, Ivory Coast, Ecuador =====
  { id: "gE1", group: "E", home: "Germany", away: "Curacao", venue: "Houston Stadium, Houston", kickoff: "2026-06-14T17:00:00Z", stage: "Group E" },
  { id: "gE2", group: "E", home: "Ivory Coast", away: "Ecuador", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-14T23:00:00Z", stage: "Group E" },
  { id: "gE3", group: "E", home: "Germany", away: "Ivory Coast", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-20T20:00:00Z", stage: "Group E" },
  { id: "gE4", group: "E", home: "Ecuador", away: "Curacao", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-21T03:00:00Z", stage: "Group E" },
  { id: "gE5", group: "E", home: "Ecuador", away: "Germany", venue: "New York New Jersey Stadium", kickoff: "2026-06-25T20:00:00Z", stage: "Group E" },
  { id: "gE6", group: "E", home: "Curacao", away: "Ivory Coast", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-25T20:00:00Z", stage: "Group E" },

  // ===== GROUP F: Netherlands, Japan, Sweden, Tunisia =====
  { id: "gF1", group: "F", home: "Netherlands", away: "Japan", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-14T20:00:00Z", stage: "Group F" },
  { id: "gF2", group: "F", home: "Sweden", away: "Tunisia", venue: "Estadio Monterrey, Guadalupe", kickoff: "2026-06-15T02:00:00Z", stage: "Group F" },
  { id: "gF3", group: "F", home: "Netherlands", away: "Sweden", venue: "Houston Stadium, Houston", kickoff: "2026-06-20T17:00:00Z", stage: "Group F" },
  { id: "gF4", group: "F", home: "Tunisia", away: "Japan", venue: "Estadio Monterrey, Guadalupe", kickoff: "2026-06-21T04:00:00Z", stage: "Group F" },
  { id: "gF5", group: "F", home: "Japan", away: "Sweden", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-25T23:00:00Z", stage: "Group F" },
  { id: "gF6", group: "F", home: "Tunisia", away: "Netherlands", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-25T23:00:00Z", stage: "Group F" },

  // ===== GROUP G: Belgium, Egypt, Iran, New Zealand =====
  { id: "gG1", group: "G", home: "Belgium", away: "Egypt", venue: "BC Place, Vancouver", kickoff: "2026-06-15T19:00:00Z", stage: "Group G" },
  { id: "gG2", group: "G", home: "Iran", away: "New Zealand", venue: "Los Angeles Stadium", kickoff: "2026-06-16T01:00:00Z", stage: "Group G" },
  { id: "gG3", group: "G", home: "Belgium", away: "Iran", venue: "Los Angeles Stadium", kickoff: "2026-06-21T19:00:00Z", stage: "Group G" },
  { id: "gG4", group: "G", home: "New Zealand", away: "Egypt", venue: "BC Place, Vancouver", kickoff: "2026-06-22T01:00:00Z", stage: "Group G" },
  { id: "gG5", group: "G", home: "Egypt", away: "Iran", venue: "Seattle Stadium, Seattle", kickoff: "2026-06-26T03:00:00Z", stage: "Group G" },
  { id: "gG6", group: "G", home: "New Zealand", away: "Belgium", venue: "BC Place, Vancouver", kickoff: "2026-06-26T03:00:00Z", stage: "Group G" },

  // ===== GROUP H: Spain, Cape Verde, Saudi Arabia, Uruguay =====
  { id: "gH1", group: "H", home: "Spain", away: "Cape Verde", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-15T16:00:00Z", stage: "Group H" },
  { id: "gH2", group: "H", home: "Saudi Arabia", away: "Uruguay", venue: "Miami Stadium, Miami", kickoff: "2026-06-15T22:00:00Z", stage: "Group H" },
  { id: "gH3", group: "H", home: "Spain", away: "Saudi Arabia", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-21T16:00:00Z", stage: "Group H" },
  { id: "gH4", group: "H", home: "Uruguay", away: "Cape Verde", venue: "Miami Stadium, Miami", kickoff: "2026-06-21T22:00:00Z", stage: "Group H" },
  { id: "gH5", group: "H", home: "Cape Verde", away: "Saudi Arabia", venue: "Houston Stadium, Houston", kickoff: "2026-06-27T00:00:00Z", stage: "Group H" },
  { id: "gH6", group: "H", home: "Uruguay", away: "Spain", venue: "Estadio Guadalajara, Zapopan", kickoff: "2026-06-27T00:00:00Z", stage: "Group H" },

  // ===== GROUP I: France, Senegal, Iraq, Norway =====
  { id: "gI1", group: "I", home: "France", away: "Senegal", venue: "New York New Jersey Stadium", kickoff: "2026-06-16T19:00:00Z", stage: "Group I" },
  { id: "gI2", group: "I", home: "Iraq", away: "Norway", venue: "Boston Stadium, Boston", kickoff: "2026-06-16T22:00:00Z", stage: "Group I" },
  { id: "gI3", group: "I", home: "France", away: "Iraq", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-22T21:00:00Z", stage: "Group I" },
  { id: "gI4", group: "I", home: "Norway", away: "Senegal", venue: "New York New Jersey Stadium", kickoff: "2026-06-23T00:00:00Z", stage: "Group I" },
  { id: "gI5", group: "I", home: "Norway", away: "France", venue: "Boston Stadium, Boston", kickoff: "2026-06-26T19:00:00Z", stage: "Group I" },
  { id: "gI6", group: "I", home: "Senegal", away: "Iraq", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-26T19:00:00Z", stage: "Group I" },

  // ===== GROUP J: Argentina, Algeria, Austria, Jordan =====
  { id: "gJ1", group: "J", home: "Argentina", away: "Algeria", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-17T01:00:00Z", stage: "Group J" },
  { id: "gJ2", group: "J", home: "Austria", away: "Jordan", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-17T04:00:00Z", stage: "Group J" },
  { id: "gJ3", group: "J", home: "Argentina", away: "Austria", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-22T17:00:00Z", stage: "Group J" },
  { id: "gJ4", group: "J", home: "Jordan", away: "Algeria", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-23T03:00:00Z", stage: "Group J" },
  { id: "gJ5", group: "J", home: "Algeria", away: "Austria", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-28T02:00:00Z", stage: "Group J" },
  { id: "gJ6", group: "J", home: "Jordan", away: "Argentina", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-28T02:00:00Z", stage: "Group J" },

  // ===== GROUP K: Portugal, DR Congo, Uzbekistan, Colombia =====
  { id: "gK1", group: "K", home: "Portugal", away: "DR Congo", venue: "Houston Stadium, Houston", kickoff: "2026-06-17T17:00:00Z", stage: "Group K" },
  { id: "gK2", group: "K", home: "Uzbekistan", away: "Colombia", venue: "Mexico City Stadium, Mexico City", kickoff: "2026-06-18T02:00:00Z", stage: "Group K" },
  { id: "gK3", group: "K", home: "Portugal", away: "Uzbekistan", venue: "Houston Stadium, Houston", kickoff: "2026-06-23T17:00:00Z", stage: "Group K" },
  { id: "gK4", group: "K", home: "Colombia", away: "DR Congo", venue: "Estadio Guadalajara, Zapopan", kickoff: "2026-06-24T02:00:00Z", stage: "Group K" },
  { id: "gK5", group: "K", home: "Colombia", away: "Portugal", venue: "Miami Stadium, Miami", kickoff: "2026-06-27T23:30:00Z", stage: "Group K" },
  { id: "gK6", group: "K", home: "DR Congo", away: "Uzbekistan", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-27T23:30:00Z", stage: "Group K" },

  // ===== GROUP L: England, Croatia, Ghana, Panama =====
  { id: "gL1", group: "L", home: "England", away: "Croatia", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-17T20:00:00Z", stage: "Group L" },
  { id: "gL2", group: "L", home: "Ghana", away: "Panama", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-17T23:00:00Z", stage: "Group L" },
  { id: "gL3", group: "L", home: "England", away: "Ghana", venue: "Boston Stadium, Boston", kickoff: "2026-06-23T20:00:00Z", stage: "Group L" },
  { id: "gL4", group: "L", home: "Panama", away: "Croatia", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-23T23:00:00Z", stage: "Group L" },
  { id: "gL5", group: "L", home: "Panama", away: "England", venue: "New York New Jersey Stadium", kickoff: "2026-06-27T21:00:00Z", stage: "Group L" },
  { id: "gL6", group: "L", home: "Croatia", away: "Ghana", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-27T21:00:00Z", stage: "Group L" },

  // ===== ROUND OF 32 (16 matches, teams TBD) =====
  { id: "r32_1",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Los Angeles Stadium", kickoff: "2026-06-28T19:00:00Z", placeholder: true },
  { id: "r32_2",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Houston Stadium", kickoff: "2026-06-29T19:00:00Z", placeholder: true },
  { id: "r32_3",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Boston Stadium", kickoff: "2026-06-29T20:30:00Z", placeholder: true },
  { id: "r32_4",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Estadio Monterrey", kickoff: "2026-06-30T01:00:00Z", placeholder: true },
  { id: "r32_5",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Dallas Stadium", kickoff: "2026-06-30T17:00:00Z", placeholder: true },
  { id: "r32_6",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "New York New Jersey Stadium", kickoff: "2026-06-30T21:00:00Z", placeholder: true },
  { id: "r32_7",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Mexico City Stadium", kickoff: "2026-07-01T01:00:00Z", placeholder: true },
  { id: "r32_8",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Atlanta Stadium", kickoff: "2026-07-01T16:00:00Z", placeholder: true },
  { id: "r32_9",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Seattle Stadium", kickoff: "2026-07-01T20:00:00Z", placeholder: true },
  { id: "r32_10", stage: "Round of 32", home: "TBD", away: "TBD", venue: "San Francisco Bay Area Stadium", kickoff: "2026-07-02T20:00:00Z", placeholder: true },
  { id: "r32_11", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Los Angeles Stadium", kickoff: "2026-07-02T19:00:00Z", placeholder: true },
  { id: "r32_12", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Toronto Stadium", kickoff: "2026-07-02T23:00:00Z", placeholder: true },
  { id: "r32_13", stage: "Round of 32", home: "TBD", away: "TBD", venue: "BC Place, Vancouver", kickoff: "2026-07-03T03:00:00Z", placeholder: true },
  { id: "r32_14", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Dallas Stadium", kickoff: "2026-07-03T18:00:00Z", placeholder: true },
  { id: "r32_15", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Miami Stadium", kickoff: "2026-07-03T22:00:00Z", placeholder: true },
  { id: "r32_16", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Kansas City Stadium", kickoff: "2026-07-04T01:30:00Z", placeholder: true },

  // ===== ROUND OF 16 =====
  { id: "r16_1", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Houston Stadium", kickoff: "2026-07-04T17:00:00Z", placeholder: true },
  { id: "r16_2", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Philadelphia Stadium", kickoff: "2026-07-04T21:00:00Z", placeholder: true },
  { id: "r16_3", stage: "Round of 16", home: "TBD", away: "TBD", venue: "New York New Jersey Stadium", kickoff: "2026-07-05T20:00:00Z", placeholder: true },
  { id: "r16_4", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Mexico City Stadium", kickoff: "2026-07-06T00:00:00Z", placeholder: true },
  { id: "r16_5", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Dallas Stadium", kickoff: "2026-07-06T19:00:00Z", placeholder: true },
  { id: "r16_6", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Seattle Stadium", kickoff: "2026-07-07T00:00:00Z", placeholder: true },
  { id: "r16_7", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Atlanta Stadium", kickoff: "2026-07-07T16:00:00Z", placeholder: true },
  { id: "r16_8", stage: "Round of 16", home: "TBD", away: "TBD", venue: "BC Place, Vancouver", kickoff: "2026-07-07T20:00:00Z", placeholder: true },

  // ===== QUARTER-FINALS =====
  { id: "qf1", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Boston Stadium", kickoff: "2026-07-09T20:00:00Z", placeholder: true },
  { id: "qf2", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Los Angeles Stadium", kickoff: "2026-07-10T19:00:00Z", placeholder: true },
  { id: "qf3", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Miami Stadium", kickoff: "2026-07-11T20:00:00Z", placeholder: true },
  { id: "qf4", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Kansas City Stadium", kickoff: "2026-07-12T01:00:00Z", placeholder: true },

  // ===== SEMI-FINALS =====
  { id: "sf1", stage: "Semi-final", home: "TBD", away: "TBD", venue: "Dallas Stadium", kickoff: "2026-07-14T19:00:00Z", placeholder: true },
  { id: "sf2", stage: "Semi-final", home: "TBD", away: "TBD", venue: "Atlanta Stadium", kickoff: "2026-07-15T19:00:00Z", placeholder: true },

  // ===== THIRD PLACE =====
  { id: "3rd", stage: "Third Place", home: "TBD", away: "TBD", venue: "Miami Stadium", kickoff: "2026-07-18T21:00:00Z", placeholder: true },

  // ===== FINAL =====
  { id: "final", stage: "Final", home: "TBD", away: "TBD", venue: "New York New Jersey Stadium", kickoff: "2026-07-19T19:00:00Z", placeholder: true },
];

// Squad data for first goalscorer predictions
const WC2026_SQUADS = {
  "Mexico": ["H. Lozano","R. Jiménez","C. Vela","A. Guardado","H. Herrera","E. Álvarez","C. Salcedo","N. Araujo","H. Moreno","J. Sánchez","G. Ochoa (GK)","O. Pineda","S. Reyes","A. Vega","J. Corona","R. Alvarado"],
  "South Africa": ["P. Mothiba","T. Dolly","P. Tau","T. Zwane","T. Mokoena","S. Mkhize","T. Xulu","R. Lorch","L. de Reuck","R. Williams (GK)","B. Petersen (GK)","T. Stellenbosch","K. Dolly","S. Keet","E. Zungu","S. Mbatha"],
  "South Korea": ["H. Son","H. Hwang","C. Kwon","G. Hwang","I. Jeong","W. Paik","T. Kim","M. Kim","Y. Kim","J. Lee","S. Jo (GK)","B. Kim (GK)","J. Hwang","S. Moon","J. Cho","S. Hong"],
  "Czechia": ["P. Schick","A. Hlozek","T. Soucek","A. Barak","V. Coufal","D. Krejci","O. Celustka","T. Holes","J. Lingr","J. Provod","J. Stanek (GK)","T. Vaclik (GK)","M. Kuchta","L. Haraslin","L. Cerv","D. Jurasek"],
  "Canada": ["A. Davies","T. David","C. Larin","J. David","S. Eustaquio","A. Hutchinson","R. Adekugbe","K. Miller","S. Johnston","M. Henry","M. Crepeau (GK)","J. St. Clair (GK)","C. Buchanan","L. Cavallini","T. Beaulieu","I. Koné"],
  "Bosnia and Herzegovina": ["E. Dzeko","A. Prevljak","S. Kolasinac","M. Pjanic","G. Cimirot","S. Besic","E. Bicakcic","A. Zukanovic","T. Pavlovic","I. Sehic (GK)","I. Piric (GK)","H. Hajradinovic","N. Saric","B. Kovacevic","S. Rahimic","A. Loncar"],
  "Qatar": ["A. Afif","M. Muntari","H. Al-Haydos","A. Hatem","A. Hassan","B. Khoukhi","P. Miguel","R. Salman","B. Al-Rawi","T. Salman","S. Al-Sheeb (GK)","M. Al-Bakri (GK)","K. Boudiaf","A. Al-Haydos","H. Alaaeldin","A. Al-Rawi"],
  "Switzerland": ["G. Seferović","B. Embolo","X. Shaqiri","G. Amdouni","R. Freuler","G. Xhaka","S. Widmer","R. Rodríguez","M. Akanji","F. Schär","Y. Sommer (GK)","G. Mvogo (GK)","H. Sow","D. Ndoye","K. Vargas","M. Zuber"],
  "Brazil": ["Vinicius Jr","Rodrygo","Raphinha","L. Paquetá","C. Gomes","M. Guimarães","Éder Militão","M. Marquinhos","T. Silva","Alisson (GK)","Éderson (GK)","Gabriel Jesus","Gabriel Martinelli","Antony","Richarlison","Endrick"],
  "Morocco": ["Y. En-Nesyri","A. Harit","H. Ziyech","S. Amrabat","N. Ounahi","A. Hakimi","N. Mazraoui","A. Aguerd","R. Saïss","Y. Attiat-Allah","Y. Bounou (GK)","M. Zniti (GK)","I. Benali","S. Dari","M. Aboukhlal","I. Ezzalzouli"],
  "Haiti": ["N. Pierrot","S. Borgella","J. Pierre","S. Remy","K. Noel","G. Alexis","C. Herold","S. Jean-Baptiste","J. Anglade","J. Joseph (GK)","R. Dorelien (GK)","W. Guerrier","C. Martineau","D. Charles","M. Jean","P. Augustin"],
  "Scotland": ["L. Ferguson","A. Robertson","K. Tierney","C. McGregor","J. McGinn","B. Gilmour","N. Patterson","G. Hanley","J. Hendry","A. McGregor (GK)","C. Gordon (GK)","R. Christie","S. McTominay","C. Adams","T. Lawrence","K. Nisbet"],
  "USA": ["C. Pulisic","G. Weah","T. Adams","W. McKennie","B. Aaronson","Y. Musah","S. Dest","A. Robinson","M. Ream","T. Richards","M. Turner (GK)","E. Horvath (GK)","F. de la Torre","J. Ferreira","R. Pepi","J. McGlynn"],
  "Paraguay": ["A. Sanabria","R. Vera","M. Almirón","D. Segovia","J. Alonso","G. Gómez","O. Romero","F. Balbuena","I. Piris","J. Morel","A. Silva (GK)","A. Fernández (GK)","R. Segovia","M. Giménez","J. Enciso","C. Alonso"],
  "Australia": ["M. Leckie","M. Goodwin","A. Hrustic","A. Mooy","J. Irvine","K. Rowles","H. Souttar","N. Atkinson","A. Behich","B. Wright","M. Ryan (GK)","D. Vukovic (GK)","C. Boyle","J. Nisbet","R. McGree","T. Degenek"],
  "Turkiye": ["B. Yılmaz","O. Kahveci","H. Çalhanoğlu","C. Ünder","Y. Yazıcı","A. Ayhan","M. Söyüncü","Z. Çelik","M. Demiral","K. Akturkoglu","M. Çakır (GK)","A. Bayındır (GK)","E. Can","I. Yüksek","T. Müldür","B. Kesgin"],
  "Germany": ["K. Havertz","J. Füllkrug","L. Sané","F. Wirtz","İ. Gündoğan","L. Goretzka","J. Kimmich","A. Rüdiger","M. Hummels","J. Tah","M. Neuer (GK)","M. Flekken (GK)","T. Müller","S. Gnabry","K. Adeyemi","F. Nmecha"],
  "Curacao": ["B. Lens","J. Flemming","L. Fer","G. Croes","S. Martina","D. Padt (GK)","E. Botteghin","T. Thomas","R. Amofa","J. Clasie","K. Pinas","R. Mendes","C. Rudolph","E. Kluivert","K. Lasten","J. van Axel Dongen"],
  "Ivory Coast": ["D. Zaha","S. Haller","N. Pépé","G. Gradel","J.-M. Seri","I. Sangaré","S. Bah","W. Bailly","O. Diomandé","E. Dao","Y. Fofana (GK)","S. Diakité (GK)","M. Bamba","A. Koné","T. Doucoure","R. Gradel"],
  "Ecuador": ["E. Valencia","P. Ibarra","M. Caicedo","C. Estupiñán","J. Plata","A. Preciado","A. Mena","X. Arreaga","F. Hincapié","H. Galíndez (GK)","A. Domínguez (GK)","J. Cifuentes","G. Preciado","K. Rodríguez","D. Palacios","P. Pellistri"],
  "Netherlands": ["C. Gakpo","M. Depay","V. van Dijk","D. Blind","F. de Jong","T. Reijnders","D. Dumfries","N. Timber","S. de Vrij","D. Ake","B. Verbruggen (GK)","M. Flekken (GK)","X. Simons","W. Weghorst","L. de Jong","S. Berghuis"],
  "Japan": ["D. Ito","A. Ueda","H. Mitoma","T. Endo","A. Tomiyasu","H. Sakai","K. Itakura","M. Maya","Y. Nagatomo","T. Inoue","S. Gonda (GK)","D. Schmidt (GK)","K. Kamada","Y. Kubo","T. Morita","K. Harase"],
  "Sweden": ["A. Isak","V. Gyokeres","D. Kulusevski","E. Forsberg","S. Larsson","A. Ekdal","M. Lustig","L. Augustinsson","V. Lindelof","L. Olsson","R. Olsen (GK)","K. Johnsson (GK)","J. Elanga","Z. Ibrahimovic","M. Almqvist","O. Runesson"],
  "Tunisia": ["W. Khazri","Y. Msakni","E. Sliti","A. Ben Amor","E. Skhiri","M. Talbi","D. Bronn","A. Meriah","A. Drager","A. Dahmen (GK)","B. Hassen (GK)","S. Maaloul","H. Jaziri","K. Laïdouni","M. Ben Romdhane","I. Chetti"],
  "Belgium": ["R. Lukaku","K. De Bruyne","T. Hazard","Y. Carrasco","A. Witsel","J. Vertonghen","T. Alderweireld","T. Castagne","A. Tielemans","T. Courtois (GK)","K. Casteels (GK)","D. Mertens","L. Trossard","Y. Tielemans","O. Doku","J. Theate"],
  "Egypt": ["M. Salah","T. Mohamed","A. Magdy","O. Kamal","T. Hamed","A. Ashraf","A. Hegazi","O. Gabaski (GK)","M. El-Shenawy (GK)","M. El-Neny","O. Marmoush","A. Kamal","Z. Ahmed","A. Hafnawi","B. Hamdy","I. Fathi"],
  "Iran": ["S. Azmoun","M. Taremi","A. Jahanbakhsh","V. Amiri","S. Hosseini","M. Ezatolahi","E. Hajsafi","A. Golizadeh","M. Pouraliganji","R. Rezaeian","A. Beiranvand (GK)","H. Hosseini (GK)","K. Ansarifard","M. Karimi","A. Noorollahi","S. Ghoddos"],
  "New Zealand": ["C. Wood","R. De Vries","M. Wootton","T. McGarry","B. Old","W. McGarry","J. Neilson","C. Rojas","L. Cook (GK)","O. Sail (GK)","M. Garbett","R. Surman","H. McGarry","J. Cacace","T. Parata","A. Old"],
  "Spain": ["A. Morata","F. Torres","P. Gavi","P. Pedri","R. Yamal","N. Williams","R. Bellingham","M. Llorente","A. Laporte","D. Carvajal","U. Simón (GK)","R. Sánchez (GK)","D. Olmo","A. Baena","F. Ruiz","B. Collado"],
  "Cape Verde": ["Z. Tavares","H. Djon","H. Andrade","S. Lopes","E. Varela","F. Fortes","K. Andrade","R. Lima","J. Semedo","L. Moreira (GK)","K. Santos (GK)","D. Dias","B. Tavares","E. Mendes","S. Pires","F. Gomes"],
  "Saudi Arabia": ["S. Al-Dawsari","F. Al-Buraikan","H. Al-Bahri","S. Al-Ghanam","A. Al-Hassan","S. Al-Ghannam","H. Tambakti","A. Al-Amri","O. Al-Ghanim","A. Asiri","M. Al-Owais (GK)","Y. Al-Mosailem (GK)","N. Al-Aqidi","A. Al-Khaibari","S. Al-Malki","A. Al-Hamdan"],
  "Uruguay": ["L. Suárez","E. Cavani","D. Núñez","F. Valverde","R. Bentancur","M. Vecino","J. Giménez","D. Godín","G. Varela","M. Olivera","F. Muslera (GK)","S. Rochet (GK)","C. De La Cruz","F. Torres","G. De Arrascaeta","B. Núñez"],
  "France": ["K. Mbappé","O. Giroud","A. Griezmann","O. Dembélé","A. Tchouaméni","A. Rabiot","T. Hernández","B. Pavard","R. Varane","D. Upamecano","M. Maignan (GK)","H. Lloris (GK)","K. Benzema","M. Camavinga","E. Camavinga","Y. Fofana"],
  "Senegal": ["S. Mané","I. Sarr","B. Diallo","G. Mendy","P. Gueye","C. Kouyaté","K. Kouyaté","K. Koulibaly","S. Sabaly","M. Wagué","E. Mendy (GK)","A. Dieng (GK)","B. Sarr","M. Diatta","L. Balde","Y. Gueye"],
  "Iraq": ["A. Salim","A. Jasim","H. Ali","B. Mohammed","A. Adnan","A. Ameen","H. Al-Safi","A. Hamid","B. Ali","M. Karimi (GK)","D. Taha (GK)","A. Ridha","Y. Jabbar","M. Jabbar","I. Shahad","A. Ghafour"],
  "Norway": ["E. Haaland","M. Ødegaard","A. Sørloth","A. Oddsbjørn","S. Berge","M. Aursnes","K. Ajer","L. Ryerson","O. Nusa","S. Stiller","O. Nyland (GK)","J. Ørjan Nyland (GK)","P. Thorsby","F. Ajer","H. Normann","D. Udogie"],
  "Argentina": ["L. Messi","J. Álvarez","L. Martínez","A. Di María","R. De Paul","E. Fernández","N. Molina","M. Acuña","C. Romero","L. Paredes","E. Martínez (GK)","G. Rulli (GK)","P. Dybala","G. Lo Celso","T. Almada","F. Mac Allister"],
  "Algeria": ["R. Mahrez","I. Slimani","Y. Brahimi","A. Bennacer","H. Bensebaini","R. Ait-Nouri","D. Benlamri","M. Tahrat","A. Mandi","Z. Dridi (GK)","L. Gacem (GK)","A. Gouiri","S. Feghouli","A. Belaili","H. Aouar","N. Bentaleb"],
  "Austria": ["M. Arnautović","R. Sabitzer","D. Alaba","X. Schlager","S. Lainer","A. Baumgartner","K. Laimer","P. Wimmer","G. Wöber","M. Hinteregger","P. Pentz (GK)","H. Lindner (GK)","M. Gregoritsch","P. Lienhart","F. Entrup","L. Wolf"],
  "Jordan": ["M. Abu Nima","Y. Al-Naimat","B. Al-Saifi","A. Bani Yaseen","O. Al-Smadi","B. Al-Rawabdeh","A. Khalil","Y. Al-Bakkar","H. Bani Atiyeh","A. Shafi (GK)","F. Awawdeh (GK)","M. Al-Dardour","A. Suleiman","O. Al-Qandah","R. Zayed","K. Naimat"],
  "Portugal": ["C. Ronaldo","B. Fernandes","D. Jota","R. Leão","J. Moutinho","R. Horta","N. Mendes","R. Guerreiro","P. Magalhães","D. Dalot","R. Patrício (GK)","J. Costa (GK)","G. Ramos","F. Conceição","O. Neves","V. Kristiansen"],
  "DR Congo": ["S. Kakuta","A. Bongonda","P. Meschack","M. Chadrac","J. Masuaku","D. Mbemba","C. Luyindama","P. Mpoku","K. Mbokani","C. Kayembe (GK)","C. Ngimbi (GK)","Y. Bolasie","D. Idumba","J. Kayamba","G. Mundele","P. Kakuta"],
  "Uzbekistan": ["E. Shomurodov","J. Teshaev","A. Mirzayev","O. Zhamaletdinov","S. Mirzayev","D. Abdurakhmanov","A. Tursunov","U. Irismetov","H. Suyunov","I. Nishonov (GK)","A. Shatskiy (GK)","S. Jaloliddinov","L. Muydinov","B. Tursunov","K. Dzhalilov","B. Hamroyev"],
  "Colombia": ["F. Díaz","L. Díaz","J. Cuadrado","J. Quintero","M. Uribe","W. Barrios","D. Sánchez","J. Mina","O. Murillo","S. Arias","D. Ospina (GK)","C. Vargas (GK)","J. Lerma","E. Santos","B. Moreno","S. Medina"],
  "England": ["H. Kane","B. Saka","J. Bellingham","P. Foden","R. Sterling","D. Rice","K. Walker","J. Trippier","H. Maguire","J. Stones","J. Pickford (GK)","N. Pope (GK)","M. Rashford","J. Grealish","O. Watkins","C. Palmer"],
  "Croatia": ["L. Modrić","I. Perišić","M. Brozović","M. Kovačić","A. Kramarić","B. Sosa","J. Stanišić","D. Vida","J. Gvardiol","D. Lovren","D. Livaković (GK)","I. Ivušić (GK)","B. Petkovic","N. Vlašić","L. Ivanušec","M. Budimir"],
  "Ghana": ["J. Ayew","A. Ayew","T. Partey","D. Amartey","A. Salisu","T. Mensah","T. Abass","R. Awoyemi","L. Ati Zigi (GK)","J. Wollacott (GK)","I. Sulemana","F. Kudus","O. Semenyo","A. Fatawu","M. Zito","D. Asiedu"],
  "Panama": ["R. Torres","A. Murillo","A. Fajardo","A. Godoy","R. Quintero","E. Davis","M. Martínez","J. Murillo","A. Mosquera","L. Mejía (GK)","J. Penedo (GK)","A. Tejada","C. Harvey","M. Cox","A. Bárcenas","G. Torres"],
};

if (typeof module !== 'undefined') {
  module.exports = { WC2026_MATCHES, WC2026_SQUADS };
}
