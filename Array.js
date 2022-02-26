
//array
const data1 = [100,200,300];
const data2 = [400,500];
const data3 = [600,700];
//console.log(data1);

//join
//แปลง array เป็น String และสามารถกำหนดตัวเชื่อมหรือตัวขั้นสมาชิกใน array ได้ภายในคำสั่ง Join แต่ถ้าไม่กำหนด จะDefault , มาให้
const resultJoin = data1.join("x");
console.log("join : "+resultJoin);

//concat
//การเอา array data1 ต่อ กับ data2
const resultConcat = data1.concat(data2);
console.log("concat : "+resultConcat);

//push
//การนำข้อมูลสมาชิก ไปเพิ่มใน array ตัวท้าย
data3.push(...[800,900,1000]);
console.log("push :"+ data3);

//pop
//ลดสมาชิกใน array ตัวท้าย
data3.pop()
console.log("pop :"+ data3);

//shift
//ลดสมาชิกด้านหน้า
data3.shift()
console.log("shift :"+ data3);

//unshift
//เพิ่มสมาชิกด้านหน้า
data3.unshift(600)
console.log("unshift :"+ data3);
