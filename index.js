let pokemon = [
    {
        isim : "Pikachu",
        resim : "./img/Pikachu.png"
    },
    {
        isim : "Arbok",
        resim : "./img/Arbok.png"
    },
    {
        isim: "Bulbasaur",
        resim : "./img/Bulbasaur.png"
    },
    {
        isim: "Butterfly",
        resim : "./img/butterfly.png"
    },
    {
        isim: "Caterpie",
        resim : "./img/Caterpie.png"
    },
    {
        isim: "Charmander",
        resim : "./img/charmander.png"
    },
    {
        isim: "Gengar",
        resim : "./img/Gengar.png"
    },
    {
        isim: "Gyarados",
        resim : "./img/Gyarados.png"
    },
    {
        isim: "Meowth",
        resim : "./img/meowth.png"
    },
    {
        isim: "Mewtwo",
        resim : "./img/Mewtwo.png"
    },
    {
        isim: "Pysduck",
        resim : "./img/Pysduck.png"
    },
    {
        isim: "Venonat",
        resim : "./img/Venonat.png"
    }
];

//********************************************************* */
const sağOk = document.getElementById("sağOk");
const solOk = document.getElementById("solOk");
let resimİçerik = document.getElementById("içerik-resim");
let isimİçerik = document.getElementById("içerik-metin");

let index = 0;
let pokemonSayısı = pokemon.length;


//******************************************************************* */
sağOk.addEventListener("click", (e) => {
    index++;
    eklemeİşlem.resimekleme(index);
    console.log(index);

    e.preventDefault();
})

solOk.addEventListener("click",(e) => {
    index--;
    eklemeİşlem.resimekleme(index);
    console.log(index);
    e.preventDefault();

})
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class eklemeİşlem {
    static resimekleme(i){
        i = index;
        if (index < 0) {
            index = pokemonSayısı-1;
        }else if(index >= pokemonSayısı) {
            index = 0
        }
        resimİçerik.innerHTML = `
        <img src="${pokemon[index].resim}" alt="" />`
        isimİçerik.innerText = `${pokemon[index].isim}`
    }

}


setInterval(() => {
    let randomIndex = Math.floor(Math.random() * pokemonSayısı);
    resimİçerik.innerHTML = `
    <img src="${pokemon[randomIndex].resim}" alt="" />`
    isimİçerik.innerText = `${pokemon[randomIndex].isim}`
},2000)
