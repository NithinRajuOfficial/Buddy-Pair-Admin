import dotenv from "dotenv";
import connectDB from "./database/index.js";
import app from "./app.js";

dotenv.config({ path: "../.env" });

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Express error:", error);
      process.exit(1);
    });
    app.listen(process.env.PORT || 4000, () => {
      console.info(`Server running on port number:${process.env.PORT || 4000}`);
    });
  })
  .catch((error) => {
    console.error("Mongodb Connection error:", error);
  });

