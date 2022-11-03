import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(){
        super("carritos",{
            productos:{type:[], required:true, default:[]}
        })
    }
    // no funciona
    async saveNewProd(id,newProd){
        const carrito=await super.findById(id)
        carrito.productos.push(newProd)
        await this.query.doc(id).set(carrito)
        
        return console.log('carritossssss',carrito.productos.length);
    }
}

export default DaoCarritoFirebase