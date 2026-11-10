
function najava() {
    var korisnik = document.getElementById("korisnik").value;
    var lozinka = document.getElementById("lozinka").value;
    if (korisnik == "" || lozinka == "") {
        alert("Внеси корисничко име и лозинка!");
    } else {
        document.getElementById("poraka").textContent ="Добредојде, " + korisnik + "!";
    }
}

function odjava() {
    document.getElementById("korisnik").value = "";
    document.getElementById("lozinka").value = "";
    document.getElementById("poraka").textContent ="Одјавен си! ";
}

var gradovi = [
    {
        ime: "Париз",
        drzava: "Франција",
        kategorija: ["Grad"],
        cena: 90,
        slika: "paris.jpeg",
        sliki: ["paris2.jpeg","paris3.jpeg","paris4.jpeg"],
        likes: 0,
        dislikes: 0,
        komentari: [],
        vodic: ["Ајфелова кула","Музеј Лувр","Триумфална капија",
                "Нотр Дам","Шанзелизе","Монмартр","Базилика Сакре Кер",
                "Луксембуршки градини","Плоштад Конкорд","Реката Сена"]
    },
    {
        ime: "Рим",
        drzava: "Италија",
        kategorija: ["Grad"],
        cena: 80,
        slika: "rim.jpeg",
        sliki: ["rim2.jpeg","rim3.jpeg","rim4.jpeg"],
        likes: 0,
        dislikes: 0,
        komentari: [],
        vodic: ["Колосеум","Фонтана ди Треви","Пантеон",
               "Римски форум","Ватикан","Базилика Свети Петар","Шпански скали",
               "Пјаца Навона","Замок Сант Анџело","Парк Вила Боргезе"]
    },
    {
        ime: "Охрид",
        drzava: "Македонија",
        kategorija: ["Ezero","Grad"],
        cena: 45,
        slika: "ohrid.jpeg",
        sliki: ["ohrid2.jpeg","ohrid3.jpeg","ohrid4.jpeg"],
        likes: 0,
        dislikes: 0,
        komentari: [],
        vodic: ["Самоилова тврдина","Плаошник","Свети Јован Канео",
               "Охридско Езеро","Стариот град","Античкиот театар","Билјанини извори",
               "Света Софија","Заливот на коските","Свети Наум"]
    },
    
{
    ime: "Копаоник",
    drzava: "Србија",
    kategorija: ["Planina"],
    cena: 65,
    slika: "kopaonik.jpeg",
    sliki: ["kopaonik2.jpeg","kopaonik3.jpeg","kopaonik4.jpeg"],
    likes: 0,
    dislikes: 0,
    komentari: [],
    vodic: ["Ски центар Копаоник","Панчиќев врв","Национален парк Копаоник",
           "Суво Рудиште","Маркови камења","Небески столици",
           "Гобеља","Караман Гребен","Јелак","Семетешко езеро"]
},
{
    ime: "Атина",
    drzava: "Грција",
    kategorija: ["More","Grad"],
    cena: 70,
    slika: "grcija.jpeg",
    sliki: ["grcija2.jpeg","grcija3.jpeg","grcija4.jpeg"],
    likes: 0,
    dislikes: 0,
    komentari: [],
    vodic: ["Акропол","Партенон","Музеј на Акропол","Плоштад Синтагма",
           "Национална градина","Античка Агора","Храм на Олимпискиот Зевс",
           "Плака - стариот град","Рид Ликавитос","Стадион Панатинаикос"]
},
{
    ime: "Сплит",
    drzava: "Хрватска",
    kategorija: ["More","Grad"],
    cena: 85,
    slika: "hrvatska.jpeg", 
    sliki: ["hrvatska2.jpeg","hrvatska3.jpeg","hrvatska4.jpeg"],
    likes: 0,
    dislikes: 0,
    komentari: [],
    vodic: ["Диоклецијанова палата","Рива - шеталиштето во Сплит","Катедрала Свети Дује",
            "Парк шума Марјан","Плажата Бачвице","Плоштад Перистил",
            "Храмот на Јупитер","Плоштад Прокуративе","Галерија Мештровиќ","Тврдината Клис"]
}
];
var otvorenGrad = -1;

function prikaziGradovi() {
    var kategorija = document.getElementById("kategorija").value;
    var budzet = document.getElementById("budzet").value;
    var lista = document.getElementById("listaGradovi");

    for (var i = 0; i < gradovi.length; i++) {
        var grad = gradovi[i];

        if (kategorija != "Site" && !grad.kategorija.includes(kategorija)) {
            lista.children[i].style.display = "none";
        }
        else if (budzet != "" && grad.cena > Number(budzet)) {
            lista.children[i].style.display = "none";
        }
        else {
            lista.children[i].style.display = "block";
        }
    }
}

function dodadiGrad(event) {
    event.preventDefault();

    var ime = document.getElementById("imeGrad").value;
    var drzava = document.getElementById("drzavaGrad").value;
    var kategorija = document.getElementById("novaKategorija").value;
    var cena = Number(document.getElementById("cenaGrad").value);
    var slika = document.getElementById("slikaGrad").value;
    if (ime.trim() == "" || cena <= 0) return;

    var grad = {
        ime: ime,
        drzava: drzava,
        kategorija: [kategorija],
        cena: cena,
        slika: slika,
        sliki: [slika],
        likes: 0,
        dislikes: 0,
        komentari: [],
        vodic: [
            "Центарот на градот", "Главниот плоштад",
            "Локалниот музеј", "Историскиот дел",
            "Градскиот парк", "Познатите споменици",
            "Традиционалните ресторани", "Локалниот пазар",
            "Најубавиот видиковец", "Туристичките атракции"
        ]
    };
    gradovi.push(grad);

    var i = gradovi.length - 1;

    var karticka = document.createElement("div");
    karticka.className = "col-md-4";

    karticka.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="${slika}">
            <div class="card-body">
                <h3>${ime}</h3>
                <p>Држава: ${drzava}</p>
                <p>Категорија: ${kategorija}</p>
                <p>Дневен буџет: ${cena} €</p>
                <button class="btn btn-primary" onclick="otvoriGrad(${i})">
                    Отвори град
                </button>
                <button class="btn btn-danger" onclick="izbrisiGrad(${i})">
                    Избриши град
                </button>
            </div>
        </div>
    `;
    document.getElementById("listaGradovi").appendChild(karticka);
    prikaziGradovi();
    osveziIzbori();
    event.target.reset();
}

function izbrisiGrad(i) {
    gradovi.splice(i, 1);

    var lista = document.getElementById("listaGradovi");
    lista.children[i].remove();

    for (var j = 0; j < gradovi.length; j++) {
        lista.children[j].getElementsByTagName("button")[0].setAttribute("onclick", "otvoriGrad(" + j + ")");
        lista.children[j].getElementsByTagName("button")[1].setAttribute("onclick", "izbrisiGrad(" + j + ")");
    }
    otvorenGrad = -1;
    document.getElementById("detaliGalerija").className = "skrieno";
    prikaziGradovi();
    osveziIzbori();
}

function osveziIzbori() {
    var izbor = document.getElementById("izborGrad");
    var galerija = document.getElementById("galerijaGradovi");
    var blog = document.getElementById("blogGrad");

    izbor.innerHTML = "";
    galerija.innerHTML = "";
    blog.innerHTML = "";

    for (var i = 0; i < gradovi.length; i++) {
        izbor.innerHTML += `<option value="${i}">${gradovi[i].ime}</option>`;

        blog.innerHTML += `<option value="${i}">${gradovi[i].ime}</option>`;

        galerija.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="${gradovi[i].slika}">
                    <div class="card-body">
                        <h3>${gradovi[i].ime}</h3>
                        <button class="btn btn-primary" onclick="otvoriGrad(${i})">
                            Отвори
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    prikaziBlog();
}

function presmetaj() {
    var i = document.getElementById("izborGrad").value;
    var denovi = Number(document.getElementById("denovi").value);
    var prevoz = Number(document.getElementById("prevoz").value);
    if (i == "" || denovi < 1 || prevoz < 0) {
        document.getElementById("rezultat").textContent =
            "Внесете валидни податоци.";
        return;
    }
    var vkupno = gradovi[i].cena * denovi + prevoz;
    document.getElementById("rezultat").textContent =
        "Вкупни трошоци за " + gradovi[i].ime + ": " + vkupno + " €";
}

function otvoriGrad(i) {
    otvorenGrad = i;
    document.getElementById("detaliGalerija").className = "";
    document.getElementById("naslovGalerija").textContent = gradovi[i].ime;

    var sliki = gradovi[i].sliki || [gradovi[i].slika];
    var prikaz = document.getElementById("slikiGalerija");
    prikaz.innerHTML = "";

    for (var j = 0; j < sliki.length; j++) {
        prikaz.innerHTML += `<div class="col-md-4">
                <img class="img-fluid" src="${sliki[j]}">
            </div>`;
    }
    osveziGalerija();
    document.getElementById("detaliGalerija").scrollIntoView();
}

function osveziGalerija() {
    var grad = gradovi[otvorenGrad];

    document.getElementById("brojLike").textContent = grad.likes;
    document.getElementById("brojDislike").textContent = grad.dislikes;

    var lista = document.getElementById("komentari");
    lista.innerHTML = "";

    for (var i = 0; i < grad.komentari.length; i++) {
        var p = document.createElement("p");
        p.textContent = grad.komentari[i];
        lista.appendChild(p);
    }
}

function glasaj(x) {
    if (otvorenGrad < 0) return;
    if (x == "like") {
        gradovi[otvorenGrad].likes++;
    } else {
        gradovi[otvorenGrad].dislikes++;
    }
    osveziGalerija();
}

function dodadiKomentar() {
    if (otvorenGrad < 0) return;

    var pole = document.getElementById("novKomentar");
    var komentar = pole.value.trim();
    if (komentar == "") return;
    gradovi[otvorenGrad].komentari.push(komentar);
    pole.value = "";
    osveziGalerija();
}

function prikaziBlog() {
    var i = document.getElementById("blogGrad").value;
    var naslov = document.getElementById("blogNaslov");
    var lista = document.getElementById("blogLista");
    lista.innerHTML = "";
    if (i == "") {
        naslov.textContent = "Нема дестинации";
        return;
    }
    var grad = gradovi[i];
    document.getElementById("blogDrzava").textContent = "Држава: " + grad.drzava;
    document.getElementById("blogCena").textContent = "Просечен дневен буџет: " + grad.cena + " €";

    for (var j = 0; j < grad.vodic.length; j++) {
        var p = document.createElement("p");
        var b = document.createElement("b");

        b.textContent = (j + 1) + ". " + grad.vodic[j];
        p.appendChild(b);
        lista.appendChild(p);
    }
    document.getElementById("blogSovet").textContent =
        "Пред патувањето проверете ја временската прогноза, испланирајте како ќе го поминете вашето слободно време и однапред испланирајте го вашиот буџет за патувањето.";
}

function ispratiAnketa(event) {
    event.preventDefault();
    document.getElementById("porakaAnketa").textContent ="Благодариме за вашето мислење!";
    event.target.reset();
}

window.addEventListener("load", start, false);

function start() {
    prikaziGradovi();
    osveziIzbori();
}

