// FIFA World Cup 2026 - Full Match Schedule
// Tournament runs June 11 - July 19, 2026
// Hosted across USA, Canada, Mexico

const WC2026_MATCHES = [
  // ===== GROUP STAGE =====
  // Group A
  { id: "gA1", group: "A", home: "Mexico", away: "Poland", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-11T19:00:00-06:00", stage: "Group A" },
  { id: "gA2", group: "A", home: "Saudi Arabia", away: "Argentina", venue: "MetLife Stadium, New York", kickoff: "2026-06-12T13:00:00-04:00", stage: "Group A" },
  { id: "gA3", group: "A", home: "Poland", away: "Saudi Arabia", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-16T16:00:00-07:00", stage: "Group A" },
  { id: "gA4", group: "A", home: "Argentina", away: "Mexico", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-16T19:00:00-05:00", stage: "Group A" },
  { id: "gA5", group: "A", home: "Argentina", away: "Poland", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-21T16:00:00-07:00", stage: "Group A" },
  { id: "gA6", group: "A", home: "Saudi Arabia", away: "Mexico", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-21T16:00:00-06:00", stage: "Group A" },

  // Group B
  { id: "gB1", group: "B", home: "USA", away: "Wales", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-12T17:00:00-07:00", stage: "Group B" },
  { id: "gB2", group: "B", home: "England", away: "Iran", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-13T13:00:00-05:00", stage: "Group B" },
  { id: "gB3", group: "B", home: "Wales", away: "Iran", venue: "MetLife Stadium, New York", kickoff: "2026-06-17T10:00:00-04:00", stage: "Group B" },
  { id: "gB4", group: "B", home: "England", away: "USA", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-17T16:00:00-07:00", stage: "Group B" },
  { id: "gB5", group: "B", home: "England", away: "Wales", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-21T20:00:00-07:00", stage: "Group B" },
  { id: "gB6", group: "B", home: "Iran", away: "USA", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-21T20:00:00-06:00", stage: "Group B" },

  // Group C
  { id: "gC1", group: "C", home: "France", away: "Australia", venue: "MetLife Stadium, New York", kickoff: "2026-06-13T10:00:00-04:00", stage: "Group C" },
  { id: "gC2", group: "C", home: "Denmark", away: "Tunisia", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-13T19:00:00-07:00", stage: "Group C" },
  { id: "gC3", group: "C", home: "Australia", away: "Tunisia", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-18T13:00:00-05:00", stage: "Group C" },
  { id: "gC4", group: "C", home: "France", away: "Denmark", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-18T19:00:00-07:00", stage: "Group C" },
  { id: "gC5", group: "C", home: "France", away: "Tunisia", venue: "MetLife Stadium, New York", kickoff: "2026-06-22T16:00:00-04:00", stage: "Group C" },
  { id: "gC6", group: "C", home: "Denmark", away: "Australia", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-22T16:00:00-07:00", stage: "Group C" },

  // Group D
  { id: "gD1", group: "D", home: "Spain", away: "Costa Rica", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-14T13:00:00-06:00", stage: "Group D" },
  { id: "gD2", group: "D", home: "Germany", away: "Japan", venue: "MetLife Stadium, New York", kickoff: "2026-06-14T16:00:00-04:00", stage: "Group D" },
  { id: "gD3", group: "D", home: "Costa Rica", away: "Japan", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-19T13:00:00-07:00", stage: "Group D" },
  { id: "gD4", group: "D", home: "Spain", away: "Germany", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-19T19:00:00-05:00", stage: "Group D" },
  { id: "gD5", group: "D", home: "Spain", away: "Japan", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-23T16:00:00-07:00", stage: "Group D" },
  { id: "gD6", group: "D", home: "Costa Rica", away: "Germany", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-23T16:00:00-06:00", stage: "Group D" },

  // Group E
  { id: "gE1", group: "E", home: "Brazil", away: "Serbia", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-14T19:00:00-05:00", stage: "Group E" },
  { id: "gE2", group: "E", home: "Switzerland", away: "Cameroon", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-15T13:00:00-07:00", stage: "Group E" },
  { id: "gE3", group: "E", home: "Serbia", away: "Cameroon", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-19T16:00:00-06:00", stage: "Group E" },
  { id: "gE4", group: "E", home: "Brazil", away: "Switzerland", venue: "MetLife Stadium, New York", kickoff: "2026-06-20T13:00:00-04:00", stage: "Group E" },
  { id: "gE5", group: "E", home: "Brazil", away: "Cameroon", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-24T16:00:00-07:00", stage: "Group E" },
  { id: "gE6", group: "E", home: "Switzerland", away: "Serbia", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-24T16:00:00-05:00", stage: "Group E" },

  // Group F
  { id: "gF1", group: "F", home: "Belgium", away: "Canada", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-15T16:00:00-07:00", stage: "Group F" },
  { id: "gF2", group: "F", home: "Morocco", away: "Croatia", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-15T19:00:00-06:00", stage: "Group F" },
  { id: "gF3", group: "F", home: "Canada", away: "Croatia", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-20T16:00:00-07:00", stage: "Group F" },
  { id: "gF4", group: "F", home: "Belgium", away: "Morocco", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-20T19:00:00-05:00", stage: "Group F" },
  { id: "gF5", group: "F", home: "Belgium", away: "Croatia", venue: "MetLife Stadium, New York", kickoff: "2026-06-25T16:00:00-04:00", stage: "Group F" },
  { id: "gF6", group: "F", home: "Morocco", away: "Canada", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-25T16:00:00-06:00", stage: "Group F" },

  // Group G
  { id: "gG1", group: "G", home: "Portugal", away: "Ghana", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-16T13:00:00-07:00", stage: "Group G" },
  { id: "gG2", group: "G", home: "Uruguay", away: "South Korea", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-16T13:00:00-05:00", stage: "Group G" },
  { id: "gG3", group: "G", home: "Ghana", away: "South Korea", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-21T13:00:00-06:00", stage: "Group G" },
  { id: "gG4", group: "G", home: "Portugal", away: "Uruguay", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-21T13:00:00-07:00", stage: "Group G" },
  { id: "gG5", group: "G", home: "Portugal", away: "South Korea", venue: "MetLife Stadium, New York", kickoff: "2026-06-26T16:00:00-04:00", stage: "Group G" },
  { id: "gG6", group: "G", home: "Ghana", away: "Uruguay", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-26T16:00:00-07:00", stage: "Group G" },

  // Group H
  { id: "gH1", group: "H", home: "Netherlands", away: "Senegal", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-17T13:00:00-06:00", stage: "Group H" },
  { id: "gH2", group: "H", home: "Ecuador", away: "Qatar", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-17T19:00:00-05:00", stage: "Group H" },
  { id: "gH3", group: "H", home: "Senegal", away: "Qatar", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-22T13:00:00-07:00", stage: "Group H" },
  { id: "gH4", group: "H", home: "Netherlands", away: "Ecuador", venue: "MetLife Stadium, New York", kickoff: "2026-06-22T13:00:00-04:00", stage: "Group H" },
  { id: "gH5", group: "H", home: "Netherlands", away: "Qatar", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-27T16:00:00-07:00", stage: "Group H" },
  { id: "gH6", group: "H", home: "Ecuador", away: "Senegal", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-27T16:00:00-06:00", stage: "Group H" },

  // Group I
  { id: "gI1", group: "I", home: "Colombia", away: "Nigeria", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-18T13:00:00-07:00", stage: "Group I" },
  { id: "gI2", group: "I", home: "Chile", away: "Ivory Coast", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-18T16:00:00-06:00", stage: "Group I" },
  { id: "gI3", group: "I", home: "Nigeria", away: "Ivory Coast", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-23T13:00:00-05:00", stage: "Group I" },
  { id: "gI4", group: "I", home: "Colombia", away: "Chile", venue: "MetLife Stadium, New York", kickoff: "2026-06-23T19:00:00-04:00", stage: "Group I" },
  { id: "gI5", group: "I", home: "Colombia", away: "Ivory Coast", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-28T16:00:00-07:00", stage: "Group I" },
  { id: "gI6", group: "I", home: "Nigeria", away: "Chile", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-28T16:00:00-06:00", stage: "Group I" },

  // Group J
  { id: "gJ1", group: "J", home: "Italy", away: "Albania", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-19T13:00:00-07:00", stage: "Group J" },
  { id: "gJ2", group: "J", home: "Austria", away: "Turkey", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-19T13:00:00-06:00", stage: "Group J" },
  { id: "gJ3", group: "J", home: "Albania", away: "Turkey", venue: "MetLife Stadium, New York", kickoff: "2026-06-24T13:00:00-04:00", stage: "Group J" },
  { id: "gJ4", group: "J", home: "Italy", away: "Austria", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-24T19:00:00-05:00", stage: "Group J" },
  { id: "gJ5", group: "J", home: "Italy", away: "Turkey", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-29T16:00:00-07:00", stage: "Group J" },
  { id: "gJ6", group: "J", home: "Austria", away: "Albania", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-29T16:00:00-06:00", stage: "Group J" },

  // Group K
  { id: "gK1", group: "K", home: "Hungary", away: "New Zealand", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-20T13:00:00-06:00", stage: "Group K" },
  { id: "gK2", group: "K", home: "Venezuela", away: "South Africa", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-20T19:00:00-07:00", stage: "Group K" },
  { id: "gK3", group: "K", home: "New Zealand", away: "South Africa", venue: "Rose Bowl, Los Angeles", kickoff: "2026-06-25T13:00:00-07:00", stage: "Group K" },
  { id: "gK4", group: "K", home: "Hungary", away: "Venezuela", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-25T13:00:00-05:00", stage: "Group K" },
  { id: "gK5", group: "K", home: "Hungary", away: "South Africa", venue: "MetLife Stadium, New York", kickoff: "2026-06-30T16:00:00-04:00", stage: "Group K" },
  { id: "gK6", group: "K", home: "Venezuela", away: "New Zealand", venue: "Estadio Azteca, Mexico City", kickoff: "2026-06-30T16:00:00-06:00", stage: "Group K" },

  // Group L
  { id: "gL1", group: "L", home: "Egypt", away: "DR Congo", venue: "Levi's Stadium, San Francisco", kickoff: "2026-06-21T19:00:00-07:00", stage: "Group L" },
  { id: "gL2", group: "L", home: "Paraguay", away: "Iraq", venue: "Estadio Akron, Guadalajara", kickoff: "2026-06-22T19:00:00-06:00", stage: "Group L" },
  { id: "gL3", group: "L", home: "DR Congo", away: "Iraq", venue: "AT&T Stadium, Dallas", kickoff: "2026-06-26T13:00:00-05:00", stage: "Group L" },
  { id: "gL4", group: "L", home: "Egypt", away: "Paraguay", venue: "SoFi Stadium, Los Angeles", kickoff: "2026-06-26T19:00:00-07:00", stage: "Group L" },
  { id: "gL5", group: "L", home: "Egypt", away: "Iraq", venue: "MetLife Stadium, New York", kickoff: "2026-07-01T16:00:00-04:00", stage: "Group L" },
  { id: "gL6", group: "L", home: "Paraguay", away: "DR Congo", venue: "Estadio BBVA, Monterrey", kickoff: "2026-07-01T16:00:00-06:00", stage: "Group L" },

  // ===== ROUND OF 32 (placeholders - teams TBD) =====
  { id: "r32_1", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T13:00:00-05:00", placeholder: true },
  { id: "r32_2", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T17:00:00-05:00", placeholder: true },
  { id: "r32_3", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T13:00:00-05:00", placeholder: true },
  { id: "r32_4", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T17:00:00-05:00", placeholder: true },
  { id: "r32_5", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T13:00:00-05:00", placeholder: true },
  { id: "r32_6", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T17:00:00-05:00", placeholder: true },
  { id: "r32_7", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T13:00:00-05:00", placeholder: true },
  { id: "r32_8", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T17:00:00-05:00", placeholder: true },
  { id: "r32_9", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-08T13:00:00-05:00", placeholder: true },
  { id: "r32_10", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-08T17:00:00-05:00", placeholder: true },
  { id: "r32_11", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-09T13:00:00-05:00", placeholder: true },
  { id: "r32_12", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-09T17:00:00-05:00", placeholder: true },
  { id: "r32_13", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-10T13:00:00-05:00", placeholder: true },
  { id: "r32_14", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-10T17:00:00-05:00", placeholder: true },
  { id: "r32_15", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T13:00:00-05:00", placeholder: true },
  { id: "r32_16", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T17:00:00-05:00", placeholder: true },

  // ===== ROUND OF 16 =====
  { id: "r16_1", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T13:00:00-05:00", placeholder: true },
  { id: "r16_2", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T17:00:00-05:00", placeholder: true },
  { id: "r16_3", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T13:00:00-05:00", placeholder: true },
  { id: "r16_4", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T17:00:00-05:00", placeholder: true },
  { id: "r16_5", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T13:00:00-05:00", placeholder: true },
  { id: "r16_6", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T17:00:00-05:00", placeholder: true },
  { id: "r16_7", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T13:00:00-05:00", placeholder: true },
  { id: "r16_8", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T17:00:00-05:00", placeholder: true },

  // ===== QUARTER-FINALS =====
  { id: "qf1", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-10T17:00:00-05:00", placeholder: true },
  { id: "qf2", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T13:00:00-05:00", placeholder: true },
  { id: "qf3", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T17:00:00-05:00", placeholder: true },
  { id: "qf4", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-12T13:00:00-05:00", placeholder: true },

  // ===== SEMI-FINALS =====
  { id: "sf1", stage: "Semi-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-14T17:00:00-05:00", placeholder: true },
  { id: "sf2", stage: "Semi-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-15T17:00:00-05:00", placeholder: true },

  // ===== THIRD PLACE =====
  { id: "3rd", stage: "Third Place", home: "TBD", away: "TBD", venue: "AT&T Stadium, Dallas", kickoff: "2026-07-18T15:00:00-05:00", placeholder: true },

  // ===== FINAL =====
  { id: "final", stage: "Final", home: "TBD", away: "TBD", venue: "MetLife Stadium, New York", kickoff: "2026-07-19T15:00:00-04:00", placeholder: true },
];

// Squad data for first goalscorer predictions
const WC2026_SQUADS = {
  "Argentina": ["L. Messi","J. Álvarez","L. Martínez","A. Di María","R. De Paul","E. Fernández","N. Molina","M. Acuña","C. Romero","L. Paredes","P. Dybala","G. Lo Celso","T. Almada","F. Mac Allister","W. Martínez","E. Martínez (GK)","G. Rulli (GK)"],
  "France": ["K. Mbappé","O. Giroud","A. Griezmann","O. Dembélé","A. Tchouaméni","A. Rabiot","T. Hernández","B. Pavard","R. Varane","D. Upamecano","M. Maignan (GK)","H. Lloris (GK)","K. Benzema","M. Camavinga","E. Camavinga","Y. Fofana"],
  "Brazil": ["Vinicius Jr","Neymar","Rodrygo","Raphinha","L. Paquetá","C. Gomes","M. Guimarães","Éder Militão","M. Marquinhos","T. Silva","Alisson (GK)","Éderson (GK)","Gabriel Jesus","Gabriel Martinelli","Antony","Richarlison"],
  "England": ["H. Kane","B. Saka","M. Bellingham","P. Foden","R. Sterling","D. Rice","K. Walker","J. Trippier","H. Maguire","J. Stones","J. Pickford (GK)","N. Pope (GK)","M. Rashford","J. Grealish","O. Watkins","C. Palmer"],
  "Germany": ["K. Havertz","J. Füllkrug","L. Sané","F. Wirtz","İ. Gündoğan","L. Goretzka","J. Kimmich","A. Rüdiger","M. Hummels","J. Tah","M. Neuer (GK)","M. Flekken (GK)","T. Müller","S. Gnabry","K. Adeyemi","F. Nmecha"],
  "Spain": ["A. Morata","F. Torres","P. Gavi","P. Pedri","R. Yamal","N. Williams","R. Bellingham","M. Llorente","A. Laporte","D. Carvajal","U. Simón (GK)","R. Sánchez (GK)","D. Olmo","A. Baena","F. Ruiz","B. Collado"],
  "Portugal": ["C. Ronaldo","B. Fernandes","D. Jota","R. Leão","J. Moutinho","R. Horta","N. Mendes","R. Guerreiro","P. Magalhães","D. Dalot","R. Patrício (GK)","J. Costa (GK)","G. Ramos","F. Conceição","O. Neves","V. Kristiansen"],
  "Netherlands": ["C. Gakpo","M. Depay","V. van Dijk","D. Blind","F. de Jong","T. Reijnders","D. Dumfries","N. Timber","S. de Vrij","D. Ake","M. Flekken (GK)","B. Verbruggen (GK)","X. Simons","W. Weghorst","L. de Jong","S. Berghuis"],
  "Belgium": ["R. Lukaku","E. Hazard","K. De Bruyne","T. Hazard","Y. Carrasco","A. Witsel","J. Vertonghen","T. Alderweireld","T. Castagne","A. Tielemans","T. Courtois (GK)","K. Casteels (GK)","D. Mertens","L. Trossard","Y. Tielemans","O. Doku"],
  "Italy": ["G. Scamacca","F. Chiesa","L. Pellegrini","N. Barella","J. Verratti","M. Tonali","G. Di Lorenzo","F. Acerbi","A. Bastoni","R. Mancini","G. Donnarumma (GK)","A. Meret (GK)","C. Immobile","L. Insigne","L. Locatelli","M. Calabria"],
  "Uruguay": ["L. Suárez","E. Cavani","D. Núñez","F. Valverde","R. Bentancur","M. Vecino","J. Giménez","D. Godín","G. Varela","M. Olivera","F. Muslera (GK)","S. Rochet (GK)","C. De La Cruz","F. Torres","G. De Arrascaeta","B. Núñez"],
  "Colombia": ["F. Díaz","L. Díaz","J. Cuadrado","J. Quintero","M. Uribe","W. Barrios","D. Sánchez","J. Mina","O. Murillo","S. Arias","D. Ospina (GK)","C. Vargas (GK)","J. Lerma","E. Santos","B. Moreno","S. Medina"],
  "Mexico": ["H. Lozano","C. Vela","R. Jiménez","A. Guardado","H. Herrera","E. Álvarez","C. Salcedo","N. Araujo","H. Moreno","J. Sánchez","G. Ochoa (GK)","A. Cota (GK)","O. Pineda","S. Reyes","A. Vega","J. Corona"],
  "USA": ["C. Pulisic","G. Weah","T. Adams","W. McKennie","B. Aaronson","Y. Musah","S. Dest","A. Robinson","M. Ream","T. Richards","M. Turner (GK)","E. Horvath (GK)","F. de la Torre","J. Ferreira","R. Pepi","J. McGlynn"],
  "Japan": ["D. Ito","A. Ueda","H. Mitoma","T. Endo","A. Tomiyasu","H. Sakai","K. Itakura","M. Maya","Y. Nagatomo","T. Inoue","S. Gonda (GK)","D. Schmidt (GK)","K. Kamada","K. Harase","Y. Kubo","T. Morita"],
  "South Korea": ["H. Son","H. Hwang","C. Kwon","G. Hwang","I. Jeong","W. Paik","T. Kim","M. Kim","Y. Kim","J. Lee","S. Jo (GK)","B. Kim (GK)","J. Hwang","S. Moon","J. Cho","S. Hong"],
  "Morocco": ["Y. En-Nesyri","A. Harit","H. Ziyech","S. Amrabat","N. Ounahi","A. Hakimi","N. Mazraoui","A. Aguerd","R. Saïss","Y. Attiat-Allah","Y. Bounou (GK)","M. Zniti (GK)","I. Benali","S. Dari","M. Aboukhlal","I. Ezzalzouli"],
  "Senegal": ["S. Mané","I. Sarr","B. Diallo","G. Mendy","P. Gueye","C. Kouyaté","K. Kouyaté","K. Koulibaly","S. Sabaly","M. Wagué","E. Mendy (GK)","A. Dieng (GK)","B. Sarr","M. Diatta","L. Balde","Y. Gueye"],
  "Croatia": ["L. Modrić","I. Perišić","M. Brozović","M. Kovačić","A. Kramarić","B. Sosa","J. Stanišić","D. Vida","J. Gvardiol","D. Lovren","D. Livaković (GK)","I. Ivušić (GK)","B. Petkovic","N. Vlašić","L. Ivanušec","M. Budimir"],
  "Serbia": ["A. Mitrović","D. Vlahović","D. Tadić","N. Milinković-Savić","S. Milinković-Savić","N. Gudelj","A. Pavlović","S. Pavlović","M. Veljković","N. Milenković","V. Milinković-Savić (GK)","P. Rajković (GK)","F. Kostić","M. Živković","L. Jović","S. Lazović"],
  "Switzerland": ["G. Seferović","B. Embolo","X. Shaqiri","G. Amdouni","R. Freuler","G. Xhaka","S. Widmer","R. Rodríguez","M. Akanji","F. Schär","Y. Sommer (GK)","G. Mvogo (GK)","H. Sow","M. Zuber","K. Vargas","D. Ndoye"],
  "Denmark": ["K. Dolberg","M. Braithwaite","C. Eriksen","P. Højbjerg","J. Maehle","A. Christensen","J. Vestergaard","S. Andersen","V. Kristiansen","P. Nørgaard","K. Schmeichel (GK)","O. Rønnow (GK)","A. Skov Olsen","R. Højlund","M. Damsgaard","B. Skov Olsen"],
  "Australia": ["M. Leckie","M. Goodwin","A. Hrustic","A. Mooy","J. Irvine","K. Rowles","H. Souttar","N. Atkinson","A. Behich","B. Wright","M. Ryan (GK)","D. Vukovic (GK)","C. Boyle","J. Nisbet","R. McGree","T. Degenek"],
  "Tunisia": ["W. Khazri","Y. Msakni","E. Sliti","N. Sliti","A. Ben Amor","E. Skhiri","M. Talbi","D. Bronn","A. Meriah","A. Drager","A. Dahmen (GK)","B. Hassen (GK)","S. Maaloul","F. Ben Mustapha","H. Jaziri","K. Laïdouni"],
  "Iran": ["S. Azmoun","M. Taremi","A. Jahanbakhsh","V. Amiri","S. Hosseini","M. Ezatolahi","E. Hajsafi","A. Golizadeh","M. Pouraliganji","R. Rezaeian","A. Beiranvand (GK)","H. Hosseini (GK)","K. Ansarifard","M. Karimi","A. Noorollahi","S. Ghoddos"],
  "Saudi Arabia": ["S. Al-Dawsari","F. Al-Buraikan","H. Al-Bahri","S. Al-Ghanam","S. Al-Malki","A. Al-Amri","A. Al-Hassan","S. Al-Ghannam","H. Tambakti","A. Al-Amri","M. Al-Owais (GK)","Y. Al-Mosailem (GK)","O. Al-Ghanim","A. Asiri","N. Al-Aqidi","A. Al-Khaibari"],
  "Poland": ["R. Lewandowski","A. Milik","K. Świderski","P. Zieliński","G. Krychowiak","K. Linetty","M. Cash","P. Frankowski","J. Bednarek","M. Glik","W. Szczęsny (GK)","Ł. Fabiański (GK)","D. Szymański","K. Piątek","S. Skóraś","N. Zalewski"],
  "Wales": ["G. Bale","K. Moore","H. Wilson","J. Ramsey","A. Norrington-Davies","O. Cooper","N. Williams","C. Rodon","B. Davies","T. Roberts","W. Hennessey (GK)","D. Ward (GK)","D. James","M. Smith","R. Wilson","J. Morrell"],
  "Ghana": ["J. Ayew","A. Ayew","K. Schär","B. Partey","T. Partey","D. Amartey","A. Salisu","T. Mensah","T. Abass","R. Awoyemi","L. Ati Zigi (GK)","J. Wollacott (GK)","I. Sulemana","F. Kudus","O. Semenyo","A. Fatawu"],
  "Ecuador": ["E. Valencia","P. Ibarra","M. Caicedo","C. Estupiñán","P. Pellistri","J. Plata","A. Preciado","A. Mena","X. Arreaga","F. Hincapié","H. Galíndez (GK)","A. Domínguez (GK)","J. Cifuentes","G. Preciado","K. Rodríguez","D. Palacios"],
  "Qatar": ["A. Afif","M. Muntari","H. Al-Haydos","A. Hatem","A. Hassan","B. Khoukhi","P. Miguel","R. Salman","B. Al-Rawi","T. Salman","S. Al-Sheeb (GK)","M. Al-Bakri (GK)","K. Boudiaf","A. Al-Haydos","A. Al-Rawi","H. Alaaeldin"],
  "Costa Rica": ["J. Campbell","M. Venegas","B. Ruiz","C. Borges","Y. Tejeda","C. Martínez","R. Torres","B. Oviedo","O. Duarte","K. Fuller","K. Navas (GK)","P. Sequeira (GK)","A. Guimarães","A. Contreras","F. Calvo","G. Gutiérrez"],
  "Canada": ["A. Davies","T. David","C. Larin","J. David","S. Eustaquio","A. Hutchinson","R. Adekugbe","K. Miller","S. Johnston","M. Henry","M. Crepeau (GK)","J. St. Clair (GK)","C. Buchanan","L. Cavallini","T. Beaulieu","I. Koné"],
  "Nigeria": ["V. Osimhen","K. Iheanacho","S. Chukwueze","A. Lookman","W. Troost-Ekong","F. Onyeka","A. Iwobi","O. Aina","K. Akanni","Z. Sanusi (GK)","F. Uzoho (GK)","E. Chukwuemeka","S. Nwabili","O. Ndidi","T. Awoniyi","P. Sadiq"],
  "Cameroon": ["V. Aboubakar","K. Toko Ekambi","B. Mbeumo","E. Choupo-Moting","A. Zambo Anguissa","P. Ntep","N. Ngadeu","H. Moukoudi","M. Tolo","C. Kunde","A. Onana (GK)","F. Epassy (GK)","J.-C. Castelletto","M. Hongla","E. Ondoua","A. Mbida"],
  "South Africa": ["P. Mothiba","T. Dolly","B. Mothiba","T. Zwane","T. Mokoena","B. Grobler","S. Mkhize","T. Xulu","R. Lorch","L. de Reuck","R. Williams (GK)","B. Petersen (GK)","T. Stellenbosch","P. Tau","K. Dolly","S. Keet"],
  "Ivory Coast": ["D. Zaha","S. Haller","N. Pépé","G. Gradel","J.-M. Seri","I. Sangaré","S. Bah","W. Bailly","O. Diomandé","E. Dao","Y. Fofana (GK)","S. Diakité (GK)","M. Bamba","A. Koné","T. Doucoure","R. Gradel"],
  "Chile": ["A. Sánchez","B. Brereton Díaz","E. Vargas","C. Aranguiz","A. Vidal","G. Medel","K. Beausejour","M. Isla","G. Medel","G. Arias (GK)","C. Bravo (GK)","J. Fuenzalida","B. Morales","J. Pedro Fuenzalida","I. Palacios","P. Díaz"],
  "Venezuela": ["S. Córdova","S. Rondón","Y. Rincón","T. Bernal","J. Martínez","A. González","J. Osorio","A. Vizcarrondo","J. Canelon","O. Hernández","W. Romo (GK)","R. Contreras (GK)","Y. Herrera","R. Peñaranda","J. Soteldo","L. Mago"],
  "Hungary": ["A. Szalai","R. Sallai","D. Kleinheisler","M. Schäfer","A. Fiola","W. Orbán","Á. Dibusz (GK)","P. Gulácsi (GK)","B. Dárdai","A. Nego","Z. Nagy","K. Varga","B. Szoboszlai","D. Csoboth","M. Botka","R. Gazdag"],
  "New Zealand": ["C. Wood","R. De Vries","M. Wootton","T. McGarry","N. McGarry","B. Old","W. McGarry","J. Neilson","C. Rojas","L. Cook (GK)","O. Sail (GK)","M. Garbett","R. Surman","H. McGarry","J. Cacace","T. Parata"],
  "Egypt": ["M. Salah","T. Mohamed","A. Magdy","O. Kamal","T. Hamed","A. Ashraf","A. Hegazi","O. Gabaski (GK)","M. El-Shenawy (GK)","M. El-Neny","O. Marmoush","A. Kamal","Z. Ahmed","A. Hafnawi","B. Hamdy","I. Fathi"],
  "DR Congo": ["S. Kakuta","A. Bongonda","P. Meschack","M. Chadrac","J. Masuaku","D. Mbemba","C. Luyindama","P. Mpoku","K. Mbokani","C. Kayembe (GK)","C. Ngimbi (GK)","Y. Bolasie","D. Idumba","J. Kayamba","G. Mundele","P. Kakuta"],
  "Paraguay": ["A. Sanabria","R. Vera","M. Almirón","D. Segovia","J. Alonso","G. Gómez","O. Romero","F. Balbuena","I. Piris","J. Morel","A. Silva (GK)","A. Fernández (GK)","R. Segovia","M. Giménez","J. Enciso","C. Alonso"],
  "Iraq": ["A. Salim","A. Jasim","H. Ali","B. Mohammed","A. Adnan","A. Ameen","H. Al-Safi","A. Hamid","B. Ali","M. Karimi (GK)","D. Taha (GK)","A. Ridha","Y. Jabbar","M. Jabbar","I. Shahad","A. Ghafour"],
  "Albania": ["A. Broja","E. Cikalleshi","R. Gruda","K. Asllani","R. Laci","A. Hysaj","F. Ismajli","K. Bare","E. Abrashi","E. Berisha (GK)","A. Strakosha (GK)","A. Memolla","A. Manaj","S. Roshi","E. Djimsiti","T. Berisha"],
  "Austria": ["M. Arnautović","R. Sabitzer","D. Alaba","X. Schlager","S. Lainer","A. Baumgartner","K. Laimer","P. Wimmer","G. Wöber","M. Hinteregger","P. Pentz (GK)","H. Lindner (GK)","M. Gregoritsch","P. Lienhart","F. Entrup","L. Wolf"],
  "Turkey": ["B. Yılmaz","O. Kahveci","H. Çalhanoğlu","C. Ünder","Y. Yazıcı","A. Ayhan","M. Söyüncü","Z. Çelik","M. Demiral","K. Akturkoglu","M. Çakır (GK)","A. Bayındır (GK)","E. Can","I. Yüksek","T. Müldür","B. Kesgin"],
};

if (typeof module !== 'undefined') {
  module.exports = { WC2026_MATCHES, WC2026_SQUADS };
}
