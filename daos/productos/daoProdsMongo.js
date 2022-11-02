import ContenedorMongo from "../../contenedores/contenedorMongo";

class DaoProductosMongo extends ContenedorMongo{
    constructor(){
        super("productos",{
            productos:{type:Array, required:true}
        })
    }
    eliminarProductos(){
        
    }
}

export default DaoProductosMongo