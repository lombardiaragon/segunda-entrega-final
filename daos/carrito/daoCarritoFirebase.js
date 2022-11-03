import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(){
        super("carritos",{
            productos:{type:[], required:true, default:[]}
        })
    }
    // no funciona
    async saveNewProd(id,newProd){
        const querySnapshot=await super.findAll()
        // const data=querySnapshot.find(el=>el.id==id)
        querySnapshot.forEach(doc=>console.log(doc.data()))
        

        
        
        return console.log('carritossssss');
    }
}

export default DaoCarritoFirebase