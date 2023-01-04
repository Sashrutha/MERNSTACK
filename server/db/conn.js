const mongoose =  require('mongoose');

const DB = process.env.DATABASE;

async function connect() {
    try{
        await mongoose.connect(DB);
        console.log("Connected");
    }catch(error)
    {
        console.error(error);
    }
}
connect();