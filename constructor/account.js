class account {
  constructor(id, name, msg, msge) {
    this.account_name = name;
    this.account_id = id;
    this.msg1 = msg;
    this.msg = msge;
  }

  get_accont_name() {
    return this.account_name;
  }
}
module.exports = account;
