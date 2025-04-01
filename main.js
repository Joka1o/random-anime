//Масив цитат
const quotes = [
    "«Це просто жалюгідно відмовлятися від чогось, навіть не спробувавши». – Рейко Мікамі",
    "«Знання, що ти інший, це лише початок...» – Міс Кобаяші",
    "«Ви можете померти будь-коли, але для життя потрібна справжня мужність». – Кеншин Хімура",
    "«Кожна подорож починається з одного кроку...» – Міллі Томпсон"
];
//Обєкт із даними персонажів
const characterData = {
    0: {
        img: "https://cdn.hikka.io/content/characters/reiko-mikami-a1c918/Eci52_PAyMur1Q1wN0hPkA.jpg",
        link: "https://anitube.in.ua/29-insha.html"
    },
    1: {
        img: "https://static.wikia.nocookie.net/kobayashi-san/images/5/52/Kobayashi_5.png/revision/latest?cb=20170730114523&path-prefix=ru",
        link: "https://anitube.in.ua/4423-mini-dragon.html"
    },
    2: {
        img: "https://static.wikia.nocookie.net/character-power/images/7/75/%D0%A5%D0%B8%D0%BC%D1%83%D1%80%D0%B0_%D0%9A%D0%B5%D0%BD%D1%88%D0%B8%D0%BD.jpg/revision/latest?cb=20140226195822&path-prefix=ru",
        link: "https://anitube.in.ua/4386-rurouni-kenshin-meiji-kenkaku-romantan-2023.html"
    },
    3: {
        img: "https://nyaa.shikimori.one/system/user_images_h/original/8e09f3c7a3afb778b6216e78/e7ebef2e4465ae70d7fc76fca060b729b2a2a9491d7854bfe216fb53849131b0.jpg",
        link: "https://anitube.in.ua/42-trigan.html"
    },
};
//Вибір раномних цитат та зображень
let currentIndex = 0;

function showRandomQuote() {
    currentIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("demo").innerText = quotes[currentIndex];

    let imgElement = document.getElementById("character-image");
    imgElement.src = characterData[currentIndex].img;
}
//Відкриття посилання на аніме
function openCharacterLink() {
    window.open(characterData[currentIndex].link, "_blank");
}

/*
1.Відкрийте index.html у браузері.

2.Натисніть кнопку "Рандом", щоб отримати випадкову цитату та зображення.

3.З'явиться кнопка "Посилання" – натисніть її, щоб перейти на сайт аніме.
*/
