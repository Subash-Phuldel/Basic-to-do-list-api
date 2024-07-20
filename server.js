const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");

const port = process.env.PORT;

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`Server is listening at port ${port}`);
});
