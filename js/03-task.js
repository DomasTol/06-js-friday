/* 3.Parašykite  funkcija  kuri  paskaičiuotų  atstumą  tarp  dviejų  taškų koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2. 
@param {number} x1 @param {number} y1 @param {number} x2 @param {number} y2 @example: 
(0,0) (0,1) => 1 
(0,0) (1,0) => 1
(-5,0) (10,-10) => 18.027756377319946 */

console.clear();

function koordinates(x1, y1, x2, y2) {
    x = x2 - x1;
    y = y2 - y1;
    atstumas = Math.sqrt(x**2 + y**2);
    return atstumas;
}
console.log(koordinates (0, 0, 0, 1));
console.log(koordinates (0, 0, 1, 0));
console.log(koordinates (-5, 0, 10, -10));