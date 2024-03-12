const user = {
    name: "Maitri",
    Price: 999,
    welcome: function () {
        console.log(`\n ${this.name},welcome to our website`);
        console.log(this);
    }
}
user.welcome();
user.name = "Rinkal"
user.welcome();
console.log(this);

function chai() {
    let name1 = "rinkal"
    console.log(this);
    console.log("call this keyword using function : ", this.name1);

}
chai()

const chai1 = function () {
    let name2 = "Kasak"
    console.log("\ncall this keyword using variable : ", this.name2);
}
chai1()

const chai2 = () => {
    let name2 = "Kasak"
    console.log("\ncall this keyword using variable : ", this.name2);
}
chai2()


//+++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++
//syntax : () => {}

const one = (num1, num2) => {
    console.log("\n\nBasic arrow function :");
    return num1 + num2
}
console.log(one(5, 7));

console.log("\nDifferent way to display arrow function");
const two = (num3, num4) => num3 + num4
console.log("\n(num3,num4)=> num3+num4 : ", two(5, 7));

const three = (num3, num4) => (num3 + num4)
console.log("\n(num3,num4)=> (num3+num4) : ", three(5, 7));


const four = (num5, num6) => ({ name: "maitri" })
console.log("\nobject ne call karavyo che : (num5,num6)=>({name:'maitri'}) : ", four(5, 7));


