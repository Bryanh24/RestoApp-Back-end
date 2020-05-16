const router = require('express').Router();
const {CategoriaPlato} = require('../../db')


router.get('/', async (req, res)=>{
    const categoriaPlatos = await CategoriaPlato.findAll();
    res.json(categoriaPlatos);
});

router.post('/',async(req, res)=>{
    const categoriaPlatos = await CategoriaPlato.create(req.body);
    res.json(categoriaPlatos);
});

router.put('/:IdCategoriaPlato', async (req, res) => {
    await CategoriaPlato.update(req.body, {
        where: {IdCategoriaPlato: req.params.IdCategoriaPlato}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:IdCategoriaPlato', async (req, res) => {
     await CategoriaPlato.destroy({
        where: {IdCategoriaPlato: req.params.IdCategoriaPlato}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;
