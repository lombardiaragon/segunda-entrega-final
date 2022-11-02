import ContenedorMongo from "../../contenedores/contenedorMongo.js";

class DaoCarritoMongo extends ContenedorMongo{
    constructor(){
        super("carritos",{
            // _id:{type:String, required:true},
            productos:{type:Array, required:true}
        })
    }
    async eliminarStock(){

    }
}

export default DaoCarritoMongo