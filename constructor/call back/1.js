function Person(firstname, lastname, age) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.age = age;
    this.printdetails = function() {
        console.log(`Hii iam ${this.first_name} and iam ${this.age} years old`);
    }
}
let person1 = new Person("srinnu", "galamgari", 22);
let person2 = new Person("venky", "akkayyagari", 23);

person2.printdetail.call(person1);