import ContenedorMongo from "../../contenedores/contenedorMongo";

class DaoCarritoMongo extends ContenedorMongo{
    constructor(coleccion,esquema){
        super("carritos",{
            productos:{type:Array, required:true}
        })
    }
    eliminarStock(){

    }
}

export default DaoCarritoMongo