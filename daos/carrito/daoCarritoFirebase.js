import ContenedorFirebase from "../../contenedores/contenedorFirebase";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(coleccion,esquema,pito){
        super("carritos",{
            productos:{type:Array, required:true}
        })
        this.pito=pito
    }
    eliminarStock(){

    }
}

export default DaoCarritoFirebase