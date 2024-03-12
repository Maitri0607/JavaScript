//To acess object : console.log(jsuser["email"])
const mysym = Symbol("key1") //to acess symbol you must define symbol variable in[] bracet.
const jsuser = {
    name: "Maitri",
    "surname": "patel", //we cant acess this by .(dot)
    age: 23,
    [mysym]: "key1", //Symbol: if we declare var in symbol without "[]" then it will represent as string....
    Lastlogin: ["Monday", "tuesday"],
    location: "Jaipur",
    email: "maitri.suder@gmail.com",
    book: false
}
console.log("\naccess using object : ", jsuser["email"])
console.log("\nnormal acess : ", (jsuser.email));
console.log("\nobject : ", jsuser["surname"]);
console.log(`\nby acessing symbol : `, jsuser[mysym]); //symbol 

//using object.freeze 
jsuser.name = "Kairav";
// Object.freeze(jsuser)
jsuser.name = "Lavish" //aap is value ko propogate nai kar sakte kyunki aap ne alreaddy upar ki line me jsuser ko freeze kar diya hai...
console.log(jsuser);

//if in upper code jo tame variable ne freeze karyu hoy to tene unfreeze karine work karvanu........



//++++++++++++++++++ FUNCTION ++++++++++++++++++
console.log("\n\nFUNCTION");
jsuser.greeting = function () {
    console.log("\nHello my self maitri patel");
}

jsuser.greetingtwo = function () {
    console.log(`\nand my age is ${this.age}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
