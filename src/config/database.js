const mongoose =require("mongoose")

const connectDB = async()=>{
try{ 
  await mongoose.connect("mongodb+srv://william:123456wi@datum.tixcnfc.mongodb.net/?retryWrites=true&w=majority&appName=datum");

} 
  catch(error){
    console.error("Error al conectar a mongo" , error)
  }
}
connectDB()
module.exports= connectDB