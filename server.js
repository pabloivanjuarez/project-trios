const express = require("express");
const mongoose = require("mongoose");
const routes = require("./backend/routes");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Services',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!")
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

