const router = require('express').Router();
const {DetalleComanda} = require('../../db')


router.get('/', async (req, res)=>{
    const detalleComandas = await DetalleComanda.findAll();
    res.json(detalleComandas);
});

router.post('/',async(req, res)=>{
    const detalleComandas = await DetalleComanda.create(req.body);
    res.json(detalleComandas);
});

router.put('/:idDetalleComanda', async (req, res) => {
    await DetalleComanda.update(req.body, {
        where: {idDetalleComanda: req.params.idDetalleComanda}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idDetalleComanda', async (req, res) => {
     await DetalleComanda.destroy({
        where: {idDetalleComanda: req.params.idDetalleComanda}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;

