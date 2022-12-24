function person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    }
     person.prototype.getNameandAge=function(){
       console.log(`iam ${this.name}and my age is ${this.age}`);
}
let person1= new person("srinu",22,"nellore")
let person2= new person("surendra",23,"nellore");
console.log(person1.getNameandAge);
console.log(person2);