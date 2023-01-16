const user = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataType.STRING,
            allowNull: false //não permitir nulo
        },
        lastName: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users'
    }
    )

    return User //NÃO ESQUECER DE RETORNAR O OBJETOOO
}

module.exports = user
