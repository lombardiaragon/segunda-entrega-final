import ContenedorFirebase from "../../contenedores/contenedorFirebase";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(coleccion,esquema,hola){
        super("carritos",{
            productos:{type:Array, required:true}
        })
        this.hola=hola
    }
    eliminarStock(){

    }
}

export default DaoCarritoFirebase