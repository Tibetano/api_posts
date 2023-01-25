const like = (sequelize, DataTypes) => {
    const Like = sequelize.define('Like', {
        isLike: {
            type: DataTypes.BOOLEAN, //true=like, false = deslike, null=removeu o like, ou seja, deixou sem like ou deslike
            allowNull: true
        },
        user: {
            type: DataTypes.INTEGER, //definir esse atributo como parte da primary key
            allowNull: false
        },
        post: {
            type: DataTypes.INTEGER, //definir esse atributo como parte da primary key
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'likes'
    })

    return Like //NÃO ESQUECER DE RETORNAR O OBJETOOOoooooooooooooooooooooooooooooooooooooo
}

module.exports = like