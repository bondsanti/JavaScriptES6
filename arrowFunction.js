
const fname="John";
const lname="Mayer";

//แบบเดิม

function fullnameOld(fname,lname) {
    return fname +" "+ lname
}

console.log("เดิม "+ fullnameOld(fname,lname));


//แบบใหม่
fullnameNew=(fname,lname) => {
    return fname +" "+ lname
}
console.log("ใหม่ "+ fullnameNew(fname,lname));