module.exports = (sequelize, DataTypes) => {
    return sequelize.define("ratings", {
        
        rating_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        rating: DataTypes.DOUBLE
    }, 
    {underscored: true}
    );
};