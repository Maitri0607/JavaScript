// const user=new Object();  //singleton object
// const user={}   //non-singeton object

//OBJECT IN OBJECT

const user = {
    id: "12345",
    name: {
        username: {
            first: "Maitri",
            middle: "Dilipkumar",
            last: "Patel"
        }
    },
    email: "mili@123.com",
    age: "23"
}
console.log(user);
console.log("\nspecific object declarationin 'OBJECT IN OBJECT' is : ", user.name.username.first);

//to merge objects

const val = { a: "1", b: "2" }
const val1 = { c: "3", d: "4" }


const val3 = { val, val1 }
console.log("\nthis is the normal way to display the merged object :", val3);


const obj = Object.assign({}, val, val1)
console.log("\nusing object.assign to display the single row to merged object :", obj);


const sprd = { ...val, ...val1 }
console.log("\nto assign multiple objects in more easy way you have to use spred  operator as shown below:\n", sprd);

//ARRAY OF OBJECTS 

console.log("\n\n\nARRAY OF OBJECTS");
const user1 = [{
    id: "123",
    name: "Mahima",
    email: "abc@gmail.com",
    val: true
}]
console.log("\n", user1);
console.log("\nDisplay keys of objects : ", Object.keys(user1));
console.log("\nDisplay value of objects : ", Object.values(user1));
console.log("\nDisplay entries of objects : ", Object.entries(user1, user2));
console.log("\nto check that the perticular specified property is available or not", user1.hasOwnProperty('val'));


const detail = {
    name: "Rinkal",
    age: "26",
    city: "Ahmedabad",
    homewtown: "Chikhli"
}

console.log("\nnormal call to key of object : ", detail.homewtown);

const { homewtown: town } = detail //here we change the key name from hometown to town
console.log("\nafter changing the name of the key in object : ", town);
