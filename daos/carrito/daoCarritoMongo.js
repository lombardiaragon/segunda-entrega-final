import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class DaoCarritoMongo extends ContenedorMongo{
    constructor(coleccion,esquema,hola){
        super("carritos",{
            productos:{type:[], required:true, default:[]}
        })
        this.hola=hola
    }
    // trabadiiiiiisimo
    async saveNewProd(id,newProd){
        const carrito=await super.findById(id)
        carrito.productos.push(newProd)
        await this.db.updateOne({id},carrito)
        
        return console.log('carritossssss',carrito.productos);
    }
}

export default DaoCarritoMongo