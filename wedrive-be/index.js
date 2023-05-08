const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const usuarioRouter = require('./routes/usuario-router')
const estiloRouter = require('./routes/estilo-router')
const marcaRouter = require('./routes/marca-router')
const abastecedorRouter = require('./routes/abastecedor-router')
const puntoCargaRouter = require('./routes/punto-carga-router')
const blogRouter = require('./routes/blog-router')
const ordenRouter = require('./routes/orden-router')
const vehiculoRouter = require('./routes/vehiculo-router')

const app = express()
const apiPort = 3008

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/usuario', usuarioRouter)
app.use('/api/estilo', estiloRouter)
app.use('/api/marca', marcaRouter)
app.use('/api/abastecedor', abastecedorRouter)
app.use('/api/punto-carga', puntoCargaRouter)
app.use('/api/blog', blogRouter)
app.use('/api/orden', ordenRouter)
app.use('/api/vehiculo', vehiculoRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
