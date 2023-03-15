module.exports = (sequelize, DataTypes) => {
    return sequelize.define("products", {
        
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

        imageURL: DataTypes.STRING,
        description: DataTypes.STRING
    }, 
    {underscored: true}
    );
};