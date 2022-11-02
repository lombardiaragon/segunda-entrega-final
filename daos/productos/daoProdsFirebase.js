import ContenedorFirebase from "../../contenedores/contenedorFirebase";

class DaoProductosFirebase extends ContenedorFirebase{
    constructor(){
        super("productos",{
            name:{type:String, required:true},
            description:{type:String, required:true},
            price:{type:Number, required:true},
            stock:{type:Number, required:true},
        })
    }
    eliminarProductos(){
        
    }
}

export default DaoProductosFirebase