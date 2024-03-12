// +++++++++++++++++++++++++++++ STRING +++++++++++++++++++++++++++++

const name1="Rinkal Patel"
console.log(`\n\n\nhello my name is ${name1} `);

const name2= new String('Maitri-D-patel')
console.log(name2.length);
console.log(name2[3]);              //index value 0 thi character display thay
console.log(`name2.__proto__`);     // [object String
console.log(name2.toUpperCase);
console.log(name2.charAt(3));  // character value displaye thay
console.log(name2.indexOf('p'));  //display position of defined character 

const astring=name2.substring(0,4)
console.log("Substring : ",astring);     //display word between index  0 to 4 (not include 4) ao O/P will be "Mai"

const newstring=name2.slice(-10,6)
console.log("After slicing : ",newstring);   // 

const newstrin1="   Dilipkumar   "
console.log("before trim : ",newstrin1);
console.log("After trim : ",newstrin1.trim()); //sentence ke bich me se space  remove kr skte hai

const add1="sai-nagar behind kasturi tredarce,Bilimora"
console.log("before replacement : ",add1);
console.log("after replacement : ",add1.replace('Bilimora','Chikhli')); //koi perticular word replace kar sakte hai.
console.log(add1.includes('kasturi')); //to finde a word

console.log(name2.split('-')); //Split a string into substrings using the specified separator and return them as an array.