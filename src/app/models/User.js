const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false //não permitir nulo
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users'
    }
    )

    return User //NÃO ESQUECER DE RETORNAR O OBJETOOO
}

module.exports = user
