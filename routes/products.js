import { Router } from 'express';
import daos from '../daos/index.js';

const routerProds=Router()

// Para chequear si se tienen permisos de administrador
let isAdmin=true
const Private=(req,res,next)=>{
    if(isAdmin){
        next()
    }
    else{
        res.status(403).send({error:'Se requiere permiso de administrador'})
    }
}


// ● GET '/api/productos' -> devuelve todos los productos.
routerProds.get('/', async (req,res)=>{
    const { productosDao }=await daos()
    const Productos= await productosDao.findAll()
    res.send({Productos})
})

// ● POST '/api/productos' -> incorporar producto al listado(administrador)
routerProds.post('/',Private, async(req,res)=>{
    const newProd= req.body
    const { productosDao } = await daos();

    const msg= await productosDao.save(newProd)
    res.send({message: msg})

})

// ● GET '/api/productos/:id' -> devuelve un producto según su id.
routerProds.get('/:id', async(req,res)=>{
    routerProds.use(Private)
    const{id}=req.params
    const { productosDao } = await daos();

    const msg= await productosDao.findById(id)
    res.send({msg})
})



// ● PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
routerProds.put('/:id',Private, async(req,res)=>{
    const{id}=req.params
    const newProd=req.body
    const { productosDao } = await daos();

    const msg=await productosDao.update(id,newProd)
    res.send({message: msg})
})

// ● DELETE '/api/productos/:id' -> elimina un producto según su id.
routerProds.delete('/:id', async(req,res)=>{
    const{id}=req.params
    const { productosDao } = await daos();

    const msg=await productosDao.delete(id)
    res.send({message: msg})
})


export default routerProds