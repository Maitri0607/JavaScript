// const balance=1000
//implicite scope 
// if(balance>500)  console.log("high"),console.log("low"); 

// truthy and falsy value 
//Falsy value : false, 0, -0, BigIt 0n, "", null, undefine, NaN
// Truthy Values : "0", 'false', " ", [], {}, function(){}

// const userEmail="";
// if (userEmail.length === 0) {
//     console.log("array is empty...");
// }

//Nullish coalescing operator (??) : null,undefine

console.log("\nNullish coalescing operator (??) : null,undefine");
let val1,val2,val3,val4;
val1= 10 ?? 50
val2= null ?? 10
val3= undefined ?? 80
val4= undefined ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

console.log("\nTernery Opretor");
//condition ? true : false

const price=10
price>=80 ? console.log("--> Price is high") : console.log("--> Price is low");