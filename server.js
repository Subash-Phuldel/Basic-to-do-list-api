const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

(async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE, {});
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
})();

const port = process.env.PORT;

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`Server is listening at port ${port}`);
});
