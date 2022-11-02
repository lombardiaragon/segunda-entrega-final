import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(coleccion,esquema,hola){
        super("carritos",{
            productos:{type:Array, required:true}
        })
        this.hola=hola
    }
    // trabadiiiiiisimo
    async saveNewProd(id,newProd){
        const carrito=await super.findById(id)
        carrito.productos.push(newProd)
        await this.query.doc(id).set(carrito)
        
        return carrito;
    }
}

export default DaoCarritoFirebase