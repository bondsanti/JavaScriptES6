const number =[10,20,30,40,50];
console.log(`number = ${number}`);
const result = number.map(e => {
    let sum = e*2
    return sum
})
//[10,20,30,40,50]
//[10x2,20x2,30x2,40x2,50x2]
console.log(`map result = ${result}`);

const data=[
    {day:"01/06/64",weather:"หนาว",tempmax:33,tempmin:27},
     {day:"02/06/64",weather:"ร้อน",tempmax:38,tempmin:28},
    {day:"03/06/64",weather:"ฝนตก",tempmax:27,tempmin:25}
];

const resultmath = data.map(e=>{
    return e.weather
})
console.log(`map resultmath = ${resultmath}`);
