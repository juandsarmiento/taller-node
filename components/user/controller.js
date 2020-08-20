const store = require('./store');

const getUsers = (name) => {
    if(!name){
        store.getUsers();
    }
    
    return store.getUsers(name);
}
const addUser = (name) => {
    if(!name){

        return Promise.reject('Invalid data!');
    }

    return store.addUser({name})
}

module.exports = {
    addUser,
    getUsers
}