const arr=[1,5,9,3,7,3]
console.log("Display value of variable based on index number of an array : ",arr[1]);


//++++++++++++++++++++ METHODS ++++++++++++++++++++
const arr3=["Maitri" ,"Rinkal","Payal","Hiral","Kasak","Dhanvi","Shwenni","Prachi"]

console.log("\n Push Method append end of the element :",arr3.push("simran"));
console.log(arr3);

console.log("\n Pop Method removes last element of an array : ",arr3.pop());
console.log(arr3);

console.log("\n Unshift Method insert new element at a start of an array : ",arr3.unshift("Hetvi"));
console.log(arr3);

console.log("\n Shift Method removes first element of an array : ",arr3.shift());
console.log(arr3);

console.log("\nInclude Method check that given argument is present in array or not : ",arr3.includes("keta"));
console.log("\nInclude Method check that given argument is present in array or not : ",arr3.includes("Maitri"));
console.log(arr3);

console.log("\nIndexof Method display the given argument's index number : ",arr3.indexOf("Hiral"));
console.log(arr3);

const arr4=arr3.join()
console.log("\n Join Method convers all the elements into a string : \n",arr4,"\n");

//++++++++++++++++++++ SLICE AND SPLICE ++++++++++++++++++++

// SLICE : create copy of an arry.
//       : doesn't alert to original arrays but creates shallow copy.
const arr5=["apple","banana","kiwi","orange","mango"]
console.log(arr5);
console.log("\nSlice Method :starting position of index value will be counted but ending position's index value will no be counted.\nslice(1,4) :",arr5.slice(1,4));








//SPLICE : method change the content of original array
const arr6=["Navsari","Ahmedabad","Surat","Vadodara"]
console.log("\n\n\n");
console.log(arr6);
console.log("\nSplice Method :starts with starting position's index value and after that it slice(khasvu) till ending position of index value:\n",arr6.splice(1,2));
console.log(arr6);

//splice another method
// const arr7=arr6.splice(1,2)
// console.log(arr7);
// console.log(arr6);