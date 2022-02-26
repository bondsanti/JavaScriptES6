const data = [5,10,15,20,25,30,35,40,45,50];

//loop for //สามารถเขียน break conti ได้
for(i=0;i<data.length;i++){
    if(data[i]>=30)break;
    console.log(`ลำดับที่ ${i} = ${data[i]}`);
}

console.log("**************************");


//loop forEach
let total =0;
data.forEach(e => {
     total+=e
    console.log(`data = ${e} ผลรวม = ${total}`);
});

console.log("**************************");

//loop for of

for(const e of data)
{
    if(e > 30) break;
    console.log(`data = ${e}`);
}