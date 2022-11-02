import ContenedorFirebase from "../../contenedores/contenedorFirebase";

class DaoProductosFirebase extends ContenedorFirebase{
    constructor(){
        super("productos",{
            productos:{type:Array, required:true}
        })
    }
    eliminarProductos(){
        
    }
}

export default DaoProductosFirebase