const express = require('express');
const { createuser, loginuser, updateuser, logoutuser, adminupdateuser, deleteuser, getalluser, getuser, admingetuser } = require('../controllers/usercontroller');
const { Authorization, authorizerole } = require('../middleware/auth')
const app = express.Router()



exports.CreateUser = app.post('/create/user', createuser)
exports.LoginUser = app.post('/login/user', loginuser)
exports.UpdateUser = app.put('/update/user', Authorization, updateuser)
exports.LogoutUser = app.get('/logout/user', Authorization, logoutuser)
exports.GetUser = app.get('/me/user',Authorization,getuser)

// admin routes
exports.AdminUpdateuser = app.put('/admin/update/user/:id', Authorization, authorizerole('admin'), adminupdateuser)
exports.AdminRemoveUser = app.delete('/admin/delete/user/:id', Authorization , authorizerole('admin'), deleteuser)
exports.GetAllUSer = app.get('/getall/user', Authorization , authorizerole('admin'), getalluser)
exports.AdminGetUser = app.get('/admin/getuser/:id', Authorization , authorizerole('admin'), admingetuser)