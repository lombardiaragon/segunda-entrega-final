import DaoProductosMongo from "./daos/productos/daoProdsMongo.js"

(async ()=> {
        const pruebaProdsMongo=new DaoProductosMongo()
    // console.log(await pruebaProdsMongo.save({name:'caja',description:'para embalar',price:150,stock:20}))
    console.log(await pruebaProdsMongo.findById({_id:'636253bdc4f61f84939818ac'}))
    // console.log(await pruebaProdsMongo.delete({_id:'636254971830557a30a6ff21'}))
    // console.log(await pruebaProdsMongo.update({_id:'6362548af6700a5e86d7dca2',name:'zapatos',description:'para correr',price:100,stock:100}))

})()