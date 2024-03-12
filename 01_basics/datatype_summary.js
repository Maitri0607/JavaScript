// 1) Primitive Datatype : 7 catagories
const number = 123; //Number
const name = "Maitri"; //String
const email = false; //Boolean
const add = null; //Null
let address; //Undefined

const id = Symbol('123')  //symbol 
const id2 = Symbol('123') //symbol: may be value is same but their  memory location will be different.
console.log(id == id2);

const num = 1589357921452454154545445n;

//2) Non-Primitive Dataype (Reference) :

const arr = ["maitri", "23", "Navsari"];  //Array
let obj = { name: "MAAITRI", age: "23", city: "NAVSARI" }; //Object
const fun = function () {
    console.log("this is non-premitive function");   //Function
}


// Return a String :  https://262.ecma-international.org/12.0/#sec-typeof-operator




// ++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++++++
// 1)Stack(Primitive datatype) : it copy the variable and display it as output.
let one = "mahima patel"
let two = one
console.log(two);
two = "kinjal arora"
console.log(two);

//2)Heap(Non-primitive datatype) : here if we change or update value of the function to e original value change kare che che
let first={
    email :"mili@gmail.com",
    name :"Milipatel"
}
let second=first
console.log(second);

//here if we update the value of email in second named function it automatically referes to first named function and replace with the updated value.
second.email="krisha@gmail.com"
console.log("second function named updated value :",second.email);
console.log("after updating second named function's data ",first.email);