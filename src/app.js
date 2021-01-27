require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
  try {
    const person = new Person({ name: "Erin", email: "ezzaemails@gmail.com", age: 24, likesPizza: true });
    
    await person.save();

    const task = new Task({ task: "sing a song", completed: true });
    await task.save();

    
    const everything = await Person.find({});
    console.log(everything);

    await Person.deleteMany();

  } catch (error) {
    console.log(error);
  }
};

app();

