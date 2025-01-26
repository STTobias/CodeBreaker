var zahl1 = Math.round(Math.random() * 9 + 0.5);
var zahl2 = Math.round(Math.random() * 9 + 0.5);
var zahl3 = Math.round(Math.random() * 9 + 0.5);

do{

    var meinVersuch = prompt("Gib den 3 Stelligen Code mit Zahlen von 1 - 9 ein", "");
    var tipp1 = meinVersuch.charAt(0);
    var tipp2 = meinVersuch.charAt(1);
    var tipp3 = meinVersuch.charAt(2);

    var richtigeStelle = 0;
    var richtigeZahl = 0;

    if(tipp1 == zahl1){
        richtigeStelle++;
    } else if (tipp1 == zahl2 || tipp1 == zahl3){
        richtigeZahl++; 
    }

    if(tipp2 == zahl2){
        richtigeStelle++;
    } else if (tipp2 == zahl1 || tipp2 == zahl3){
        richtigeZahl++; 
    }

    if(tipp3 == zahl3){
        richtigeStelle++;
    } else if (tipp3 == zahl1 || tipp3 == zahl2){
        richtigeZahl++; 
    }

    alert("Letzter Tipp: " + meinVersuch + ", " + richtigeStelle + " Richtige Stellen, " + richtigeZahl + " Richtige Zahlen")
}while(richtigeStelle < 3)
alert("Du hast es geschafft, Super! Der Code war " + zahl1 + " - " + zahl2 + " - " + zahl3)
