const router = require('express').Router();
const {Comanda} = require('../../db')


router.get('/', async (req, res)=>{
    const comandas = await Comanda.findAll();
    res.json(comandas);
});

router.post('/',async(req, res)=>{
    const comandas = await Comanda.create(req.body);
    res.json(comandas);
});

router.put('/:idComanda', async (req, res) => {
    await Comanda.update(req.body, {
        where: {idComanda: req.params.idComanda}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idComanda', async (req, res) => {
     await Comanda.destroy({
        where: {idComanda: req.params.idComanda}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;

