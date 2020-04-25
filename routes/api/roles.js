const router = require('express').Router();
const {Rol} = require('../../db')


router.get('/', async (req, res)=>{
    const roles = await Rol.findAll();
    res.json(roles);
});

router.post('/',async(req, res)=>{
    const roles = await Rol.create(req.body);
    res.json(roles);
});

router.put('/:idRol', async (req, res) => {
    await Rol.update(req.body, {
        where: {idRol: req.params.idRol}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idRol', async (req, res) => {
     await Rol.destroy({
        where: {idRol: req.params.idRol}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;

