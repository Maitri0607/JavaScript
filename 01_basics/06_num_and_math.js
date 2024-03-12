//  ++++++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++
console.log("NUMBERS\n");
const num=500;
 console.log("inputed number : ",num);

 const num1=new Number(12.226)
 console.log("new number :",num1);

 console.log("tofixed(3): ",num1.toFixed(3)); //   display float values after .
 console.log("toprecision(3) : ",num1.toPrecision(3));  // foxed notation with specified numbers.

 const num3=10000000000
 console.log("toLocatestring : ",num3.toLocaleString('en-IN')); //to easy representation and by default it is in us formatt



 //  ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++
console.log("\n\nMATHS\n\n");
console.log(Math);
console.log("absolute of math(abs) : ",Math.abs(-5));
console.log("round of math(round) : ",Math.round(9.6));
console.log("top of math(ceil) : ",Math.ceil(4.6));
console.log("floor of math(floor) : ",Math.floor(4.6));
console.log("Minimun of math(min) : ",Math.min(4,8,3,1,0,9,5));
console.log("maximum of math(max) : ",Math.max(4,8,3,1,0,9,5));

//math.random
// gives value in 0 or 1 like 0.1,0.6,0.369,0.546
console.log("\n\nRandom of math(random) : ",Math.random());

//problem: jyare aa random value ne 10 sathe multiply karvama aave tyare te left side shift to thay jaay but sometimes te 0.15781,0.564,0.5642 random value retun kare che 
console.log("Problem of random : ",(Math.random()*10));

//solution : aavi problem ne solved karva te value ma +1 add karvam aave jethi 1 ke tenathi vadhare value return kare.
console.log("Solution of random : ",Math.floor((Math.random()*10)+1));

//EXAMPLE OF MATH RANDOM
min=10
max=20
console.log("random number displayed :",Math.random());
console.log("define in 1 of random :",Math.floor((Math.random()) * (max-min+1) + min));