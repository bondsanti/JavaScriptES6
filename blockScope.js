// let | const

//แบบเดิม

var x = 10;

if (x===10) {
    var y = 500;
    console.log("y = "+ y);
}
console.log("y = "+ y);

//จะเห็นปัญหาที่เกิดขึ้น จะมี y = 500 2 ค่า
//ปกติแล้ว ขอบเขตของ y ต้องอยู่ใน Block ของ if

//แบบใหม่
let x = 10;

if (x===10) {
    let y = 500;
    console.log("y ใน = "+ y);
}
console.log("y นอก = "+ y);

//หาก run จะเห็นได้ว่า Y ในจะมีค่า = 500, y นอกจะ error เนื่องจาก ไม่ได้ประกาศเป็นตัวแปร หรือนิยามมันไว้
//ต้องใช้ let เป็นสิ่งที่ถูกต้อง

const z = 50;
z = 100;
console.log(" z = "+ z );

// หากรัน จะแสดง z=50 เนื่องจาก const คือค่าคงที่
