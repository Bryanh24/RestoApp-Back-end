const Sequelize = require('sequelize');

const rolModel = require('./models/roles');
const CategoriaProductoModel = require('./models/categoriaProducto');
const CategoriaPlatoModel = require('./models/categoriaPlato');
const ProductoModel = require('./models/producto');
const PlatoModel = require('./models/plato');
const MesaModel = require('./models/mesa');
const EmpleadoModel = require('./models/empleado');
const ComandaModel = require('./models/comanda');
const DetalleComandaModel = require('./models/detalleComanda');



const sequelize = new Sequelize('bp3yr079cjrme03razfr','uhdajdzjuyfqj0zc','la89eI8DiEppEODyAgiK',{
    host:'bp3yr079cjrme03razfr-mysql.services.clever-cloud.com',
    dialect:'mysql'
});

const Rol = rolModel(sequelize,Sequelize);
const CategoriaProducto = CategoriaProductoModel(sequelize,Sequelize);
const CategoriaPlato = CategoriaPlatoModel(sequelize,Sequelize);
const Producto = ProductoModel(sequelize,Sequelize);
const Plato = PlatoModel(sequelize,Sequelize);
const Mesa = MesaModel(sequelize,Sequelize);
const Empleado = EmpleadoModel(sequelize,Sequelize);
const Comanda = ComandaModel(sequelize,Sequelize);
const DetalleComanda = DetalleComandaModel(sequelize,Sequelize);


sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas Sincronizadas')
})

module.exports	= {
    Rol,
    CategoriaProducto,
    CategoriaPlato,
    Producto,
    Plato,
    Mesa,
    Empleado,
    Comanda,
    DetalleComanda
}
