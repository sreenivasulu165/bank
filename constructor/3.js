class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
}

class Company extends Person {
    constructor(name, age, place, salary) {
        super(name, age, place)
        this.salary = salary;

    }
    welcome() {
        console.log(this.name);
    }
}


let j1 = new Person("srinu", 22, "nellore");
let j2 = new Company("srinu", 22, "nellore", 32000);
j2.welcome();
//console.log(j1);
//console.log(j2);
