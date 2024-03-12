console.log("\n\nmonths starts with 0 index...\nlike if we gave input as a 0 index then it will gave output asJANUARY");
let mydate=new Date()
console.log("\nType of mydate is ",typeof mydate);
console.log("\nUsing toString() :",mydate.toString());
console.log("\nUsing toISOString() :",mydate.toISOString());
console.log("\nUsing toJSON() :",mydate.toJSON());
console.log("\nUsing toDateString() :",mydate.toDateString());
console.log("\nUsing toTimeString() :",mydate.toTimeString());
console.log("\nUsing toLocaleDateString() :",mydate.toLocaleDateString());
console.log("\nUsing toLocaleString() :",mydate.toLocaleString());

// let newdate= new Date(2023,0,16)
// let newdate= new Date(2023,0,16,12,16,1)
// let newdate= new Date("2024-06-15")
let newdate= new Date("06-12-2025")
console.log("\ndisplay specific date : ",newdate.toLocaleString());

let timestemp=Date.now()
console.log("\nmiliseconds count fom 1 march 1970 to till",timestemp);
console.log("Here milisecond is count from specified date to till date using getTime() :  ",newdate.getTime());
console.log("\nconvert milisecond into second with floor method : ",Math.floor(Date.now()/1000));


// in toLocaleString() we can use multiple parameters
timestemp.toLocaleString()  

//can customize format using this method
let nDay=Date.now()
nDay.toLocaleString('Default',{
    weekday:"long"
})