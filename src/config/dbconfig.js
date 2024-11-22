import {MongoClient} from 'mongodb';


export default async function conexaoAoBanco(stringConexao){

    let mongoClient;
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("conectado ao banco de dados...");
        await mongoClient.connect();
        console.log("conexão ao MongoDB Atlas com sucesso");

        return mongoClient;
    } catch (error) {
        console.log("falha na conexão ao banco " + error);
        process.exit();
    }
}