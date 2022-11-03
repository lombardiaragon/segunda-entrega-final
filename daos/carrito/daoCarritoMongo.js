import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class DaoCarritoMongo extends ContenedorMongo{
    constructor(){
        super("carritos",{
            timesTamp:Date,
            productos:{type:[], required:true, default:[]}
        })
    }
    async saveNewProd(id,newProd){
        const carrito=await super.findById(id)
        carrito.productos.push(newProd)
        await this.db.updateOne({id},{$set:{productos: carrito.productos}})
        
        return carrito.productos;
    }
}

export default DaoCarritoMongo