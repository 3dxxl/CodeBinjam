var i = 0;
var zufall = 0;
while(true) {
i++;
zufall = Math.random();
if(i%1000==0) postMessage("Schritt " + i + ", Wert der Zufallszahl: " + zufall);
if (i > 10000000) {
break;
}
}