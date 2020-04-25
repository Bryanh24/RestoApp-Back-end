const router = require('express').Router();
const {Producto} = require('../../db')


router.get('/', async (req, res)=>{
    const categoriaProductos = await Producto.findAll();
    res.json(categoriaProductos);
});

router.post('/',async(req, res)=>{
    const categoriaProductos = await Producto.create(req.body);
    res.json(categoriaProductos);
});

router.put('/:idProducto', async (req, res) => {
    await Producto.update(req.body, {
        where: {idProducto: req.params.idProducto}
    });
    res.json({success: 'se ha modificado'})
});

router.delete('/:idProducto', async (req, res) => {
     await Producto.destroy({
        where: {idProducto: req.params.idProducto}
    });
    res.json({succes: 'se ha eliminado.'})
});
module.exports = router;
