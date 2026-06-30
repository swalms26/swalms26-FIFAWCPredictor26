// FIFA World Cup 2026 - Official Match Schedule + Squads
// Squads source: Official FIFA Squad List PDF (Version 1, 28 June 2026) - all 48 teams, outfield players

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
  { id: "gE4", group: "E", home: "Ecuador", away: "Curacao", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-21T00:00:00Z", stage: "Group E" },
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
  { id: "gG5", group: "G", home: "Egypt", away: "Iran", venue: "Lumen Field, Seattle", kickoff: "2026-06-27T03:00:00Z", stage: "Group G" },
  { id: "gG6", group: "G", home: "New Zealand", away: "Belgium", venue: "BC Place, Vancouver", kickoff: "2026-06-27T03:00:00Z", stage: "Group G" },

  // ===== GROUP H: Spain, Cape Verde, Saudi Arabia, Uruguay =====
  { id: "gH1", group: "H", home: "Spain", away: "Cape Verde", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-15T16:00:00Z", stage: "Group H" },
  { id: "gH2", group: "H", home: "Saudi Arabia", away: "Uruguay", venue: "Miami Stadium, Miami", kickoff: "2026-06-15T22:00:00Z", stage: "Group H" },
  { id: "gH3", group: "H", home: "Spain", away: "Saudi Arabia", venue: "Atlanta Stadium, Atlanta", kickoff: "2026-06-21T16:00:00Z", stage: "Group H" },
  { id: "gH4", group: "H", home: "Uruguay", away: "Cape Verde", venue: "Miami Stadium, Miami", kickoff: "2026-06-21T22:00:00Z", stage: "Group H" },
  { id: "gH5", group: "H", home: "Cape Verde", away: "Saudi Arabia", venue: "NRG Stadium, Houston", kickoff: "2026-06-27T00:00:00Z", stage: "Group H" },
  { id: "gH6", group: "H", home: "Uruguay", away: "Spain", venue: "Estadio Akron, Zapopan", kickoff: "2026-06-27T00:00:00Z", stage: "Group H" },

  // ===== GROUP I: France, Senegal, Iraq, Norway =====
  { id: "gI1", group: "I", home: "France", away: "Senegal", venue: "New York New Jersey Stadium", kickoff: "2026-06-16T19:00:00Z", stage: "Group I" },
  { id: "gI2", group: "I", home: "Iraq", away: "Norway", venue: "Boston Stadium, Boston", kickoff: "2026-06-16T22:00:00Z", stage: "Group I" },
  { id: "gI3", group: "I", home: "France", away: "Iraq", venue: "Philadelphia Stadium, Philadelphia", kickoff: "2026-06-22T21:00:00Z", stage: "Group I" },
  { id: "gI4", group: "I", home: "Norway", away: "Senegal", venue: "New York New Jersey Stadium", kickoff: "2026-06-23T00:00:00Z", stage: "Group I" },
  { id: "gI5", group: "I", home: "Norway", away: "France", venue: "Gillette Stadium, Foxborough", kickoff: "2026-06-26T19:00:00Z", stage: "Group I" },
  { id: "gI6", group: "I", home: "Senegal", away: "Iraq", venue: "BMO Field, Toronto", kickoff: "2026-06-26T19:00:00Z", stage: "Group I" },

  // ===== GROUP J: Argentina, Algeria, Austria, Jordan =====
  { id: "gJ1", group: "J", home: "Argentina", away: "Algeria", venue: "Kansas City Stadium, Kansas City", kickoff: "2026-06-17T01:00:00Z", stage: "Group J" },
  { id: "gJ2", group: "J", home: "Austria", away: "Jordan", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-17T04:00:00Z", stage: "Group J" },
  { id: "gJ3", group: "J", home: "Argentina", away: "Austria", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-22T17:00:00Z", stage: "Group J" },
  { id: "gJ4", group: "J", home: "Jordan", away: "Algeria", venue: "San Francisco Bay Area Stadium", kickoff: "2026-06-23T03:00:00Z", stage: "Group J" },
  { id: "gJ5", group: "J", home: "Algeria", away: "Austria", venue: "Arrowhead Stadium, Kansas City", kickoff: "2026-06-28T02:00:00Z", stage: "Group J" },
  { id: "gJ6", group: "J", home: "Jordan", away: "Argentina", venue: "AT&T Stadium, Arlington", kickoff: "2026-06-28T02:00:00Z", stage: "Group J" },

  // ===== GROUP K: Portugal, DR Congo, Uzbekistan, Colombia =====
  { id: "gK1", group: "K", home: "Portugal", away: "DR Congo", venue: "Houston Stadium, Houston", kickoff: "2026-06-17T17:00:00Z", stage: "Group K" },
  { id: "gK2", group: "K", home: "Uzbekistan", away: "Colombia", venue: "Mexico City Stadium, Mexico City", kickoff: "2026-06-18T02:00:00Z", stage: "Group K" },
  { id: "gK3", group: "K", home: "Portugal", away: "Uzbekistan", venue: "Houston Stadium, Houston", kickoff: "2026-06-23T17:00:00Z", stage: "Group K" },
  { id: "gK4", group: "K", home: "Colombia", away: "DR Congo", venue: "Estadio Guadalajara, Zapopan", kickoff: "2026-06-24T02:00:00Z", stage: "Group K" },
  { id: "gK5", group: "K", home: "Colombia", away: "Portugal", venue: "Hard Rock Stadium, Miami Gardens", kickoff: "2026-06-27T23:30:00Z", stage: "Group K" },
  { id: "gK6", group: "K", home: "DR Congo", away: "Uzbekistan", venue: "Mercedes-Benz Stadium, Atlanta", kickoff: "2026-06-27T23:30:00Z", stage: "Group K" },

  // ===== GROUP L: England, Croatia, Ghana, Panama =====
  { id: "gL1", group: "L", home: "England", away: "Croatia", venue: "Dallas Stadium, Dallas", kickoff: "2026-06-17T20:00:00Z", stage: "Group L" },
  { id: "gL2", group: "L", home: "Ghana", away: "Panama", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-17T23:00:00Z", stage: "Group L" },
  { id: "gL3", group: "L", home: "England", away: "Ghana", venue: "Boston Stadium, Boston", kickoff: "2026-06-23T20:00:00Z", stage: "Group L" },
  { id: "gL4", group: "L", home: "Panama", away: "Croatia", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-23T23:00:00Z", stage: "Group L" },
  { id: "gL5", group: "L", home: "Panama", away: "England", venue: "MetLife Stadium, East Rutherford", kickoff: "2026-06-27T21:00:00Z", stage: "Group L" },
  { id: "gL6", group: "L", home: "Croatia", away: "Ghana", venue: "Lincoln Financial Field, Philadelphia", kickoff: "2026-06-27T21:00:00Z", stage: "Group L" },

  // ===== ROUND OF 32 =====
  { id: "r32_1",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "SoFi Stadium, Inglewood", kickoff: "2026-06-28T19:00:00Z", placeholder: true },
  { id: "r32_2",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "NRG Stadium, Houston", kickoff: "2026-06-29T17:00:00Z", placeholder: true },
  { id: "r32_3",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Gillette Stadium, Foxborough", kickoff: "2026-06-29T20:30:00Z", placeholder: true },
  { id: "r32_4",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Estadio BBVA, Monterrey", kickoff: "2026-06-30T01:00:00Z", placeholder: true },
  { id: "r32_5",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "AT&T Stadium, Arlington", kickoff: "2026-06-30T17:00:00Z", placeholder: true },
  { id: "r32_6",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "MetLife Stadium, East Rutherford", kickoff: "2026-06-30T21:00:00Z", placeholder: true },
  { id: "r32_7",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Estadio Azteca, Mexico City", kickoff: "2026-07-01T01:00:00Z", placeholder: true },
  { id: "r32_8",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Mercedes-Benz Stadium, Atlanta", kickoff: "2026-07-01T16:00:00Z", placeholder: true },
  { id: "r32_9",  stage: "Round of 32", home: "TBD", away: "TBD", venue: "Lumen Field, Seattle", kickoff: "2026-07-01T20:00:00Z", placeholder: true },
  { id: "r32_10", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Levi's Stadium, Santa Clara", kickoff: "2026-07-02T00:00:00Z", placeholder: true },
  { id: "r32_11", stage: "Round of 32", home: "TBD", away: "TBD", venue: "SoFi Stadium, Inglewood", kickoff: "2026-07-02T19:00:00Z", placeholder: true },
  { id: "r32_12", stage: "Round of 32", home: "TBD", away: "TBD", venue: "BMO Field, Toronto", kickoff: "2026-07-02T23:00:00Z", placeholder: true },
  { id: "r32_13", stage: "Round of 32", home: "TBD", away: "TBD", venue: "BC Place, Vancouver", kickoff: "2026-07-03T03:00:00Z", placeholder: true },
  { id: "r32_14", stage: "Round of 32", home: "TBD", away: "TBD", venue: "AT&T Stadium, Arlington", kickoff: "2026-07-03T18:00:00Z", placeholder: true },
  { id: "r32_15", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Hard Rock Stadium, Miami Gardens", kickoff: "2026-07-03T22:00:00Z", placeholder: true },
  { id: "r32_16", stage: "Round of 32", home: "TBD", away: "TBD", venue: "Arrowhead Stadium, Kansas City", kickoff: "2026-07-04T01:30:00Z", placeholder: true },

  // ===== ROUND OF 16 =====
  { id: "r16_1", stage: "Round of 16", home: "TBD", away: "TBD", venue: "NRG Stadium, Houston", kickoff: "2026-07-04T17:00:00Z", placeholder: true },
  { id: "r16_2", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Lincoln Financial Field, Philadelphia", kickoff: "2026-07-04T21:00:00Z", placeholder: true },
  { id: "r16_3", stage: "Round of 16", home: "TBD", away: "TBD", venue: "MetLife Stadium, East Rutherford", kickoff: "2026-07-05T20:00:00Z", placeholder: true },
  { id: "r16_4", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Estadio Azteca, Mexico City", kickoff: "2026-07-06T00:00:00Z", placeholder: true },
  { id: "r16_5", stage: "Round of 16", home: "TBD", away: "TBD", venue: "AT&T Stadium, Arlington", kickoff: "2026-07-06T19:00:00Z", placeholder: true },
  { id: "r16_6", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Lumen Field, Seattle", kickoff: "2026-07-07T00:00:00Z", placeholder: true },
  { id: "r16_7", stage: "Round of 16", home: "TBD", away: "TBD", venue: "Mercedes-Benz Stadium, Atlanta", kickoff: "2026-07-07T16:00:00Z", placeholder: true },
  { id: "r16_8", stage: "Round of 16", home: "TBD", away: "TBD", venue: "BC Place, Vancouver", kickoff: "2026-07-07T20:00:00Z", placeholder: true },

  // ===== QUARTER-FINALS =====
  { id: "qf1", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Gillette Stadium, Foxborough", kickoff: "2026-07-09T20:00:00Z", placeholder: true },
  { id: "qf2", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "SoFi Stadium, Inglewood", kickoff: "2026-07-10T19:00:00Z", placeholder: true },
  { id: "qf3", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Hard Rock Stadium, Miami Gardens", kickoff: "2026-07-11T21:00:00Z", placeholder: true },
  { id: "qf4", stage: "Quarter-final", home: "TBD", away: "TBD", venue: "Arrowhead Stadium, Kansas City", kickoff: "2026-07-12T01:00:00Z", placeholder: true },

  // ===== SEMI-FINALS =====
  { id: "sf1", stage: "Semi-final", home: "TBD", away: "TBD", venue: "AT&T Stadium, Arlington", kickoff: "2026-07-14T19:00:00Z", placeholder: true },
  { id: "sf2", stage: "Semi-final", home: "TBD", away: "TBD", venue: "Mercedes-Benz Stadium, Atlanta", kickoff: "2026-07-15T19:00:00Z", placeholder: true },

  // ===== THIRD PLACE =====
  { id: "3rd", stage: "Third Place", home: "TBD", away: "TBD", venue: "Hard Rock Stadium, Miami Gardens", kickoff: "2026-07-18T21:00:00Z", placeholder: true },

  // ===== FINAL =====
  { id: "final", stage: "Final", home: "TBD", away: "TBD", venue: "MetLife Stadium, East Rutherford", kickoff: "2026-07-19T19:00:00Z", placeholder: true },
];

const WC2026_SQUADS = {
  "Algeria": ["Aissa Mandi","Achref Abada","Mohamed Amine Tougai","Zineddine Belaid","Ramiz Zerrouki","Riyad Mahrez","Houssem Aouar","Amine Gouiri","Fares Chaibi","Anis Hadj Moussa","Nadhir Benbouali","Jaouen Hadjam","Hicham Boudaoui","Rayan Ait Nouri","Rak Belghali","Mohamed Amoura","Nabil Bentaleb","Adil Boulbina","Ramy Bensebaini","Ibrahim Maza","Yassine Titraoui","Fares Ghedjemis","Samir Chergui"],
  "Argentina": ["Marcos Senesi","Nicolas Tagliafico","Gonzalo Montiel","Leandro Paredes","Lisandro Martinez","Rodrigo De Paul","Valentin Barco","Julian Alvarez","Lionel Messi","Giovani Lo Celso","Cristian Romero","Exequiel Palacios","Nico Gonzalez","Thiago Almada","Giuliano Simeone","Nico Paz","Nicolas Otamendi","Alexis Mac Allister","Jose Manuel Lopez","Lautaro Martinez","Enzo Fernandez","Facundo Medina","Nahuel Molina"],
  "Australia": ["Milos Degenek","Alessandro Circati","Jacob Italiano","Jordan Bos","Jason Geria","Mathew Leckie","Connor Metcalfe","Mohamed Toure","Ajdin Hrustic","Awer Mabil","Aiden Oneill","Cameron Devlin","Kai Trewin","Aziz Behich","Nestory Irankunda","Harry Souttar","Cristian Volpato","Cameron Burgess","Jackson Irvine","Nishan Velupillay","Paul Okon Engstler","Lucas Herrington","Tete Yengi"],
  "Austria": ["David Affengruber","Kevin Danso","Xaver Schlager","Stefan Posch","Nicolas Seiwald","Marko Arnautovic","David Alaba","Marcel Sabitzer","Florian Grillitsch","Michael Gregoritsch","Sasa Kalajdzic","Philipp Lienhart","Phillip Mwene","Carney Chukwuemeka","Romano Schmid","Dejan Ljubicic","Konrad Laimer","Patrick Wimmer","Alexander Prass","Marco Friedl","Paul Wanner","Michael Svoboda","Alessandro Schoepf"],
  "Belgium": ["Zeno Debast","Arthur Theate","Brandon Mechele","Maxim De Cuyper","Axel Witsel","Kevin De Bruyne","Youri Tielemans","Romelu Lukaku","Leandro Trossard","Jeremy Doku","Dodi Lukebakio","Thomas Meunier","Koni De Winter","Charles De Ketelaere","Joaquin Seys","Diego Moreira","Hans Vanaken","Timothy Castagne","Alexis Saelemaekers","Nicolas Raskin","Amadou Onana","Nathan Ngoy","Matias Fernandez Pardo"],
  "Bosnia and Herzegovina": ["Nihad Mujakic","Dennis Hadzikadunic","Tarik Muharemovic","Sead Kolasinac","Benjamin Tahirovic","Amar Dedic","Armin Gigovic","Samed Bazdar","Ermedin Demirovic","Edin Dzeko","Ivan Basic","Ivan Sunjic","Amar Memic","Amir Hadziahmetovic","Dzenis Burnic","Nikola Katic","Kerim Alajbegovic","Esmir Bajraktarevic","Stjepan Radeljic","Haris Tabakovic","Arjan Malic","Jovo Lukic","Ermin Mahmic"],
  "Brazil": ["Gabriel Magalhaes","Marquinhos","Casemiro","Alex Sandro","Vinicius Junior","Bruno Guimaraes","Matheus Cunha","Neymar","Raphinha","Danilo","Bremer","Leo Pereira","Douglas Santos","Fabinho","Danilo Santos","Endrick","Lucas Paqueta","Luiz Henrique","Gabriel Martinelli","Roger Ibanez","Igor Thiago","Rayan"],
  "Canada": ["Alistair Johnston","Ale Jones","Luc De Fougerolles","Joel Waterman","Mathieu Choiniere","Stephen Eustaquio","Ismael Kone","Cyle Larin","Jonathan David","Liam Millar","Tani Oluwaseyi","Derek Cornelius","Jacob Shaffelburg","Moise Bombito","Tajon Buchanan","Alphonso Davies","Ali Ahmed","Jonathan Osorio","Richie Laryea","Niko Sigur","Promise David","Nathan Saliba","Jayden Nelson"],
  "Cape Verde": ["Ianique Stopira","Edilson Diney Borges","Roberto Pico Lopes","Logan Costa","Kevin Pina","Jovane Cabral","Joao Paulo","Gilson Benchimol","Jamiro Monteiro","Garry Rodrigues","Sidny Lopes Cabral","Deroy Duarte","Laros Duarte","Jair Yannick Semedo","Willy Semedo","Telmo Arcanjo","Dailon Livramento","Ryan Mendes","Nuno Da Costa","Steven Moreira","Wagner Pina","Kelvin Pires","Helio Varela"],
  "Colombia": ["Daniel Munoz","Jhon Lucumi","Santiago Arias","Kevin Castano","Richard Rios","Luis Diaz","Jorge Carrascal","Jhon Cordoba","James Rodriguez","Jhon Arias","Yerry Mina","Gustavo Puerta","Juan Portilla","Jefferson Lerma","Johan Mojica","Willer Ditta","Cucho Hernandez","Juan Quintero","Jaminton Campaz","Deiver Machado","Davinson Sanchez","Luis Suarez","Andres Gomez"],
  "Croatia": ["Josip Stanisic","Marin Pongracic","Josko Gvardiol","Duje Caleta Car","Josip Sutalo","Nikola Moro","Mateo Kovacic","Andrej Kramaric","Luka Modric","Ante Budimir","Nikola Vlasic","Ivan Perisic","Mario Pasalic","Martin Baturina","Petar Sucic","Kristijan Jakic","Toni Fruk","Igor Matanovic","Luka Sucic","Luka Vuskovic","Marco Pasalic","Martin Erlic","Petar Musa"],
  "Curacao": ["Shurandy Sambo","Jurien Gaari","Roshon Van Eijma","Sherel Floranus","Godfried Roemeratoe","Juninho Bacuna","Livano Comenencia","Juergen Locadia","Leandro Bacuna","Jeremy Antonisse","Sontje Hansen","Tyrese Noslin","Kenji Gorre","Arjany Martha","Jearl Margaritha","Brandley Kuwas","Armando Obispo","Gervane Kastaneer","Joshua Brenet","Tahith Chong","Kevin Felida","Riechedly Bazoer","Deveron Fonville"],
  "Czechia": ["David Zima","Tomas Holes","Robin Hranac","Vladimir Coufal","Stepan Chaloupek","Ladislav Krejci","Vladimir Darida","Adam Hlozek","Patrik Schick","Jan Kuchta","Lukas Cerv","Mojmir Chytil","David Jurasek","Pavel Sulc","Lukas Provod","Michal Sadilek","Tomas Chory","Jaroslav Zeleny","David Doudera","Tomas Soucek","Alexandr Sojka","Hugo Sochurek","Denis Visinsky"],
  "DR Congo": ["Aaron Wan Bissaka","Steve Kapuadi","Axel Tuanzebe","Dylan Batubinsika","Ngalayel Mukau","Nathanael Mbuku","Samuel Moutoussamy","Brian Cipenga","Theo Bongonda","Gael Kakuta","Joris Kayembe","Meschack Elia","Noah Sadiki","Aaron Tshibola","Cedric Bakambu","Charles Pickel","Fiston Mayele","Yoane Wissa","Chancel Mbemba","Simon Banza","Gedeon Kalulu","Edo Kayembe","Arthur Masuaku"],
  "Ecuador": ["Felix Torres","Piero Hincapie","Joel Ordonez","Jordy Alcivar","Willian Pacho","Pervis Estupinan","Anthony Valencia","John Yeboah","Kendry Paez","Kevin Rodriguez","Enner Valencia","Alan Minda","Pedro Vite","Jordy Caicedo","Angelo Preciado","Denil Castillo","Gonzalo Plata","Nilson Angulo","Alan Franco","Moises Caicedo","Jeremy Arevalo","Jackson Porozo","Yaimar Medina"],
  "Egypt": ["Yasser Ibrahim","Mohamed Hany","Hossam Abdelmaguid","Ramy Rabia","Mohamed Abdelmoneim","Mahmoud Trezeguet","Emam Ashour","Hamza Abdelkarim","Mohamed Salah","Mostafa Zico","Haissem Hassan","Ahmed Fatouh","Hamdy Fathy","Karim Hafez","Mohanad Lashin","Nabil Donga","Marawan Attia","Ibrahim Adel","Mahmoud Saber","Omar Marmoush","Tarek Alaa","Ahmed Zizo"],
  "England": ["Ezri Konsa","Nico O'Reilly","Declan Rice","John Stones","Marc Guehi","Bukayo Saka","Elliot Anderson","Harry Kane","Jude Bellingham","Marcus Rashford","Trevoh Chalobah","Jordan Henderson","Dan Burn","Kobbie Mainoo","Morgan Rogers","Anthony Gordon","Ollie Watkins","Noni Madueke","Eberechi Eze","Ivan Toney","Reece James","Djed Spence","Jarell Quansah"],
  "France": ["Malo Gusto","Lucas Digne","Dayot Upamecano","Jules Kounde","Manu Kone","Ousmane Dembele","Aurelien Tchouameni","Marcus Thuram","Kylian Mbappe","Michael Olise","Bradley Barcola","Ngolo Kante","Adrien Rabiot","Ibrahima Konate","William Saliba","Warren Zaire Emery","Theo Hernandez","Desire Doue","Lucas Hernandez","Jean-Philippe Mateta","Rayan Cherki","Maghnes Akliouche","Maxence Lacroix"],
  "Germany": ["Antonio Ruediger","Waldemar Anton","Jonathan Tah","Aleksandar Pavlovic","Joshua Kimmich","Kai Havertz","Leon Goretzka","Jamie Leweling","Jamal Musiala","Nick Woltemade","Pascal Gross","Maximilian Beier","Nico Schlotterbeck","Angelo Stiller","Florian Wirtz","Nathaniel Brown","Leroy Sane","Nadiem Amiri","David Raum","Felix Nmecha","Malick Thiaw","Assan Ouedraogo","Deniz Undav"],
  "Ghana": ["Alidu Seidu","Caleb Yirenkyi","Jonas Adjetey","Thomas Partey","Abdul Mumin","Abdul Fatawu","Kwasi Sibo","Jordan Ayew","Brandon Thomas Asante","Antoine Semenyo","Christopher Bonsu Baah","Gideon Mensah","Elisha Owusu","Baba Rahman","Jerome Opoku","Inaki Williams","Augustine Boakye","Kojo Oppong","Kamaldeen Sulemana","Derrick Luckassen","Ernest Nuamah","Prince Adu","Marvin Senaya"],
  "Haiti": ["Carlens Arcus","Keeto Thermoncy","Ricardo Ade","Hannes Delcroix","Carl Sainte","Derrick Etienne","Martin Experience","Duckens Nazon","Jean-Ricner Bellegarde","Don Deedson","Markhus Lacroix","Garven Metusala","Ruben Providence","Lenny Joseph","Danley Jean Jacques","Wilson Isidor","Yassin Fortune","Frantzdy Pierrot","Josue Casimir","Jean-Kevin Duverne","Wilguens Paugain","Dominique Simon","Woodensky Pierre"],
  "Iran": ["Saleh Hardani","Ehsan Hajisafi","Shoja Khalilzadeh","Milad Mohammadi","Saeid Ezatolahi","Alireza Jahanbakhsh","Mohammad Mohebbi","Mehdi Taremi","Mehdi Ghayedi","Ali Alipour","Hossein Kanani","Saman Ghoddos","Roozbeh Cheshmi","Mehdi Torabi","Arya Yousefi","Amirhossein Hosseinzadeh","Ali Nemati","Shahriyar Moghanloo","Mohammad Ghorbani","Ramin Rezaeian","Dennis Dargahi","Danial Iri","Amirmohammad Razaghinia"],
  "Iraq": ["Rebin Sulaka","Hussein Ali","Zaid Tahseen","Akam Hashim","Munaf Younus","Youssef Amyn","Ibrahim Bayesh","Ali Alhamadi","Mohanad Ali","Ahmed Qasem","Ali Yousif","Zidane Iqbal","Ahmed Maknazi","Amir Alammari","Ali Jasim","Aymen Hussein","Kevin Yakob","Aimar Sher","Marko Farji","Merchas Doski","Zaid Ismael","Mustafa Saadoon","Frans Putros"],
  "Ivory Coast": ["Ousmane Diomande","Ghislain Konan","Jean Michael Seri","Wilfried Singo","Seko Fofana","Odilon Kossounou","Franck Kessie","Ange-Yoan Bonny","Simon Adingra","Yan Diomande","Elye Wahi","Christopher Operi","Oumar Diakite","Amad Diallo","Guela Doue","Ibrahim Sangare","Nicolas Pepe","Emmanuel Agbadou","Evan Ndicka","Evann Guessand","Bazoumana Toure","Parfait Guiagon","Christ Inao Oulai"],
  "Japan": ["Yukinari Sugawara","Shogo Taniguchi","Kou Itakura","Yuto Nagatomo","Shuto Machino","Ao Tanaka","Takefusa Kubo","Keisuke Goto","Ritsu Doan","Daizen Maeda","Keito Nakamura","Junya Ito","Daichi Kamada","Tsuyoshi Watanabe","Yuito Suzuki","Ayase Ueda","Koki Ogawa","Ayumu Seko","Hiroki Ito","Takehiro Tomiyasu","Kaishu Sano","Junnosuke Suzuki","Kento Shiogai"],
  "Jordan": ["Mohammad Abuhasheesh","Abdallah Nasib","Husam Abudahab","Yazan Alarab","Amer Jamous","Mohammad Abuzraiq","Noor Alrawabdeh","Ali Olwan","Mousa Altamari","Odeh Fakhoury","Mahmoud Almardi","Rajaei Ayed","Ibrahim Sadeh","Mohammad Abualnadi","Saleem Obaid","Mohammad Abughoush","Saed Alrosan","Mohannad Abutaha","Nizar Alrashdan","Ehsan Haddad","Ali Azaizeh","Mohammad Aldaoud","Anas Badawi"],
  "Mexico": ["Jorge Sanchez","Cesar Montes","Edson Alvarez","Johan Vasquez","Erik Lira","Luis Romo","Alvaro Fidalgo","Raul Jimenez","Alexis Vega","Santiago Gimenez","Armando Gonzalez","Israel Reyes","Julian Quinones","Orbelin Pineda","Obed Vargas","Gilberto Mora","Mateo Chavez","Cesar Huerta","Guillermo Martinez","Jesus Gallardo","Luis Chavez","Roberto Alvarado","Brian Gutierrez"],
  "Morocco": ["Achraf Hakimi","Noussair Mazraoui","Sofyan Amrabat","Marwane Saadane","Ayyoub Bouaddi","Chemsdine Talbi","Azzedine Ounahi","Souane Rahimi","Brahim Diaz","Ismael Saibari","Zakaria El Ouahdi","Issa Diop","Samir El Mourabet","Gessime Yassine","Amine Sbai","Chadi Riad","Youssef Belammari","Ayoub El Kaabi","Ayoube Amaimouni","Bilal El Khannouss","Neil El Aynaoui","Redouane Halhal","Anass Salah Eddine"],
  "Netherlands": ["Lutsharel Geertruida","Marten De Roon","Virgil Van Dijk","Nathan Ake","Jan-Paul Van Hecke","Justin Kluivert","Ryan Gravenberch","Wout Weghorst","Memphis Depay","Cody Gakpo","Mats Wieffer","Tijjani Reijnders","Micky Van De Ven","Guus Til","Noa Lang","Donyell Malen","Brian Brobbey","Teun Koopmeiners","Frenkie De Jong","Denzel Dumfries","Crysencio Summerville","Jorrel Hato","Quinten Timber"],
  "New Zealand": ["Tim Payne","Francis De Vries","Tyler Bindon","Michael Boxall","Joe Bell","Logan Rogerson","Marko Stamenic","Chris Wood","Sarpreet Singh","Elijah Just","Liberato Cacace","Alex Rufer","Nando Pijnaker","Finn Surman","Kosta Barbarouses","Ben Waine","Ben Old","Callum Mccowatt","Jesse Randall","Ryan Thomas","Callan Elliot","Lachlan Bayliss","Tommy Smith"],
  "Norway": ["Morten Thorsby","Kristoffer Ajer","Leo Ostigard","David Moller Wolfe","Patrick Berg","Alexander Sorloth","Sander Berge","Erling Haaland","Martin Odegaard","Jorgen Strand Larsen","Fredrik Aursnes","Fredrik Bjorkan","Marcus Holmgren Pedersen","Torbjorn Heggem","Kristian Thorstvedt","Thelo Aasgaard","Antonio Nusa","Andreas Schjelderup","Oscar Bobb","Jens Petter Hauge","Sondre Langas","Henrik Falchener","Julian Ryerson"],
  "Panama": ["Cesar Blackman","Jose Cordoba","Fidel Escobar","Edgardo Farina","Cristian Martinez","Jose Luis Rodriguez","Adalberto Carrasquilla","Tomas Rodriguez","Ismael Diaz","Edgar Barcenas","Jiovany Ramos","Carlos Harvey","Eric Davis","Andres Andrade","Jose Fajardo","Cecilio Waterman","Alberto Quintero","Anibal Godoy","Cesar Yanis","Amir Murillo","Azarias Londono","Roderick Miller","Jorge Gutierrez"],
  "Paraguay": ["Gustavo Velazquez","Omar Alderete","Juan Jose Caceres","Fabian Balbuena","Junior Alonso","Ramon Sosa","Diego Gomez","Antonio Sanabria","Miguel Almiron","Mauricio","Jose Canale","Andres Cubas","Gustavo Gomez","Damian Bobadilla","Alejandro Romero Gamarra","Alex Arce","Julio Enciso","Braian Ojeda","Gabriel Avalos","Matias Galarza","Gustavo Caballero","Isidro Pitta","Alexandro Maidana"],
  "Portugal": ["Nelson Semedo","Ruben Dias","Tomas Araujo","Diogo Dalot","Matheus Nunes","Cristiano Ronaldo","Bruno Fernandes","Goncalo Ramos","Bernardo Silva","Joao Felix","Renato Veiga","Goncalo Inacio","Joao Neves","Francisco Trincao","Rafael Leao","Pedro Neto","Goncalo Guedes","Joao Cancelo","Ruben Neves","Vitinha","Samu Costa","Nuno Mendes","Francisco Conceicao"],
  "Qatar": ["Pedro Miguel","Lucas Mendes","Gueye Issa Laye","Jassem Gaber","Abdelaziz Abdulaziz Hatem","Ahmed Alaaeldin","Edmilson Junior","Mohammed Muntari","Hasan Hassan Alhaydos","Akram Afif","Karim Boudiaf","Ayoub Aloui","Homam Ahmed","Yusuf Abdurisag","Boualem Khoukhi","Ahmed Alganehi","Sultan Albrake","Almoez Ali","Ahmed Fathy","Assim Madibo","Tahsin Mohammed","Alhashmi Alhussein","Mohamed Manai"],
  "Saudi Arabia": ["Ali Majrashi","Ali Lajami","Abdulelah Alamri","Hassan Altambakti","Nasser Aldawsari","Musab Aljuwayr","Aiman Yahya","Feras Albrikan","Salem Aldawsari","Saleh Alshehri","Saud Abdulhamid","Nawaf Bu Washl","Hassan Kadish","Abdullah Alkhaibari","Ziyad Aljohani","Khalid Alghannam","Ala Alhajji","Abdullah Alhamddan","Sultan Mandash","Mohamed Kanno","Moteb Alharbi","Jehad Thikri","Mohammed Abu Alshamat"],
  "Scotland": ["Aaron Hickey","Andy Robertson","Scott Mctominay","Grant Hanley","Kieran Tierney","John Mcginn","Tyler Fletcher","Lyndon Dykes","Che Adams","Ryan Christie","Jack Hendry","Ross Stewart","John Souttar","Dominic Hyam","Ben Gannon Doak","George Hirst","Lewis Ferguson","Lawrence Shankland","Nathan Patterson","Kenny Mclean","Anthony Ralston","Findlay Curtis","Scott Mckenna"],
  "Senegal": ["Mamadou Sarr","Kalidou Koulibaly","Abdoulaye Seck","Idrissa Gana Gueye","Pathe Ciss","Assane Diao","Lamine Camara","Bamba Dieng","Sadio Mane","Nicolas Jackson","Cherif Ndiaye","Iliman Ndiaye","Ismail Jakobs","Krepin Diatta","Pape Matar Sarr","Ismaila Sarr","Moussa Niakhate","Ibrahim Mbaye","Habib Diarra","Bara Ndiaye","Antoine Mendy","El Hadji Malick Diouf","Pape Gueye"],
  "South Africa": ["Thabang Matuludi","Khulumani Ndamane","Teboho Mokoena","Thalente Mbatha","Aubrey Modiba","Oswin Appollis","Tshepang Moremi","Lyle Foster","Relebohile Mofokeng","Themba Zwane","Thapelo Maseko","Sphephelo Sithole","Mbekezeli Mbokazi","Iqraam Rayners","Evidence Makgopa","Samukele Kabini","Nkosinathi Sibisi","Khuliso Mudau","Ime Okon","Jayden Adams","Olwethu Makhanya","Kamogelo Sebelebele","Bradley Cross"],
  "South Korea": ["Lee Hanbeom","Lee Gihyuk","Kim Minjae","Kim Taehyeon","Hwang Inbeom","Son Heungmin","Paik Seungho","Cho Guesung","Lee Jaesung","Hwang Heechan","Lee Taeseok","Cho Wije","Kim Moonhwan","Park Jinseob","Bae Junho","Oh Hyeongyu","Lee Kangin","Yang Hyunjun","Seol Youngwoo","Jens Castrop","Kim Jingyu","Eom Jisung","Lee Donggyeong"],
  "Spain": ["Marc Pubill","Alex Grimaldo","Eric Garcia","Marcos Llorente","Mikel Merino","Ferran Torres","Fabian Ruiz","Pablo Gavi","Dani Olmo","Yeremy Pino","Pedro Porro","Aymeric Laporte","Alex Baena","Rodri","Nico Williams","Martin Zubimendi","Lamine Yamal","Pedri","Mikel Oyarzabal","Pau Cubarsi","Marc Cucurella","Victor Munoz","Borja Iglesias"],
  "Sweden": ["Gustaf Lagerbielke","Victor Lindelof","Isak Hien","Gabriel Gudmundsson","Herman Johansson","Lucas Bergvall","Daniel Svensson","Alexander Isak","Benjamin Nygren","Anthony Elanga","Ken Sema","Hjalmar Ekdal","Carl Starfelt","Jesper Karlstrom","Viktor Gyokeres","Yasin Ayari","Mattias Svanberg","Eric Smith","Alexander Bernhardsson","Besfort Zeneli","Elliot Stroud","Gustaf Nilsson","Taha Ali"],
  "Switzerland": ["Miro Muheim","Silvan Widmer","Nico Elvedi","Manuel Akanji","Denis Zakaria","Breel Embolo","Remo Freuler","Johan Manzambi","Granit Xhaka","Dan Ndoye","Ricardo Rodriguez","Ardon Jashari","Djibril Sow","Christian Fassnacht","Ruben Vargas","Eray Comert","Noah Okafor","Michel Aebischer","Fabian Rieder","Zeki Amdouni","Aurele Amenda","Luca Jaquez","Cedric Itten"],
  "Tunisia": ["Ali Abdi","Montassar Talbi","Omar Rekik","Adam Arous","Dylan Bronn","Elias Achouri","Elias Saad","Hazem Mastouri","Hannibal Mejbri","Ismael Gharbi","Mortadha Ben Ouanes","Rani Khedira","Khalil Ayari","Mohamed Hadj Mahmoud","Ellyes Skhiri","Rayan Elloumi","Firas Chaouat","Yan Valery","Mohamed Amine Ben Hmida","Moutaz Neffati","Raed Chikhaoui","Anis Slimane","Sebastian Tounekti"],
  "Turkiye": ["Zeki Celik","Merih Demiral","Caglar Soyuncu","Salih Ozcan","Orkun Kokcu","Kerem Akturkoglu","Arda Guler","Deniz Gul","Hakan Calhanoglu","Kenan Yildiz","Eren Elmali","Abdulkerim Bardakci","Ozan Kabak","Ismail Yuksek","Irfan Can Kahveci","Mert Muldur","Yunus Akgun","Ferdi Kadioglu","Baris Alper Yilmaz","Kaan Ayhan","Oguz Aydin","Samet Akaydin","Can Uzun"],
  "USA": ["Sergino Dest","Chris Richards","Tyler Adams","Antonee Robinson","Auston Trusty","Giovanni Reyna","Weston Mckennie","Ricardo Pepi","Christian Pulisic","Brenden Aaronson","Miles Robinson","Tim Ream","Sebastian Berhalter","Cristian Roldan","Alex Freeman","Malik Tillman","Max Arfsten","Haji Wright","Folarin Balogun","Timothy Weah","Mark Mckenzie","Joe Scally","Alex Zendejas"],
  "Uruguay": ["Jose Maria Gimenez","Sebastian Caceres","Ronald Araujo","Manuel Ugarte","Rodrigo Bentancur","Nicolas De La Cruz","Federico Valverde","Darwin Nunez","Giorgian De Arrascaeta","Facundo Pellistri","Guillermo Varela","Agustin Canobbio","Emiliano Martinez","Mathias Olivera","Matias Vina","Brian Rodriguez","Rodrigo Aguirre","Maxi Araujo","Federico Vinas","Joaquin Piquerez","Santiago Bueno","Juan Manuel Sanabria","Rodrigo Zalazar"],
  "Uzbekistan": ["Abdukodir Khusanov","Khojiakbar Alijonov","Farrukh Sayfiev","Rustam Ashurmatov","Akmal Mozgovoy","Otabek Shukurov","Jamshid Iskanderov","Odiljon Xamrobekov","Ruslanbek Jiyanov","Oston Urunov","Sherzod Nasrullaev","Eldor Shomurodov","Umar Eshmurodov","Dostonbek Khamdamov","Abdulla Abdullaev","Azizjon Ganiev","Azizbek Amonov","Igor Sergeev","Abbosbek Fayzullaev","Sherzod Esanov","Behruzjon Karimov","Avazbek Ulmasaliyev","Jakhongir Urozov"]
}

if (typeof module !== 'undefined') {
  module.exports = { WC2026_MATCHES, WC2026_SQUADS };
}
