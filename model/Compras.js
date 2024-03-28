import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Compra = sequelize.define('Compra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    },
    produto: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.FLOAT
    }
})

export { Compra }