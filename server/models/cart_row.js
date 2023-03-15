module.exports = (sequelize, DataTypes) => {
    return sequelize.define("cart_row", {
        
        row_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        amount: DataTypes.DOUBLE
    }, 
    {underscored: true}
    );
};