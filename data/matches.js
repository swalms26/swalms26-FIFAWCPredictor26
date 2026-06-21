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
  { id: "gG5", group: "G", home: "Egypt", away: "Iran", venue: "Seattle Stadium, Seattle", kickoff: "2026-06-26T19:00:00Z", stage: "Group G" },
  { id: "gG6", group: "G", home: "New Zealand", away: "Belgium", venue: "BC Place, Vancouver", kickoff: "2026-06-26T19:00:00Z", stage: "Group G" },

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
  { id: "gI5", group: "I", home: "Norway", away: "France", venue: "Boston Stadium, Boston", kickoff: "2026-06-26T23:00:00Z", stage: "Group I" },
  { id: "gI6", group: "I", home: "Senegal", away: "Iraq", venue: "Toronto Stadium, Toronto", kickoff: "2026-06-26T23:00:00Z", stage: "Group I" },

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

const WC2026_SQUADS = {
  "Czechia": ["Vladimír Coufal","Tomáš Holeš","Ladislav Krejčí","David Zima","Jaroslav Zelený","David Jurásek","David Douděra","Robin Hranáč","Štěpán Chaloupek","Tomáš Souček","Vladimír Darida","Lukáš Provod","Michal Sadílek","Pavel Šulc","Lukáš Červ","Hugo Sochůrek","Alexandr Sojka","Denis Višinský","Patrik Schick","Adam Hložek","Jan Kuchta","Mojmír Chytil","Tomáš Chorý"],
  "Mexico": ["Jesús Gallardo","César Montes","Jorge Sánchez","Johan Vásquez","Israel Reyes","Mateo Chávez","Edson Álvarez","Orbelín Pineda","Roberto Alvarado","Luis Romo","Luis Chávez","Érik Lira","Gilberto Mora","Brian Gutiérrez","Obed Vargas","Álvaro Fidalgo","Raúl Jiménez","Alexis Vega","Santiago Giménez","César Huerta","Julián Quiñones","Guillermo Martínez","Armando González"],
  "South Africa": ["Aubrey Modiba","Khuliso Mudau","Nkosinathi Sibisi","Mbekezeli Mbokazi","Ime Okon","Samukele Kabini","Khulumani Ndamane","Thabang Matuludi","Kamogelo Sebelebele","Bradley Cross","Olwethu Makhanya","Teboho Mokoena","Sphephelo Sithole","Thalente Mbatha","Jayden Adams","Themba Zwane","Lyle Foster","Evidence Makgopa","Oswin Appollis","Iqraam Rayners","Relebohile Mofokeng","Thapelo Maseko","Tshepang Moremi"],
  "South Korea": ["Kim Min-jae","Kim Moon-hwan","Seol Young-woo","Lee Tae-seok","Park Jin-seob","Kim Tae-hyeon","Lee Han-beom","Jens Castrop","Lee Ki-hyuk","Cho Wi-je","Lee Jae-sung","Hwang Hee-chan","Hwang In-beom","Lee Kang-in","Paik Seung-ho","Kim Jin-gyu","Lee Dong-gyeong","Bae Jun-ho","Eom Ji-sung","Yang Hyun-jun","Son Heung-min","Cho Gue-sung","Oh Hyeon-gyu"],
  "Bosnia and Herzegovina": ["Sead Kolašinac","Dennis Hadžikadunić","Amar Dedić","Nikola Katić","Tarik Muharemović","Nihad Mujakić","Stjepan Radeljić","Nidal Čelik","Amir Hadžiahmetović","Benjamin Tahirović","Armin Gigović","Dženis Burnić","Ivan Bašić","Esmir Bajraktarević","Amar Memić","Ivan Šunjić","Kerim Alajbegović","Ermin Mahmić","Edin Džeko","Ermedin Demirović","Samed Baždar","Haris Tabaković","Jovo Lukić"],
  "Canada": ["Alistair Johnston","Luc de Fougerolles","Alfie Jones","Joel Waterman","Moïse Bombito","Derek Cornelius","Alphonso Davies","Richie Laryea","Niko Sigur","Mathieu Choinière","Stephen Eustáquio","Ismaël Koné","Liam Millar","Jonathan Osorio","Nathan Saliba","Jacob Shaffelburg","Tajon Buchanan","Ali Ahmed","Cyle Larin","Jonathan David","Promise David","Tani Oluwaseyi"],
  "Qatar": ["Pedro Miguel","Lucas Mendes","Issa Laye","Boualem Khoukhi","Ayoub Al-Oui","Sultan Al-Brake","Homam Ahmed","Al-Hashmi Al-Hussain","Jassem Gaber","Abdulaziz Hatem","Karim Boudiaf","Assim Madibo","Ahmed Fathi","Mohamed Al-Mannai","Almoez Ali","Akram Afif","Tahsin Jamshid","Edmilson Junior","Ahmed Al-Ganehi","Ahmed Alaaeldin","Hassan Al-Haydos","Mohammed Muntari","Yusuf Abdurisag"],
  "Switzerland": ["Miro Muheim","Silvan Widmer","Nico Elvedi","Manuel Akanji","Eray Cömert","Aurèle Amenda","Luca Jaquez","Ricardo Rodriguez","Denis Zakaria","Remo Freuler","Johan Manzambi","Granit Xhaka","Ardon Jashari","Djibril Sow","Christian Fassnacht","Michel Aebischer","Fabian Rieder","Breel Embolo","Dan Ndoye","Rubén Vargas","Noah Okafor","Zeki Amdouni","Cedric Itten"],
  "Brazil": ["Wesley","Gabriel Magalhães","Marquinhos","Alex Sandro","Danilo Luiz","Bremer","Léo Pereira","Douglas Santos","Roger Ibañez","Casemiro","Bruno Guimarães","Fabinho","Lucas Paquetá","Danilo Santos","Vinícius Júnior","Neymar","Raphinha","Matheus Cunha","Endrick","Luiz Henrique","Gabriel Martinelli","Igor Thiago","Rayan"],
  "Haiti": ["Ricardo Adé","Carlens Arcus","Martin Expérience","Jean-Kévin Duverne","Duke Lacroix","Wilguens Paugain","Hannes Delcroix","Keeto Thermoncy","Leverton Pierre","Danley Jean Jacques","Carl Sainté","Jean-Ricner Bellegarde","Woodensky Pierre","Dominique Simon","Duckens Nazon","Frantzdy Pierrot","Derrick Etienne Jr.","Louicius Deedson","Ruben Providence","Josué Casimir","Yassin Fortuné","Wilson Isidor","Lenny Joseph"],
  "Morocco": ["Achraf Hakimi","Nayef Aguerd","Noussair Mazraoui","Youssef Belammari","Anass Salah-Eddine","Chadi Riad","Issa Diop","Zakaria El Ouahdi","Redouane Halhal","Sofyan Amrabat","Azzedine Ounahi","Bilal El Khannouss","Ismael Saibari","Neil El Aynaoui","Samir El Mourabet","Ayyoub Bouaddi","Ayoub El Kaabi","Soufiane Rahimi","Abde Ezzalzouli","Brahim Díaz","Chemsdine Talbi","Gessime Yassine","Ayoube Amaimouni"],
  "Scotland": ["Andy Robertson","Grant Hanley","Kieran Tierney","Scott McKenna","Jack Hendry","Nathan Patterson","Anthony Ralston","John Souttar","Aaron Hickey","Dominic Hyam","John McGinn","Scott McTominay","Ryan Christie","Kenny McLean","Lewis Ferguson","Ben Gannon-Doak","Findlay Curtis","Tyler Fletcher","Lyndon Dykes","Ché Adams","Lawrence Shankland","George Hirst","Ross Stewart"],
  "Australia": ["Miloš Degenek","Alessandro Circati","Jacob Italiano","Jordan Bos","Jason Geria","Aziz Behich","Harry Souttar","Cameron Burgess","Kai Trewin","Lucas Herrington","Mathew Leckie","Connor Metcalfe","Ajdin Hrustic","Aiden O'Neill","Cammy Devlin","Jackson Irvine","Paul Okon-Engstler","Awer Mabil","Nestory Irankunda","Mohamed Touré","Cristian Volpato","Nishan Velupillay","Tete Yengi"],
  "Paraguay": ["Gustavo Gómez","Júnior Alonso","Fabián Balbuena","Omar Alderete","Juan José Cáceres","Gustavo Velázquez","José Canale","Alexandro Maidana","Miguel Almirón","Kaku","Andrés Cubas","Ramón Sosa","Diego Gómez","Damián Bobadilla","Braian Ojeda","Matías Galarza","Maurício","Antonio Sanabria","Julio Enciso","Gabriel Ávalos","Álex Arce","Isidro Pitta","Gustavo Caballero"],
  "Turkiye": ["Merih Demiral","Zeki Çelik","Çağlar Söyüncü","Mert Müldür","Ferdi Kadıoğlu","Ozan Kabak","Abdülkerim Bardakcı","Eren Elmalı","Samet Akaydin","Yusuf Akçiçek","Mustafa Eskihellaç","Hakan Çalhanoğlu","Kaan Ayhan","Orkun Kökçü","İsmail Yüksek","Salih Özcan","Atakan Karazor","Kerem Aktürkoğlu","İrfan Can Kahveci","Barış Alper Yılmaz","Arda Güler","Kenan Yıldız","Yunus Akgün","Can Uzun"],
  "USA": ["Sergiño Dest","Chris Richards","Antonee Robinson","Auston Trusty","Miles Robinson","Tim Ream","Alex Freeman","Maximilian Arfsten","Mark McKenzie","Joe Scally","Tyler Adams","Giovanni Reyna","Weston McKennie","Sebastian Berhalter","Cristian Roldan","Malik Tillman","Christian Pulisic","Brenden Aaronson","Ricardo Pepi","Haji Wright","Folarin Balogun","Timothy Weah"],
  "Germany": ["Nico Schlotterbeck","David Raum","Nathaniel Brown","Jonathan Tah","Waldemar Anton","Joshua Kimmich","Malick Thiaw","Antonio Rüdiger","Pascal Groß","Leon Goretzka","Felix Nmecha","Jamal Musiala","Nadiem Amiri","Jamie Leweling","Lennart Karl","Florian Wirtz","Leroy Sané","Aleksandar Pavlović","Angelo Stiller","Kai Havertz","Nick Woltemade","Deniz Undav","Maximilian Beier"],
  "Curacao": ["Riechedly Bazoer","Joshua Brenet","Roshon van Eijma","Sherel Floranus","Deveron Fonville","Jurien Gaari","Armando Obispo","Shurandy Sambo","Juninho Bacuna","Leandro Bacuna","Livano Comenencia","Kevin Felida","Ar'jany Martha","Tyrese Noslin","Godfried Roemeratoe","Jeremy Antonisse","Tahith Chong","Kenji Gorre","Sontje Hansen","Gervane Kastaneer","Brandley Kuwas","Jurgen Locadia","Jearl Margaritha"],
  "Ivory Coast": ["Emmanuel Agbadou","Christopher Operi","Ousmane Diomandé","Guela Doue","Ghislain Konan","Odilon Kossounou","Wilfried Singo","Evan Ndicka","Seko Fofana","Parfait Guiagon","Christ Inao Oulai","Franck Kessié","Ibrahim Sangaré","Jean Michael Seri","Simon Adingra","Ange-Yoan Bonny","Amad Diallo","Oumar Diakite","Yan Diomandé","Evann Guessand","Nicolas Pépé","Bazoumana Touré","Elye Wahi"],
  "Ecuador": ["Piero Hincapié","Willian Pacho","Pervis Estupiñán","Félix Torres","Joel Ordóñez","Jackson Porozo","Angelo Preciado","Yaimar Medina","Moisés Caicedo","Alan Franco","Kendry Páez","Gonzalo Plata","Pedro Vite","Jordy Alcívar","Denil Castillo","John Yeboah","Nilson Angulo","Alan Minda","Enner Valencia","Kevin Rodríguez","Jordy Caicedo","Anthony Valencia","Jeremy Arévalo"],
  "Netherlands": ["Nathan Aké","Virgil van Dijk","Denzel Dumfries","Jan Paul van Hecke","Jurriën Timber","Jorrel Hato","Micky van de Ven","Ryan Gravenberch","Frenkie de Jong","Teun Koopmeiners","Tijjani Reijnders","Marten de Roon","Guus Til","Quinten Timber","Mats Wieffer","Brian Brobbey","Memphis Depay","Cody Gakpo","Noa Lang","Donyell Malen","Crysencio Summerville","Wout Weghorst","Justin Kluivert"],
  "Japan": ["Ko Itakura","Hiroki Ito","Yuto Nagatomo","Ayumu Seko","Yukinari Sugawara","Junnosuke Suzuki","Shogo Taniguchi","Takehiro Tomiyasu","Tsuyoshi Watanabe","Ritsu Doan","Wataru Endo","Junya Ito","Daichi Kamada","Takefusa Kubo","Keito Nakamura","Kaishu Sano","Ao Tanaka","Keisuke Goto","Daizen Maeda","Koki Ogawa","Kento Shiogai","Yuito Suzuki","Ayase Ueda"],
  "Sweden": ["Victor Nilsson Lindelöf","Joakim Nilsson","Emil Krafth","Filip Helander","Ludwig Augustinsson","Joel Andersson","Mattias Svanberg","Jens Cajuste","Viktor Claesson","Dejan Kulusevski","Emil Forsberg","Samuel Dahl","Karl Henriksson","Pontus Almqvist","Jordan Larsson","Alexander Isak","Victor Gyökeres","Zlatan Ibrahimović","Robin Quaison","Patrik Walemark"],
  "Tunisia": ["Dylan Bronn","Ali Maaloul","Montassar Talbi","Hamza Rafia","Mohamed Amine Ben Hmida","Youssef Msakni","Ellyes Skhiri","Mohamed Ali Ben Romdhane","Hannibal Mejbri","Anis Ben Slimane","Wahbi Khazri","Seifeddine Jaziri","Issam Jebali","Sayfallah Ltaief","Taha Yassine Khenissi"],
  "Belgium": ["Timothy Castagne","Zeno Debast","Maxim De Cuyper","Koni De Winter","Brandon Mechele","Thomas Meunier","Nathan Ngoy","Joaquin Seys","Arthur Theate","Kevin De Bruyne","Amadou Onana","Nicolas Raskin","Youri Tielemans","Hans Vanaken","Axel Witsel","Charles De Ketelaere","Jeremy Doku","Matias Fernandez-Pardo","Romelu Lukaku","Dodi Lukebakio","Diego Moreira","Alexis Saelemaekers","Leandro Trossard"],
  "Egypt": ["Mohamed Abdelmonem","Mohamed Hany","Yasser Ibrahim","Hossam Abdelmaguid","Ahmed Fattouh","Tarek Alaa","Rami Rabia","Karim Hafez","Marwan Attia","Ahmed Sayed Zizo","Mahmoud Hassan Trezeguet","Emam Ashour","Mostafa Abdel Raouf","Mohannad Lasheen","Haitham Hassan","Mahmoud Saber","Ibrahim Adel","Nabil Emad","Hamdi Fathi","Mohamed Salah","Omar Marmoush","Hamza Abdel Karim"],
  "Iran": ["Danial Eiri","Ehsan Hajsafi","Saleh Hardani","Hossein Kanaani","Shoja Khalilzadeh","Milad Mohammadi","Ali Nemati","Ramin Rezaeian","Rouzbeh Cheshmi","Saeid Ezatolahi","Mehdi Ghaedi","Saman Ghoddos","Mohammad Ghorbani","Alireza Jahanbakhsh","Mohammad Mohebi","Amirhossein Hosseinzadeh","Mehdi Torabi","Aria Yousefi","Ali Alipour","Dennis Dargahi","Amirhossein Hosseinzadeh","Mehdi Taremi","Shahriar Moghanlou"],
  "New Zealand": ["Tyler Bindon","Michael Boxall","Liberato Cacace","Francis de Vries","Callan Elliot","Tim Payne","Nando Pijnaker","Tommy Smith","Finn Surman","Lachlan Bayliss","Joe Bell","Matt Garbett","Eli Just","Callum McCowatt","Ben Old","Alex Rufer","Marko Stamenic","Sarpreet Singh","Ryan Thomas","Kosta Barbarouses","Jesse Randall","Ben Waine","Chris Wood"],
  "Spain": ["Dani Carvajal","Aymeric Laporte","Robin Le Normand","Alejandro Grimaldo","Eder Militão","Pau Cubarsí","Daniel Vivian","Pedri","Fabián Ruiz","Rodri","Martín Zubimendi","Dani Olmo","Mikel Merino","Mikel Oyarzabal","Lamine Yamal","Nico Williams","Álvaro Morata","Bryan Gil","Ferran Torres","Yeremy Pino","Ayoze Pérez"],
  "Cape Verde": ["Sidny Cabral","Diney Borges","Logan Costa","Roberto Lopes","Steven Moreira","Wagner Pina","Kelvin Pires","Joao Paulo Fernandes","Ianique Stopira Tavares","Telmo Arcanjo","Deroy Duarte","Laros Duarte","Jamiro Monteiro","Kevin Pina","Yannick Semedo","Gilson Benchimol","Jovane Cabral","Dailon Livramento","Ryan Mendes","Nuno da Costa","Garry Rodrigues","Willy Semedo","Helio Varela"],
  "Saudi Arabia": ["Saud Abdulhamid","Jehad Thakri","Abdulelah Al Amri","Hassan Tambakti","Ali Lajami","Hassan Kadesh","Moteb Al Harbi","Nawaf Boushal","Ali Majrashi","Mohammed Abu Alshamat","Ziyad Al Johani","Nasser Al Dawsari","Mohamed Kanno","Abdullah Al Khaibari","Alaa Al Hejji","Musab Al Juwayr","Sultan Mandash","Ayman Yahya","Khalid Al Ghannam","Salem Al Dawsari","Abdullah Al Hamdan","Feras Al Brikan","Saleh Al Shehri"],
  "Uruguay": ["Ronald Araújo","Sebastián Coates","Nahitán Nández","José María Giménez","Martín Cáceres","Mathías Olivera","Marcelo Saracchi","Rodrigo Bentancur","Federico Valverde","Matías Vecino","Facundo Pellistri","Giorgian De Arrascaeta","Manuel Ugarte","Maximiliano Araújo","Nicolás De La Cruz","Fabricio Díaz","Agustín Canobbio","Darwin Núñez","Luis Suárez","Edinson Cavani","Maximiliano Gómez","Brian Ocampo","Facundo Torres"],
  "France": ["Lucas Digne","Malo Gusto","Lucas Hernández","Théo Hernández","Ibrahima Konaté","Maxence Lacroix","Jules Koundé","William Saliba","Dayot Upamecano","N'Golo Kanté","Manu Koné","Adrien Rabiot","Aurélien Tchouaméni","Warren Zaïre-Emery","Maghnes Akliouche","Bradley Barcola","Rayan Cherki","Ousmane Dembélé","Désiré Doué","Michael Olise","Kylian Mbappé","Jean-Philippe Mateta","Marcus Thuram"],
  "Senegal": ["Krepin Diatta","Antoine Mendy","Kalidou Koulibaly","El Hadji Malick Diouf","Mamadou Sarr","Moussa Niakhaté","Abdoulaye Seck","Ismail Jakobs","Idrissa Gana Gueye","Pape Gueye","Lamine Camara","Habib Diarra","Pathé Ciss","Pape Matar Sarr","Bara Sapoko Ndiaye","Sadio Mané","Ismaïla Sarr","Iliman Ndiaye","Assane Diao","Ibrahim Mbaye","Nicolas Jackson","Bamba Dieng","Chérif Ndiaye"],
  "Iraq": ["Hussein Ali","Manaf Younis","Zaid Tahseen","Rebin Sulaka","Akam Hashem","Merchas Doski","Ahmed Yahya","Zaid Ismail","Frans Putros","Mustafa Saadoon","Amir Al Ammari","Kevin Yakob","Zidane Iqbal","Aimar Sher","Ibrahim Bayesh","Ahmed Qasim","Youssef Amyn","Marko Farji","Ali Jassim","Ali Al Hamadi","Ali Yousef","Aymen Hussein","Mohanad Ali"],
  "Norway": ["Kristoffer Vassbakk Ajer","Fredrik Bjørkan","Henrik Falchener","Sondre Langås","Torbjørn Heggem","Marcus Holmgren Pedersen","Julian Ryerson","David Møller Wolfe","Leo Østigård","Thelonious Aasgaard","Fredrik Aursnes","Patrick Berg","Sander Berge","Oscar Bobb","Jens Petter Hauge","Antonio Nusa","Andreas Schjelderup","Morten Thorsby","Kristian Thorstvedt","Martin Ødegaard","Erling Haaland","Alexander Sørloth","Jørgen Strand Larsen"],
  "Argentina": ["Leonardo Balerdi","Gonzalo Montiel","Nicolás Tagliafico","Lisandro Martínez","Cristian Romero","Nicolás Otamendi","Facundo Medina","Nahuel Molina","Leandro Paredes","Rodrigo De Paul","Valentín Barco","Giovani Lo Celso","Exequiel Palacios","Alexis Mac Allister","Enzo Fernández","Julián Álvarez","Lionel Messi","Nicolás González","Thiago Almada","Giuliano Simeone","Nicolás Paz","José Manuel López","Lautaro Martínez"],
  "Algeria": ["Rayan Aït Nouri","Ramy Bensebaini","Achraf Abada","Zinedine Belaid","Rafik Belghali","Samir Chergui","Jaouen Hadjam","Aïssa Mandi","Mohamed Amine Tougai","Houssem Aouar","Nabil Bentaleb","Hicham Boudaoui","Fares Chaibi","Ibrahim Maza","Yassine Titraoui","Ramiz Zerrouki","Mohamed Amine Amoura","Nadir Benbouali","Adil Boulbina","Fares Ghedjemis","Amine Gouiri","Riyad Mahrez","Anis Hadj Moussa"],
  "Austria": ["David Affengruber","David Alaba","Kevin Danso","Marco Friedl","Philipp Lienhart","Phillipp Mwene","Stefan Posch","Alexander Prass","Michael Svoboda","Christoph Baumgartner","Carney Chukwuemeka","Florian Grillitsch","Konrad Laimer","Marcel Sabitzer","Xaver Schlager","Romano Schmid","Alessandro Schöpf","Nicolas Seiwald","Paul Wanner","Patrick Wimmer","Marko Arnautović","Michael Gregoritsch","Sasa Kalajdzic"],
  "Jordan": ["Mohammad Abu Hashish","Abdullah Nasib","Hussam Abu Dhahab","Yazan Al Arab","Mohammad Abu Alnadi","Salem Obaid","Saed Al Rosan","Ehsan Haddad","Anas Badawi","Amer Jamous","Noor Al Rawabdeh","Rajaei Ayed","Ibrahim Sadeh","Mohannad Abu Taha","Nizar Al Rashdan","Mohammad Al Dawoud","Mahmoud Mardahi","Mohammad Abu Zraiq","Ali Olwan","Mousa Al Tamari","Odeh Fakhoury","Ibrahim Sabra","Ali Azaizeh"],
  "Portugal": ["Tomas Araújo","João Cancelo","Diogo Dalot","Rúben Dias","Gonçalo Inácio","Nuno Mendes","Matheus Nunes","Nelson Semedo","Renato Veiga","Samuel Costa","Bruno Fernandes","João Neves","Rúben Neves","Bernardo Silva","Vitinha","Francisco Conceição","João Félix","Gonçalo Guedes","Rafael Leão","Pedro Neto","Gonçalo Ramos","Cristiano Ronaldo","Francisco Trincão"],
  "DR Congo": ["Dylan Batubinsika","Gedeon Kalulu","Steve Kapuadi","Joris Kayembe","Arthur Masuaku","Chancel Mbemba","Axel Tuanzebe","Aaron Wan-Bissaka","Brian Cipenga","Meshack Elia","Gaël Kakuta","Edo Kayembe","Nathanaël Mbuku","Samuel Moutoussamy","Ngal'ayel Mukau","Charles Pickel","Noah Sadiki","Aaron Tshibola","Cédric Bakambu","Simon Banza","Fiston Mayele","Yoane Wissa","Théo Bongonda"],
  "Uzbekistan": ["Eldor Shomurodov","Jasur Yakhshiboev","Akbar Tursunov","Shukhrat Mukhammadiev","Akramjon Komilov","Jaloliddin Masharipov","Dostonbek Khamdamov","Abdulaziz Norchaev","Temur Jalolov","Otabek Shukurov","Jamshid Iskanderov","Bekhruzbek Sayfiev","Khojiakbar Alijonov","Bobur Abdikholikov","Nodir Turaev","Sherzod Tursunov","Behruz Tursunov"],
  "Colombia": ["Dávinson Sánchez","Jhon Lucumí","Yerry Mina","Willer Ditta","Daniel Muñoz","Santiago Arias","Johan Mojica","Deiver Machado","Richard Ríos","Jefferson Lerma","Kevin Castaño","Juan Camilo Portilla","Gustavo Puerta","Jhon Arias","Jorge Carrascal","Juan Fernando Quintero","James Rodríguez","Jaminton Campaz","Juan Camilo Hernández","Luis Díaz","Luis Suárez","Carlos Gómez","Jhon Córdoba"],
  "England": ["Reece James","Ezri Konsa","Jarell Quansah","John Stones","Marc Guéhi","Dan Burn","Nico O'Reilly","Djed Spence","Trevoh Chalobah","Declan Rice","Elliot Anderson","Kobbie Mainoo","Jordan Henderson","Morgan Rogers","Jude Bellingham","Eberechi Eze","Harry Kane","Ivan Toney","Ollie Watkins","Bukayo Saka","Marcus Rashford","Anthony Gordon","Noni Madueke"],
  "Croatia": ["Joško Gvardiol","Duje Ćaleta-Car","Josip Šutalo","Josip Stanišić","Marin Pongračić","Martin Erlić","Luka Vušković","Luka Modrić","Mateo Kovačić","Mario Pašalić","Nikola Vlašić","Luka Sučić","Martin Baturina","Kristijan Jakić","Petar Sučić","Nikola Moro","Toni Fruk","Ivan Perišić","Andrej Kramarić","Ante Budimir","Marco Pašalić","Petar Muša","Igor Matanović"],
  "Ghana": ["Jonas Adjetey","Derrick Luckassen","Gideon Mensah","Abdul Mumin","Jerome Opoku","Kojo Oppong Preprah","Baba Abdul Rahman","Alidu Seidu","Marvin Senaya","Augustine Boakye","Abdul Fatawu Issahaku","Elisha Owusu","Thomas Partey","Kwasi Sibo","Kamal Deen Sulemana","Caleb Yirenkyi","Prince Kwabena Adu","Jordan Ayew","Christopher Bonsu Baah","Ernest Nuamah","Antoine Semenyo","Brandon Thomas-Asante","Inaki Williams"],
  "Panama": ["César Blackman","Jorge Gutiérrez","Amir Murillo","Fidel Escobar","Andrés Andrade","Edgardo Fariña","José Córdoba","Eric Davis","Jiovany Ramos","Roderick Miller","Anibal Godoy","Adalberto Carrasquilla","Carlos Harvey","Cristian Martínez","José Luis Rodríguez","César Yanis","Yoel Bárcenas","Alberto Quintero","Azarias Londoño","Ismael Díaz","Cecilio Waterman","José Fajardo","Tomás Rodríguez"],
}

if (typeof module !== 'undefined') {
  module.exports = { WC2026_MATCHES, WC2026_SQUADS };
}
