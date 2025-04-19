const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use("/api/users", require("./routes/users"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

connectDB();


app.get("/", (req, res) => res.send("Server is working correctly"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})