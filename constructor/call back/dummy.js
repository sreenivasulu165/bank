let Person={
    name:"srinu",
    age:22,
    place:"banglore",
    collage:"kcdc",
    Address:{
        city:"nellore",
        local:"kota",
    }
}
let {name,age,place,Address:{city}}=Person;
console.log(name);
console.log(age);
console.log(city);
