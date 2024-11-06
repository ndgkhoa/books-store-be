const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')

const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(express.json())
app.use(
    cors({
        origin: ['http://localhost:5173', 'https://books-store-nu.vercel.app'],
        credentials: true,
    }),
)

app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => {
    res.send('Server is running!')
})

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Mongodb connect successfully')
}

main().catch((err) => console.log(err))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
