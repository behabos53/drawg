{/* <script> */}
        const timeoutDuration = 1000; // Set the timeout duration here
    
        const cards = document.querySelectorAll('.card');
        let teams = [
        "Wolf",
    "Vendetta Legends",
    "DIRE WOLF ESPORTS",
    "pangaks city",
    "EXIT BLOCK",
    "Dominix",
    "Kece Esport",
    "WISE YOUNG MAN",
    "ONIC BDG",
    "Dreams Team",
    "Supremacy IDN",
    "We Love UBM",
    "We Love Yunianto",
    "KJS. KIK JAMAL SEQUAT",
    "BLAZING",
    "Celcius",
    "Master of Destruction",
    "Pendekar Poris",
    "STL (Surpass The Limit)",
    "Tompang",
    "Zero Infinity",
    "Slapur Esports",
    "IRIS BETA",
    "MSSC",
    "Marigold",
    "BADUT E-SPORT (BEST)",
    "Infinity Prodigy",
    "FGF ACADEMY REGULER",
    "rido imut banget",
    "Highest Lord",
    "MINANA NIBIRU",
    "Incorporations",
    "exorciat",
    "GOLDENWOLFF",
    "Extra Chaos",
    "KIRIN Gluttony",
    "TBZ",
    "Ayam sayur",
    "BOOM U WIN",
    "One Reborn",
    "The EMPEROR",
    "Jawir skuat",
    "BlueSky - ESPORTS",
    "FNL ESPORT",
    "The barbie",
    "anak mami",
    "Team RSL HOSHI",
    "logas team",
    "MBR mabar eSports",
    "Jawa Poke",
    "X turth",
    "X C",
    "KIRIN Aeron",
    "Orcinus Lexus",
    "RT Esport",
    "Crystal Yellow",
    "Aira fire",
    "slmt team",
    "ZEA Esport",
    "ravispaa",
    "FGF Academy Beta",
    "eggpos",
    "ARSENIC TEAM",
    "Natus Vincere",
    "BERUMBUN",
    "KALIMANTAN PRIDE",
    "NATUS VINCERE",
    "WTB Wong Tulus Bro",
    "INF Genuine⁴",
    "QUENNALDOZZ",
    "TREX ESPORT",
    "PARTY NERAKA",
    "KWSe",
    "THEXYPHERSQUAD",
    "slengki arap",
    "sameng",
    "HS+",
    "NRC ESPORTS",
    "Xiu Amaterasu",
    "TKJ 2",
    "MAD GOMBER TEAM",
    "VESAKHA ESPORTS",
    "GRIFFIN",
    "Vinomus Dynamic",
    "NOTHUMAN",
    "King Wolf",
    "CROWS Sena",
    "CROWS HELL",
    "Lux The Honor",
    "KOPI E-Sport",
    "Nine King",
    "BM1_SQUAD",
    "Pokemon",
    "Fiery Devils",
    "Lasga lord",
    "EVOS SPORT",
    "KON",
    "SPARTAN SOLDIER",
    "DARK LEGEDNS",
    "White Tiger",
    "Scarlet Slayer",
    "BREN",
    "Wings of freedom (WOFF)",
    "PSIXA",
    "midday Push",
    "king forest",
    "RAI GIYUU KYO",
    "BK Weka Weka",
    "Black Shadow",
    "Wokwok JKT",
    "TEAM GRYFFIN",
    "FAUST ESPORTS",
    "The Moriarty",
    "V Fams S",
    "Night spender",
    "GODs",
    "Full Counter (FC)",
    "OVER KILLER",
    "Revolution's",
    "Penghuni surga Esport",
    "Chamenos",
    "FAST SQUAD",
    "Akurat Pride",
    "PERTASHOP",
    "Fhour Honour",
    "SH ESPORTS",
    "Squad Qcit",
    "Lacademy",
    "Wartikum ESports",
    "WOLF E-SPORT",
    "Legenda Seluler",
    "NONAME KINGS",
    "PZR PANZER",
    "One Galaxy",
    "PANCUNG MANTAP",
    "Barrayrfifel Esport",
    "Stardust KB",
    "Shadow Crowz",
    "DC' SHINIGAMI",
    "MarOne E-sport",
    "Tizzcool",
    "ESI BANJAR ESPORT",
    "Ruki",
    "ESI BANJAR ESPORT B",
    "ayam jago",
    "Maximizer Esport",
    "GACOR77",
    "Lex Aeterna'",
    "Clever Clowns",
    "DHE-LAST",
    "ONE PRO SMG",
    "PMI ESPORT",
    "TABRAK MASUK",
    "CALEG",
    "PHOENIX STAR",
    "TWIN ESPORTS",
    "segger waras",
    "DGF INDONESIA",
    "DGF IMMORTAL",
    "Rise 9 Lions",
    "Supra bapak",
    "LEGENDA",
    "Melati E-sport",
    "iky santok narkoba",
    "TIATI WEE",
    "Duren Esport",
    "ARTICUS E-sports",
    "NT",
    "86TEAM",
    "DF Team",
    "BLACK E-SPORT",
    "Arcxana Esports",
    "Aaa kasian aaaa",
    "THE LAST AIR BENDER",
    "Kumar Kairi",
    "Uciha genflash 2",
    "PSUB",
    "FGF Eclipse",
    "U Deserve Better",
    "Harvester",
    "DF ESPORT",
    "black mamba international",
    "Tali Ban",
    "nexon",
    "PRAGOS SQUAD",
    "Biawak Tempur",
    "FL Team",
    "2A",
    "SUGAR SQUAD",
    "VANTES BETA",
    "deuslra of andras",
    "GLADIATOR",
    "PaSalee",
    "Dire White Wolf",
    "Black Dragon",
    "ORCINUS LORENZ",
    "MODERN TIGER",
    "NOX1OUS",
    "West Java Pride",
    "Aliong City",
    "NEXT",
    "Behind The Scane",
    "The Depok player",
    "AETHER ASSASIN",
    "Oxygen Student",
    "Death Flow",
    "Revum Team (RTX)",
    "BKMsquat",
    "DGF STAR",
    "7Storm",
    "DGF STARBOY",
    "dgf fire",
    "ARV TEAM",
    "NATURE SPIRIT",
    "ONGKRO",
    "DGF MOON",
    "OB ESPORT",
    "Lost Happines",
    "Pelajar Introvert",
    "Goji satoru",
    "BELAX ORCINUS",
    "mariana boys",
    "TWB WELL Esport",
    "DGF Blitz",
    "Vtuz",
    "LABINDOGAMERS",
    "Griffin e-sport",
    "FL ESPORT",
    "Cucu Zeus",
    "SUPER Forger",
    "Nexus Legion",
    "Kirin Kage",
    "Blitzkrieg squad",
    "The Piecies",
    "Philia",
    "Anak esport",
    "inhuman massacre",
    "street Fight",
    "No mercy",
    "Incaf E-sport",
    "STYGIAN",
    "Unknown",
    "FourTwink",
    "MAXIME Supreme",
    "RAPLY ESPORT",
    "Glorryus",
    "PANTOMIC",
    "Tactical Takedown",
    "Juara",
    "TOPUPAJADOTCOM",
    "ayam fc",
    "Laskar Pendekar esports",
    "Limitless Villain",
    "NIGHT RAID BETA",
    "KONTEKS",
    "AMIN",
        ];
    
        cards.forEach(card => {
            let text = card.textContent;
            card.textContent = ''; // Initially set the text content to an empty string
            let randomizing = true;
    
            function generateRandomTeam() {
                return teams[Math.floor(Math.random() * teams.length)];
            }
    
            // Start shuffling
            let shuffleInterval = setInterval(() => {
                if (randomizing) {
                    let shuffled = generateRandomTeam();
                    card.textContent = shuffled;
                }
            }, 200); // Shuffle every 300ms
    
            // Stop shuffling after a specified duration
            setTimeout(() => {
                randomizing = false;
                clearInterval(shuffleInterval); // Stop the shuffling interval
                card.textContent = text; // Show the original text
            }, timeoutDuration);
        });
    {/* </script> */}