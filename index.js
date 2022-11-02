import express from 'express'
import routerCart from './routes/carts.js'
import routerProds from './routes/products.js'

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/productos',routerProds) 
app.use('/api/carrito',routerCart)
app.get('*', (req,res)=>{
    res.status(404).send({ error : -2, descripcion: 'la ruta no existe'}
    )
})

// app.use(express.static(__dirname + '/public'))



app.listen(8080,()=>{
    try{
        console.log('iniciado')
    }
    catch(e){
        console.log('error de inicio')
    }
})
