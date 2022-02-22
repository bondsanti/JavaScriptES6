//normal
const address1 = "Keas 69 Str.15234, Chalandri Athens,Greece";
//backtick
const address2 = `Keas 69 Str.15234, 
Chalandri Athens,
Greece`;


const city="Chalandri Athens";

const address3 = `Keas 69 Str.15234, 
${city},
Greece`;


console.log("(1)"+ address1);
console.log("---------");
console.log("(2)"+ address2);
console.log("---------");
console.log("(3)" +address3);