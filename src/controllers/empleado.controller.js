import {pool} from '../db.js'

//export const getEmpleado = (req, res) => res.send('obtener empleado')
export const getEmpleado = async(req, res) => {

    //throw new Error('Error de ingreso')
    try {
        //throw new Error('DB Error')
        const [rows] = await pool.query('select*from empleado')
        res.json(rows)
    } catch (error){

        return res.status(500).json({
            mensaje: 'Error al ingresar la informacion'
        })

    }

}

export const getEmpleado_1 = async (req, res) => {

    try {
        //throw new Error('Error inesperado')
        const [rows] = await pool.query('select*from empleado where id = ?', [req.params.id])
    
    if (rows.length <= 0) return res.status(404).json({

        message: 'Empleado no encontrado'

    })

    //console.log(rows)
    //res.send('Obteniendo empleado')
    res.json(rows[0])
    } catch (error) {

        return res.status(500).json({
            mensaje: 'Error al ingresar la informacion'
        })
        
    }

    
    

}




//export const createEmpleado = (req, res) => res.send('crear empleados')
export const createEmpleado = async (req, res) => {

    const {nombre, apellido, cedula} = req.body
    try {
        
        const [rows] = await pool.query('insert into empleado(nombre, apellido, cedula) values (?, ?, ?)', [nombre, apellido, cedula])
        //console.log(req.body)
    
    res.send({
        
        id: rows.insertId,
        nombre,
        apellido,
        cedula

    })
    } catch (error) {

        return res.status(500).json({

            mensaje: 'Error al ingresar la informacion'

        })
        
    }
}

//export const deleteEmpleado = (req, res) => res.send('eliminar empleados')
export const deleteEmpleado = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id])
    //console.log(result)
if (result.affectedRows <= 0) return res.status(404).json({message: 'Empleado no encontrado'})

    res.sendStatus(204)
    } catch (error) {

        return res.status(500).json({
            mensaje: 'Error al ingresar la informacion'
        }) 
        
    }

}

//export const updateEmpleado = (req, res) => res.send('actualizar empleados')
export const updateEmpleado = async (req, res) => {

    const {id} = req.params
    const {nombre, apellido, cedula} = req.body
    
    try {
        //console.log(id, nombre, apellido, cedula)
    const [result] = await pool.query('UPDATE empleado SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), cedula = IFNULL(?, cedula) WHERE id = ?', [nombre, apellido, cedula, id])

    //console.log(result)
    if (result.affectedRows == 0) return res.status(404).json({

        mensaje: 'Empleado no encontrado'

    })

    const [rows] = await pool.query('SELECT*FROM empleado WHERE id = ?',[id])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            mensaje:'Error al ingresar la informacion'
        })
    }

}
