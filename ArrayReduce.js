const dataArray = [10,20,30,40];
const dataObject= [
    {name:"iphone13 256GB",category:"มือถือ",price:35000},
    {name:"iphone1 128GB",category:"มือถือ",price:29800},
    {name:"Acer 1Z005",category:"คอมพิวเตอร์",price:17000},
    {name:"Lenovo L432Z",category:"คอมพิวเตอร์",price:20000}
];


//array.reduce((ค่าที่ถูกประมวลผล,eหรือสมาชิกที่อยู่ใน array)=>{},ค่าเริ่มต้น)
const result =dataArray.reduce((value,e)=>{
    const total = e+value
    return total
},0)

console.log(result);

const result2 =dataObject.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)

console.log(result2);