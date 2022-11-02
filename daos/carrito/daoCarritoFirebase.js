import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(){
        super("carritos",{
            productos:{type:[], required:true, default:[]}
        })
    }
    // trabadiiiiiisimo
    async saveNewProd(id){
        const carrito=await super.findById(id)
        // carrito.productos.push(newProd)
        // await this.query.doc(id).set(carrito)
        
        return console.log('carritossssss',carrito.productos.length);
    }
}

export default DaoCarritoFirebase