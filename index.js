const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000

require('dotenv').config()

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
