/*console.log('Hello čolku');
document.write('Hello mloku');*/

/* ### Faktorial ###
function faktorial(a) {
  for (i = a; i > 1; i--) {
    a *= i - 1;
  }
  console.log(a);
}
faktorial(6);*/

/* ### Soucet ###
unction soucet(a, b, c) {
  console.log(a + b + c);
}
soucet(4, 5, 6);*/

/* ### Rozdil ###
function rozdil(a, b, c) {
  console.log(a - b - c);
}
rozdil(4, -0.5, 6);*/

/* ### Soucin ###
function soucin(a, b, c) {
  console.log(a * b * c);
}
soucin(1, 2, 3);*/

/* ### Podil ###
function podil(a, b, c) {
  console.log(a / b / c);
}
podil(12, 3, 2);*/

/* ### Druha mocnina ###
function druhaMocnina(a) {
  console.log(a ** 2);
}
druhaMocnina(3);*/

/* ### Treti mocnina ###
function tretiMocnina(a) {
  console.log(a ** 3);
}
tretiMocnina(3);*/

/* ### N-ta mocnina ###
function n_taMocnina(a, n) {
  console.log(a ** n);
}
n_taMocnina(2, 6); */

/* ### Druha odmocnina ###
function druhaOdmocnina(a) {
  console.log(a ** (1 / 2));
}
druhaOdmocnina(36);

/* ### Treti odmocnina ### 
function tretiOdmocnina(a) {
  console.log(a ** (1 / 3));
}
tretiOdmocnina(27); */

/* ### n_taOdmocnina ###
function n_taOdmocnina(a, n) {
  console.log(a ** (1 / n));
}
n_taOdmocnina(3125, 5); */

/* ### Na minus prvou ###
function naMinusPrvou(a) {
  console.log(1 / a);
}
naMinusPrvou(5); */

/* ### Eulerovo cislo ###
function euler(n) {
  console.log(Math.E ** n);
}
euler(4); */

/* ### Pi ###
function pi() {
  console.log(Math.PI);
}
pi(); */

/* ### Prirozeny logaritmus ###
function ln(a) {
  console.log(Math.log(a));
}
ln(5); */

/* ### Dekadicky logaritmus ###
function log(a) {
  console.log(Math.log10(a));
}
log(5); */

/* ### Sinus ###
function sin(a) {
  let aRadians = a * (Math.PI / 180);
  let aSin = Math.sin(aRadians);
  // let aDegrees = aRadians * (180 / Math.PI);
  console.log(aSin);
}
sin(91); */

/* ### Cosinus ###
function cos(a) {
  let aRadians = a * (Math.PI / 180);
  let aCos = Math.cos(aRadians);
  console.log(aCos);
}
cos(60); */

function tan(a) {
  let aRadians = a * (Math.PI / 180);
  let aTan = Math.tan(aRadians);
  // let aDegrees = aRadians * (180 / Math.PI);
  console.log(aTan);
}
tan(71);
