const UserService = require('../services/user.services');
class UserController {
    async showAllUsers(request, h) {
        const result = await UserService.showAllUsers();
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async showOneUser(request, h) {
        const idUser = request.params.idUser;
        const result = await UserService.showOneUser(idUser);
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
        const result = await UserService.create(grade, email, password);
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
        const result = await UserService.update(grade, email, password, confirmed, idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async validate(request, h) {
        const idUser = request.params.idUser;
        const idAdmin = request.payload.idAdmin;
        const result = await UserService.validateUser(idUser, idAdmin);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

    async delete(request, h) {
        const idUser = request.params.idUser;
        const result = await UserService.delete(idUser);
        if (!result.error){
            return h.response(result.body).code(result.response.statusCode);
        } else {
            return h.response(result.error).code(result.response.statusCode);
        }
    };

}

module.exports = new UserController();