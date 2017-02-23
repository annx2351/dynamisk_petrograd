//indsæt data direkte fra JSON
klon.querySelector(".data_navn").innerHTML = produkt.navn;

//beregn data
klon.querySelector(".data_rabatpris").innerHTML = produkt.pris * produkt.rabatsats / 100;

//billeder
klon.querySelector(".data_billede").src = "/imgs/small/" + produkt.billede + "-sm.jpg";
