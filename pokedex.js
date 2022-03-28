//fetch = forma de cosulta o solicitud a una API
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    // then = promesa
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/triste.JPG");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        let pokenumero = data.id;
        pokeNumber(pokenumero);
        let pokenombre = data.name;
        pokeNa(pokenombre);
        let poketype = data.types[0].type.name;
        pokeTy(poketype);
        let pokebability = data.abilities[0].ability.name;
        pokeabi(pokebability);   
        let pokebability2 = data.abilities[1].ability.name;
        pokeabi2(pokebability2);    
        let pokehp = data.stats[0].base_stat;
        pokeH(pokehp);  
        let pokeattack = data.stats[1].base_stat;
        pokeA(pokeattack);
        let pokeattack2 = data.stats[3].base_stat;
        pokeA2(pokeattack2);
        let pokedefense = data.stats[2].base_stat;
        pokeD(pokedefense);
        let pokedefense2 = data.stats[4].base_stat;
        pokeD2(pokedefense2);
        let pokespeed = data.stats[5].base_stat;
        pokeS(pokespeed);

    })
}

// fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeNumber = (data) => {
    const pokenumero = document.getElementById("pokenumero");
    pokenumero.innerText = `#${data}`;
}
const pokeNa = (data) => {
    const pokenombre = document.getElementById("pokenombre");
    pokenombre.innerText = data;
}
const pokeTy = (data) => {
    const poketype = document.getElementById("poketype");
    poketype.innerText = `Type: ${data}`;
}
const pokeabi = (data) => {
    const pokebability = document.getElementById("pokebability");
    pokebability.innerText = `Abilities: ${data}`;
}
const pokeabi2 = (data) => {
    const pokebability2 = document.getElementById("pokebability2");
    pokebability2.innerText = data;
}
const pokeH = (data) => {
    const pokehp = document.getElementById("pokehp");
    pokehp.innerText = `HP: ${data}`;
}
const pokeS = (data) => {
    const pokespeed = document.getElementById("pokespeed");
    pokespeed.innerText = `speed: ${data}`;
}
const pokeA = (data) => {
    const pokeattack = document.getElementById("pokeattack");
    pokeattack.innerText = `Attack: ${data}`;
}
const pokeA2 = (data) => {
    const pokeattack2 = document.getElementById("pokeattack2");
    pokeattack2.innerText = `sp. Attack: ${data}`;
}
const pokeD = (data) => {
    const pokedefense = document.getElementById("pokedefense");
    pokedefense.innerText = `defense: ${data}`;
}
const pokeD2 = (data) => {
    const pokedefense2 = document.getElementById("pokedefense2");
    pokedefense2.innerText = `sp. defense: ${data}`;
}

