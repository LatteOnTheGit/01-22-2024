const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName }
    }
}
this.firstName = 'Grace';

let x = o.person.fullName();
console.log(x);
  
