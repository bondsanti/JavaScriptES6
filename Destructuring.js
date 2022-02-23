//***array***
const colors = ["แดง","ขาว","น้ำเงิน"];

//normal
// const red = colors[0]//= แดง
// const white = colors[1]//= ขาว
// const blue = colors[2]//= น้ำเงิน

//destruct
//const [red,white,blue] =colors;

// console.log(red);
// console.log(white);
// console.log(blue);

//*กรณีอยากได้ สีน้ำเงิน
const [,,blue] =colors;

//console.log(blue);

//***object***
const product = {
    productname :"Iphone13",
    brands:"Apple",
    storage:"256GB",
    price:40000,
    color:"Gold"
}

//normal
// const name = product.productname;
// const brand = product.brands;

//destruct

const {productname,brands,storage,price,color} = product;

console.log(productname);
