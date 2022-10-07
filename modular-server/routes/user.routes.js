const UserController = require('../controllers/user.controllers')
const {addUser,getAllUsers,findById, deleteById, updateUser} = UserController

module.exports = (app) => {
    app.get('/api/allUsers', getAllUsers)
    app.get('/api/findById/:id', findById)
    app.post('/api/addUser', addUser)
    app.put('/api/update/:id', updateUser)
    app.delete('/api/delete/:id', deleteById)
}