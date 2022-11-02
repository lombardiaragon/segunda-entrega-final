import { Router } from 'express';
import daos from './daos/index.js';

const routerProds=Router()

// (async () => {
//     const { productosDao } = await daos();
//     await productosDao.save({
//       name: "Bulbasaur",
//       dex: 1,
//       types: ["Grass", "Poison"],
//     });
//     console.log(await productosDao.findAll());
//     //  console.log(await pokemonMongo.findByName("Bulbasaur"));
//     //console.log(await trainerMongo.findById("635c56101795f3da84d46c51"));
//   })();

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
        const Productos= await DB.getAll()
        res.send({Productos})
})

// ● GET '/api/productos/:id' -> devuelve un producto según su id.
routerProds.get('/:id', async(req,res)=>{
    routerProds.use(Private)
    const{id}=req.params

    const msg= await DB.getById(id)
    res.send({msg})
})

// ● POST '/api/productos' -> incorporar producto al listado(administrador)
routerProds.post('/',Private, async(req,res)=>{
    const newProd= req.body
    const msg= await DB.save(newProd)
    res.send({message: msg})

})

// ● PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
routerProds.put('/:id',Private, async(req,res)=>{
    const{id}=req.params
    const newProd=req.body

    const msg=await DB.updateById(id,newProd)
    res.send({message: msg})
})

// ● DELETE '/api/productos/:id' -> elimina un producto según su id.
routerProds.delete('/:id', async(req,res)=>{
    const{id}=req.params
    const msg=await DB.deleteById(id)
    res.send({message: msg})
})


export default routerProds