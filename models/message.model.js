module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
    })
  
    return Message
  }
  