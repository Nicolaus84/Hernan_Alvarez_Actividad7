//console.log("Hola Hernan");
import express from 'express';

import empleadoRoutes from './routes/empleado.routes.js'
import indexRoutes from './routes/index.routes.js'

//import {PORT} from './config.js'

const app = express()

app.use(express.json())

//app.get('/ping', (req, res) => res.send('pong'));

app.use(indexRoutes)
app.use('/api', empleadoRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        mensaje: 'Endpoint no encontrado'
    })
})

export default app;