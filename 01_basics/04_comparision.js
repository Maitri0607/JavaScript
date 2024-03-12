//typescript doesn't allow to use diffrent datatypes at a same time.
console.log("2">1); //js automatically convert "2" which is define as a string, to number and then compar with 1 
console.log("02">1);

//in js comparision check(> < >= <=) and equality check(==) is difrrently worked
console.log("comparision check");
console.log(null>0);
console.log(null<0);
console.log(undefined>0);
console.log(undefined<0);

console.log("equality check");
console.log(NaN===NaN);//false because NaN is the only value not equal to itself
console.log(null==0);
console.log(undefined==0);

// strict cehck(===) : it check strickly the value as well as their datatypes
console.log("strick check");
console.log("2" === 2);