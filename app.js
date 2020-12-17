
let animalList = ["chicken", "chicken", "pork", "cow", "cow", "sheep", "cow"];

const chickenLeg = 2;
const cowLeg = 4;
const sheepLeg = 4;

let numberChicken = 0;
let numberCow = 0;
let numberSheep = 0;

for (i = 0; i < animalList.length; i++) {
    if (animalList[i].includes("chicken")) {
        numberChicken++
    } else if (animalList[i].includes("cow")) {
        numberCow++
    } else if (animalList[i].includes("sheep")) {
        numberSheep++
    }
}
let helalBacakSayisi = numberChicken * chickenLeg + numberCow * cowLeg + numberSheep * sheepLeg;
console.log(`helal bacak sayisi : ${helalBacakSayisi}`);