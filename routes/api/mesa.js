const router = require('express').Router();
const {Mesa} = require('../../db')


router.get('/', async (req, res)=>{
    const mesas = await Mesa.findAll();
    res.json(mesas);
});

router.post('/',async(req, res)=>{
    const mesas = await Mesa.create(req.body);
    res.json(mesas);
});

router.put('/:IdMesa', async (req, res) => {
    await Mesa.update(req.body, {
        where: {IdMesa: req.params.IdMesa}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idMesa', async (req, res) => {
     await Mesa.destroy({
        where: {idMesa: req.params.idMesa}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;

