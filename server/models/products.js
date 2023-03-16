module.exports = (sequelize, DataTypes) => {
    return sequelize.define("products", {
        
        id: {
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

        image_url: DataTypes.STRING,
        description: DataTypes.STRING
    }, 
    {underscored: true}
    );
};