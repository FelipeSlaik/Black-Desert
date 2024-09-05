const imagemFundo = [
    'img/warrior/warrior1.png',
    'img/cacadora/cacadora1.webp',
    'img/feiticeira/feiticeira1.jpg',
    'img/berserker/berserker1.png',
    'img/domadora/domadora1.jpg',
    'img/musah/musah1.jpg',
    'img/maehwa/maehwa1.png',
    'img/valquiria/valquiria1.jpg',
    'img/kunoichi/kunoichi1.jpg',
    'img/ninja/ninja1.jpg',
    'img/mago/mago1.jpg',
    'img/bruxa/bruxa1.png',
    'img/lutador/lutador1.jpg',
    'img/mistica/mistica1.jpg',
    'img/lahn/lahn1.jpg',
    'img/arqueiro/arqueiro1.jpg',
    'img/darknight/darknight1.png',
    'img/shai/shai1.png',
    'img/guardia/guardia1.jpg',
    'img/hashashin/hashashin1.jpg',
    'img/nova/nova1.jpg',
    'img/sage/sage1.png',
    'img/corsaria/corsaria1.jpg',
    'img/drakania/drakania1.jpg',
    'img/wusa/wusa1.jpg',
    'img/megu/megu1.jpg',
    'img/erudita/erudita1.png',
    'img/dosa/dosa1.jpg',
    // todas as 28 classes
];

const simbolos = [
    'img/warrior/warrior-simbol.png',
    'img/cacadora/cacadora-simbol.webp',
    'img/feiticeira/feiticeira-simbol.png',
    'img/berserker/berserker-simbol.png',
    'img/domadora/domadora-simbol.png',
    'img/musah/musah-simbol.png',
    'img/maehwa/maehwa-simbol.png',
    'img/valquiria/valquiria-simbol.png',
    'img/kunoichi/kunoichi-simbol.png',
    'img/ninja/ninja-simbol.png',
    'img/mago/mago-simbol.png',
    'img/bruxa/bruxa-simbol.png',
    'img/lutador/lutador-simbol.png',
    'img/mistica/mistica-simbol.png',
    'img/lahn/lahn-simbol.png',
    'img/arqueiro/arqueiro-simbol.png',
    'img/darknight/darknight-simbol.webp',
    'img/shai/shai-simbol.png',
    'img/guardia/guardia-simbol.png',
    'img/hashashin/hashashin-simbol.png',
    'img/nova/nova-simbol.png',
    'img/sage/sage-simbol.png',
    'img/corsaria/corsaria-simbol.png',
    'img/drakania/drakania-simbol.png',
    'img/wusa/wusa-simbol.png',
    'img/megu/megu-simbol.png',
    'img/erudita/erudita-simbol.png',
    'img/dosa/dosa-simbol.png',
    // todos os 28 simbolos das classes
];

const nomeDasClasses = [
    'Guerreiro',
    'Caçadora',
    'Feiticeira',
    'Berserker',
    'Domadora',
    'Musah',
    'Maehwa',
    'Valquiria',
    'Kunoichi',
    'Ninja',
    'Mago',
    'Bruxa',
    'Lutador',
    'Mística',
    'Lahn',
    'Arqueiro',
    'Cavaleira das Trevas',
    'Shai',
    'Guardiã',
    'Hashashin',
    'Nova',
    'Sage',
    'Corsária',
    'Drakania',
    'Wu-Sa',
    'Me-Gu',
    'Erudita',
    'Do-Sa'

    // todos os 28 nomes de classes
];

const linkDasClasses = [
"./page/classe.html",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
"javascript:void(0)",
]

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("card-container");

    for(let i =0; i < 28; i++){
        const linkClasses = document.createElement("a");
        linkClasses.classList.add("link-sobre-classes");
        linkClasses.href = linkDasClasses[i];
        // linkClasses.target = "_blank";
        
        const card = document.createElement("div");
        card.classList.add("card-container");

        // Usando o array para definir a imagem de fundo
        card.style.backgroundImage = `url("${imagemFundo[i]}")`;
        

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const simbolosImg = document.createElement("img");

         // Usando o array para definir o Simbolo
        simbolosImg.src = simbolos[i];
        simbolosImg.alt = nomeDasClasses[i];

        const nome = document.createElement("h2");

        // Usando o array para definir o nome da classe
        nome.textContent = nomeDasClasses[i];

        cardInfo.appendChild(simbolosImg);
        cardInfo.appendChild(nome);
        card.appendChild(cardInfo);
        linkClasses.appendChild(card)
        container.append(linkClasses);
    } 
})

