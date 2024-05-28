import mongoose from 'mongoose';


const DBconnection = async () => {
    const MONGODB_URL = `mongodb://user:1234@ac-cicfs51-shard-00-00.klge1kt.mongodb.net:27017,ac-cicfs51-shard-00-01.klge1kt.mongodb.net:27017,ac-cicfs51-shard-00-02.klge1kt.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ng4ij-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URL,{ useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with the database ',error.message);
    }
}

export default DBconnection;