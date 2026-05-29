const mongoose = require("mongoose");
require("dns").setDefaultResultOrder("ipv4first");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb://isabelabbastos28_db_user:isj2hZePxmYcBNAi@ac-zjzb3mx-shard-00-00.s2n80mj.mongodb.net:27017,ac-zjzb3mx-shard-00-01.s2n80mj.mongodb.net:27017,ac-zjzb3mx-shard-00-02.s2n80mj.mongodb.net:27017/?ssl=true&replicaSet=atlas-13m33l-shard-0&authSource=admin&appName=Cluster0"
    );

    console.log("Banco de dados conectado com sucesso");
  } catch (err) {
    console.log("Erro ao tentar conectar ao banco de dados:", err);
  }
};

module.exports = connectDatabase;