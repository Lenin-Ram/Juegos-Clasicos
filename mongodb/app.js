const mongoose = require("mongoose");

const url = 'mongodb://localhost/mongo1'


mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
.then( () => console.log("Conectado a Mongo"))
.catch((e) => console.log("La conexion no se establecio" + e))


moongose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
.then( () => console.log("Conectado a Mongo"))
.catch((e) => console.log("La conexion no se establecio" + e))

const personaSchema = moongose.Schema({
    nombre:String,
    edad:Number,
    pais:String
})

const personaModel = moongose.model('personas', personaSchema)

const Mostrar = async ()=>{
    const persona = await personaModel.find()
    console.log(personas)
} 

//CREAR
const crear = async()=>{
    const persona = new personaModel({
        nombre:"juan",
        edad:24,
        pais:Bolivia
    })
    const resultado = await persona.save()
    console.log(resultado);
}

//Mostrar()

crear()