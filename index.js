const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<h1>It works!</h1>')
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log('start server')
})