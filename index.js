
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
let PORT = 4000;

dotenv.config();


mongoose.connect(process.env.DB_URL,
    { useUnifiedTopology: true, useNewUrlParser: true }, () => {
        console.log("MongoDB connected")

    })

if (user === null) {

    var user = ({
        name: "Mandeep",
        userId: "man123",
        userType: "admin",
        userStatus: "active",
        email: "man234@gmail.com",
        password: "Welcome123"

    })
    console.log(user);
}

// import the route
const productRoutes = require("./routes/product.route")

app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    console.log("Application has started on port", PORT);
})





