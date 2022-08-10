module.exports = (sequelize, Sequelize) => {
    const Mensagem = sequelize.define("mensagem", {
      nome_usuario: {
        type: Sequelize.STRING
      },
      email_usuario: {
        type: Sequelize.STRING
      },
      mensagem_usuario: {
        type: Sequelize.STRING
      },
    })
  
    return Mensagem
  }
  