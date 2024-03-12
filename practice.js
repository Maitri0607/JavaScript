const abc= {
    id:"123",
    name:{
        fullname:{
            f:"mahi",
            m:"deep",
            s:"patel"
        }
    },
    age:"23"
}
console.log();
console.log(abc.name.fullname.s);

const u1={a:"1",b:"2"}
const u2={c:"4",d:"5"}
u3=Object.assign({},u1,u2)
console.log(u3);
u4={...u1,...u2}
console.log(u4);

u5=[{
    
}]
