const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://viratt737_db_user:7897445559shanutrivedi@cluster0.5him9zn.mongodb.net/");
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Failed", err);
    process.exit(1);  // stops server if DB fails
  }
};

module.exports = connectToDB;
