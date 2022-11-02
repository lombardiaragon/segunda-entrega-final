import { Router } from "express";
import daos from "../daos/index.js";

  
const routerCart=Router()


// ● POST '/' -> crea un carrito y lo devuelve con su id 
// asignado.
routerCart.post('/', async(req,res)=>{
    const newCart= req.body
    const { carritoDao } = await daos();
    const msg=await carritoDao.save(newCart)

    res.send({message: msg})
})

// ● DELETE '/:id' -> elimina un carrito según su id.
routerCart.delete('/:id', async(req,res)=>{
    const{id}=req.params
    const { carritoDao } = await daos();

    const msg=await carritoDao.delete(id)
    res.send({message: msg})

})

// ● GET '/:id/productos' -> devuelve todos los productos guardados en el carrito.
routerCart.get('/:id/productos', async(req,res)=>{
    const{id}=req.params
    const { carritoDao } = await daos();

    const prodsInCart= await carritoDao.findById(id)
    res.send({prodsInCart})
})

// ● POST: '/:id/productos' - Para incorporar productos al carrito por su id de producto
routerCart.post('/:id/productos', async(req,res)=>{
    const newProd= req.body
    const{id}=req.params
    const { carritoDao } = await daos();

    const msg=await carritoDao.saveNewProd(id,newProd)
    res.send({message: msg})
})

// ● DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto.
routerCart.delete('/:id/productos/:id_prod', async(req,res)=>{
    const{id,id_prod}=req.params

    const msg=await DB.deleteProdInCart(id,id_prod)
    res.send({message:msg})
})


export default routerCart