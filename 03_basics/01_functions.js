function detail(){
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("T");
    console.log("R");
    console.log("I");
}
detail()

function num(num1,num2){
    // num3=num1+num2
    // return num3
    return num1+num2;
}
const num4 = num(5,7)
console.log("Result of the defined function : ",num4);

function user(username="payal"){
    if(username===undefined){
        return `please enter valid name...`
    }
    return `${username} is logged in`;
}
// console.log(user("Maitri"))
console.log(user());

//REST OPERATOR
console.log("\n\nREST OPERATOR IS SAME AS SPRED OPERATOR : ");
function user1(val1,val2,val3,...num1){
    return num1;
}
console.log(user1(200,500,700,900,500,3600));



//CALLING FUNCTION FROM EXISTING OBJECTS
console.log("\n\n\n");
console.log("existing object no use karine function ni value emathi call karavama aave :");
const fun={
    name:"Kalavati",
    location:"vapi"
}
function user2(user3){
    console.log(`hello my name is ${user3.name} and i am from ${user3.location}`);
    return user2
}
user2(fun)

//AFTER CALLING FUNCTION AND THEN DEFINE OBJECT

console.log("\nAFTER CALLING FUNCTION AND THEN DEFINE OBJECT :");
function obj(obj1){
    console.log(`hello my name is ${obj1.name} and i am from ${obj1.locationn}`);
    return obj;
}
obj({
    name:"Hiral",
    locationn:"Valsad"
})

console.log("");
const myarray=[500,900,600,800]
function secarr(anyarr){
    return anyarr[1]
}
console.log("\n\n\ARRAY FUNCTIONS :",secarr(myarray));