import express from "express";
import mongoose from "mongoose";
import router from "./Router/router.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const port = 3000;

// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// );
// ini nda perlu ditulis

//connect DB
mongoose.set("strictQuery", false);
const dbproduk = mongoose.connect(process.env.DB_URL);

//check db connection
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));

//midleware
app.use(cors());
app.use(express.json());
// app.use(express.json); ini salah kurang tanda kurung()
app.use(router);


app.listen(port, () => {
	console.log(`Server running di localhost: ${port}`);
});
