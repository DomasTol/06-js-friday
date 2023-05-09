/* 5.Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai.
 Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. 
 Galima pirkti tik pilnas pakuotes. */

 console.clear();

 function kiekMokesim(ilgis,plotis) {
    let plotas = ilgis * plotis * 1.05;
    const kvadratoKaina = 23;
    const pakuote = 1.5;
    let mokesim = Math.ceil((plotas / pakuote)) *23;
    return 'mokesim' + mokesim + ' eur';
 }
 console.log(kiekMokesim);
