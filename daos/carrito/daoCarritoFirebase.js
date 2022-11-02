import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(coleccion,esquema,hola){
        super("carritos",{
            productos:{type:[], required:true, default:[]}
        })
        this.hola=hola
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