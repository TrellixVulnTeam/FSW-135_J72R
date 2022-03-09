const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { mainModule } = require("process")

// Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
// mongoose.connect('mongodb://localhost:27017/moviesdb',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// },
// () => console.log("Connected to the DB")
// )

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/moviesdb')
    console.log("Connected to the DB")
    }


// Routes //
// app.use("/movies", require("./routes/movieRouter.js"))
// app.use("/tvshows", require("./routes/tvshowRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})