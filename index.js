// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Saas on ${port}`)
// })
const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();

app.use(express.json())

mongoose.set('strictQuery', false);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(console.log("Connected to Mongo"))
.catch((err) => console.log(err))

// app.use('/api/auth', authRoute)
// app.use('/api/users', userRoute)
// app.use('/api/posts', postRoute)
// app.use('/api/categories', catRoute)



const port = 6000;
app.listen(port, console.log(`server is listening on port ${port}`));