import * as dotenv from "dotenv";
dotenv.config();
console.log('cuicui',process.env.TIPO);
const daos = {
  mongo: async () => {
    const { default: DaoCarritoMongo } = await import(
      "./carrito/daoCarritoMongo.js"
    );
    const { default: DaoProductosMongo } = await import(
      "./productos/daoProdsMongo.js"
    );
    return {
      carritoDao: new DaoCarritoMongo(),
      productosDao: new DaoProductosMongo(),
    };
  },
  firebase: async () => {
    const { default: DaoCarritoFirebase } = await import(
      "./carrito/daoCarritoFirebase.js"
    );
    const { default: DaoProductosFirebase } = await import(
      "./productos/daoProdsFirebase.js"
    );
    return {
      carritoDao: new DaoCarritoFirebase(),
      productosDao: new DaoProductosFirebase(),
    };
  },
};

export default daos[process.env.TIPO];