import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import storyRoutes from "./routes/stories.js";

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: "true" })); 
app.use(bodyParser.urlencoded({ limit: "32mb", extended: "true" }));
app.use(cors());
app.use("/stories", storyRoutes);

const MONGO_URI = "mongodb+srv://DuarteB:MongoDB0304password@cluster0.sndbs.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
    } catch (error) {
        console.error("Connection to MongoDB failed", error.message);
    }
};

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"));
mongoose.connection.on("error", (error) => console.log(error));
