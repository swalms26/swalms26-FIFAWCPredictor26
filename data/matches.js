// FIFA World Cup 2026 - Official Match Schedule + Confirmed Squads
// Squads source: Al Jazeera / FIFA official, confirmed June 2 2026

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

  // ===== ROUND OF 32 =====
  { id: "r32_1",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-01T19:00:00Z", placeholder: true },
  { id: "r32_2",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-01T23:00:00Z", placeholder: true },
  { id: "r32_3",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-02T19:00:00Z", placeholder: true },
  { id: "r32_4",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-02T23:00:00Z", placeholder: true },
  { id: "r32_5",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-03T19:00:00Z", placeholder: true },
  { id: "r32_6",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-03T23:00:00Z", placeholder: true },
  { id: "r32_7",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T19:00:00Z", placeholder: true },
  { id: "r32_8",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-04T23:00:00Z", placeholder: true },
  { id: "r32_9",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T19:00:00Z", placeholder: true },
  { id: "r32_10", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-05T23:00:00Z", placeholder: true },
  { id: "r32_11", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T19:00:00Z", placeholder: true },
  { id: "r32_12", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-06T23:00:00Z", placeholder: true },
  { id: "r32_13", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T19:00:00Z", placeholder: true },
  { id: "r32_14", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-07T23:00:00Z", placeholder: true },
  { id: "r32_15", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-08T19:00:00Z", placeholder: true },
  { id: "r32_16", stage: "Round of 32", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-08T23:00:00Z", placeholder: true },

  // ===== ROUND OF 16 =====
  { id: "r16_1", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-09T19:00:00Z", placeholder: true },
  { id: "r16_2", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-09T23:00:00Z", placeholder: true },
  { id: "r16_3", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-10T19:00:00Z", placeholder: true },
  { id: "r16_4", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-10T23:00:00Z", placeholder: true },
  { id: "r16_5", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T19:00:00Z", placeholder: true },
  { id: "r16_6", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-11T23:00:00Z", placeholder: true },
  { id: "r16_7", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-12T19:00:00Z", placeholder: true },
  { id: "r16_8", stage: "Round of 16", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-12T23:00:00Z", placeholder: true },

  // ===== QUARTER-FINALS =====
  { id: "qf1", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-14T19:00:00Z", placeholder: true },
  { id: "qf2", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-14T23:00:00Z", placeholder: true },
  { id: "qf3", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-15T19:00:00Z", placeholder: true },
  { id: "qf4", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-15T23:00:00Z", placeholder: true },

  // ===== SEMI-FINALS =====
  { id: "sf1", stage: "Semi-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-17T23:00:00Z", placeholder: true },
  { id: "sf2", stage: "Semi-final", home: "TBD", away: "TBD", venue: "TBD", kickoff: "2026-07-18T23:00:00Z", placeholder: true },

  // ===== THIRD PLACE =====
  { id: "3rd", stage: "Third Place", home: "TBD", away: "TBD", venue: "Miami Stadium", kickoff: "2026-07-18T21:00:00Z", placeholder: true },

  // ===== FINAL =====
  { id: "final", stage: "Final", home: "TBD", away: "TBD", venue: "New York New Jersey Stadium", kickoff: "2026-07-19T19:00:00Z", placeholder: true },
];

// ===== OFFICIAL CONFIRMED SQUADS (FIFA, June 2 2026) =====
// Outfield players only (no GKs) for first goalscorer predictions
const WC2026_SQUADS = {
  "Algeria": ["Rayan Ait Nouri","Ramy Bensebaini","Achraf Abada","Zinedine Belaid","Rafik Belghali","Samir Chergui","Jaouen Hadjam","Aissa Mandi","Mohamed Amine Tougai","Houssem Aouar","Nabil Bentaleb","Hicham Boudaoui","Fares Chaibi","Ibrahim Maza","Yassine Titraoui","Ramiz Zerrouki","Mohamed Amine Amoura","Nadir Benbouali","Adil Boulbina","Fares Ghedjemis","Amine Gouiri","Riyad Mahrez","Anis Hadj Moussa"],
  "Argentina": ["Leonardo Balerdi","Gonzalo Montiel","Nicolas Tagliafico","Lisandro Martinez","Cristian Romero","Nicolas Otamendi","Facundo Medina","Nahuel Molina","Leandro Paredes","Rodrigo De Paul","Valentin Barco","Giovani Lo Celso","Exequiel Palacios","Alexis Mac Allister","Enzo Fernandez","Julian Alvarez","Lionel Messi","Nicolas Gonzalez","Thiago Almada","Giuliano Simeone","Nicolas Paz","Jose Manuel Lopez","Lautaro Martinez"],
  "Australia": ["Aziz Behich","Jordan Bos","Cameron Burgess","Alessandro Circati","Milos Degenek","Jason Geria","Lucas Herrington","Jacob Italiano","Harry Souttar","Kai Trewin","Cameron Devlin","Ajdin Hrustic","Jackson Irvine","Connor Metcalfe","Aiden O'Neill","Paul Okon-Engstler","Nestory Irankunda","Mathew Leckie","Awer Mabil","Mohamed Toure","Nishan Velupillay","Cristian Volpato","Tete Yengi"],
  "Austria": ["David Affengruber","David Alaba","Kevin Danso","Marco Friedl","Philipp Lienhart","Phillipp Mwene","Stefan Posch","Alexander Prass","Michael Svoboda","Christoph Baumgartner","Carney Chukwuemeka","Florian Grillitsch","Konrad Laimer","Marcel Sabitzer","Xaver Schlager","Romano Schmid","Alessandro Schopf","Nicolas Seiwald","Paul Wanner","Patrick Wimmer","Marko Arnautovic","Michael Gregoritsch","Sasa Kalajdzic"],
  "Belgium": ["Timothy Castagne","Zeno Debast","Maxim De Cuyper","Koni De Winter","Brandon Mechele","Thomas Meunier","Nathan Ngoy","Joaquin Seys","Arthur Theate","Kevin De Bruyne","Amadou Onana","Nicolas Raskin","Youri Tielemans","Hans Vanaken","Axel Witsel","Charles De Ketelaere","Jeremy Doku","Matias Fernandez-Pardo","Romelu Lukaku","Dodi Lukebakio","Diego Moreira","Alexis Saelemaekers","Leandro Trossard"],
  "Bosnia and Herzegovina": ["Sead Kolasinac","Amar Dedic","Nihad Mujakic","Nikola Katic","Tarik Muharemovic","Stjepan Radeljic","Dennis Hadzikadunic","Nidal Celik","Amir Hadziahmetovic","Ivan Sunjic","Ivan Basic","Dzenis Burnic","Ermin Mahmic","Benjamin Tahirovic","Amar Memic","Armin Gigovic","Kerim Alajbegovic","Esmir Bajraktarevic","Ermedin Demirovic","Jovo Lukic","Samed Bazdar","Haris Tabakovic","Edin Dzeko"],
  "Brazil": ["Alex Sandro","Bremer","Danilo","Douglas Santos","Gabriel Magalhaes","Ibanez","Leo Pereira","Marquinhos","Wesley","Bruno Guimaraes","Casemiro","Danilo Santos","Fabinho","Lucas Paqueta","Endrick","Gabriel Martinelli","Igor Thiago","Luiz Henrique","Matheus Cunha","Neymar Jr","Raphinha","Rayan","Vinicius Jr"],
  "Canada": ["Alistair Johnston","Derek Cornelius","Richie Laryea","Niko Sigur","Joel Waterman","Luc de Fougerolles","Moise Bombito","Alphonso Davies","Alfie Jones","Stephen Eustaquio","Ismael Kone","Tajon Buchanan","Mathieu Choiniere","Ali Ahmed","Nathan Saliba","Liam Millar","Jacob Shaffelburg","Jonathan Osorio","Jonathan David","Cyle Larin","Tani Oluwaseyi","Promise David"],
  "Cape Verde": ["Sidny Cabral","Diney Borges","Logan Costa","Roberto Lopes","Steven Moreira","Wagner Pina","Kelvin Pires","Joao Paulo Fernandes","Ianique Stopira Tavares","Telmo Arcanjo","Deroy Duarte","Laros Duarte","Jamiro Monteiro","Kevin Pina","Yannick Semedo","Gilson Benchimol","Jovane Cabral","Dailon Livramento","Ryan Mendes","Nuno da Costa","Garry Rodrigues","Willy Semedo","Helio Varela"],
  "Colombia": ["Davinson Sanchez","Jhon Lucumi","Yerry Mina","Willer Ditta","Daniel Munoz","Santiago Arias","Johan Mojica","Deiver Machado","Richard Rios","Jefferson Lerma","Kevin Castano","Juan Camilo Portilla","Gustavo Puerta","Jhon Arias","Jorge Carrascal","Juan Fernando Quintero","James Rodriguez","Jaminton Campaz","Juan Camilo Hernandez","Luis Diaz","Luis Suarez","Carlos Gomez","Jhon Cordoba"],
  "Croatia": ["Josko Gvardiol","Duje Caleta-Car","Josip Sutalo","Josip Stanisic","Marin Pongracic","Martin Erlic","Luka Vuskovic","Luka Modric","Mateo Kovacic","Mario Pasalic","Nikola Vlasic","Luka Sucic","Martin Baturina","Kristijan Jakic","Petar Sucic","Nikola Moro","Toni Fruk","Ivan Perisic","Andrej Kramaric","Ante Budimir","Marco Pasalic","Petar Musa","Igor Matanovic"],
  "Curacao": ["Riechedly Bazoer","Joshua Brenet","Roshon van Eijma","Sherel Floranus","Deveron Fonville","Jurien Gaari","Armando Obispo","Shurandy Sambo","Juninho Bacuna","Leandro Bacuna","Livano Comenencia","Kevin Felida","Ar'jany Martha","Tyrese Noslin","Godfried Roemeratoe","Jeremy Antonisse","Tahith Chong","Kenji Gorre","Sontje Hansen","Gervane Kastaneer","Brandley Kuwas","Jurgen Locadia","Jearl Margaritha"],
  "Czechia": ["Vladimir Coufal","David Doudera","Tomas Holes","Robin Hranac","Stepan Chaloupek","David Jurasek","Ladislav Krejci","Jaroslav Zeleny","David Zima","Lukas Cerv","Vladimir Darida","Lukas Provod","Michal Sadilek","Hugo Sochurek","Alexandr Sojka","Tomas Soucek","Pavel Sulc","Denis Visinsky","Adam Hlozek","Tomas Chory","Mojmir Chytil","Jan Kuchta","Patrik Schick"],
  "DR Congo": ["Dylan Batubinsika","Gedeon Kalulu","Steve Kapuadi","Joris Kayembe","Arthur Masuaku","Chancel Mbemba","Axel Tuanzebe","Aaron Wan-Bissaka","Brian Cipenga","Meshack Elia","Gael Kakuta","Edo Kayembe","Nathanael Mbuku","Samuel Moutoussamy","Ngal'ayel Mukau","Charles Pickel","Noah Sadiki","Aaron Tshibola","Cedric Bakambu","Simon Banza","Fiston Mayele","Yoane Wissa","Theo Bongonda"],
  "Ecuador": ["Piero Hincapie","Willian Pacho","Pervis Estupinan","Felix Torres","Joel Ordonez","Jackson Porozo","Angelo Preciado","Yaimar Medina","Moises Caicedo","Alan Franco","Kendry Paez","Gonzalo Plata","Pedro Vite","Jordy Alcivar","Denil Castillo","John Yeboah","Nilson Angulo","Alan Minda","Enner Valencia","Kevin Rodriguez","Jordy Caicedo","Anthony Valencia","Jeremy Arevalo"],
  "Egypt": ["Mohamed Abdelmonem","Mohamed Hany","Yasser Ibrahim","Hossam Abdelmaguid","Ahmed Fattouh","Tarek Alaa","Rami Rabia","Karim Hafez","Marwan Attia","Ahmed Sayed Zizo","Mahmoud Hassan Trezeguet","Emam Ashour","Mostafa Abdel Raouf","Mohannad Lasheen","Haitham Hassan","Mahmoud Saber","Ibrahim Adel","Nabil Emad","Hamdi Fathi","Mohamed Salah","Omar Marmoush","Hamza Abdel Karim"],
  "England": ["Reece James","Ezri Konsa","Jarell Quansah","John Stones","Marc Guehi","Dan Burn","Nico O'Reilly","Djed Spence","Tino Livramento","Declan Rice","Elliot Anderson","Kobbie Mainoo","Jordan Henderson","Morgan Rogers","Jude Bellingham","Eberechi Eze","Harry Kane","Ivan Toney","Ollie Watkins","Bukayo Saka","Marcus Rashford","Anthony Gordon","Noni Madueke"],
  "France": ["Lucas Digne","Malo Gusto","Lucas Hernandez","Theo Hernandez","Ibrahima Konate","Maxence Lacroix","Jules Kounde","William Saliba","Dayot Upamecano","N'Golo Kante","Manu Kone","Adrien Rabiot","Aurelien Tchouameni","Warren Zaire-Emery","Maghnes Akliouche","Bradley Barcola","Rayan Cherki","Ousmane Dembele","Desire Doue","Michael Olise","Kylian Mbappe","Jean-Philippe Mateta","Marcus Thuram"],
  "Germany": ["Nico Schlotterbeck","David Raum","Nathaniel Brown","Jonathan Tah","Waldemar Anton","Joshua Kimmich","Malick Thiaw","Antonio Rudiger","Pascal Gross","Leon Goretzka","Felix Nmecha","Jamal Musiala","Nadiem Amiri","Jamie Leweling","Lennart Karl","Florian Wirtz","Leroy Sane","Aleksandar Pavlovic","Angelo Stiller","Kai Havertz","Nick Woltemade","Deniz Undav","Maximilian Beier"],
  "Ghana": ["Jonas Adjetey","Derrick Luckassen","Gideon Mensah","Abdul Mumin","Jerome Opoku","Kojo Oppong Preprah","Baba Abdul Rahman","Alidu Seidu","Marvin Senaya","Augustine Boakye","Abdul Fatawu Issahaku","Elisha Owusu","Thomas Partey","Kwasi Sibo","Kamal Deen Sulemana","Caleb Yirenkyi","Prince Kwabena Adu","Jordan Ayew","Christopher Bonsu Baah","Ernest Nuamah","Antoine Semenyo","Brandon Thomas-Asante","Inaki Williams"],
  "Haiti": ["Ricardo Ade","Carlens Arcus","Hannes Delcroix","Jean-Kevin Duverne","Martin Experience","Duke Lacroix","Wilguens Paugain","Keeto Thermoncy","Carl Fred Sainte","Jean-Ricner Bellegarde","Leverton Pierre","Danley Jean Jacques","Woodensky Pierre","Dominique Simon","Josue Casimir","Louicius Deedson","Derrick Etienne Jr.","Yassin Fortune","Wilson Isidor","Lenny Joseph","Duckens Nazon","Frantzdy Pierrot","Ruben Providence"],
  "Iran": ["Danial Eiri","Ehsan Hajsafi","Saleh Hardani","Hossein Kanaani","Shoja Khalilzadeh","Milad Mohammadi","Ali Nemati","Ramin Rezaeian","Rouzbeh Cheshmi","Saeid Ezatolahi","Mehdi Ghaedi","Saman Ghoddos","Mohammad Ghorbani","Alireza Jahanbakhsh","Mohammad Mohebi","Amir Mohammad Razzaghinia","Mehdi Torabi","Aria Yousefi","Ali Alipour","Dennis Dargahi","Amirhossein Hosseinzadeh","Mehdi Taremi","Shahriar Moghanlou"],
  "Iraq": ["Hussein Ali","Manaf Younis","Zaid Tahseen","Rebin Sulaka","Akam Hashem","Merchas Doski","Ahmed Yahya","Zaid Ismail","Frans Putros","Mustafa Saadoon","Amir Al Ammari","Kevin Yakob","Zidane Iqbal","Aimar Sher","Ibrahim Bayesh","Ahmed Qasim","Youssef Amyn","Marko Farji","Ali Jassim","Ali Al Hamadi","Ali Yousef","Aymen Hussein","Mohanad Ali"],
  "Ivory Coast": ["Emmanuel Agbadou","Christopher Operi","Ousmane Diomande","Guela Doue","Ghislain Konan","Odilon Kossounou","Wilfried Singo","Evan Ndicka","Seko Fofana","Parfait Guiagon","Christ Inao Oulai","Franck Kessie","Ibrahim Sangare","Jean Michael Seri","Simon Adingra","Ange-Yoan Bonny","Amad Diallo","Oumar Diakite","Yan Diomande","Evann Guessand","Nicolas Pepe","Bazoumana Toure","Elye Wahi"],
  "Japan": ["Ko Itakura","Hiroki Ito","Yuto Nagatomo","Ayumu Seko","Yukinari Sugawara","Junnosuke Suzuki","Shogo Taniguchi","Takehiro Tomiyasu","Tsuyoshi Watanabe","Ritsu Doan","Wataru Endo","Junya Ito","Daichi Kamada","Takefusa Kubo","Keito Nakamura","Kaishu Sano","Ao Tanaka","Keisuke Goto","Daizen Maeda","Koki Ogawa","Kento Shiogai","Yuito Suzuki","Ayase Ueda"],
  "Jordan": ["Mohammad Abu Hashish","Abdullah Nasib","Hussam Abu Dhahab","Yazan Al Arab","Mohammad Abu Alnadi","Salem Obaid","Saed Al Rosan","Ehsan Haddad","Anas Badawi","Amer Jamous","Noor Al Rawabdeh","Rajaei Ayed","Ibrahim Sadeh","Mohannad Abu Taha","Nizar Al Rashdan","Mohammad Al Dawoud","Mahmoud Mardahi","Mohammad Abu Zraiq","Ali Olwan","Mousa Al Tamari","Odeh Fakhoury","Ibrahim Sabra","Ali Azaizeh"],
  "Mexico": ["Jorge Sanchez","Israel Reyes","Cesar Montes","Johan Vasquez","Jesus Gallardo","Mateo Chavez","Edson Alvarez","Erik Lira","Orbelin Pineda","Alvaro Fidalgo","Brian Gutierrez","Luis Romo","Obed Vargas","Gilberto Mora","Luis Chavez","Roberto Alvarado","Cesar Huerta","Alexis Vega","Julian Quinones","Guillermo Martinez","Armando Gonzalez","Santiago Gimenez","Raul Jimenez"],
  "Morocco": ["Noussair Mazraoui","Anas Salah-Eddine","Youssef Bellammari","Achraf Hakimi","Zakaria El Ouahdi","Nayef Aguerd","Chadi Riad","Redouane Halhal","Issa Diop","Samir El Mourabet","Ayoub Bouaddi","Neil El Aynaoui","Sofyan Amrabat","Azzedine Ounahi","Bilal El Khannouss","Ismael Saibari","Abdesamad Ezzalzouli","Chemsdine Talbi","Soufiane Rahimi","Ayoub El Kaabi","Brahim Diaz","Yassine Gessim","Ayoube Amaimouni-Echghouyab"],
  "Netherlands": ["Nathan Ake","Virgil van Dijk","Denzel Dumfries","Jan Paul van Hecke","Jurrien Timber","Jorrel Hato","Micky van de Ven","Ryan Gravenberch","Frenkie de Jong","Teun Koopmeiners","Tijjani Reijnders","Marten de Roon","Guus Til","Quinten Timber","Mats Wieffer","Brian Brobbey","Memphis Depay","Cody Gakpo","Noa Lang","Donyell Malen","Crysencio Summerville","Wout Weghorst","Justin Kluivert"],
  "New Zealand": ["Tyler Bindon","Michael Boxall","Liberato Cacace","Francis de Vries","Callan Elliot","Tim Payne","Nando Pijnaker","Tommy Smith","Finn Surman","Lachlan Bayliss","Joe Bell","Matt Garbett","Eli Just","Callum McCowatt","Ben Old","Alex Rufer","Marko Stamenic","Sarpreet Singh","Ryan Thomas","Kosta Barbarouses","Jesse Randall","Ben Waine","Chris Wood"],
  "Norway": ["Kristoffer Vassbakk Ajer","Fredrik Bjorkan","Henrik Falchener","Sondre Langas","Torbjorn Heggem","Marcus Holmgren Pedersen","Julian Ryerson","David Moller Wolfe","Leo Ostigard","Thelonious Aasgaard","Fredrik Aursnes","Patrick Berg","Sander Berge","Oscar Bobb","Jens Petter Hauge","Antonio Nusa","Andreas Schjelderup","Morten Thorsby","Kristian Thorstvedt","Martin Odegaard","Erling Haaland","Alexander Sorloth","Jorgen Strand Larsen"],
  "Panama": ["Cesar Blackman","Jorge Gutierrez","Amir Murillo","Fidel Escobar","Andres Andrade","Edgardo Farina","Jose Cordoba","Eric Davis","Jiovany Ramos","Roderick Miller","Anibal Godoy","Adalberto Carrasquilla","Carlos Harvey","Cristian Martinez","Jose Luis Rodriguez","Cesar Yanis","Yoel Barcenas","Alberto Quintero","Azarias Londono","Ismael Diaz","Cecilio Waterman","Jose Fajardo","Tomas Rodriguez"],
  "Paraguay": ["Juan Caceres","Gustavo Velazquez","Gustavo Gomez","Junior Alonso","Jose Canale","Omar Alderete","Alexandro Maidana","Fabian Balbuena","Diego Gomez","Mauricio Magalhaes","Damian Bobadilla","Braian Ojeda","Andres Cubas","Matias Galarza","Alejandro Gamarra","Gustavo Caballero","Ramon Sosa","Alex Arce","Isidro Pitta","Gabriel Avalos","Miguel Almiron","Julio Enciso","Antonio Sanabria"],
  "Portugal": ["Tomas Araujo","Joao Cancelo","Diogo Dalot","Ruben Dias","Goncalo Inacio","Nuno Mendes","Matheus Nunes","Nelson Semedo","Renato Veiga","Samuel Costa","Bruno Fernandes","Joao Neves","Ruben Neves","Bernardo Silva","Vitinha","Francisco Conceicao","Joao Felix","Goncalo Guedes","Rafael Leao","Pedro Neto","Goncalo Ramos","Cristiano Ronaldo","Francisco Trincao"],
  "Qatar": ["Boualem Khoukhi","Pedro Miguel","Sultan Al Brake","Al Hashmi Al Hussain","Ayoub Al Alawi","Issa Laye","Lucas Mendes","Homam Al Amin","Ahmed Fathi","Jassim Gaber","Assim Madibo","Abdulaziz Hatem","Karim Boudiaf","Mohammed Mannai","Almoez Ali","Akram Afif","Tahsin Mohammed","Edmilson Junior","Ahmed Al-Janehi","Ahmed Alaa","Hassan Al Haydos","Mohammed Muntari","Yusuf Abdurisag"],
  "Saudi Arabia": ["Saud Abdulhamid","Jehad Thakri","Abdulelah Al Amri","Hassan Tambakti","Ali Lajami","Hassan Kadesh","Moteb Al Harbi","Nawaf Boushal","Ali Majrashi","Mohammed Abu Alshamat","Ziyad Al Johani","Nasser Al Dawsari","Mohamed Kanno","Abdullah Al Khaibari","Alaa Al Hejji","Musab Al Juwayr","Sultan Mandash","Ayman Yahya","Khalid Al Ghannam","Salem Al Dawsari","Abdullah Al Hamdan","Feras Al Brikan","Saleh Al Shehri"],
  "Scotland": ["Grant Hanley","Jack Hendry","Aaron Hickey","Dom Hyam","Scott McKenna","Nathan Patterson","Anthony Ralston","Andy Robertson","John Souttar","Kieran Tierney","Ryan Christie","Findlay Curtis","Lewis Ferguson","Tyler Fletcher","Ben Gannon-Doak","John McGinn","Kenny McLean","Scott McTominay","Che Adams","Lyndon Dykes","George Hirst","Lawrence Shankland","Ross Stewart"],
  "Senegal": ["Krepin Diatta","Antoine Mendy","Kalidou Koulibaly","El Hadji Malick Diouf","Mamadou Sarr","Moussa Niakhate","Abdoulaye Seck","Ismail Jakobs","Idrissa Gana Gueye","Pape Gueye","Lamine Camara","Habib Diarra","Pathe Ciss","Pape Matar Sarr","Bara Sapoko Ndiaye","Sadio Mane","Ismaila Sarr","Iliman Ndiaye","Assane Diao","Ibrahim Mbaye","Nicolas Jackson","Bamba Dieng","Cherif Ndiaye"],
  "South Africa": ["Aubrey Modiba","Khuliso Mudau","Khulumani Ndamane","Kamogelo Sebelebele","Nkosinathi Sibisi","Bradley Cross","Samukele Kabini","Olwethu Makhanya","Thabang Matuludi","Mbekezeli Mbokazi","Ime Okon","Oswin Appollis","Thalente Mbatha","Relebohile Mofokeng","Jayden Adams","Teboho Mokoena","Themba Zwane","Sphephelo Sithole","Evidence Makgopa","Tshepang Moremi","Lyle Foster","Thapelo Maseko","Iqraam Rayners"],
  "South Korea": ["Jens Castrop","Lee Hanbeom","Park Jinseob","Lee Kihyuk","Kim Minjae","Kim Moonhwan","Kim Taehyeon","Lee Taeseok","Seol Youngwoo","Cho Wije","Lee Donggyeong","Hwang Heechan","Yang Hyunjun","Hwang Inbeom","Lee Jaesung","Kim Jingyu","Eom Jisung","Bae Junho","Lee Kangin","Paik Seungho","Cho Guesung","Son Heungmin"],
  "Spain": ["Dani Carvajal","Aymeric Laporte","Robin Le Normand","Alejandro Grimaldo","Eder Militao","Pau Cubarsi","Daniel Vivian","Pedri","Fabian Ruiz","Rodri","Martin Zubimendi","Dani Olmo","Mikel Merino","Mikel Oyarzabal","Lamine Yamal","Nico Williams","Alvaro Morata","Bryan Gill","Ferran Torres","Yeremy Pino","Ayoze Perez"],
  "Sweden": ["Victor Nilsson Lindelof","Joakim Nilsson","Mikael Lustig","Filip Helander","Emil Krafth","Ludwig Augustinsson","Joel Andersson","Mattias Svanberg","Jens Cajuste","Viktor Claesson","Dejan Kulusevski","Emil Forsberg","Samuel Dahl","Karl Henriksson","Pontus Almqvist","Jordan Larsson","Alexander Isak","Victor Gyokeres","Zlatan Ibrahimovic","Robin Quaison","Patrik Walemark"],
  "Switzerland": ["Ricardo Rodriguez","Fabian Schar","Manuel Akanji","Nico Elvedi","Silvan Widmer","Edimilson Fernandes","Xherdan Shaqiri","Granit Xhaka","Remo Freuler","Fabian Rieder","Michel Aebischer","Vincent Sierro","Zeki Amdouni","Breel Embolo","Dan Ndoye","Kwadwo Duah","Noah Okafor","Ruben Vargas","Ardon Jashari"],
  "Tunisia": ["Dylan Bronn","Ali Maaloul","Montassar Talbi","Hamza Rafia","Mohamed Amine Ben Hmida","Youssef Msakni","Ellyes Skhiri","Mohamed Ali Ben Romdhane","Hannibal Mejbri","Anis Ben Slimane","Wahbi Khazri","Seifeddine Jaziri","Issam Jebali","Sayfallah Ltaief","Taha Yassine Khenissi"],
  "Turkiye": ["Mert Muldur","Zeki Celik","Abdulkerim Bardakci","Samet Akaydin","Ferdi Kadioglu","Caglar Soyuncu","Merih Demiral","Orkun Kokcu","Hakan Calhanoglu","Salih Ozcan","Ismail Yuksek","Arda Guler","Kerem Akturkoglu","Yunus Akgun","Baris Alper Yilmaz","Yusuf Yazici","Ozan Kabak","Cenk Tosun","Baris Yilmaz","Oguz Kurt","Semih Kilicsoy"],
  "Uruguay": ["Ronald Araujo","Sebastian Coates","Nahitan Nandez","Jose Maria Gimenez","Martin Caceres","Mathias Olivera","Marcelo Saracchi","Rodrigo Bentancur","Federico Valverde","Matias Vecino","Facundo Pellistri","Giorgian De Arrascaeta","Manuel Ugarte","Maximiliano Araujo","Nicolas De La Cruz","Fabricio Diaz","Agustin Canobbio","Darwin Nunez","Luis Suarez","Edinson Cavani","Maximiliano Gomez","Brian Ocampo","Facundo Torres"],
  "USA": ["Sergino Dest","Max Arfsten","Alex Freeman","Mark McKenzie","Tim Ream","Chris Richards","Antonee Robinson","Miles Robinson","Joe Scally","Auston Trusty","Tyler Adams","Sebastian Berhalter","Weston McKennie","Gio Reyna","Cristian Roldan","Malik Tillman","Brenden Aaronson","Folarin Balogun","Ricardo Pepi","Christian Pulisic","Tim Weah","Haji Wright","Alex Zendejas"],
  "Uzbekistan": ["Eldor Shomurodov","Jasur Yakhshiboev","Akbar Tursunov","Shukhrat Mukhammadiev","Akramjon Komilov","Jaloliddin Masharipov","Dostonbek Khamdamov","Abdulaziz Norchaev","Temur Jalolov","Otabek Shukurov","Jamshid Iskanderov","Bekhruzbek Sayfiev","Khojiakbar Alijonov","Bobur Abdikholikov","Nodir Turaev","Sherzod Tursunov","Behruz Tursunov"],
};

if (typeof module !== 'undefined') {
  module.exports = { WC2026_MATCHES, WC2026_SQUADS };
}
