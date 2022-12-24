let Person1={
    first_name:"srinu",
    las_name:"galamgari",
    age:22,

    Printdetails: function(city){
        console.log(`iam${this.first_name} and iam${this.age} years old and iam from${this.city}`);
 }
}
let Person2={
    first_name:'venky',
    last_name:'akkayyagari',
    age:23,
}
Person1.Printdetails.call(Person2,"nellore","andrapradesh")