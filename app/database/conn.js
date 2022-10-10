const mongoose =  require('mongoose');
const DB = process.env.DATABASE;

   
        //mongoDB connection string
         mongoose.connect(DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then(()=>{
           console.log('Database connection successful');
        }).catch((err)=>{
            console.log("No connection")
        })
    

       


