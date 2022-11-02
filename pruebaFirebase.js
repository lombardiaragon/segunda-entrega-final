import DaoProductosFirebase from "./daos/productos/daoProdsFirebase.js"

(async ()=> {
        const pruebaProdsFirebase=new DaoProductosFirebase()
    // console.log(await pruebaProdsFirebase.save({name:'caja',description:'para embalar',price:150,stock:20}))
    // console.log(await pruebaProdsFirebase.findById('LUJrJLMoee1d2hw6ACVw'))
    // console.log(await pruebaProdsFirebase.delete('LUJrJLMoee1d2hw6ACVw'))
    // console.log(await pruebaProdsFirebase.update({_id:'LUJrJLMoee1d2hw6ACVw',name:'zapatos',description:'para correr',price:100,stock:100}))
    pruebaProdsFirebase.pruebaDaoFirebase()

})()