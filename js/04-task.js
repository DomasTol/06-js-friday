/* 4.Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius numturi lyginių ir nelyginių skaitmenų .@param {number} num @example: 
63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’ */

console.clear();

function number (num){
    let tekstas = Math.abs(num).toString();
    let even = 0;
    let odd = 0;
    for (let i=0; i<tekstas.length; i++){
        if (tekstas[i] % 2 === 0){
            even = even +1
        }else {
            odd = odd +1
        }
    }
    return '->' +  ' even:' + even + ' ->' + ' odd:' + odd;
}
console.log(number(63258));