const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ngela:test@cluster0.79qme9u.mongodb.net/BeautySupplyStoreDB");
// Replace the uri string with your connection string.
const url = "mongodb://localhost:27017";
  // "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

const productSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true, "Please check you data entry. No name specified"]
  },
  price: Number
});

//create collection using Schema
const Product = mongoose.model("Product", productSchema);

// const product = new Product({
//   id: 4,
//   name: "Curl Creme",
//   price: 10.99
// });
//
// product.save();

Product.find(function(err, products){
  if (err) {
    console.log(err);
  }
  else {
    //close database connection
    mongoose.connection.close();
    products.forEach(function(product){
      console.log(product.name);
    })
  }
})

// Product.updateOne({id:"1"}, {name:"Shea Moisure Shampoo"}, function(err){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("Succesfully updated the document.");
//   }
// });

Product.deleteOne({_id:"4"}, function(err){
  if (err){
    console.log(err);
  }
  else {
    console.log("Deleted entry");
  }
})
