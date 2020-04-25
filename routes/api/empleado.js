const router = require('express').Router();
const {Empleado} = require('../../db')


router.get('/', async (req, res)=>{
    const empleados = await Empleado.findAll();
    res.json(empleados);
});

router.post('/',async(req, res)=>{
    const empleados = await Empleado.create(req.body);
    res.json(empleados);
});

router.put('/:idEmpleado', async (req, res) => {
    await Empleado.update(req.body, {
        where: {idEmpleado: req.params.idEmpleado}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idEmpleado', async (req, res) => {
     await Empleado.destroy({
        where: {idEmpleado: req.params.idEmpleado}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;

