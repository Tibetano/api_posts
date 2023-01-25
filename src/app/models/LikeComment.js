const likeComment = (sequelize, DataTypes) => {
    const LikeComment = sequelize.define('LikeComment', {
        isLike: {
            type: DataTypes.BOOLEAN, //true=like, false = deslike, null=removeu o like, ou seja, deixou sem like ou deslike
            allowNull: true
        },
        user: {
            type: DataTypes.INTEGER, //definir esse atributo como parte da primary key
            allowNull: false
        },
        comment: {
            type: DataTypes.INTEGER, //definir esse atributo como parte da primary key
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'tb_like_comments'
    })

    return LikeComment //NÃO ESQUECER DE RETORNAR O OBJETOOOoooooooooooooooooooooooooooooooooooooo
}

module.exports = likeComment