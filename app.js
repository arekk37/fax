const app = require('./routes')
const port = 80;
app.listen(port, () => {
    console.log(`Server is working on port ${port} ...`)
})
