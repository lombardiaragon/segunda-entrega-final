import ContenedorMongo from "../../contenedores/contenedorMongo";

class DaoCarritoMongo extends ContenedorMongo{
    constructor(coleccion,esquema,pito){
        super("carritos",{
            productos:{type:Array, required:true}
        })
        this.pito=pito
    }
    eliminarStock(){

    }
}

export default DaoCarritoMongo