const dataArray = [10,20,30,40];
const dataObject = [
    {
        name:"John smith",
        position:"Manager",
        salary:15000
    },
    {
        name:"Mary Jan",
        position:"Accounting",
        salary:15000
    },
    {
        name:"Adam k",
        position:"Programer",
        salary:20000
    },
    {
        name:"Sandy Oman",
        position:"Programer",
        salary:22000
    }
]

//การกรองข้อมูลในรูปแบบ Array
const result1 =  dataArray.filter(e=>{
    return e >= 20
})

console.log(`dataArray Filter :  ${result1}`)


//การกรองข้อมูลในรูปแบบ object
const result2 =  dataObject.filter(e=>{
    return e.salary > 15000
})

console.log(result2)