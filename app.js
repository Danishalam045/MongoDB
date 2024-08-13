// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/fruitDB');

//     const fruitSchema = new mongoose.Schema({
//         name: {
//             type: String,
//             required: [true, "Please check your data entry , no name specifiied!"]
//         },
//         rating: {
//             type: Number,
//             min: 1,
//             max: 10
//         },
//         review: String
//     });

//     const personSchema = new mongoose.Schema({
//         name: String,
//         age: Number
//     });

//     const Fruit = mongoose.model('Fruit', fruitSchema);
//     const Person = mongoose.model("Person", personSchema);

//     const fruit = new Fruit(
//         {
//             name: 'Apple',
//             rating: 10,
//             review: "Pretty solid as a fruit."
//         }
//     );

//     // fruit.save();

//     const person = new Person({
//         name: "John",
//         age: 37
//     });

//     // Fruit.updateOne({_id:"654d4eb1e3a5f712815e943c"},{name:"Peach"})

//     console.log(fruit.name);
//     console.log(person.name);

//     await fruit.save();
//     // await person.save();
//     // await Fruit.insertMany([Kiwi,Orange,Banana]);

//     const data = await Fruit.find({});
//     console.log(data);

// }

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitDB");
  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);
  const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty Solid as Fruit",
  });

  const kiwi = new Fruit({
    name: "kiwi",
    rating: 10,
    review: "The best fruit",
  });
  const orange = new Fruit({
    name: "orange",
    rating: 4,
    review: "The best fruit for me",
  });
  const Banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird Texture!",
  });
  //   await fruit.save();
  await Fruit.insertMany([kiwi, orange, Banana]);

  const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const Person = mongoose.model("Person", peopleSchema);
  const person = new Person({
    name: "John",
    age: 42,
  });
  //   await person.save();
}
