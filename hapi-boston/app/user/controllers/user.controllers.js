const Request = require('request');
const UserModel = require('../models/user.models');
class UserController {
    async showAllUsers(request, h) {
        const result = await UserModel.showAllUsers();
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showOneUser(request, h) {
        const idUser = request.params.idUser;
        const result = await UserModel.showOneUser(idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async create(request, h) {
        const grade = request.payload.grade;
        const email = request.payload.email;
        const password = request.payload.password;
        const result = await UserModel.create(grade, email, password);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async update(request, h) {
        const idUser = request.params.idUser;
        const grade = request.payload.grade;
        const email = request.payload.email;
        const password = request.payload.password;
        const confirmed = request.payload.confirmed;
        const result = await UserModel.update(grade, email, password, confirmed, idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async validate(request, h) {
        const idUser = request.params.idUser;
        const idAdmin = request.payload.idAdmin;
        const result = await UserModel.validateUser(idUser, idAdmin);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async delete(request, h) {
        const idUser = request.params.idUser;
        const result = await UserModel.delete(idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

}

module.exports = new UserController();