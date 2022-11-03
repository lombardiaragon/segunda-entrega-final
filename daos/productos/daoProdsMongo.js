import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class DaoProductosMongo extends ContenedorMongo{
    constructor(){
        super("productos",{
            name:{type:String, required:true},
            description:{type:String, required:true},
            price:{type:Number, required:true},
            stock:{type:Number, required:true},
            timesTamp:Date
        })
    }
    eliminarProductos(){
        
    }
}

export default DaoProductosMongo