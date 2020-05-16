const router = require('express').Router();
const apiRolesRouter = require('./api/roles')
const apiCategoriaProducto = require('./api/categoriaProducto')
const apiCategoriaPlato = require('./api/categoriaPlato')
const apiProducto = require('./api/producto')
const apiPlato = require('./api/plato')
const apiMesa = require('./api/mesa')
const apiEmpleado = require('./api/empleado')
const apiComanda = require('./api/comanda')
const apiDetalleComanda = require('./api/detalleComanda')
const middlewares = require('./middlware/middlware')



router.use('/roles',middlewares.checkToken,apiRolesRouter);
router.use('/categoriaProducto',middlewares.checkToken,apiCategoriaProducto);
router.use('/categoriaPlato',middlewares.checkToken,apiCategoriaPlato);
router.use('/producto',middlewares.checkToken,apiProducto);
router.use('/plato',middlewares.checkToken,apiPlato);
router.use('/mesa',middlewares.checkToken,apiMesa);
router.use('/empleado',apiEmpleado);
router.use('/comanda',middlewares.checkToken,apiComanda);
router.use('/detalleComanda',middlewares.checkToken,apiDetalleComanda);


module.exports = router;