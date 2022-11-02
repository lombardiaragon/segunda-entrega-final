import ContenedorMongo from "./contenedores/contenedorMongo.js";

(async ()=> {
        const pruebaMongo=new ContenedorMongo("cartoon",{
        name:String,
        productos:{type:Array, required:true,default:[]}

    })
    console.log(await pruebaMongo.save({name:'caja',productos:[]}))
})()