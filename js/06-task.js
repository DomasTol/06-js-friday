/* 6.Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. 
Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai. */

function vidurkis() {
    const pazymiai = []
    for (let i = 0; i < 30; i++)
    pazymiai.push (Math.floor(Math.random() * 10) + 1);
    return `Geriausias :${Math.max(...pazymiai)}, Blogiausias ${Math.min(...pazymiai)}`
}