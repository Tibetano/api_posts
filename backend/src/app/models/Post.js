const post = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
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
        tableName: 'tb_posts'
    })

    return Post //NÃO ESQUECER DE RETORNAR O OBJETOOOoooooooooooooooooooooooooooooooooooooo
}

module.exports = post