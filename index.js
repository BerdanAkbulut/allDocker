const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
      name:"berdan",
      email:"berdanakbulutt@hotmail.com"
  },
  {
    name:"boran",
    email:"boranakbulutt@hotmail.com"
  },
  {
    name:"hako",
    email:"hakiakbulutt@hotmail.com"
  }


])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})