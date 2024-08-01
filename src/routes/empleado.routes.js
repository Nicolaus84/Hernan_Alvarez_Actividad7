import { Router } from "express";
import {getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado, getEmpleado_1} from '../controllers/empleado.controller.js'


const router = Router()

router.get('/empleado', getEmpleado)

router.get('/empleado/:id', getEmpleado_1)

router.post('/empleado', createEmpleado)

//router.put('/empleado/:id', updateEmpleado)
router.patch('/empleado/:id', updateEmpleado)

router.delete('/empleado/:id', deleteEmpleado)


export default router
