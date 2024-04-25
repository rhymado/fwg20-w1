// method => fungsi merupakan value didalam object
this.firstname = "Budi";
const person = {
  firstname: "Andy",
  lastname: "Southgate",
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  editName: function (key, newValue) {
    this[key] = newValue;
  },
};

// console.log(person.getFullName());
// console.log(this.firstname);
// person.editName("firstname", "Sugi");
// console.log(this.firstname);
// console.log(person.getFullName());