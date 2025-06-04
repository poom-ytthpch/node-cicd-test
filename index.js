const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const cors = require('cors')
const { createServer } = require('http')
const httpServer = createServer(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

httpServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})