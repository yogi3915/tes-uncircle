const express = require('express')
const app = express()
const port = 3002

const routes = require("./router/index")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})