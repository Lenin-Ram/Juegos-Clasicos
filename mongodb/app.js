const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/mongo1'


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
.then( () => console.log("Conectado a Mongo"))
.catch((e) => console.log("La conexion no se establecio" + e))


mongoose.connect(url,{ 
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true, 
    useCreateIndex:true
})
.then( () => console.log("Conectado a Mongo"))
.catch((e) => console.log("La conexion no se establecio" + e))

// const personaSchema = moongose.Schema({
//     nombre:String,
//     edad:Number,
//     pais:String
// })

// const personaModel = moongose.model('personas', personaSchema)

// //MOSTRAR
// const Mostrar = async ()=>{
//     const persona = await personaModel.find()
//     console.log(personas)
// } 

// //CREAR
// const crear = async()=>{
//     const persona = new personaModel({
//         nombre:"juan",
//         edad:24,
//         pais:Bolivia
//     })
//     const resultado = await persona.save()
//     console.log(resultado);
// }

// //EDITAR
// const actualizar = async(id)=>{
//     const persona = await personaModel.updateOne({_id:id},{
//         $set:{
//             nombre:'Aaron',
//             edad:20
//         }
//     })
// }

// //ELIMINAR
// const eliminar = async(id)=>{
// const persona = personaModel.delateOne({_id:id})
// console.log(persona);
// }

// //LLAMADOS

// //Mostrar()
// //crear()
// //actualizar('61917188da6fab8e31990d4d')
// //eliminar('61917188da6fab8e31990d4d')
