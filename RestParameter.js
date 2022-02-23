summary=(x,y)=>{
return x+y
}

console.log("summary = "+summary(50,100));

summaryRest=(...numberArr)=>{
    let total =0
    for(let number of numberArr) 
    total += number
    return total
}

console.log("summaryRest = " + summaryRest(10,20,30,40));
