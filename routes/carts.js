import { Router } from "express";
import daos from "../daos/index.js";

const routerCart=Router()

// (async () => {
//     const { carritoDao } = await daos();
//     await carritoDao.save({
//       name: "Bulbasaur",
//       dex: 1,
//       types: ["Grass", "Poison"],
//     });
//     console.log(await carritoDao.findAll());
//     //  console.log(await pokemonMongo.findByName("Bulbasaur"));
//     //console.log(await trainerMongo.findById("635c56101795f3da84d46c51"));
//   })();

// ● POST '/' -> crea un carrito y lo devuelve con su id 
// asignado.
routerCart.post('/', async(req,res)=>{
    const newCart= req.body

    const msg=await DB.saveCart(newCart)

    res.send({message: msg})
})

// ● DELETE '/:id' -> elimina un carrito según su id.
routerCart.delete('/:id', async(req,res)=>{
    const{id}=req.params

    const msg=await DB.deleteById(id)
    res.send({message: msg})

})

// ● GET '/:id/productos' -> devuelve todos los productos guardados en el carrito.
routerCart.get('/:id/productos', async(req,res)=>{
    const{id}=req.params
    const prodsInCart= await DB.getById(id)
    res.send({prodsInCart})
})

// ● POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
routerCart.post('/:id/productos', async(req,res)=>{
    const newProd= req.body
    const{id}=req.params

    const msg=await DB.saveProd(id,newProd)
    res.send({message: msg})
})

// ● DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto.
routerCart.delete('/:id/productos/:id_prod', async(req,res)=>{
    const{id,id_prod}=req.params

    const msg=await DB.deleteProdInCart(id,id_prod)
    res.send({message:msg})
})


export default routerCart