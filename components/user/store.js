const Model = require('./model');

const getUsers = async(name = null) => {
    if(!name){

        return Model.find();
    }

    return Model.find({
        name
    })
}
const addUser = async (user) => {
    const newUser = new Model(user);
    newUser.save();
}

module.exports = {
    addUser, 
    getUsers
}