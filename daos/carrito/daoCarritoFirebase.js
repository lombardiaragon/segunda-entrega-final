import ContenedorFirebase from "../../contenedores/contenedorFirebase.js";

class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(){
        super("carritos",{
            timesTamp:Date,
            productos:{type:[], required:true, default:[]} //no me lo crea por defecto
        })
    }
    // no me saleeee
    async saveNewProd(id,newProd){
        const querySnapshot=await super.findAll()
        let data=querySnapshot.find(el=>el.id==id)

        await this.query.doc(id).update({productos:newArray})

        return console.log('carritossssss',data.data());
    }
}

export default DaoCarritoFirebase