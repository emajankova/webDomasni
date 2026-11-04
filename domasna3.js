var krug=0;
var vozaci=[];

var tabela=document.getElementById("vozaci");
var redovi=tabela.rows;

for(var i=0;i<redovi.length;i++) {
    var koloni=redovi[i].cells;

    var vozac = {
        ime:koloni[1].textContent,
        brzina:Number(koloni[3].textContent),
        vestina:Number(koloni[4].textContent),
        vreme:0,
        gumi:koloni[5].textContent,
        pocetniGumi:koloni[5].textContent,
        status:"Старт",
        red:redovi[i],
        pocetnaPozicija:i
    };
    vozaci.push(vozac);
}
function sledenKrug() {  
    if (krug >= 10) {
        return;
    }
    krug++;

    var bezbednosnoV=Math.random() < 0.2;  

    for(var i=0;i<vozaci.length; i++) {
        var v = vozaci[i];

        var vreme=v.brzina/3;   
        vreme=vreme + (10 - v.vestina) * 0.5;
        vreme=vreme + Math.random()*4;

        if (v.gumi == "Меки") {  
            vreme= vreme - 1;
        }
        if (v.gumi == "Тврди") {
            vreme= vreme + 1;
        }
        v.status ="На патека";

        if (krug == 6) {  
            vreme = vreme + 15;

            if (v.gumi == "Меки") {
                v.gumi = "Тврди";
            } else {
                v.gumi = "Меки";
            }
            v.status = "Пит-стоп";
        }

        if (Math.random() < 0.05) {  
            vreme = vreme + 10;      
            v.status = "Извртување/Излетување";
        }
        
        if (bezbednosnoV == true) { 
            vreme = vreme + 15;
            v.status ="Безбедносно возило";
            
        }
        v.vreme += vreme;  
    }
    vozaci.sort(function(a, b){
        return a.vreme - b.vreme;
    });
    printTabela();

    if (krug == 10) {  
        document.getElementById("poraka").textContent = "Победник е: "+ vozaci[0].ime;
    }
}

function printTabela() {

    for(var i=0;i < vozaci.length;i++) {

        var v = vozaci[i];
        v.red.cells[0].textContent = i + 1;
        v.red.cells[5].textContent = v.gumi;
        v.red.cells[6].textContent = v.vreme.toFixed(2);
        v.red.cells[7].textContent = v.status;

        tabela.append(v.red);
    }
    document.getElementById("krug").textContent =
        "Круг: "+ krug + " / 10";
}

function reset() {
    location.reload();  
}

