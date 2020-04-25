const router = require('express').Router();
const apiRolesRouter = require('./api/roles')
const apiCategoriaProducto = require('./api/categoriaProducto')
const apiCategoriaPlato = require('./api/CategoriaPlato')
const apiProducto = require('./api/producto')
const apiPlato = require('./api/plato')
const apiMesa = require('./api/mesa')
const apiEmpleado = require('./api/empleado')
const apiComanda = require('./api/comanda')
const apiDetalleComanda = require('./api/detalleComanda')



router.use('/roles',apiRolesRouter);
router.use('/categoriaProducto',apiCategoriaProducto);
router.use('/categoriaPlato',apiCategoriaPlato);
router.use('/producto',apiProducto);
router.use('/plato',apiPlato);
router.use('/mesa',apiMesa);
router.use('/empleado',apiEmpleado);
router.use('/comanda',apiComanda);
router.use('/detalleComanda',apiDetalleComanda);


module.exports = router;