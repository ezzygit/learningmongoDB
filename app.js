require("./db/connection");
const {Person} = require("./models/Person");

const app = async () => {
    const person = new Person({name: 'Erin', email: 'ezzaemails@gmail.com', age: 24, likesPizza: true});
    await person.save();
};

app();
