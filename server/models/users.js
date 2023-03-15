module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: DataTypes.STRING(100),
        last_name: DataTypes.STRING(100),

        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            allowNull: false,
            type: DataTypes.STRING(100)
        }
    }, 
    {underscored: true}
    );
};