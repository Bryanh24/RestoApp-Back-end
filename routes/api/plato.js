const router = require('express').Router();
const {Plato} = require('../../db')


router.get('/', async (req, res)=>{
    const categoriaPlatos = await Plato.findAll();
    res.json(categoriaPlatos);
});

router.post('/',async(req, res)=>{
    const categoriaPlatos = await Plato.create(req.body);
    res.json(categoriaPlatos);
});

router.put('/:idPlato', async (req, res) => {
    await Plato.update(req.body, {
        where: {idPlato: req.params.idPlato}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idPlato', async (req, res) => {
     await Plato.destroy({
        where: {idPlato: req.params.idPlato}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;
