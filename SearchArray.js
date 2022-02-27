//ค้นหาข้อมูลใน Array

const colors =["ขาว","เขียว","ม่วง","แดง","น้ำเงิน","น้ำตาล","ดำ"];

//indexOf ผลค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const indexf = colors.indexOf("ฟ้า");
console.log(`ผลการค้นหา indexOf = ${indexf}`);

//find ผลค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undifined

const  fined = colors.find(e => e ==="แดง")
console.log(`ผลการค้นหา find = ${fined}`);

//findindex ผลค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
const  finedI = colors.findIndex(e => e ==="แดง")
console.log(`ผลการค้นหา findIndex = ${finedI}`);
