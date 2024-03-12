
//Push Method 
const Fruit=["Orange","Apple","Banana"]
const veg=["Onion","Patato","Tameto","Bringle","cauliflower"]
Fruit.push(veg)
console.log("\nHere Push method took 'veg' variable as an element :\n",Fruit);

//Concat Method
const city1=["navsari","valsad","vapi"]
const city2=["Ahmedaba","vadodara","bharuch"]
const city=city1.concat(city2)
console.log("\nConcat method merges the arrays:\n",city);

//Spred method 
const name1=["keta","mahi","mitu"]
const name2=["het","kevin","heer"]
const names=[...name1,...name2]
console.log("\nSpread method spred the multiiple arrays in one arrays:\n",names);


//Arry.isArray() method
console.log("\n\nArray.isArray() Method define if passed value is an array the it return 'TURE' otherwise it returs 'FALSE'.");
console.log("\nelement declared in () that's why this is not array : ",Array.isArray("Maitri"));
console.log("here element is declare in [] bracet so we define as an array: ",Array.isArray(["Maitri"]),);

//Array.from() method
console.log("\n\nArray.from() returns array of any object with their length property.");
console.log(Array.from("Maitri"));

//INTERVIW TYPED QUESTION-------------------------------------- 
console.log("\nHere we define proper object in from method so arry doesn't cath that because they dont convert directly into array they retun empty array.\n",Array.from({name:"Rinkal"}));

//Array.of()
let score1="keval";
let score2=200;
let score3=true;
console.log("\n\nArray.of() method returns a new array from any types of element.\n",Array.of(score1,score2,score3))
console.log(Array.of(500,"komal",false))