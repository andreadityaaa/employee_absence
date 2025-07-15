require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')

const indexRoutes = require ('./routes/index')

// const errorHandler = require ('./middlewares/errorHandler')

app.use(express.urlencoded ({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/', indexRoutes)
// app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`running app on port ${PORT}`)
})