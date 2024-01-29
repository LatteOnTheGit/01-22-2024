const person = {
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}

const person1 = { firstname: "John", lastname: "Doe" };
const person2 = { firstname: "Mary", lastname: "Doe" }; 

console.log(person.fullname.call(person2)); // John Doe