const comment = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'comments'
    })

    return Comment //NÃO ESQUECER DE RETORNAR O OBJETOOOoooooooooooooooooooooooooooooooooooooo
}

module.exports = comment