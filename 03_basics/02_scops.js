let a = 100
if (true) {
    let a = 500
    const b = 150
    var c = 90
    console.log("INNER scope : ", a);
}
console.log("OUTER scope: ", a);


//SCOPE USING FUNCTION
console.log("\n\n\nSCOPE USING MULTIPE INNER FUNCTION");
//outer function(one) no scope e inner function(two) na scope ma exit kari sake but inner function no scope outer function na scope ma exit karto nathi
function one() {
    const uname = "Maltiben"

    function two() {
        const uname2 = "Kasak"
        console.log(uname);
    }
    two()
    // console.log(uname2) -->inner  unction ma declare thayu che etle aane outer ma cal karay nahi.
}
one()

//CONDITIONS 

if (true) {
    const username = "Maitri"
    if (username === "Maitri") {
        const surname = " Patel"
        console.log(username + surname);
    }
    console.log("check the if condition...");
}


//+++++++++++++++++++ INTRESTING +++++++++++++++++++++
//Basic function
function addone(num) {
    return num + 1
}
addone(6)

//Expression : declar a function with holding variables
// : declaration pahela function ne call nahi thay...
const addtwo = function (num) {
    return num + 2
}
addtwo(4)