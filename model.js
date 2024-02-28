import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("booknotes", "postgres", "udemy", {
    host: "localhost",
    dialect: "postgres"
});

const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
    }
});
await Book.sync();

export default Book;