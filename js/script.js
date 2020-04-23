const pokemonList = [ 
    "Bulbasaur", "Chikorita", "Treecko", "Turtwig", "Victini", "Chespin", "Rowlet", "Grookey", "Ivysaur", "Bayleef", "Grovyle", "Grotle", "Snivy", "Quilladin", "Dartrix", "Thwackey", "Venusaur", "Meganium", "Sceptile", "Torterra", "Servine", "Chesnaught", "Decidueye", "Rillaboom", "Charmander", "Cyndaquil", "Torchic", "Chimchar", "Serperior", "Fennekin", "Litten", "Scorbunny", "Charmeleon", "Quilava", "Combusken", "Monferno", "Tepig", "Braixen", "Torracat", "Raboot", "Charizard", "Typhlosion", "Blaziken", "Infernape", "Pignite", "Delphox", "Incineroar", "Cinderace", "Squirtle", "Totodile", "Mudkip", "Piplup", "Emboar", "Froakie", "Popplio", "Sobble ", "Wartortle", "Croconaw", "Marshtomp", "Prinplup", "Oshawott", "Frogadier", "Brionne", "Drizzile", "Blastoise", "Feraligatr", "Swampert", "Empoleon", "Dewott", "Greninja", "Primarina", "Inteleon", "Caterpie", "Sentret", "Poochyena", "Starly", "Samurott", "Bunnelby", "Pikipek", "Skwovet", "Metapod", "Furret", "Mightyena", "Staravia", "Patrat", "Diggersby", "Trumbeak", "Greedent", "Butterfree", "Hoothoot", "Zigzagoon", "Staraptor", "Watchog", "Fletchling", "Toucannon", "Rookidee", "Weedle", "Noctowl", "Linoone", "Bidoof", "Lillipup", "Fletchinder", "Yungoos", "Corvisquire", "Kakuna", "Ledyba", "Wurmple", "Bibarel", "Herdier", "Talonflame", "Gumshoos", "Corviknight", "Beedrill", "Ledian", "Silcoon", "Kricketot", "Stoutland", "Scatterbug", "Grubbin", "Blipbug", "Pidgey", "Spinarak", "Beautifly", "Kricketune", "Purrloin", "Spewpa", "Charjabug", "Dottler", "Pidgeotto", "Ariados", "Cascoon", "Shinx", "Liepard", "Vivillon", "Vikavolt", "Orbeetle", "Pidgeot", "Crobat", "Dustox", "Luxio", "Pansage", "Litleo", "Crabrawler", "Nickit", "Rattata", "Chinchou", "Lotad", "Luxray", "Simisage", "Pyroar", "Crabominable", "Thievul", "Raticate", "Lanturn", "Lombre", "Budew", "Pansear", "Flabébé", "Oricorio", "Gossifleur", "Spearow", "Pichu", "Ludicolo", "Roserade", "Simisear", "Floette", "Cutiefly", "Eldegoss", "Fearow", "Cleffa", "Seedot", "Cranidos", "Panpour", "Florges", "Ribombee", "Wooloo", "Ekans", "Igglybuff", "Nuzleaf", "Rampardos", "Simipour", "Skiddo", "Rockruff", "Dubwool", "Arbok", "Togepi", "Shiftry", "Shieldon", "Munna", "Gogoat", "Lycanroc", "Chewtle", "Pikachu", "Togetic", "Taillow", "Bastiodon", "Musharna", "Pancham", "Wishiwashi", "Drednaw", "Raichu", "Natu", "Swellow", "Burmy", "Pidove", "Pangoro", "Mareanie", "Yamper", "Sandshrew", "Xatu", "Wingull", "Wormadam", "Tranquill", "Furfrou", "Toxapex", "Boltund", "Sandslash", "Mareep", "Pelipper", "Mothim", "Unfezant", "Espurr", "Mudbray", "Rolycoly", "Nidoran♀", "Flaaffy", "Ralts", "Combee", "Blitzle", "Meowstic", "Mudsdale", "Carkol", "Nidorina", "Ampharos", "Kirlia", "Vespiquen", "Zebstrika", "Honedge", "Dewpider", "Coalossal", "Nidoqueen", "Bellossom", "Gardevoir", "Pachirisu", "Roggenrola", "Doublade", "Araquanid", "Applin", "Nidoran♂", "Marill", "Surskit", "Buizel", "Boldore", "Aegislash", "Fomantis", "Flapple", "Nidorino", "Azumarill", "Masquerain", "Floatzel", "Gigalith", "Spritzee", "Lurantis", "Appletun", "Nidoking", "Sudowoodo", "Shroomish", "Cherubi", "Woobat", "Aromatisse", "Morelull", "Silicobra", "Clefairy", "Politoed", "Breloom", "Cherrim", "Swoobat", "Swirlix", "Shiinotic", "Sandaconda", "Clefable", "Hoppip", "Slakoth", "Shellos", "Drilbur", "Slurpuff", "Salandit", "Cramorant", "Vulpix", "Skiploom", "Vigoroth", "Gastrodon", "Excadrill", "Inkay", "Salazzle", "Arrokuda", "Ninetales", "Jumpluff", "Slaking", "Ambipom", "Audino", "Malamar", "Stufful", "Barraskewda", "Jigglypuff", "Aipom", "Nincada", "Drifloon", "Timburr", "Binacle", "Bewear", "Toxel", "Wigglytuff", "Sunkern", "Ninjask", "Drifblim", "Gurdurr", "Barbaracle", "Bounsweet", "Toxtricity", "Zubat", "Sunflora", "Shedinja", "Buneary", "Conkeldurr", "Skrelp", "Steenee", "Sizzlipede", "Golbat", "Yanma", "Whismur", "Lopunny", "Tympole", "Dragalge", "Tsareena", "Centiskorch", "Oddish", "Wooper", "Loudred", "Mismagius", "Palpitoad", "Clauncher", "Comfey", "Clobbopus", "Gloom", "Quagsire", "Exploud", "Honchkrow", "Seismitoad", "Clawitzer", "Oranguru", "Grapploct", "Vileplume", "Espeon", "Makuhita", "Glameow", "Throh", "Helioptile", "Passimian", "Sinistea", "Paras", "Umbreon", "Hariyama", "Purugly", "Sawk", "Heliolisk", "Wimpod", "Polteageist", "Parasect", "Murkrow", "Azurill", "Chingling", "Sewaddle", "Tyrunt", "Golisopod", "Hatenna", "Venonat", "Slowking", "Nosepass", "Stunky", "Swadloon", "Tyrantrum", "Sandygast", "Hattrem", "Venomoth", "Misdreavus", "Skitty", "Skuntank", "Leavanny", "Amaura", "Palossand", "Hatterene", "Diglett", "Unown", "Delcatty", "Bronzor", "Venipede", "Aurorus", "Pyukumuku", "Impidimp", "Dugtrio", "Wobbuffet", "Sableye", "Bronzong", "Whirlipede", "Sylveon", "Morgrem", "Meowth", "Girafarig", "Mawile", "Bonsly", "Scolipede", "Hawlucha", "Silvally", "Grimmsnarl", "Persian", "Pineco", "Aron", "Mime Jr.", "Cottonee", "Dedenne", "Minior", "Obstagoon", "Psyduck", "Forretress", "Lairon", "Happiny", "Whimsicott", "Carbink", "Komala", "Perrserker", "Golduck", "Dunsparce", "Aggron", "Chatot", "Petilil", "Goomy", "Turtonator", "Cursola", "Mankey", "Gligar", "Meditite", "Spiritomb", "Lilligant", "Sliggoo", "Togedemaru", "Sirfetch", "Primeape", "Steelix", "Medicham", "Gible", "Basculin", "Goodra", "Mimikyu", "Mr. Rime", "Growlithe", "Snubbull", "Electrike", "Gabite", "Sandile", "Klefki", "Bruxish", "Runerigus", "Arcanine", "Granbull", "Manectric", "Garchomp", "Krokorok", "Phantump", "Drampa", "Milcery", "Poliwag", "Qwilfish", "Plusle", "Munchlax", "Krookodile", "Trevenant", "Dhelmise", "Alcremie", "Poliwhirl", "Scizor", "Minun", "Riolu", "Darumaka", "Pumpkaboo", "Jangmo-o", "Falinks", "Poliwrath", "Shuckle", "Volbeat", "Lucario", "Darmanitan", "Gourgeist", "Hakamo-o", "Pincurchin", "Abra", "Heracross", "Illumise", "Hippopotas", "Maractus", "Bergmite", "Kommo-o", "Snom", "Kadabra", "Sneasel", "Roselia", "Hippowdon", "Dwebble", "Avalugg", "Tapu Koko", "Frosmoth", "Alakazam", "Teddiursa", "Gulpin", "Skorupi", "Crustle", "Noibat", "Tapu Lele", "Stonjourner", "Machop", "Ursaring", "Swalot", "Drapion", "Scraggy", "Noivern", "Tapu Bulu", "Eiscue", "Machoke", "Slugma", "Carvanha", "Croagunk", "Scrafty", "Xerneas", "Tapu Fini", "Indeedee", "Machamp", "Magcargo", "Sharpedo", "Toxicroak", "Sigilyph", "Yveltal", "Cosmog", "Morpeko", "Bellsprout", "Swinub", "Wailmer", "Carnivine", "Yamask", "Zygarde", "Cosmoem", "Cufant", "Weepinbell", "Piloswine", "Wailord", "Finneon", "Cofagrigus", "Diancie", "Solgaleo", "Copperajah", "Victreebel", "Corsola", "Numel", "Lumineon", "Tirtouga", "Hoopa", "Lunala", "Dracozolt", "Tentacool", "Remoraid", "Camerupt", "Mantyke", "Carracosta", "Volcanion", "Nihilego", "Arctozolt", "Tentacruel", "Octillery", "Torkoal", "Snover", "Archen", "Buzzwole", "Dracovish", "Geodude", "Delibird", "Spoink", "Abomasnow", "Archeops", "Pheromosa", "Arctovish", "Graveler", "Mantine", "Grumpig", "Weavile", "Trubbish", "Xurkitree", "Duraludon", "Golem", "Skarmory", "Spinda", "Magnezone", "Garbodor", "Celesteela", "Dreepy", "Ponyta", "Houndour", "Trapinch", "Lickilicky", "Zorua", "Kartana", "Drakloak", "Rapidash", "Houndoom", "Vibrava", "Rhyperior", "Zoroark", "Guzzlord", "Dragapult", "Slowpoke", "Kingdra", "Flygon", "Tangrowth", "Minccino", "Necrozma", "Zacian", "Slowbro", "Phanpy", "Cacnea", "Electivire", "Cinccino", "Magearna", "Zamazenta", "Magnemite", "Donphan", "Cacturne", "Magmortar", "Gothita", "Marshadow", "Eternatus", "Magneton", "Porygon2", "Swablu", "Togekiss", "Gothorita", "Poipole", "Kubfu", "Farfetch", "Stantler", "Altaria", "Yanmega", "Gothitelle", "Naganadel", "Urshifu", "Doduo", "Smeargle", "Zangoose", "Leafeon", "Solosis", "Stakataka", "Calyrex", "Dodrio", "Tyrogue", "Seviper", "Glaceon", "Duosion", "Blacephalon", "Seel", "Hitmontop", "Lunatone", "Gliscor", "Reuniclus", "Zeraora", "Dewgong", "Smoochum", "Solrock", "Mamoswine", "Ducklett", "Meltan", "Zarude", "Grimer", "Elekid", "Barboach", "Porygon-Z", "Swanna", "Melmetal", "Muk", "Magby", "Whiscash", "Gallade", "Vanillite", "Shellder", "Miltank", "Corphish", "Probopass", "Vanillish", "Cloyster", "Blissey", "Crawdaunt", "Dusknoir", "Vanilluxe", "Gastly", "Raikou", "Baltoy", "Froslass", "Deerling", "Haunter", "Entei", "Claydol", "Rotom", "Sawsbuck", "Gengar", "Suicune", "Lileep", "Uxie", "Emolga", "Onix", "Larvitar", "Cradily", "Mesprit", "Karrablast", "Drowzee", "Pupitar", "Anorith", "Azelf", "Escavalier", "Hypno", "Tyranitar", "Armaldo", "Dialga", "Foongus", "Krabby", "Lugia", "Feebas", "Palkia", "Amoonguss", "Kingler", "Ho-oh", "Milotic", "Heatran", "Frillish", "Voltorb", "Celebi", "Castform", "Regigigas", "Jellicent", "Electrode", "Kecleon", "Giratina", "Alomomola", "Exeggcute", "Shuppet", "Cresselia", "Joltik", "Exeggutor", "Banette", "Phione", "Galvantula", "Cubone", "Duskull", "Manaphy", "Ferroseed", "Marowak", "Dusclops", "Darkrai", "Ferrothorn", "Hitmonlee", "Tropius", "Shaymin", "Klink", "Hitmonchan", "Chimecho", "Arceus", "Klang", "Lickitung", "Absol", "Klinklang", "Koffing", "Wynaut", "Tynamo", "Weezing", "Snorunt", "Eelektrik", "Rhyhorn", "Glalie", "Eelektross", "Rhydon", "Spheal", "Elgyem", "Chansey", "Sealeo", "Beheeyem", "Tangela", "Walrein", "Litwick", "Kangaskhan", "Clamperl", "Lampent", "Horsea", "Huntail", "Chandelure", "Seadra", "Gorebyss", "Axew", "Goldeen", "Relicanth", "Fraxure", "Seaking", "Luvdisc", "Haxorus", "Staryu", "Bagon", "Cubchoo", "Starmie", "Shelgon", "Beartic", "Mr. Mime", "Salamence", "Cryogonal", "Scyther", "Beldum", "Shelmet", "Jynx", "Metang", "Accelgor", "Electabuzz", "Metagross", "Stunfisk", "Magmar", "Regirock", "Mienfoo", "Pinsir", "Regice", "Mienshao", "Tauros", "Registeel", "Druddigon", "Magikarp", "Latias", "Golett", "Gyarados", "Latios", "Golurk", "Lapras", "Kyogre", "Pawniard", "Ditto", "Groudon", "Bisharp", "Eevee[c]", "Rayquaza", "Bouffalant", "Vaporeon", "Jirachi", "Rufflet", "Jolteon", "Deoxys [d]", "Braviary", "Flareon", "Vullaby", "Porygon", "Mandibuzz", "Omanyte", "Heatmor", "Omastar", "Durant", "Kabuto", "Deino", "Kabutops", "Zweilous", "Aerodactyl", "Hydreigon", "Snorlax", "Larvesta", "Articuno", "Volcarona", "Zapdos", "Cobalion", "Moltres", "Terrakion", "Dratini", "Virizion", "Dragonair", "Tornadus", "Dragonite", "Thundurus", "Mewtwo", "Reshiram", "Mew", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect"
]

// const pokemonList = ["Bulbasaur", "Chikorita", "Treecko"]

//load pokemon list
const $list = document.querySelector('.pokemon-list')
pokemonList.forEach(pokemon => {
    itemTemplate = `<li class="pokemon-item"><button class="poke-button">${pokemon}</button></li>`;
    $list.insertAdjacentHTML('beforeend',  itemTemplate); 
});

// implement request
function getPokemonInfo(pokemonName) {
    const url = `https://api.pokemontcg.io/v1/cards?name=${pokemonName}`;

    let getExtFile = new XMLHttpRequest();
    getExtFile.open("GET", url);
    getExtFile.setRequestHeader('Access-Control-Allow-Origin', '*')
    getExtFile.responseType = 'json';
    getExtFile.onreadystatechange = function () {
        if(getExtFile.status === 200) {
            console.log(getExtFile.response.cards[0])
            loadDetails(getExtFile.response.cards[0])
        }
    };
    getExtFile.send();
}

//load information
function loadDetails(response) {
    $details = document.querySelector('.pokemon-details')
    $details.style.display = 'block'

    const $img = document.querySelector('.img');
    const $name = document.querySelector('.name');
    const $types = document.querySelector('.types');
    const $attacks = document.querySelector('.attacks');

    $img.setAttribute('src', response.imageUrl);
    $name.textContent = response.name;
    response.types.forEach((type)=>{
        $types.textContent += ` ${type},`
    })
    response.attacks.forEach((attack) => {
        $attacks.textContent += ` ${attack.name},`
    })

    $details.scrollIntoView()

}


//make it dynamic 
const buttons = document.querySelectorAll('.poke-button');
buttons.forEach((btn) => {
    const pokemonName = btn.textContent;
    btn.addEventListener('click', () => getPokemonInfo(pokemonName));
})
