class employee {
  min_balmce = 500;

  constructor(id, name, place, amount) {
    this.acc_id = id;
    this.acc_name = name;
    this.acc_place = place;
    this.acc_amount = amount;
  }
}
class karthik extends employee {
  constructor(id, name, place, amount, msg) {
    super(id, name, place, amount, msg);
    this.msg = msg;
  }
}
class mahendra extends employee {
  constructor(id, name, place, amount) {
    super(id, name, place, amount);
  }
}
let s1 = new employee(101, "srinu", "nellore", 9000, "7y");
let s2 = new employee(102, "mahendra", "atmakur", 5000, "2k");
let s3 = new employee(102, "karthik", "guntur", 50000, "43n");

console.log(s1);
console.log(s2);
console.log(s3);
