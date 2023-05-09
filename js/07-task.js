/* 7.Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. 
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“. */

function countCoins(num) {
    let penki = 0;
    let du = 0;
    let vienas = 0;
    while (num > 0) {
      if (num >= 5) {
        penki++;
        num -= 5;
      } else if (num >= 2) {
        du++;
        num -= 2;
      } else {
        vienas++;
        num -= 1;
      }
    }
  return `penketai ${penki} dvejetai ${du} vienetai ${vienas} viso monetu ${penki + du + vienas}`
  }