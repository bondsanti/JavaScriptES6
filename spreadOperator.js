//กระจายสมาชิก array

const newArr = [30,40,"Yo!"];

const dataMaster = [10,20];
//เอา newArr มาเพิ่มใน array data
const data1 = [10,20,...newArr];
const data2 = [...newArr,1,2];
const data3 = [1,...newArr,2];

console.log(data1);
console.log(data2);
console.log(data3);

//หรือใช้ฟังค์ชั่น push
const day=["จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์"];
const dayoff=["เสาร์","อาทิตย์"];

day.push(...dayoff);

console.log(day);