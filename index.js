const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')

const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(express.json())
app.use(
    cors({
        origin: ['http://localhost:5173'],
        credentials: true,
    }),
)

app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}

main()
    .then(() => console.log('Mongodb connect successfully'))
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
