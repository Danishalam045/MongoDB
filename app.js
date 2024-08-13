const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitDB");
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please check your data entry , no name specifiied!"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    review: String,
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);
  const fruit = new Fruit({
    name: "Papaya",
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
  //   await Fruit.insertMany([kiwi, orange, Banana]);
  //   const data = await Fruit.find({});
  //   mongoose.connection.close();
  //   data.forEach((element) => {
  //     console.log(element.name);
  //   });
  //  console.log(data);

  //////////////////////////////      People Schema        ///////////////////////////////

  const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema,
  });

  const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit.",
  });

  const Person = mongoose.model("Person", peopleSchema);
  const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple,
  });
//   await person.save();
  const personData = await Person.find({});
  console.log(personData);
}
