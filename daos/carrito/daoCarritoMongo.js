import ContenedorMongo from "../../contenedores/contenedorMongo";

class daoCarritoMongo extends ContenedorMongo{
    constructor(coleccion,esquema,pito){
        super("carritos",esquema)
        this.pito=pito
    }
}