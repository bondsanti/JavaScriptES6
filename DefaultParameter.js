getDataDelivery=(cName,cAddress)=>{

    if(!cName){
        cAddress="ไม่ระบุชื่อ"
    }else if(!cAddress){
        cAddress="ไม่ระบุที่อยู่"
    }

    const data = `ชื่อลูกค้า : ${cName}
    ที่อยู่ : ${cAddress}`
    return data
}

console.log(getDataDelivery("John","Keas 69 Str.15234, Chalandri Athens,Greece"));
//กรณี ส่งค่ามาไม่ครบ จะขึ้น undefined เราจึงต้องสร้างเงื่อนไขเช็ค**
console.log(getDataDelivery("John"));