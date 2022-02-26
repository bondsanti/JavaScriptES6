
const data = [10,20,30,40,50,60,70,80,90,100];
console.log("data : " + data);

//******splice(ตำแหน่งที่จะลบ(*index),จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)****

//ex1 ลบตั้งแต่ index2 จำนวน 3 สมาชิก array
data.splice(2,3)
console.log("splice(2,3) : " + data);

//ex2 ลบตั้งแต่ index5 ลงไป
data.splice(5)
console.log("splice(5) : " + data);

//ex3 ลบตั้งแต่ index5 จำนวน 2 สมาชิก array และแทรก 555 ระหว่างสมาชิกที่ถูกลบ
data.splice(1,2,555)
console.log("splice(1,2) : " + data);

console.log("****************");

//******slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)******
const data2 = [10,20,30,40,50,60,70,80,90,100];
//ต้องการนำสมาชิก ใน array data มาใช้
const lastdata =data2.slice(2,4) // 30,40
console.log("slice(2,4) : " + lastdata);
