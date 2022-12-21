const account = require(`./account`);
class current_account extends account {
  constructor(idt, name, msgr, msge, msgef, m, kk) {
    super(idt, name, msgr, msge, msgef, m, kk);
    this.msgef = msgef;
    this.m = m;
    this.idiot = kk;
  }
}
let s2 = new current_account(
  101,
  "kalish",
  "hello",
  "lemon",
  "kl",
  990,
  "karthik"
);
console.log(s2.account_name);
// let s2 = current_account();
