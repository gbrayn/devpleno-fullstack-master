const UsuarioModel = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    username: DataTypes.STRING,
    senha: DataTypes.STRING
  })

  return Usuario
}

export default UsuarioModel
