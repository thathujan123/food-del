import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nthathut:qWmS5ryMsvM6Behx@cluster0.9y1yd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.